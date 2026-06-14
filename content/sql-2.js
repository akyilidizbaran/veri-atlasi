window.SINAV.register([
  {
    module: 'sql',
    id: 'sql-08-subquery',
    order: 8,
    title: 'Alt Sorgular (Subquery)',
    html: `
<h2>📖 Konu Anlatımı</h2>

<h3>Alt Sorgu (Subquery) Nedir?</h3>
<p>Alt sorgu, bir SQL sorgusunun <strong>içine yerleştirilmiş ikinci bir SELECT sorgusudur</strong>. Mantık her zaman aynıdır: önce içteki sorgu çalışır, ürettiği sonuç dıştaki sorguya verilir. Yani alt sorguyu "önce hesaplanan ara sonuç" olarak düşünebilirsin.</p>
<pre><code class="lang-sql">SELECT name
FROM Employees
WHERE salary &gt; (SELECT AVG(salary) FROM Employees);</code></pre>
<p>Burada iç sorgu önce ortalama maaşı hesaplar (örneğin 32.000), sonra dış sorgu sanki <code>WHERE salary &gt; 32000</code> yazılmış gibi çalışır. Sonuç: <strong>ortalamadan yüksek maaş alan çalışanların isimleri</strong>. Bu örnek sınavın klasiğidir.</p>

<h3>Tek Değer mi, Çok Satır mı? (EN KRİTİK AYRIM)</h3>
<p>Alt sorgular ikiye ayrılır ve sınav tuzaklarının çoğu bu ayrımdan gelir:</p>
<ul>
  <li><strong>Skaler (tek değer) alt sorgu:</strong> Tek satır, tek sütun döndürür. <code>=</code>, <code>&gt;</code>, <code>&lt;</code> gibi karşılaştırma operatörleriyle kullanılabilir. Örn: <code>(SELECT AVG(salary) ...)</code>, <code>(SELECT MAX(salary) ...)</code>.</li>
  <li><strong>Çok satırlı alt sorgu:</strong> Birden fazla satır döndürebilir. Bunlarla <code>IN</code>, <code>ANY</code>, <code>ALL</code> veya <code>EXISTS</code> kullanılır.</li>
</ul>
<pre><code class="lang-sql">-- TEK değer döndürür → = ile sorun yok
SELECT name FROM Employees
WHERE salary = (SELECT MAX(salary) FROM Employees);

-- ÇOK satır döndürebilir → IN gerekir
SELECT name FROM Employees
WHERE department_id IN (SELECT id FROM Departments WHERE city = 'Ankara');</code></pre>
<div class="callout warn"><p><strong>Sınav tuzağı:</strong> Çok satır döndüren bir alt sorguyu <code>=</code> ile kullanırsan sorgu <strong>HATA verir</strong> ("subquery returned more than one row"). Sınavda "bu sorgu ne döndürür?" diye sorulur ve doğru cevap "hata verir" olur — şıklarda mantıklı görünen sonuçlar çeldirici olarak durur.</p></div>

<h3>WHERE İçinde Alt Sorgu</h3>
<p>En yaygın kullanım. Filtre koşulunun sağ tarafına dinamik bir değer veya liste koyar:</p>
<pre><code class="lang-sql">-- En yüksek maaşlı çalışan(lar)
SELECT name FROM Employees
WHERE salary = (SELECT MAX(salary) FROM Employees);

-- Hiç siparişi olan müşteriler
SELECT name FROM Customers
WHERE id IN (SELECT customer_id FROM Orders);</code></pre>

<h3>SELECT İçinde Alt Sorgu</h3>
<p>Sonuç kümesine her satır için hesaplanan ek bir sütun ekler. Tek değer döndürmek zorundadır:</p>
<pre><code class="lang-sql">SELECT name,
       salary,
       (SELECT AVG(salary) FROM Employees) AS genel_ortalama
FROM Employees;</code></pre>

<h3>FROM İçinde Alt Sorgu (Türetilmiş Tablo)</h3>
<p>Alt sorgunun sonucu geçici bir tablo gibi kullanılır. Buna <strong>türetilmiş tablo (derived table)</strong> denir ve <strong>takma ad (alias) vermek zorunludur</strong>:</p>
<pre><code class="lang-sql">SELECT t.department_id, t.ortalama
FROM (SELECT department_id, AVG(salary) AS ortalama
      FROM Employees
      GROUP BY department_id) AS t
WHERE t.ortalama &gt; 30000;</code></pre>

<h3>EXISTS</h3>
<p><code>EXISTS</code>, alt sorgunun <strong>en az bir satır döndürüp döndürmediğini</strong> kontrol eder; sonuç TRUE/FALSE'tur. Değerlerle değil, "satır var mı?" sorusuyla ilgilenir:</p>
<pre><code class="lang-sql">-- En az bir çalışanı olan departmanlar
SELECT d.name FROM Departments d
WHERE EXISTS (SELECT 1 FROM Employees e
              WHERE e.department_id = d.id);</code></pre>
<p><code>NOT EXISTS</code> ise alt sorgu hiç satır döndürmezse TRUE olur (örn. hiç çalışanı olmayan departmanlar).</p>

<h3>ANY ve ALL</h3>
<p>Çok satırlı alt sorgularla karşılaştırma operatörlerini kullanmanı sağlarlar:</p>
<pre><code class="lang-sql">-- 2 numaralı departmandaki EN AZ BİR kişiden yüksek maaş (minimumdan büyük)
SELECT name FROM Employees
WHERE salary &gt; ANY (SELECT salary FROM Employees WHERE department_id = 2);

-- 2 numaralı departmandaki HERKESTEN yüksek maaş (maksimumdan büyük)
SELECT name FROM Employees
WHERE salary &gt; ALL (SELECT salary FROM Employees WHERE department_id = 2);</code></pre>
<div class="callout tip"><p><strong>Ezber hilesi:</strong> <code>&gt; ANY</code> = "listenin MİNİMUMUNDAN büyük" (biri yeter), <code>&gt; ALL</code> = "listenin MAKSİMUMUNDAN büyük" (hepsini geç). Ayrıca <code>= ANY</code> tam olarak <code>IN</code> ile aynıdır.</p></div>

<h2>⚠️ Karıştırılan Kavramlar</h2>

<div class="table-wrap"><table>
<thead><tr><th>Operatör</th><th>Alt sorgu kaç satır dönebilir?</th><th>Ne kontrol eder?</th><th>Tipik kullanım</th></tr></thead>
<tbody>
<tr><td><code>=</code>, <code>&gt;</code>, <code>&lt;</code></td><td>Yalnızca TEK satır</td><td>Değer karşılaştırması</td><td>AVG, MAX, MIN gibi tek sonuçlar</td></tr>
<tr><td><code>IN</code></td><td>Çok satır</td><td>Değer listede var mı?</td><td>id listesiyle filtreleme</td></tr>
<tr><td><code>EXISTS</code></td><td>Çok satır</td><td>Satır var mı? (TRUE/FALSE)</td><td>İlişkili kayıt kontrolü</td></tr>
<tr><td><code>ANY</code> / <code>ALL</code></td><td>Çok satır</td><td>Listeyle karşılaştırma</td><td>"birinden büyük" / "hepsinden büyük"</td></tr>
</tbody>
</table></div>

<div class="table-wrap"><table>
<thead><tr><th>İfade</th><th>Anlamı</th></tr></thead>
<tbody>
<tr><td><code>salary &gt; ANY (liste)</code></td><td>Listenin minimumundan büyük olmak yeterli</td></tr>
<tr><td><code>salary &gt; ALL (liste)</code></td><td>Listenin maksimumundan büyük olmalı</td></tr>
<tr><td><code>salary = ANY (liste)</code></td><td><code>IN (liste)</code> ile birebir aynı</td></tr>
</tbody>
</table></div>

<div class="callout warn"><p><strong>Dikkat — 3 klasik tuzak:</strong> 1) Çok satırlı alt sorgu + <code>=</code> → hata. 2) FROM içindeki alt sorguya alias vermemek → hata. 3) <code>NOT IN</code> kullandığın alt sorgu <strong>NULL içeriyorsa</strong> sorgu hiç satır döndürmez — bu yüzden <code>NOT EXISTS</code> daha güvenlidir.</p></div>

<h2>🎯 Sınavda Nasıl Sorulur?</h2>
<ul>
  <li><strong>"Bu sorgu ne döndürür?"</strong> — Ortalamadan yüksek maaş örneği neredeyse her sınavda vardır; iç sorgunun önce çalıştığını bilmen yeterli.</li>
  <li><strong>"Bu sorgu neden hata verir?"</strong> — Çok satır döndüren alt sorgu <code>=</code> ile kullanılmıştır; doğru cevap "IN kullanılmalıydı".</li>
  <li><strong>Boşluk doldurma:</strong> "Birden fazla değer döndüren alt sorguyla hangi operatör kullanılır?" → IN / ANY / ALL.</li>
  <li><strong>EXISTS yorumu:</strong> EXISTS'in değer değil, satır varlığı (TRUE/FALSE) kontrol ettiğini soran teorik soru.</li>
  <li><strong>ANY/ALL karşılaştırması:</strong> "&gt; ALL ne demektir?" tarzı, minimum/maksimum mantığını test eden soru.</li>
</ul>

<h2>✍️ Örnek Sorular</h2>

<div class="quiz-q" data-answer="b">
  <p class="q-text"><strong>Soru 1.</strong> Aşağıdaki sorgu ne döndürür?</p>
  <pre><code class="lang-sql">SELECT name FROM Employees
WHERE salary &gt; (SELECT AVG(salary) FROM Employees);</code></pre>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) En yüksek maaşlı çalışanı</button>
    <button class="q-opt" data-opt="b">B) Maaşı şirket ortalamasının üzerinde olan çalışanları</button>
    <button class="q-opt" data-opt="c">C) Tüm çalışanların ortalama maaşını</button>
    <button class="q-opt" data-opt="d">D) Hata verir, çünkü WHERE içinde SELECT kullanılamaz</button>
  </div>
  <div class="q-explain"><strong>Cevap: B.</strong> İç sorgu önce ortalama maaşı (tek değer) hesaplar, dış sorgu bu değerden büyük maaşlıları listeler. A yanlış: MAX değil AVG kullanılmış. C yanlış: dış sorgu isim döndürür, ortalama değil. D yanlış: WHERE içinde alt sorgu tamamen geçerlidir.</div>
</div>

<div class="quiz-q" data-answer="c">
  <p class="q-text"><strong>Soru 2.</strong> Birden fazla satır döndürebilen bir alt sorgu, WHERE koşulunda hangi operatörle güvenle kullanılabilir?</p>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) <code>=</code></button>
    <button class="q-opt" data-opt="b">B) <code>&gt;</code></button>
    <button class="q-opt" data-opt="c">C) <code>IN</code></button>
    <button class="q-opt" data-opt="d">D) <code>LIKE</code></button>
  </div>
  <div class="q-explain"><strong>Cevap: C.</strong> IN, alt sorgunun döndürdüğü liste içinde değer arar; çok satır sorun olmaz. A ve B yalnızca tek değer döndüren alt sorgularla çalışır, çok satırda hata verir. D (LIKE) metin deseni karşılaştırır, alt sorgu listesiyle kullanılmaz.</div>
</div>

<div class="quiz-q" data-answer="a">
  <p class="q-text"><strong>Soru 3.</strong> <code>EXISTS</code> operatörü için aşağıdakilerden hangisi doğrudur?</p>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) Alt sorgu en az bir satır döndürürse TRUE olur</button>
    <button class="q-opt" data-opt="b">B) Alt sorgunun döndürdüğü değeri dış sorgudaki sütunla karşılaştırır</button>
    <button class="q-opt" data-opt="c">C) Yalnızca tek değer döndüren alt sorgularla kullanılabilir</button>
    <button class="q-opt" data-opt="d">D) Alt sorgudaki satır sayısını döndürür</button>
  </div>
  <div class="q-explain"><strong>Cevap: A.</strong> EXISTS yalnızca "satır var mı?" diye bakar; TRUE/FALSE üretir. B yanlış: değer karşılaştırması yapmaz (o IN/= işidir). C yanlış: tam tersine çok satırla rahatça çalışır. D yanlış: satır saymak COUNT'un işidir.</div>
</div>

<div class="quiz-q" data-answer="d">
  <p class="q-text"><strong>Soru 4.</strong> <code>WHERE salary &gt; ALL (SELECT salary FROM Employees WHERE department_id = 2)</code> koşulunu sağlayan bir çalışan için ne söylenebilir?</p>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) Maaşı 2 numaralı departmanın ortalamasından büyüktür</button>
    <button class="q-opt" data-opt="b">B) Maaşı 2 numaralı departmandaki en düşük maaştan büyüktür</button>
    <button class="q-opt" data-opt="c">C) 2 numaralı departmanda çalışmaktadır</button>
    <button class="q-opt" data-opt="d">D) Maaşı 2 numaralı departmandaki en yüksek maaştan bile büyüktür</button>
  </div>
  <div class="q-explain"><strong>Cevap: D.</strong> &gt; ALL, listedeki TÜM değerlerden büyük olmayı gerektirir; bu da maksimumdan büyük demektir. B, &gt; ANY'nin tanımıdır (minimumdan büyük). A ortalamayla ilgilidir, sorguda AVG yok. C departman bilgisiyle ilgisizdir.</div>
</div>

<div class="quiz-q" data-answer="b">
  <p class="q-text"><strong>Soru 5.</strong> Ankara'da <strong>birden fazla</strong> departman olduğu biliniyor. Aşağıdaki sorgu çalıştırılırsa ne olur?</p>
  <pre><code class="lang-sql">SELECT name FROM Employees
WHERE department_id = (SELECT id FROM Departments
                       WHERE city = 'Ankara');</code></pre>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) Ankara'daki tüm departmanların çalışanları listelenir</button>
    <button class="q-opt" data-opt="b">B) Sorgu hata verir, çünkü alt sorgu birden fazla satır döndürür</button>
    <button class="q-opt" data-opt="c">C) Yalnızca ilk bulunan departmanın çalışanları listelenir</button>
    <button class="q-opt" data-opt="d">D) Boş sonuç döner</button>
  </div>
  <div class="q-explain"><strong>Cevap: B.</strong> <code>=</code> operatörü tek değer bekler; alt sorgu birden fazla satır döndürdüğü için çalışma zamanı hatası oluşur. Doğru yazım <code>IN</code> kullanmaktır. A, IN kullanılsaydı doğru olurdu — en güçlü çeldirici budur. C ve D standart SQL davranışı değildir.</div>
</div>

<h2>🔁 Mini Tekrar</h2>
<div class="table-wrap"><table>
<thead><tr><th>Kavram</th><th>Tek cümlelik özet</th></tr></thead>
<tbody>
<tr><td>Subquery</td><td>Önce iç sorgu çalışır, sonucu dış sorguya verilir</td></tr>
<tr><td>Tek değerli alt sorgu</td><td><code>=</code>, <code>&gt;</code>, <code>&lt;</code> ile kullanılabilir (AVG, MAX, MIN)</td></tr>
<tr><td>Çok satırlı alt sorgu</td><td><code>IN</code>, <code>ANY</code>, <code>ALL</code>, <code>EXISTS</code> gerekir; <code>=</code> hata verir</td></tr>
<tr><td>FROM içinde alt sorgu</td><td>Türetilmiş tablo; alias zorunlu</td></tr>
<tr><td><code>EXISTS</code></td><td>Satır var mı? → TRUE/FALSE</td></tr>
<tr><td><code>&gt; ANY</code></td><td>Minimumdan büyük</td></tr>
<tr><td><code>&gt; ALL</code></td><td>Maksimumdan büyük</td></tr>
</tbody>
</table></div>
`
  },
  {
    module: 'sql',
    id: 'sql-09-insert-update-delete',
    order: 9,
    title: 'INSERT, UPDATE, DELETE',
    html: `
<h2>📖 Konu Anlatımı</h2>

<p>Bu üç komut, verinin kendisini değiştiren <strong>DML (Data Manipulation Language)</strong> komutlarıdır: <code>INSERT</code> ekler, <code>UPDATE</code> günceller, <code>DELETE</code> siler. SELECT veriyi sadece okur; bu üçlü ise veriyi değiştirir.</p>

<h3>INSERT — Yeni Satır Ekleme</h3>
<pre><code class="lang-sql">INSERT INTO Employees (name, salary)
VALUES ('Ali', 30000);</code></pre>
<p>Sütun listesi verirsen, VALUES içindeki değerler <strong>bu listedeki sırayla</strong> eşleşir. Listede olmayan sütunlara NULL ya da varsa DEFAULT değeri atanır.</p>

<h3>Sütun Listesi Vermeden INSERT</h3>
<pre><code class="lang-sql">INSERT INTO Employees
VALUES (5, 'Ayse', 28000, 2);</code></pre>
<p>Sütun listesi yoksa <strong>tablonun tanımındaki sırayla TÜM sütunlara</strong> değer vermek zorundasın. Sütun sırası değişirse veya yeni sütun eklenirse bu sorgu bozulur — bu yüzden sütun listesi yazmak her zaman daha güvenlidir. Değer sayısı sütun sayısıyla eşleşmezse sorgu hata verir.</p>

<h3>Çoklu Satır INSERT</h3>
<pre><code class="lang-sql">INSERT INTO Employees (name, salary)
VALUES ('Ali', 30000),
       ('Veli', 32000),
       ('Zeynep', 41000);</code></pre>
<p>Tek komutta birden fazla satır eklenebilir; her satır parantez içinde, virgülle ayrılır. Ayrıca <code>INSERT INTO ... SELECT ...</code> ile başka bir sorgunun sonucunu da tabloya ekleyebilirsin.</p>

<h3>UPDATE — Mevcut Satırları Güncelleme</h3>
<pre><code class="lang-sql">UPDATE Employees
SET salary = 35000
WHERE name = 'Ali';</code></pre>
<p><code>SET</code> ile hangi sütunun hangi değere döneceğini, <code>WHERE</code> ile hangi satırların etkileneceğini belirtirsin. Birden çok sütun virgülle güncellenir:</p>
<pre><code class="lang-sql">UPDATE Employees
SET salary = salary * 1.10, department_id = 3
WHERE id = 7;</code></pre>
<p>Dikkat: <code>salary = salary * 1.10</code> gibi ifadelerle mevcut değer üzerinden hesap yapılabilir (yüzde 10 zam).</p>

<h3>DELETE — Satır Silme</h3>
<pre><code class="lang-sql">DELETE FROM Employees
WHERE name = 'Ali';</code></pre>
<p>WHERE koşuluna uyan satırları siler. <strong>Tablonun yapısı (sütunlar, constraintler) yerinde kalır</strong>; sadece veri gider.</p>

<div class="callout warn"><p><strong>EN KRİTİK UYARI — WHERE'siz UPDATE/DELETE:</strong> <code>UPDATE Employees SET salary = 50000;</code> → WHERE yok, <strong>TÜM çalışanların maaşı 50000 olur</strong>. <code>DELETE FROM Employees;</code> → WHERE yok, <strong>TÜM satırlar silinir</strong>. Sınav bunu çok sever: şıklarda "hata verir" çeldiricisi bulunur ama bu sorgular hata vermez, sessizce tüm tabloyu etkiler!</p></div>

<div class="callout tip"><p><strong>İpucu:</strong> UPDATE ve DELETE sorusu görünce ilk refleksin "WHERE var mı?" diye bakmak olsun. WHERE yoksa cevap neredeyse her zaman "tüm tablo etkilenir" şıkkıdır.</p></div>

<h2>⚠️ Karıştırılan Kavramlar</h2>

<div class="table-wrap"><table>
<thead><tr><th>Komut</th><th>Ne yapar?</th><th>WHERE alır mı?</th><th>WHERE yoksa?</th></tr></thead>
<tbody>
<tr><td><code>INSERT</code></td><td>Yeni satır ekler</td><td>Almaz</td><td>—</td></tr>
<tr><td><code>UPDATE</code></td><td>Mevcut satırları değiştirir</td><td>Alır (opsiyonel)</td><td>TÜM satırlar güncellenir</td></tr>
<tr><td><code>DELETE</code></td><td>Satır siler</td><td>Alır (opsiyonel)</td><td>TÜM satırlar silinir</td></tr>
</tbody>
</table></div>

<div class="table-wrap"><table>
<thead><tr><th>Karıştırılan ikili</th><th>Fark</th></tr></thead>
<tbody>
<tr><td><code>DELETE</code> vs <code>DROP</code></td><td>DELETE satırları siler, tablo kalır; DROP tabloyu yapısıyla birlikte yok eder</td></tr>
<tr><td><code>DELETE</code> vs <code>TRUNCATE</code></td><td>DELETE WHERE alabilir ve DML'dir; TRUNCATE tüm satırları hızlıca siler, WHERE almaz, DDL'dir</td></tr>
<tr><td><code>UPDATE</code> vs <code>ALTER</code></td><td>UPDATE veriyi değiştirir; ALTER tablonun yapısını (sütun ekleme vb.) değiştirir</td></tr>
</tbody>
</table></div>

<div class="callout warn"><p><strong>Tuzak:</strong> "Tablodaki bir sütunun adını değiştirmek için UPDATE kullanılır" ifadesi YANLIŞTIR. UPDATE veriyle uğraşır; yapı değişikliği <code>ALTER TABLE</code> işidir. Şıklarda bu ikisi sıkça yer değiştirir.</p></div>

<h2>🎯 Sınavda Nasıl Sorulur?</h2>
<ul>
  <li><strong>"Bu sorgu çalışınca ne olur?"</strong> — WHERE'siz UPDATE/DELETE verilir; doğru cevap "tüm tablo etkilenir", çeldirici "hata verir".</li>
  <li><strong>Söz dizimi sorusu:</strong> "INSERT INTO tablo ... VALUES" kalıbındaki eksik kelimeyi tamamlatma (INTO, SET, FROM karışık şıklarda).</li>
  <li><strong>Eşleştirme:</strong> "Mevcut bir kaydın değerini değiştiren komut hangisidir?" → UPDATE (çeldiriciler: ALTER, MODIFY, CHANGE).</li>
  <li><strong>Değer-sütun eşleşmesi:</strong> Sütun listesi ile VALUES sırasının uyumu veya değer sayısı uyuşmazlığının hata vermesi.</li>
  <li><strong>DELETE vs DROP vs TRUNCATE</strong> farkı bu konunun devamı olarak hemen her sınavda sorulur (detaylar Tuzak Sorular konusunda).</li>
</ul>

<h2>✍️ Örnek Sorular</h2>

<div class="quiz-q" data-answer="a">
  <p class="q-text"><strong>Soru 1.</strong> Employees tablosuna adı 'Ali', maaşı 30000 olan yeni bir çalışan eklemek için hangi sorgu doğrudur?</p>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) <code>INSERT INTO Employees (name, salary) VALUES ('Ali', 30000);</code></button>
    <button class="q-opt" data-opt="b">B) <code>INSERT Employees SET name = 'Ali', salary = 30000;</code></button>
    <button class="q-opt" data-opt="c">C) <code>ADD INTO Employees VALUES ('Ali', 30000);</code></button>
    <button class="q-opt" data-opt="d">D) <code>UPDATE Employees VALUES ('Ali', 30000);</code></button>
  </div>
  <div class="q-explain"><strong>Cevap: A.</strong> Standart kalıp: INSERT INTO tablo (sütunlar) VALUES (değerler). B, INSERT ile SET'i karıştırır (SET, UPDATE'in parçasıdır). C'de ADD diye bir DML komutu yoktur. D'de UPDATE yeni satır eklemez, mevcut satırı değiştirir.</div>
</div>

<div class="quiz-q" data-answer="d">
  <p class="q-text"><strong>Soru 2.</strong> Tabloda <strong>var olan</strong> bir kaydın değerini değiştirmek için hangi komut kullanılır?</p>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) <code>INSERT</code></button>
    <button class="q-opt" data-opt="b">B) <code>ALTER</code></button>
    <button class="q-opt" data-opt="c">C) <code>SELECT</code></button>
    <button class="q-opt" data-opt="d">D) <code>UPDATE</code></button>
  </div>
  <div class="q-explain"><strong>Cevap: D.</strong> UPDATE ... SET ... WHERE mevcut satırların değerini değiştirir. A yeni satır ekler. B tablo YAPISINI değiştirir (sütun ekleme vb.) — en güçlü çeldirici budur. C yalnızca okur, değiştirmez.</div>
</div>

<div class="quiz-q" data-answer="c">
  <p class="q-text"><strong>Soru 3.</strong> Aşağıdaki sorgu çalıştırıldığında ne olur?</p>
  <pre><code class="lang-sql">UPDATE Employees SET salary = 50000;</code></pre>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) Hata verir, çünkü WHERE koşulu zorunludur</button>
    <button class="q-opt" data-opt="b">B) Yalnızca ilk satırın maaşı 50000 olur</button>
    <button class="q-opt" data-opt="c">C) Tablodaki TÜM çalışanların maaşı 50000 olur</button>
    <button class="q-opt" data-opt="d">D) Hiçbir satır etkilenmez</button>
  </div>
  <div class="q-explain"><strong>Cevap: C.</strong> WHERE yazılmazsa UPDATE tüm satırlara uygulanır — sorgu tamamen geçerlidir, hata vermez. A en sık seçilen yanlıştır: WHERE opsiyoneldir. B ve D'nin SQL'de karşılığı yoktur.</div>
</div>

<div class="quiz-q" data-answer="b">
  <p class="q-text"><strong>Soru 4.</strong> Sütun listesi verilmeden yazılan <code>INSERT INTO Employees VALUES (...)</code> sorgusu için hangisi doğrudur?</p>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) Değerler istenen herhangi bir sırada yazılabilir</button>
    <button class="q-opt" data-opt="b">B) Tablonun sütun tanım sırasına uygun olarak tüm sütunlar için değer verilmelidir</button>
    <button class="q-opt" data-opt="c">C) Yalnızca primary key sütununa değer vermek yeterlidir</button>
    <button class="q-opt" data-opt="d">D) Böyle bir kullanım SQL'de geçersizdir</button>
  </div>
  <div class="q-explain"><strong>Cevap: B.</strong> Sütun listesi yoksa SQL değerleri tablo tanımındaki sırayla eşler; eksik veya fazla değer hata üretir. A yanlış: sıra serbest değildir. C yanlış: tüm sütunlar karşılanmalıdır. D yanlış: kullanım geçerlidir, sadece risklidir.</div>
</div>

<div class="quiz-q" data-answer="a">
  <p class="q-text"><strong>Soru 5.</strong> Aşağıdaki sorgu çalıştırıldığında ne olur?</p>
  <pre><code class="lang-sql">DELETE FROM Employees;</code></pre>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) Tüm satırlar silinir ancak tablo yapısı korunur</button>
    <button class="q-opt" data-opt="b">B) Tablo, yapısıyla birlikte veritabanından kaldırılır</button>
    <button class="q-opt" data-opt="c">C) Hata verir, çünkü DELETE komutu WHERE olmadan kullanılamaz</button>
    <button class="q-opt" data-opt="d">D) Yalnızca NULL içeren satırlar silinir</button>
  </div>
  <div class="q-explain"><strong>Cevap: A.</strong> WHERE'siz DELETE tüm satırları siler ama tablo (sütunlar, constraintler) yerinde kalır; sonrasında INSERT yapılabilir. B, DROP TABLE'ın işidir — klasik çeldirici. C yanlış: WHERE opsiyoneldir. D uydurmadır.</div>
</div>

<h2>🔁 Mini Tekrar</h2>
<div class="table-wrap"><table>
<thead><tr><th>Komut</th><th>Kalıp</th><th>Unutma!</th></tr></thead>
<tbody>
<tr><td><code>INSERT</code></td><td>INSERT INTO tablo (sütunlar) VALUES (değerler)</td><td>Sütun listesi yoksa tüm sütunlar, tanım sırasıyla</td></tr>
<tr><td><code>UPDATE</code></td><td>UPDATE tablo SET sütun = değer WHERE koşul</td><td>WHERE yoksa TÜM satırlar güncellenir</td></tr>
<tr><td><code>DELETE</code></td><td>DELETE FROM tablo WHERE koşul</td><td>WHERE yoksa TÜM satırlar silinir; tablo yapısı kalır</td></tr>
<tr><td>Çoklu INSERT</td><td>VALUES (...), (...), (...)</td><td>Tek komutla birden çok satır</td></tr>
<tr><td>Yapı değişikliği</td><td>UPDATE değil <code>ALTER TABLE</code></td><td>UPDATE veri, ALTER yapı değiştirir</td></tr>
</tbody>
</table></div>
`
  },
  {
    module: 'sql',
    id: 'sql-10-create-constraints',
    order: 10,
    title: 'CREATE TABLE ve Constraintler',
    html: `
<h2>📖 Konu Anlatımı</h2>

<h3>CREATE TABLE — Tablo Oluşturma</h3>
<p><code>CREATE TABLE</code> bir <strong>DDL (Data Definition Language)</strong> komutudur: veri değil, yapı oluşturur. Her sütunun adı, veri tipi ve isteğe bağlı kısıtları (constraint) belirtilir:</p>
<pre><code class="lang-sql">CREATE TABLE Students (
    id INT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    age INT CHECK (age &gt;= 18),
    email VARCHAR(100) UNIQUE
);</code></pre>
<p>Constraintler, tabloya <strong>hatalı veri girilmesini veritabanı seviyesinde engelleyen kurallardır</strong>. Kurala aykırı INSERT/UPDATE denemesi hata ile reddedilir.</p>

<h3>PRIMARY KEY — Birincil Anahtar</h3>
<p>Her satırı <strong>benzersiz şekilde tanımlar</strong>. İki kuralı birden taşır:</p>
<ul>
  <li><strong>NOT NULL</strong>: boş olamaz,</li>
  <li><strong>UNIQUE</strong>: tekrar edemez.</li>
</ul>
<p>Yani <strong>PRIMARY KEY = NOT NULL + UNIQUE</strong> bileşimidir. Bir tabloda <strong>yalnızca 1 tane</strong> primary key olabilir (ama bu anahtar birden çok sütundan oluşabilir — buna bileşik/composite key denir).</p>

<h3>FOREIGN KEY — Yabancı Anahtar</h3>
<p>Bir tablodaki sütunu, <strong>başka bir tablonun primary key'ine bağlar</strong> ve <strong>referans bütünlüğünü (referential integrity)</strong> sağlar: var olmayan bir kayda işaret eden satır eklenemez, referans verilen kayıt rastgele silinemez.</p>
<pre><code class="lang-sql">CREATE TABLE Orders (
    id INT PRIMARY KEY,
    student_id INT,
    FOREIGN KEY (student_id) REFERENCES Students(id)
);</code></pre>
<p>Örn. Students tablosunda id=99 yoksa, Orders'a student_id=99 olan satır eklemeye çalışmak hata verir.</p>

<h3>Diğer Constraintler</h3>
<ul>
  <li><strong>NOT NULL:</strong> Sütun boş (NULL) bırakılamaz.</li>
  <li><strong>UNIQUE:</strong> Sütundaki değerler tekrar edemez. Bir tabloda <strong>birden çok</strong> UNIQUE sütun olabilir ve (çoğu sistemde) UNIQUE sütun NULL kabul edebilir.</li>
  <li><strong>DEFAULT:</strong> Değer verilmezse kullanılacak varsayılanı belirler: <code>city VARCHAR(50) DEFAULT 'Ankara'</code>.</li>
  <li><strong>CHECK:</strong> Değerin bir koşulu sağlamasını zorunlu kılar: <code>CHECK (age &gt;= 18)</code> → 17 girilirse INSERT reddedilir.</li>
</ul>

<h3>AUTO_INCREMENT / IDENTITY — Otomatik Artan Kimlik</h3>
<p>Yeni satır eklendikçe id'nin otomatik artmasını sağlar; değer vermek gerekmez. Sistemden sisteme adı değişir:</p>
<pre><code class="lang-sql">-- MySQL
id INT AUTO_INCREMENT PRIMARY KEY

-- SQL Server
id INT IDENTITY(1,1) PRIMARY KEY</code></pre>
<p><code>IDENTITY(1,1)</code> = 1'den başla, 1'er artır. Genellikle primary key sütununda kullanılır.</p>

<h2>⚠️ Karıştırılan Kavramlar</h2>

<div class="table-wrap"><table>
<thead><tr><th>Özellik</th><th>PRIMARY KEY</th><th>UNIQUE</th><th>FOREIGN KEY</th></tr></thead>
<tbody>
<tr><td>Tekrar edebilir mi?</td><td>Hayır</td><td>Hayır</td><td>Evet (aynı kayda çok referans olabilir)</td></tr>
<tr><td>NULL olabilir mi?</td><td>Hayır</td><td>Evet (çoğu sistemde)</td><td>Evet (referans zorunlu değilse)</td></tr>
<tr><td>Tabloda kaç tane?</td><td>Yalnızca 1</td><td>Birden çok olabilir</td><td>Birden çok olabilir</td></tr>
<tr><td>Görevi</td><td>Satırı benzersiz tanımlamak</td><td>Tekrarı engellemek</td><td>Tablolar arası referans bütünlüğü</td></tr>
</tbody>
</table></div>

<div class="callout warn"><p><strong>Tuzak:</strong> "PRIMARY KEY ile UNIQUE aynıdır" çeldiricisine dikkat! İki fark var: 1) PK <strong>NULL kabul etmez</strong>, UNIQUE çoğu sistemde edebilir; 2) tabloda <strong>tek PK</strong> ama <strong>birden çok UNIQUE</strong> olabilir. Bir diğer tuzak: "FOREIGN KEY benzersizliği sağlar" — hayır, FK tekrar edebilir; benzersizlik PK/UNIQUE işidir.</p></div>

<div class="callout info"><p><strong>DDL vs DML hatırlatması:</strong> CREATE, ALTER, DROP, TRUNCATE → DDL (yapı). SELECT, INSERT, UPDATE, DELETE → DML (veri). Sınavda "hangisi DDL'dir?" diye sorulduğunda TRUNCATE'in de DDL olduğunu unutma.</p></div>

<h2>🎯 Sınavda Nasıl Sorulur?</h2>
<ul>
  <li><strong>"PRIMARY KEY hangi iki kısıtın bileşimidir?"</strong> → NOT NULL + UNIQUE. Doğrudan ezber sorusu.</li>
  <li><strong>"Bir tabloda kaç primary key olabilir?"</strong> → 1 (ama birden çok sütundan oluşabilir; şıklar bunu karıştırtır).</li>
  <li><strong>CHECK yorumu:</strong> "CHECK (age &gt;= 18) olan tabloya age=16 eklenirse ne olur?" → INSERT hata verir, satır eklenmez.</li>
  <li><strong>FOREIGN KEY'in görevi:</strong> "Referans bütünlüğünü hangi kısıt sağlar?" → FOREIGN KEY.</li>
  <li><strong>Kod okuma:</strong> Bir CREATE TABLE ifadesi verilip "hangi INSERT hata verir?" diye sorulur — her constraint'i tek tek kontrol etmen gerekir.</li>
</ul>

<h2>✍️ Örnek Sorular</h2>

<div class="quiz-q" data-answer="c">
  <p class="q-text"><strong>Soru 1.</strong> PRIMARY KEY kısıtı, aşağıdaki hangi iki kısıtın bileşimi gibi davranır?</p>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) NOT NULL + DEFAULT</button>
    <button class="q-opt" data-opt="b">B) UNIQUE + CHECK</button>
    <button class="q-opt" data-opt="c">C) NOT NULL + UNIQUE</button>
    <button class="q-opt" data-opt="d">D) FOREIGN KEY + UNIQUE</button>
  </div>
  <div class="q-explain"><strong>Cevap: C.</strong> Primary key boş olamaz (NOT NULL) ve tekrar edemez (UNIQUE). DEFAULT varsayılan değer, CHECK koşul kontrolüdür; benzersizlik veya zorunlulukla ilgileri yoktur. FOREIGN KEY ise başka tabloya referanstır.</div>
</div>

<div class="quiz-q" data-answer="b">
  <p class="q-text"><strong>Soru 2.</strong> <code>age INT CHECK (age &gt;= 18)</code> tanımlı bir tabloya <code>age = 16</code> değeriyle satır eklenmeye çalışılırsa ne olur?</p>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) Satır eklenir, age değeri NULL olur</button>
    <button class="q-opt" data-opt="b">B) INSERT hata verir, satır eklenmez</button>
    <button class="q-opt" data-opt="c">C) Satır eklenir, age otomatik olarak 18'e yükseltilir</button>
    <button class="q-opt" data-opt="d">D) Satır eklenir ama daha sonra otomatik silinir</button>
  </div>
  <div class="q-explain"><strong>Cevap: B.</strong> CHECK kısıtı koşulu sağlamayan değeri kabul etmez; INSERT reddedilir. A, C ve D'deki "otomatik düzeltme/silme" davranışları SQL'de yoktur — constraint ihlali her zaman hata üretir.</div>
</div>

<div class="quiz-q" data-answer="d">
  <p class="q-text"><strong>Soru 3.</strong> Bir tablodaki PRIMARY KEY ve UNIQUE kısıt sayıları için hangisi doğrudur?</p>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) Birden çok primary key, yalnızca 1 unique olabilir</button>
    <button class="q-opt" data-opt="b">B) Her ikisinden de yalnızca 1 tane olabilir</button>
    <button class="q-opt" data-opt="c">C) Her ikisinden de istenildiği kadar olabilir</button>
    <button class="q-opt" data-opt="d">D) Yalnızca 1 primary key, birden çok unique olabilir</button>
  </div>
  <div class="q-explain"><strong>Cevap: D.</strong> Tabloda tek primary key olur (birden çok sütun içerebilir ama tek kısıttır); UNIQUE ise farklı sütunlara ayrı ayrı, birden çok kez uygulanabilir. Diğer şıklar bu kuralı ters çevirir.</div>
</div>

<div class="quiz-q" data-answer="a">
  <p class="q-text"><strong>Soru 4.</strong> İki tablo arasında <strong>referans bütünlüğünü</strong> sağlayan kısıt hangisidir?</p>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) <code>FOREIGN KEY</code></button>
    <button class="q-opt" data-opt="b">B) <code>UNIQUE</code></button>
    <button class="q-opt" data-opt="c">C) <code>CHECK</code></button>
    <button class="q-opt" data-opt="d">D) <code>DEFAULT</code></button>
  </div>
  <div class="q-explain"><strong>Cevap: A.</strong> FOREIGN KEY, sütunu başka tablonun primary key'ine bağlar; var olmayan kayda referans eklenmesini engeller. UNIQUE tek tablo içinde tekrarı önler, CHECK koşul denetler, DEFAULT varsayılan değer atar — hiçbiri tablolar ARASI bütünlük sağlamaz.</div>
</div>

<div class="quiz-q" data-answer="c">
  <p class="q-text"><strong>Soru 5.</strong> PRIMARY KEY ile UNIQUE kısıtı arasındaki fark için aşağıdakilerden hangisi doğrudur?</p>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) UNIQUE sütunda değerler tekrar edebilir, primary key'de edemez</button>
    <button class="q-opt" data-opt="b">B) Primary key NULL kabul eder, UNIQUE etmez</button>
    <button class="q-opt" data-opt="c">C) UNIQUE sütun NULL kabul edebilir, primary key edemez</button>
    <button class="q-opt" data-opt="d">D) Aralarında hiçbir fark yoktur</button>
  </div>
  <div class="q-explain"><strong>Cevap: C.</strong> Her ikisi de tekrarı engeller; fark NULL'dadır: PK asla NULL olamaz, UNIQUE çoğu sistemde NULL'a izin verir. A yanlış: UNIQUE de tekrarı engeller. B tam tersidir. D yanlış: NULL ve "tabloda kaç tane olabilir" farkları vardır.</div>
</div>

<h2>🔁 Mini Tekrar</h2>
<div class="table-wrap"><table>
<thead><tr><th>Constraint</th><th>Tek cümlelik görevi</th></tr></thead>
<tbody>
<tr><td><code>PRIMARY KEY</code></td><td>Satırı benzersiz tanımlar = NOT NULL + UNIQUE; tabloda 1 tane</td></tr>
<tr><td><code>FOREIGN KEY</code></td><td>Başka tablonun PK'sine bağlar; referans bütünlüğü sağlar</td></tr>
<tr><td><code>NOT NULL</code></td><td>Sütun boş bırakılamaz</td></tr>
<tr><td><code>UNIQUE</code></td><td>Tekrar engeller; NULL kabul edebilir; birden çok olabilir</td></tr>
<tr><td><code>DEFAULT</code></td><td>Değer verilmezse varsayılanı kullanır</td></tr>
<tr><td><code>CHECK</code></td><td>Koşulu sağlamayan değeri reddeder</td></tr>
<tr><td><code>AUTO_INCREMENT / IDENTITY</code></td><td>Otomatik artan kimlik numarası üretir</td></tr>
</tbody>
</table></div>
`
  },
  {
    module: 'sql',
    id: 'sql-11-normalizasyon',
    order: 11,
    title: 'Normalizasyon',
    html: `
<h2>📖 Konu Anlatımı</h2>

<h3>Normalizasyon Nedir?</h3>
<p>Normalizasyon, veritabanı tablolarını <strong>veri tekrarını (redundancy) azaltacak ve veri tutarlılığını artıracak</strong> şekilde düzenleme sürecidir. Büyük ve tekrarlı tek tablo yerine, ilişkilerle bağlanmış küçük ve düzenli tablolar hedeflenir. Her aşamaya "normal form" (NF) denir ve kurallar kademelidir: 2NF için önce 1NF, 3NF için önce 2NF sağlanmalıdır.</p>

<h3>Neden Gerekli? Anomaliler</h3>
<p>Normalleştirilmemiş tablolarda üç tür <strong>anomali</strong> oluşur. Örnek: tek tabloda öğrenci + bölüm bilgisi tutulsun (her satırda bölüm adı tekrar ediyor).</p>
<ul>
  <li><strong>Ekleme anomalisi (insert anomaly):</strong> Henüz öğrencisi olmayan yeni bir bölümü ekleyemezsin — öğrenci alanları boş kalmak zorunda.</li>
  <li><strong>Güncelleme anomalisi (update anomaly):</strong> Bölümün adı değişirse yüzlerce satırda tek tek güncellemen gerekir; biri unutulursa veri tutarsız olur.</li>
  <li><strong>Silme anomalisi (delete anomaly):</strong> Bölümün son öğrencisini silince bölümün kendisine ait bilgi de yok olur.</li>
</ul>

<h3>1NF — Atomik Değerler</h3>
<p>Kural: <strong>her hücrede tek (atomik) değer</strong> olmalı; tekrarlayan gruplar/listeler olmamalı.</p>
<div class="table-wrap"><table>
<thead><tr><th colspan="2">1NF İHLALİ ❌</th></tr></thead>
<tbody>
<tr><td>Ali</td><td>555-1111, 555-2222</td></tr>
</tbody>
</table></div>
<div class="table-wrap"><table>
<thead><tr><th colspan="2">1NF'e UYGUN ✅</th></tr></thead>
<tbody>
<tr><td>Ali</td><td>555-1111</td></tr>
<tr><td>Ali</td><td>555-2222</td></tr>
</tbody>
</table></div>
<p>Bir hücrede virgülle ayrılmış birden çok telefon görüyorsan 1NF ihlalidir; her değer ayrı satıra (veya ayrı tabloya) taşınır.</p>

<h3>2NF — Kısmi Bağımlılık Olmamalı</h3>
<p>Kural: 1NF sağlanmalı + <strong>anahtar olmayan her sütun, bileşik anahtarın TAMAMINA bağlı olmalı</strong> (bir parçasına değil). Bu kural ancak <strong>bileşik (çok sütunlu) primary key</strong> varsa anlam kazanır.</p>
<div class="table-wrap"><table>
<thead><tr><th>ogrenci_id (PK)</th><th>ders_id (PK)</th><th>not</th><th>ogrenci_adi ❌</th></tr></thead>
<tbody>
<tr><td>1</td><td>10</td><td>85</td><td>Ali</td></tr>
<tr><td>1</td><td>20</td><td>70</td><td>Ali</td></tr>
</tbody>
</table></div>
<p><code>not</code> sütunu anahtarın tamamına (öğrenci+ders) bağlı — sorun yok. Ama <code>ogrenci_adi</code> yalnızca <code>ogrenci_id</code>'ye bağlı → <strong>kısmi bağımlılık</strong> → 2NF ihlali. Çözüm: öğrenci adını ayrı Ogrenciler tablosuna taşımak.</p>

<h3>3NF — Geçişli Bağımlılık Olmamalı</h3>
<p>Kural: 2NF sağlanmalı + <strong>anahtar olmayan sütun, başka bir anahtar olmayan sütuna bağlı olmamalı</strong> (geçişli/transitive bağımlılık yasak).</p>
<div class="table-wrap"><table>
<thead><tr><th>calisan_id (PK)</th><th>ad</th><th>bolum_id</th><th>bolum_adi ❌</th></tr></thead>
<tbody>
<tr><td>1</td><td>Ali</td><td>10</td><td>Muhasebe</td></tr>
<tr><td>2</td><td>Ayse</td><td>10</td><td>Muhasebe</td></tr>
</tbody>
</table></div>
<p><code>bolum_adi</code>, anahtara değil <code>bolum_id</code>'ye bağlı (calisan_id → bolum_id → bolum_adi) → <strong>geçişli bağımlılık</strong> → 3NF ihlali. Çözüm: Bolumler(bolum_id, bolum_adi) ayrı tablo olur, çalışan tablosunda yalnızca bolum_id (foreign key) kalır.</p>

<div class="callout tip"><p><strong>Ezber hilesi:</strong> 1NF → "hücreler ATOMİK", 2NF → "KISMİ bağımlılık yok (anahtarın TAMAMINA bağlılık)", 3NF → "GEÇİŞLİ bağımlılık yok (anahtar dışı sütunlar birbirine bağlanmaz)". Sıra: atomik → kısmi → geçişli.</p></div>

<h3>Denormalizasyon</h3>
<p>Normalizasyonun bilinçli olarak <strong>geri alınmasıdır</strong>: okuma performansını artırmak için kontrollü veri tekrarına izin verilir (örn. raporlama sistemlerinde JOIN maliyetinden kaçınmak için). Bu bir hata değil, <strong>bilinçli bir performans tercihidir</strong> — ama veri tekrarı ve tutarsızlık riskini geri getirir.</p>

<h2>⚠️ Karıştırılan Kavramlar</h2>

<div class="table-wrap"><table>
<thead><tr><th>Normal Form</th><th>Yasakladığı şey</th><th>Anahtar kelime</th></tr></thead>
<tbody>
<tr><td><strong>1NF</strong></td><td>Hücrede birden çok değer / tekrarlayan grup</td><td>Atomik değer</td></tr>
<tr><td><strong>2NF</strong></td><td>Bileşik anahtarın bir PARÇASINA bağımlılık</td><td>Kısmi bağımlılık</td></tr>
<tr><td><strong>3NF</strong></td><td>Anahtar dışı sütunun anahtar dışı sütuna bağımlılığı</td><td>Geçişli bağımlılık</td></tr>
</tbody>
</table></div>

<div class="callout warn"><p><strong>Tuzak:</strong> 2NF ve 3NF şıkları sıkça yer değiştirir. Ayırt etme yöntemi: bağımlılık <strong>anahtarın bir parçasına</strong> ise → 2NF sorunu (kısmi); bağımlılık <strong>anahtar olmayan başka bir sütuna</strong> ise → 3NF sorunu (geçişli). Ayrıca "normalizasyon her zaman performansı artırır" ifadesi yanlıştır — normalizasyon tutarlılık içindir; çok JOIN gerektirdiği için okuma performansını düşürebilir, bu yüzden denormalizasyon vardır.</p></div>

<h2>🎯 Sınavda Nasıl Sorulur?</h2>
<ul>
  <li><strong>Tanım eşleştirme:</strong> "Hücrelerde atomik değer şartı hangi normal formdur?" → 1NF.</li>
  <li><strong>Senaryo → anomali türü:</strong> "Son öğrenci silinince bölüm bilgisi de kayboldu; bu hangi anomalidir?" → silme anomalisi.</li>
  <li><strong>Senaryo → normal form ihlali:</strong> Tablo verilir, "bu tablo hangi normal formu ihlal eder?" diye sorulur — bağımlılığın kime olduğuna bak.</li>
  <li><strong>Amaç sorusu:</strong> "Normalizasyonun temel amacı nedir?" → veri tekrarını azaltmak, tutarlılığı artırmak (çeldirici: "sorguları hızlandırmak").</li>
  <li><strong>Denormalizasyon:</strong> "Bilinçli veri tekrarına izin verme" tanımıyla sorulur.</li>
</ul>

<h2>✍️ Örnek Sorular</h2>

<div class="quiz-q" data-answer="d">
  <p class="q-text"><strong>Soru 1.</strong> Birinci normal form (1NF) için temel şart aşağıdakilerden hangisidir?</p>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) Geçişli bağımlılık bulunmaması</button>
    <button class="q-opt" data-opt="b">B) Her tabloda foreign key olması</button>
    <button class="q-opt" data-opt="c">C) Kısmi bağımlılık bulunmaması</button>
    <button class="q-opt" data-opt="d">D) Her hücrede yalnızca tek (atomik) değer olması</button>
  </div>
  <div class="q-explain"><strong>Cevap: D.</strong> 1NF, hücrelerde liste/çoklu değer olmasını yasaklar. A 3NF'nin, C 2NF'nin kuralıdır — klasik karıştırma çeldiricileri. B'nin normal formlarla doğrudan ilgisi yoktur.</div>
</div>

<div class="quiz-q" data-answer="a">
  <p class="q-text"><strong>Soru 2.</strong> Normalizasyonun temel amacı nedir?</p>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) Veri tekrarını azaltıp veri tutarlılığını artırmak</button>
    <button class="q-opt" data-opt="b">B) Tüm sorguların daha hızlı çalışmasını sağlamak</button>
    <button class="q-opt" data-opt="c">C) Veritabanındaki tablo sayısını azaltmak</button>
    <button class="q-opt" data-opt="d">D) Verileri şifreleyerek güvenliği artırmak</button>
  </div>
  <div class="q-explain"><strong>Cevap: A.</strong> Normalizasyon redundancy'yi azaltır ve anomalileri önler. B tuzaktır: normalizasyon JOIN sayısını artırdığı için okuma sorgularını yavaşlatabilir bile. C tam tersidir: tablo sayısı genelde ARTAR. D'nin (şifreleme) normalizasyonla ilgisi yoktur.</div>
</div>

<div class="quiz-q" data-answer="b">
  <p class="q-text"><strong>Soru 3.</strong> Primary key'i (ogrenci_id, ders_id) olan bir tabloda <code>ogrenci_adi</code> sütunu yalnızca <code>ogrenci_id</code>'ye bağlıdır. Bu tablo hangi normal formu ihlal eder?</p>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) 1NF</button>
    <button class="q-opt" data-opt="b">B) 2NF</button>
    <button class="q-opt" data-opt="c">C) 3NF</button>
    <button class="q-opt" data-opt="d">D) Hiçbirini; tablo tamamen normaldir</button>
  </div>
  <div class="q-explain"><strong>Cevap: B.</strong> Sütun, bileşik anahtarın yalnızca bir PARÇASINA bağlı → kısmi bağımlılık → 2NF ihlali. 1NF atomiklikle ilgilidir (burada ihlal yok). 3NF, anahtar olmayan iki sütun arasındaki bağımlılıkla ilgilidir; buradaki bağımlılık anahtarın parçasınadır.</div>
</div>

<div class="quiz-q" data-answer="c">
  <p class="q-text"><strong>Soru 4.</strong> Calisanlar(calisan_id PK, ad, bolum_id, bolum_adi) tablosunda <code>bolum_adi</code>, <code>bolum_id</code>'ye bağlıdır. Bu durum neyi ifade eder?</p>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) Kısmi bağımlılık; 2NF ihlali</button>
    <button class="q-opt" data-opt="b">B) Atomiklik ihlali; 1NF ihlali</button>
    <button class="q-opt" data-opt="c">C) Geçişli bağımlılık; 3NF ihlali</button>
    <button class="q-opt" data-opt="d">D) Referans bütünlüğü ihlali</button>
  </div>
  <div class="q-explain"><strong>Cevap: C.</strong> calisan_id → bolum_id → bolum_adi zinciri geçişli bağımlılıktır ve 3NF'yi ihlal eder. A yanlış: kısmi bağımlılık bileşik anahtar gerektirir, burada anahtar tek sütundur. B yanlış: hücrelerde çoklu değer yok. D foreign key ihlalidir, burada söz konusu değil.</div>
</div>

<div class="quiz-q" data-answer="d">
  <p class="q-text"><strong>Soru 5.</strong> Bir bölümdeki son öğrencinin kaydı silindiğinde bölüme ait tüm bilgiler de kayboluyorsa bu hangi anomalidir?</p>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) Ekleme anomalisi (insert anomaly)</button>
    <button class="q-opt" data-opt="b">B) Güncelleme anomalisi (update anomaly)</button>
    <button class="q-opt" data-opt="c">C) Normalizasyon anomalisi</button>
    <button class="q-opt" data-opt="d">D) Silme anomalisi (delete anomaly)</button>
  </div>
  <div class="q-explain"><strong>Cevap: D.</strong> Bir satırı silerken istemeden başka bir varlığın bilgisini de kaybetmek silme anomalisidir. A, yeni kayıt EKLEYEMEME durumudur; B, tekrarlı verinin bir kısmının güncellenmeyip tutarsız kalmasıdır; C diye bir anomali türü yoktur.</div>
</div>

<h2>🔁 Mini Tekrar</h2>
<div class="table-wrap"><table>
<thead><tr><th>Kavram</th><th>Özet</th></tr></thead>
<tbody>
<tr><td>Normalizasyon</td><td>Veri tekrarını azalt, tutarlılığı artır</td></tr>
<tr><td>1NF</td><td>Hücrelerde atomik (tek) değer</td></tr>
<tr><td>2NF</td><td>Kısmi bağımlılık yok — anahtarın TAMAMINA bağlılık</td></tr>
<tr><td>3NF</td><td>Geçişli bağımlılık yok — anahtar dışı sütunlar birbirine bağlanmaz</td></tr>
<tr><td>Ekleme anomalisi</td><td>İlişkisiz veri olmadan yeni kayıt eklenememesi</td></tr>
<tr><td>Güncelleme anomalisi</td><td>Tekrarlı verinin bir kısmının güncellenmeyip tutarsız kalması</td></tr>
<tr><td>Silme anomalisi</td><td>Satır silinince başka varlığın bilgisinin de kaybolması</td></tr>
<tr><td>Denormalizasyon</td><td>Performans için bilinçli veri tekrarı</td></tr>
</tbody>
</table></div>
`
  },
  {
    module: 'sql',
    id: 'sql-12-index',
    order: 12,
    title: 'Index ve Performans',
    html: `
<h2>📖 Konu Anlatımı</h2>

<h3>Index Nedir?</h3>
<p>Index, <strong>kitabın arkasındaki dizin (içindekiler)</strong> gibidir: "Ali" kelimesini bulmak için kitabın her sayfasını çevirmek yerine dizine bakar, doğrudan ilgili sayfaya gidersin. Veritabanında da index olmayan bir sütunda arama yapılırsa <strong>tüm tablo baştan sona taranır (full table scan)</strong>; index varsa motor sıralı bir yapı üzerinden doğrudan ilgili satırlara atlar.</p>
<pre><code class="lang-sql">CREATE INDEX idx_employees_name
ON Employees (name);

-- Artık bu sorgu tüm tabloyu taramak yerine index kullanır:
SELECT * FROM Employees WHERE name = 'Ali';</code></pre>

<h3>Index'in Faydası ve Maliyeti</h3>
<ul>
  <li><strong>Fayda:</strong> <code>SELECT</code> sorgularını — özellikle WHERE, JOIN ve ORDER BY içerenleri — ciddi şekilde <strong>hızlandırır</strong>.</li>
  <li><strong>Maliyet:</strong> Her <code>INSERT</code>, <code>UPDATE</code>, <code>DELETE</code> işleminde index'in de güncellenmesi gerekir → <strong>yazma işlemleri yavaşlayabilir</strong>. Ayrıca index ek disk alanı kaplar.</li>
</ul>
<div class="callout warn"><p><strong>Tuzak:</strong> "Index her sorguyu hızlandırır" ifadesi YANLIŞTIR. Index okumayı hızlandırır ama yazmayı (INSERT/UPDATE/DELETE) yavaşlatabilir. Bu yüzden "her sütuna index ekleyelim" de yanlış bir stratejidir — çok küçük tablolarda veya sürekli güncellenen sütunlarda index zarar bile edebilir.</p></div>

<h3>Clustered Index</h3>
<p>Clustered index, <strong>tablodaki verinin fiziksel (diskteki) sıralanma düzenini belirler</strong>. Veri tek bir fiziksel sırada tutulabileceği için bir tabloda <strong>yalnızca 1 tane</strong> clustered index olabilir. Telefon rehberi gibi düşün: kayıtların kendisi zaten soyada göre sıralı durur.</p>

<h3>Non-Clustered Index</h3>
<p>Non-clustered index, verinin kendisini sıralamaz; <strong>ayrı bir yapı olarak tutulur ve asıl satırlara işaretçi (pointer) içerir</strong> — kitabın arkasındaki dizin gibi: dizin ayrı sayfadadır, sayfa numarasına yönlendirir. Bir tabloda <strong>birden çok</strong> non-clustered index olabilir.</p>

<h3>Primary Key ve Index İlişkisi</h3>
<p>Primary key tanımladığında veritabanı benzersizliği hızlı denetleyebilmek için <strong>otomatik olarak bir index oluşturur</strong>. SQL Server'da primary key, varsayılan olarak <strong>clustered index</strong> olarak oluşturulur (istenirse non-clustered da yapılabilir). Yani "primary key'li tabloda hiç index yoktur" ifadesi yanlıştır.</p>

<h3>Ne Zaman Index Kullanmalı?</h3>
<ul>
  <li>WHERE ve JOIN koşullarında <strong>sık aranan</strong> sütunlar → iyi aday.</li>
  <li>Çok küçük tablolar → gereksiz (zaten hızlı taranır).</li>
  <li>Çok sık INSERT/UPDATE alan sütunlar → index maliyeti faydayı geçebilir.</li>
</ul>

<h2>⚠️ Karıştırılan Kavramlar</h2>

<div class="table-wrap"><table>
<thead><tr><th>Özellik</th><th>Clustered Index</th><th>Non-Clustered Index</th></tr></thead>
<tbody>
<tr><td>Veriyi fiziksel sıralar mı?</td><td>Evet, tablonun kendisini sıralar</td><td>Hayır, ayrı yapıda tutulur</td></tr>
<tr><td>Tabloda kaç tane olabilir?</td><td>Yalnızca 1</td><td>Birden çok</td></tr>
<tr><td>Satıra erişim</td><td>Veri index'in kendisindedir</td><td>İşaretçi (pointer) ile asıl satıra gider</td></tr>
<tr><td>Benzetme</td><td>Telefon rehberi (kayıtlar zaten sıralı)</td><td>Kitap arkasındaki dizin (ayrı sayfa, yönlendirir)</td></tr>
</tbody>
</table></div>

<div class="callout info"><p><strong>Hatırlatma:</strong> "Neden tabloda tek clustered index olur?" → Çünkü veri diskte yalnızca TEK bir fiziksel sırada durabilir. Aynı kitabı aynı anda hem yazar adına hem konuya göre fiziksel sıralayamazsın.</p></div>

<div class="callout warn"><p><strong>Tuzak:</strong> "Index SELECT'i de INSERT'i de hızlandırır" çeldiricisine dikkat — INSERT'te index ek yük getirir. Bir diğeri: "Non-clustered index tabloda 1 tane olabilir" — hayır, 1 tane olabilen <strong>clustered</strong> index'tir.</p></div>

<h2>🎯 Sınavda Nasıl Sorulur?</h2>
<ul>
  <li><strong>Benzetme sorusu:</strong> "Index aşağıdakilerden hangisine benzetilir?" → kitap dizini/içindekiler.</li>
  <li><strong>Fayda/maliyet:</strong> "Index'in dezavantajı nedir?" → yazma işlemlerini yavaşlatması ve ek disk alanı.</li>
  <li><strong>Clustered vs non-clustered:</strong> "Hangisi tablonun fiziksel sırasını belirler?" / "Tabloda kaç clustered index olabilir?" → clustered, 1 tane.</li>
  <li><strong>Primary key ilişkisi:</strong> "SQL Server'da primary key varsayılan olarak hangi index'i oluşturur?" → clustered.</li>
  <li><strong>Senaryo:</strong> "Şu sorgu yavaş, ne yapılmalı?" → WHERE'de kullanılan sütuna index eklemek.</li>
</ul>

<h2>✍️ Örnek Sorular</h2>

<div class="quiz-q" data-answer="b">
  <p class="q-text"><strong>Soru 1.</strong> Veritabanında index kullanmanın temel amacı nedir?</p>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) Verileri şifreleyerek güvenliği artırmak</button>
    <button class="q-opt" data-opt="b">B) Arama ve sorgulama işlemlerini hızlandırmak</button>
    <button class="q-opt" data-opt="c">C) Disk alanından tasarruf etmek</button>
    <button class="q-opt" data-opt="d">D) Veri tekrarını engellemek</button>
  </div>
  <div class="q-explain"><strong>Cevap: B.</strong> Index, kitap dizini gibi aramayı hızlandırır. A (güvenlik) ile ilgisi yoktur. C tam tersidir: index EK disk alanı kaplar. D normalizasyonun ve UNIQUE kısıtının işidir.</div>
</div>

<div class="quiz-q" data-answer="c">
  <p class="q-text"><strong>Soru 2.</strong> Bir tabloya çok sayıda index eklemenin olası olumsuz etkisi nedir?</p>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) SELECT sorguları yavaşlar</button>
    <button class="q-opt" data-opt="b">B) Tabloya foreign key eklenemez</button>
    <button class="q-opt" data-opt="c">C) INSERT, UPDATE ve DELETE işlemleri yavaşlayabilir</button>
    <button class="q-opt" data-opt="d">D) Tablodaki veriler silinir</button>
  </div>
  <div class="q-explain"><strong>Cevap: C.</strong> Her yazma işleminde tüm ilgili indexler de güncellenir; bu ek maliyettir. A tersine, SELECT'ler genelde hızlanır. B ve D'nin index'le ilgisi yoktur.</div>
</div>

<div class="quiz-q" data-answer="a">
  <p class="q-text"><strong>Soru 3.</strong> Bir tabloda neden yalnızca 1 tane clustered index olabilir?</p>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) Çünkü veri diskte yalnızca tek bir fiziksel sırada tutulabilir</button>
    <button class="q-opt" data-opt="b">B) Çünkü clustered index çok fazla yer kaplar</button>
    <button class="q-opt" data-opt="c">C) Çünkü SQL standardı en fazla 1 index'e izin verir</button>
    <button class="q-opt" data-opt="d">D) Çünkü clustered index yalnızca primary key'de kullanılabilir</button>
  </div>
  <div class="q-explain"><strong>Cevap: A.</strong> Clustered index tablonun fiziksel sıralamasını belirler; veri aynı anda iki farklı sırada duramaz. B gerekçe değildir. C yanlış: tabloda birden çok (non-clustered) index olabilir. D yanlış: clustered index başka sütunlarda da tanımlanabilir.</div>
</div>

<div class="quiz-q" data-answer="d">
  <p class="q-text"><strong>Soru 4.</strong> SQL Server'da bir tabloya PRIMARY KEY tanımlandığında varsayılan davranış nedir?</p>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) Hiçbir index oluşturulmaz</button>
    <button class="q-opt" data-opt="b">B) Tüm sütunlara ayrı ayrı index oluşturulur</button>
    <button class="q-opt" data-opt="c">C) Non-clustered index oluşturulur, clustered oluşturulamaz</button>
    <button class="q-opt" data-opt="d">D) Primary key sütununda otomatik olarak clustered index oluşturulur</button>
  </div>
  <div class="q-explain"><strong>Cevap: D.</strong> SQL Server'da PK varsayılan olarak clustered index üretir (istenirse non-clustered seçilebilir). A yanlış: benzersizlik denetimi için index şarttır. B abartıdır. C varsayılanın tersidir.</div>
</div>

<div class="quiz-q" data-answer="a">
  <p class="q-text"><strong>Soru 5.</strong> Non-clustered index için aşağıdakilerden hangisi doğrudur?</p>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) Veriden ayrı bir yapıda tutulur, asıl satırlara işaretçi içerir ve tabloda birden çok olabilir</button>
    <button class="q-opt" data-opt="b">B) Tablonun fiziksel sıralamasını belirler ve tabloda 1 tane olabilir</button>
    <button class="q-opt" data-opt="c">C) Yalnızca primary key sütununda oluşturulabilir</button>
    <button class="q-opt" data-opt="d">D) Yalnızca sayısal sütunlarda kullanılabilir</button>
  </div>
  <div class="q-explain"><strong>Cevap: A.</strong> Non-clustered index, kitap arkasındaki dizin gibi ayrı bir yapıdır ve satırlara yönlendirir; sayısı birden çok olabilir. B clustered index'in tanımıdır — en güçlü çeldirici. C ve D'de böyle bir kısıt yoktur.</div>
</div>

<h2>🔁 Mini Tekrar</h2>
<div class="table-wrap"><table>
<thead><tr><th>Kavram</th><th>Özet</th></tr></thead>
<tbody>
<tr><td>Index</td><td>Kitap dizini gibi; aramayı hızlandırır</td></tr>
<tr><td>Faydası</td><td>SELECT / WHERE / JOIN / ORDER BY hızlanır</td></tr>
<tr><td>Maliyeti</td><td>INSERT / UPDATE / DELETE yavaşlayabilir + ek disk alanı</td></tr>
<tr><td>Clustered index</td><td>Fiziksel sırayı belirler; tabloda 1 tane</td></tr>
<tr><td>Non-clustered index</td><td>Ayrı yapı + işaretçi; birden çok olabilir</td></tr>
<tr><td>Primary key</td><td>Otomatik index oluşturur (SQL Server'da varsayılan: clustered)</td></tr>
</tbody>
</table></div>
`
  },
  {
    module: 'sql',
    id: 'sql-13-transaction',
    order: 13,
    title: 'Transaction ve ACID',
    html: `
<h2>📖 Konu Anlatımı</h2>

<h3>Transaction Nedir?</h3>
<p>Transaction (işlem), <strong>tek bir mantıksal bütün olarak ele alınan SQL komutları grubudur</strong>: ya komutların TAMAMI başarıyla uygulanır ya da HİÇBİRİ uygulanmaz. Klasik örnek banka havalesidir — para bir hesaptan çıkıp diğerine girmeli; "çıktı ama girmedi" durumu asla kalıcı olmamalıdır.</p>
<pre><code class="lang-sql">BEGIN TRANSACTION;

UPDATE Accounts SET balance = balance - 100 WHERE id = 1;
UPDATE Accounts SET balance = balance + 100 WHERE id = 2;

COMMIT;   -- her şey yolundaysa değişiklikleri kalıcılaştır</code></pre>
<p>İkinci UPDATE'te hata olursa:</p>
<pre><code class="lang-sql">ROLLBACK; -- transaction içindeki TÜM değişiklikleri geri al</code></pre>

<h3>COMMIT ve ROLLBACK</h3>
<ul>
  <li><strong>COMMIT:</strong> Transaction içindeki tüm değişiklikleri <strong>onaylar ve kalıcı hale getirir</strong>. Commit'ten sonra geri dönüş yoktur.</li>
  <li><strong>ROLLBACK:</strong> Transaction başladığından beri yapılan <strong>tüm değişiklikleri geri alır</strong>; veritabanı transaction öncesi haline döner.</li>
</ul>
<div class="callout info"><p><strong>Not:</strong> COMMIT, ROLLBACK (ve BEGIN TRANSACTION) komutlarına <strong>TCL (Transaction Control Language)</strong> denir. Sınavda "COMMIT hangi gruptandır?" sorusunun cevabı DML değil TCL'dir.</p></div>

<h3>ACID Özellikleri</h3>
<p>Güvenilir bir transaction'ın taşıması gereken 4 özellik:</p>
<div class="table-wrap"><table>
<thead><tr><th>Harf</th><th>Özellik</th><th>Tek cümlelik anlamı</th></tr></thead>
<tbody>
<tr><td><strong>A</strong></td><td>Atomicity (Atomiklik)</td><td><strong>Ya hep ya hiç:</strong> işlemlerin tamamı uygulanır ya da hiçbiri uygulanmaz.</td></tr>
<tr><td><strong>C</strong></td><td>Consistency (Tutarlılık)</td><td>Transaction, veritabanını bir geçerli (kurallara uygun) durumdan başka bir geçerli duruma taşır; constraintler asla ihlal edilmiş halde kalmaz.</td></tr>
<tr><td><strong>I</strong></td><td>Isolation (Yalıtım)</td><td>Eşzamanlı çalışan transactionlar birbirinin yarım kalmış işlerini görmez; sanki sırayla çalışıyormuş gibi davranırlar.</td></tr>
<tr><td><strong>D</strong></td><td>Durability (Kalıcılık)</td><td>COMMIT edilen değişiklik, elektrik kesilse bile kaybolmaz; kalıcıdır.</td></tr>
</tbody>
</table></div>

<div class="callout tip"><p><strong>Ezber hilesi:</strong> Atomicity = "ya hep ya hiç", Consistency = "kurallar hep geçerli", Isolation = "kimse kimsenin yarım işini görmez", Durability = "commit edildiyse kaybolmaz". Sınavda en çok Atomicity tanımı sorulur.</p></div>

<h3>Havale Senaryosu Adım Adım</h3>
<ol>
  <li><code>BEGIN TRANSACTION</code> → işlem bloğu açılır.</li>
  <li>1. hesaptan 100 düşülür (henüz kalıcı DEĞİL).</li>
  <li>2. hesaba 100 eklenirken hata oluştu diyelim (örn. hesap bulunamadı).</li>
  <li><code>ROLLBACK</code> → 1. adımdaki düşme de geri alınır; iki bakiye de eski haline döner.</li>
  <li>Hata olmasaydı <code>COMMIT</code> → iki değişiklik birlikte kalıcı olurdu.</li>
</ol>

<h2>⚠️ Karıştırılan Kavramlar</h2>

<div class="table-wrap"><table>
<thead><tr><th>Komut / Kavram</th><th>Ne yapar?</th><th>Karıştırıldığı şey</th></tr></thead>
<tbody>
<tr><td><code>COMMIT</code></td><td>Değişiklikleri kalıcılaştırır</td><td>Kaydetme = COMMIT; "geri alınabilir" sanılması yanlış</td></tr>
<tr><td><code>ROLLBACK</code></td><td>Transaction'daki TÜM değişiklikleri geri alır</td><td>"Sadece son komutu geri alır" sanılması yanlış</td></tr>
<tr><td>Atomicity</td><td>Ya hep ya hiç</td><td>Consistency ile karıştırılır (o, kuralların korunmasıdır)</td></tr>
<tr><td>Isolation</td><td>Eşzamanlı transactionların yalıtımı</td><td>Durability ile karıştırılır (o, kalıcılıktır)</td></tr>
</tbody>
</table></div>

<div class="callout warn"><p><strong>Tuzak:</strong> "COMMIT edilen bir transaction ROLLBACK ile geri alınabilir" ifadesi YANLIŞTIR — commit sonrası geri dönüş yoktur (Durability). ROLLBACK yalnızca henüz commit edilmemiş değişiklikleri geri alır. Bir diğer tuzak: "ya hep ya hiç" tanımını Consistency şıkkına bağlamak — doğrusu Atomicity'dir.</p></div>

<h2>🎯 Sınavda Nasıl Sorulur?</h2>
<ul>
  <li><strong>Tanım eşleştirme:</strong> "Ya hep ya hiç ilkesi ACID'in hangi özelliğidir?" → Atomicity.</li>
  <li><strong>Harf açılımı:</strong> "ACID'de D neyi ifade eder?" → Durability (kalıcılık).</li>
  <li><strong>Komut sorusu:</strong> "Hata durumunda değişiklikleri geri almak için hangi komut kullanılır?" → ROLLBACK.</li>
  <li><strong>Senaryo:</strong> Havale örneği verilir, "ikinci UPDATE hata verirse ne yapılmalı / ne olur?" diye sorulur.</li>
  <li><strong>Sınıflandırma:</strong> "COMMIT ve ROLLBACK hangi komut grubundadır?" → TCL.</li>
</ul>

<h2>✍️ Örnek Sorular</h2>

<div class="quiz-q" data-answer="c">
  <p class="q-text"><strong>Soru 1.</strong> "Bir transaction içindeki işlemlerin ya tamamı uygulanır ya da hiçbiri uygulanmaz." Bu ifade ACID'in hangi özelliğini tanımlar?</p>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) Consistency</button>
    <button class="q-opt" data-opt="b">B) Isolation</button>
    <button class="q-opt" data-opt="c">C) Atomicity</button>
    <button class="q-opt" data-opt="d">D) Durability</button>
  </div>
  <div class="q-explain"><strong>Cevap: C.</strong> "Ya hep ya hiç" = Atomicity. Consistency kuralların (constraint) korunması, Isolation eşzamanlı transactionların birbirini etkilememesi, Durability commit edilen verinin kalıcılığıdır.</div>
</div>

<div class="quiz-q" data-answer="d">
  <p class="q-text"><strong>Soru 2.</strong> Transaction sırasında hata oluştuğunda, yapılan değişiklikleri geri almak için hangi komut kullanılır?</p>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) <code>COMMIT</code></button>
    <button class="q-opt" data-opt="b">B) <code>UNDO</code></button>
    <button class="q-opt" data-opt="c">C) <code>DELETE</code></button>
    <button class="q-opt" data-opt="d">D) <code>ROLLBACK</code></button>
  </div>
  <div class="q-explain"><strong>Cevap: D.</strong> ROLLBACK, transaction başından beri yapılan tüm değişiklikleri geri alır. A tam tersini yapar (kalıcılaştırır). B SQL komutu değildir (metin editörü kavramıdır). C satır siler, değişiklik geri almaz.</div>
</div>

<div class="quiz-q" data-answer="b">
  <p class="q-text"><strong>Soru 3.</strong> <code>COMMIT</code> komutu ne yapar?</p>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) Transaction'ı iptal edip değişiklikleri geri alır</button>
    <button class="q-opt" data-opt="b">B) Transaction içindeki değişiklikleri onaylayıp kalıcı hale getirir</button>
    <button class="q-opt" data-opt="c">C) Yeni bir transaction başlatır</button>
    <button class="q-opt" data-opt="d">D) Tabloyu yedekler</button>
  </div>
  <div class="q-explain"><strong>Cevap: B.</strong> COMMIT = onayla ve kalıcılaştır; sonrasında geri dönüş yoktur. A ROLLBACK'in işidir. C BEGIN TRANSACTION'dır. D'nin (yedekleme) transaction komutlarıyla ilgisi yoktur.</div>
</div>

<div class="quiz-q" data-answer="a">
  <p class="q-text"><strong>Soru 4.</strong> Aynı anda çalışan iki transaction'ın birbirinin tamamlanmamış değişikliklerini görmemesini ACID'in hangi özelliği sağlar?</p>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) Isolation</button>
    <button class="q-opt" data-opt="b">B) Atomicity</button>
    <button class="q-opt" data-opt="c">C) Durability</button>
    <button class="q-opt" data-opt="d">D) Consistency</button>
  </div>
  <div class="q-explain"><strong>Cevap: A.</strong> Isolation (yalıtım), eşzamanlı transactionları birbirinden izole eder. B "ya hep ya hiç" ilkesidir, C kalıcılıktır, D kuralların korunmasıdır — soru özellikle "aynı anda çalışan" diyerek Isolation'ı işaret eder.</div>
</div>

<div class="quiz-q" data-answer="d">
  <p class="q-text"><strong>Soru 5.</strong> Aşağıdaki havale işleminde ikinci UPDATE hata veriyor ve <code>ROLLBACK</code> çalıştırılıyor. Sonuç ne olur?</p>
  <pre><code class="lang-sql">BEGIN TRANSACTION;
UPDATE Accounts SET balance = balance - 100 WHERE id = 1; -- başarılı
UPDATE Accounts SET balance = balance + 100 WHERE id = 2; -- HATA!
ROLLBACK;</code></pre>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) 1. hesaptan 100 düşülmüş kalır, 2. hesap değişmez</button>
    <button class="q-opt" data-opt="b">B) Her iki hesap da 100 azalır</button>
    <button class="q-opt" data-opt="c">C) Yalnızca ikinci UPDATE geri alınır</button>
    <button class="q-opt" data-opt="d">D) Tüm değişiklikler geri alınır; iki hesabın bakiyesi de işlem öncesi haline döner</button>
  </div>
  <div class="q-explain"><strong>Cevap: D.</strong> ROLLBACK, transaction'ın TÜM değişikliklerini geri alır — ilk UPDATE başarılı olmuş olsa bile. A, transaction OLMASAYDI yaşanacak tehlikeli durumdur (atomicity tam olarak bunu önler). B anlamsızdır. C yanlış: ROLLBACK seçici değildir, bloğun tamamını geri alır.</div>
</div>

<h2>🔁 Mini Tekrar</h2>
<div class="table-wrap"><table>
<thead><tr><th>Kavram</th><th>Özet</th></tr></thead>
<tbody>
<tr><td>Transaction</td><td>Tek bütün olarak çalışan komut grubu</td></tr>
<tr><td><code>BEGIN TRANSACTION</code></td><td>İşlem bloğunu başlatır</td></tr>
<tr><td><code>COMMIT</code></td><td>Onayla, kalıcılaştır (geri dönüş yok)</td></tr>
<tr><td><code>ROLLBACK</code></td><td>Bloktaki TÜM değişiklikleri geri al</td></tr>
<tr><td>Atomicity</td><td>Ya hep ya hiç</td></tr>
<tr><td>Consistency</td><td>Veritabanı hep geçerli/kurallı durumda kalır</td></tr>
<tr><td>Isolation</td><td>Eşzamanlı transactionlar birbirini görmez</td></tr>
<tr><td>Durability</td><td>Commit edilen veri kaybolmaz</td></tr>
</tbody>
</table></div>
`
  },
  {
    module: 'sql',
    id: 'sql-14-tuzaklar',
    order: 14,
    title: "SQL'de Sık Tuzak Sorular",
    html: `
<h2>📖 Konu Anlatımı</h2>

<p>Bu konu bir <strong>tuzak avcısı özeti</strong>: sınavda yanlış seçeneklerin birbirine en çok yaklaştığı 11 noktayı tek tek netleştiriyoruz. Her birini "fark + mini örnek" formatında işle, sınavdan önce bu sayfayı bir kez daha tara.</p>

<h3>1) WHERE vs HAVING</h3>
<p><code>WHERE</code> satırları <strong>gruplamadan ÖNCE</strong>, <code>HAVING</code> grupları <strong>gruplamadan SONRA</strong> filtreler. Aggregate fonksiyon koşulu (<code>COUNT(*) &gt; 5</code> gibi) yalnızca HAVING'de yazılabilir:</p>
<pre><code class="lang-sql">SELECT department_id, COUNT(*)
FROM Employees
WHERE salary &gt; 20000          -- önce satır filtresi
GROUP BY department_id
HAVING COUNT(*) &gt; 5;          -- sonra grup filtresi</code></pre>
<p><code>WHERE COUNT(*) &gt; 5</code> yazmak <strong>hata verir</strong> — klasik tuzak.</p>

<h3>2) DELETE vs TRUNCATE vs DROP</h3>
<ul>
  <li><strong>DELETE:</strong> Satır siler, <strong>WHERE alabilir</strong>, DML'dir, transaction içinde geri alınabilir.</li>
  <li><strong>TRUNCATE:</strong> TÜM satırları hızlıca siler, <strong>WHERE almaz</strong>, DDL'dir; tablo yapısı kalır.</li>
  <li><strong>DROP:</strong> Tabloyu <strong>yapısıyla birlikte tamamen kaldırır</strong>; geride tablo da kalmaz.</li>
</ul>
<pre><code class="lang-sql">DELETE FROM Employees WHERE id = 5;  -- 1 satır gider
TRUNCATE TABLE Employees;            -- tüm satırlar gider, tablo kalır
DROP TABLE Employees;                -- tablo tamamen yok olur</code></pre>

<h3>3) INNER JOIN vs LEFT JOIN</h3>
<p><code>INNER JOIN</code> yalnızca <strong>iki tabloda da eşleşen</strong> satırları getirir. <code>LEFT JOIN</code> sol tablonun <strong>TÜM satırlarını</strong> getirir; eşleşme yoksa sağ tarafın sütunları <strong>NULL</strong> olur. "Hiç siparişi olmayan müşteriler" tarzı sorular LEFT JOIN + <code>IS NULL</code> ile çözülür:</p>
<pre><code class="lang-sql">SELECT c.name
FROM Customers c
LEFT JOIN Orders o ON o.customer_id = c.id
WHERE o.id IS NULL;   -- eşleşmesi olmayan müşteriler</code></pre>

<h3>4) COUNT(*) vs COUNT(sütun)</h3>
<p><code>COUNT(*)</code> <strong>tüm satırları</strong> sayar; <code>COUNT(sütun)</code> ise o sütunda <strong>NULL OLMAYAN</strong> satırları sayar. Sütunda NULL varsa iki sonuç farklı çıkar — sınav bu farkı sayı sorarak test eder.</p>

<h3>5) NULL = NULL Neden TRUE Değildir?</h3>
<p>NULL "değer yok / bilinmiyor" demektir; iki bilinmeyenin eşit olup olmadığı da bilinemez. Bu yüzden <code>NULL = NULL</code> sonucu TRUE değil <strong>UNKNOWN</strong>'dur ve satır filtreden geçemez. NULL kontrolü her zaman <code>IS NULL</code> / <code>IS NOT NULL</code> ile yapılır:</p>
<pre><code class="lang-sql">SELECT * FROM Employees WHERE phone = NULL;   -- HEP boş döner!
SELECT * FROM Employees WHERE phone IS NULL;  -- doğru kullanım</code></pre>

<h3>6) DISTINCT</h3>
<p><code>DISTINCT</code>, sonuç kümesindeki <strong>tekrarlı satırları eler</strong>; her benzersiz değer bir kez görünür. <code>SELECT DISTINCT city FROM Customers;</code> → her şehir tek satır. Satır silmez, yalnızca sonucu tekilleştirir.</p>

<h3>7) GROUP BY Olmadan Aggregate</h3>
<p>GROUP BY yoksa aggregate fonksiyon tüm tabloyu <strong>tek grup</strong> sayar ve <strong>tek satır</strong> döndürür: <code>SELECT COUNT(*) FROM Employees;</code> → tek sayı. Tuzak: aggregate ile normal sütunu GROUP BY'sız yan yana yazmak (<code>SELECT name, COUNT(*) FROM Employees;</code>) standart SQL'de <strong>hatadır</strong>.</p>

<h3>8) ORDER BY ve Varsayılan Sıra</h3>
<p><code>ORDER BY salary</code> yazıldığında varsayılan sıralama <strong>ASC (artan)</strong> olur — küçükten büyüğe. Büyükten küçüğe için <code>DESC</code> yazmak ZORUNLUDUR. "En yüksek maaşlı ilk 3" sorusunda <code>ORDER BY salary DESC</code> görmüyorsan şık yanlıştır.</p>

<h3>9) LIKE ve % Joker Karakteri</h3>
<p><code>%</code> = sıfır veya daha çok karakter, <code>_</code> = tam 1 karakter.</p>
<ul>
  <li><code>LIKE 'a%'</code> → a ile <strong>başlayan</strong></li>
  <li><code>LIKE '%a'</code> → a ile <strong>biten</strong></li>
  <li><code>LIKE '%a%'</code> → içinde a <strong>geçen</strong> (başta, ortada veya sonda)</li>
</ul>

<h3>10) Primary Key vs Foreign Key</h3>
<p><strong>Primary key</strong> kendi tablosundaki satırı benzersiz tanımlar (NOT NULL + UNIQUE, tabloda 1 tane). <strong>Foreign key</strong> başka tablonun primary key'ine işaret eder; <strong>tekrar edebilir ve NULL olabilir</strong>. "FK benzersiz olmalıdır" ifadesi tuzaktır — bir müşterinin çok siparişi olabilir, yani Orders tablosunda aynı customer_id defalarca görünür.</p>

<h3>11) UNION vs UNION ALL</h3>
<p>İkisi de iki sorgunun sonucunu alt alta birleştirir. <code>UNION</code> <strong>tekrarlayan satırları eler</strong> (bu yüzden ek maliyeti vardır); <code>UNION ALL</code> <strong>elemez, hepsini getirir ve daha hızlıdır</strong>. Sütun sayısı ve tipleri uyumlu olmalıdır.</p>

<h2>⚠️ Karıştırılan Kavramlar</h2>

<div class="table-wrap"><table>
<thead><tr><th>Özellik</th><th>DELETE</th><th>TRUNCATE</th><th>DROP</th></tr></thead>
<tbody>
<tr><td>Ne siler?</td><td>Satır (seçilebilir)</td><td>TÜM satırlar</td><td>Tablonun kendisi</td></tr>
<tr><td>WHERE alır mı?</td><td>Evet</td><td>Hayır</td><td>Hayır</td></tr>
<tr><td>Komut türü</td><td>DML</td><td>DDL</td><td>DDL</td></tr>
<tr><td>Tablo yapısı kalır mı?</td><td>Evet</td><td>Evet</td><td>HAYIR</td></tr>
<tr><td>Hız</td><td>Daha yavaş (satır satır)</td><td>Hızlı</td><td>—</td></tr>
</tbody>
</table></div>

<div class="table-wrap"><table>
<thead><tr><th>İkili</th><th>Kritik fark</th></tr></thead>
<tbody>
<tr><td>WHERE / HAVING</td><td>WHERE gruplamadan önce satırı, HAVING sonra grubu filtreler; aggregate koşulu HAVING'e</td></tr>
<tr><td>INNER / LEFT JOIN</td><td>INNER yalnızca eşleşenler; LEFT soldaki herkes + eşleşmeyene NULL</td></tr>
<tr><td>COUNT(*) / COUNT(sütun)</td><td>COUNT(*) tüm satırlar; COUNT(sütun) NULL'ları saymaz</td></tr>
<tr><td>UNION / UNION ALL</td><td>UNION tekrarı eler (yavaş); UNION ALL elemez (hızlı)</td></tr>
<tr><td>= NULL / IS NULL</td><td>= NULL hep UNKNOWN → boş sonuç; doğrusu IS NULL</td></tr>
<tr><td>PK / FK</td><td>PK benzersiz + NOT NULL; FK tekrar edebilir, NULL olabilir</td></tr>
</tbody>
</table></div>

<div class="callout warn"><p><strong>En çok düşülen 3 tuzak:</strong> 1) <code>WHERE COUNT(*) &gt; 5</code> yazan şık — hata verir, HAVING gerekir. 2) <code>WHERE x = NULL</code> — hata vermez ama HİÇ satır döndürmez. 3) "TRUNCATE, WHERE ile kullanılabilir" — yanlış, TRUNCATE koşul almaz.</p></div>

<h2>🎯 Sınavda Nasıl Sorulur?</h2>
<ul>
  <li><strong>"Bu sorgu ne döndürür?"</strong> — <code>WHERE x = NULL</code> içeren sorgu verilir; doğru cevap "hiç satır dönmez".</li>
  <li><strong>"Hangisi yanlıştır?"</strong> — DELETE/TRUNCATE/DROP hakkında 4 ifade; biri "TRUNCATE WHERE alır" gibi hatalıdır.</li>
  <li><strong>Sonuç sayısı sorma:</strong> Küçük tablo verilir, COUNT(*) vs COUNT(sütun) veya UNION vs UNION ALL'un döndüreceği satır sayısı sorulur.</li>
  <li><strong>Sorgu tamamlama:</strong> "Gruplardan yalnızca 5'ten kalabalık olanları getirmek için boşluğa ne gelmeli?" → HAVING COUNT(*) &gt; 5.</li>
  <li><strong>JOIN satır mantığı:</strong> "INNER yerine LEFT JOIN yazılırsa sonuç nasıl değişir?" tarzı kıyas soruları.</li>
</ul>

<h2>✍️ Örnek Sorular</h2>

<div class="quiz-q" data-answer="a">
  <p class="q-text"><strong>Soru 1.</strong> Departman başına çalışan sayısını hesaplayıp yalnızca 5'ten fazla çalışanı olan departmanları listelemek istiyorsun. <code>COUNT(*) &gt; 5</code> koşulu nereye yazılmalıdır?</p>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) <code>HAVING</code> içine, GROUP BY'dan sonra</button>
    <button class="q-opt" data-opt="b">B) <code>WHERE</code> içine, GROUP BY'dan önce</button>
    <button class="q-opt" data-opt="c">C) <code>ORDER BY</code> içine</button>
    <button class="q-opt" data-opt="d">D) <code>SELECT</code> listesine</button>
  </div>
  <div class="q-explain"><strong>Cevap: A.</strong> Aggregate fonksiyon koşulu yalnızca HAVING'de yazılabilir; HAVING grupları filtreler. B hata verir: WHERE satır seviyesinde, gruplamadan önce çalışır ve aggregate bilmez. C sıralama, D sütun seçimi içindir — filtreleme yapmazlar.</div>
</div>

<div class="quiz-q" data-answer="c">
  <p class="q-text"><strong>Soru 2.</strong> <code>TRUNCATE TABLE Employees;</code> komutu için aşağıdakilerden hangisi doğrudur?</p>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) Tabloyu yapısıyla birlikte veritabanından kaldırır</button>
    <button class="q-opt" data-opt="b">B) WHERE koşuluyla istenen satırlar silinebilir</button>
    <button class="q-opt" data-opt="c">C) Tüm satırları hızlıca siler; tablo yapısı korunur ve WHERE almaz</button>
    <button class="q-opt" data-opt="d">D) DML komutudur ve satır satır silme yapar</button>
  </div>
  <div class="q-explain"><strong>Cevap: C.</strong> TRUNCATE tüm veriyi hızlıca boşaltır, koşul kabul etmez, tablo yerinde kalır. A, DROP'un tanımıdır. B yanlış: TRUNCATE'e WHERE yazılamaz. D yanlış: TRUNCATE DDL'dir ve satır satır çalışmaz — o tarif DELETE'e aittir.</div>
</div>

<div class="quiz-q" data-answer="b">
  <p class="q-text"><strong>Soru 3.</strong> Employees tablosunda 10 satır var; <code>phone</code> sütunu 3 satırda NULL. Aşağıdaki sorguların sonuçları sırasıyla ne olur?</p>
  <pre><code class="lang-sql">SELECT COUNT(*) FROM Employees;
SELECT COUNT(phone) FROM Employees;</code></pre>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) 10 ve 10</button>
    <button class="q-opt" data-opt="b">B) 10 ve 7</button>
    <button class="q-opt" data-opt="c">C) 7 ve 7</button>
    <button class="q-opt" data-opt="d">D) 10 ve 3</button>
  </div>
  <div class="q-explain"><strong>Cevap: B.</strong> COUNT(*) tüm satırları sayar (10); COUNT(phone) NULL olanları saymaz (10 - 3 = 7). A, COUNT(sütun)un NULL'ları da saydığını varsayar — yanlış. C, COUNT(*)'ı da NULL'dan etkilenir sanır. D, NULL olanları (3) saymıştır; sayılan NULL OLMAYANLARDIR.</div>
</div>

<div class="quiz-q" data-answer="d">
  <p class="q-text"><strong>Soru 4.</strong> <code>SELECT * FROM Employees WHERE phone = NULL;</code> sorgusu, phone'u NULL olan satırlar varken bile neden hiç sonuç döndürmez?</p>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) Çünkü NULL içeren tablolarda WHERE kullanılamaz</button>
    <button class="q-opt" data-opt="b">B) Çünkü sorgu söz dizimi hatası verir</button>
    <button class="q-opt" data-opt="c">C) Çünkü = NULL yalnızca sayısal sütunlarda çalışır</button>
    <button class="q-opt" data-opt="d">D) Çünkü NULL ile = karşılaştırması UNKNOWN döndürür; doğrusu IS NULL kullanmaktır</button>
  </div>
  <div class="q-explain"><strong>Cevap: D.</strong> NULL "bilinmeyen" demektir; <code>= NULL</code> karşılaştırması TRUE olamaz, satır filtreden geçemez. Doğru yazım <code>WHERE phone IS NULL</code>. A ve C uydurma kurallardır. B en güçlü çeldirici: sorgu HATA VERMEZ, sessizce boş döner — tehlikesi de budur.</div>
</div>

<div class="quiz-q" data-answer="a">
  <p class="q-text"><strong>Soru 5.</strong> Bir sorguda <code>INNER JOIN</code> yerine <code>LEFT JOIN</code> kullanılırsa sonuç nasıl değişir?</p>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) Sol tablonun eşleşmeyen satırları da sonuca eklenir; sağ tarafın sütunları bu satırlarda NULL olur</button>
    <button class="q-opt" data-opt="b">B) Sonuç değişmez, iki JOIN aynıdır</button>
    <button class="q-opt" data-opt="c">C) Yalnızca sağ tablonun tüm satırları gelir</button>
    <button class="q-opt" data-opt="d">D) Eşleşen satırlar sonuçtan çıkarılır</button>
  </div>
  <div class="q-explain"><strong>Cevap: A.</strong> LEFT JOIN = INNER JOIN sonucu + sol tablonun eşleşmeyen satırları (sağ sütunlar NULL). B yalnızca her satır eşleşiyorsa rastlantısal olarak doğru olur, genel kural değildir. C, RIGHT JOIN'in tanımıdır. D'nin karşılığı yoktur — eşleşenler her iki JOIN'de de gelir.</div>
</div>

<div class="quiz-q" data-answer="b">
  <p class="q-text"><strong>Soru 6.</strong> UNION ile UNION ALL arasındaki fark için hangisi doğrudur?</p>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) UNION ALL tekrarlayan satırları eler, bu yüzden daha yavaştır</button>
    <button class="q-opt" data-opt="b">B) UNION tekrarlayan satırları eler; UNION ALL elemez ve genellikle daha hızlıdır</button>
    <button class="q-opt" data-opt="c">C) UNION iki tabloyu yan yana, UNION ALL alt alta birleştirir</button>
    <button class="q-opt" data-opt="d">D) UNION yalnızca aynı tablonun sorgularında kullanılabilir</button>
  </div>
  <div class="q-explain"><strong>Cevap: B.</strong> UNION tekilleştirme yaptığı için ek maliyetlidir; UNION ALL her satırı olduğu gibi getirir ve hızlıdır. A, ikisinin davranışını ters yazmıştır — en sık düşülen tuzak. C yanlış: ikisi de alt alta birleştirir (yan yana birleştirme JOIN'dir). D'de böyle bir kısıt yoktur.</div>
</div>

<div class="quiz-q" data-answer="d">
  <p class="q-text"><strong>Soru 7.</strong> <code>SELECT name FROM Employees ORDER BY salary;</code> sorgusu sonuçları nasıl sıralar?</p>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) Maaşa göre büyükten küçüğe</button>
    <button class="q-opt" data-opt="b">B) İsme göre alfabetik</button>
    <button class="q-opt" data-opt="c">C) Sıralama yapmaz, tablodaki sırayla döner</button>
    <button class="q-opt" data-opt="d">D) Maaşa göre küçükten büyüğe</button>
  </div>
  <div class="q-explain"><strong>Cevap: D.</strong> ORDER BY'ın varsayılanı ASC (artan)tır; DESC yazılmadıkça küçükten büyüğe sıralar. A için açıkça DESC gerekir. B yanlış: sıralama salary'ye göredir, SELECT'teki sütuna göre değil. C yanlış: ORDER BY varsa sıralama kesin yapılır.</div>
</div>

<div class="quiz-q" data-answer="c">
  <p class="q-text"><strong>Soru 8.</strong> <code>SELECT name FROM Students WHERE name LIKE '%an%';</code> sorgusu hangi isimleri döndürür?</p>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) Yalnızca 'an' ile başlayan isimleri</button>
    <button class="q-opt" data-opt="b">B) Yalnızca 'an' ile biten isimleri</button>
    <button class="q-opt" data-opt="c">C) İçinde herhangi bir yerde 'an' geçen tüm isimleri</button>
    <button class="q-opt" data-opt="d">D) Tam olarak 'an' olan isimleri</button>
  </div>
  <div class="q-explain"><strong>Cevap: C.</strong> % "sıfır veya daha çok karakter" demektir; iki yanda % olunca 'an' başta, ortada ya da sonda olabilir (Canan, Hasan, Anıl... hepsi gelir). A için 'an%', B için '%an', D için LIKE 'an' (jokersiz) gerekirdi.</div>
</div>

<h2>🔁 Mini Tekrar</h2>
<div class="table-wrap"><table>
<thead><tr><th>Tuzak</th><th>Aklında kalsın</th></tr></thead>
<tbody>
<tr><td>WHERE / HAVING</td><td>Aggregate koşulu → HAVING; WHERE gruplamadan önce</td></tr>
<tr><td>DELETE / TRUNCATE / DROP</td><td>Satır sil / hepsini boşalt (WHERE yok, DDL) / tabloyu yok et</td></tr>
<tr><td>INNER / LEFT JOIN</td><td>Sadece eşleşen / soldaki herkes + NULL</td></tr>
<tr><td>COUNT(*) / COUNT(sütun)</td><td>Hepsi / NULL hariç</td></tr>
<tr><td>NULL kontrolü</td><td>= NULL asla; IS NULL / IS NOT NULL</td></tr>
<tr><td>DISTINCT</td><td>Sonuçtaki tekrarlı satırları eler</td></tr>
<tr><td>GROUP BY'sız aggregate</td><td>Tüm tablo tek grup → tek satır; yanına normal sütun yazmak hata</td></tr>
<tr><td>ORDER BY</td><td>Varsayılan ASC (artan); büyükten küçüğe için DESC şart</td></tr>
<tr><td>LIKE '%a%'</td><td>İçinde a geçen; 'a%' başlayan, '%a' biten</td></tr>
<tr><td>PK / FK</td><td>PK benzersiz + NOT NULL; FK tekrarlanabilir, NULL olabilir</td></tr>
<tr><td>UNION / UNION ALL</td><td>UNION tekrarı eler; UNION ALL elemez, daha hızlı</td></tr>
</tbody>
</table></div>
`
  }
]);
