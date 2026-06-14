window.SINAV.register([
  {
    module: 'sql',
    id: 'sql-01-veritabani',
    order: 1,
    title: 'Veritabanı Temelleri',
    html: `
<h2>📖 Konu Anlatımı</h2>

<h3>Veri ve Veritabanı Nedir?</h3>
<p><strong>Veri (data)</strong>, ham haldeki bilgi parçacığıdır: bir isim, bir sayı, bir tarih. Tek başına "Ankara" kelimesi sadece veridir; "Ali'nin yaşadığı şehir Ankara" dediğinde anlam kazanır ve <strong>bilgiye</strong> dönüşür.</p>
<p><strong>Veritabanı (database)</strong> ise verilerin düzenli, ilişkili ve kolayca erişilebilir şekilde saklandığı yapıdır. Amaç: veriyi kaybetmeden saklamak, hızlı aramak, tutarlılığı korumak ve aynı anda birden çok kullanıcıya hizmet vermek.</p>

<h3>DBMS ve RDBMS</h3>
<p><strong>DBMS (Database Management System – Veritabanı Yönetim Sistemi)</strong>, veritabanını yöneten yazılımdır. Veritabanının kendisi veriyi tutar; DBMS ise bu veriye erişimi, güvenliği ve yedeklemeyi yöneten programdır.</p>
<p><strong>RDBMS (Relational DBMS – İlişkisel Veritabanı Yönetim Sistemi)</strong>, veriyi birbiriyle <strong>ilişkili tablolar</strong> halinde tutan DBMS türüdür. SQL, ilişkisel veritabanlarını sorgulamak için kullanılan dildir.</p>
<div class="table-wrap"><table>
<thead><tr><th>Kavram</th><th>Açıklama</th><th>Örnek</th></tr></thead>
<tbody>
<tr><td>DBMS</td><td>Veritabanını yöneten yazılım</td><td>MongoDB (ilişkisel olmayan)</td></tr>
<tr><td>RDBMS</td><td>Tablo + ilişki temelli DBMS</td><td>MySQL, PostgreSQL, SQL Server, Oracle</td></tr>
<tr><td>SQL</td><td>İlişkisel veritabanı sorgulama dili</td><td>SELECT, INSERT, CREATE...</td></tr>
</tbody>
</table></div>

<h3>Tablo, Satır, Sütun</h3>
<p>İlişkisel veritabanında her şey <strong>tablo (table)</strong> içinde yaşar. Tablo, satır ve sütunlardan oluşan bir ızgaradır:</p>
<ul>
<li><strong>Satır (row) = kayıt (record):</strong> Tek bir varlığa ait verilerin tamamı. Örn. "1 numaralı öğrenci Ali"nin tüm bilgileri tek satırdır.</li>
<li><strong>Sütun (column) = alan (field):</strong> Tüm kayıtlarda ortak olan tek bir özellik. Örn. "ad" sütunu, "yaş" sütunu.</li>
<li><strong>Hücre:</strong> Bir satır ile bir sütunun kesişimindeki tek değer.</li>
</ul>
<pre><code class="lang-text">Ogrenciler tablosu
+----+--------+-----+----------+
| id | ad     | yas | sehir    |
+----+--------+-----+----------+
| 1  | Ali    | 21  | Ankara   |   &lt;-- bir SATIR (kayıt)
| 2  | Ayse   | 23  | Izmir    |
| 3  | Mehmet | 20  | Istanbul |
+----+--------+-----+----------+
              ^
              |-- "yas" bir SÜTUN (alan)</code></pre>

<h3>Anahtarlar: Primary Key, Foreign Key, Unique Key</h3>
<p><strong>Primary Key (birincil anahtar):</strong> Her satırı <strong>benzersiz</strong> olarak tanımlayan sütundur. Kuralları kesin:</p>
<ul>
<li>Tekrarlayan değer içeremez (benzersizdir).</li>
<li><strong>NULL olamaz</strong> — her kaydın mutlaka bir kimliği olmalı.</li>
<li>Bir tabloda <strong>en fazla bir</strong> primary key olur (birden çok sütundan oluşabilir, buna bileşik anahtar denir; ama yine tek bir PK tanımıdır).</li>
</ul>
<p><strong>Foreign Key (yabancı anahtar):</strong> Bir tablodaki sütunun, <strong>başka bir tablonun primary key'ine referans vermesidir</strong>. Tablolar arası ilişkiyi kurar ve tutarlılığı korur: olmayan bir değere referans veremezsin.</p>
<p><strong>Unique Key:</strong> Sütundaki değerlerin tekrar etmesini engeller; ama PK'den farklı olarak <strong>NULL kabul edebilir</strong> ve bir tabloda <strong>birden fazla</strong> unique sütun olabilir.</p>
<pre><code class="lang-sql">CREATE TABLE Departments (
  id INT PRIMARY KEY,
  department_name VARCHAR(50) UNIQUE
);

CREATE TABLE Employees (
  id INT PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  email VARCHAR(100) UNIQUE,
  department_id INT,
  FOREIGN KEY (department_id) REFERENCES Departments(id)
);</code></pre>
<p>Burada <code>Employees.department_id</code> bir foreign key'dir ve <code>Departments.id</code> primary key'ine bağlanır. Yani bir çalışana, Departments tablosunda olmayan bir departman atayamazsın.</p>

<h3>NULL Kavramı</h3>
<p><strong>NULL</strong>, "değer yok / bilinmiyor" demektir. Sıfır değildir, boş metin ('') değildir — <strong>hiçlik</strong>tir. Örneğin telefon numarası girilmemiş bir müşteri kaydında telefon alanı NULL olur. NULL ile karşılaştırma yapılırken <code>=</code> değil <code>IS NULL</code> kullanılır (detayı WHERE konusunda göreceğiz).</p>

<h3>Constraint (Kısıtlamalar)</h3>
<p>Constraint'ler, tabloya girilecek veriye kural koyar. Kurala uymayan veri tabloya giremez:</p>
<div class="table-wrap"><table>
<thead><tr><th>Constraint</th><th>Görevi</th></tr></thead>
<tbody>
<tr><td><code>PRIMARY KEY</code></td><td>Benzersiz + NULL olamaz; satırın kimliği</td></tr>
<tr><td><code>FOREIGN KEY</code></td><td>Başka tablonun PK'sine referans; ilişki kurar</td></tr>
<tr><td><code>UNIQUE</code></td><td>Tekrarlayan değeri engeller (NULL olabilir)</td></tr>
<tr><td><code>NOT NULL</code></td><td>Alanın boş (NULL) bırakılmasını engeller</td></tr>
<tr><td><code>CHECK</code></td><td>Koşul tanımlar, örn. yas &gt;= 18</td></tr>
<tr><td><code>DEFAULT</code></td><td>Değer girilmezse varsayılan değeri atar</td></tr>
</tbody>
</table></div>

<h3>Schema (Şema)</h3>
<p><strong>Şema</strong>, veritabanının iskelet planıdır: hangi tablolar var, hangi sütunlar hangi veri tipinde, anahtarlar ve ilişkiler nasıl. Veriyi değil, <strong>yapıyı</strong> tanımlar. Bir binanın mimari projesi gibi düşün: proje (şema) ile içinde oturan insanlar (veri) farklı şeylerdir.</p>

<h2>⚠️ Karıştırılan Kavramlar</h2>

<h3>Primary Key / Unique Key / Foreign Key</h3>
<div class="table-wrap"><table>
<thead><tr><th>Özellik</th><th>PRIMARY KEY</th><th>UNIQUE KEY</th><th>FOREIGN KEY</th></tr></thead>
<tbody>
<tr><td>Görevi</td><td>Satırı benzersiz tanımlar</td><td>Tekrarı engeller</td><td>Başka tabloya referans verir</td></tr>
<tr><td>NULL olabilir mi?</td><td><strong>Hayır</strong></td><td><strong>Evet</strong></td><td>Evet (ilişki zorunlu değilse)</td></tr>
<tr><td>Tekrar edebilir mi?</td><td>Hayır</td><td>Hayır</td><td><strong>Evet</strong> (çok çalışan aynı departmanda olabilir)</td></tr>
<tr><td>Tabloda kaç tane?</td><td>En fazla 1</td><td>Birden çok olabilir</td><td>Birden çok olabilir</td></tr>
</tbody>
</table></div>

<h3>Satır mı, Sütun mu?</h3>
<div class="table-wrap"><table>
<thead><tr><th>Türkçe</th><th>İngilizce</th><th>Eş anlamlısı</th><th>Ne ifade eder?</th></tr></thead>
<tbody>
<tr><td>Satır</td><td>Row</td><td>Kayıt (record)</td><td>Bir varlığın tüm bilgileri (yatay)</td></tr>
<tr><td>Sütun</td><td>Column</td><td>Alan (field)</td><td>Tek bir özellik (dikey)</td></tr>
</tbody>
</table></div>

<div class="callout warn"><p><strong>Tuzak:</strong> "Primary key NULL değer alabilir" ifadesi her zaman <strong>yanlıştır</strong>. NULL alabilen benzersiz anahtar UNIQUE'tir. Ayrıca "bir tabloda birden fazla primary key olabilir" de yanlıştır — birden fazla <strong>sütundan oluşan tek bir</strong> PK olabilir, bu farklı bir şeydir.</p></div>

<div class="callout info"><p><strong>DBMS ≠ veritabanı:</strong> Veritabanı veriyi tutan yapıdır; DBMS o yapıyı yöneten <strong>yazılımdır</strong>. "MySQL bir veritabanıdır" günlük dilde söylenir ama teknik olarak MySQL bir <strong>RDBMS yazılımıdır</strong>.</p></div>

<div class="callout tip"><p><strong>Ezber hilesi:</strong> <strong>P</strong>rimary = <strong>P</strong>asaport (herkesinki benzersiz, boş olamaz). <strong>F</strong>oreign = <strong>F</strong>arklı tabloya köprü. <strong>U</strong>nique = tekrar yok ama boşluk (NULL) serbest.</p></div>

<h2>🎯 Sınavda Nasıl Sorulur?</h2>
<ul>
<li><strong>Tanım eşleştirme:</strong> "Her satırı benzersiz olarak tanımlayan sütuna ne denir?" → primary key. Kavram-tanım eşleştirmeleri bu konunun klasiğidir.</li>
<li><strong>PK özellik sorusu:</strong> "Primary key ile ilgili hangisi <strong>yanlıştır</strong>?" kalıbında, "NULL olabilir" veya "tekrar edebilir" çeldiricisi verilir.</li>
<li><strong>PK–UNIQUE farkı:</strong> NULL kabul etme ve tabloda kaç tane olabileceği üzerinden sorulur.</li>
<li><strong>FK'nin amacı:</strong> "Tablolar arasında ilişki kurmak için hangisi kullanılır?" → foreign key. Çeldirici olarak primary key ve index verilir.</li>
<li><strong>Satır/sütun terminolojisi:</strong> "Record (kayıt) neye karşılık gelir?" gibi İngilizce-Türkçe terim soruları gelir.</li>
</ul>

<h2>✍️ Örnek Sorular</h2>

<div class="quiz-q" data-answer="b">
  <p class="q-text"><strong>Soru 1.</strong> Bir tablodaki her satırı benzersiz şekilde tanımlayan ve NULL değer alamayan anahtar hangisidir?</p>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) Foreign key</button>
    <button class="q-opt" data-opt="b">B) Primary key</button>
    <button class="q-opt" data-opt="c">C) Unique key</button>
    <button class="q-opt" data-opt="d">D) Index</button>
  </div>
  <div class="q-explain"><strong>Cevap: B.</strong> Primary key benzersizdir ve NULL olamaz. Unique key de benzersizdir ama NULL alabilir (C bu yüzden yanlış). Foreign key başka tabloya referanstır, benzersizlik garantisi vermez.</div>
</div>

<div class="quiz-q" data-answer="a">
  <p class="q-text"><strong>Soru 2.</strong> Bir tablodaki sütunun, başka bir tablonun primary key'ine referans vermesini sağlayan yapı hangisidir?</p>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) Foreign key</button>
    <button class="q-opt" data-opt="b">B) Composite key</button>
    <button class="q-opt" data-opt="c">C) Check constraint</button>
    <button class="q-opt" data-opt="d">D) Unique key</button>
  </div>
  <div class="q-explain"><strong>Cevap: A.</strong> Foreign key tablolar arası ilişkiyi kurar ve referans bütünlüğünü korur. Composite key birden çok sütundan oluşan PK'dir; CHECK koşul tanımlar; UNIQUE tekrarı engeller — hiçbiri başka tabloya referans vermez.</div>
</div>

<div class="quiz-q" data-answer="d">
  <p class="q-text"><strong>Soru 3.</strong> Veritabanında "row" (satır) kavramının karşılığı aşağıdakilerden hangisidir?</p>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) Alan (field)</button>
    <button class="q-opt" data-opt="b">B) Şema (schema)</button>
    <button class="q-opt" data-opt="c">C) Sütun (column)</button>
    <button class="q-opt" data-opt="d">D) Kayıt (record)</button>
  </div>
  <div class="q-explain"><strong>Cevap: D.</strong> Row = satır = kayıt (record); bir varlığın tüm bilgilerini taşır. Field ve column ise tek bir özelliği temsil eden dikey yapıdır; şema veritabanının yapısal planıdır.</div>
</div>

<div class="quiz-q" data-answer="c">
  <p class="q-text"><strong>Soru 4.</strong> Primary key ile ilgili aşağıdaki ifadelerden hangisi <strong>yanlıştır</strong>?</p>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) Her satırı benzersiz olarak tanımlar</button>
    <button class="q-opt" data-opt="b">B) Bir tabloda en fazla bir tane tanımlanabilir</button>
    <button class="q-opt" data-opt="c">C) NULL değer alabilir</button>
    <button class="q-opt" data-opt="d">D) Birden fazla sütundan oluşabilir</button>
  </div>
  <div class="q-explain"><strong>Cevap: C.</strong> Primary key asla NULL olamaz; bu özellik UNIQUE'e aittir. A, B ve D doğru ifadelerdir — birden çok sütundan oluşan PK'ye bileşik (composite) anahtar denir ama yine tek bir PK tanımıdır.</div>
</div>

<div class="quiz-q" data-answer="a">
  <p class="q-text"><strong>Soru 5.</strong> (Tuzak) Bir e-ticaret sisteminde <code>Orders</code> tablosundaki <code>customer_id</code> sütunu, <code>Customers</code> tablosundaki <code>id</code> sütununa bağlıdır. Aynı müşteri birden fazla sipariş verebilmektedir. Buna göre hangisi doğrudur?</p>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) <code>Orders.customer_id</code> foreign key'dir ve aynı değer birden çok satırda tekrar edebilir</button>
    <button class="q-opt" data-opt="b">B) <code>Orders.customer_id</code> primary key'dir, çünkü müşteriyi tanımlar</button>
    <button class="q-opt" data-opt="c">C) <code>Orders.customer_id</code> unique olmalıdır, yoksa ilişki kurulamaz</button>
    <button class="q-opt" data-opt="d">D) <code>Customers.id</code> foreign key'dir, çünkü siparişlere bağlanır</button>
  </div>
  <div class="q-explain"><strong>Cevap: A.</strong> Foreign key tekrar edebilir — bir müşterinin 10 siparişi olabilir. B yanlış: PK Orders tablosunda sipariş numarası olur, müşteri numarası değil. C yanlış: FK'nin unique olması gerekmez. D yanlış: referans <strong>veren</strong> taraf FK'dir, referans <strong>alınan</strong> (Customers.id) PK'dir.</div>
</div>

<h2>🔁 Mini Tekrar</h2>
<div class="table-wrap"><table>
<thead><tr><th>Kavram</th><th>Tek cümlede</th></tr></thead>
<tbody>
<tr><td>Veritabanı</td><td>Verilerin düzenli ve ilişkili saklandığı yapı</td></tr>
<tr><td>DBMS / RDBMS</td><td>Veritabanını yöneten yazılım / tablo-ilişki temelli olanı</td></tr>
<tr><td>Tablo</td><td>Satır ve sütunlardan oluşan veri yapısı</td></tr>
<tr><td>Satır (row)</td><td>= Kayıt (record); bir varlığın tüm bilgileri</td></tr>
<tr><td>Sütun (column)</td><td>= Alan (field); tek bir özellik</td></tr>
<tr><td>Primary key</td><td>Benzersiz + NULL olamaz + tabloda en fazla 1</td></tr>
<tr><td>Foreign key</td><td>Başka tablonun PK'sine referans; tekrar edebilir</td></tr>
<tr><td>Unique key</td><td>Tekrar yok ama NULL olabilir; birden çok olabilir</td></tr>
<tr><td>NULL</td><td>Değer yok; sıfır ve boş metin değildir</td></tr>
<tr><td>Constraint</td><td>Veriye kural koyan kısıt (NOT NULL, CHECK, DEFAULT...)</td></tr>
<tr><td>Schema</td><td>Veritabanının yapı planı (veri değil, yapı)</td></tr>
</tbody>
</table></div>
`
  },
  {
    module: 'sql',
    id: 'sql-02-komut-turleri',
    order: 2,
    title: 'SQL Komut Türleri (DDL, DML, DCL, TCL)',
    html: `
<h2>📖 Konu Anlatımı</h2>

<p>SQL komutları görevlerine göre 4 ana gruba ayrılır. Sınavda "X komutu hangi gruba girer?" sorusu neredeyse garantidir; bu yüzden grupları ve içlerindeki komutları ezbere bileceksin.</p>

<h3>DDL — Data Definition Language (Veri Tanımlama Dili)</h3>
<p>Tablonun <strong>yapısıyla</strong> uğraşır: tablo oluşturur, değiştirir, siler. Veriyle değil, iskeletle ilgilenir.</p>
<div class="table-wrap"><table>
<thead><tr><th>Komut</th><th>Görevi</th></tr></thead>
<tbody>
<tr><td><code>CREATE</code></td><td>Yeni tablo / veritabanı / index oluşturur</td></tr>
<tr><td><code>ALTER</code></td><td>Var olan tablonun yapısını değiştirir (sütun ekler, tip değiştirir)</td></tr>
<tr><td><code>DROP</code></td><td>Tabloyu <strong>yapısıyla birlikte tamamen</strong> siler</td></tr>
<tr><td><code>TRUNCATE</code></td><td>Tablonun <strong>tüm verisini</strong> siler, yapısı kalır (dikkat: DDL'dir!)</td></tr>
</tbody>
</table></div>
<pre><code class="lang-sql">CREATE TABLE Employees (id INT PRIMARY KEY, name VARCHAR(50));
ALTER TABLE Employees ADD salary DECIMAL(10,2);
TRUNCATE TABLE Employees;   -- veriler gitti, tablo duruyor
DROP TABLE Employees;       -- tablo da gitti</code></pre>

<h3>DML — Data Manipulation Language (Veri İşleme Dili)</h3>
<p>Tablonun <strong>içindeki veriyle</strong> uğraşır: okur, ekler, günceller, siler.</p>
<div class="table-wrap"><table>
<thead><tr><th>Komut</th><th>Görevi</th></tr></thead>
<tbody>
<tr><td><code>SELECT</code></td><td>Veri okur / sorgular</td></tr>
<tr><td><code>INSERT</code></td><td>Yeni kayıt (satır) ekler</td></tr>
<tr><td><code>UPDATE</code></td><td>Var olan kayıtları günceller</td></tr>
<tr><td><code>DELETE</code></td><td>Kayıt siler (tablo yapısı kalır)</td></tr>
</tbody>
</table></div>
<pre><code class="lang-sql">INSERT INTO Employees (id, name, salary) VALUES (1, 'Ali', 40000);
UPDATE Employees SET salary = 45000 WHERE id = 1;
DELETE FROM Employees WHERE id = 1;
SELECT * FROM Employees;</code></pre>
<div class="callout info"><p><strong>Not:</strong> Bazı kaynaklar <code>SELECT</code> komutunu DQL (Data Query Language) diye ayrı bir grupta gösterir. Ama klasik 4'lü sınıflandırmada SELECT, <strong>DML</strong> içinde sayılır — sınavda DQL şıkkı yoksa DML'i işaretle.</p></div>

<h3>DCL — Data Control Language (Veri Kontrol Dili)</h3>
<p>Kullanıcı <strong>yetkilerini</strong> yönetir: kim neyi yapabilir?</p>
<div class="table-wrap"><table>
<thead><tr><th>Komut</th><th>Görevi</th></tr></thead>
<tbody>
<tr><td><code>GRANT</code></td><td>Kullanıcıya yetki <strong>verir</strong></td></tr>
<tr><td><code>REVOKE</code></td><td>Verilmiş yetkiyi <strong>geri alır</strong></td></tr>
</tbody>
</table></div>
<pre><code class="lang-sql">GRANT SELECT, INSERT ON Employees TO ahmet;
REVOKE INSERT ON Employees FROM ahmet;</code></pre>

<h3>TCL — Transaction Control Language (İşlem Kontrol Dili)</h3>
<p><strong>Transaction</strong>, ya hep ya hiç mantığıyla çalışan işlem bloğudur (örn. havale: bir hesaptan düş + diğerine ekle; ikisi birden olmalı). TCL bu blokları yönetir:</p>
<div class="table-wrap"><table>
<thead><tr><th>Komut</th><th>Görevi</th></tr></thead>
<tbody>
<tr><td><code>COMMIT</code></td><td>Yapılan değişiklikleri <strong>kalıcı</strong> hale getirir</td></tr>
<tr><td><code>ROLLBACK</code></td><td>Son COMMIT'ten sonraki değişiklikleri <strong>geri alır</strong></td></tr>
<tr><td><code>SAVEPOINT</code></td><td>Transaction içinde geri dönülebilecek <strong>ara nokta</strong> oluşturur</td></tr>
</tbody>
</table></div>
<pre><code class="lang-sql">BEGIN TRANSACTION;
UPDATE Accounts SET balance = balance - 100 WHERE id = 1;
SAVEPOINT yarisi;
UPDATE Accounts SET balance = balance + 100 WHERE id = 2;
-- bir hata olursa:
ROLLBACK TO yarisi;   -- sadece 2. update geri alınır
COMMIT;               -- kalanlar kalıcı olur</code></pre>

<h3>DELETE / TRUNCATE / DROP Üçlüsü</h3>
<p>Sınavın en sevdiği karşılaştırma. Üçü de "silme" yapar ama bambaşka şekillerde:</p>
<div class="table-wrap"><table>
<thead><tr><th>Özellik</th><th>DELETE</th><th>TRUNCATE</th><th>DROP</th></tr></thead>
<tbody>
<tr><td>Grubu</td><td><strong>DML</strong></td><td><strong>DDL</strong></td><td><strong>DDL</strong></td></tr>
<tr><td>Ne siler?</td><td>Satırları (WHERE ile seçilebilir)</td><td>Tüm satırları (WHERE kullanılamaz)</td><td>Tabloyu <strong>yapısıyla birlikte</strong></td></tr>
<tr><td>Tablo yapısı kalır mı?</td><td>Evet</td><td>Evet</td><td><strong>Hayır</strong></td></tr>
<tr><td>ROLLBACK ile geri alınır mı?</td><td><strong>Evet</strong></td><td>Genellikle hayır</td><td>Genellikle hayır</td></tr>
<tr><td>Hız</td><td>Yavaş (satır satır)</td><td>Hızlı (toplu)</td><td>—</td></tr>
</tbody>
</table></div>

<h2>⚠️ Karıştırılan Kavramlar</h2>

<h3>Dört Grup Yan Yana</h3>
<div class="table-wrap"><table>
<thead><tr><th>Grup</th><th>Açılımı</th><th>Neyle uğraşır?</th><th>Komutları</th></tr></thead>
<tbody>
<tr><td><strong>DDL</strong></td><td>Data Definition</td><td>Tablo <strong>yapısı</strong></td><td>CREATE, ALTER, DROP, TRUNCATE</td></tr>
<tr><td><strong>DML</strong></td><td>Data Manipulation</td><td>Tablodaki <strong>veri</strong></td><td>SELECT, INSERT, UPDATE, DELETE</td></tr>
<tr><td><strong>DCL</strong></td><td>Data Control</td><td><strong>Yetkiler</strong></td><td>GRANT, REVOKE</td></tr>
<tr><td><strong>TCL</strong></td><td>Transaction Control</td><td><strong>İşlem blokları</strong></td><td>COMMIT, ROLLBACK, SAVEPOINT</td></tr>
</tbody>
</table></div>

<div class="callout warn"><p><strong>1 numaralı tuzak — TRUNCATE:</strong> "Veri sildiğine göre DML'dir" diye düşündürmeye çalışırlar. <strong>Hayır!</strong> TRUNCATE satır satır silmez, tabloyu yapısal olarak boşaltır; bu yüzden <strong>DDL</strong>'dir ve genellikle ROLLBACK ile geri alınamaz. DELETE ise DML'dir ve geri alınabilir.</p></div>

<div class="callout warn"><p><strong>2 numaralı tuzak — SELECT:</strong> "Veriyi değiştirmiyor, o zaman DML olamaz" çeldiricisi gelir. Klasik sınıflandırmada <strong>SELECT bir DML komutudur</strong> (veri üzerinde işlem = okuma da dahil).</p></div>

<div class="callout tip"><p><strong>Ezber hilesi:</strong> DDL'nin D'si "<strong>D</strong>uvar" gibi düşün — yapıyla uğraşır. DML'nin M'si "<strong>M</strong>al/veri" — içerikle uğraşır. DCL'nin C'si "<strong>C</strong>op/polis" — yetki dağıtır. TCL'nin T'si "<strong>T</strong>ransaction".</p></div>

<h3>DELETE mi, DROP mu?</h3>
<p><code>DELETE FROM Employees;</code> tüm satırları siler ama tablo durur; ertesi gün INSERT yapabilirsin. <code>DROP TABLE Employees;</code> sonrası tablo artık <strong>yoktur</strong>; INSERT denersen "tablo bulunamadı" hatası alırsın.</p>

<h2>🎯 Sınavda Nasıl Sorulur?</h2>
<ul>
<li><strong>Sınıflandırma sorusu:</strong> "Aşağıdakilerden hangisi DDL komutudur?" — şıklara 3 DML + 1 DDL karıştırılır. TRUNCATE çeldiricisi favoridir.</li>
<li><strong>Yanlışı bulma:</strong> "Hangisi DML komutu <strong>değildir</strong>?" kalıbında CREATE veya GRANT araya sıkıştırılır.</li>
<li><strong>DELETE/TRUNCATE/DROP farkı:</strong> "Tablonun verisini silen ama yapısını koruyan ve geri alınamayan komut?" gibi çok özellikli tanımlar verilir.</li>
<li><strong>Senaryo sorusu:</strong> "Bir kullanıcının tabloya erişim yetkisini kaldırmak için hangi komut kullanılır?" → REVOKE (GRANT çeldirici).</li>
<li><strong>Transaction senaryosu:</strong> "Hatalı bir işlemi geri almak için?" → ROLLBACK; "kalıcı hale getirmek için?" → COMMIT.</li>
</ul>

<h2>✍️ Örnek Sorular</h2>

<div class="quiz-q" data-answer="c">
  <p class="q-text"><strong>Soru 1.</strong> Aşağıdakilerden hangisi bir DDL (Data Definition Language) komutudur?</p>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) <code>SELECT</code></button>
    <button class="q-opt" data-opt="b">B) <code>INSERT</code></button>
    <button class="q-opt" data-opt="c">C) <code>TRUNCATE</code></button>
    <button class="q-opt" data-opt="d">D) <code>UPDATE</code></button>
  </div>
  <div class="q-explain"><strong>Cevap: C.</strong> TRUNCATE veri silmesine rağmen tablo yapısı üzerinde çalıştığı için DDL'dir — sınavın klasik tuzağı. SELECT, INSERT ve UPDATE ise veriyle uğraşan DML komutlarıdır.</div>
</div>

<div class="quiz-q" data-answer="b">
  <p class="q-text"><strong>Soru 2.</strong> <code>GRANT</code> ve <code>REVOKE</code> komutları hangi SQL komut grubuna aittir?</p>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) DDL</button>
    <button class="q-opt" data-opt="b">B) DCL</button>
    <button class="q-opt" data-opt="c">C) DML</button>
    <button class="q-opt" data-opt="d">D) TCL</button>
  </div>
  <div class="q-explain"><strong>Cevap: B.</strong> GRANT yetki verir, REVOKE yetkiyi geri alır; ikisi de yetki yönetimi yapan DCL (Data Control Language) komutlarıdır. TCL transaction yönetir (COMMIT, ROLLBACK), DDL yapı, DML veri ile ilgilenir.</div>
</div>

<div class="quiz-q" data-answer="a">
  <p class="q-text"><strong>Soru 3.</strong> Var olan bir tabloya yeni bir sütun eklemek için hangi komut kullanılır?</p>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) <code>ALTER TABLE</code></button>
    <button class="q-opt" data-opt="b">B) <code>UPDATE TABLE</code></button>
    <button class="q-opt" data-opt="c">C) <code>INSERT INTO</code></button>
    <button class="q-opt" data-opt="d">D) <code>CREATE TABLE</code></button>
  </div>
  <div class="q-explain"><strong>Cevap: A.</strong> Yapı değişikliği = ALTER. UPDATE satırlardaki <strong>veriyi</strong> değiştirir (sütun ekleyemez); INSERT yeni <strong>satır</strong> ekler; CREATE sıfırdan yeni tablo oluşturur, var olana sütun eklemez.</div>
</div>

<div class="quiz-q" data-answer="d">
  <p class="q-text"><strong>Soru 4.</strong> (Tuzak) Bir tablonun <strong>tüm verisini</strong> hızlıca silmek, ama tablo yapısını korumak istiyorsun; işlemin ROLLBACK ile geri alınması da gerekmiyor. En uygun komut hangisidir?</p>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) <code>DELETE FROM tablo;</code></button>
    <button class="q-opt" data-opt="b">B) <code>DROP TABLE tablo;</code></button>
    <button class="q-opt" data-opt="c">C) <code>ALTER TABLE tablo;</code></button>
    <button class="q-opt" data-opt="d">D) <code>TRUNCATE TABLE tablo;</code></button>
  </div>
  <div class="q-explain"><strong>Cevap: D.</strong> TRUNCATE tüm veriyi toplu ve hızlı siler, yapı kalır, genellikle geri alınamaz. A da tüm veriyi siler ama satır satır çalışır (yavaş) ve geri alınabilir — "hızlı + geri alma gereksiz" vurgusu TRUNCATE'i işaret eder. B tabloyu komple yok eder; C silme yapmaz.</div>
</div>

<div class="quiz-q" data-answer="b">
  <p class="q-text"><strong>Soru 5.</strong> Bir transaction içinde yapılan değişikliklerin tamamını son COMMIT noktasına kadar geri almak için hangi komut kullanılır?</p>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) <code>REVOKE</code></button>
    <button class="q-opt" data-opt="b">B) <code>ROLLBACK</code></button>
    <button class="q-opt" data-opt="c">C) <code>DELETE</code></button>
    <button class="q-opt" data-opt="d">D) <code>SAVEPOINT</code></button>
  </div>
  <div class="q-explain"><strong>Cevap: B.</strong> ROLLBACK, transaction'daki değişiklikleri geri alır. REVOKE benzer çağrışım yapsa da <strong>yetki</strong> geri alır (DCL) — klasik çeldirici. SAVEPOINT sadece ara nokta oluşturur, tek başına geri almaz; DELETE veri siler.</div>
</div>

<h2>🔁 Mini Tekrar</h2>
<div class="table-wrap"><table>
<thead><tr><th>Grup</th><th>Uğraştığı şey</th><th>Komutlar</th><th>Akılda kalsın</th></tr></thead>
<tbody>
<tr><td>DDL</td><td>Yapı</td><td>CREATE, ALTER, DROP, TRUNCATE</td><td>TRUNCATE buradadır!</td></tr>
<tr><td>DML</td><td>Veri</td><td>SELECT, INSERT, UPDATE, DELETE</td><td>SELECT buradadır!</td></tr>
<tr><td>DCL</td><td>Yetki</td><td>GRANT, REVOKE</td><td>Ver / geri al</td></tr>
<tr><td>TCL</td><td>Transaction</td><td>COMMIT, ROLLBACK, SAVEPOINT</td><td>Kalıcılaştır / geri al / ara nokta</td></tr>
<tr><td>DELETE</td><td colspan="3">DML; WHERE ile seçerek siler; geri alınabilir; yapı kalır</td></tr>
<tr><td>TRUNCATE</td><td colspan="3">DDL; tüm veriyi siler; genellikle geri alınamaz; yapı kalır</td></tr>
<tr><td>DROP</td><td colspan="3">DDL; tabloyu yapısıyla birlikte yok eder</td></tr>
</tbody>
</table></div>
`
  },
  {
    module: 'sql',
    id: 'sql-03-select',
    order: 3,
    title: 'SELECT Sorguları',
    html: `
<h2>📖 Konu Anlatımı</h2>

<p>SELECT, SQL'in kalbidir: veriyi okur. Sınavdaki sorgu okuma sorularının tamamı SELECT üzerine kuruludur, o yüzden bu konuyu sindirerek geç. Örneklerde şu tabloyu kullanacağız:</p>
<pre><code class="lang-text">Employees
+----+--------+--------+--------+
| id | name   | salary | city   |
+----+--------+--------+--------+
| 1  | Ali    | 40000  | Ankara |
| 2  | Ayse   | 55000  | Izmir  |
| 3  | Mehmet | 30000  | Ankara |
| 4  | Zeynep | 55000  | Bursa  |
+----+--------+--------+--------+</code></pre>

<h3>Temel Söz Dizimi: SELECT ve FROM</h3>
<pre><code class="lang-sql">SELECT * FROM Employees;            -- tüm sütunlar, tüm satırlar
SELECT name, salary FROM Employees; -- sadece bu iki sütun</code></pre>
<ul>
<li><code>SELECT *</code> → <strong>tüm sütunları</strong> getirir (* = "hepsi").</li>
<li><code>SELECT sütun1, sütun2</code> → sadece istediğin sütunları getirir.</li>
<li><code>FROM</code> → verinin hangi tablodan okunacağını söyler.</li>
</ul>

<h3>WHERE ile Filtreleme</h3>
<p><code>WHERE</code>, koşula uyan <strong>satırları</strong> seçer (detayını bir sonraki konuda işleyeceğiz):</p>
<pre><code class="lang-sql">SELECT name, salary
FROM Employees
WHERE salary &gt; 30000;
-- Sonuç: Ali, Ayse, Zeynep (Mehmet elenir; 30000 dahil değil çünkü &gt; kullanıldı)</code></pre>

<h3>ORDER BY ile Sıralama</h3>
<ul>
<li><code>ORDER BY sütun</code> → küçükten büyüğe sıralar. <strong>Varsayılan yön ASC</strong> (artan); yazmasan da artan sıralanır.</li>
<li><code>ORDER BY sütun DESC</code> → büyükten küçüğe (azalan).</li>
<li>Birden çok sütunla sıralanabilir: önce ilkine bakar, eşitse ikinciye geçer.</li>
</ul>
<pre><code class="lang-sql">SELECT name, salary FROM Employees ORDER BY salary DESC;
-- Ayse (55000), Zeynep (55000), Ali (40000), Mehmet (30000)

SELECT name, salary FROM Employees ORDER BY salary DESC, name ASC;
-- Maaş eşit olan Ayse ve Zeynep kendi aralarında isme göre artan sıralanır</code></pre>

<h3>DISTINCT ile Tekilleştirme</h3>
<p><code>DISTINCT</code>, sonuçtaki <strong>tekrarlayan satırları</strong> teke indirir:</p>
<pre><code class="lang-sql">SELECT city FROM Employees;
-- Ankara, Izmir, Ankara, Bursa  (4 satır)

SELECT DISTINCT city FROM Employees;
-- Ankara, Izmir, Bursa          (3 satır)</code></pre>

<h3>AS ile Takma Ad (Alias)</h3>
<p><code>AS</code>, sütuna veya tabloya geçici bir <strong>takma ad</strong> verir. Sadece sorgu sonucunda görünür; tablodaki gerçek isim <strong>değişmez</strong>:</p>
<pre><code class="lang-sql">SELECT name AS calisan_adi, salary AS maas
FROM Employees AS e;</code></pre>

<h3>LIMIT / TOP ile Satır Sınırlama</h3>
<p>Sonuçtan yalnızca ilk N satırı almak için kullanılır; veritabanına göre kelime değişir:</p>
<pre><code class="lang-sql">-- MySQL / PostgreSQL:
SELECT name, salary FROM Employees ORDER BY salary DESC LIMIT 2;

-- SQL Server:
SELECT TOP 2 name, salary FROM Employees ORDER BY salary DESC;

-- İkisi de en yüksek maaşlı 2 kişiyi getirir: Ayse, Zeynep</code></pre>
<div class="callout tip"><p><strong>Klasik kalıp:</strong> "En yüksek/en düşük X'i bul" = <code>ORDER BY ... DESC/ASC</code> + <code>LIMIT 1</code> (veya TOP 1). Bunu refleks haline getir.</p></div>

<h3>Yazım Sırası ve Mantıksal Çalışma Sırası</h3>
<p>SQL'de cümlecikler hep aynı sırayla <strong>yazılır</strong>, ama veritabanı bunları farklı sırayla <strong>çalıştırır</strong>:</p>
<div class="table-wrap"><table>
<thead><tr><th>Yazım sırası</th><th>Mantıksal çalışma sırası</th></tr></thead>
<tbody>
<tr><td>1. SELECT</td><td>1. FROM (tabloyu al)</td></tr>
<tr><td>2. FROM</td><td>2. WHERE (satırları filtrele)</td></tr>
<tr><td>3. WHERE</td><td>3. GROUP BY (grupla)</td></tr>
<tr><td>4. GROUP BY</td><td>4. HAVING (grupları filtrele)</td></tr>
<tr><td>5. HAVING</td><td>5. SELECT (sütunları seç)</td></tr>
<tr><td>6. ORDER BY</td><td>6. ORDER BY (sırala)</td></tr>
</tbody>
</table></div>
<p>Yani sorgu önce tabloyu alır, satırları filtreler, en son sıralar. "ORDER BY neden en sonda yazılır?" sorusunun cevabı bu: sıralama, her şey bittikten sonra yapılır.</p>

<h2>⚠️ Karıştırılan Kavramlar</h2>

<div class="table-wrap"><table>
<thead><tr><th>Karışan ikili</th><th>Farkı</th></tr></thead>
<tbody>
<tr><td><code>WHERE</code> vs <code>ORDER BY</code></td><td>WHERE satır <strong>eler</strong> (sonuç sayısını azaltabilir); ORDER BY sadece <strong>sıralar</strong> (satır sayısı değişmez)</td></tr>
<tr><td><code>DISTINCT</code> vs <code>GROUP BY</code></td><td>İkisi de tekilleştirir; ama GROUP BY gruplar üzerinde hesap (COUNT, AVG...) yapmak içindir</td></tr>
<tr><td><code>AS</code> vs <code>UPDATE</code></td><td>AS yalnızca <strong>sonuçtaki görünen ismi</strong> değiştirir; tablodaki gerçek sütun adını değiştirmek ALTER işidir</td></tr>
<tr><td><code>SELECT *</code> vs <code>SELECT sütun</code></td><td>* tüm sütunlar; sütun listesi sadece yazılanlar. İkisi de tüm <strong>satırları</strong> getirir (filtre yoksa)</td></tr>
<tr><td><code>LIMIT</code> vs <code>TOP</code></td><td>Aynı iş; LIMIT → MySQL/PostgreSQL, TOP → SQL Server</td></tr>
</tbody>
</table></div>

<div class="callout warn"><p><strong>Tuzak 1:</strong> <code>ORDER BY salary</code> yazıldığında sıralama <strong>artan</strong> (ASC) olur — yani liste <strong>en düşük maaşla başlar</strong>. "En yüksek maaşlı kişi en üsttedir" çeldiricisine düşme; onun için <code>DESC</code> gerekir.</p></div>
<div class="callout warn"><p><strong>Tuzak 2:</strong> DISTINCT, kendisinden sonra yazılan <strong>sütun kombinasyonunun tamamına</strong> bakar. <code>SELECT DISTINCT city, salary</code> sorgusunda şehir VE maaş ikilisi birlikte tekrar ediyorsa elenir; sadece şehir aynı diye satır elenmez.</p></div>

<h2>🎯 Sınavda Nasıl Sorulur?</h2>
<ul>
<li><strong>"Bu sorgu ne döndürür?"</strong> — küçük bir tablo + sorgu verilir, sonucu (hangi satırlar, hangi sırada) sorar. En sık kalıp budur.</li>
<li><strong>"En yüksek maaşlı çalışanı getiren sorgu hangisidir?"</strong> — şıklarda ASC/DESC yer değiştirmiş, LIMIT unutulmuş versiyonlar olur.</li>
<li><strong>Cümlecik sırası:</strong> "SELECT sorgusunda doğru yazım sırası hangisidir?" — WHERE ile ORDER BY'ın yeri değiştirilerek çeldirici yapılır.</li>
<li><strong>DISTINCT sonucu kaç satır:</strong> tablo verilir, "SELECT DISTINCT city kaç satır döndürür?" diye sorulur.</li>
<li><strong>AS'in etkisi:</strong> "AS kullanımı tablodaki sütun adını kalıcı olarak değiştirir mi?" — hayır, sadece sonuçta görünür.</li>
</ul>

<h2>✍️ Örnek Sorular</h2>
<p>Sorular yukarıdaki <strong>Employees</strong> tablosuna göredir (Ali 40000 Ankara, Ayse 55000 Izmir, Mehmet 30000 Ankara, Zeynep 55000 Bursa).</p>

<div class="quiz-q" data-answer="a">
  <p class="q-text"><strong>Soru 1.</strong> Aşağıdaki sorgunun sonucu nedir?</p>
  <pre><code class="lang-sql">SELECT name FROM Employees WHERE city = 'Ankara';</code></pre>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) Ali ve Mehmet'in adları</button>
    <button class="q-opt" data-opt="b">B) Ankara'daki çalışanların tüm bilgileri</button>
    <button class="q-opt" data-opt="c">C) Sadece Ali'nin adı</button>
    <button class="q-opt" data-opt="d">D) Tüm çalışanların adları</button>
  </div>
  <div class="q-explain"><strong>Cevap: A.</strong> WHERE şehri Ankara olan satırları seçer (Ali ve Mehmet), SELECT name ise yalnızca ad sütununu getirir. B yanlış çünkü tüm bilgiler için <code>SELECT *</code> gerekirdi; D yanlış çünkü WHERE filtre uyguluyor.</div>
</div>

<div class="quiz-q" data-answer="d">
  <p class="q-text"><strong>Soru 2.</strong> <code>DISTINCT</code> anahtar kelimesinin görevi nedir?</p>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) Sonuçları azalan sırada sıralar</button>
    <button class="q-opt" data-opt="b">B) NULL değerleri sonuçtan çıkarır</button>
    <button class="q-opt" data-opt="c">C) Sonuçtaki satır sayısını belirli bir sayıyla sınırlar</button>
    <button class="q-opt" data-opt="d">D) Tekrarlayan satırları sonuçta bir kez gösterir</button>
  </div>
  <div class="q-explain"><strong>Cevap: D.</strong> DISTINCT tekilleştirme yapar. A'yı ORDER BY DESC, C'yi LIMIT/TOP yapar. B yanlış: DISTINCT NULL'ları silmez; NULL da bir kez gösterilir.</div>
</div>

<div class="quiz-q" data-answer="b">
  <p class="q-text"><strong>Soru 3.</strong> En yüksek maaşlı çalışanın adını ve maaşını getiren sorgu hangisidir?</p>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) <code>SELECT name, salary FROM Employees ORDER BY salary LIMIT 1;</code></button>
    <button class="q-opt" data-opt="b">B) <code>SELECT name, salary FROM Employees ORDER BY salary DESC LIMIT 1;</code></button>
    <button class="q-opt" data-opt="c">C) <code>SELECT name, salary FROM Employees WHERE salary = MAX;</code></button>
    <button class="q-opt" data-opt="d">D) <code>SELECT name, salary FROM Employees ORDER BY name DESC LIMIT 1;</code></button>
  </div>
  <div class="q-explain"><strong>Cevap: B.</strong> Azalan sırala (en yüksek en üste gelir) + ilk satırı al. A tuzaktır: DESC yok, varsayılan ASC olduğu için <strong>en düşük</strong> maaşlıyı getirir. C geçersiz sözdizimidir; D isme göre sıralar, maaşla ilgisi yok.</div>
</div>

<div class="quiz-q" data-answer="c">
  <p class="q-text"><strong>Soru 4.</strong> Bir SELECT sorgusunda cümleciklerin doğru <strong>yazım sırası</strong> hangisidir?</p>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) SELECT → WHERE → FROM → ORDER BY</button>
    <button class="q-opt" data-opt="b">B) FROM → SELECT → WHERE → ORDER BY</button>
    <button class="q-opt" data-opt="c">C) SELECT → FROM → WHERE → ORDER BY</button>
    <button class="q-opt" data-opt="d">D) SELECT → FROM → ORDER BY → WHERE</button>
  </div>
  <div class="q-explain"><strong>Cevap: C.</strong> Yazım sırası her zaman SELECT-FROM-WHERE-(GROUP BY-HAVING)-ORDER BY'dır. ORDER BY hep en sonda yazılır — D bu yüzden yanlış. (Dikkat: bu <strong>yazım</strong> sırası; mantıksal çalışma sırası FROM ile başlar.)</div>
</div>

<div class="quiz-q" data-answer="d">
  <p class="q-text"><strong>Soru 5.</strong> (Tuzak) Aşağıdaki sorgunun sonucunda <strong>ilk satırda</strong> hangi çalışan yer alır?</p>
  <pre><code class="lang-sql">SELECT name, salary
FROM Employees
ORDER BY salary;</code></pre>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) Ayse — çünkü maaşı en yüksek</button>
    <button class="q-opt" data-opt="b">B) Ali — çünkü id'si en küçük</button>
    <button class="q-opt" data-opt="c">C) Zeynep — çünkü en son eklenen kayıt</button>
    <button class="q-opt" data-opt="d">D) Mehmet — çünkü maaşı en düşük</button>
  </div>
  <div class="q-explain"><strong>Cevap: D.</strong> ORDER BY'da yön belirtilmezse <strong>varsayılan ASC</strong> (artan) uygulanır; en düşük maaş (Mehmet, 30000) ilk satıra gelir. A klasik çeldiridir — en yüksek için DESC gerekirdi. B ve C: sıralama sütunu salary, id veya ekleme sırası değil.</div>
</div>

<h2>🔁 Mini Tekrar</h2>
<div class="table-wrap"><table>
<thead><tr><th>Cümlecik</th><th>Görevi</th><th>Kritik not</th></tr></thead>
<tbody>
<tr><td><code>SELECT</code></td><td>Sütunları seçer</td><td><code>*</code> = tüm sütunlar</td></tr>
<tr><td><code>FROM</code></td><td>Tabloyu belirtir</td><td>Mantıksal olarak ilk çalışan adım</td></tr>
<tr><td><code>WHERE</code></td><td>Satırları filtreler</td><td>Satır sayısını azaltabilir</td></tr>
<tr><td><code>ORDER BY</code></td><td>Sıralar</td><td><strong>Varsayılan ASC</strong>; azalan için DESC</td></tr>
<tr><td><code>DISTINCT</code></td><td>Tekilleştirir</td><td>Sütun kombinasyonunun tamamına bakar</td></tr>
<tr><td><code>AS</code></td><td>Takma ad verir</td><td>Gerçek sütun adı değişmez</td></tr>
<tr><td><code>LIMIT / TOP</code></td><td>Satır sayısını sınırlar</td><td>LIMIT: MySQL/PG, TOP: SQL Server</td></tr>
<tr><td>Yazım sırası</td><td colspan="2">SELECT → FROM → WHERE → GROUP BY → HAVING → ORDER BY</td></tr>
</tbody>
</table></div>
`
  },
  {
    module: 'sql',
    id: 'sql-04-where',
    order: 4,
    title: 'WHERE Koşulları',
    html: `
<h2>📖 Konu Anlatımı</h2>

<p>WHERE, sorguya "hangi satırları istiyorum?" sorusunun cevabını verir. Sınavda WHERE'siz soru neredeyse yok; operatörleri ve tuzaklarını (özellikle NULL'u) tam öğrenmen şart. Örnek tablomuz:</p>
<pre><code class="lang-text">Customers
+----+--------+-----+----------+--------+
| id | name   | age | city     | phone  |
+----+--------+-----+----------+--------+
| 1  | Ali    | 30  | Ankara   | 555... |
| 2  | Ayse   | 22  | Izmir    | NULL   |
| 3  | Mehmet | 25  | Ankara   | 532... |
| 4  | Zeynep | 41  | Istanbul | NULL   |
| 5  | Arda   | 25  | Bursa    | 542... |
+----+--------+-----+----------+--------+</code></pre>

<h3>Karşılaştırma Operatörleri</h3>
<div class="table-wrap"><table>
<thead><tr><th>Operatör</th><th>Anlamı</th><th>Örnek</th></tr></thead>
<tbody>
<tr><td><code>=</code></td><td>Eşittir</td><td>city = 'Ankara'</td></tr>
<tr><td><code>!=</code> veya <code>&lt;&gt;</code></td><td>Eşit değildir (<strong>ikisi aynı iş</strong>)</td><td>city &lt;&gt; 'Ankara'</td></tr>
<tr><td><code>&gt;</code> / <code>&lt;</code></td><td>Büyüktür / küçüktür</td><td>age &gt; 25</td></tr>
<tr><td><code>&gt;=</code> / <code>&lt;=</code></td><td>Büyük eşit / küçük eşit</td><td>age &gt;= 25 (25 dahil!)</td></tr>
</tbody>
</table></div>
<pre><code class="lang-sql">SELECT * FROM Customers WHERE city = 'Ankara' AND age &gt; 25;
-- Sonuç: sadece Ali (30, Ankara). Mehmet elenir çünkü 25 &gt; 25 değildir.</code></pre>

<h3>Mantıksal Operatörler: AND, OR, NOT</h3>
<ul>
<li><code>AND</code> → <strong>iki koşul da</strong> doğruysa satır gelir.</li>
<li><code>OR</code> → koşullardan <strong>en az biri</strong> doğruysa satır gelir.</li>
<li><code>NOT</code> → koşulun tersini alır.</li>
</ul>
<p><strong>Öncelik sırası: önce NOT, sonra AND, en son OR.</strong> Yani AND, OR'dan önce değerlendirilir:</p>
<pre><code class="lang-sql">SELECT * FROM Customers
WHERE city = 'Ankara' OR city = 'Izmir' AND age &gt; 25;
-- AND önce işler: (city='Izmir' AND age&gt;25) → kimse yok
-- Sonra OR: city='Ankara' olanlar → Ali, Mehmet
-- Sonuç: Ali ve Mehmet. "Izmir'liler de gelir" diye düşünmek tuzaktır!

SELECT * FROM Customers
WHERE (city = 'Ankara' OR city = 'Izmir') AND age &gt; 25;
-- Parantez önceliği değiştirir → önce şehir kontrolü, sonra yaş
-- Sonuç: sadece Ali (Ayse 22 yaşında olduğu için elenir)</code></pre>
<div class="callout tip"><p><strong>Pratik kural:</strong> AND ile OR aynı sorgudaysa kafanda hep parantez kur: <code>a OR b AND c</code> aslında <code>a OR (b AND c)</code> demektir.</p></div>

<h3>BETWEEN — Aralık Kontrolü</h3>
<p><code>BETWEEN x AND y</code>, değerin x ile y arasında olup olmadığına bakar ve <strong>iki sınır da dahildir</strong>:</p>
<pre><code class="lang-sql">SELECT name FROM Customers WHERE age BETWEEN 25 AND 30;
-- 25 ve 30 DAHİL → Ali (30), Mehmet (25), Arda (25)
-- Aynı şey: WHERE age &gt;= 25 AND age &lt;= 30</code></pre>

<h3>IN — Liste Kontrolü</h3>
<p><code>IN (...)</code>, değerin listedeki herhangi birine eşit olup olmadığına bakar. Art arda OR yazmanın kısa yoludur:</p>
<pre><code class="lang-sql">SELECT name FROM Customers WHERE city IN ('Ankara', 'Izmir');
-- Aynı şey: WHERE city = 'Ankara' OR city = 'Izmir'
-- Sonuç: Ali, Ayse, Mehmet

SELECT name FROM Customers WHERE city NOT IN ('Ankara', 'Izmir');
-- Sonuç: Zeynep, Arda</code></pre>

<h3>LIKE — Desen (Kalıp) Arama</h3>
<p>Metinlerde kalıp aramak için kullanılır. İki joker karakteri var:</p>
<ul>
<li><code>%</code> → <strong>sıfır veya daha çok</strong> karakter (herhangi bir şey)</li>
<li><code>_</code> → <strong>tam olarak bir</strong> karakter</li>
</ul>
<div class="table-wrap"><table>
<thead><tr><th>Desen</th><th>Anlamı</th><th>Eşleşen örnek</th></tr></thead>
<tbody>
<tr><td><code>LIKE 'A%'</code></td><td>A ile <strong>başlayanlar</strong></td><td>Ali, Ayse, Arda</td></tr>
<tr><td><code>LIKE '%a'</code></td><td>a ile <strong>bitenler</strong></td><td>Arda</td></tr>
<tr><td><code>LIKE '%an%'</code></td><td>içinde "an" <strong>geçenler</strong></td><td>Ankara, Istanbul</td></tr>
<tr><td><code>LIKE 'A_i'</code></td><td>A + herhangi 1 karakter + i</td><td>Ali (Ayse eşleşmez: 4 harf)</td></tr>
<tr><td><code>LIKE '_li'</code></td><td>3 harfli, "li" ile biten</td><td>Ali</td></tr>
</tbody>
</table></div>
<pre><code class="lang-sql">SELECT name FROM Customers WHERE name LIKE 'A%';
-- Ali, Ayse, Arda (Mehmet ve Zeynep elenir)</code></pre>

<h3>NULL Kontrolü: IS NULL / IS NOT NULL</h3>
<p>Bu, sınavın <strong>en klasik tuzağıdır</strong>. NULL "bilinmeyen" demektir; bilinmeyen bir şeyle <code>=</code> karşılaştırması yapılamaz:</p>
<pre><code class="lang-sql">SELECT name FROM Customers WHERE phone = NULL;
-- YANLIŞ KULLANIM: hiçbir satır dönmez! (NULL = NULL bile doğru sayılmaz)

SELECT name FROM Customers WHERE phone IS NULL;
-- DOĞRU: Ayse, Zeynep

SELECT name FROM Customers WHERE phone IS NOT NULL;
-- Ali, Mehmet, Arda</code></pre>
<div class="callout warn"><p><strong>Çok kritik:</strong> <code>= NULL</code>, <code>!= NULL</code>, <code>&lt;&gt; NULL</code> karşılaştırmalarının hepsi "bilinmeyen" sonuç verir ve satır döndürmez. NULL sorgulamanın tek doğru yolu <code>IS NULL</code> / <code>IS NOT NULL</code>. Ayrıca <code>city != 'Ankara'</code> koşulu, city alanı <strong>NULL olan satırları da getirmez</strong> — NULL hiçbir karşılaştırmaya "evet" demez.</p></div>

<h2>⚠️ Karıştırılan Kavramlar</h2>

<div class="table-wrap"><table>
<thead><tr><th>Karışan ikili</th><th>Doğrusu</th></tr></thead>
<tbody>
<tr><td><code>= NULL</code> vs <code>IS NULL</code></td><td>NULL kontrolü yalnızca <code>IS NULL</code> ile yapılır; <code>= NULL</code> hiç satır döndürmez</td></tr>
<tr><td><code>!=</code> vs <code>&lt;&gt;</code></td><td>İkisi de "eşit değil" — fark yoktur, ikisi de geçerlidir</td></tr>
<tr><td><code>%</code> vs <code>_</code></td><td><code>%</code> herhangi sayıda karakter; <code>_</code> tam 1 karakter</td></tr>
<tr><td><code>BETWEEN 10 AND 20</code></td><td>10 ve 20 <strong>dahildir</strong> (&gt;= ve &lt;= gibi)</td></tr>
<tr><td><code>IN</code> vs <code>BETWEEN</code></td><td>IN ayrık liste (= = = OR'ları); BETWEEN sürekli aralık</td></tr>
<tr><td><code>AND</code> vs <code>OR</code> önceliği</td><td>AND önce değerlendirilir; karışıklığı parantez çözer</td></tr>
</tbody>
</table></div>

<div class="callout warn"><p><strong>Tuzak:</strong> "age &gt; 25" koşulu 25 yaşındakileri <strong>getirmez</strong>; "25 ve üzeri" isteniyorsa <code>&gt;=</code> gerekir. Şıklarda &gt; ile &gt;= farkı üzerinden çeldirici kurulur — soru metnindeki "dahil" kelimesine dikkat et.</p></div>

<h2>🎯 Sınavda Nasıl Sorulur?</h2>
<ul>
<li><strong>"Bu sorgu kaç satır / hangi kayıtları döndürür?"</strong> — tablo + AND/OR/BETWEEN'li sorgu verilir; öncelik ve sınır (dahil mi?) bilgisi test edilir.</li>
<li><strong>LIKE deseni eşleştirme:</strong> "LIKE 'A%' hangi isimleri getirir?" veya tersten: "Soyadı 'an' içerenleri getiren desen hangisi?"</li>
<li><strong>NULL tuzağı:</strong> "Telefonu olmayan müşterileri listeleyen sorgu hangisidir?" — şıklarda <code>= NULL</code> ve <code>IS NULL</code> yan yana verilir.</li>
<li><strong>Eşdeğer sorgu bulma:</strong> "WHERE age BETWEEN 18 AND 30 ile aynı sonucu veren sorgu hangisidir?" (cevap: age &gt;= 18 AND age &lt;= 30).</li>
<li><strong>Operatör öncelik sorusu:</strong> parantezsiz AND/OR karışımı verilip sonucun yorumlanması istenir.</li>
</ul>

<h2>✍️ Örnek Sorular</h2>
<p>Sorular yukarıdaki <strong>Customers</strong> tablosuna göredir.</p>

<div class="quiz-q" data-answer="b">
  <p class="q-text"><strong>Soru 1.</strong> <code>WHERE name LIKE 'A%'</code> koşulu hangi kayıtları getirir?</p>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) Adı A ile bitenleri</button>
    <button class="q-opt" data-opt="b">B) Adı A ile başlayanları</button>
    <button class="q-opt" data-opt="c">C) Adında A geçen tüm kayıtları</button>
    <button class="q-opt" data-opt="d">D) Adı tam olarak iki harf olup A ile başlayanları</button>
  </div>
  <div class="q-explain"><strong>Cevap: B.</strong> Desen "A + herhangi bir şey" demektir → A ile başlayanlar. A ile bitenler için <code>'%A'</code>, içinde A geçenler için <code>'%A%'</code> gerekir. D yanlış: tek karakter jokeri <code>_</code>'dir, <code>%</code> sınırsızdır.</div>
</div>

<div class="quiz-q" data-answer="c">
  <p class="q-text"><strong>Soru 2.</strong> <code>WHERE age BETWEEN 22 AND 30</code> koşulu Customers tablosundan kaç satır döndürür?</p>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) 2</button>
    <button class="q-opt" data-opt="b">B) 3</button>
    <button class="q-opt" data-opt="c">C) 4</button>
    <button class="q-opt" data-opt="d">D) 5</button>
  </div>
  <div class="q-explain"><strong>Cevap: C.</strong> BETWEEN sınırları <strong>dahil eder</strong>: 22 (Ayse), 25 (Mehmet), 25 (Arda), 30 (Ali) → 4 satır. A ve B, "sınırlar dahil değil" yanılgısının sonuçlarıdır; Zeynep (41) aralık dışıdır.</div>
</div>

<div class="quiz-q" data-answer="a">
  <p class="q-text"><strong>Soru 3.</strong> Aşağıdaki sorgu hangi müşterileri döndürür?</p>
  <pre><code class="lang-sql">SELECT name FROM Customers
WHERE city = 'Izmir' OR city = 'Ankara' AND age &gt; 25;</code></pre>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) Ayse ve Ali</button>
    <button class="q-opt" data-opt="b">B) Sadece Ali</button>
    <button class="q-opt" data-opt="c">C) Ali, Ayse ve Mehmet</button>
    <button class="q-opt" data-opt="d">D) Sadece Ayse</button>
  </div>
  <div class="q-explain"><strong>Cevap: A.</strong> AND önce işler: (Ankara AND age&gt;25) → Ali. Sonra OR: Izmir'liler → Ayse. Sonuç: Ayse + Ali. B, parantezli yorumun ((Izmir OR Ankara) AND yaş) sonucudur — tuzak budur. C, AND koşulunu yok sayar (Mehmet 25, &gt;25 değil).</div>
</div>

<div class="quiz-q" data-answer="d">
  <p class="q-text"><strong>Soru 4.</strong> <code>WHERE city IN ('Ankara', 'Bursa')</code> koşulunun eşdeğeri hangisidir?</p>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) <code>WHERE city = 'Ankara' AND city = 'Bursa'</code></button>
    <button class="q-opt" data-opt="b">B) <code>WHERE city BETWEEN 'Ankara' AND 'Bursa'</code></button>
    <button class="q-opt" data-opt="c">C) <code>WHERE city LIKE 'Ankara%Bursa'</code></button>
    <button class="q-opt" data-opt="d">D) <code>WHERE city = 'Ankara' OR city = 'Bursa'</code></button>
  </div>
  <div class="q-explain"><strong>Cevap: D.</strong> IN, "listedekilerden herhangi birine eşit" demektir → OR zinciri. A mantıken imkansızdır: bir şehir aynı anda hem Ankara hem Bursa olamaz, hiç satır dönmez. B alfabetik aralık kontrolüdür (araya giren başka şehirler de gelirdi), C anlamsız bir desendir.</div>
</div>

<div class="quiz-q" data-answer="c">
  <p class="q-text"><strong>Soru 5.</strong> (Tuzak) Telefon numarası kayıtlı <strong>olmayan</strong> müşterileri listelemek isteyen bir geliştirici şu sorguyu yazıyor:</p>
  <pre><code class="lang-sql">SELECT name FROM Customers WHERE phone = NULL;</code></pre>
  <p class="q-text">Bu sorgunun sonucu ne olur?</p>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) Ayse ve Zeynep listelenir</button>
    <button class="q-opt" data-opt="b">B) Sözdizimi hatası verir</button>
    <button class="q-opt" data-opt="c">C) Hiçbir satır dönmez; doğrusu <code>phone IS NULL</code> olmalıydı</button>
    <button class="q-opt" data-opt="d">D) Telefonu olan müşteriler listelenir</button>
  </div>
  <div class="q-explain"><strong>Cevap: C.</strong> NULL ile <code>=</code> karşılaştırması her satır için "bilinmeyen" sonucu verir, hiçbir satır koşulu geçemez. Sorgu çalışır ama <strong>boş döner</strong> — bu yüzden B de yanlış (hata vermez). NULL kontrolünün tek doğru yolu <code>IS NULL</code>'dır; A ancak o zaman doğru olurdu.</div>
</div>

<h2>🔁 Mini Tekrar</h2>
<div class="table-wrap"><table>
<thead><tr><th>Yapı</th><th>Görevi</th><th>Kritik not</th></tr></thead>
<tbody>
<tr><td><code>=, !=, &lt;&gt;, &gt;, &lt;, &gt;=, &lt;=</code></td><td>Karşılaştırma</td><td><code>!=</code> ile <code>&lt;&gt;</code> aynıdır</td></tr>
<tr><td><code>AND / OR / NOT</code></td><td>Koşul birleştirme</td><td>Öncelik: NOT &gt; AND &gt; OR</td></tr>
<tr><td><code>BETWEEN x AND y</code></td><td>Aralık</td><td><strong>Sınırlar dahil</strong></td></tr>
<tr><td><code>IN (a, b, c)</code></td><td>Liste kontrolü</td><td>= OR = OR = kısayolu</td></tr>
<tr><td><code>LIKE</code></td><td>Desen arama</td><td><code>%</code> çok karakter, <code>_</code> tek karakter</td></tr>
<tr><td><code>IS NULL / IS NOT NULL</code></td><td>NULL kontrolü</td><td><code>= NULL</code> asla satır döndürmez!</td></tr>
</tbody>
</table></div>
`
  },
  {
    module: 'sql',
    id: 'sql-05-aggregate',
    order: 5,
    title: 'Aggregate Fonksiyonları',
    html: `
<h2>📖 Konu Anlatımı</h2>

<p>Aggregate (toplama/özet) fonksiyonları, <strong>birden çok satırı alıp tek bir sonuç</strong> üretir: toplam, ortalama, sayım, en büyük, en küçük. Bu konunun sınav cephesi nettir: <strong>NULL davranışı</strong> ve <strong>COUNT çeşitleri</strong>. Örnek tablomuz (NULL'lara dikkat):</p>
<pre><code class="lang-text">Employees
+----+--------+------------+--------+-------+
| id | name   | department | salary | bonus |
+----+--------+------------+--------+-------+
| 1  | Ali    | IT         | 40000  | 5000  |
| 2  | Ayse   | IK         | 50000  | NULL  |
| 3  | Mehmet | IT         | 30000  | 2000  |
| 4  | Zeynep | IK         | 60000  | NULL  |
| 5  | Arda   | IT         | NULL   | 1000  |
+----+--------+------------+--------+-------+</code></pre>

<h3>Beş Temel Fonksiyon</h3>
<div class="table-wrap"><table>
<thead><tr><th>Fonksiyon</th><th>Görevi</th><th>Bu tabloda sonucu</th></tr></thead>
<tbody>
<tr><td><code>COUNT(*)</code></td><td>Satır sayar (NULL dahil her satır)</td><td>5</td></tr>
<tr><td><code>SUM(salary)</code></td><td>Toplar (NULL'ları atlar)</td><td>180000</td></tr>
<tr><td><code>AVG(salary)</code></td><td>Ortalama alır (NULL'ları atlar)</td><td>45000</td></tr>
<tr><td><code>MIN(salary)</code></td><td>En küçük değer</td><td>30000</td></tr>
<tr><td><code>MAX(salary)</code></td><td>En büyük değer</td><td>60000</td></tr>
</tbody>
</table></div>
<pre><code class="lang-sql">SELECT AVG(salary) FROM Employees;   -- 45000
SELECT MAX(salary) FROM Employees;   -- 60000
SELECT SUM(salary) FROM Employees;   -- 180000</code></pre>

<h3>COUNT'un Üç Hali — Sınavın Favorisi</h3>
<p>Bu ayrımı bilmeyen, sınavda en az 1 soru kaybeder:</p>
<div class="table-wrap"><table>
<thead><tr><th>Kullanım</th><th>Neyi sayar?</th><th>Bu tabloda sonucu</th></tr></thead>
<tbody>
<tr><td><code>COUNT(*)</code></td><td><strong>Tüm satırları</strong> (NULL içerse de)</td><td>5</td></tr>
<tr><td><code>COUNT(salary)</code></td><td>salary sütununda <strong>NULL olmayan</strong> değerleri</td><td>4 (Arda'nın maaşı NULL)</td></tr>
<tr><td><code>COUNT(bonus)</code></td><td>bonus sütununda NULL olmayanları</td><td>3 (Ayse ve Zeynep NULL)</td></tr>
<tr><td><code>COUNT(DISTINCT department)</code></td><td>NULL olmayan <strong>benzersiz</strong> değerleri</td><td>2 (IT, IK)</td></tr>
</tbody>
</table></div>
<pre><code class="lang-sql">SELECT COUNT(*) FROM Employees;                 -- 5
SELECT COUNT(salary) FROM Employees;            -- 4
SELECT COUNT(DISTINCT department) FROM Employees; -- 2</code></pre>

<h3>AVG ve NULL İnceliği</h3>
<p><code>AVG</code>, NULL değerleri <strong>hem toplama hem bölme tarafında yok sayar</strong>. Yani:</p>
<pre><code class="lang-sql">SELECT AVG(salary) FROM Employees;
-- (40000 + 50000 + 30000 + 60000) / 4 = 45000
-- 5'e BÖLMEZ! NULL satır hesaba hiç katılmaz.</code></pre>
<p>"NULL'u 0 sayar" diye düşünürsen 180000/5 = 36000 bulursun — bu, şıklarda seni bekleyen çeldiricidir. NULL'ları 0 gibi saydırmak istersen <code>AVG(COALESCE(salary, 0))</code> gibi açık bir dönüşüm gerekir.</p>

<h3>MIN / MAX Sadece Sayı İçin Değil</h3>
<p>MIN ve MAX metinlerde alfabetik, tarihlerde kronolojik çalışır: <code>MIN(name)</code> → Ali (alfabetik ilk), <code>MAX(hire_date)</code> → en son işe giren.</p>

<h3>WHERE ile Birlikte Kullanım</h3>
<p>Aggregate fonksiyon, WHERE'den <strong>geçen satırlar üzerinde</strong> hesap yapar:</p>
<pre><code class="lang-sql">SELECT COUNT(*) FROM Employees WHERE department = 'IT';
-- Önce filtre: Ali, Mehmet, Arda → sonra sayım: 3</code></pre>
<div class="callout info"><p><strong>Önemli kural:</strong> Aggregate fonksiyonlar <strong>WHERE içinde kullanılamaz</strong> (<code>WHERE AVG(salary) &gt; 100</code> hata verir). Aggregate sonucuna filtre HAVING ile yapılır — bir sonraki konunun ana fikri.</p></div>

<h2>⚠️ Karıştırılan Kavramlar</h2>

<div class="table-wrap"><table>
<thead><tr><th>Karışan ikili</th><th>Farkı</th></tr></thead>
<tbody>
<tr><td><code>COUNT(*)</code> vs <code>COUNT(sütun)</code></td><td>* tüm satırları sayar; sütun verilirse <strong>NULL'lar sayılmaz</strong></td></tr>
<tr><td><code>COUNT(sütun)</code> vs <code>COUNT(DISTINCT sütun)</code></td><td>İlki tekrarları da sayar; ikincisi her değeri bir kez sayar</td></tr>
<tr><td><code>SUM</code> vs <code>COUNT</code></td><td>SUM değerleri <strong>toplar</strong>; COUNT kaç tane olduğunu <strong>sayar</strong></td></tr>
<tr><td><code>MAX(salary)</code> vs <code>ORDER BY salary DESC LIMIT 1</code></td><td>MAX tek değeri döndürür; ORDER BY+LIMIT o satırın tamamını getirebilir</td></tr>
<tr><td>AVG'de NULL</td><td>NULL yok sayılır (paydaya da girmez); 0 olarak <strong>hesaplanmaz</strong></td></tr>
</tbody>
</table></div>

<div class="callout warn"><p><strong>Tuzak:</strong> "Tablodaki çalışan sayısı" sorulursa <code>COUNT(*)</code> güvenlidir. <code>COUNT(salary)</code> gibi sütunlu sayım, o sütunda NULL olan satırları <strong>atlar</strong> ve eksik sonuç verir. Şıklarda ikisi yan yana geldiğinde sorunun "neyi" saydırdığını dikkatle oku.</p></div>

<div class="callout tip"><p><strong>Ezber hilesi:</strong> Parantezin içinde sütun adı varsa aklına hemen "NULL'lar sayılmaz/katılmaz" gelsin. Yıldız (*) varsa "her satır sayılır".</p></div>

<h2>🎯 Sınavda Nasıl Sorulur?</h2>
<ul>
<li><strong>Değer hesaplatma:</strong> NULL içeren küçük bir tablo verilir; "COUNT(sütun) / AVG(sütun) sonucu kaçtır?" diye sorulur. Çeldiriciler: NULL'u saymış veya 0 kabul etmiş sonuçlar.</li>
<li><strong>COUNT(*) vs COUNT(sütun):</strong> "Aşağıdaki iki sorgunun sonuçları neden farklıdır?" veya "hangisi 5 döndürür?" kalıbı.</li>
<li><strong>Doğru fonksiyonu seçme:</strong> "Ortalama maaşı bulmak için hangisi kullanılır?" gibi doğrudan tanım soruları.</li>
<li><strong>WHERE + aggregate birlikte:</strong> "WHERE'den sonra kaç satır kalır, COUNT ne döndürür?" iki aşamalı hesap soruları.</li>
<li><strong>Geçersiz kullanım:</strong> "Hangi sorgu hata verir?" şıklarından birinde <code>WHERE AVG(salary) &gt; ...</code> bulunur.</li>
</ul>

<h2>✍️ Örnek Sorular</h2>
<p>Sorular yukarıdaki <strong>Employees</strong> tablosuna göredir (5 satır; Arda'nın salary'si NULL, Ayse ve Zeynep'in bonus'u NULL).</p>

<div class="quiz-q" data-answer="d">
  <p class="q-text"><strong>Soru 1.</strong> Bir sütundaki değerlerin ortalamasını hesaplayan aggregate fonksiyonu hangisidir?</p>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) <code>SUM()</code></button>
    <button class="q-opt" data-opt="b">B) <code>COUNT()</code></button>
    <button class="q-opt" data-opt="c">C) <code>MID()</code></button>
    <button class="q-opt" data-opt="d">D) <code>AVG()</code></button>
  </div>
  <div class="q-explain"><strong>Cevap: D.</strong> AVG (average) ortalama alır. SUM toplar, COUNT sayar; MID bazı dillerde metin fonksiyonudur, aggregate değildir — ortalama ile ilgisi yoktur.</div>
</div>

<div class="quiz-q" data-answer="a">
  <p class="q-text"><strong>Soru 2.</strong> <code>COUNT(*)</code> ifadesi neyi sayar?</p>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) Tablodaki tüm satırları, NULL içerenler dahil</button>
    <button class="q-opt" data-opt="b">B) Sadece NULL içermeyen satırları</button>
    <button class="q-opt" data-opt="c">C) Tablodaki sütun sayısını</button>
    <button class="q-opt" data-opt="d">D) Sadece benzersiz satırları</button>
  </div>
  <div class="q-explain"><strong>Cevap: A.</strong> COUNT(*) satır sayar ve NULL ayrımı yapmaz. NULL'ları dışlamak COUNT(sütun)'un davranışıdır (B çeldirici); benzersiz sayım için COUNT(DISTINCT sütun) gerekir (D); sütun sayısıyla hiçbir COUNT ilgilenmez (C).</div>
</div>

<div class="quiz-q" data-answer="b">
  <p class="q-text"><strong>Soru 3.</strong> Aşağıdaki sorgunun sonucu kaçtır?</p>
  <pre><code class="lang-sql">SELECT COUNT(bonus) FROM Employees;</code></pre>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) 5</button>
    <button class="q-opt" data-opt="b">B) 3</button>
    <button class="q-opt" data-opt="c">C) 4</button>
    <button class="q-opt" data-opt="d">D) 2</button>
  </div>
  <div class="q-explain"><strong>Cevap: B.</strong> COUNT(bonus), bonus değeri NULL olmayan satırları sayar: Ali (5000), Mehmet (2000), Arda (1000) → 3. A (5) COUNT(*) sonucudur; D (2) NULL olanların sayısıdır — soru NULL olmayanları soruyor.</div>
</div>

<div class="quiz-q" data-answer="c">
  <p class="q-text"><strong>Soru 4.</strong> (Tuzak) Aşağıdaki sorgunun sonucu kaçtır?</p>
  <pre><code class="lang-sql">SELECT AVG(salary) FROM Employees;</code></pre>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) 36000 — toplam 180000, 5 çalışan var</button>
    <button class="q-opt" data-opt="b">B) 180000</button>
    <button class="q-opt" data-opt="c">C) 45000 — toplam 180000, NULL olmayan 4 değer</button>
    <button class="q-opt" data-opt="d">D) NULL — çünkü sütunda NULL değer var</button>
  </div>
  <div class="q-explain"><strong>Cevap: C.</strong> AVG, NULL'u hesaba hiç katmaz: 180000 / 4 = 45000. A klasik tuzaktır (NULL'u 0 sayıp 5'e bölmek). B sadece SUM'dır. D yanlış: sütunda NULL olması sonucu NULL yapmaz, NULL'lar atlanır.</div>
</div>

<div class="quiz-q" data-answer="b">
  <p class="q-text"><strong>Soru 5.</strong> Maaş bilgisi girilmemiş olanlar dahil, tablodaki <strong>toplam çalışan sayısını</strong> doğru veren sorgu hangisidir?</p>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) <code>SELECT COUNT(salary) FROM Employees;</code></button>
    <button class="q-opt" data-opt="b">B) <code>SELECT COUNT(*) FROM Employees;</code></button>
    <button class="q-opt" data-opt="c">C) <code>SELECT SUM(salary) FROM Employees;</code></button>
    <button class="q-opt" data-opt="d">D) <code>SELECT COUNT(DISTINCT salary) FROM Employees;</code></button>
  </div>
  <div class="q-explain"><strong>Cevap: B.</strong> COUNT(*) tüm satırları sayar → 5. A, Arda'nın maaşı NULL olduğu için 4 döndürür (eksik!). C sayı değil maaş toplamı verir. D benzersiz maaş <strong>değerlerini</strong> sayar, çalışanları değil.</div>
</div>

<h2>🔁 Mini Tekrar</h2>
<div class="table-wrap"><table>
<thead><tr><th>Fonksiyon</th><th>Görevi</th><th>NULL davranışı</th></tr></thead>
<tbody>
<tr><td><code>COUNT(*)</code></td><td>Satır sayar</td><td>NULL'lu satırlar da <strong>sayılır</strong></td></tr>
<tr><td><code>COUNT(sütun)</code></td><td>Değer sayar</td><td>NULL'lar <strong>sayılmaz</strong></td></tr>
<tr><td><code>COUNT(DISTINCT s)</code></td><td>Benzersiz değer sayar</td><td>NULL'lar sayılmaz</td></tr>
<tr><td><code>SUM(sütun)</code></td><td>Toplar</td><td>NULL'lar atlanır</td></tr>
<tr><td><code>AVG(sütun)</code></td><td>Ortalama</td><td>NULL'lar paya da paydaya da girmez</td></tr>
<tr><td><code>MIN / MAX</code></td><td>En küçük / en büyük</td><td>NULL'lar atlanır; metin ve tarihte de çalışır</td></tr>
<tr><td colspan="3"><strong>Unutma:</strong> Aggregate, WHERE içinde kullanılamaz → HAVING gerekir.</td></tr>
</tbody>
</table></div>
`
  },
  {
    module: 'sql',
    id: 'sql-06-group-having',
    order: 6,
    title: 'GROUP BY ve HAVING',
    html: `
<h2>📖 Konu Anlatımı</h2>

<p>Bu konu sınavın <strong>en kritik ayrımlarından birini</strong> içeriyor: WHERE–HAVING farkı. Neredeyse her sınavda en az bir soru buradan gelir. Örnek tablomuz:</p>
<pre><code class="lang-text">Employees
+----+--------+---------------+--------+
| id | name   | department_id | salary |
+----+--------+---------------+--------+
| 1  | Ali    | 10            | 40000  |
| 2  | Ayse   | 20            | 60000  |
| 3  | Mehmet | 10            | 50000  |
| 4  | Zeynep | 20            | 70000  |
| 5  | Arda   | 30            | 30000  |
+----+--------+---------------+--------+</code></pre>

<h3>GROUP BY Ne Yapar?</h3>
<p><code>GROUP BY</code>, aynı değere sahip satırları <strong>tek grupta toplar</strong>; aggregate fonksiyonlar da artık tüm tablo yerine <strong>her grup için ayrı ayrı</strong> hesaplanır. Sonuçta <strong>her gruptan 1 satır</strong> döner:</p>
<pre><code class="lang-sql">SELECT department_id, COUNT(*) AS kisi, AVG(salary) AS ort_maas
FROM Employees
GROUP BY department_id;</code></pre>
<pre><code class="lang-text">Sonuç (3 grup = 3 satır):
+---------------+------+----------+
| department_id | kisi | ort_maas |
+---------------+------+----------+
| 10            | 2    | 45000    |
| 20            | 2    | 65000    |
| 30            | 1    | 30000    |
+---------------+------+----------+</code></pre>

<h3>Altın Kural: SELECT'teki Sütunlar</h3>
<p>GROUP BY kullanıldığında, SELECT'te yalnızca iki tür ifade olabilir:</p>
<ol>
<li><strong>GROUP BY'da yazılı sütunlar</strong> (örn. department_id)</li>
<li><strong>Aggregate fonksiyonlar</strong> (COUNT, AVG, SUM...)</li>
</ol>
<pre><code class="lang-sql">SELECT name, AVG(salary)        -- HATALI!
FROM Employees
GROUP BY department_id;
-- name ne grupta ne aggregate içinde: grup başına tek satır dönerken
-- hangi 'name' yazılacak belirsiz olur. Standart SQL hata verir.</code></pre>

<h3>HAVING Ne Yapar?</h3>
<p><code>HAVING</code>, gruplama yapıldıktan <strong>sonra</strong>, <strong>grup özetlerine</strong> (aggregate sonuçlarına) filtre uygular. WHERE'in gruplar dünyasındaki karşılığıdır:</p>
<pre><code class="lang-sql">SELECT department_id, AVG(salary)
FROM Employees
GROUP BY department_id
HAVING AVG(salary) &gt; 50000;
-- Gruplar: 10→45000, 20→65000, 30→30000
-- HAVING eler → sadece department_id = 20 döner (1 satır)</code></pre>

<h3>WHERE ve HAVING Aynı Sorguda</h3>
<p>İkisi birlikte kullanılabilir; sıra hep aynıdır: <strong>önce WHERE satırları eler → sonra GROUP BY gruplar → sonra HAVING grupları eler</strong>:</p>
<pre><code class="lang-sql">SELECT department_id, COUNT(*) AS kisi
FROM Employees
WHERE salary &gt; 35000          -- 1) Arda (30000) satır olarak elendi
GROUP BY department_id         -- 2) kalanlar gruplandı: 10→2, 20→2
HAVING COUNT(*) &gt;= 2;          -- 3) iki grup da kosulu sagliyor
-- Sonuç: (10, 2) ve (20, 2) → 2 satır</code></pre>
<p>Mantıksal çalışma sırasının tamamı: <strong>FROM → WHERE → GROUP BY → HAVING → SELECT → ORDER BY</strong>. WHERE'in aggregate görememesinin sebebi de bu: WHERE çalışırken gruplar henüz <strong>oluşmamıştır</strong>.</p>

<h3>HAVING'in WHERE'siz Kullanımı</h3>
<p>HAVING genelde GROUP BY ile kullanılır. <code>WHERE</code> yerine alışkanlıkla <code>HAVING</code> yazmak hem standart dışıdır hem performans kaybıdır: satır filtresi her zaman WHERE'e yazılır.</p>

<h2>⚠️ Karıştırılan Kavramlar</h2>

<h3>WHERE vs HAVING — Sınavın Yıldız Sorusu</h3>
<div class="table-wrap"><table>
<thead><tr><th>Özellik</th><th>WHERE</th><th>HAVING</th></tr></thead>
<tbody>
<tr><td>Ne zaman çalışır?</td><td>Gruplamadan <strong>ÖNCE</strong></td><td>Gruplamadan <strong>SONRA</strong></td></tr>
<tr><td>Neyi filtreler?</td><td><strong>Satırları</strong></td><td><strong>Grupları</strong> (özet sonuçları)</td></tr>
<tr><td>Aggregate kullanılır mı?</td><td><strong>Hayır</strong> (hata verir)</td><td><strong>Evet</strong> (asıl amacı bu)</td></tr>
<tr><td>Örnek</td><td><code>WHERE salary &gt; 30000</code></td><td><code>HAVING AVG(salary) &gt; 50000</code></td></tr>
</tbody>
</table></div>

<div class="callout warn"><p><strong>Tuzak 1:</strong> <code>WHERE AVG(salary) &gt; 50000</code> yazan şık <strong>her zaman yanlıştır</strong> — WHERE içinde aggregate fonksiyon kullanılamaz. Şıklarda WHERE ile HAVING'i yer değiştirmiş sorgular yan yana verilir; aggregate gören filtre HAVING olmalı.</p></div>
<div class="callout warn"><p><strong>Tuzak 2:</strong> SELECT'te aggregate olmayan bir sütun varsa GROUP BY'da da olmalı. <code>SELECT name, AVG(salary) ... GROUP BY department_id</code> tipindeki şıklar hatalıdır — name grupta yok.</p></div>
<div class="callout tip"><p><strong>Ezber hilesi:</strong> "WHERE <strong>ham satıra</strong>, HAVING <strong>hazır özete</strong> bakar." Koşulun içinde COUNT/SUM/AVG/MIN/MAX görüyorsan cevap HAVING'dir.</p></div>

<h2>🎯 Sınavda Nasıl Sorulur?</h2>
<ul>
<li><strong>Doğru sorguyu seçme:</strong> "Ortalama maaşı 50000'den fazla olan departmanları listeleyen sorgu hangisidir?" — çeldiriciler: WHERE AVG(...) yazılmış, GROUP BY unutulmuş, HAVING'in yerine WHERE konmuş versiyonlar.</li>
<li><strong>"Kaç satır döner?":</strong> tablo + GROUP BY'lı sorgu verilir; grup sayısını (ve HAVING'den geçenleri) saymanı ister.</li>
<li><strong>WHERE/HAVING tanım sorusu:</strong> "Gruplamadan sonra filtre uygulayan ifade hangisidir?"</li>
<li><strong>Hatalı sorguyu bulma:</strong> şıklardan biri WHERE içinde aggregate kullanır veya SELECT'te GROUP BY dışı sütun bulundurur — "hangisi hata verir?"</li>
<li><strong>Üç aşamalı hesap:</strong> WHERE + GROUP BY + HAVING'i birlikte içeren sorgunun sonucunu adım adım izlemen istenir.</li>
</ul>

<h2>✍️ Örnek Sorular</h2>
<p>Sorular yukarıdaki <strong>Employees</strong> tablosuna göredir (5 çalışan; departmanlar: 10, 20, 30).</p>

<div class="quiz-q" data-answer="a">
  <p class="q-text"><strong>Soru 1.</strong> <code>GROUP BY</code> ifadesinin görevi nedir?</p>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) Aynı değere sahip satırları gruplayıp aggregate fonksiyonların grup başına hesaplanmasını sağlar</button>
    <button class="q-opt" data-opt="b">B) Sonuçları alfabetik olarak sıralar</button>
    <button class="q-opt" data-opt="c">C) Tekrarlayan satırları siler</button>
    <button class="q-opt" data-opt="d">D) Tabloları birbirine bağlar</button>
  </div>
  <div class="q-explain"><strong>Cevap: A.</strong> GROUP BY gruplar; her gruptan tek özet satırı döner. B sıralamadır (ORDER BY), C tekilleştirme çağrışımıdır (DISTINCT), D birleştirmedir (JOIN).</div>
</div>

<div class="quiz-q" data-answer="c">
  <p class="q-text"><strong>Soru 2.</strong> Aggregate fonksiyon sonuçlarına (örn. <code>COUNT(*) &gt; 5</code>) göre filtreleme hangi ifadeyle yapılır?</p>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) <code>WHERE</code></button>
    <button class="q-opt" data-opt="b">B) <code>ORDER BY</code></button>
    <button class="q-opt" data-opt="c">C) <code>HAVING</code></button>
    <button class="q-opt" data-opt="d">D) <code>GROUP BY</code></button>
  </div>
  <div class="q-explain"><strong>Cevap: C.</strong> Aggregate sonucu = grup özeti; grupları HAVING filtreler. WHERE satır filtreler ve aggregate kabul etmez (A en güçlü çeldirici). ORDER BY sıralar, GROUP BY gruplar — filtrelemezler.</div>
</div>

<div class="quiz-q" data-answer="d">
  <p class="q-text"><strong>Soru 3.</strong> Aşağıdaki sorgu kaç satır döndürür?</p>
  <pre><code class="lang-sql">SELECT department_id, COUNT(*)
FROM Employees
GROUP BY department_id;</code></pre>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) 5</button>
    <button class="q-opt" data-opt="b">B) 1</button>
    <button class="q-opt" data-opt="c">C) 2</button>
    <button class="q-opt" data-opt="d">D) 3</button>
  </div>
  <div class="q-explain"><strong>Cevap: D.</strong> Tabloda 3 farklı departman var (10, 20, 30) → 3 grup → 3 satır. A (5) "satır sayısı değişmez" yanılgısıdır; GROUP BY'da satır sayısı <strong>grup sayısına</strong> iner. B aggregate'in GROUP BY'sız haline aittir.</div>
</div>

<div class="quiz-q" data-answer="b">
  <p class="q-text"><strong>Soru 4.</strong> Ortalama maaşı 50000'in üzerinde olan departmanları listeleyen <strong>doğru</strong> sorgu hangisidir?</p>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) <code>SELECT department_id FROM Employees WHERE AVG(salary) &gt; 50000 GROUP BY department_id;</code></button>
    <button class="q-opt" data-opt="b">B) <code>SELECT department_id FROM Employees GROUP BY department_id HAVING AVG(salary) &gt; 50000;</code></button>
    <button class="q-opt" data-opt="c">C) <code>SELECT department_id FROM Employees WHERE salary &gt; 50000;</code></button>
    <button class="q-opt" data-opt="d">D) <code>SELECT department_id FROM Employees HAVING AVG(salary) &gt; 50000;</code></button>
  </div>
  <div class="q-explain"><strong>Cevap: B.</strong> Grupla, sonra grup ortalamasına HAVING ile bak. A hata verir: WHERE içinde AVG kullanılamaz. C bambaşka bir şey yapar: maaşı 50000 üstü <strong>kişilerin</strong> departmanlarını (tekrarlı) getirir — "departman ortalaması" değildir. D'de gruplama yok; standart SQL'de bu kullanım hatalıdır/anlamsızdır.</div>
</div>

<div class="quiz-q" data-answer="a">
  <p class="q-text"><strong>Soru 5.</strong> (Tuzak) Aşağıdaki sorgunun sonucu nedir?</p>
  <pre><code class="lang-sql">SELECT department_id, COUNT(*)
FROM Employees
WHERE salary &gt; 40000
GROUP BY department_id
HAVING COUNT(*) &gt;= 2;</code></pre>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) Sadece (20, 2) — tek satır</button>
    <button class="q-opt" data-opt="b">B) (10, 2) ve (20, 2) — iki satır</button>
    <button class="q-opt" data-opt="c">C) (10, 1) ve (20, 2) — iki satır</button>
    <button class="q-opt" data-opt="d">D) Hiç satır dönmez</button>
  </div>
  <div class="q-explain"><strong>Cevap: A.</strong> Adım adım: WHERE salary &gt; 40000 → Ayse (20), Mehmet (10), Zeynep (20) kalır (Ali 40000 elenmiştir, &gt; eşitliği içermez!). Gruplar: 10→1 kişi, 20→2 kişi. HAVING COUNT(*) &gt;= 2 → sadece 20. B, Ali'yi yanlışlıkla dahil edenlerin cevabıdır; C, HAVING'i uygulamayanların.</div>
</div>

<div class="quiz-q" data-answer="d">
  <p class="q-text"><strong>Soru 6.</strong> (Tuzak) Aşağıdaki sorgu standart SQL'de neden hatalıdır?</p>
  <pre><code class="lang-sql">SELECT name, AVG(salary)
FROM Employees
GROUP BY department_id;</code></pre>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) AVG fonksiyonu GROUP BY ile birlikte kullanılamaz</button>
    <button class="q-opt" data-opt="b">B) GROUP BY'dan sonra HAVING yazılması zorunludur</button>
    <button class="q-opt" data-opt="c">C) AVG(salary) için takma ad (AS) verilmesi zorunludur</button>
    <button class="q-opt" data-opt="d">D) name sütunu ne GROUP BY listesinde ne de aggregate fonksiyon içinde</button>
  </div>
  <div class="q-explain"><strong>Cevap: D.</strong> Grup başına tek satır dönerken gruptaki hangi name'in yazılacağı belirsizdir; bu yüzden SELECT'teki aggregate dışı her sütun GROUP BY'da olmalıdır. A tam tersi doğrudur (AVG, GROUP BY ile çok kullanılır); B ve C diye bir zorunluluk yoktur.</div>
</div>

<h2>🔁 Mini Tekrar</h2>
<div class="table-wrap"><table>
<thead><tr><th>Konu</th><th>Kural</th></tr></thead>
<tbody>
<tr><td>GROUP BY</td><td>Aynı değerli satırları gruplar; her gruptan 1 satır döner</td></tr>
<tr><td>HAVING</td><td>Gruplamadan SONRA, aggregate sonuçlarını filtreler</td></tr>
<tr><td>WHERE</td><td>Gruplamadan ÖNCE, satırları filtreler; aggregate kullanamaz</td></tr>
<tr><td>Çalışma sırası</td><td>FROM → WHERE → GROUP BY → HAVING → SELECT → ORDER BY</td></tr>
<tr><td>SELECT kuralı</td><td>Aggregate dışı sütunlar GROUP BY'da olmak zorunda</td></tr>
<tr><td>Refleks</td><td>Koşulda COUNT/SUM/AVG görüyorsan → HAVING</td></tr>
</tbody>
</table></div>
`
  },
  {
    module: 'sql',
    id: 'sql-07-join',
    order: 7,
    title: 'JOIN İşlemleri',
    html: `
<h2>📖 Konu Anlatımı</h2>

<p>JOIN, sınavın <strong>en önemli SQL konusudur</strong>: hem tanım hem "kaç satır döner?" hem "hangi JOIN'i seçmeliyim?" soruları gelir. JOIN, iki (veya daha çok) tabloyu <strong>ortak bir sütun üzerinden</strong> birleştirir. Bu ortak sütun genelde bir tablonun <strong>primary key'i</strong> ile diğerinin <strong>foreign key'idir</strong>. Tüm örnekler şu iki tabloya göre:</p>
<pre><code class="lang-text">Employees (4 satır)              Departments (3 satır)
+----+--------+---------------+  +----+-----------------+
| id | name   | department_id |  | id | department_name |
+----+--------+---------------+  +----+-----------------+
| 1  | Ali    | 10            |  | 10 | IT              |
| 2  | Ayse   | 20            |  | 20 | IK              |
| 3  | Mehmet | 10            |  | 30 | Muhasebe        |
| 4  | Zeynep | NULL          |  +----+-----------------+
+----+--------+---------------+</code></pre>
<p>Dikkat: Zeynep'in departmanı yok (NULL); Muhasebe'de (30) hiç çalışan yok. Bu iki "eşleşmeyen" durum, JOIN türleri arasındaki tüm farkı yaratır.</p>

<h3>ON — Birleştirme Koşulu</h3>
<pre><code class="lang-sql">SELECT e.name, d.department_name
FROM Employees e
INNER JOIN Departments d ON e.department_id = d.id;</code></pre>
<p><code>ON</code>, hangi satırların eşleşeceğini söyler: çalışanın department_id'si, departmanın id'sine eşit olmalı. <code>e</code> ve <code>d</code> tablo takma adlarıdır (alias) — uzun isimleri kısaltır.</p>

<h3>INNER JOIN — Sadece Eşleşenler</h3>
<pre><code class="lang-sql">SELECT e.name, d.department_name
FROM Employees e
INNER JOIN Departments d ON e.department_id = d.id;</code></pre>
<pre><code class="lang-text">Sonuç: 3 satır
+--------+-----------------+
| name   | department_name |
+--------+-----------------+
| Ali    | IT              |
| Ayse   | IK              |
| Mehmet | IT              |
+--------+-----------------+
Zeynep yok (NULL eşleşmedi), Muhasebe yok (çalışanı yok).</code></pre>

<h3>LEFT JOIN — Sol Tablonun Tamamı</h3>
<p>FROM'dan sonra yazılan tablo "sol" tablodur. LEFT JOIN, <strong>sol tablonun tüm satırlarını</strong> getirir; sağda eşleşme yoksa o sütunlar <strong>NULL</strong> olur:</p>
<pre><code class="lang-sql">SELECT e.name, d.department_name
FROM Employees e
LEFT JOIN Departments d ON e.department_id = d.id;</code></pre>
<pre><code class="lang-text">Sonuç: 4 satır
+--------+-----------------+
| name   | department_name |
+--------+-----------------+
| Ali    | IT              |
| Ayse   | IK              |
| Mehmet | IT              |
| Zeynep | NULL            |   &lt;-- eşleşmedi ama geldi, sağ taraf NULL
+--------+-----------------+</code></pre>

<h3>RIGHT JOIN — Sağ Tablonun Tamamı</h3>
<p>LEFT'in aynadaki hali: <strong>sağ tablonun</strong> (JOIN'den sonra yazılanın) tüm satırları gelir, solda eşleşmeyen yerler NULL olur:</p>
<pre><code class="lang-sql">SELECT e.name, d.department_name
FROM Employees e
RIGHT JOIN Departments d ON e.department_id = d.id;</code></pre>
<pre><code class="lang-text">Sonuç: 4 satır
+--------+-----------------+
| name   | department_name |
+--------+-----------------+
| Ali    | IT              |
| Mehmet | IT              |
| Ayse   | IK              |
| NULL   | Muhasebe        |   &lt;-- çalışanı olmayan departman da geldi
+--------+-----------------+
Bu kez Zeynep yok, ama Muhasebe var.</code></pre>

<h3>FULL OUTER JOIN — İki Tarafın Tamamı</h3>
<p>LEFT + RIGHT birleşimi: <strong>iki tablonun da tüm satırları</strong> gelir; eşleşmeyen taraflar NULL olur:</p>
<pre><code class="lang-text">Sonuç: 5 satır
Ali-IT, Ayse-IK, Mehmet-IT, Zeynep-NULL, NULL-Muhasebe
(3 eşleşen + 1 eşleşmeyen sol + 1 eşleşmeyen sağ = 5)</code></pre>

<h3>CROSS JOIN — Kartezyen Çarpım</h3>
<p>Koşul (ON) yoktur; <strong>her satırı her satırla</strong> eşler. Satır sayısı = iki tablonun satır sayılarının <strong>çarpımı</strong>:</p>
<pre><code class="lang-sql">SELECT e.name, d.department_name
FROM Employees e
CROSS JOIN Departments d;
-- 4 x 3 = 12 satır! (Ali-IT, Ali-IK, Ali-Muhasebe, Ayse-IT, ...)</code></pre>

<h3>SELF JOIN — Tablonun Kendisiyle Birleşmesi</h3>
<p>Tablo, takma adlarla <strong>kendisiyle</strong> birleştirilir. Klasik örnek: çalışan-yönetici ilişkisi (yönetici de aynı tabloda bir çalışandır):</p>
<pre><code class="lang-sql">SELECT c.name AS calisan, y.name AS yonetici
FROM Employees c
INNER JOIN Employees y ON c.manager_id = y.id;</code></pre>
<div class="callout info"><p><strong>Not:</strong> SELF JOIN ayrı bir komut değildir; INNER/LEFT gibi türlerle yapılan, aynı tabloyu iki takma adla kullanma <strong>tekniğidir</strong>.</p></div>

<h3>Kaç Satır Döner? — Özet</h3>
<div class="table-wrap"><table>
<thead><tr><th>JOIN türü</th><th>Mantığı</th><th>Örnekte satır</th></tr></thead>
<tbody>
<tr><td><code>INNER JOIN</code></td><td>Sadece eşleşenler</td><td><strong>3</strong></td></tr>
<tr><td><code>LEFT JOIN</code></td><td>Solun tamamı + eşleşenler (eşleşmeyene NULL)</td><td><strong>4</strong> (Zeynep dahil)</td></tr>
<tr><td><code>RIGHT JOIN</code></td><td>Sağın tamamı + eşleşenler (eşleşmeyene NULL)</td><td><strong>4</strong> (Muhasebe dahil)</td></tr>
<tr><td><code>FULL OUTER JOIN</code></td><td>İki tarafın tamamı</td><td><strong>5</strong></td></tr>
<tr><td><code>CROSS JOIN</code></td><td>Kartezyen çarpım (koşulsuz)</td><td><strong>12</strong> (4 × 3)</td></tr>
</tbody>
</table></div>
<div class="callout tip"><p><strong>Hızlı hesap formülü:</strong> INNER = eşleşen çiftler. LEFT = INNER + soldaki eşleşmeyenler. RIGHT = INNER + sağdaki eşleşmeyenler. FULL = INNER + iki taraftaki eşleşmeyenler. CROSS = sol × sağ.</p></div>

<h2>⚠️ Karıştırılan Kavramlar</h2>

<div class="table-wrap"><table>
<thead><tr><th>Karışan ikili</th><th>Farkı</th></tr></thead>
<tbody>
<tr><td><code>INNER</code> vs <code>LEFT</code></td><td>INNER eşleşmeyeni <strong>atar</strong>; LEFT sol tarafın eşleşmeyenini <strong>NULL'larla tutar</strong></td></tr>
<tr><td><code>LEFT</code> vs <code>RIGHT</code></td><td>Hangi tablonun tamamının korunacağı: FROM'daki mi (LEFT), JOIN'deki mi (RIGHT)</td></tr>
<tr><td><code>FULL</code> vs <code>CROSS</code></td><td>FULL eşleşme mantığıyla iki tarafı korur; CROSS eşleşmeye hiç bakmaz, <strong>her şeyi her şeyle</strong> çarpar</td></tr>
<tr><td><code>JOIN ... ON</code> vs <code>WHERE</code></td><td>ON tabloların <strong>nasıl birleşeceğini</strong>, WHERE birleşmiş sonucun <strong>nasıl filtreleneceğini</strong> söyler</td></tr>
<tr><td>Sadece <code>JOIN</code> yazılırsa</td><td>Varsayılan olarak <strong>INNER JOIN</strong> kabul edilir</td></tr>
</tbody>
</table></div>

<div class="callout warn"><p><strong>Tuzak 1:</strong> "LEFT JOIN her zaman INNER JOIN'den fazla satır döndürür" <strong>her zaman doğru değildir</strong> — solda eşleşmeyen satır yoksa ikisi aynı sayıda döner. Doğru ifade: LEFT JOIN <strong>asla daha az</strong> döndürmez.</p></div>
<div class="callout warn"><p><strong>Tuzak 2:</strong> LEFT JOIN sonucunda sağ tablodan gelen sütunlar eşleşmeyen satırlarda <strong>NULL</strong>'dur. "Departmanı olmayan çalışanları bul" sorusunun cevabı: <code>LEFT JOIN ... WHERE d.id IS NULL</code> kalıbıdır.</p></div>

<h2>🎯 Sınavda Nasıl Sorulur?</h2>
<ul>
<li><strong>"Kaç satır döner?":</strong> iki küçük tablo + JOIN sorgusu verilir, satır sayısı sorulur. Eşleşmeyen kayıtları (NULL FK, boş departman) saymak kritik.</li>
<li><strong>"Hangi JOIN kullanılmalı?":</strong> "Siparişi olmayan müşteriler de listelensin" gibi bir gereksinim verilir → LEFT JOIN.</li>
<li><strong>Tanım eşleştirme:</strong> "Sadece her iki tabloda da eşleşen kayıtları getiren JOIN?" → INNER.</li>
<li><strong>Sonuç tablosu okuma:</strong> JOIN sonucu gösterilir, "bu çıktı hangi sorgudan alınmıştır?" diye sorulur — NULL'lu satır hangi tarafta, ona bak.</li>
<li><strong>CROSS JOIN hesabı:</strong> "4 satırlık tablo ile 3 satırlık tablonun CROSS JOIN'i kaç satırdır?" → çarpım.</li>
</ul>

<h2>✍️ Örnek Sorular</h2>
<p>Sorular yukarıdaki <strong>Employees</strong> (4 satır, Zeynep'in department_id'si NULL) ve <strong>Departments</strong> (3 satır, Muhasebe'nin çalışanı yok) tablolarına göredir.</p>

<div class="quiz-q" data-answer="c">
  <p class="q-text"><strong>Soru 1.</strong> Yalnızca <strong>her iki tabloda da eşleşmesi bulunan</strong> kayıtları döndüren JOIN türü hangisidir?</p>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) LEFT JOIN</button>
    <button class="q-opt" data-opt="b">B) FULL OUTER JOIN</button>
    <button class="q-opt" data-opt="c">C) INNER JOIN</button>
    <button class="q-opt" data-opt="d">D) CROSS JOIN</button>
  </div>
  <div class="q-explain"><strong>Cevap: C.</strong> INNER JOIN kesişim mantığıyla çalışır: eşleşmeyen satırlar iki taraftan da elenir. LEFT solun tamamını, FULL iki tarafın tamamını korur; CROSS eşleşmeye hiç bakmadan tüm kombinasyonları üretir.</div>
</div>

<div class="quiz-q" data-answer="b">
  <p class="q-text"><strong>Soru 2.</strong> "Departmanı olmayan çalışanlar da dahil, <strong>tüm çalışanları</strong> departman adlarıyla birlikte listele" gereksinimi için hangi sorgu doğrudur?</p>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) <code>... FROM Employees e INNER JOIN Departments d ON e.department_id = d.id</code></button>
    <button class="q-opt" data-opt="b">B) <code>... FROM Employees e LEFT JOIN Departments d ON e.department_id = d.id</code></button>
    <button class="q-opt" data-opt="c">C) <code>... FROM Employees e CROSS JOIN Departments d</code></button>
    <button class="q-opt" data-opt="d">D) <code>... FROM Departments d LEFT JOIN Employees e ON e.department_id = d.id</code></button>
  </div>
  <div class="q-explain"><strong>Cevap: B.</strong> "Tüm çalışanlar" = Employees'in tamamı korunmalı; Employees solda olduğu için LEFT JOIN. A, Zeynep'i kaybeder. C anlamsız kombinasyonlar üretir. D tuzaktır: orada solda <strong>Departments</strong> var — tüm <strong>departmanları</strong> korur, Zeynep yine kaybolur.</div>
</div>

<div class="quiz-q" data-answer="d">
  <p class="q-text"><strong>Soru 3.</strong> Aşağıdaki sorgu kaç satır döndürür?</p>
  <pre><code class="lang-sql">SELECT e.name, d.department_name
FROM Employees e
INNER JOIN Departments d ON e.department_id = d.id;</code></pre>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) 4</button>
    <button class="q-opt" data-opt="b">B) 5</button>
    <button class="q-opt" data-opt="c">C) 2</button>
    <button class="q-opt" data-opt="d">D) 3</button>
  </div>
  <div class="q-explain"><strong>Cevap: D.</strong> Eşleşenler: Ali-IT, Ayse-IK, Mehmet-IT → 3 satır. Zeynep'in department_id'si NULL olduğu için hiçbir id ile eşleşmez (NULL eşitliği geçmez!); Muhasebe'nin de çalışanı yok. A (4) LEFT JOIN'in, B (5) FULL OUTER JOIN'in sonucudur.</div>
</div>

<div class="quiz-q" data-answer="a">
  <p class="q-text"><strong>Soru 4.</strong> Aynı tablolarda <code>INNER JOIN</code> yerine <code>LEFT JOIN</code> (Employees solda) kullanılırsa sonuç kaç satır olur ve ek gelen satırda ne görünür?</p>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) 4 satır; Zeynep gelir, department_name değeri NULL olur</button>
    <button class="q-opt" data-opt="b">B) 4 satır; Muhasebe gelir, name değeri NULL olur</button>
    <button class="q-opt" data-opt="c">C) 5 satır; hem Zeynep hem Muhasebe gelir</button>
    <button class="q-opt" data-opt="d">D) 3 satır; LEFT JOIN sonucu INNER ile her zaman aynıdır</button>
  </div>
  <div class="q-explain"><strong>Cevap: A.</strong> LEFT JOIN sol tablonun (Employees) tamamını korur: 3 eşleşme + Zeynep = 4. Eşleşmeyen satırda sağ tablonun sütunları NULL olur. B, RIGHT JOIN'in davranışıdır; C, FULL OUTER JOIN'dir; D yanlış — solda eşleşmeyen satır (Zeynep) olduğu için sonuçlar farklıdır.</div>
</div>

<div class="quiz-q" data-answer="c">
  <p class="q-text"><strong>Soru 5.</strong> (Tuzak) Aşağıdaki sorgu kaç satır döndürür?</p>
  <pre><code class="lang-sql">SELECT e.name, d.department_name
FROM Employees e
CROSS JOIN Departments d;</code></pre>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) 4 — sol tablonun satır sayısı kadar</button>
    <button class="q-opt" data-opt="b">B) 7 — iki tablonun satırlarının toplamı</button>
    <button class="q-opt" data-opt="c">C) 12 — iki tablonun satırlarının çarpımı</button>
    <button class="q-opt" data-opt="d">D) 3 — sadece eşleşen kayıtlar</button>
  </div>
  <div class="q-explain"><strong>Cevap: C.</strong> CROSS JOIN kartezyen çarpımdır: 4 × 3 = 12. ON koşulu olmadığı için eşleşme kavramı yoktur — D, INNER JOIN'in cevabıdır. B (toplam) hiçbir JOIN'in formülü değildir; "çarpım mı toplam mı" şaşırtmacasına dikkat.</div>
</div>

<div class="quiz-q" data-answer="b">
  <p class="q-text"><strong>Soru 6.</strong> (Tuzak) LEFT JOIN sorgusunun (Employees solda) sonucunda Zeynep'in satırındaki <code>department_name</code> değeri ne olur?</p>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) Boş metin ('') olur</button>
    <button class="q-opt" data-opt="b">B) NULL olur</button>
    <button class="q-opt" data-opt="c">C) 0 olur</button>
    <button class="q-opt" data-opt="d">D) Zeynep'in satırı sonuçta hiç yer almaz</button>
  </div>
  <div class="q-explain"><strong>Cevap: B.</strong> LEFT JOIN'de eşleşmeyen satırların sağ tablodan gelen tüm sütunları <strong>NULL</strong> olur — boş metin de (A), sıfır da (C) değildir; NULL "değer yok" demektir. D, INNER JOIN olsaydı doğruydu; LEFT JOIN sol tarafı asla düşürmez.</div>
</div>

<h2>🔁 Mini Tekrar</h2>
<div class="table-wrap"><table>
<thead><tr><th>JOIN</th><th>Ne getirir?</th><th>Eşleşmeyen ne olur?</th><th>Örnekte</th></tr></thead>
<tbody>
<tr><td><code>INNER</code></td><td>Sadece eşleşenler</td><td>Elenir</td><td>3 satır</td></tr>
<tr><td><code>LEFT</code></td><td>Solun tamamı + eşleşenler</td><td>Sağ sütunlar NULL</td><td>4 satır</td></tr>
<tr><td><code>RIGHT</code></td><td>Sağın tamamı + eşleşenler</td><td>Sol sütunlar NULL</td><td>4 satır</td></tr>
<tr><td><code>FULL OUTER</code></td><td>İki tarafın tamamı</td><td>Karşı taraf NULL</td><td>5 satır</td></tr>
<tr><td><code>CROSS</code></td><td>Tüm kombinasyonlar</td><td>Eşleşme kavramı yok</td><td>4 × 3 = 12</td></tr>
<tr><td><code>SELF</code></td><td>Tablo kendisiyle (alias şart)</td><td>Türüne göre</td><td>çalışan-yönetici</td></tr>
<tr><td colspan="4"><strong>Unutma:</strong> Yalnız <code>JOIN</code> yazılırsa INNER kabul edilir; bağlantı genelde FK → PK üzerinden <code>ON</code> ile kurulur.</td></tr>
</tbody>
</table></div>
`
  }
]);
