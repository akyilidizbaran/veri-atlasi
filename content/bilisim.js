window.SINAV.register([
  {
    module: 'bilisim',
    id: 'bo-01-donanim',
    order: 1,
    title: 'Donanım, Yazılım ve Temel Bileşenler',
    html: `
<h2>📖 Konu Anlatımı</h2>

<h3>Bilgisayar Nedir?</h3>
<p>Bilgisayar; veriyi <strong>girdi</strong> olarak alan, <strong>işleyen</strong>, <strong>depolayan</strong> ve sonucu <strong>çıktı</strong> olarak veren elektronik bir makinedir. Bu dört adım (girdi → işlem → depolama → çıktı) tüm bilgisayar mantığının temelidir.</p>

<h3>Donanım / Yazılım Ayrımı</h3>
<p><strong>Donanım (hardware)</strong>, bilgisayarın elle tutulabilen fiziksel parçalarıdır: klavye, ekran, işlemci, kablo... <strong>Yazılım (software)</strong> ise donanıma ne yapacağını söyleyen, elle tutulamayan komut ve programlar bütünüdür: Windows, Word, oyunlar...</p>
<div class="callout tip"><p><strong>Ezber hilesi:</strong> Dokunabiliyorsan donanım, dokunamıyorsan yazılım. Ekrana dokunabilirsin ama ekrandaki programa dokunamazsın!</p></div>

<h3>Giriş Birimleri (Input)</h3>
<p>Kullanıcıdan veya dış dünyadan bilgisayara <strong>veri gönderen</strong> birimlerdir:</p>
<ul>
  <li><strong>Klavye:</strong> yazı ve komut girişi</li>
  <li><strong>Fare:</strong> işaretleme ve tıklama</li>
  <li><strong>Mikrofon:</strong> ses girişi</li>
  <li><strong>Tarayıcı (scanner):</strong> kağıttaki belgeyi dijitale çevirir</li>
  <li><strong>Kamera / webcam:</strong> görüntü girişi</li>
</ul>

<h3>Çıkış Birimleri (Output)</h3>
<p>Bilgisayardaki bilgiyi <strong>kullanıcıya aktaran</strong> birimlerdir:</p>
<ul>
  <li><strong>Monitör:</strong> görüntüyü ekrana basar</li>
  <li><strong>Yazıcı (printer):</strong> dijital belgeyi kağıda döker (tarayıcının tersi!)</li>
  <li><strong>Hoparlör:</strong> ses çıkışı (mikrofonun tersi!)</li>
  <li><strong>Projektör:</strong> görüntüyü perdeye yansıtır</li>
</ul>

<h3>Hem Giriş Hem Çıkış Birimleri</h3>
<p>Bazı birimler iki yönlü çalışır: <strong>dokunmatik ekran</strong> (hem gösterir hem dokunuşu algılar), <strong>modem</strong> (veri hem alır hem gönderir), <strong>harici disk / USB bellek</strong> (veri hem yazılır hem okunur).</p>

<h3>Kasanın İçindekiler</h3>
<ul>
  <li><strong>Anakart (mainboard):</strong> tüm parçaları birbirine bağlayan ana devre kartı. Bilgisayarın "iskeleti".</li>
  <li><strong>CPU (işlemci):</strong> tüm hesaplama ve işlemleri yapan birim. Bilgisayarın "beyni". Hızı GHz ile ölçülür.</li>
  <li><strong>RAM:</strong> o an çalışan program ve verilerin tutulduğu <strong>geçici</strong> bellek. Elektrik kesilince içi <strong>silinir</strong>.</li>
  <li><strong>ROM:</strong> üretici tarafından yazılmış, <strong>kalıcı</strong> ve genelde salt okunur bellek. Elektrik kesilse de silinmez; açılış bilgilerini tutar.</li>
  <li><strong>Ekran kartı:</strong> görüntüyü işleyip monitöre gönderir.</li>
  <li><strong>Ses kartı:</strong> ses sinyallerini işler.</li>
  <li><strong>Ağ kartı:</strong> bilgisayarı ağa/internete bağlar.</li>
  <li><strong>Güç kaynağı (PSU):</strong> şehir elektriğini parçaların kullanabileceği güce çevirir.</li>
</ul>

<h3>Depolama Birimleri</h3>
<ul>
  <li><strong>HDD:</strong> dönen manyetik disk; ucuz, yüksek kapasiteli ama yavaş.</li>
  <li><strong>SSD:</strong> çip tabanlı; hareketli parçası yok, çok hızlı, daha dayanıklı ama GB başına daha pahalı.</li>
  <li><strong>USB bellek:</strong> taşınabilir flash depolama.</li>
  <li><strong>Optik diskler:</strong> CD (~700 MB), DVD (~4.7 GB), Blu-ray (~25 GB). Lazerle okunur.</li>
</ul>

<h3>BIOS / UEFI</h3>
<p>Bilgisayar açıldığında <strong>ilk çalışan yazılımdır</strong>; anakart üzerindeki ROM/çipte saklanır. Donanımı test eder ve işletim sistemini başlatır. <strong>UEFI</strong>, BIOS'un modern, hızlı ve gelişmiş halidir.</p>

<h2>⚠️ Karıştırılan Kavramlar</h2>

<h3>RAM mı, ROM mu, Disk mi?</h3>
<div class="table-wrap"><table>
<thead><tr><th>Özellik</th><th>RAM</th><th>ROM</th><th>HDD/SSD</th></tr></thead>
<tbody>
<tr><td>Görev</td><td>Çalışan programları tutar</td><td>Açılış/üretici bilgisi tutar</td><td>Dosyaları kalıcı depolar</td></tr>
<tr><td>Elektrik kesilince</td><td><strong>Silinir</strong> (geçici)</td><td>Silinmez (kalıcı)</td><td>Silinmez (kalıcı)</td></tr>
<tr><td>Yazılabilirlik</td><td>Sürekli okunur-yazılır</td><td>Genelde salt okunur</td><td>Okunur-yazılır</td></tr>
<tr><td>Hız</td><td>Çok hızlı</td><td>—</td><td>RAM'den yavaş</td></tr>
</tbody>
</table></div>

<h3>Kim Ne İş Yapar?</h3>
<div class="table-wrap"><table>
<thead><tr><th>Parça</th><th>Tek cümlelik görevi</th></tr></thead>
<tbody>
<tr><td>CPU</td><td><strong>İşlem yapar</strong> (hesaplar, komut yürütür)</td></tr>
<tr><td>RAM</td><td>Çalışan veriyi <strong>geçici</strong> tutar</td></tr>
<tr><td>HDD/SSD</td><td>Veriyi <strong>kalıcı</strong> depolar</td></tr>
<tr><td>Anakart</td><td>Parçaları <strong>birbirine bağlar</strong></td></tr>
<tr><td>Güç kaynağı</td><td>Elektriği parçalara <strong>dağıtır</strong></td></tr>
</tbody>
</table></div>

<div class="callout warn"><p><strong>Tuzak:</strong> "RAM veri depolar" ifadesi sınav tuzağıdır — RAM <strong>depolamaz, geçici tutar</strong>. Kalıcı depolama HDD/SSD'nin işidir. Bir diğer tuzak: tarayıcı (scanner) <strong>giriş</strong>, yazıcı <strong>çıkış</strong> birimidir; ikisi sık yer değiştirilerek sorulur.</p></div>

<h2>🎯 Sınavda Nasıl Sorulur?</h2>
<ul>
  <li><strong>"Aşağıdakilerden hangisi bir giriş birimi değildir?"</strong> — şıklara üç giriş birimi + bir çıkış birimi (genelde yazıcı veya hoparlör) konur.</li>
  <li><strong>"Elektrik kesildiğinde içeriği silinen bellek hangisidir?"</strong> — cevap her zaman RAM.</li>
  <li><strong>"Bilgisayarın beyni olarak adlandırılan parça hangisidir?"</strong> — cevap CPU; çeldirici olarak RAM ve anakart verilir.</li>
  <li><strong>"Hem giriş hem çıkış birimi olan aygıt hangisidir?"</strong> — dokunmatik ekran, modem veya harici disk aranır.</li>
  <li><strong>Eşleştirme kalıbı:</strong> "Parçaları birbirine bağlayan donanım" → anakart; "açılışta ilk çalışan yazılım" → BIOS/UEFI.</li>
</ul>

<h2>✍️ Örnek Sorular</h2>

<div class="quiz-q" data-answer="a">
  <p class="q-text"><strong>Soru 1.</strong> Aşağıdakilerden hangisi bir giriş birimidir?</p>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) Tarayıcı (scanner)</button>
    <button class="q-opt" data-opt="b">B) Yazıcı</button>
    <button class="q-opt" data-opt="c">C) Hoparlör</button>
    <button class="q-opt" data-opt="d">D) Projektör</button>
  </div>
  <div class="q-explain"><strong>Cevap: A.</strong> Tarayıcı, kağıttaki belgeyi bilgisayara aktarır; yani veri <strong>girer</strong>. Yazıcı, hoparlör ve projektör bilgiyi dışarıya verir — hepsi çıkış birimidir.</div>
</div>

<div class="quiz-q" data-answer="c">
  <p class="q-text"><strong>Soru 2.</strong> Elektrik kesildiğinde üzerindeki veriler silinen bellek türü aşağıdakilerden hangisidir?</p>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) ROM</button>
    <button class="q-opt" data-opt="b">B) SSD</button>
    <button class="q-opt" data-opt="c">C) RAM</button>
    <button class="q-opt" data-opt="d">D) HDD</button>
  </div>
  <div class="q-explain"><strong>Cevap: C.</strong> RAM geçici bellektir; güç gidince içeriği kaybolur. ROM kalıcıdır, SSD ve HDD ise kalıcı depolama birimleridir.</div>
</div>

<div class="quiz-q" data-answer="b">
  <p class="q-text"><strong>Soru 3.</strong> Bilgisayarın tüm parçalarını üzerinde barındıran ve birbirine bağlayan donanım birimi hangisidir?</p>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) CPU</button>
    <button class="q-opt" data-opt="b">B) Anakart</button>
    <button class="q-opt" data-opt="c">C) Güç kaynağı</button>
    <button class="q-opt" data-opt="d">D) Ekran kartı</button>
  </div>
  <div class="q-explain"><strong>Cevap: B.</strong> Anakart, parçaların takıldığı ve haberleştiği ana devre kartıdır. CPU işlem yapar, güç kaynağı elektrik dağıtır, ekran kartı görüntü üretir — bağlama işini yapan anakarttır.</div>
</div>

<div class="quiz-q" data-answer="d">
  <p class="q-text"><strong>Soru 4.</strong> Aşağıdaki aygıtlardan hangisi hem giriş hem de çıkış birimi olarak çalışır?</p>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) Mikrofon</button>
    <button class="q-opt" data-opt="b">B) Monitör</button>
    <button class="q-opt" data-opt="c">C) Klavye</button>
    <button class="q-opt" data-opt="d">D) Dokunmatik ekran</button>
  </div>
  <div class="q-explain"><strong>Cevap: D.</strong> Dokunmatik ekran hem görüntü gösterir (çıkış) hem de dokunuşu algılar (giriş). Mikrofon ve klavye yalnızca giriş, monitör yalnızca çıkıştır.</div>
</div>

<div class="quiz-q" data-answer="b">
  <p class="q-text"><strong>Soru 5. (Tuzak)</strong> Aşağıdaki ifadelerden hangisi <strong>yanlıştır</strong>?</p>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) SSD, HDD'ye göre daha hızlıdır ve hareketli parçası yoktur.</button>
    <button class="q-opt" data-opt="b">B) RAM, dosyaların kalıcı olarak saklandığı depolama birimidir.</button>
    <button class="q-opt" data-opt="c">C) BIOS/UEFI, bilgisayar açıldığında ilk çalışan yazılımdır.</button>
    <button class="q-opt" data-opt="d">D) Güç kaynağı, elektriği bilgisayar parçalarının kullanacağı biçime çevirir.</button>
  </div>
  <div class="q-explain"><strong>Cevap: B.</strong> RAM <strong>geçici</strong> bellektir; kalıcı saklama HDD/SSD'nin görevidir. Diğer üç ifade doğrudur. "Yanlış olanı bul" kalıbında her şıkkı tek tek doğrulamayı unutma.</div>
</div>

<h2>🔁 Mini Tekrar</h2>
<div class="table-wrap"><table>
<thead><tr><th>Kavram</th><th>Aklında kalsın</th></tr></thead>
<tbody>
<tr><td>Donanım</td><td>Dokunabildiğin fiziksel parça</td></tr>
<tr><td>Yazılım</td><td>Dokunamadığın program/komutlar</td></tr>
<tr><td>Giriş</td><td>Klavye, fare, mikrofon, tarayıcı, kamera</td></tr>
<tr><td>Çıkış</td><td>Monitör, yazıcı, hoparlör, projektör</td></tr>
<tr><td>Hem giriş hem çıkış</td><td>Dokunmatik ekran, modem, harici disk</td></tr>
<tr><td>CPU</td><td>Beyin — işlem yapar</td></tr>
<tr><td>RAM</td><td>Geçici bellek — elektrik gidince silinir</td></tr>
<tr><td>ROM</td><td>Kalıcı, salt okunur — açılış bilgisi</td></tr>
<tr><td>HDD/SSD</td><td>Kalıcı depolama (SSD hızlı, HDD ucuz)</td></tr>
<tr><td>Anakart</td><td>Parçaları birbirine bağlar</td></tr>
<tr><td>BIOS/UEFI</td><td>Açılışta ilk çalışan yazılım</td></tr>
</tbody>
</table></div>
`
  },
  {
    module: 'bilisim',
    id: 'bo-02-yazilim-turleri',
    order: 2,
    title: 'Yazılım Türleri',
    html: `
<h2>📖 Konu Anlatımı</h2>

<h3>Yazılımın İki Ana Dalı</h3>
<p>Yazılımlar temelde ikiye ayrılır: <strong>sistem yazılımları</strong> bilgisayarın kendisini çalıştırır; <strong>uygulama yazılımları</strong> kullanıcının işini yapar. Windows olmadan Word çalışamaz — uygulamalar her zaman sistem yazılımının üstünde koşar.</p>

<h3>Sistem Yazılımları</h3>
<ul>
  <li><strong>İşletim sistemi (OS):</strong> donanımı yöneten ve uygulamalara çalışma ortamı sağlayan ana yazılım. Örnek: Windows, macOS, Linux, Android, iOS.</li>
  <li><strong>Sürücü (driver):</strong> bir donanım parçasının (yazıcı, ekran kartı...) işletim sistemiyle konuşmasını sağlayan <strong>köprü</strong> yazılımdır. Yazıcı takılı ama çalışmıyorsa ilk şüpheli sürücüdür.</li>
  <li><strong>Yardımcı programlar (utility):</strong> bakım ve destek işleri yapar: disk birleştirici, sıkıştırma aracı, <strong>antivirüs</strong>, yedekleme aracı.</li>
</ul>

<h3>Uygulama Yazılımları</h3>
<p>Kullanıcının belirli bir işini görmek için yazılmış programlardır:</p>
<ul>
  <li><strong>Ofis yazılımları:</strong> Word (belge), Excel (tablo), PowerPoint (sunum)</li>
  <li><strong>Web tarayıcıları:</strong> Chrome, Firefox, Edge, Safari — web sayfalarını görüntüler</li>
  <li><strong>Grafik/medya yazılımları:</strong> Photoshop, VLC vb.</li>
  <li><strong>İletişim yazılımları:</strong> e-posta istemcileri, mesajlaşma uygulamaları</li>
</ul>

<h3>Veritabanı Yazılımları</h3>
<p><strong>Veritabanı yönetim sistemi (VTYS/DBMS)</strong>, büyük miktarda veriyi düzenli saklamak ve sorgulamak için kullanılır. Örnek: <strong>SQL Server, MySQL, Oracle, PostgreSQL</strong>. Dikkat: SQL bir <strong>sorgulama dili</strong>, SQL Server ise bu dili kullanan bir <strong>yazılımdır</strong>.</p>

<h3>Programlama Dilleri</h3>
<p>Bilgisayara yapılacak işleri tarif etmek için kullanılan yapay dillerdir: <strong>C#, Java, Python, JavaScript, C++</strong>. Yazılan kaynak kod, bilgisayarın anlayacağı dile çevrilmek zorundadır. Bu çeviriyi iki tür araç yapar:</p>
<ul>
  <li><strong>Derleyici (compiler):</strong> kodun <strong>tamamını bir kerede</strong> makine diline çevirir, sonra program çalışır. Hatalar çalıştırmadan önce topluca görülür. Örnek: C, C++, C#.</li>
  <li><strong>Yorumlayıcı (interpreter):</strong> kodu <strong>satır satır</strong>, çalışma anında çevirip yürütür. Hata, o satıra gelinince ortaya çıkar. Örnek: Python, JavaScript.</li>
</ul>
<div class="callout tip"><p><strong>Ezber hilesi:</strong> Derleyici = çevirmenin kitabın tamamını çevirip teslim etmesi; yorumlayıcı = simültane tercümanın cümle cümle çevirmesi.</p></div>

<h3>Hızlı Eşleştirme Listesi</h3>
<div class="table-wrap"><table>
<thead><tr><th>Yazılım</th><th>Türü</th></tr></thead>
<tbody>
<tr><td>Windows, Linux, Android</td><td>İşletim sistemi</td></tr>
<tr><td>Word, Excel, PowerPoint</td><td>Uygulama (ofis) yazılımı</td></tr>
<tr><td>Chrome, Firefox</td><td>Web tarayıcısı (uygulama)</td></tr>
<tr><td>C#, Python, Java</td><td>Programlama dili</td></tr>
<tr><td>SQL Server, MySQL, Oracle</td><td>Veritabanı yönetim sistemi</td></tr>
<tr><td>Driver (sürücü)</td><td>Donanım ↔ işletim sistemi köprüsü</td></tr>
<tr><td>Antivirüs</td><td>Yardımcı (utility) yazılım</td></tr>
</tbody>
</table></div>

<h2>⚠️ Karıştırılan Kavramlar</h2>

<h3>Sistem Yazılımı mı, Uygulama mı?</h3>
<div class="table-wrap"><table>
<thead><tr><th>Soru</th><th>Sistem yazılımı</th><th>Uygulama yazılımı</th></tr></thead>
<tbody>
<tr><td>Kimin için çalışır?</td><td>Bilgisayarın kendisi için</td><td>Kullanıcının işi için</td></tr>
<tr><td>Olmazsa ne olur?</td><td>Bilgisayar hiç çalışmaz</td><td>Sadece o iş yapılamaz</td></tr>
<tr><td>Örnek</td><td>Windows, sürücüler, BIOS</td><td>Word, Chrome, oyunlar</td></tr>
</tbody>
</table></div>

<h3>Derleyici / Yorumlayıcı</h3>
<div class="table-wrap"><table>
<thead><tr><th>Özellik</th><th>Derleyici</th><th>Yorumlayıcı</th></tr></thead>
<tbody>
<tr><td>Çeviri şekli</td><td>Tamamını bir kerede</td><td>Satır satır, çalışırken</td></tr>
<tr><td>Hata ne zaman görünür?</td><td>Çalıştırmadan önce</td><td>O satır çalışınca</td></tr>
<tr><td>Tipik diller</td><td>C, C++, C#</td><td>Python, JavaScript</td></tr>
</tbody>
</table></div>

<div class="callout warn"><p><strong>Tuzak:</strong> "Chrome bir işletim sistemidir" ve "SQL bir veritabanı programıdır" klasik çeldiricilerdir. Chrome <strong>tarayıcıdır</strong> (ChromeOS ayrı bir işletim sistemidir!); SQL <strong>dildir</strong>, SQL Server <strong>yazılımdır</strong>. Ayrıca antivirüs bir uygulama gibi görünse de sınıflandırmalarda genellikle <strong>yardımcı (utility) yazılım</strong> kabul edilir.</p></div>

<h2>🎯 Sınavda Nasıl Sorulur?</h2>
<ul>
  <li><strong>"Aşağıdakilerden hangisi bir işletim sistemi değildir?"</strong> — üç işletim sistemi + bir uygulama (ör. Word) ya da bir tarayıcı verilir.</li>
  <li><strong>"Donanım ile işletim sistemi arasında iletişimi sağlayan yazılım hangisidir?"</strong> — cevap: sürücü (driver).</li>
  <li><strong>Eşleştirme:</strong> "C# / Windows / Chrome / SQL Server" listesi verilir, türleri sorulur.</li>
  <li><strong>"Kaynak kodu satır satır çalıştıran araç hangisidir?"</strong> — yorumlayıcı/derleyici farkı sorulur.</li>
  <li><strong>"Hangisi sistem yazılımıdır?"</strong> — şıklarda Word, Chrome gibi uygulamalar arasına işletim sistemi veya sürücü gizlenir.</li>
</ul>

<h2>✍️ Örnek Sorular</h2>

<div class="quiz-q" data-answer="c">
  <p class="q-text"><strong>Soru 1.</strong> Aşağıdakilerden hangisi bir işletim sistemidir?</p>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) Microsoft Word</button>
    <button class="q-opt" data-opt="b">B) Google Chrome</button>
    <button class="q-opt" data-opt="c">C) Linux</button>
    <button class="q-opt" data-opt="d">D) Photoshop</button>
  </div>
  <div class="q-explain"><strong>Cevap: C.</strong> Linux bir işletim sistemidir. Word ve Photoshop uygulama yazılımı, Chrome ise web tarayıcısıdır.</div>
</div>

<div class="quiz-q" data-answer="a">
  <p class="q-text"><strong>Soru 2.</strong> Bir donanım parçasının işletim sistemi ile iletişim kurmasını sağlayan yazılıma ne ad verilir?</p>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) Sürücü (driver)</button>
    <button class="q-opt" data-opt="b">B) Derleyici (compiler)</button>
    <button class="q-opt" data-opt="c">C) Tarayıcı (browser)</button>
    <button class="q-opt" data-opt="d">D) Yorumlayıcı (interpreter)</button>
  </div>
  <div class="q-explain"><strong>Cevap: A.</strong> Sürücü, donanım ile işletim sistemi arasındaki köprüdür. Derleyici ve yorumlayıcı kod çevirir; tarayıcı web sayfası görüntüler.</div>
</div>

<div class="quiz-q" data-answer="d">
  <p class="q-text"><strong>Soru 3.</strong> Kaynak kodun tamamını bir kerede makine diline çeviren, hataları program çalıştırılmadan önce gösteren araç hangisidir?</p>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) Yorumlayıcı</button>
    <button class="q-opt" data-opt="b">B) Sürücü</button>
    <button class="q-opt" data-opt="c">C) İşletim sistemi</button>
    <button class="q-opt" data-opt="d">D) Derleyici</button>
  </div>
  <div class="q-explain"><strong>Cevap: D.</strong> Derleyici tüm kodu önceden çevirir. Yorumlayıcı ise satır satır, çalışma anında çevirir — en güçlü çeldirici odur.</div>
</div>

<div class="quiz-q" data-answer="b">
  <p class="q-text"><strong>Soru 4.</strong> Aşağıdaki eşleştirmelerden hangisi <strong>doğrudur</strong>?</p>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) C# → işletim sistemi</button>
    <button class="q-opt" data-opt="b">B) SQL Server → veritabanı yönetim sistemi</button>
    <button class="q-opt" data-opt="c">C) Windows → web tarayıcısı</button>
    <button class="q-opt" data-opt="d">D) Chrome → programlama dili</button>
  </div>
  <div class="q-explain"><strong>Cevap: B.</strong> SQL Server bir VTYS'dir. C# programlama dili, Windows işletim sistemi, Chrome tarayıcıdır.</div>
</div>

<div class="quiz-q" data-answer="c">
  <p class="q-text"><strong>Soru 5. (Tuzak)</strong> Aşağıdakilerden hangisi bir <strong>uygulama yazılımı değildir</strong>?</p>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) Excel</button>
    <button class="q-opt" data-opt="b">B) Firefox</button>
    <button class="q-opt" data-opt="c">C) Yazıcı sürücüsü</button>
    <button class="q-opt" data-opt="d">D) PowerPoint</button>
  </div>
  <div class="q-explain"><strong>Cevap: C.</strong> Sürücü bir <strong>sistem yazılımıdır</strong>; kullanıcının işini değil, donanımın çalışmasını sağlar. Excel, Firefox ve PowerPoint kullanıcı işine yönelik uygulamalardır.</div>
</div>

<h2>🔁 Mini Tekrar</h2>
<div class="table-wrap"><table>
<thead><tr><th>Soru</th><th>Cevap</th></tr></thead>
<tbody>
<tr><td>Windows?</td><td>İşletim sistemi</td></tr>
<tr><td>Word / Excel?</td><td>Uygulama (ofis) yazılımı</td></tr>
<tr><td>Chrome?</td><td>Tarayıcı (uygulama)</td></tr>
<tr><td>C# / Python?</td><td>Programlama dili</td></tr>
<tr><td>SQL Server?</td><td>Veritabanı yönetim sistemi</td></tr>
<tr><td>Driver?</td><td>Donanım ↔ OS köprüsü (sistem yazılımı)</td></tr>
<tr><td>Antivirüs?</td><td>Yardımcı (utility) yazılım</td></tr>
<tr><td>Derleyici?</td><td>Hepsini bir kerede çevirir</td></tr>
<tr><td>Yorumlayıcı?</td><td>Satır satır, çalışırken çevirir</td></tr>
</tbody>
</table></div>
`
  },
  {
    module: 'bilisim',
    id: 'bo-03-dosya-klasor',
    order: 3,
    title: 'Dosya ve Klasör Mantığı',
    html: `
<h2>📖 Konu Anlatımı</h2>

<h3>Dosya ve Klasör</h3>
<p><strong>Dosya</strong>, diske kaydedilmiş her türlü veri birimidir: belge, fotoğraf, müzik, program... <strong>Klasör (dizin)</strong> ise dosyaları düzenlemek için kullanılan kaplardır; klasörlerin içinde başka klasörler de olabilir (iç içe yapı).</p>

<h3>Dosya Adı ve Uzantısı</h3>
<p>Bir dosya adı iki parçadan oluşur: <code>rapor.docx</code> → "rapor" dosyanın adı, <code>.docx</code> ise <strong>uzantısıdır</strong>. Uzantı, dosyanın <strong>türünü</strong> ve hangi programla açılacağını belirtir.</p>
<div class="table-wrap"><table>
<thead><tr><th>Uzantı</th><th>Tür</th><th>Uzantı</th><th>Tür</th></tr></thead>
<tbody>
<tr><td><code>.txt</code></td><td>Düz metin</td><td><code>.mp3</code></td><td>Ses</td></tr>
<tr><td><code>.docx</code></td><td>Word belgesi</td><td><code>.mp4</code></td><td>Video</td></tr>
<tr><td><code>.xlsx</code></td><td>Excel tablosu</td><td><code>.exe</code></td><td>Çalıştırılabilir program</td></tr>
<tr><td><code>.pptx</code></td><td>PowerPoint sunusu</td><td><code>.zip</code></td><td>Sıkıştırılmış arşiv</td></tr>
<tr><td><code>.pdf</code></td><td>Taşınabilir belge</td><td><code>.html</code></td><td>Web sayfası</td></tr>
<tr><td><code>.jpg / .png</code></td><td>Görsel</td><td><code>.cs / .sql</code></td><td>C# kodu / SQL dosyası</td></tr>
</tbody>
</table></div>

<h3>Dosya Yolu (Path)</h3>
<p>Bir dosyanın diskteki adresine <strong>dosya yolu</strong> denir:</p>
<pre><code class="lang-text">C:\\Kullanicilar\\Ali\\Belgeler\\rapor.docx</code></pre>
<ul>
  <li><strong>Mutlak yol:</strong> kök dizinden (ör. <code>C:\\</code>) başlayarak tam adresi verir; her yerden aynı dosyayı gösterir.</li>
  <li><strong>Göreli yol:</strong> bulunduğun klasöre <strong>göre</strong> tarif eder (ör. <code>Belgeler\\rapor.docx</code>); bulunduğun yere göre hedefi değişir.</li>
</ul>

<h3>Kopyala / Kes / Yapıştır</h3>
<ul>
  <li><strong>Kopyala (Ctrl+C):</strong> dosya yerinde kalır, yapıştırınca <strong>ikinci bir kopya</strong> oluşur.</li>
  <li><strong>Kes (Ctrl+X):</strong> dosya <strong>taşınır</strong>; eski yerinden silinir, yeni yere geçer. Toplam dosya sayısı değişmez.</li>
  <li><strong>Yapıştır (Ctrl+V):</strong> kopyalanan/kesilen öğeyi hedefe bırakır.</li>
</ul>

<h3>Silme ve Geri Dönüşüm Kutusu</h3>
<p>Normal silme (Delete), dosyayı <strong>geri dönüşüm kutusuna</strong> taşır — buradan geri alınabilir. <strong>Shift+Delete</strong> ise dosyayı kutuya uğratmadan kalıcı siler. USB bellek ve ağ sürücülerinden silinenler genelde kutuya gitmez, doğrudan silinir.</p>

<h3>Sıkıştırılmış Dosyalar (ZIP/RAR)</h3>
<p>Sıkıştırma, dosyaların boyutunu küçültür ve birden çok dosyayı <strong>tek arşiv dosyasında</strong> toplar (<code>.zip</code>, <code>.rar</code>). E-postayla çok sayıda dosya göndermenin pratik yoludur. Kullanmak için önce arşivden <strong>çıkarmak</strong> (extract) gerekir.</p>

<h3>Boyut Birimleri</h3>
<p>En küçük birim <strong>bit</strong>tir (0 veya 1). Sıralama küçükten büyüğe şöyledir:</p>
<pre><code class="lang-text">8 bit        = 1 Byte (B)
1024 Byte    = 1 KB (kilobayt)
1024 KB      = 1 MB (megabayt)
1024 MB      = 1 GB (gigabayt)
1024 GB      = 1 TB (terabayt)</code></pre>
<div class="callout tip"><p><strong>Ezber hilesi:</strong> "B-K-M-G-T" → <strong>B</strong>ir <strong>K</strong>edi <strong>M</strong>iyav <strong>G</strong>itar <strong>T</strong>ıngırdattı. Her basamak 1024 kat büyür; bit→Byte geçişi ise 8 kattır.</p></div>

<h2>⚠️ Karıştırılan Kavramlar</h2>

<h3>Kopyala / Kes Farkı</h3>
<div class="table-wrap"><table>
<thead><tr><th>İşlem</th><th>Kısayol</th><th>Kaynak dosya</th><th>Sonuç</th></tr></thead>
<tbody>
<tr><td>Kopyala + Yapıştır</td><td>Ctrl+C → Ctrl+V</td><td>Yerinde kalır</td><td>Dosya sayısı <strong>artar</strong> (çoğaltma)</td></tr>
<tr><td>Kes + Yapıştır</td><td>Ctrl+X → Ctrl+V</td><td>Eski yerden silinir</td><td>Dosya sayısı <strong>değişmez</strong> (taşıma)</td></tr>
</tbody>
</table></div>

<h3>Silme Türleri</h3>
<div class="table-wrap"><table>
<thead><tr><th>İşlem</th><th>Nereye gider?</th><th>Geri alınır mı?</th></tr></thead>
<tbody>
<tr><td>Delete</td><td>Geri dönüşüm kutusu</td><td>Evet, kutudan geri alınır</td></tr>
<tr><td>Shift+Delete</td><td>Kalıcı silinir</td><td>Normal yolla hayır</td></tr>
<tr><td>USB bellekten silme</td><td>Kutuya uğramaz</td><td>Normal yolla hayır</td></tr>
</tbody>
</table></div>

<div class="callout warn"><p><strong>Tuzak:</strong> Birim sorularında "1 KB = 1000 Byte" çeldiricisine dikkat — sınavlarda kabul edilen değer <strong>1024</strong>'tür. Bir diğer tuzak: <strong>1 Byte = 8 bit</strong>'tir, 1024 bit değil! Uzantı sorularında da <code>.xlsx</code> (Excel) ile <code>.docx</code> (Word) yer değiştirilerek verilir.</p></div>

<h2>🎯 Sınavda Nasıl Sorulur?</h2>
<ul>
  <li><strong>Sıralama kalıbı:</strong> "Aşağıdaki birimlerin küçükten büyüğe doğru sıralanışı hangisidir?" (bit → Byte → KB → MB → GB → TB)</li>
  <li><strong>Eşleştirme:</strong> "<code>.xlsx</code> uzantılı dosya hangi programla açılır?"</li>
  <li><strong>"Hangisi yanlıştır?"</strong> — kes/kopyala farkı veya Shift+Delete davranışı bir şıkka ters yazılır.</li>
  <li><strong>Hesap kalıbı:</strong> "2 GB kaç MB'dır?" (2 × 1024 = 2048 MB)</li>
  <li><strong>"Silinen dosya nereye gider?"</strong> — geri dönüşüm kutusu ve istisnaları (USB, Shift+Delete) sorulur.</li>
</ul>

<h2>✍️ Örnek Sorular</h2>

<div class="quiz-q" data-answer="b">
  <p class="q-text"><strong>Soru 1.</strong> Bir Excel çalışma kitabının varsayılan dosya uzantısı aşağıdakilerden hangisidir?</p>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) .docx</button>
    <button class="q-opt" data-opt="b">B) .xlsx</button>
    <button class="q-opt" data-opt="c">C) .pptx</button>
    <button class="q-opt" data-opt="d">D) .pdf</button>
  </div>
  <div class="q-explain"><strong>Cevap: B.</strong> <code>.xlsx</code> Excel'e aittir. <code>.docx</code> Word, <code>.pptx</code> PowerPoint, <code>.pdf</code> taşınabilir belge biçimidir.</div>
</div>

<div class="quiz-q" data-answer="d">
  <p class="q-text"><strong>Soru 2.</strong> Veri boyutu birimlerinin <strong>küçükten büyüğe</strong> doğru sıralanışı hangisidir?</p>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) Byte – bit – KB – MB – GB</button>
    <button class="q-opt" data-opt="b">B) bit – Byte – MB – KB – GB</button>
    <button class="q-opt" data-opt="c">C) KB – Byte – bit – MB – GB</button>
    <button class="q-opt" data-opt="d">D) bit – Byte – KB – MB – GB</button>
  </div>
  <div class="q-explain"><strong>Cevap: D.</strong> En küçük birim bit'tir; 8 bit = 1 Byte, sonrası 1024'er kat: KB → MB → GB. A şıkkı bit ile Byte'ı, B şıkkı KB ile MB'yi yer değiştirir.</div>
</div>

<div class="quiz-q" data-answer="a">
  <p class="q-text"><strong>Soru 3.</strong> Bir dosyayı <strong>Ctrl+X</strong> ile kesip başka klasöre <strong>Ctrl+V</strong> ile yapıştırırsan ne olur?</p>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) Dosya taşınır; eski konumdan silinir, yeni konuma geçer.</button>
    <button class="q-opt" data-opt="b">B) Dosya çoğaltılır; iki konumda da bulunur.</button>
    <button class="q-opt" data-opt="c">C) Dosya geri dönüşüm kutusuna gönderilir.</button>
    <button class="q-opt" data-opt="d">D) Dosyanın yalnızca kısayolu oluşturulur.</button>
  </div>
  <div class="q-explain"><strong>Cevap: A.</strong> Kes+yapıştır = taşıma. Çoğaltma (B) kopyala+yapıştır ile olur; geri dönüşüm kutusu silme işlemiyle ilgilidir.</div>
</div>

<div class="quiz-q" data-answer="c">
  <p class="q-text"><strong>Soru 4.</strong> 2 GB boyutundaki bir dosya yaklaşık kaç MB'dır?</p>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) 512 MB</button>
    <button class="q-opt" data-opt="b">B) 1024 MB</button>
    <button class="q-opt" data-opt="c">C) 2048 MB</button>
    <button class="q-opt" data-opt="d">D) 4096 MB</button>
  </div>
  <div class="q-explain"><strong>Cevap: C.</strong> 1 GB = 1024 MB olduğundan 2 GB = 2 × 1024 = 2048 MB. B şıkkı 1 GB'nin, D şıkkı 4 GB'nin karşılığıdır.</div>
</div>

<div class="quiz-q" data-answer="d">
  <p class="q-text"><strong>Soru 5. (Tuzak)</strong> Aşağıdaki ifadelerden hangisi <strong>doğrudur</strong>?</p>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) Delete ile silinen her dosya kalıcı olarak yok olur.</button>
    <button class="q-opt" data-opt="b">B) 1 Byte, 1024 bit'e eşittir.</button>
    <button class="q-opt" data-opt="c">C) Göreli yol, dosyanın adresini her zaman kök dizinden başlayarak verir.</button>
    <button class="q-opt" data-opt="d">D) Shift+Delete ile silinen dosya geri dönüşüm kutusuna uğramaz.</button>
  </div>
  <div class="q-explain"><strong>Cevap: D.</strong> Shift+Delete kalıcı siler. A yanlış: Delete kutuya taşır. B yanlış: 1 Byte = <strong>8</strong> bit. C yanlış: kök dizinden başlayan yol <strong>mutlak</strong> yoldur.</div>
</div>

<h2>🔁 Mini Tekrar</h2>
<div class="table-wrap"><table>
<thead><tr><th>Kavram</th><th>Aklında kalsın</th></tr></thead>
<tbody>
<tr><td>Uzantı</td><td>Dosyanın türünü belirtir (<code>.docx</code> Word, <code>.xlsx</code> Excel, <code>.pptx</code> PowerPoint)</td></tr>
<tr><td>Birimler</td><td>bit → Byte(8 bit) → KB → MB → GB → TB (1024'er kat)</td></tr>
<tr><td>Kopyala</td><td>Çoğaltır — kaynak yerinde kalır</td></tr>
<tr><td>Kes</td><td>Taşır — kaynak silinir</td></tr>
<tr><td>Delete</td><td>Geri dönüşüm kutusuna taşır</td></tr>
<tr><td>Shift+Delete</td><td>Kalıcı siler, kutuya uğramaz</td></tr>
<tr><td>Mutlak yol</td><td>Kökten tam adres (<code>C:\\...</code>)</td></tr>
<tr><td>Göreli yol</td><td>Bulunduğun yere göre adres</td></tr>
<tr><td>ZIP/RAR</td><td>Sıkıştırır + tek arşivde toplar</td></tr>
</tbody>
</table></div>
`
  },
  {
    module: 'bilisim',
    id: 'bo-04-internet-ag',
    order: 4,
    title: 'İnternet ve Ağ Temelleri',
    html: `
<h2>📖 Konu Anlatımı</h2>

<h3>İnternet ve Web Aynı Şey Değildir!</h3>
<p><strong>İnternet</strong>, dünyadaki milyonlarca bilgisayarı birbirine bağlayan dev <strong>ağ altyapısıdır</strong>. <strong>Web (WWW)</strong> ise bu altyapı üzerinde çalışan, birbirine bağlı sayfalardan oluşan bir <strong>hizmettir</strong>. E-posta ve dosya transferi de internet üzerinde çalışan ama web olmayan diğer hizmetlerdir. Kısaca: internet yol, web o yolda giden araçlardan sadece biridir.</p>

<h3>Tarayıcı ve Arama Motoru</h3>
<p><strong>Tarayıcı (browser)</strong>, web sayfalarını görüntüleyen <strong>programdır</strong>: Chrome, Firefox, Edge, Safari. <strong>Arama motoru</strong> ise web'de arama yapan bir <strong>web sitesidir</strong>: Google, Bing, Yandex. Yani Google'a Chrome'un içinden girersin — biri program, diğeri site.</p>

<h3>Adresleme: URL, IP, DNS</h3>
<ul>
  <li><strong>URL:</strong> bir web kaynağının tam adresi: <code>https://www.ornek.com/sayfa</code></li>
  <li><strong>IP adresi:</strong> ağdaki her cihazın sayısal kimliği: <code>192.168.1.1</code> gibi. İnternette cihazlar birbirini IP ile bulur.</li>
  <li><strong>DNS:</strong> alan adını (<code>www.ornek.com</code>) IP adresine çeviren sistemdir — internetin "telefon rehberi".</li>
</ul>

<h3>Ağ Donanımları ve Ağ Türleri</h3>
<ul>
  <li><strong>Modem:</strong> evdeki ağı internet servis sağlayıcısına bağlar; sinyal dönüşümü yapar.</li>
  <li><strong>Router (yönlendirici):</strong> ağdaki cihazlar arasında veri paketlerini doğru adrese <strong>yönlendirir</strong>. (Evdeki kutular genelde modem+router birleşiktir.)</li>
  <li><strong>LAN:</strong> ev, ofis, okul gibi <strong>dar alandaki</strong> yerel ağ.</li>
  <li><strong>WAN:</strong> şehirler ve ülkeler arası <strong>geniş alan</strong> ağı. İnternet, dünyanın en büyük WAN'ıdır.</li>
  <li><strong>Ethernet:</strong> kabloyla ağ bağlantısı (hızlı ve kararlı); <strong>Wi-Fi:</strong> kablosuz bağlantı (pratik ama mesafe/duvardan etkilenir).</li>
</ul>

<h3>Protokoller</h3>
<p>Protokol, cihazların haberleşirken uyduğu <strong>kurallar bütünüdür</strong>:</p>
<ul>
  <li><strong>HTTP:</strong> web sayfası iletim protokolü; <strong>HTTPS</strong> bunun <strong>şifreli/güvenli</strong> halidir (S = Secure).</li>
  <li><strong>FTP:</strong> sunucuya dosya yükleme/indirme protokolü.</li>
  <li><strong>E-posta protokolleri:</strong> <strong>SMTP</strong> postayı <strong>gönderir</strong>; <strong>POP3</strong> ve <strong>IMAP</strong> postayı <strong>alır</strong>. (IMAP postayı sunucuda tutar, tüm cihazlardan senkron erişilir; POP3 indirir.)</li>
</ul>
<div class="callout tip"><p><strong>Ezber hilesi:</strong> SMTP'nin S'si "send/salla-gönder" olsun: <strong>S</strong>MTP = gönderme. Geri kalan ikisi (POP3, IMAP) alma protokolüdür.</p></div>

<h3>Diğer Önemli Kavramlar</h3>
<ul>
  <li><strong>Bulut bilişim:</strong> veri ve programların kendi bilgisayarın yerine internetteki sunucularda tutulması (Google Drive, OneDrive).</li>
  <li><strong>VPN:</strong> internet trafiğini şifreli bir tünelden geçirerek güvenli ve gizli bağlantı sağlar.</li>
  <li><strong>Proxy:</strong> isteklerini senin yerine ileten aracı sunucu; IP'ni gizleyebilir ama VPN gibi tüm trafiği şifrelemez.</li>
  <li><strong>Bant genişliği:</strong> bağlantının taşıyabileceği veri kapasitesi (Mbps ile ölçülür) — "borunun kalınlığı".</li>
  <li><strong>Download / Upload:</strong> download = internetten <strong>indirme</strong>; upload = internete <strong>yükleme</strong> (ör. e-postaya dosya eklemek upload'dur).</li>
</ul>

<h2>⚠️ Karıştırılan Kavramlar</h2>

<h3>En Çok Çıkan Dörtlü</h3>
<div class="table-wrap"><table>
<thead><tr><th>Kavram</th><th>Nedir?</th><th>Örnek</th></tr></thead>
<tbody>
<tr><td>İnternet</td><td>Küresel ağ <strong>altyapısı</strong></td><td>—</td></tr>
<tr><td>Web</td><td>İnternet üstünde çalışan sayfa <strong>hizmeti</strong></td><td>www siteleri</td></tr>
<tr><td>Tarayıcı</td><td>Sayfaları gösteren <strong>program</strong></td><td>Chrome, Firefox</td></tr>
<tr><td>Arama motoru</td><td>Arama yapan <strong>web sitesi</strong></td><td>Google, Bing</td></tr>
</tbody>
</table></div>

<h3>IP / DNS / URL</h3>
<div class="table-wrap"><table>
<thead><tr><th>Kavram</th><th>Görevi</th></tr></thead>
<tbody>
<tr><td>IP adresi</td><td>Cihazın ağdaki sayısal <strong>adresi</strong></td></tr>
<tr><td>DNS</td><td>Alan adını IP'ye <strong>çeviren</strong> sistem</td></tr>
<tr><td>URL</td><td>Web kaynağının <strong>tam adresi</strong></td></tr>
<tr><td>Modem</td><td>İnternete <strong>bağlar</strong></td></tr>
<tr><td>Router</td><td>Paketleri cihazlara <strong>yönlendirir</strong></td></tr>
</tbody>
</table></div>

<div class="callout warn"><p><strong>Tuzak:</strong> "Google bir tarayıcıdır" en klasik çeldiricidir — Google <strong>arama motorudur</strong>, Chrome tarayıcıdır. İkinci klasik: "Gmail bir protokoldür" — Gmail bir <strong>e-posta servisidir</strong>; protokoller SMTP/POP3/IMAP'tır. Üçüncüsü: HTTPS'deki S, "speed" değil <strong>"secure"</strong> demektir.</p></div>

<h2>🎯 Sınavda Nasıl Sorulur?</h2>
<ul>
  <li><strong>"Aşağıdakilerden hangisi bir web tarayıcısı değildir?"</strong> — üç tarayıcı arasına Google (arama motoru) sıkıştırılır.</li>
  <li><strong>"Alan adını IP adresine çeviren sistem hangisidir?"</strong> — cevap DNS; çeldiriciler URL, HTTP, FTP.</li>
  <li><strong>"E-posta göndermek için kullanılan protokol hangisidir?"</strong> — SMTP/POP3 ayrımı sorulur.</li>
  <li><strong>"HTTP ile HTTPS arasındaki fark nedir?"</strong> — şifreleme/güvenlik vurgusu aranır.</li>
  <li><strong>Tanım eşleştirme:</strong> LAN/WAN, modem/router, download/upload, VPN/proxy çiftlerinden biri tanımla verilir, kavram istenir.</li>
</ul>

<h2>✍️ Örnek Sorular</h2>

<div class="quiz-q" data-answer="d">
  <p class="q-text"><strong>Soru 1.</strong> Aşağıdakilerden hangisi bir <strong>web tarayıcısı değildir</strong>?</p>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) Chrome</button>
    <button class="q-opt" data-opt="b">B) Firefox</button>
    <button class="q-opt" data-opt="c">C) Safari</button>
    <button class="q-opt" data-opt="d">D) Google</button>
  </div>
  <div class="q-explain"><strong>Cevap: D.</strong> Google bir <strong>arama motorudur</strong> (web sitesi); Chrome, Firefox ve Safari sayfaları görüntüleyen tarayıcı programlardır.</div>
</div>

<div class="quiz-q" data-answer="b">
  <p class="q-text"><strong>Soru 2.</strong> <code>www.ornek.com</code> gibi alan adlarını IP adresine çeviren sistem aşağıdakilerden hangisidir?</p>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) FTP</button>
    <button class="q-opt" data-opt="b">B) DNS</button>
    <button class="q-opt" data-opt="c">C) HTTP</button>
    <button class="q-opt" data-opt="d">D) URL</button>
  </div>
  <div class="q-explain"><strong>Cevap: B.</strong> DNS, alan adı → IP çevirisini yapar. FTP dosya transferi, HTTP sayfa iletim protokolüdür; URL ise adresin kendisidir, çeviri yapmaz.</div>
</div>

<div class="quiz-q" data-answer="c">
  <p class="q-text"><strong>Soru 3.</strong> E-posta <strong>göndermek</strong> için kullanılan protokol aşağıdakilerden hangisidir?</p>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) IMAP</button>
    <button class="q-opt" data-opt="b">B) POP3</button>
    <button class="q-opt" data-opt="c">C) SMTP</button>
    <button class="q-opt" data-opt="d">D) HTTPS</button>
  </div>
  <div class="q-explain"><strong>Cevap: C.</strong> SMTP gönderme protokolüdür. IMAP ve POP3 postayı <strong>alma</strong> protokolleridir; HTTPS web sayfası iletişimi içindir.</div>
</div>

<div class="quiz-q" data-answer="a">
  <p class="q-text"><strong>Soru 4.</strong> Ev, ofis veya okul gibi sınırlı bir alandaki cihazları birbirine bağlayan ağ türü hangisidir?</p>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) LAN</button>
    <button class="q-opt" data-opt="b">B) WAN</button>
    <button class="q-opt" data-opt="c">C) VPN</button>
    <button class="q-opt" data-opt="d">D) DNS</button>
  </div>
  <div class="q-explain"><strong>Cevap: A.</strong> LAN = yerel (dar) alan ağı. WAN geniş alanları (şehir/ülke) kapsar; VPN şifreli bağlantı hizmeti, DNS isim çözümleme sistemidir.</div>
</div>

<div class="quiz-q" data-answer="a">
  <p class="q-text"><strong>Soru 5. (Tuzak)</strong> Aşağıdaki ifadelerden hangisi <strong>yanlıştır</strong>?</p>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) İnternet ve web aynı kavramın iki farklı adıdır.</button>
    <button class="q-opt" data-opt="b">B) HTTPS, HTTP'nin şifrelenmiş (güvenli) sürümüdür.</button>
    <button class="q-opt" data-opt="c">C) E-postaya dosya eklemek bir upload (yükleme) işlemidir.</button>
    <button class="q-opt" data-opt="d">D) Router, ağdaki veri paketlerini doğru cihaza yönlendirir.</button>
  </div>
  <div class="q-explain"><strong>Cevap: A.</strong> İnternet ağ <strong>altyapısı</strong>, web ise üstünde çalışan bir <strong>hizmettir</strong> — aynı şey değildir. B, C ve D doğru ifadelerdir.</div>
</div>

<h2>🔁 Mini Tekrar</h2>
<div class="table-wrap"><table>
<thead><tr><th>Kavram</th><th>Tek cümle</th></tr></thead>
<tbody>
<tr><td>İnternet</td><td>Küresel ağ altyapısı</td></tr>
<tr><td>Web</td><td>İnternet üstündeki sayfa hizmeti</td></tr>
<tr><td>Chrome</td><td>Tarayıcı (program)</td></tr>
<tr><td>Google</td><td>Arama motoru (site)</td></tr>
<tr><td>Gmail</td><td>E-posta servisi</td></tr>
<tr><td>IP</td><td>Cihazın sayısal adresi</td></tr>
<tr><td>DNS</td><td>Alan adı → IP çevirisi</td></tr>
<tr><td>HTTP / HTTPS</td><td>Web protokolü / şifreli hali</td></tr>
<tr><td>SMTP</td><td>Posta gönderir; POP3/IMAP alır</td></tr>
<tr><td>FTP</td><td>Dosya transferi</td></tr>
<tr><td>LAN / WAN</td><td>Dar alan / geniş alan ağı</td></tr>
<tr><td>VPN</td><td>Şifreli tünel; proxy = aracı sunucu</td></tr>
<tr><td>Download / Upload</td><td>İndirme / yükleme</td></tr>
</tbody>
</table></div>
`
  },
  {
    module: 'bilisim',
    id: 'bo-05-guvenlik',
    order: 5,
    title: 'Bilgi Güvenliği ve Siber Güvenlik',
    html: `
<h2>📖 Konu Anlatımı</h2>

<div class="callout info"><p><strong>Önemli:</strong> Bu bölümden sınavda çok soru gelebilir. Özellikle zararlı yazılım türlerini birbirinden <strong>30 saniyede ayırt edebilecek</strong> kadar net bilmelisin.</p></div>

<h3>Güçlü Parola ve İki Faktörlü Doğrulama</h3>
<p><strong>Güçlü parola:</strong> en az 8-12 karakter; büyük/küçük harf, rakam ve özel karakter içerir; isim, doğum tarihi gibi tahmin edilebilir bilgiler içermez ve her hesapta <strong>farklı</strong> olmalıdır. <strong>İki faktörlü doğrulama (2FA)</strong>, paroladan sonra ikinci bir kanıt ister (SMS kodu, doğrulama uygulaması). Parola çalınsa bile hesabı korur.</p>

<h3>Zararlı Yazılım (Malware) Türleri</h3>
<p>"Malware", tüm zararlı yazılımların <strong>genel çatı adıdır</strong>. Türleri:</p>
<ul>
  <li><strong>Virüs:</strong> kendini bir <strong>dosyaya/programa bulaştırır</strong>; o dosya çalıştırılınca yayılır. Yayılmak için kullanıcı eylemi gerekir.</li>
  <li><strong>Solucan (worm):</strong> hiçbir dosyaya ihtiyaç duymadan <strong>kendi kendine ağ üzerinden</strong> yayılır. En hızlı yayılan türdür.</li>
  <li><strong>Truva atı (trojan):</strong> <strong>faydalı bir program gibi görünür</strong> (oyun, crack, güncelleme) ama içinde zararlı kod taşır. Kendi kendine yayılmaz; kullanıcı kendi eliyle kurar.</li>
  <li><strong>Fidye yazılımı (ransomware):</strong> dosyalarını <strong>şifreler</strong> ve açmak için <strong>fidye (para) ister</strong>.</li>
  <li><strong>Casus yazılım (spyware):</strong> kendini gizleyip kullanıcıyı <strong>izler</strong>; klavye girişlerini, parolaları, alışkanlıkları toplayıp saldırgana gönderir. (Tuş kaydeden alt türü: keylogger.)</li>
</ul>

<h3>Phishing (Kimlik Avı) ve Sosyal Mühendislik</h3>
<p><strong>Phishing:</strong> bankadan/kargodan geliyormuş gibi görünen <strong>sahte e-posta, SMS veya site</strong> ile kullanıcıyı kandırıp parola, kart bilgisi gibi verileri çalma yöntemidir. <strong>Sosyal mühendislik</strong> ise daha genel kavramdır: teknolojiyi değil <strong>insanı kandırmayı</strong> hedefler (telefonla "bankadan arıyorum" demek gibi). Phishing, sosyal mühendisliğin en yaygın örneğidir.</p>

<h3>Savunma Araçları</h3>
<ul>
  <li><strong>Antivirüs:</strong> bilgisayardaki <strong>zararlı yazılımları tespit eder ve temizler</strong>. Güncel tutulmalıdır.</li>
  <li><strong>Güvenlik duvarı (firewall):</strong> ağa giren-çıkan <strong>trafiği kurallara göre denetler</strong>; izinsiz erişimi engeller. Virüs temizlemez — kapıdaki güvenlik görevlisi gibidir.</li>
  <li><strong>Şifreleme:</strong> veriyi, anahtarı olmayanın okuyamayacağı biçime dönüştürür. HTTPS'li sitelerde iletişim şifelidir; adres çubuğunda kilit simgesi görünür.</li>
  <li><strong>Yedekleme:</strong> verinin kopyasını ayrı bir ortamda (harici disk, bulut) saklamak. Özellikle ransomware'e karşı <strong>en etkili sigortadır</strong>.</li>
  <li><strong>Güncelleme:</strong> yazılım güncellemeleri bilinen <strong>güvenlik açıklarını kapatır</strong>; ertelemek saldırganlara açık kapı bırakır.</li>
</ul>

<h3>Kişisel Veri ve KVKK</h3>
<p><strong>Kişisel veri</strong>, kimliği belirli/belirlenebilir bir kişiye ait her bilgidir: ad-soyad, TC kimlik no, telefon, e-posta, konum... <strong>KVKK</strong> (Kişisel Verilerin Korunması Kanunu), bu verilerin ancak <strong>açık rıza veya yasal dayanakla</strong> işlenebilmesini, amaç dışı kullanılmamasını ve güvenle saklanmasını zorunlu kılar. Kişi, verisinin silinmesini isteme hakkına sahiptir.</p>

<h3>Güvenli İnternet Kullanımı — Altın Kurallar</h3>
<ul>
  <li>Tanımadığın gönderenden gelen <strong>ekleri ve linkleri açma</strong>.</li>
  <li>Parola/kart bilgisi girilecek sitede <strong>HTTPS ve adresin doğruluğunu</strong> kontrol et.</li>
  <li>Halka açık Wi-Fi'da bankacılık işlemi yapma; gerekiyorsa VPN kullan.</li>
  <li>Her hesapta farklı parola + mümkünse 2FA kullan.</li>
  <li>Düzenli yedek al, güncellemeleri geciktirme.</li>
</ul>

<h2>⚠️ Karıştırılan Kavramlar</h2>

<h3>Zararlı Yazılım Ayrım Tablosu (EZBERLE!)</h3>
<div class="table-wrap"><table>
<thead><tr><th>Tür</th><th>Anahtar cümle</th><th>Yayılma şekli</th></tr></thead>
<tbody>
<tr><td><strong>Virüs</strong></td><td>Dosyaya bulaşır</td><td>Bulaştığı dosya çalıştırılınca</td></tr>
<tr><td><strong>Worm (solucan)</strong></td><td>Kendi kendine yayılır</td><td>Ağ üzerinden, dosyasız ve otomatik</td></tr>
<tr><td><strong>Trojan (truva atı)</strong></td><td>Faydalı gibi görünür</td><td>Kullanıcı kendisi kurar</td></tr>
<tr><td><strong>Ransomware</strong></td><td>Şifreler + fidye ister</td><td>Genelde e-posta eki/açıklarla</td></tr>
<tr><td><strong>Spyware</strong></td><td>Gizlice izler, veri toplar</td><td>Gizlenerek arka planda çalışır</td></tr>
<tr><td><strong>Phishing</strong></td><td>Sahte mesaj/site ile kandırır</td><td>Yazılım değil, <strong>saldırı yöntemidir</strong></td></tr>
</tbody>
</table></div>

<h3>Antivirüs / Firewall</h3>
<div class="table-wrap"><table>
<thead><tr><th>Özellik</th><th>Antivirüs</th><th>Firewall</th></tr></thead>
<tbody>
<tr><td>Ne yapar?</td><td>Zararlı yazılımı bulur ve temizler</td><td>Ağ trafiğini denetler, izinsiz erişimi keser</td></tr>
<tr><td>Nerede çalışır?</td><td>Cihazın içindeki dosyalarda</td><td>Ağın giriş-çıkış kapısında</td></tr>
<tr><td>Benzetme</td><td>Vücuttaki bağışıklık sistemi</td><td>Kapıdaki güvenlik görevlisi</td></tr>
</tbody>
</table></div>

<div class="callout warn"><p><strong>Tuzaklar:</strong> (1) "Kendi kendine ağ üzerinden yayılan" tanımı <strong>worm</strong>'dur; virüs şıkkına atlama — virüs <strong>dosya ister</strong>. (2) Phishing bir <strong>yazılım değildir</strong>; kandırma yöntemidir. (3) Firewall <strong>virüs temizlemez</strong>; trafiği denetler. (4) "Faydalı görünüp zarar veren" her zaman <strong>trojan</strong>'dır.</p></div>

<h2>🎯 Sınavda Nasıl Sorulur?</h2>
<ul>
  <li><strong>Tanımdan kavrama:</strong> "Kendini yararlı bir yazılım gibi gösterip arka planda zarar veren yazılım türü hangisidir?" → trojan.</li>
  <li><strong>"Dosyaları şifreleyerek kullanıcıdan para talep eden yazılım hangisidir?"</strong> → ransomware.</li>
  <li><strong>"Aşağıdakilerden hangisi güçlü bir paroladır?"</strong> — uzun + karışık karakterli şık aranır.</li>
  <li><strong>"Sahte e-posta ile kullanıcı bilgilerini çalma yöntemi"</strong> → phishing; çeldirici olarak spyware/trojan verilir.</li>
  <li><strong>"Hangisi ağ trafiğini denetleyerek izinsiz erişimi engeller?"</strong> → firewall; çeldirici antivirüs.</li>
  <li><strong>"Hangisi alınacak güvenlik önlemlerinden biri değildir?"</strong> — şıklara "parolayı herkesle paylaşmak" gibi açık yanlış konur; hızlı puan sorusudur.</li>
</ul>

<h2>✍️ Örnek Sorular</h2>

<div class="quiz-q" data-answer="c">
  <p class="q-text"><strong>Soru 1.</strong> Kullanıcının dosyalarını şifreleyip erişimi engelleyen ve karşılığında para talep eden zararlı yazılım türü hangisidir?</p>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) Spyware</button>
    <button class="q-opt" data-opt="b">B) Worm</button>
    <button class="q-opt" data-opt="c">C) Ransomware</button>
    <button class="q-opt" data-opt="d">D) Adware</button>
  </div>
  <div class="q-explain"><strong>Cevap: C.</strong> "Şifreleme + fidye" ikilisi her zaman ransomware'dir. Spyware izler, worm kendi kendine yayılır, adware reklam gösterir.</div>
</div>

<div class="quiz-q" data-answer="a">
  <p class="q-text"><strong>Soru 2.</strong> Bankadan geliyormuş gibi görünen sahte bir e-postayla kullanıcının kart bilgilerini çalmaya çalışan saldırı yöntemi hangisidir?</p>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) Phishing (kimlik avı)</button>
    <button class="q-opt" data-opt="b">B) Ransomware</button>
    <button class="q-opt" data-opt="c">C) Güvenlik duvarı</button>
    <button class="q-opt" data-opt="d">D) Virüs</button>
  </div>
  <div class="q-explain"><strong>Cevap: A.</strong> Sahte mesaj/site ile bilgi çalma = phishing. Ransomware fidye ister, virüs dosyaya bulaşan yazılımdır; güvenlik duvarı zaten bir savunma aracıdır.</div>
</div>

<div class="quiz-q" data-answer="d">
  <p class="q-text"><strong>Soru 3.</strong> Herhangi bir dosyaya ihtiyaç duymadan, ağ üzerinden <strong>kendi kendine</strong> yayılabilen zararlı yazılım türü hangisidir?</p>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) Virüs</button>
    <button class="q-opt" data-opt="b">B) Trojan</button>
    <button class="q-opt" data-opt="c">C) Spyware</button>
    <button class="q-opt" data-opt="d">D) Worm (solucan)</button>
  </div>
  <div class="q-explain"><strong>Cevap: D.</strong> "Kendi kendine, ağ üzerinden" ifadesi worm'un imzasıdır. Virüs dosyaya bulaşmak zorundadır (en güçlü çeldirici); trojan kullanıcı eliyle kurulur; spyware izleme yapar.</div>
</div>

<div class="quiz-q" data-answer="b">
  <p class="q-text"><strong>Soru 4.</strong> Aşağıdakilerden hangisi <strong>en güçlü</strong> paroladır?</p>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) 123456</button>
    <button class="q-opt" data-opt="b">B) G7k!m2P&amp;x9</button>
    <button class="q-opt" data-opt="c">C) ali1990</button>
    <button class="q-opt" data-opt="d">D) parola</button>
  </div>
  <div class="q-explain"><strong>Cevap: B.</strong> Uzun, anlamsız ve büyük/küçük harf + rakam + özel karakter içeriyor. Diğerleri kısa, tahmin edilebilir veya kişisel bilgi (isim+doğum yılı) içeriyor.</div>
</div>

<div class="quiz-q" data-answer="d">
  <p class="q-text"><strong>Soru 5.</strong> Ağa giren ve çıkan trafiği belirli kurallara göre denetleyerek izinsiz erişimleri engelleyen güvenlik bileşeni hangisidir?</p>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) Antivirüs</button>
    <button class="q-opt" data-opt="b">B) VPN</button>
    <button class="q-opt" data-opt="c">C) Yedekleme</button>
    <button class="q-opt" data-opt="d">D) Güvenlik duvarı (firewall)</button>
  </div>
  <div class="q-explain"><strong>Cevap: D.</strong> "Trafiği denetler, izinsiz erişimi engeller" = firewall. Antivirüs zararlıyı temizler (en yakın çeldirici), VPN trafiği şifreler, yedekleme veri kopyası alır.</div>
</div>

<div class="quiz-q" data-answer="a">
  <p class="q-text"><strong>Soru 6. (Tuzak)</strong> Aşağıdaki ifadelerden hangisi <strong>yanlıştır</strong>?</p>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) Trojan, ağ üzerinden kendi kendine yayılan bir zararlı yazılımdır.</button>
    <button class="q-opt" data-opt="b">B) İki faktörlü doğrulama, parola çalınsa bile hesabı korumaya yardımcı olur.</button>
    <button class="q-opt" data-opt="c">C) Düzenli yedekleme, fidye yazılımına karşı etkili bir önlemdir.</button>
    <button class="q-opt" data-opt="d">D) Yazılım güncellemeleri bilinen güvenlik açıklarını kapatır.</button>
  </div>
  <div class="q-explain"><strong>Cevap: A.</strong> Kendi kendine yayılan <strong>worm</strong>'dur; trojan faydalı görünüp <strong>kullanıcı tarafından kurulur</strong>, kendi kendine yayılmaz. B, C ve D doğru ve sınavda sık geçen ifadelerdir.</div>
</div>

<h2>🔁 Mini Tekrar</h2>
<div class="table-wrap"><table>
<thead><tr><th>Kavram</th><th>Anahtar kelime</th></tr></thead>
<tbody>
<tr><td>Virüs</td><td>Dosyaya bulaşır</td></tr>
<tr><td>Worm</td><td>Kendi kendine, ağdan yayılır</td></tr>
<tr><td>Trojan</td><td>Faydalı görünür, zarar verir</td></tr>
<tr><td>Ransomware</td><td>Şifreler + fidye ister</td></tr>
<tr><td>Spyware</td><td>Gizlice izler</td></tr>
<tr><td>Phishing</td><td>Sahte mesaj/site ile kandırır (yöntem!)</td></tr>
<tr><td>Sosyal mühendislik</td><td>İnsanı kandırma sanatı</td></tr>
<tr><td>Antivirüs</td><td>Zararlıyı bulur, temizler</td></tr>
<tr><td>Firewall</td><td>Ağ trafiğini denetler</td></tr>
<tr><td>2FA</td><td>Parola + ikinci doğrulama adımı</td></tr>
<tr><td>Yedekleme</td><td>Ransomware'e karşı sigorta</td></tr>
<tr><td>KVKK</td><td>Kişisel veri ancak rızayla işlenir</td></tr>
</tbody>
</table></div>
`
  },
  {
    module: 'bilisim',
    id: 'bo-06-ofis',
    order: 6,
    title: 'Ofis Programları ve Verimlilik Araçları',
    html: `
<h2>📖 Konu Anlatımı</h2>

<h3>Üç Büyükler: Word, Excel, PowerPoint</h3>
<ul>
  <li><strong>Word:</strong> kelime işlemci — dilekçe, rapor, sözleşme gibi <strong>metin belgeleri</strong> hazırlanır (<code>.docx</code>).</li>
  <li><strong>Excel:</strong> elektronik tablolama — <strong>hesaplama, tablo ve grafik</strong> işleri yapılır (<code>.xlsx</code>).</li>
  <li><strong>PowerPoint:</strong> <strong>sunum</strong> hazırlama — slaytlardan oluşur (<code>.pptx</code>).</li>
</ul>

<h3>Excel'in Yapı Taşları</h3>
<ul>
  <li><strong>Çalışma kitabı (workbook):</strong> Excel dosyasının kendisi.</li>
  <li><strong>Sayfa (worksheet):</strong> kitabın içindeki her bir sekme. Bir kitapta birden çok sayfa olur.</li>
  <li><strong>Sütun:</strong> dikey; <strong>harflerle</strong> adlandırılır (A, B, C...).</li>
  <li><strong>Satır:</strong> yatay; <strong>rakamlarla</strong> adlandırılır (1, 2, 3...).</li>
  <li><strong>Hücre:</strong> satır ile sütunun kesişimi. Adresi "sütun harfi + satır numarası"dır: <code>A1</code>, <code>B2</code>, <code>C10</code>.</li>
  <li><strong>Aralık:</strong> hücre bloğu, iki nokta üst üste ile yazılır: <code>A1:A5</code> → A1'den A5'e kadar olan hücreler.</li>
</ul>

<h3>Formül ve Fonksiyon</h3>
<p>Excel'de hesaplama yapan her ifade <strong>= işaretiyle başlar</strong>. <strong>Formül</strong>, senin kurduğun hesap ifadesidir (<code>=A1+A2</code>); <strong>fonksiyon</strong> ise Excel'in hazır hesap aracıdır (<code>=TOPLA(...)</code>). Türkçe Excel'de fonksiyon adları Türkçe, İngilizce sürümde İngilizcedir:</p>
<pre><code class="lang-text">=TOPLA(A1:A5)      → A1'den A5'e toplar        (İng: =SUM)
=ORTALAMA(A1:A5)   → aritmetik ortalama alır    (İng: =AVERAGE)
=MİN(A1:A5)        → en küçük değeri bulur      (İng: =MIN)
=MAK(A1:A5)        → en büyük değeri bulur      (İng: =MAX)
=EĞER(A1&gt;50;"Geçti";"Kaldı") → koşula göre sonuç (İng: =IF)
=BAĞ_DEĞ_SAY(A1:A5) → sayı içeren hücreleri sayar (İng: =COUNT)</code></pre>

<h3>Veriyle Çalışma: Sıralama, Filtreleme, Grafik</h3>
<ul>
  <li><strong>Sıralama:</strong> veriyi artan/azalan dizer (A→Z, küçükten büyüğe).</li>
  <li><strong>Filtreleme:</strong> yalnızca koşula uyan satırları <strong>gösterir</strong>; diğerlerini silmez, <strong>gizler</strong>.</li>
  <li><strong>Grafik:</strong> tablodaki veriyi görselleştirir (sütun, pasta, çizgi grafik...).</li>
</ul>

<h3>E-posta ve Takvim</h3>
<ul>
  <li><strong>Kime (To):</strong> asıl alıcı. <strong>CC:</strong> bilgi amaçlı kopya — herkes birbirini görür. <strong>BCC (gizli kopya):</strong> diğer alıcılar bu kişiyi <strong>göremez</strong>.</li>
  <li><strong>Ek (attachment):</strong> e-postayla gönderilen dosya.</li>
  <li><strong>Takvim uygulamaları:</strong> toplantı planlama, hatırlatıcı ve davet gönderme (Outlook Takvim, Google Takvim).</li>
</ul>

<h3>Bulut Depolama ve Dosya Paylaşımı</h3>
<p><strong>Google Drive, OneDrive, Dropbox</strong> gibi servisler dosyaları internetteki sunucularda saklar. Avantajları: her cihazdan erişim, otomatik senkronizasyon, bağlantı (link) ile kolay paylaşım ve <strong>aynı dosya üzerinde birlikte çalışma</strong>. Paylaşırken "görüntüleyebilir / düzenleyebilir" yetkisi seçilir.</p>

<h2>⚠️ Karıştırılan Kavramlar</h2>

<h3>Hangi İş Hangi Program?</h3>
<div class="table-wrap"><table>
<thead><tr><th>İş</th><th>Program</th><th>Uzantı</th></tr></thead>
<tbody>
<tr><td>Dilekçe, rapor yazmak</td><td>Word</td><td><code>.docx</code></td></tr>
<tr><td>Bütçe tablosu, hesaplama, grafik</td><td>Excel</td><td><code>.xlsx</code></td></tr>
<tr><td>Slaytlı sunum hazırlamak</td><td>PowerPoint</td><td><code>.pptx</code></td></tr>
</tbody>
</table></div>

<h3>Excel'de Sık Karışanlar</h3>
<div class="table-wrap"><table>
<thead><tr><th>Karışan ikili</th><th>Ayrım</th></tr></thead>
<tbody>
<tr><td>Satır / Sütun</td><td>Satır <strong>yatay ve rakam</strong>; sütun <strong>dikey ve harf</strong></td></tr>
<tr><td>Sayfa / Çalışma kitabı</td><td>Kitap = dosyanın tamamı; sayfa = içindeki sekme</td></tr>
<tr><td>Formül / Fonksiyon</td><td>Formülü sen kurarsın; fonksiyon hazır araçtır</td></tr>
<tr><td>Sıralama / Filtreleme</td><td>Sıralama dizer; filtre koşula uymayanı <strong>gizler</strong></td></tr>
<tr><td>MİN / MAK</td><td>MİN en küçük, MAK en büyük değer</td></tr>
</tbody>
</table></div>

<div class="callout warn"><p><strong>Tuzak:</strong> Hücre adresi her zaman <strong>önce sütun harfi, sonra satır numarası</strong> şeklindedir: <code>B3</code> = B sütunu, 3. satır. "3B" diye şık verirlerse yanlıştır. Ayrıca formüller <strong>=</strong> ile başlamazsa Excel onu düz metin sayar — "hangisi geçerli formüldür?" sorusunun anahtarı budur. Filtreleme veriyi <strong>silmez</strong>, sadece gizler.</p></div>

<h2>🎯 Sınavda Nasıl Sorulur?</h2>
<ul>
  <li><strong>"A1:A5 aralığındaki sayıların toplamını veren formül hangisidir?"</strong> — <code>=TOPLA(A1:A5)</code> aranır; çeldiriciler =ORTALAMA, =MAK veya eşittiri eksik yazımlar.</li>
  <li><strong>"B sütunu ile 4. satırın kesişimindeki hücrenin adresi nedir?"</strong> — B4; çeldirici 4B.</li>
  <li><strong>"Sunum hazırlamak için hangi program kullanılır?"</strong> — PowerPoint; çeldiriciler Word/Excel.</li>
  <li><strong>"Hangisi geçerli bir Excel formülü değildir?"</strong> — = işareti olmayan şık doğru cevaptır.</li>
  <li><strong>"E-postada diğer alıcıların göremeyeceği gizli kopya alanı hangisidir?"</strong> — BCC; çeldirici CC.</li>
</ul>

<h2>✍️ Örnek Sorular</h2>

<div class="quiz-q" data-answer="b">
  <p class="q-text"><strong>Soru 1.</strong> Excel'de A1'den A5'e kadar olan hücrelerdeki sayıların <strong>toplamını</strong> hesaplayan ifade hangisidir?</p>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) =ORTALAMA(A1:A5)</button>
    <button class="q-opt" data-opt="b">B) =TOPLA(A1:A5)</button>
    <button class="q-opt" data-opt="c">C) TOPLA(A1:A5)</button>
    <button class="q-opt" data-opt="d">D) =MAK(A1:A5)</button>
  </div>
  <div class="q-explain"><strong>Cevap: B.</strong> Toplama fonksiyonu TOPLA'dır (İng. SUM) ve formül <strong>=</strong> ile başlamalıdır. C şıkkında = yok (düz metin olur), A ortalama, D en büyük değeri verir.</div>
</div>

<div class="quiz-q" data-answer="c">
  <p class="q-text"><strong>Soru 2.</strong> Excel'de C sütunu ile 7. satırın kesişimindeki hücrenin adresi nedir?</p>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) 7C</button>
    <button class="q-opt" data-opt="b">B) C-7. hücre adres almaz</button>
    <button class="q-opt" data-opt="c">C) C7</button>
    <button class="q-opt" data-opt="d">D) G3</button>
  </div>
  <div class="q-explain"><strong>Cevap: C.</strong> Hücre adresi "sütun harfi + satır numarası"dır: C7. "7C" (satır önce) yazımı geçersizdir.</div>
</div>

<div class="quiz-q" data-answer="a">
  <p class="q-text"><strong>Soru 3.</strong> Slaytlardan oluşan bir sunum hazırlamak için kullanılacak en uygun program hangisidir?</p>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) PowerPoint</button>
    <button class="q-opt" data-opt="b">B) Excel</button>
    <button class="q-opt" data-opt="c">C) Not Defteri</button>
    <button class="q-opt" data-opt="d">D) Word</button>
  </div>
  <div class="q-explain"><strong>Cevap: A.</strong> Sunum = PowerPoint (<code>.pptx</code>). Word metin belgesi, Excel tablo/hesap, Not Defteri düz metin içindir.</div>
</div>

<div class="quiz-q" data-answer="d">
  <p class="q-text"><strong>Soru 4.</strong> Excel'de yalnızca "İstanbul" yazan satırları görüntüleyip diğerlerini geçici olarak gizlemek için hangi özellik kullanılır?</p>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) Sıralama</button>
    <button class="q-opt" data-opt="b">B) Grafik</button>
    <button class="q-opt" data-opt="c">C) Biçimlendirme</button>
    <button class="q-opt" data-opt="d">D) Filtreleme</button>
  </div>
  <div class="q-explain"><strong>Cevap: D.</strong> Koşula uyanı gösterip gerisini gizlemek = filtreleme. Sıralama yalnızca diziliş düzenini değiştirir, hiçbir satırı gizlemez — en güçlü çeldirici odur.</div>
</div>

<div class="quiz-q" data-answer="c">
  <p class="q-text"><strong>Soru 5. (Tuzak)</strong> Aşağıdaki ifadelerden hangisi <strong>yanlıştır</strong>?</p>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) Bir Excel çalışma kitabı birden fazla sayfa içerebilir.</button>
    <button class="q-opt" data-opt="b">B) =ORTALAMA fonksiyonunun İngilizce karşılığı =AVERAGE'dır.</button>
    <button class="q-opt" data-opt="c">C) Excel'de satırlar harflerle, sütunlar rakamlarla adlandırılır.</button>
    <button class="q-opt" data-opt="d">D) BCC alanına yazılan alıcıyı diğer alıcılar göremez.</button>
  </div>
  <div class="q-explain"><strong>Cevap: C.</strong> Tam tersi: <strong>sütunlar harf</strong> (A, B, C...), <strong>satırlar rakam</strong> (1, 2, 3...) ile adlandırılır. Diğer üç ifade doğrudur.</div>
</div>

<h2>🔁 Mini Tekrar</h2>
<div class="table-wrap"><table>
<thead><tr><th>Kavram</th><th>Aklında kalsın</th></tr></thead>
<tbody>
<tr><td>Word / Excel / PowerPoint</td><td>Metin / tablo-hesap / sunum</td></tr>
<tr><td>Sütun</td><td>Dikey, harf (A, B, C)</td></tr>
<tr><td>Satır</td><td>Yatay, rakam (1, 2, 3)</td></tr>
<tr><td>Hücre adresi</td><td>Sütun+satır: B3, asla 3B değil</td></tr>
<tr><td>Formül başlangıcı</td><td>Her zaman = işareti</td></tr>
<tr><td>=TOPLA / =SUM</td><td>Toplar</td></tr>
<tr><td>=ORTALAMA / =AVERAGE</td><td>Ortalama alır</td></tr>
<tr><td>=MİN, =MAK / =MIN, =MAX</td><td>En küçük / en büyük</td></tr>
<tr><td>Filtre</td><td>Gizler, silmez</td></tr>
<tr><td>CC / BCC</td><td>Açık kopya / gizli kopya</td></tr>
<tr><td>Drive / OneDrive</td><td>Bulut depolama + ortak çalışma</td></tr>
</tbody>
</table></div>
`
  },
  {
    module: 'bilisim',
    id: 'bo-07-dijital-kavramlar',
    order: 7,
    title: 'Dijital Dönüşüm ve Güncel Kavramlar',
    html: `
<h2>📖 Konu Anlatımı</h2>

<h3>Bulut Bilişim ve Hizmet Modelleri</h3>
<p><strong>Bulut bilişim</strong>, yazılım ve verilerin kendi cihazın yerine internetteki sunucularda barındırılması ve <strong>ihtiyaç kadar kullanılıp kullandıkça ödenmesidir</strong>. Üç hizmet modeli vardır:</p>
<ul>
  <li><strong>SaaS (Software as a Service):</strong> <strong>hazır yazılımı</strong> internetten kullanırsın; kurulum yok. Örnek: Gmail, Office 365, Google Drive.</li>
  <li><strong>PaaS (Platform as a Service):</strong> geliştiricilere <strong>uygulama geliştirme ve çalıştırma platformu</strong> sunar; sunucuyla uğraşmadan kod yazarsın. Örnek: Heroku, Azure App Service.</li>
  <li><strong>IaaS (Infrastructure as a Service):</strong> <strong>sunucu, ağ ve depolama altyapısını</strong> kiralarsın; üzerine kurulumu sen yaparsın. Örnek: AWS EC2, Azure sanal makineleri.</li>
</ul>
<div class="callout tip"><p><strong>Ezber hilesi — pizza benzetmesi:</strong> IaaS = mutfak kiralarsın, pizzayı sen yaparsın. PaaS = hamur ve fırın hazır, malzemeyi sen koyarsın. SaaS = pizza kapına gelir, sadece yersin.</p></div>

<h3>Yapay Zeka ve Makine Öğrenmesi</h3>
<p><strong>Yapay zeka (AI)</strong>, makinelerin insan zekası gerektiren işleri (anlama, karar verme, görüntü tanıma) yapabilmesini amaçlayan <strong>genel alandır</strong>. <strong>Makine öğrenmesi (ML)</strong> ise yapay zekanın bir <strong>alt dalıdır</strong>: makine, kuralları tek tek programlanmadan <strong>verilerden örüntü öğrenir</strong>. Her ML yapay zekadır ama her yapay zeka ML değildir.</p>

<h3>Büyük Veri ve IoT</h3>
<ul>
  <li><strong>Büyük veri (big data):</strong> geleneksel yöntemlerle işlenemeyecek kadar <strong>büyük, hızlı ve çeşitli</strong> veri yığınları (sosyal medya, sensör ve log verileri gibi).</li>
  <li><strong>IoT (nesnelerin interneti):</strong> akıllı saat, akıllı buzdolabı, sensörlü termostat gibi <strong>gündelik nesnelerin internete bağlanıp</strong> veri alışverişi yapması.</li>
</ul>

<h3>Blockchain</h3>
<p><strong>Blok zinciri</strong>, kayıtların bloklar halinde <strong>zincire eklendiği, dağıtık ve değiştirilmesi çok zor</strong> bir dijital defterdir. Merkezi bir otoriteye (tek sunucu/kurum) ihtiyaç duymaz; kaydın kopyası ağdaki birçok bilgisayarda tutulur. Kripto paraların altyapısıdır ama kullanımı onunla sınırlı değildir.</p>

<h3>E-Devlet, E-İmza ve Dijital Kimlik</h3>
<ul>
  <li><strong>E-devlet:</strong> kamu hizmetlerinin internet üzerinden sunulması (belge sorgulama, başvurular — turkiye.gov.tr).</li>
  <li><strong>E-imza:</strong> ıslak imza ile <strong>aynı hukuki geçerliliğe</strong> sahip elektronik imza; imzalayanın kimliğini ve belgenin değişmediğini kanıtlar.</li>
  <li><strong>Dijital kimlik:</strong> kişinin çevrim içi dünyadaki doğrulanabilir kimlik bilgileri bütünü.</li>
  <li><strong>Veri gizliliği:</strong> kişisel verinin kim tarafından, ne amaçla kullanılacağını kontrol edebilme hakkı.</li>
</ul>

<h3>Açık Kaynak ve Lisanslı Yazılım</h3>
<p><strong>Açık kaynak yazılımın</strong> kaynak kodu herkese açıktır; incelenebilir, değiştirilebilir, çoğunlukla ücretsiz dağıtılır (Linux, LibreOffice). <strong>Lisanslı (kapalı kaynak/ticari) yazılımda</strong> kod gizlidir ve kullanım hakkı lisansla satın alınır (Windows, Microsoft Office). Dikkat: açık kaynak "her zaman bedava" demek değildir; asıl fark <strong>kodun açık olmasıdır</strong>.</p>

<h3>Mobil Uygulamalar</h3>
<p>Akıllı telefon ve tabletlerde çalışan, uygulama mağazalarından (App Store, Google Play) indirilen yazılımlardır. Banka, e-devlet ve eğitim hizmetlerinin mobil uygulamaya taşınması, dijital dönüşümün en görünür örneğidir.</p>

<h2>⚠️ Karıştırılan Kavramlar</h2>

<h3>SaaS / PaaS / IaaS (EZBERLE!)</h3>
<div class="table-wrap"><table>
<thead><tr><th>Model</th><th>Ne sunar?</th><th>Kim kullanır?</th><th>Örnek</th></tr></thead>
<tbody>
<tr><td><strong>SaaS</strong></td><td>Hazır <strong>yazılım</strong> hizmeti</td><td>Son kullanıcı</td><td>Gmail, Office 365</td></tr>
<tr><td><strong>PaaS</strong></td><td>Uygulama geliştirme <strong>platformu</strong></td><td>Yazılım geliştirici</td><td>Heroku, Azure App Service</td></tr>
<tr><td><strong>IaaS</strong></td><td>Sunucu, ağ, depolama <strong>altyapısı</strong></td><td>Sistem yöneticisi</td><td>AWS EC2, sanal makineler</td></tr>
</tbody>
</table></div>

<h3>Yapay Zeka / Makine Öğrenmesi</h3>
<div class="table-wrap"><table>
<thead><tr><th>Kavram</th><th>Kapsam</th><th>Anahtar cümle</th></tr></thead>
<tbody>
<tr><td>Yapay zeka (AI)</td><td>Genel/şemsiye alan</td><td>Makinenin insan gibi düşünmesi</td></tr>
<tr><td>Makine öğrenmesi (ML)</td><td>AI'ın alt dalı</td><td><strong>Veriden öğrenir</strong>, kural ezberlemez</td></tr>
</tbody>
</table></div>

<div class="callout warn"><p><strong>Tuzak:</strong> Hizmet modeli sorularında anahtar kelimeye kilitlen: "<strong>hazır yazılım/uygulama</strong>" görürsen SaaS, "<strong>geliştirme platformu</strong>" görürsen PaaS, "<strong>sunucu/altyapı/sanal makine</strong>" görürsen IaaS. Bir diğer tuzak: "açık kaynak = ücretsiz" değildir; tanımı <strong>kodun açık olmasıdır</strong>. Blockchain de "merkezi bir kurumda saklanan veri tabanı" değildir — tam tersine <strong>dağıtıktır</strong>.</p></div>

<h2>🎯 Sınavda Nasıl Sorulur?</h2>
<ul>
  <li><strong>Tanımdan modele:</strong> "Kullanıcıya internet üzerinden hazır yazılım sunan bulut hizmet modeli hangisidir?" → SaaS.</li>
  <li><strong>"Geliştiricilere altyapıyla uğraşmadan uygulama geliştirme ortamı sunan model"</strong> → PaaS.</li>
  <li><strong>"Gündelik nesnelerin internete bağlanmasını ifade eden kavram"</strong> → IoT; çeldiriciler big data, AI, blockchain.</li>
  <li><strong>"Verilerden öğrenerek performansını artıran sistemler"</strong> → makine öğrenmesi.</li>
  <li><strong>"Aşağıdakilerden hangisi açık kaynak yazılımın özelliği değildir?"</strong> — "kaynak kodu gizlidir" gibi ters ifade aranır.</li>
</ul>

<h2>✍️ Örnek Sorular</h2>

<div class="quiz-q" data-answer="a">
  <p class="q-text"><strong>Soru 1.</strong> Gmail ve Office 365 gibi, internet üzerinden kurulum gerektirmeden kullanılan <strong>hazır yazılım</strong> hizmetleri hangi bulut modeline örnektir?</p>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) SaaS</button>
    <button class="q-opt" data-opt="b">B) PaaS</button>
    <button class="q-opt" data-opt="c">C) IaaS</button>
    <button class="q-opt" data-opt="d">D) VPN</button>
  </div>
  <div class="q-explain"><strong>Cevap: A.</strong> Hazır yazılım hizmeti = SaaS. PaaS geliştirme platformu, IaaS altyapı (sunucu/depolama) sunar; VPN bulut modeli değildir.</div>
</div>

<div class="quiz-q" data-answer="d">
  <p class="q-text"><strong>Soru 2.</strong> Akıllı saat, akıllı buzdolabı ve sensörlü termostat gibi nesnelerin internete bağlanarak veri alışverişi yapmasını ifade eden kavram hangisidir?</p>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) Büyük veri</button>
    <button class="q-opt" data-opt="b">B) Blockchain</button>
    <button class="q-opt" data-opt="c">C) SaaS</button>
    <button class="q-opt" data-opt="d">D) IoT (nesnelerin interneti)</button>
  </div>
  <div class="q-explain"><strong>Cevap: D.</strong> "Nesnelerin internete bağlanması" = IoT. Büyük veri devasa veri yığınlarını, blockchain dağıtık kayıt defterini, SaaS hazır yazılım hizmetini ifade eder.</div>
</div>

<div class="quiz-q" data-answer="b">
  <p class="q-text"><strong>Soru 3.</strong> Geliştiricilerin sunucu ve altyapı yönetimiyle uğraşmadan uygulama <strong>geliştirip çalıştırabildiği</strong> platform sunan bulut hizmet modeli hangisidir?</p>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) IaaS</button>
    <button class="q-opt" data-opt="b">B) PaaS</button>
    <button class="q-opt" data-opt="c">C) SaaS</button>
    <button class="q-opt" data-opt="d">D) IoT</button>
  </div>
  <div class="q-explain"><strong>Cevap: B.</strong> "Geliştirme platformu" anahtar kelimesi PaaS'ı işaret eder. IaaS yalnızca ham altyapı verir (kurulum sende), SaaS son kullanıcıya hazır uygulama sunar.</div>
</div>

<div class="quiz-q" data-answer="c">
  <p class="q-text"><strong>Soru 4.</strong> Islak imza ile aynı hukuki geçerliliğe sahip olan ve belgeyi imzalayan kişinin kimliğini doğrulayan teknoloji hangisidir?</p>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) Dijital kimlik</button>
    <button class="q-opt" data-opt="b">B) E-devlet</button>
    <button class="q-opt" data-opt="c">C) E-imza</button>
    <button class="q-opt" data-opt="d">D) Blockchain</button>
  </div>
  <div class="q-explain"><strong>Cevap: C.</strong> "Islak imzayla aynı hukuki geçerlilik" ifadesi e-imzanın tanımıdır. Dijital kimlik daha genel bir kavramdır; e-devlet hizmet platformudur.</div>
</div>

<div class="quiz-q" data-answer="b">
  <p class="q-text"><strong>Soru 5. (Tuzak)</strong> Aşağıdaki ifadelerden hangisi <strong>doğrudur</strong>?</p>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) Makine öğrenmesi, yapay zekayı kapsayan daha genel bir alandır.</button>
    <button class="q-opt" data-opt="b">B) Blockchain, kayıtların dağıtık tutulduğu ve değiştirilmesi çok zor olan bir yapıdır.</button>
    <button class="q-opt" data-opt="c">C) Açık kaynak yazılımın kaynak kodu gizlidir, yalnızca üretici görebilir.</button>
    <button class="q-opt" data-opt="d">D) IaaS, son kullanıcıya hazır yazılım sunan hizmet modelidir.</button>
  </div>
  <div class="q-explain"><strong>Cevap: B.</strong> Blockchain dağıtık ve değiştirilmesi çok zor bir kayıt defteridir. A ters (ML, AI'ın <strong>alt dalıdır</strong>), C ters (açık kaynakta kod <strong>herkese açıktır</strong>), D ters (hazır yazılım <strong>SaaS</strong>'tır).</div>
</div>

<h2>🔁 Mini Tekrar</h2>
<div class="table-wrap"><table>
<thead><tr><th>Kavram</th><th>Anahtar kelime</th></tr></thead>
<tbody>
<tr><td>SaaS</td><td>Hazır yazılım (Gmail, Office 365)</td></tr>
<tr><td>PaaS</td><td>Geliştirme platformu</td></tr>
<tr><td>IaaS</td><td>Sunucu/ağ/depolama altyapısı</td></tr>
<tr><td>Yapay zeka</td><td>Şemsiye alan — insan gibi düşünme</td></tr>
<tr><td>Makine öğrenmesi</td><td>AI'ın alt dalı — veriden öğrenir</td></tr>
<tr><td>Büyük veri</td><td>Devasa, hızlı, çeşitli veri</td></tr>
<tr><td>IoT</td><td>Nesneler internete bağlanır</td></tr>
<tr><td>Blockchain</td><td>Dağıtık, değiştirilemez kayıt zinciri</td></tr>
<tr><td>E-imza</td><td>Islak imzayla eş hukuki geçerlilik</td></tr>
<tr><td>E-devlet</td><td>Kamu hizmeti internette</td></tr>
<tr><td>Açık kaynak</td><td>Kod herkese açık (Linux)</td></tr>
<tr><td>Lisanslı yazılım</td><td>Kod kapalı, kullanım hakkı satın alınır</td></tr>
</tbody>
</table></div>
`
  }
]);
