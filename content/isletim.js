window.SINAV.register([
  {
    module: 'isletim',
    id: 'os-01-nedir',
    order: 1,
    title: 'İşletim Sistemi Nedir?',
    html: `
<h2>📖 Konu Anlatımı</h2>
<h3>Tanım: Donanım ile Senin Aranadaki Köprü</h3>
<p><strong>İşletim sistemi (Operating System, OS)</strong>, bilgisayar donanımı ile kullanıcı (ve uygulamalar) arasında aracılık yapan temel sistem yazılımıdır. Sen bir dosyayı çift tıkladığında diskten okuma, RAM'e yükleme, ekrana çizme gibi tüm alt seviye işleri işletim sistemi yönetir.</p>
<p>Kısaca: <strong>donanımı sen kullanılabilir hale getiren yazılım katmanıdır.</strong> İşletim sistemi olmadan bilgisayar sadece elektronik parçalardan ibarettir.</p>

<h3>Katman Mantığı</h3>
<pre><code class="lang-text">KULLANICI
   |
UYGULAMALAR (tarayıcı, oyun, ofis...)
   |
İŞLETİM SİSTEMİ  &lt;-- aracı katman
   |
DONANIM (CPU, RAM, disk, ekran...)</code></pre>
<div class="callout info"><p><strong>Bilgi:</strong> Uygulamalar donanımla doğrudan konuşmaz; her isteği (dosya aç, bellek ver, yazıcıya gönder) işletim sistemine iletir. Bu yüzden işletim sistemine "kaynak yöneticisi" de denir.</p></div>

<h3>İşletim Sisteminin Ana Sorumlulukları</h3>
<ul>
  <li><strong>Kaynak yönetimi:</strong> CPU, RAM, disk gibi sınırlı kaynakları programlar arasında adil paylaştırır.</li>
  <li><strong>Süreç (process) yönetimi:</strong> Çalışan programları başlatır, sıralar, sonlandırır.</li>
  <li><strong>Bellek yönetimi:</strong> Hangi programın RAM'in neresini kullanacağını belirler.</li>
  <li><strong>Dosya yönetimi:</strong> Dosya ve klasörlerin oluşturulması, silinmesi, düzenlenmesini sağlar.</li>
  <li><strong>Aygıt yönetimi:</strong> Klavye, yazıcı, ekran gibi donanımları sürücüler (driver) aracılığıyla yönetir.</li>
  <li><strong>Güvenlik yönetimi:</strong> Kullanıcı hesapları, parolalar ve erişim yetkilerini denetler.</li>
</ul>

<h3>Örnek İşletim Sistemleri</h3>
<div class="table-wrap"><table>
<thead><tr><th>İşletim Sistemi</th><th>Tipik Kullanım Alanı</th></tr></thead>
<tbody>
<tr><td><strong>Windows</strong></td><td>Masaüstü ve dizüstü bilgisayarlarda en yaygın sistem</td></tr>
<tr><td><strong>Linux</strong></td><td>Sunucular, geliştirici makineleri, gömülü sistemler (açık kaynak)</td></tr>
<tr><td><strong>macOS</strong></td><td>Apple Mac bilgisayarları</td></tr>
<tr><td><strong>Android</strong></td><td>Mobil cihazlar (Linux çekirdeği tabanlı)</td></tr>
<tr><td><strong>iOS</strong></td><td>iPhone ve iPad</td></tr>
<tr><td><strong>Unix</strong></td><td>Linux ve macOS'in atası sayılan klasik sistem ailesi</td></tr>
</tbody>
</table></div>

<h2>⚠️ Karıştırılan Kavramlar</h2>
<div class="table-wrap"><table>
<thead><tr><th>Kavram</th><th>Nedir?</th><th>Neyle Karışır?</th></tr></thead>
<tbody>
<tr><td><strong>İşletim sistemi</strong></td><td>Donanımı yöneten sistem yazılımı (Windows, Linux)</td><td>Uygulama yazılımıyla karışır</td></tr>
<tr><td><strong>Uygulama yazılımı</strong></td><td>Belirli bir işi yapan program (Word, Chrome, oyunlar)</td><td>İşletim sistemi sanılır</td></tr>
<tr><td><strong>BIOS/UEFI</strong></td><td>Anakart üzerindeki başlangıç yazılımı (firmware)</td><td>İşletim sistemi sanılır; OS'ten ÖNCE çalışır</td></tr>
<tr><td><strong>Sürücü (driver)</strong></td><td>Bir donanımın OS ile konuşmasını sağlayan küçük yazılım</td><td>Uygulama sanılır; aslında OS'in yardımcısıdır</td></tr>
</tbody>
</table></div>
<div class="callout warn"><p><strong>Tuzak:</strong> "Microsoft Office bir işletim sistemidir" gibi şıklar klasik çeldiricidir. Office, Chrome, Photoshop = <strong>uygulama</strong>; Windows, Linux, Android = <strong>işletim sistemi</strong>. Ayrıca Android'in bir işletim sistemi olduğunu unutma — "sadece telefon arayüzü" değildir.</p></div>

<h2>🎯 Sınavda Nasıl Sorulur?</h2>
<ul>
  <li>"Aşağıdakilerden hangisi bir <strong>işletim sistemi değildir</strong>?" (şıklara Word/Chrome gibi uygulama karıştırılır)</li>
  <li>"İşletim sisteminin temel görevi aşağıdakilerden hangisidir?" (donanım-kullanıcı aracılığı / kaynak yönetimi beklenir)</li>
  <li>"Kullanıcı ile donanım arasında aracılık yapan yazılım katmanı hangisidir?"</li>
  <li>"Aşağıdaki eşleştirmelerden hangisi yanlıştır?" (OS - kullanım alanı eşleştirmesi: iOS-iPhone, Android-mobil vb.)</li>
  <li>Açık kaynak / kapalı kaynak ayrımı: "Hangisi açık kaynaklı bir işletim sistemidir?" (cevap genelde Linux)</li>
</ul>

<h2>✍️ Örnek Sorular</h2>
<div class="quiz-q" data-answer="c">
  <p class="q-text"><strong>Soru 1.</strong> Kullanıcı ile donanım arasında aracılık yapan ve sistem kaynaklarını yöneten yazılım aşağıdakilerden hangisidir?</p>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) Uygulama yazılımı</button>
    <button class="q-opt" data-opt="b">B) Derleyici</button>
    <button class="q-opt" data-opt="c">C) İşletim sistemi</button>
    <button class="q-opt" data-opt="d">D) Ofis yazılımı</button>
  </div>
  <div class="q-explain"><strong>Cevap: C.</strong> Donanım-kullanıcı aracılığı ve kaynak yönetimi işletim sisteminin tanımıdır. Uygulama ve ofis yazılımları belirli işler yapar, donanımı yönetmez; derleyici ise kodu makine diline çevirir.</div>
</div>

<div class="quiz-q" data-answer="a">
  <p class="q-text"><strong>Soru 2.</strong> Aşağıdakilerden hangisi bir işletim sistemi <strong>değildir</strong>?</p>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) Microsoft Word</button>
    <button class="q-opt" data-opt="b">B) Linux</button>
    <button class="q-opt" data-opt="c">C) macOS</button>
    <button class="q-opt" data-opt="d">D) Android</button>
  </div>
  <div class="q-explain"><strong>Cevap: A.</strong> Word bir uygulama yazılımıdır (kelime işlemci). Linux, macOS ve Android tam birer işletim sistemidir — Android'in mobil olması onu OS olmaktan çıkarmaz.</div>
</div>

<div class="quiz-q" data-answer="b">
  <p class="q-text"><strong>Soru 3.</strong> Bir program yazıcıya çıktı göndermek istediğinde donanıma erişimi hangi bileşen üzerinden gerçekleşir?</p>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) Program doğrudan yazıcının elektroniğine komut gönderir</button>
    <button class="q-opt" data-opt="b">B) İşletim sistemi ve aygıt sürücüsü aracılığıyla erişir</button>
    <button class="q-opt" data-opt="c">C) BIOS her yazdırma isteğini tek tek yönetir</button>
    <button class="q-opt" data-opt="d">D) RAM, isteği doğrudan yazıcıya iletir</button>
  </div>
  <div class="q-explain"><strong>Cevap: B.</strong> Uygulamalar donanımla doğrudan konuşmaz; istek OS'e gider, OS ilgili sürücü (driver) üzerinden donanımı yönetir. BIOS yalnızca açılışta görev alır; RAM bir depolama/çalışma alanıdır, iletişim yönetmez.</div>
</div>

<div class="quiz-q" data-answer="d">
  <p class="q-text"><strong>Soru 4.</strong> Aşağıdaki işletim sistemi - kullanım alanı eşleştirmelerinden hangisi <strong>yanlıştır</strong>?</p>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) iOS - iPhone</button>
    <button class="q-opt" data-opt="b">B) Linux - sunucular</button>
    <button class="q-opt" data-opt="c">C) Windows - masaüstü bilgisayarlar</button>
    <button class="q-opt" data-opt="d">D) Unix - yalnızca mobil cihazlar</button>
  </div>
  <div class="q-explain"><strong>Cevap: D.</strong> Unix, sunucu ve iş istasyonlarında kullanılan klasik bir sistem ailesidir; "yalnızca mobil" tanımı yanlıştır. Diğer üç eşleştirme doğrudur.</div>
</div>

<div class="quiz-q" data-answer="a">
  <p class="q-text"><strong>Soru 5.</strong> (Tuzak) "Bilgisayar açıldığında ilk çalışan yazılım işletim sistemidir." Bu ifadeyle ilgili aşağıdakilerden hangisi doğrudur?</p>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) Yanlıştır; işletim sisteminden önce BIOS/UEFI çalışır</button>
    <button class="q-opt" data-opt="b">B) Doğrudur; ilk çalışan yazılım her zaman işletim sistemidir</button>
    <button class="q-opt" data-opt="c">C) Yanlıştır; ilk çalışan yazılım antivirüstür</button>
    <button class="q-opt" data-opt="d">D) Doğrudur; BIOS bir donanım olduğu için yazılım sayılmaz</button>
  </div>
  <div class="q-explain"><strong>Cevap: A.</strong> Güç verildiğinde önce anakarttaki BIOS/UEFI (firmware) çalışır, donanımı kontrol eder ve ardından işletim sistemini yükletir. BIOS bir yazılımdır (çip üzerinde saklanır), donanım değildir.</div>
</div>

<h2>🔁 Mini Tekrar</h2>
<div class="table-wrap"><table>
<thead><tr><th>Soru</th><th>Cevap</th></tr></thead>
<tbody>
<tr><td>İşletim sistemi nedir?</td><td>Kullanıcı ile donanım arasındaki aracı sistem yazılımı</td></tr>
<tr><td>Ana görevleri?</td><td>Süreç, bellek, dosya, aygıt ve güvenlik yönetimi + kaynak paylaşımı</td></tr>
<tr><td>OS örnekleri?</td><td>Windows, Linux, macOS, Android, iOS, Unix</td></tr>
<tr><td>OS olmayan klasikler?</td><td>Word, Chrome, Photoshop (bunlar uygulamadır)</td></tr>
<tr><td>OS'ten önce ne çalışır?</td><td>BIOS/UEFI (firmware)</td></tr>
<tr><td>Açık kaynak OS?</td><td>Linux</td></tr>
</tbody>
</table></div>
`
  },
  {
    module: 'isletim',
    id: 'os-02-gorevler',
    order: 2,
    title: 'İşletim Sisteminin Temel Görevleri',
    html: `
<h2>📖 Konu Anlatımı</h2>
<h3>Görevlerin Genel Haritası</h3>
<p>İşletim sistemi tek bir iş yapmaz; birbirine bağlı bir görev paketi yürütür. Sınavda bu görevlerin <strong>İngilizce adları</strong> da karşına çıkabilir, ikisini birlikte öğren.</p>
<div class="table-wrap"><table>
<thead><tr><th>Görev (TR)</th><th>İngilizcesi</th><th>Ne yapar?</th></tr></thead>
<tbody>
<tr><td>İşlem (süreç) yönetimi</td><td><strong>Process management</strong></td><td>Çalışan programları başlatır, sıralar, durdurur; CPU zamanını paylaştırır</td></tr>
<tr><td>Bellek yönetimi</td><td><strong>Memory management</strong></td><td>RAM kullanımını düzenler; programlara bellek tahsis eder ve geri alır</td></tr>
<tr><td>Dosya sistemi yönetimi</td><td><strong>File system management</strong></td><td>Dosya/klasör oluşturma, silme, okuma, yazma işlemlerini kontrol eder</td></tr>
<tr><td>Aygıt yönetimi</td><td><strong>Device management</strong></td><td>Donanım sürücülerini (driver) yönetir; giriş/çıkış cihazlarını koordine eder</td></tr>
<tr><td>Güvenlik yönetimi</td><td><strong>Security management</strong></td><td>Kullanıcı yetkilerini, parolaları ve kaynaklara erişimi kontrol eder</td></tr>
<tr><td>Kullanıcı arayüzü</td><td><strong>User interface</strong></td><td>Grafik arayüz (GUI) veya komut satırı (CLI) ile etkileşim sağlar</td></tr>
<tr><td>Ağ yönetimi</td><td><strong>Network management</strong></td><td>Ağ bağlantılarını ve veri iletişimini yönetir</td></tr>
<tr><td>Hata yönetimi</td><td><strong>Error handling</strong></td><td>Donanım/yazılım hatalarını algılar, raporlar, sistemin çökmesini önlemeye çalışır</td></tr>
<tr><td>Kaynak tahsisi</td><td><strong>Resource allocation</strong></td><td>CPU, RAM, disk gibi kaynakları programlar arasında paylaştırır</td></tr>
</tbody>
</table></div>

<h3>Görev → Tek Cümlelik Mantık</h3>
<ul>
  <li><strong>İşlem yönetimi:</strong> "Şu an hangi program çalışacak?" sorusunun cevabı. CPU aynı anda sınırlı iş yapabilir; OS sırayı yönetir.</li>
  <li><strong>Bellek yönetimi:</strong> "Bu program RAM'in neresini kullanacak?" — programların birbirinin alanına girmesini engeller.</li>
  <li><strong>Dosya yönetimi:</strong> "Veri diskte nasıl saklanacak ve bulunacak?" — dizin yapısı, adlandırma, erişim.</li>
  <li><strong>Aygıt yönetimi:</strong> "Klavye, yazıcı, ekranla nasıl konuşulacak?" — sürücüler üzerinden.</li>
  <li><strong>Güvenlik:</strong> "Bu kullanıcı bu dosyaya dokunabilir mi?" — kimlik doğrulama ve yetkilendirme.</li>
</ul>

<h3>GUI ve CLI</h3>
<p>Kullanıcı arayüzü iki ana biçimde olur: <strong>GUI</strong> (Graphical User Interface) pencere, simge ve fareyle çalışır; <strong>CLI</strong> (Command Line Interface) yazılı komutlarla çalışır. İkisi de işletim sisteminin sunduğu arayüzlerdir — CLI "eski/işlevsiz" değildir, sunucularda hâlâ standarttır.</p>
<div class="callout tip"><p><strong>Ezber hilesi:</strong> Görevleri "PRO-BEL-DOS-AY-GÜV" diye kodla: <strong>PRO</strong>cess, <strong>BEL</strong>lek, <strong>DOS</strong>ya, <strong>AY</strong>gıt, <strong>GÜV</strong>enlik. Sınavda "hangisi OS görevi değildir?" sorusunda bu beşliyi hatırla; listede olmayan (ör. "video düzenlemek") cevaptır.</p></div>

<h2>⚠️ Karıştırılan Kavramlar</h2>
<div class="table-wrap"><table>
<thead><tr><th>Karışan İkili</th><th>Farkı</th></tr></thead>
<tbody>
<tr><td><strong>Bellek yönetimi vs Dosya yönetimi</strong></td><td>Bellek = RAM (geçici, çalışma alanı); Dosya = disk (kalıcı depolama). "RAM'i düzenler" diyorsa bellek, "dosya/klasör" diyorsa dosya yönetimidir.</td></tr>
<tr><td><strong>İşlem yönetimi vs Aygıt yönetimi</strong></td><td>İşlem = çalışan programlar ve CPU sırası; Aygıt = fiziksel donanımlar ve sürücüleri.</td></tr>
<tr><td><strong>Güvenlik yönetimi vs Antivirüs</strong></td><td>OS'in güvenlik görevi yetki/erişim kontrolüdür. Antivirüs ayrı bir uygulamadır, OS görevi sayılmaz.</td></tr>
<tr><td><strong>Kaynak tahsisi vs Hata yönetimi</strong></td><td>Tahsis = kaynakları paylaştırmak; hata yönetimi = sorun çıktığında algılayıp müdahale etmek.</td></tr>
</tbody>
</table></div>
<div class="callout warn"><p><strong>Tuzak:</strong> "Programları derlemek", "web sitesi tasarlamak", "virüs taraması yapmak" gibi işler işletim sisteminin temel görevi DEĞİLDİR. Bunlar uygulama yazılımlarının işidir. "Hangisi OS görevi değildir?" sorularında bu tarz şıkları ara.</p></div>

<h2>🎯 Sınavda Nasıl Sorulur?</h2>
<ul>
  <li>"Aşağıdakilerden hangisi işletim sisteminin temel görevlerinden <strong>değildir</strong>?" (en sık kalıp)</li>
  <li>"RAM kullanımını düzenleyen işletim sistemi görevi hangisidir?" (cevap: bellek yönetimi / memory management)</li>
  <li>İngilizce terim eşleştirme: "Process management hangi görevi ifade eder?"</li>
  <li>"Donanım sürücülerini yöneten görev hangisidir?" (cevap: aygıt yönetimi / device management)</li>
  <li>Tanımdan kavrama: bir görev tanımı verilir, adı sorulur.</li>
</ul>

<h2>✍️ Örnek Sorular</h2>
<div class="quiz-q" data-answer="b">
  <p class="q-text"><strong>Soru 1.</strong> RAM kullanımını düzenlemek ve programlara bellek alanı tahsis etmek hangi işletim sistemi görevidir?</p>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) Dosya yönetimi</button>
    <button class="q-opt" data-opt="b">B) Bellek yönetimi</button>
    <button class="q-opt" data-opt="c">C) Aygıt yönetimi</button>
    <button class="q-opt" data-opt="d">D) Ağ yönetimi</button>
  </div>
  <div class="q-explain"><strong>Cevap: B.</strong> RAM = bellek; RAM'i düzenleyen görev bellek yönetimidir (memory management). Dosya yönetimi diskteki kalıcı verilerle, aygıt yönetimi donanımlarla ilgilenir.</div>
</div>

<div class="quiz-q" data-answer="d">
  <p class="q-text"><strong>Soru 2.</strong> Aşağıdakilerden hangisi işletim sisteminin temel görevlerinden <strong>değildir</strong>?</p>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) İşlem (process) yönetimi</button>
    <button class="q-opt" data-opt="b">B) Güvenlik yönetimi</button>
    <button class="q-opt" data-opt="c">C) Aygıt yönetimi</button>
    <button class="q-opt" data-opt="d">D) Video düzenleme</button>
  </div>
  <div class="q-explain"><strong>Cevap: D.</strong> Video düzenleme bir uygulama yazılımının işidir. İşlem, güvenlik ve aygıt yönetimi işletim sisteminin temel görevleridir.</div>
</div>

<div class="quiz-q" data-answer="a">
  <p class="q-text"><strong>Soru 3.</strong> "Process management" kavramı aşağıdakilerden hangisini ifade eder?</p>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) Çalışan programların başlatılması, sıralanması ve sonlandırılması</button>
    <button class="q-opt" data-opt="b">B) Dosyaların klasörler halinde düzenlenmesi</button>
    <button class="q-opt" data-opt="c">C) Donanım sürücülerinin güncellenmesi</button>
    <button class="q-opt" data-opt="d">D) Kullanıcı parolalarının saklanması</button>
  </div>
  <div class="q-explain"><strong>Cevap: A.</strong> Process = çalışan program; process management bu programların yaşam döngüsünü ve CPU paylaşımını yönetir. B dosya yönetimi, C aygıt yönetimi, D güvenlik yönetimi kapsamındadır.</div>
</div>

<div class="quiz-q" data-answer="c">
  <p class="q-text"><strong>Soru 4.</strong> Bir kullanıcının belirli bir klasöre erişip erişemeyeceğini denetleyen işletim sistemi görevi hangisidir?</p>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) Hata yönetimi</button>
    <button class="q-opt" data-opt="b">B) Kaynak tahsisi</button>
    <button class="q-opt" data-opt="c">C) Güvenlik yönetimi</button>
    <button class="q-opt" data-opt="d">D) İşlem yönetimi</button>
  </div>
  <div class="q-explain"><strong>Cevap: C.</strong> Erişim ve yetki denetimi güvenlik yönetiminin işidir. Hata yönetimi sorunları algılar, kaynak tahsisi CPU/RAM paylaştırır, işlem yönetimi çalışan programlarla ilgilenir.</div>
</div>

<div class="quiz-q" data-answer="d">
  <p class="q-text"><strong>Soru 5.</strong> (Tuzak) Aşağıdaki ifadelerden hangisi <strong>yanlıştır</strong>?</p>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) Komut satırı (CLI) da bir kullanıcı arayüzü türüdür</button>
    <button class="q-opt" data-opt="b">B) Aygıt yönetimi, donanım sürücüleri aracılığıyla yapılır</button>
    <button class="q-opt" data-opt="c">C) Hata yönetimi, sistem hatalarını algılayıp raporlamayı kapsar</button>
    <button class="q-opt" data-opt="d">D) Virüs taraması işletim sisteminin temel görevlerinden biridir</button>
  </div>
  <div class="q-explain"><strong>Cevap: D.</strong> Virüs taraması antivirüs uygulamalarının işidir; OS'in güvenlik görevi yetki ve erişim kontrolüdür. CLI gerçekten bir arayüz türüdür (sadece GUI değil) — A şıkkı doğru olduğu için yanlış cevap olamaz.</div>
</div>

<h2>🔁 Mini Tekrar</h2>
<div class="table-wrap"><table>
<thead><tr><th>Görev</th><th>Tek cümle</th></tr></thead>
<tbody>
<tr><td>Process management</td><td>Çalışan programları ve CPU sırasını yönetir</td></tr>
<tr><td>Memory management</td><td>RAM kullanımını düzenler</td></tr>
<tr><td>File system management</td><td>Dosya/klasör işlemlerini kontrol eder</td></tr>
<tr><td>Device management</td><td>Donanımları sürücülerle yönetir</td></tr>
<tr><td>Security management</td><td>Kullanıcı yetkilerini ve erişimi denetler</td></tr>
<tr><td>User interface</td><td>GUI veya CLI ile etkileşim sunar</td></tr>
<tr><td>Network management</td><td>Ağ bağlantılarını yönetir</td></tr>
<tr><td>Error handling</td><td>Hataları algılar ve raporlar</td></tr>
<tr><td>Resource allocation</td><td>CPU/RAM/disk kaynaklarını paylaştırır</td></tr>
</tbody>
</table></div>
`
  },
  {
    module: 'isletim',
    id: 'os-03-process-thread',
    order: 3,
    title: 'Process, Program ve Thread',
    html: `
<h2>📖 Konu Anlatımı</h2>
<h3>Üç Kavram, Tek Zincir</h3>
<p>Bu konu sınavın en kritik konularından biri. Üç kavramı net ayır:</p>
<ul>
  <li><strong>Program:</strong> Diskte duran, çalıştırılabilir dosya. Pasif bir varlıktır — hiçbir şey yapmaz, sadece durur. (Ör. oyun.exe dosyası)</li>
  <li><strong>Process (süreç/işlem):</strong> Programın <strong>çalışan hali</strong>. Program belleğe yüklenip CPU'da yürütülmeye başlayınca process olur. Aktiftir; kendi bellek alanı vardır.</li>
  <li><strong>Thread (iş parçacığı):</strong> Process içindeki <strong>daha küçük çalışma birimi</strong>. Bir process en az bir thread içerir; birden fazla thread aynı process'in belleğini paylaşarak paralel iş yapar.</li>
</ul>
<pre><code class="lang-text">PROGRAM (diskte, pasif)
   --calistirilinca--&gt;
PROCESS (bellekte, aktif, kendi bellek alani var)
   icinde:
   THREAD 1 (or. arayuzu cizer)
   THREAD 2 (or. dosya indirir)
   THREAD 3 (or. muzik calar)</code></pre>
<div class="callout tip"><p><strong>Ezber hilesi:</strong> Program = tarif (kağıtta durur), Process = yemeğin pişirilmesi (eylem), Thread = aynı mutfakta aynı anda çalışan eller. Aynı tariften (program) aynı anda birden fazla yemek (process) pişirebilirsin — yani bir programdan birden çok process açılabilir.</p></div>

<h3>Process - Program Farkı</h3>
<p>Program disktedir ve pasiftir; process bellektedir ve aktiftir. Aynı programı iki kez açarsan <strong>iki ayrı process</strong> oluşur (ör. iki Chrome penceresi gibi). Her process'in kendi bellek alanı, kendi kimliği (PID) vardır.</p>

<h3>Process - Thread Farkı</h3>
<p>Process'ler birbirinden <strong>izoledir</strong>: her birinin ayrı bellek alanı vardır, biri çökerse diğeri etkilenmez. Thread'ler ise <strong>aynı process'in belleğini paylaşır</strong>: oluşturması ve aralarında geçiş yapması daha ucuzdur, ama bir thread çökerse tüm process'i düşürebilir.</p>

<h3>Çoklu Görev Kavramları</h3>
<ul>
  <li><strong>Multitasking (çoklu görev):</strong> Tek CPU'nun birden çok process arasında çok hızlı geçiş yaparak hepsi "aynı anda çalışıyor" hissi vermesi.</li>
  <li><strong>Multiprocessing (çoklu işlemci):</strong> Birden fazla CPU/çekirdeğin gerçekten aynı anda farklı işler yürütmesi.</li>
  <li><strong>Multithreading (çoklu iş parçacığı):</strong> Tek bir process'in içinde birden fazla thread'in çalışması.</li>
  <li><strong>Context switch (bağlam değiştirme):</strong> CPU'nun bir process/thread'den diğerine geçerken mevcut durumu (yazmaçlar, sayaç vb.) kaydedip diğerininkini yüklemesi. Çoklu görevin perde arkasındaki mekanizmadır ve küçük bir zaman maliyeti vardır.</li>
</ul>
<div class="callout info"><p><strong>Bilgi:</strong> Multitasking "aynı anda çalışıyormuş gibi", multiprocessing "gerçekten aynı anda". Tek çekirdekli bir CPU'da paralellik yanılsaması context switch sayesinde oluşur.</p></div>

<h2>⚠️ Karıştırılan Kavramlar</h2>
<div class="table-wrap"><table>
<thead><tr><th>Özellik</th><th>Program</th><th>Process</th><th>Thread</th></tr></thead>
<tbody>
<tr><td>Nerede?</td><td>Diskte</td><td>Bellekte (RAM)</td><td>Process'in içinde</td></tr>
<tr><td>Durumu</td><td>Pasif (durağan dosya)</td><td>Aktif (çalışıyor)</td><td>Aktif (çalışıyor)</td></tr>
<tr><td>Bellek</td><td>Bellek kullanmaz</td><td>Kendi izole bellek alanı</td><td>Process'in belleğini paylaşır</td></tr>
<tr><td>Çökerse?</td><td>-</td><td>Diğer process'ler etkilenmez</td><td>Tüm process'i düşürebilir</td></tr>
<tr><td>Örnek</td><td>chrome.exe dosyası</td><td>Açık Chrome penceresi</td><td>Chrome'daki bir sekmenin indirme işi</td></tr>
</tbody>
</table></div>
<div class="table-wrap"><table>
<thead><tr><th>Kavram</th><th>Kilit kelime</th></tr></thead>
<tbody>
<tr><td>Multitasking</td><td>Hızlı geçişle "aynı anda gibi" (tek CPU yeterli)</td></tr>
<tr><td>Multiprocessing</td><td>Birden çok CPU/çekirdek, GERÇEK eşzamanlılık</td></tr>
<tr><td>Multithreading</td><td>TEK process içinde çok thread</td></tr>
<tr><td>Context switch</td><td>Process/thread arası geçişte durum kaydetme-yükleme</td></tr>
</tbody>
</table></div>
<div class="callout warn"><p><strong>Tuzak:</strong> "Process, programın diskte saklanan halidir" ifadesi terstir — diskte duran PROGRAM'dır, process çalışan haldir. Bir diğer klasik tuzak: "Thread'lerin her birinin ayrı bellek alanı vardır" — yanlış; ayrı bellek alanı PROCESS'lere aittir, thread'ler belleği paylaşır.</p></div>

<h2>🎯 Sınavda Nasıl Sorulur?</h2>
<ul>
  <li>"Programın çalışan haline ne ad verilir?" (cevap: process)</li>
  <li>"Process ile thread arasındaki temel fark nedir?" (bellek paylaşımı/izolasyon beklenir)</li>
  <li>"Aşağıdakilerden hangisi yanlıştır?" — program/process/thread tanımlarından biri ters çevrilir</li>
  <li>"CPU'nun bir işlemden diğerine geçerken durumu kaydetmesine ne denir?" (cevap: context switch)</li>
  <li>Multitasking - multiprocessing - multithreading tanım eşleştirmesi</li>
</ul>

<h2>✍️ Örnek Sorular</h2>
<div class="quiz-q" data-answer="a">
  <p class="q-text"><strong>Soru 1.</strong> Diskte duran bir programın belleğe yüklenip çalışmaya başlamış haline ne ad verilir?</p>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) Process</button>
    <button class="q-opt" data-opt="b">B) Program</button>
    <button class="q-opt" data-opt="c">C) Driver</button>
    <button class="q-opt" data-opt="d">D) Kernel</button>
  </div>
  <div class="q-explain"><strong>Cevap: A.</strong> Çalışan program = process. Program diskte duran pasif dosyadır; driver donanım yöneten yazılımdır; kernel işletim sisteminin çekirdeğidir.</div>
</div>

<div class="quiz-q" data-answer="c">
  <p class="q-text"><strong>Soru 2.</strong> Bir process içinde yer alan ve process'in bellek alanını paylaşan daha küçük çalışma birimine ne denir?</p>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) Segment</button>
    <button class="q-opt" data-opt="b">B) Modül</button>
    <button class="q-opt" data-opt="c">C) Thread</button>
    <button class="q-opt" data-opt="d">D) Partition</button>
  </div>
  <div class="q-explain"><strong>Cevap: C.</strong> Thread, process içindeki çalışma birimidir ve process'in belleğini paylaşır. Segment ve partition bellek/disk bölümleme terimleridir, modül genel bir yazılım parçası kavramıdır.</div>
</div>

<div class="quiz-q" data-answer="d">
  <p class="q-text"><strong>Soru 3.</strong> Tek CPU'lu bir bilgisayarda birden çok programın "aynı anda çalışıyormuş gibi" görünmesi hangi mekanizmayla sağlanır?</p>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) Her programa ayrı bir fiziksel CPU verilir</button>
    <button class="q-opt" data-opt="b">B) Programlar diskte sırayla bekletilir</button>
    <button class="q-opt" data-opt="c">C) RAM kapasitesi otomatik artırılır</button>
    <button class="q-opt" data-opt="d">D) CPU, process'ler arasında çok hızlı geçiş (context switch) yapar</button>
  </div>
  <div class="q-explain"><strong>Cevap: D.</strong> Multitasking, CPU'nun process'ler arasında hızlı context switch yapmasıyla sağlanır. Ayrı fiziksel CPU senaryosu multiprocessing olurdu; soruda tek CPU dendiği için A yanlıştır.</div>
</div>

<div class="quiz-q" data-answer="b">
  <p class="q-text"><strong>Soru 4.</strong> Aşağıdakilerden hangisi process ile thread arasındaki farkı <strong>doğru</strong> ifade eder?</p>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) Thread'lerin her biri ayrı, izole bellek alanına sahiptir</button>
    <button class="q-opt" data-opt="b">B) Process'ler izole bellek kullanır; thread'ler aynı process'in belleğini paylaşır</button>
    <button class="q-opt" data-opt="c">C) Process, thread'in içinde çalışan küçük birimdir</button>
    <button class="q-opt" data-opt="d">D) Thread'ler yalnızca diskte saklanır</button>
  </div>
  <div class="q-explain"><strong>Cevap: B.</strong> İzolasyon process'lere aittir; thread'ler belleği paylaşır. A bu kuralın tersidir; C içerme ilişkisini ters çevirmiştir (thread process'in içindedir); D programın tanımıyla karıştırmadır.</div>
</div>

<div class="quiz-q" data-answer="c">
  <p class="q-text"><strong>Soru 5.</strong> (Tuzak) "Multiprocessing" ile "multitasking" hakkında hangisi doğrudur?</p>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) İkisi de aynı şeydir, sadece adları farklıdır</button>
    <button class="q-opt" data-opt="b">B) Multitasking için en az iki fiziksel CPU şarttır</button>
    <button class="q-opt" data-opt="c">C) Multiprocessing'te birden çok CPU/çekirdek gerçekten aynı anda çalışır; multitasking tek CPU'da hızlı geçişle de sağlanabilir</button>
    <button class="q-opt" data-opt="d">D) Multiprocessing, tek process içindeki thread sayısını artırma tekniğidir</button>
  </div>
  <div class="q-explain"><strong>Cevap: C.</strong> Multiprocessing = gerçek paralellik (çok çekirdek), multitasking = zaman paylaşımıyla görünür paralellik (tek CPU yeter). B multitasking'i multiprocessing'le karıştırır; D multithreading'in tanımıdır.</div>
</div>

<h2>🔁 Mini Tekrar</h2>
<div class="table-wrap"><table>
<thead><tr><th>Kavram</th><th>Kısa tanım</th></tr></thead>
<tbody>
<tr><td>Program</td><td>Diskte duran çalıştırılabilir dosya (pasif)</td></tr>
<tr><td>Process</td><td>Programın çalışan hali (aktif, izole bellek)</td></tr>
<tr><td>Thread</td><td>Process içi küçük çalışma birimi (belleği paylaşır)</td></tr>
<tr><td>Multitasking</td><td>Hızlı geçişle çoklu görev hissi (tek CPU yeter)</td></tr>
<tr><td>Multiprocessing</td><td>Çok CPU/çekirdekle gerçek eşzamanlılık</td></tr>
<tr><td>Multithreading</td><td>Tek process içinde çok thread</td></tr>
<tr><td>Context switch</td><td>İşler arası geçişte durum kaydet/yükle</td></tr>
</tbody>
</table></div>
`
  },
  {
    module: 'isletim',
    id: 'os-04-bellek',
    order: 4,
    title: 'Bellek Yönetimi',
    html: `
<h2>📖 Konu Anlatımı</h2>
<h3>Bellek Türlerini Tanı</h3>
<ul>
  <li><strong>RAM (ana bellek):</strong> Çalışan programların ve verilerin tutulduğu <strong>geçici</strong> bellek. Güç kesilince içeriği silinir (uçucu/volatile).</li>
  <li><strong>Cache (önbellek):</strong> CPU'ya çok yakın, çok hızlı ama küçük bellek. Sık kullanılan veriler burada tutulur ki CPU, RAM'e gitmeden hızlıca erişsin.</li>
  <li><strong>Sanal bellek (virtual memory):</strong> Diskin bir kısmının RAM gibi kullanılması tekniği. Programlara fiziksel RAM'den daha büyük bir bellek varmış gibi görünür.</li>
  <li><strong>Swap alanı:</strong> RAM yetmediğinde, az kullanılan verilerin geçici olarak taşındığı <strong>disk</strong> bölgesi. Sanal belleğin pratikteki disk ayağıdır.</li>
</ul>
<div class="callout tip"><p><strong>Hız sıralaması (ezberle):</strong> Cache &gt; RAM &gt; Disk(swap). Cache en hızlı-en küçük, disk en yavaş-en büyük. "RAM yetmeyince ne olur?" → veriler swap'a taşınır, sistem yavaşlar (disk RAM'den çok daha yavaştır).</p></div>

<h3>Paging ve Segmentation</h3>
<ul>
  <li><strong>Paging (sayfalama):</strong> Belleğin <strong>eşit boyutlu</strong> küçük parçalara (sayfa/page) bölünerek yönetilmesi. Sanal bellek genellikle sayfalama ile çalışır.</li>
  <li><strong>Segmentation (bölütleme):</strong> Belleğin <strong>mantıksal ve değişken boyutlu</strong> parçalara (kod, veri, yığın gibi segmentlere) bölünmesi.</li>
</ul>
<p>Akılda kalsın: paging = eşit dilimler, segmentation = anlamlı/değişken dilimler.</p>

<h3>Stack ve Heap</h3>
<ul>
  <li><strong>Stack (yığın):</strong> Metot/fonksiyon çağrıları ve <strong>yerel değişkenler</strong> için kullanılan, otomatik yönetilen bellek bölgesi. Son giren ilk çıkar (LIFO) mantığıyla çalışır.</li>
  <li><strong>Heap:</strong> Çalışma anında oluşturulan <strong>dinamik nesneler</strong> için kullanılan bellek bölgesi. Programcı/çalışma ortamı tarafından yönetilir.</li>
</ul>

<h3>Bellek Sızıntısı ve Bellek Koruması</h3>
<ul>
  <li><strong>Bellek sızıntısı (memory leak):</strong> Programın artık kullanmadığı belleği geri vermemesi. Zamanla RAM dolar, sistem yavaşlar; program kapatılınca işletim sistemi belleği geri alır.</li>
  <li><strong>Bellek koruması (memory protection):</strong> Bir process'in başka bir process'in bellek alanına erişmesinin işletim sistemi tarafından engellenmesi. Kararlılık ve güvenlik için kritiktir.</li>
</ul>
<div class="callout info"><p><strong>Bilgi:</strong> Bir program başka programın belleğine yazmaya çalışırsa işletim sistemi onu durdurur (ör. "erişim ihlali" hatası). Bu, bellek korumasının çalıştığının kanıtıdır.</p></div>

<h2>⚠️ Karıştırılan Kavramlar</h2>
<div class="table-wrap"><table>
<thead><tr><th>Kavram</th><th>Ne?</th><th>Karıştığı kavramdan farkı</th></tr></thead>
<tbody>
<tr><td><strong>RAM</strong></td><td>Geçici ana bellek</td><td>Disk gibi kalıcı DEĞİL; güç kesilince silinir</td></tr>
<tr><td><strong>Cache</strong></td><td>CPU'ya yakın hızlı küçük bellek</td><td>RAM'den hızlı ve küçüktür; RAM'in yedeği değildir</td></tr>
<tr><td><strong>Virtual memory</strong></td><td>Diski RAM gibi kullanma tekniği</td><td>Fiziksel bir donanım DEĞİL, yönetim tekniğidir</td></tr>
<tr><td><strong>Swap</strong></td><td>RAM taşınca kullanılan disk alanı</td><td>RAM'in parçası değil, disk üzerindedir</td></tr>
<tr><td><strong>Stack</strong></td><td>Yerel değişkenler, metot çağrıları</td><td>Heap ile karışır: stack otomatik, heap dinamik</td></tr>
<tr><td><strong>Heap</strong></td><td>Dinamik nesneler</td><td>Stack gibi LIFO sırasıyla çalışmaz</td></tr>
</tbody>
</table></div>
<div class="callout warn"><p><strong>Tuzak:</strong> "Sanal bellek, RAM'in hızını artırır" ifadesi yanlıştır — sanal bellek kapasiteyi büyütür ama disk kullanıldığı için RAM'den YAVAŞTIR. İkinci tuzak: "Cache, disk üzerinde tutulur" — hayır, cache CPU'nun yanındadır; diskte tutulan şey swap'tır.</p></div>

<h2>🎯 Sınavda Nasıl Sorulur?</h2>
<ul>
  <li>"RAM yetersiz kaldığında diskin kullanılan bölümüne ne ad verilir?" (cevap: swap)</li>
  <li>"Diskin RAM gibi kullanılması tekniği hangisidir?" (cevap: sanal bellek)</li>
  <li>Hız sıralaması: "Aşağıdakilerden hangisi en hızlı bellek türüdür?" (cevap: cache)</li>
  <li>Stack/heap ayrımı: "Yerel değişkenler hangi bellek bölgesinde tutulur?"</li>
  <li>"Programın kullanmadığı belleği geri bırakmaması durumuna ne denir?" (cevap: bellek sızıntısı)</li>
</ul>

<h2>✍️ Örnek Sorular</h2>
<div class="quiz-q" data-answer="d">
  <p class="q-text"><strong>Soru 1.</strong> Güç kesildiğinde içeriği silinen, çalışan programların tutulduğu geçici ana bellek hangisidir?</p>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) Sabit disk (HDD)</button>
    <button class="q-opt" data-opt="b">B) SSD</button>
    <button class="q-opt" data-opt="c">C) ROM</button>
    <button class="q-opt" data-opt="d">D) RAM</button>
  </div>
  <div class="q-explain"><strong>Cevap: D.</strong> RAM geçici (uçucu) ana bellektir. HDD ve SSD kalıcı depolamadır; ROM ise salt okunur kalıcı bellektir, güç kesilince silinmez.</div>
</div>

<div class="quiz-q" data-answer="b">
  <p class="q-text"><strong>Soru 2.</strong> CPU'ya en yakın olan, küçük ama en hızlı bellek türü aşağıdakilerden hangisidir?</p>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) RAM</button>
    <button class="q-opt" data-opt="b">B) Cache</button>
    <button class="q-opt" data-opt="c">C) Swap alanı</button>
    <button class="q-opt" data-opt="d">D) Sanal bellek</button>
  </div>
  <div class="q-explain"><strong>Cevap: B.</strong> Hız sırası: cache &gt; RAM &gt; disk(swap). Cache, sık kullanılan verileri CPU'nun hemen yanında tutar. Swap ve sanal bellek disk tabanlıdır, en yavaş seçeneklerdir.</div>
</div>

<div class="quiz-q" data-answer="c">
  <p class="q-text"><strong>Soru 3.</strong> RAM dolduğunda az kullanılan verilerin geçici olarak taşındığı disk bölgesine ne ad verilir?</p>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) Cache</button>
    <button class="q-opt" data-opt="b">B) Stack</button>
    <button class="q-opt" data-opt="c">C) Swap</button>
    <button class="q-opt" data-opt="d">D) Heap</button>
  </div>
  <div class="q-explain"><strong>Cevap: C.</strong> Swap, RAM taştığında kullanılan disk alanıdır. Cache CPU yanındaki hızlı bellektir; stack ve heap, bir process'in RAM içindeki bölgeleridir, diskte değildir.</div>
</div>

<div class="quiz-q" data-answer="a">
  <p class="q-text"><strong>Soru 4.</strong> Metot çağrıları ve yerel değişkenler ile çalışma anında oluşturulan dinamik nesneler sırasıyla hangi bellek bölgelerinde tutulur?</p>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) Stack - Heap</button>
    <button class="q-opt" data-opt="b">B) Heap - Stack</button>
    <button class="q-opt" data-opt="c">C) Cache - Swap</button>
    <button class="q-opt" data-opt="d">D) Swap - Cache</button>
  </div>
  <div class="q-explain"><strong>Cevap: A.</strong> Yerel değişkenler ve metot çağrıları stack'te, dinamik nesneler heap'te tutulur. B sırayı ters verir; cache ve swap process içi bölgeler değildir.</div>
</div>

<div class="quiz-q" data-answer="b">
  <p class="q-text"><strong>Soru 5.</strong> (Tuzak) Sanal bellek (virtual memory) ile ilgili aşağıdakilerden hangisi <strong>doğrudur</strong>?</p>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) RAM'den daha hızlı erişim sağlar</button>
    <button class="q-opt" data-opt="b">B) Diskin bir kısmını RAM gibi kullanarak kullanılabilir belleği büyütür</button>
    <button class="q-opt" data-opt="c">C) Yalnızca cache belleği büyütmek için kullanılır</button>
    <button class="q-opt" data-opt="d">D) Güç kesildiğinde RAM'deki verileri kalıcı olarak korur</button>
  </div>
  <div class="q-explain"><strong>Cevap: B.</strong> Sanal bellek kapasite kazandırır ama disk tabanlı olduğu için RAM'den YAVAŞTIR (A bu yüzden tuzaktır). Cache ile ilgisi yoktur; veri yedekleme/koruma amacı da taşımaz.</div>
</div>

<h2>🔁 Mini Tekrar</h2>
<div class="table-wrap"><table>
<thead><tr><th>Kavram</th><th>Tek cümle</th></tr></thead>
<tbody>
<tr><td>RAM</td><td>Geçici ana bellek; güç kesilince silinir</td></tr>
<tr><td>Cache</td><td>CPU yanındaki en hızlı, küçük bellek</td></tr>
<tr><td>Virtual memory</td><td>Diski RAM gibi kullanma tekniği (kapasite artar, hız düşer)</td></tr>
<tr><td>Swap</td><td>RAM taşınca kullanılan disk alanı</td></tr>
<tr><td>Paging</td><td>Belleği eşit boyutlu sayfalara bölme</td></tr>
<tr><td>Segmentation</td><td>Belleği mantıksal/değişken boyutlu parçalara bölme</td></tr>
<tr><td>Stack</td><td>Metot çağrıları + yerel değişkenler (LIFO)</td></tr>
<tr><td>Heap</td><td>Dinamik nesneler</td></tr>
<tr><td>Memory leak</td><td>Kullanılmayan belleğin geri verilmemesi</td></tr>
<tr><td>Memory protection</td><td>Process'lerin birbirinin belleğine girememesi</td></tr>
</tbody>
</table></div>
`
  },
  {
    module: 'isletim',
    id: 'os-05-dosya-sistemleri',
    order: 5,
    title: 'Dosya Sistemleri',
    html: `
<h2>📖 Konu Anlatımı</h2>
<h3>Dosya Sistemi Nedir?</h3>
<p><strong>Dosya sistemi</strong>, verilerin disk üzerinde nasıl saklanacağını, adlandırılacağını ve bulunacağını belirleyen düzendir. Aynı diski farklı dosya sistemleriyle biçimlendirebilirsin; işletim sistemi veriye bu düzen üzerinden erişir.</p>

<h3>Yaygın Dosya Sistemleri</h3>
<div class="table-wrap"><table>
<thead><tr><th>Dosya Sistemi</th><th>Nerede yaygın?</th><th>Sınav notu</th></tr></thead>
<tbody>
<tr><td><strong>FAT32</strong></td><td>Eski sistemler, USB bellekler</td><td>Tek dosya için <strong>4 GB sınırı</strong> vardır; çok uyumludur</td></tr>
<tr><td><strong>NTFS</strong></td><td>Windows</td><td>Windows'un <strong>varsayılan</strong> dosya sistemi; izinler, büyük dosya desteği</td></tr>
<tr><td><strong>exFAT</strong></td><td>USB/SD kartlar</td><td>FAT32'nin 4 GB sınırını aşar; Windows-macOS arası taşınabilirlik için ideal</td></tr>
<tr><td><strong>ext4</strong></td><td>Linux</td><td>Linux dağıtımlarında <strong>en yaygın</strong> dosya sistemi</td></tr>
<tr><td><strong>HFS+</strong></td><td>Eski macOS</td><td>Apple'ın eski dosya sistemi</td></tr>
<tr><td><strong>APFS</strong></td><td>Güncel macOS / iOS</td><td>Apple'ın modern dosya sistemi (SSD odaklı)</td></tr>
</tbody>
</table></div>

<h3>Dosya Yolu: Windows ve Linux Farkı</h3>
<pre><code class="lang-text">Windows : C:\\Users\\Baran\\Desktop
Linux   : /home/baran/Desktop
macOS   : /Users/baran/Desktop</code></pre>
<ul>
  <li>Windows'ta sürücü harfi (C:) ve <strong>ters bölü</strong> ( \\ ) kullanılır.</li>
  <li>Linux/macOS'ta sürücü harfi yoktur; her şey <strong>kök dizin /</strong> altından başlar ve <strong>düz bölü</strong> ( / ) kullanılır.</li>
  <li><strong>Kök dizin:</strong> Hiyerarşinin en tepesi (Linux'ta / , Windows'ta C:\\ gibi sürücü kökü).</li>
  <li><strong>Home dizini:</strong> Kullanıcının kişisel klasörü (Linux: /home/kullanici, macOS: /Users/kullanici, Windows: C:\\Users\\kullanici).</li>
</ul>

<h3>İzinler, Gizli Dosyalar, Metadata, Fragmentation</h3>
<ul>
  <li><strong>Dosya izinleri:</strong> Kimin okuyup yazabileceğini dosya sistemi düzeyinde belirler (ayrıntısı 6. konuda).</li>
  <li><strong>Gizli dosyalar:</strong> Normal listelemede görünmeyen dosyalar. Linux/macOS'ta adı <strong>nokta ile başlayan</strong> dosyalar gizlidir (.bashrc gibi); Windows'ta "gizli" özniteliği verilir.</li>
  <li><strong>Metadata (üstveri):</strong> Dosyanın içeriği dışındaki bilgileri: boyut, oluşturulma tarihi, sahibi, izinleri.</li>
  <li><strong>Fragmentation (parçalanma):</strong> Bir dosyanın parçalarının diskte dağınık konumlara yazılması; okuma yavaşlar. Birleştirme (defragmentation) ile düzeltilir.</li>
</ul>
<div class="callout info"><p><strong>Bilgi:</strong> 8 GB'lık bir filmi FAT32 biçimli USB'ye kopyalayamazsın — 4 GB dosya sınırına takılır. Çözüm: USB'yi exFAT veya NTFS yapmak. Bu senaryo sınavın sevdiği bir sorudur.</p></div>

<h2>⚠️ Karıştırılan Kavramlar</h2>
<div class="table-wrap"><table>
<thead><tr><th>Karışan ikili</th><th>Ayrım</th></tr></thead>
<tbody>
<tr><td><strong>FAT32 vs exFAT</strong></td><td>İkisi de taşınabilir aygıtlarda yaygın; ama 4 GB dosya sınırı FAT32'dedir, exFAT'ta yoktur</td></tr>
<tr><td><strong>NTFS vs ext4</strong></td><td>NTFS = Windows varsayılanı; ext4 = Linux yaygını. Ters eşleştirme klasik çeldiricidir</td></tr>
<tr><td><strong>HFS+ vs APFS</strong></td><td>İkisi de Apple; HFS+ eski, APFS modern (güncel macOS/iOS)</td></tr>
<tr><td><strong>Kök dizin vs Home dizini</strong></td><td>Kök ( / ) tüm sistemin tepesi; home, tek bir kullanıcının kişisel alanı</td></tr>
<tr><td><strong>Metadata vs içerik</strong></td><td>Metadata dosya HAKKINDAKİ bilgidir (boyut, tarih, sahip); dosyanın içindeki veri değildir</td></tr>
</tbody>
</table></div>
<div class="callout warn"><p><strong>Tuzak:</strong> "ext4, Windows'un varsayılan dosya sistemidir" ya da "NTFS, Linux'ta yaygındır" gibi ters eşleştirmelere dikkat. İkinci tuzak: Windows yolu soruda / ile, Linux yolu \\ ile yazılarak göz yanıltılır — Windows: sürücü harfi + ters bölü; Linux: kök / + düz bölü.</p></div>

<h2>🎯 Sınavda Nasıl Sorulur?</h2>
<ul>
  <li>"Windows'un varsayılan dosya sistemi hangisidir?" (cevap: NTFS)</li>
  <li>"4 GB'tan büyük dosya kopyalanamayan dosya sistemi hangisidir?" (cevap: FAT32)</li>
  <li>"Linux'ta en yaygın kullanılan dosya sistemi hangisidir?" (cevap: ext4)</li>
  <li>Yol biçimi soruları: "/home/ali/Desktop hangi işletim sistemine ait bir yoldur?"</li>
  <li>"Dosyanın boyutu, tarihi ve sahibi gibi bilgilere ne ad verilir?" (cevap: metadata)</li>
</ul>

<h2>✍️ Örnek Sorular</h2>
<div class="quiz-q" data-answer="b">
  <p class="q-text"><strong>Soru 1.</strong> Windows işletim sisteminin varsayılan dosya sistemi aşağıdakilerden hangisidir?</p>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) ext4</button>
    <button class="q-opt" data-opt="b">B) NTFS</button>
    <button class="q-opt" data-opt="c">C) APFS</button>
    <button class="q-opt" data-opt="d">D) FAT32</button>
  </div>
  <div class="q-explain"><strong>Cevap: B.</strong> Modern Windows sürümlerinin varsayılanı NTFS'tir. ext4 Linux'a, APFS Apple'a aittir; FAT32 eski ve taşınabilir aygıt odaklıdır.</div>
</div>

<div class="quiz-q" data-answer="a">
  <p class="q-text"><strong>Soru 2.</strong> Tek bir dosya için 4 GB boyut sınırı bulunan dosya sistemi hangisidir?</p>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) FAT32</button>
    <button class="q-opt" data-opt="b">B) NTFS</button>
    <button class="q-opt" data-opt="c">C) exFAT</button>
    <button class="q-opt" data-opt="d">D) ext4</button>
  </div>
  <div class="q-explain"><strong>Cevap: A.</strong> 4 GB dosya sınırı FAT32'ye özgüdür. exFAT tam da bu sınırı aşmak için geliştirilmiştir; NTFS ve ext4'te böyle pratik bir sınır sorunu yoktur.</div>
</div>

<div class="quiz-q" data-answer="d">
  <p class="q-text"><strong>Soru 3.</strong> "/home/baran/Desktop" biçimindeki bir dosya yolu için aşağıdakilerden hangisi söylenebilir?</p>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) Windows'a aittir, çünkü sürücü harfiyle başlar</button>
    <button class="q-opt" data-opt="b">B) Hatalı bir yoldur, çünkü ters bölü kullanılmamıştır</button>
    <button class="q-opt" data-opt="c">C) Bir web adresidir</button>
    <button class="q-opt" data-opt="d">D) Linux tarzı bir yoldur; kök dizinden ( / ) başlar</button>
  </div>
  <div class="q-explain"><strong>Cevap: D.</strong> Sürücü harfi yok, düz bölü var, /home altında kullanıcı klasörü var: tipik Linux yolu. Windows yolları C:\\Users\\... biçimindedir; ters bölü Linux'ta gerekmez.</div>
</div>

<div class="quiz-q" data-answer="c">
  <p class="q-text"><strong>Soru 4.</strong> Bir dosyanın boyutu, oluşturulma tarihi, sahibi ve izinleri gibi bilgilerin genel adı nedir?</p>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) Fragmentation</button>
    <button class="q-opt" data-opt="b">B) İçerik (data)</button>
    <button class="q-opt" data-opt="c">C) Metadata</button>
    <button class="q-opt" data-opt="d">D) Önbellek</button>
  </div>
  <div class="q-explain"><strong>Cevap: C.</strong> Dosya hakkındaki bilgiler metadata'dır (üstveri). İçerik dosyanın kendisidir; fragmentation parçalanma, önbellek ise hızlı erişim belleğidir.</div>
</div>

<div class="quiz-q" data-answer="a">
  <p class="q-text"><strong>Soru 5.</strong> (Tuzak) 8 GB boyutundaki bir video dosyasını USB belleğe kopyalayamayan bir kullanıcı için en olası neden ve çözüm hangisidir?</p>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) USB, FAT32 biçimlidir; exFAT veya NTFS olarak biçimlendirilmelidir</button>
    <button class="q-opt" data-opt="b">B) USB, NTFS biçimlidir; FAT32 olarak biçimlendirilmelidir</button>
    <button class="q-opt" data-opt="c">C) Video gizli dosyadır; önce görünür yapılmalıdır</button>
    <button class="q-opt" data-opt="d">D) USB'nin metadata'sı dolmuştur; defragmentasyon yapılmalıdır</button>
  </div>
  <div class="q-explain"><strong>Cevap: A.</strong> 8 GB &gt; 4 GB olduğu için FAT32'nin tek dosya sınırına takılır; exFAT/NTFS sınırı kaldırır. B çözümü tersine çevirir (FAT32'ye dönmek sorunu yaratır). C ve D'nin dosya boyutu sınırıyla ilgisi yoktur.</div>
</div>

<h2>🔁 Mini Tekrar</h2>
<div class="table-wrap"><table>
<thead><tr><th>Soru</th><th>Cevap</th></tr></thead>
<tbody>
<tr><td>Windows varsayılanı?</td><td>NTFS</td></tr>
<tr><td>4 GB dosya sınırı?</td><td>FAT32</td></tr>
<tr><td>USB için modern seçim?</td><td>exFAT</td></tr>
<tr><td>Linux yaygını?</td><td>ext4</td></tr>
<tr><td>Apple modern / eski?</td><td>APFS / HFS+</td></tr>
<tr><td>Windows yolu</td><td>C:\\Users\\Baran\\Desktop (sürücü harfi + ters bölü)</td></tr>
<tr><td>Linux yolu</td><td>/home/baran/Desktop (kök / + düz bölü)</td></tr>
<tr><td>Linux'ta gizli dosya?</td><td>Adı nokta ile başlar (.bashrc)</td></tr>
<tr><td>Metadata?</td><td>Dosya hakkındaki bilgiler (boyut, tarih, sahip, izin)</td></tr>
<tr><td>Fragmentation?</td><td>Dosya parçalarının diskte dağınık olması → yavaşlama</td></tr>
</tbody>
</table></div>
`
  },
  {
    module: 'isletim',
    id: 'os-06-yetki',
    order: 6,
    title: 'Kullanıcı ve Yetkilendirme',
    html: `
<h2>📖 Konu Anlatımı</h2>
<h3>Kullanıcı Hesap Türleri</h3>
<ul>
  <li><strong>Standart kullanıcı:</strong> Günlük işleri yapabilir; sistem genelini etkileyen değişiklikleri (program kurma, ayar değiştirme) yapamaz veya onay ister.</li>
  <li><strong>Yönetici hesabı:</strong> Sistem genelinde tam yetkilidir. Windows'ta <strong>Administrator</strong>, Linux/macOS'ta <strong>root</strong> adını alır.</li>
  <li><strong>root:</strong> Linux'taki en yetkili "süper kullanıcı"dır; her dosyaya erişebilir, her ayarı değiştirebilir. Günlük kullanım için önerilmez — tek yanlış komut sistemi bozabilir.</li>
</ul>

<h3>Dosya İzinleri: r, w, x</h3>
<ul>
  <li><strong>r (read):</strong> Okuma — dosyanın içeriğini görme.</li>
  <li><strong>w (write):</strong> Yazma — dosyayı değiştirme/silme.</li>
  <li><strong>x (execute):</strong> Çalıştırma — dosyayı program olarak yürütme (klasörlerde: içine girebilme).</li>
</ul>
<p>Linux'ta her dosyanın izinleri <strong>üç grup için ayrı ayrı</strong> tanımlanır: <strong>sahip (user) - grup (group) - diğerleri (others)</strong>.</p>
<pre><code class="lang-text">-rwxr-xr--  =  sahip: rwx | grup: r-x | digerleri: r--
                sahip her seyi yapar
                grup okur ve calistirir
                digerleri sadece okur</code></pre>

<h3>Sayısal İzinler: chmod ve 755 Mantığı</h3>
<p>Her izin bir sayıya karşılık gelir: <strong>r = 4, w = 2, x = 1</strong>. Topla, üç basamak yaz (sahip-grup-diğerleri):</p>
<pre><code class="lang-text">rwx = 4+2+1 = 7
r-x = 4+0+1 = 5
r-- = 4+0+0 = 4
rw- = 4+2+0 = 6

chmod 755 dosya  →  sahip: rwx, grup: r-x, digerleri: r-x
chmod 644 dosya  →  sahip: rw-, grup: r--, digerleri: r--</code></pre>
<div class="callout tip"><p><strong>Ezber hilesi:</strong> 4-2-1 = r-w-x. "755" gördüğünde basamak basamak çöz: 7=rwx, 5=r-x, 5=r-x. Sınavda en sık 755 ve 644 sorulur.</p></div>

<h3>sudo ve Grup Yetkileri</h3>
<ul>
  <li><strong>sudo:</strong> Standart bir kullanıcının, tek bir komutu <strong>geçici olarak yönetici (root) yetkisiyle</strong> çalıştırmasını sağlar. Kalıcı olarak root yapmaz.</li>
  <li><strong>Grup yetkileri:</strong> Kullanıcılar gruplara toplanır; izin tek tek kişiye değil gruba verilir. Böylece "muhasebe" grubuna eklenen herkes ilgili klasöre erişir — yönetim kolaylaşır.</li>
</ul>
<div class="callout info"><p><strong>Bilgi:</strong> "En az yetki ilkesi" (principle of least privilege): herkese işini yapmaya yetecek EN AZ yetkiyi ver. Bu yüzden günlük çalışmada standart hesap kullanılır, gerekince sudo/yönetici onayı devreye girer.</p></div>

<h2>⚠️ Karıştırılan Kavramlar</h2>
<div class="table-wrap"><table>
<thead><tr><th>Karışan ikili</th><th>Ayrım</th></tr></thead>
<tbody>
<tr><td><strong>root vs Administrator</strong></td><td>Aynı rolün iki adı: root = Linux/macOS, Administrator = Windows</td></tr>
<tr><td><strong>sudo vs root olarak giriş</strong></td><td>sudo = TEK komut için geçici yetki; root girişi = sürekli tam yetki (riskli)</td></tr>
<tr><td><strong>w (write) vs x (execute)</strong></td><td>w = değiştirme/silme; x = çalıştırma. "Dosyayı silebilmek" için x değil w gerekir</td></tr>
<tr><td><strong>chmod vs chown</strong></td><td>chmod izinleri değiştirir; chown dosyanın SAHİBİNİ değiştirir</td></tr>
<tr><td><strong>Kimlik doğrulama vs yetkilendirme</strong></td><td>Doğrulama = "sen kimsin?" (parola); yetkilendirme = "neye erişebilirsin?" (izinler)</td></tr>
</tbody>
</table></div>
<div class="callout warn"><p><strong>Tuzak:</strong> "x izni dosyayı silme yetkisi verir" yanlıştır — silme/değiştirme <strong>w</strong>'dir, x çalıştırmadır. İkinci tuzak: "sudo, kullanıcıyı kalıcı olarak root yapar" — hayır, yalnızca o komut için geçici yetki verir. Üçüncü tuzak: 755'in ilk basamağı sahibe, son basamağı diğerlerine aittir; sırayı ters okutmaya çalışırlar.</p></div>

<h2>🎯 Sınavda Nasıl Sorulur?</h2>
<ul>
  <li>"r, w, x izinleri sırasıyla neyi ifade eder?" (read-okuma, write-yazma, execute-çalıştırma)</li>
  <li>"chmod 755 komutunda sahip hangi izinlere sahip olur?" (rwx)</li>
  <li>"Linux'taki en yetkili kullanıcı hesabı hangisidir?" (root)</li>
  <li>"Standart kullanıcının geçici yönetici yetkisiyle komut çalıştırmasını sağlayan komut?" (sudo)</li>
  <li>"rwxr-xr-- izninde grup neler yapabilir?" tarzı okuma soruları</li>
</ul>

<h2>✍️ Örnek Sorular</h2>
<div class="quiz-q" data-answer="c">
  <p class="q-text"><strong>Soru 1.</strong> Linux sistemlerindeki en yetkili kullanıcı (süper kullanıcı) hesabı aşağıdakilerden hangisidir?</p>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) admin</button>
    <button class="q-opt" data-opt="b">B) guest</button>
    <button class="q-opt" data-opt="c">C) root</button>
    <button class="q-opt" data-opt="d">D) user</button>
  </div>
  <div class="q-explain"><strong>Cevap: C.</strong> Linux'un süper kullanıcısı root'tur. Windows'taki karşılığı Administrator'dır. guest ve user düşük yetkili hesaplardır; "admin" Linux'ta varsayılan süper kullanıcı adı değildir.</div>
</div>

<div class="quiz-q" data-answer="d">
  <p class="q-text"><strong>Soru 2.</strong> Dosya izinlerindeki r, w ve x harfleri sırasıyla neyi ifade eder?</p>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) Çalıştırma - yazma - okuma</button>
    <button class="q-opt" data-opt="b">B) Okuma - çalıştırma - yazma</button>
    <button class="q-opt" data-opt="c">C) Yazma - okuma - çalıştırma</button>
    <button class="q-opt" data-opt="d">D) Okuma - yazma - çalıştırma</button>
  </div>
  <div class="q-explain"><strong>Cevap: D.</strong> r = read (okuma), w = write (yazma), x = execute (çalıştırma). Diğer şıklar aynı üçlünün karıştırılmış sıralamalarıdır.</div>
</div>

<div class="quiz-q" data-answer="b">
  <p class="q-text"><strong>Soru 3.</strong> <code>chmod 755 betik.sh</code> komutu uygulandığında dosyanın sahibi, grubu ve diğerleri sırasıyla hangi izinlere sahip olur?</p>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) rw- / rw- / r--</button>
    <button class="q-opt" data-opt="b">B) rwx / r-x / r-x</button>
    <button class="q-opt" data-opt="c">C) r-x / r-x / rwx</button>
    <button class="q-opt" data-opt="d">D) rwx / rwx / rwx</button>
  </div>
  <div class="q-explain"><strong>Cevap: B.</strong> 7 = 4+2+1 = rwx, 5 = 4+1 = r-x. Sıra: sahip-grup-diğerleri. A 644'ün karşılığıdır; C sırayı ters çevirir; D 777 olurdu.</div>
</div>

<div class="quiz-q" data-answer="a">
  <p class="q-text"><strong>Soru 4.</strong> Standart bir Linux kullanıcısının tek bir komutu geçici olarak yönetici yetkisiyle çalıştırmasını sağlayan komut hangisidir?</p>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) sudo</button>
    <button class="q-opt" data-opt="b">B) chmod</button>
    <button class="q-opt" data-opt="c">C) ps</button>
    <button class="q-opt" data-opt="d">D) mv</button>
  </div>
  <div class="q-explain"><strong>Cevap: A.</strong> sudo, komutu root yetkisiyle çalıştırır. chmod izin değiştirir, ps process listeler, mv dosya taşır — hiçbirinin yetki yükseltmeyle ilgisi yoktur.</div>
</div>

<div class="quiz-q" data-answer="d">
  <p class="q-text"><strong>Soru 5.</strong> (Tuzak) İzinleri <code>-rwxr-x---</code> olan bir dosya için aşağıdakilerden hangisi <strong>doğrudur</strong>?</p>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) Diğer tüm kullanıcılar dosyayı okuyabilir</button>
    <button class="q-opt" data-opt="b">B) Grup üyeleri dosyayı değiştirebilir</button>
    <button class="q-opt" data-opt="c">C) Sahip dosyayı çalıştıramaz</button>
    <button class="q-opt" data-opt="d">D) Grup üyeleri dosyayı okuyabilir ve çalıştırabilir ama değiştiremez</button>
  </div>
  <div class="q-explain"><strong>Cevap: D.</strong> Çözümle: sahip rwx (her şey), grup r-x (okur + çalıştırır, w yok), diğerleri --- (hiçbir şey). A yanlış çünkü diğerlerinin hiç izni yok; B yanlış çünkü grupta w yok; C yanlış çünkü sahipte x var.</div>
</div>

<h2>🔁 Mini Tekrar</h2>
<div class="table-wrap"><table>
<thead><tr><th>Kavram</th><th>Hatırla</th></tr></thead>
<tbody>
<tr><td>r / w / x</td><td>read-okur / write-yazar-değiştirir / execute-çalıştırır</td></tr>
<tr><td>Sayısal karşılık</td><td>r=4, w=2, x=1 (topla)</td></tr>
<tr><td>755</td><td>rwx / r-x / r-x</td></tr>
<tr><td>644</td><td>rw- / r-- / r--</td></tr>
<tr><td>İzin sırası</td><td>sahip → grup → diğerleri</td></tr>
<tr><td>root / Administrator</td><td>Linux / Windows süper kullanıcısı</td></tr>
<tr><td>sudo</td><td>Tek komut için geçici root yetkisi</td></tr>
<tr><td>chmod / chown</td><td>İzin değiştirir / sahip değiştirir</td></tr>
<tr><td>Grup yetkisi</td><td>İzin gruba verilir, üyeler otomatik yararlanır</td></tr>
</tbody>
</table></div>
`
  },
  {
    module: 'isletim',
    id: 'os-07-komut-satiri',
    order: 7,
    title: 'Komut Satırı Temelleri',
    html: `
<h2>📖 Konu Anlatımı</h2>
<h3>Neden Komut Satırı?</h3>
<p>Komut satırı (CLI), işletim sistemine yazılı komutlarla iş yaptırmanı sağlar. Sınavda hem Windows (Komut İstemi) hem Linux/macOS (terminal) komutları <strong>karışık</strong> sorulabilir — hangi komutun hangi sisteme ait olduğunu net bil.</p>

<h3>Mutlaka Bilinmesi Gereken Çekirdek Komutlar</h3>
<ul>
  <li><code>cd</code> → dizin (klasör) değiştirir (her iki sistemde de aynı)</li>
  <li><code>ls</code> (Linux) / <code>dir</code> (Windows) → dosyaları listeler</li>
  <li><code>mkdir</code> → yeni klasör oluşturur (her iki sistemde de aynı)</li>
  <li><code>rm</code> (Linux) / <code>del</code> (Windows) → dosya siler</li>
  <li><code>cp</code> (Linux) / <code>copy</code> (Windows) → dosya kopyalar</li>
  <li><code>mv</code> (Linux) → dosya taşır VEYA yeniden adlandırır (iki işlevi de var!)</li>
  <li><code>pwd</code> (Linux) → bulunduğun dizinin tam yolunu gösterir</li>
  <li><code>ping</code> → ağ bağlantısını test eder (her iki sistemde de aynı)</li>
</ul>

<h3>Windows - Linux Komut Eşleştirme Tablosu</h3>
<div class="table-wrap"><table>
<thead><tr><th>İş</th><th>Windows</th><th>Linux/macOS</th></tr></thead>
<tbody>
<tr><td>Dosyaları listele</td><td><code>dir</code></td><td><code>ls</code></td></tr>
<tr><td>Dizin değiştir</td><td><code>cd</code></td><td><code>cd</code></td></tr>
<tr><td>Klasör oluştur</td><td><code>mkdir</code></td><td><code>mkdir</code></td></tr>
<tr><td>Dosya sil</td><td><code>del</code></td><td><code>rm</code></td></tr>
<tr><td>Dosya kopyala</td><td><code>copy</code></td><td><code>cp</code></td></tr>
<tr><td>Ekranı temizle</td><td><code>cls</code></td><td><code>clear</code></td></tr>
<tr><td>Ağ ayarlarını göster</td><td><code>ipconfig</code></td><td><code>ifconfig</code> / <code>ip addr</code></td></tr>
<tr><td>Bağlantı testi</td><td><code>ping</code></td><td><code>ping</code></td></tr>
</tbody>
</table></div>

<h3>Linux'a Özgü Diğer Önemli Komutlar</h3>
<ul>
  <li><code>mv</code> → taşır/yeniden adlandırır; <code>pwd</code> → bulunduğun dizini yazar</li>
  <li><code>chmod</code> → dosya izinlerini değiştirir; <code>sudo</code> → komutu yönetici yetkisiyle çalıştırır</li>
  <li><code>ps</code> → çalışan process'leri listeler; <code>kill</code> → bir process'i sonlandırır; <code>top</code> → kaynak kullanımını canlı gösterir</li>
</ul>
<pre><code class="lang-text">$ pwd
/home/baran
$ mkdir projeler
$ cd projeler
$ cp ../notlar.txt yedek.txt
$ mv yedek.txt eski-notlar.txt   (yeniden adlandirma!)
$ ls
eski-notlar.txt</code></pre>
<div class="callout tip"><p><strong>Ezber hilesi:</strong> Eşleştirmeleri çiftler halinde tekrarla: "dir-ls, del-rm, copy-cp, cls-clear, ipconfig-ifconfig". Windows komutları genelde İngilizce kelimenin daha uzun hali (copy, del), Linux komutları kısaltma (cp, rm) eğilimindedir.</p></div>

<h2>⚠️ Karıştırılan Kavramlar</h2>
<div class="table-wrap"><table>
<thead><tr><th>Karışan ikili</th><th>Ayrım</th></tr></thead>
<tbody>
<tr><td><strong>cp vs mv</strong></td><td>cp kopyalar (orijinal kalır); mv taşır (orijinal yerinde kalmaz) ve yeniden adlandırma da yapar</td></tr>
<tr><td><strong>ls vs pwd</strong></td><td>ls içindekileri listeler; pwd bulunduğun dizinin YOLUNU yazar</td></tr>
<tr><td><strong>ipconfig vs ifconfig</strong></td><td>Tek harf farkı: ipconfig = Windows, ifconfig = Linux</td></tr>
<tr><td><strong>cls vs clear</strong></td><td>İkisi de ekran temizler: cls = Windows, clear = Linux</td></tr>
<tr><td><strong>ps vs top</strong></td><td>ps anlık liste verir; top canlı/sürekli güncellenen görünüm sunar</td></tr>
<tr><td><strong>kill vs rm</strong></td><td>kill PROCESS sonlandırır; rm DOSYA siler — "silmek" diye ikisi karıştırılır</td></tr>
</tbody>
</table></div>
<div class="callout warn"><p><strong>Tuzak:</strong> "mv sadece taşır" demek eksiktir — <strong>aynı dizinde farklı ada mv yapmak = yeniden adlandırmaktır</strong>. İkinci tuzak: ipconfig/ifconfig tek harfle ayrılır; soru kökünde "Windows'ta" mı "Linux'ta" mı dendiğine dikkat et.</p></div>

<h2>🎯 Sınavda Nasıl Sorulur?</h2>
<ul>
  <li>"Linux'ta dosyaları listeleyen komut hangisidir?" (ls) / "Windows'ta?" (dir)</li>
  <li>"Aşağıdaki komut-işlev eşleştirmelerinden hangisi yanlıştır?"</li>
  <li>"Windows'taki cls komutunun Linux karşılığı nedir?" (clear)</li>
  <li>"Bulunduğun dizinin tam yolunu gösteren Linux komutu hangisidir?" (pwd)</li>
  <li>Kısa senaryo: "Bir dosyanın adını değiştirmek isteyen kullanıcı hangi komutu kullanmalıdır?" (mv)</li>
</ul>

<h2>✍️ Örnek Sorular</h2>
<div class="quiz-q" data-answer="a">
  <p class="q-text"><strong>Soru 1.</strong> Linux terminalinde bulunduğun dizindeki dosya ve klasörleri listeleyen komut hangisidir?</p>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) ls</button>
    <button class="q-opt" data-opt="b">B) cd</button>
    <button class="q-opt" data-opt="c">C) pwd</button>
    <button class="q-opt" data-opt="d">D) rm</button>
  </div>
  <div class="q-explain"><strong>Cevap: A.</strong> ls listeler (Windows karşılığı dir). cd dizin değiştirir, pwd bulunduğun yolun adını yazar, rm dosya siler.</div>
</div>

<div class="quiz-q" data-answer="b">
  <p class="q-text"><strong>Soru 2.</strong> Hem Windows'ta hem Linux'ta yeni bir klasör oluşturmak için kullanılan ortak komut hangisidir?</p>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) newdir</button>
    <button class="q-opt" data-opt="b">B) mkdir</button>
    <button class="q-opt" data-opt="c">C) makedir</button>
    <button class="q-opt" data-opt="d">D) createfolder</button>
  </div>
  <div class="q-explain"><strong>Cevap: B.</strong> mkdir (make directory) her iki sistemde de klasör oluşturur. Diğer şıklar gerçek komut değildir.</div>
</div>

<div class="quiz-q" data-answer="c">
  <p class="q-text"><strong>Soru 3.</strong> Aşağıdaki Windows - Linux komut eşleştirmelerinden hangisi <strong>yanlıştır</strong>?</p>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) dir - ls</button>
    <button class="q-opt" data-opt="b">B) copy - cp</button>
    <button class="q-opt" data-opt="c">C) cls - pwd</button>
    <button class="q-opt" data-opt="d">D) del - rm</button>
  </div>
  <div class="q-explain"><strong>Cevap: C.</strong> cls ekranı temizler; Linux karşılığı clear'dır. pwd ise bulunduğun dizini gösterir, ekran temizlemekle ilgisi yoktur. Diğer eşleştirmeler doğrudur.</div>
</div>

<div class="quiz-q" data-answer="d">
  <p class="q-text"><strong>Soru 4.</strong> Linux'ta çalışan bir process'i sonlandırmak ve çalışan process'leri listelemek için sırasıyla hangi komutlar kullanılır?</p>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) rm - ls</button>
    <button class="q-opt" data-opt="b">B) del - dir</button>
    <button class="q-opt" data-opt="c">C) stop - list</button>
    <button class="q-opt" data-opt="d">D) kill - ps</button>
  </div>
  <div class="q-explain"><strong>Cevap: D.</strong> kill process sonlandırır, ps process listeler. rm/ls ve del/dir dosyalarla ilgilidir (üstelik del/dir Windows'tur); stop/list bu amaçla kullanılan standart komutlar değildir.</div>
</div>

<div class="quiz-q" data-answer="b">
  <p class="q-text"><strong>Soru 5.</strong> (Tuzak) Linux'ta "rapor.txt" dosyasının adını "rapor2024.txt" yapmak isteyen bir kullanıcı hangi komutu kullanmalıdır?</p>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) cp rapor.txt rapor2024.txt</button>
    <button class="q-opt" data-opt="b">B) mv rapor.txt rapor2024.txt</button>
    <button class="q-opt" data-opt="c">C) rename yalnızca Windows'ta olduğundan bu işlem Linux'ta yapılamaz</button>
    <button class="q-opt" data-opt="d">D) rm rapor.txt rapor2024.txt</button>
  </div>
  <div class="q-explain"><strong>Cevap: B.</strong> mv aynı dizinde yeni ada taşıma yaparak dosyayı yeniden adlandırır. cp kullanılırsa eski dosya da kalır (iki kopya olur — "adını değiştirmek" gerçekleşmez); rm siler; C ifadesi yanlıştır, Linux'ta yeniden adlandırma mv ile yapılır.</div>
</div>

<h2>🔁 Mini Tekrar</h2>
<div class="table-wrap"><table>
<thead><tr><th>Komut</th><th>İşlev</th></tr></thead>
<tbody>
<tr><td>cd</td><td>Dizin değiştirir (Win + Linux)</td></tr>
<tr><td>ls / dir</td><td>Listeler (Linux / Windows)</td></tr>
<tr><td>mkdir</td><td>Klasör oluşturur (Win + Linux)</td></tr>
<tr><td>rm / del</td><td>Dosya siler (Linux / Windows)</td></tr>
<tr><td>cp / copy</td><td>Kopyalar (Linux / Windows)</td></tr>
<tr><td>mv</td><td>Taşır VE yeniden adlandırır</td></tr>
<tr><td>pwd</td><td>Bulunduğun dizini gösterir</td></tr>
<tr><td>cls / clear</td><td>Ekranı temizler (Windows / Linux)</td></tr>
<tr><td>ipconfig / ifconfig</td><td>Ağ bilgisi (Windows / Linux)</td></tr>
<tr><td>ping</td><td>Ağ bağlantısı testi (ikisinde de)</td></tr>
<tr><td>ps, top, kill</td><td>Process listele, canlı izle, sonlandır</td></tr>
<tr><td>chmod, sudo</td><td>İzin değiştir, yetkiyle çalıştır</td></tr>
</tbody>
</table></div>
`
  },
  {
    module: 'isletim',
    id: 'os-08-turler',
    order: 8,
    title: 'İşletim Sistemi Türleri',
    html: `
<h2>📖 Konu Anlatımı</h2>
<h3>Kullanıcı Sayısına Göre</h3>
<ul>
  <li><strong>Tek kullanıcılı:</strong> Aynı anda bir kullanıcıya hizmet eder (klasik kişisel bilgisayar senaryosu, eski MS-DOS gibi).</li>
  <li><strong>Çok kullanıcılı:</strong> Aynı anda birden çok kullanıcının sisteme bağlanıp çalışmasına izin verir (Linux/Unix sunucuları tipik örnektir).</li>
</ul>

<h3>Kullanım Amacına Göre</h3>
<ul>
  <li><strong>Gerçek zamanlı (RTOS):</strong> Görevleri <strong>kesin zaman sınırları içinde</strong> tamamlamak zorunda olan sistemler. Hava yastığı kontrolü, tıbbi cihazlar, fabrika robotları gibi gecikmenin kabul edilemez olduğu yerlerde kullanılır.</li>
  <li><strong>Dağıtık (distributed):</strong> Birden çok bilgisayarın ağ üzerinden tek bir sistem gibi birlikte çalışmasını sağlar.</li>
  <li><strong>Gömülü (embedded):</strong> Belirli bir cihazın içine yerleştirilmiş, o cihaza özel hafif işletim sistemi (akıllı TV, modem, IoT cihazları, çamaşır makinesi).</li>
  <li><strong>Mobil:</strong> Telefon/tablet için tasarlanmış sistemler: <strong>Android, iOS</strong>. Dokunmatik arayüz ve pil yönetimi ön plandadır.</li>
  <li><strong>Sunucu (server):</strong> Çok sayıda isteğe ve kullanıcıya hizmet vermek için optimize edilmiş sistemler: <strong>Linux Server, Windows Server</strong>. Genelde GUI yerine uzaktan/CLI yönetim öne çıkar.</li>
</ul>

<h3>Tür - Örnek Eşleştirmesi</h3>
<div class="table-wrap"><table>
<thead><tr><th>Tür</th><th>Tipik örnek / kullanım</th></tr></thead>
<tbody>
<tr><td>Mobil OS</td><td>Android, iOS</td></tr>
<tr><td>Sunucu OS</td><td>Linux Server, Windows Server</td></tr>
<tr><td>Gömülü OS</td><td>IoT cihazları, akıllı TV, modem yazılımları</td></tr>
<tr><td>Gerçek zamanlı OS</td><td>RTOS (tıbbi cihaz, otomotiv, endüstriyel kontrol)</td></tr>
<tr><td>Çok kullanıcılı OS</td><td>Linux/Unix sunucu ortamları</td></tr>
<tr><td>Dağıtık OS</td><td>Küme (cluster) halinde çalışan sistemler</td></tr>
</tbody>
</table></div>
<div class="callout info"><p><strong>Bilgi:</strong> Bir işletim sistemi birden çok kategoriye girebilir: örneğin bir Linux sunucusu hem "çok kullanıcılı" hem "sunucu" işletim sistemidir. Sınav genelde EN belirgin özelliği sorar.</p></div>

<h2>⚠️ Karıştırılan Kavramlar</h2>
<div class="table-wrap"><table>
<thead><tr><th>Karışan ikili</th><th>Ayrım</th></tr></thead>
<tbody>
<tr><td><strong>Gerçek zamanlı vs "hızlı" sistem</strong></td><td>RTOS'un derdi hız değil, <strong>zamanında garanti</strong>dir: görev belirlenen sürede KESİN biter</td></tr>
<tr><td><strong>Gömülü vs mobil</strong></td><td>Gömülü = tek amaçlı cihaz içine yerleşik; mobil = genel amaçlı telefon/tablet sistemi (uygulama kurulur)</td></tr>
<tr><td><strong>Dağıtık vs çok kullanıcılı</strong></td><td>Dağıtık = ÇOK bilgisayar tek sistem gibi; çok kullanıcılı = TEK sisteme çok kullanıcı bağlanır</td></tr>
<tr><td><strong>Sunucu OS vs masaüstü OS</strong></td><td>Sunucu sürümü çok istek/kullanıcıya ve kesintisiz çalışmaya optimize edilir; masaüstü tek kullanıcı deneyimine</td></tr>
</tbody>
</table></div>
<div class="callout warn"><p><strong>Tuzak:</strong> "Gerçek zamanlı sistem = çok hızlı sistem" tanımı eksik/yanlıştır; kritik olan <strong>belirlenen zaman sınırına garantili uyum</strong>dur. İkinci tuzak: Android'i "gömülü sistem" diye yutturmaya çalışabilirler — Android genel amaçlı bir <strong>mobil</strong> işletim sistemidir.</p></div>

<h2>🎯 Sınavda Nasıl Sorulur?</h2>
<ul>
  <li>"Hava yastığı gibi zaman-kritik sistemlerde hangi tür işletim sistemi kullanılır?" (RTOS)</li>
  <li>"Aşağıdakilerden hangisi mobil işletim sistemidir?" (Android/iOS)</li>
  <li>Tür-örnek eşleştirme: "Hangi eşleştirme yanlıştır?"</li>
  <li>"Birden çok bilgisayarın tek sistem gibi çalışmasını sağlayan tür hangisidir?" (dağıtık)</li>
  <li>"Aynı anda birden fazla kullanıcıya hizmet verebilen sistemlere ne denir?" (çok kullanıcılı)</li>
</ul>

<h2>✍️ Örnek Sorular</h2>
<div class="quiz-q" data-answer="d">
  <p class="q-text"><strong>Soru 1.</strong> Aşağıdakilerden hangisi bir mobil işletim sistemidir?</p>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) Windows Server</button>
    <button class="q-opt" data-opt="b">B) ext4</button>
    <button class="q-opt" data-opt="c">C) UEFI</button>
    <button class="q-opt" data-opt="d">D) Android</button>
  </div>
  <div class="q-explain"><strong>Cevap: D.</strong> Android (ve iOS) mobil işletim sistemidir. Windows Server sunucu OS'tir; ext4 bir dosya sistemidir, UEFI ise açılış firmware'idir — ikisi de işletim sistemi değildir.</div>
</div>

<div class="quiz-q" data-answer="c">
  <p class="q-text"><strong>Soru 2.</strong> Görevlerini kesin zaman sınırları içinde tamamlamak zorunda olan, tıbbi cihaz ve otomotiv sistemlerinde kullanılan işletim sistemi türü hangisidir?</p>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) Dağıtık işletim sistemi</button>
    <button class="q-opt" data-opt="b">B) Tek kullanıcılı işletim sistemi</button>
    <button class="q-opt" data-opt="c">C) Gerçek zamanlı işletim sistemi (RTOS)</button>
    <button class="q-opt" data-opt="d">D) Sunucu işletim sistemi</button>
  </div>
  <div class="q-explain"><strong>Cevap: C.</strong> Zaman garantisi = RTOS'un tanımı. Dağıtık sistemler çok makineyi birleştirir, sunucu sistemleri çok isteğe hizmet eder; ikisinde de "kesin zaman sınırı" zorunluluğu tanımlayıcı değildir.</div>
</div>

<div class="quiz-q" data-answer="a">
  <p class="q-text"><strong>Soru 3.</strong> Birden fazla bilgisayarın ağ üzerinden birlikte, kullanıcıya tek bir sistem gibi görünerek çalışmasını sağlayan işletim sistemi türü hangisidir?</p>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) Dağıtık işletim sistemi</button>
    <button class="q-opt" data-opt="b">B) Gömülü işletim sistemi</button>
    <button class="q-opt" data-opt="c">C) Mobil işletim sistemi</button>
    <button class="q-opt" data-opt="d">D) Tek kullanıcılı işletim sistemi</button>
  </div>
  <div class="q-explain"><strong>Cevap: A.</strong> "Çok bilgisayar, tek sistem görüntüsü" dağıtık sistemin tanımıdır. Gömülü tek cihaza özeldir; mobil ve tek kullanıcılı türlerin çoklu makine kavramıyla ilgisi yoktur.</div>
</div>

<div class="quiz-q" data-answer="b">
  <p class="q-text"><strong>Soru 4.</strong> Akıllı TV, modem ve IoT cihazlarının içinde çalışan, cihaza özel hafif işletim sistemlerine ne ad verilir?</p>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) Sunucu işletim sistemi</button>
    <button class="q-opt" data-opt="b">B) Gömülü işletim sistemi</button>
    <button class="q-opt" data-opt="c">C) Çok kullanıcılı işletim sistemi</button>
    <button class="q-opt" data-opt="d">D) Dağıtık işletim sistemi</button>
  </div>
  <div class="q-explain"><strong>Cevap: B.</strong> Cihazın içine yerleştirilmiş, tek amaca odaklı sistem = gömülü (embedded) OS. Sunucu, çok kullanıcılı ve dağıtık türler genel amaçlı/çok makineli senaryolardır.</div>
</div>

<div class="quiz-q" data-answer="c">
  <p class="q-text"><strong>Soru 5.</strong> (Tuzak) Gerçek zamanlı işletim sistemleri (RTOS) ile ilgili aşağıdakilerden hangisi <strong>doğrudur</strong>?</p>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) Tanımlayıcı özelliği, diğer tüm sistemlerden daha yüksek FPS sunmasıdır</button>
    <button class="q-opt" data-opt="b">B) Yalnızca cep telefonlarında kullanılır</button>
    <button class="q-opt" data-opt="c">C) Görevlerin belirlenen zaman sınırı içinde tamamlanmasını garanti etmeye odaklanır</button>
    <button class="q-opt" data-opt="d">D) Çok kullanıcılı ofis bilgisayarları için tasarlanmıştır</button>
  </div>
  <div class="q-explain"><strong>Cevap: C.</strong> RTOS'un özü zaman garantisidir; "en hızlı/en yüksek FPS" tanımı tuzaktır (A). Telefonlar mobil OS kullanır (B); ofis senaryosu masaüstü/çok kullanıcılı sistemlerin alanıdır (D).</div>
</div>

<h2>🔁 Mini Tekrar</h2>
<div class="table-wrap"><table>
<thead><tr><th>Tür</th><th>Anahtar cümle + örnek</th></tr></thead>
<tbody>
<tr><td>Tek kullanıcılı</td><td>Aynı anda tek kişi (eski MS-DOS)</td></tr>
<tr><td>Çok kullanıcılı</td><td>Aynı anda çok kişi (Linux/Unix sunucu)</td></tr>
<tr><td>Gerçek zamanlı (RTOS)</td><td>Zaman sınırı garantisi (tıbbi cihaz, otomotiv)</td></tr>
<tr><td>Dağıtık</td><td>Çok bilgisayar, tek sistem görüntüsü</td></tr>
<tr><td>Gömülü</td><td>Cihaz içine yerleşik, tek amaçlı (IoT, akıllı TV)</td></tr>
<tr><td>Mobil</td><td>Android, iOS</td></tr>
<tr><td>Sunucu</td><td>Linux Server, Windows Server</td></tr>
</tbody>
</table></div>
`
  },
  {
    module: 'isletim',
    id: 'os-09-boot',
    order: 9,
    title: 'Boot Süreci ve Sistem Başlatma',
    html: `
<h2>📖 Konu Anlatımı</h2>
<h3>Boot (Açılış) Nedir?</h3>
<p>Bilgisayara güç verildiği andan işletim sisteminin kullanılabilir hale gelmesine kadar geçen sürece <strong>boot (önyükleme) süreci</strong> denir. Sınavın en sevdiği şey bu sürecin <strong>SIRASI</strong>dır — ezberle:</p>
<pre><code class="lang-text">1) Guc verilir
2) BIOS / UEFI calisir (donanim kontrolu - POST)
3) Bootloader yuklenir
4) Kernel (cekirdek) baslar
5) Isletim sistemi acilir (surucular + baslangic programlari)</code></pre>
<div class="callout tip"><p><strong>Ezber hilesi:</strong> "Güç → BIOS → Bootloader → Kernel → OS". Baş harfleriyle: <strong>G-B-B-K-O</strong>. Sıralama sorusu gelirse aklındaki zinciri yaz, şıklarla karşılaştır.</p></div>

<h3>Adımların Görevleri</h3>
<ul>
  <li><strong>BIOS (Basic Input/Output System):</strong> Anakart üzerindeki klasik başlangıç yazılımı (firmware). Donanımları kontrol eder (POST testi) ve önyükleme aygıtını bulur.</li>
  <li><strong>UEFI:</strong> BIOS'un modern karşılığı. Daha hızlı açılış, büyük disk desteği, grafik arayüz ve güvenli önyükleme (Secure Boot) sunar. Yeni bilgisayarlar UEFI kullanır.</li>
  <li><strong>Bootloader (önyükleyici):</strong> İşletim sisteminin çekirdeğini diskten belleğe yükleyen küçük program (ör. Linux'ta GRUB, Windows'ta Windows Boot Manager). Birden çok OS kuruluysa seçim menüsünü de o gösterir.</li>
  <li><strong>Kernel (çekirdek):</strong> İşletim sisteminin kalbi. Belleğe yüklenince donanımın yönetimini devralır; süreç, bellek ve aygıt yönetimini başlatır.</li>
  <li><strong>Driver (sürücü) ve başlangıç programları:</strong> Kernel'den sonra donanım sürücüleri yüklenir, ardından otomatik başlayan programlar (startup) çalışır ve oturum açma ekranı gelir.</li>
</ul>

<h3>Özel Açılış Modları</h3>
<ul>
  <li><strong>Safe mode (güvenli mod):</strong> Sistem yalnızca <strong>en gerekli sürücü ve servislerle</strong> açılır. Sorunlu sürücü/program teşhisi için kullanılır.</li>
  <li><strong>Recovery mode (kurtarma modu):</strong> Sistem açılamadığında onarım araçları sunan özel ortam: sistem geri yükleme, disk onarımı, sıfırlama gibi.</li>
</ul>
<div class="callout info"><p><strong>Bilgi:</strong> "Bilgisayar yeni taktığım donanımdan sonra açılmıyor, en az bileşenle açıp sorunu bulmak istiyorum" → güvenli mod. "Sistem hiç açılmıyor, onarım/geri yükleme gerekiyor" → kurtarma modu.</p></div>

<h2>⚠️ Karıştırılan Kavramlar</h2>
<div class="table-wrap"><table>
<thead><tr><th>Karışan ikili</th><th>Ayrım</th></tr></thead>
<tbody>
<tr><td><strong>BIOS vs UEFI</strong></td><td>Aynı görevin eski ve modern hali; UEFI hızlıdır, büyük disk ve Secure Boot destekler</td></tr>
<tr><td><strong>BIOS vs Bootloader</strong></td><td>BIOS anakartta yaşar ve donanımı kontrol eder; bootloader diskte yaşar ve KERNEL'i yükler</td></tr>
<tr><td><strong>Bootloader vs Kernel</strong></td><td>Bootloader taşıyıcıdır (yükler ve görevi biter); kernel sistemin kalbidir (çalışmaya devam eder)</td></tr>
<tr><td><strong>Safe mode vs Recovery mode</strong></td><td>Safe mode = sistem AÇILIR ama minimum bileşenle (teşhis); recovery = onarım ortamı (geri yükleme/sıfırlama)</td></tr>
<tr><td><strong>Firmware vs işletim sistemi</strong></td><td>BIOS/UEFI firmware'dir, işletim sistemi değildir; OS'ten önce çalışır</td></tr>
</tbody>
</table></div>
<div class="callout warn"><p><strong>Tuzak:</strong> Sıralama sorularında "kernel, bootloader'dan önce başlar" diyen şıklar klasik tuzaktır — bootloader OLMADAN kernel belleğe yüklenemez. İkinci tuzak: "BIOS, işletim sisteminin bir parçasıdır" — hayır, BIOS anakart üzerindeki bağımsız firmware'dir.</p></div>

<h2>🎯 Sınavda Nasıl Sorulur?</h2>
<ul>
  <li><strong>Sıralama sorusu:</strong> "Açılış adımlarının doğru sırası hangisidir?" (en sık kalıp — G→BIOS→Bootloader→Kernel→OS)</li>
  <li>"Çekirdeği belleğe yükleyen yazılım hangisidir?" (bootloader)</li>
  <li>"BIOS'un modern karşılığı nedir?" (UEFI)</li>
  <li>"Sistemi yalnızca temel sürücülerle başlatan mod hangisidir?" (safe mode)</li>
  <li>"Güç verildikten sonra İLK çalışan yazılım hangisidir?" (BIOS/UEFI)</li>
</ul>

<h2>✍️ Örnek Sorular</h2>
<div class="quiz-q" data-answer="b">
  <p class="q-text"><strong>Soru 1.</strong> Bilgisayara güç verildikten sonra ilk çalışan ve donanımları kontrol eden yazılım hangisidir?</p>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) Kernel</button>
    <button class="q-opt" data-opt="b">B) BIOS/UEFI</button>
    <button class="q-opt" data-opt="c">C) Bootloader</button>
    <button class="q-opt" data-opt="d">D) Antivirüs</button>
  </div>
  <div class="q-explain"><strong>Cevap: B.</strong> İlk adım her zaman BIOS/UEFI'dir (donanım kontrolü/POST). Bootloader ondan sonra gelir, kernel daha da sonra; antivirüs ise OS açıldıktan sonra çalışan bir uygulamadır.</div>
</div>

<div class="quiz-q" data-answer="a">
  <p class="q-text"><strong>Soru 2.</strong> İşletim sistemi çekirdeğini (kernel) diskten belleğe yükleyen yazılıma ne ad verilir?</p>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) Bootloader</button>
    <button class="q-opt" data-opt="b">B) Driver</button>
    <button class="q-opt" data-opt="c">C) Startup programı</button>
    <button class="q-opt" data-opt="d">D) Swap</button>
  </div>
  <div class="q-explain"><strong>Cevap: A.</strong> Bootloader'ın tek işi budur (ör. GRUB). Driver donanım yönetir, startup programları OS açıldıktan sonra çalışır, swap bellekle ilgili disk alanıdır.</div>
</div>

<div class="quiz-q" data-answer="d">
  <p class="q-text"><strong>Soru 3.</strong> Aşağıdakilerden hangisi açılış (boot) adımlarının <strong>doğru</strong> sırasıdır?</p>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) Güç → Kernel → BIOS → Bootloader → OS</button>
    <button class="q-opt" data-opt="b">B) Güç → Bootloader → BIOS → Kernel → OS</button>
    <button class="q-opt" data-opt="c">C) Güç → BIOS → Kernel → Bootloader → OS</button>
    <button class="q-opt" data-opt="d">D) Güç → BIOS/UEFI → Bootloader → Kernel → OS</button>
  </div>
  <div class="q-explain"><strong>Cevap: D.</strong> Zincir: güç → BIOS/UEFI → bootloader → kernel → işletim sistemi. Diğer şıklar bootloader ile kernel'in veya BIOS'un yerini değiştirerek tuzak kurar; kernel, bootloader olmadan yüklenemez.</div>
</div>

<div class="quiz-q" data-answer="c">
  <p class="q-text"><strong>Soru 4.</strong> Yeni kurduğu bir sürücünün sistemi çökerttiğinden şüphelenen kullanıcı, bilgisayarı yalnızca en temel sürücü ve servislerle başlatmak istiyor. Hangi modu kullanmalıdır?</p>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) Hibernate (hazırda beklet)</button>
    <button class="q-opt" data-opt="b">B) UEFI ayar ekranı</button>
    <button class="q-opt" data-opt="c">C) Safe mode (güvenli mod)</button>
    <button class="q-opt" data-opt="d">D) Standart yeniden başlatma</button>
  </div>
  <div class="q-explain"><strong>Cevap: C.</strong> Minimum sürücüyle açılış = güvenli mod; sorunlu bileşen bu modda teşhis edilir. Hibernate güç tasarrufudur, UEFI ekranı firmware ayarıdır, normal başlatma sorunu yeniden tetikler.</div>
</div>

<div class="quiz-q" data-answer="d">
  <p class="q-text"><strong>Soru 5.</strong> (Tuzak) BIOS ve UEFI ile ilgili aşağıdakilerden hangisi <strong>yanlıştır</strong>?</p>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) UEFI, BIOS'un modern karşılığıdır</button>
    <button class="q-opt" data-opt="b">B) İkisi de işletim sisteminden önce çalışan firmware'dir</button>
    <button class="q-opt" data-opt="c">C) UEFI, Secure Boot gibi ek güvenlik özellikleri sunabilir</button>
    <button class="q-opt" data-opt="d">D) BIOS, işletim sistemi çekirdeğinin bir modülüdür</button>
  </div>
  <div class="q-explain"><strong>Cevap: D.</strong> BIOS, kernel'in parçası değildir; anakart üzerinde bağımsız bir firmware'dir ve OS'ten önce çalışır. A, B ve C doğru ifadelerdir.</div>
</div>

<h2>🔁 Mini Tekrar</h2>
<div class="table-wrap"><table>
<thead><tr><th>Kavram</th><th>Hatırla</th></tr></thead>
<tbody>
<tr><td>Boot sırası</td><td>Güç → BIOS/UEFI → Bootloader → Kernel → OS</td></tr>
<tr><td>BIOS/UEFI</td><td>İlk çalışan firmware; donanımı kontrol eder (UEFI = modern)</td></tr>
<tr><td>Bootloader</td><td>Kernel'i belleğe yükler (GRUB, Windows Boot Manager)</td></tr>
<tr><td>Kernel</td><td>OS'in çekirdeği; kaynak yönetimini devralır</td></tr>
<tr><td>Driver</td><td>Donanımın OS ile konuşmasını sağlar</td></tr>
<tr><td>Startup programları</td><td>OS açıldıktan sonra otomatik başlayanlar</td></tr>
<tr><td>Safe mode</td><td>Minimum sürücüyle açılış (teşhis)</td></tr>
<tr><td>Recovery mode</td><td>Onarım/geri yükleme ortamı</td></tr>
</tbody>
</table></div>
`
  },
  {
    module: 'isletim',
    id: 'os-10-sanallastirma',
    order: 10,
    title: 'Sanallaştırma ve Konteynerler',
    html: `
<h2>📖 Konu Anlatımı</h2>
<h3>Sanallaştırma Nedir?</h3>
<p><strong>Sanallaştırma</strong>, tek bir fiziksel bilgisayar üzerinde birden çok "sanal bilgisayar" çalıştırma tekniğidir. Böylece bir Windows makinede aynı anda Linux de çalıştırabilirsin.</p>
<ul>
  <li><strong>Sanal makine (VM):</strong> Yazılımla oluşturulmuş, kendi işletim sistemine sahip "bilgisayar içinde bilgisayar".</li>
  <li><strong>Host işletim sistemi:</strong> Fiziksel makinede çalışan ev sahibi sistem.</li>
  <li><strong>Guest işletim sistemi:</strong> Sanal makinenin içinde çalışan misafir sistem.</li>
  <li><strong>Hypervisor:</strong> Sanal makineleri oluşturan ve fiziksel kaynakları (CPU, RAM, disk) onlara paylaştıran yazılım katmanı (ör. VirtualBox, VMware, Hyper-V).</li>
</ul>
<pre><code class="lang-text">SANAL MAKINE MIMARISI            KONTEYNER MIMARISI
[Guest OS 1] [Guest OS 2]        [Uygulama1] [Uygulama2]
[  Hypervisor          ]         [  Docker (motor)     ]
[  Host OS             ]         [  Host OS cekirdegi  ]  &lt;-- paylasilir
[  Fiziksel donanim    ]         [  Fiziksel donanim   ]</code></pre>

<h3>Konteyner (Container) ve Docker</h3>
<p><strong>Konteyner</strong>, bir uygulamayı tüm bağımlılıklarıyla birlikte paketleyip izole çalıştıran hafif birimdir. Sanal makineden temel farkı: konteyner <strong>kendi işletim sistemini taşımaz</strong>, host'un <strong>çekirdeğini (kernel) paylaşır</strong>. Bu yüzden çok daha küçüktür ve saniyeler içinde başlar.</p>
<p><strong>Docker</strong>, konteyner oluşturmanın ve çalıştırmanın en yaygın aracıdır. Mantık: uygulamayı bir "imaj" olarak paketlersin; bu imaj her makinede aynı şekilde çalışır ("benim makinemde çalışıyordu" sorununu çözer).</p>

<h3>VM ve Konteyner Farkı (Sınavın Kalbi)</h3>
<ul>
  <li><strong>VM:</strong> Tam bir işletim sistemi (guest OS) çalıştırır → daha <strong>ağır</strong>, daha yavaş başlar, ama daha <strong>izole</strong>dir.</li>
  <li><strong>Container:</strong> Host'un çekirdeğini paylaşır → daha <strong>hafif</strong>, çok hızlı başlar, ama izolasyonu VM kadar güçlü değildir.</li>
</ul>
<div class="callout tip"><p><strong>Ezber hilesi:</strong> VM = müstakil ev (her şeyi kendine ait, kurması maliyetli); container = apartman dairesi (temel/altyapı ortak, taşınması hızlı). "Tam OS taşır" görürsen VM, "çekirdeği paylaşır" görürsen container işaretle.</p></div>
<div class="callout info"><p><strong>Bilgi:</strong> Aynı fiziksel sunucuda farklı işletim sistemleri (Windows + Linux) çalıştırmak istersen VM gerekir; konteynerler host çekirdeğini paylaştığı için bu esnekliği vermez. Buna karşılık tek sunucuda yüzlerce izole uygulama çalıştırmak için konteyner idealdir.</p></div>

<h2>⚠️ Karıştırılan Kavramlar</h2>
<div class="table-wrap"><table>
<thead><tr><th>Özellik</th><th>Sanal Makine (VM)</th><th>Konteyner</th></tr></thead>
<tbody>
<tr><td>İşletim sistemi</td><td>Kendi tam guest OS'i var</td><td>Host'un çekirdeğini paylaşır</td></tr>
<tr><td>Boyut</td><td>Büyük (GB'lar)</td><td>Küçük (MB'lar)</td></tr>
<tr><td>Başlama süresi</td><td>Dakikalar/onlarca saniye</td><td>Saniyeler</td></tr>
<tr><td>İzolasyon</td><td>Güçlü (tam ayrım)</td><td>Daha hafif (çekirdek ortak)</td></tr>
<tr><td>Yönetici yazılım</td><td>Hypervisor</td><td>Docker gibi konteyner motoru</td></tr>
<tr><td>Farklı OS çalıştırma</td><td>Evet (Windows üzerinde Linux)</td><td>Hayır (host çekirdeğine bağlı)</td></tr>
</tbody>
</table></div>
<div class="table-wrap"><table>
<thead><tr><th>Karışan ikili</th><th>Ayrım</th></tr></thead>
<tbody>
<tr><td><strong>Host vs Guest</strong></td><td>Host = fiziksel makinedeki ev sahibi OS; Guest = VM içindeki misafir OS</td></tr>
<tr><td><strong>Hypervisor vs Docker</strong></td><td>Hypervisor VM'leri yönetir; Docker konteynerleri yönetir — ikisi farklı katman</td></tr>
</tbody>
</table></div>
<div class="callout warn"><p><strong>Tuzak:</strong> "Konteyner, kendi işletim sistemini içinde taşır" ifadesi yanlıştır — bu VM'in tanımıdır; konteyner host çekirdeğini paylaşır. İkinci tuzak: "Docker bir sanal makine yazılımıdır" — hayır, Docker bir KONTEYNER platformudur. Üçüncü tuzak: host/guest ters yazılır; fizikselde çalışan HOST'tur.</p></div>

<h2>🎯 Sınavda Nasıl Sorulur?</h2>
<ul>
  <li>"VM ile container arasındaki temel fark nedir?" (tam OS vs çekirdek paylaşımı)</li>
  <li>"Sanal makineleri oluşturan ve kaynakları paylaştıran yazılım katmanı hangisidir?" (hypervisor)</li>
  <li>"Fiziksel makinede çalışan işletim sistemine ne ad verilir?" (host)</li>
  <li>"Hangisi konteynerlerin avantajıdır?" (hafiflik, hızlı başlama)</li>
  <li>Doğru/yanlış ifade soruları: "Docker bir hypervisor'dur" gibi tuzaklar</li>
</ul>

<h2>✍️ Örnek Sorular</h2>
<div class="quiz-q" data-answer="c">
  <p class="q-text"><strong>Soru 1.</strong> Fiziksel bir bilgisayar üzerinde sanal makineler oluşturan ve donanım kaynaklarını bu makinelere paylaştıran yazılım katmanına ne ad verilir?</p>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) Kernel</button>
    <button class="q-opt" data-opt="b">B) Bootloader</button>
    <button class="q-opt" data-opt="c">C) Hypervisor</button>
    <button class="q-opt" data-opt="d">D) Driver</button>
  </div>
  <div class="q-explain"><strong>Cevap: C.</strong> VM oluşturma ve kaynak paylaştırma hypervisor'un tanımıdır (VirtualBox, VMware). Kernel OS çekirdeği, bootloader açılış yükleyicisi, driver donanım yöneticisidir.</div>
</div>

<div class="quiz-q" data-answer="b">
  <p class="q-text"><strong>Soru 2.</strong> Sanal makinenin İÇİNDE çalışan işletim sistemine ne ad verilir?</p>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) Host işletim sistemi</button>
    <button class="q-opt" data-opt="b">B) Guest işletim sistemi</button>
    <button class="q-opt" data-opt="c">C) Gömülü işletim sistemi</button>
    <button class="q-opt" data-opt="d">D) Gerçek zamanlı işletim sistemi</button>
  </div>
  <div class="q-explain"><strong>Cevap: B.</strong> VM içindeki misafir sistem = guest; fiziksel makinedeki ev sahibi = host. Gömülü ve gerçek zamanlı OS'ler farklı kategorilerdir, sanallaştırmayla ilgili terimler değildir.</div>
</div>

<div class="quiz-q" data-answer="a">
  <p class="q-text"><strong>Soru 3.</strong> Konteynerlerin sanal makinelere göre daha hafif olmasının ve daha hızlı başlamasının temel nedeni nedir?</p>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) Kendi işletim sistemlerini taşımayıp host'un çekirdeğini paylaşmaları</button>
    <button class="q-opt" data-opt="b">B) Her konteynerin kendine ait fiziksel CPU'su olması</button>
    <button class="q-opt" data-opt="c">C) Konteynerlerin yalnızca SSD disklerde çalışabilmesi</button>
    <button class="q-opt" data-opt="d">D) Konteynerlerin hypervisor üzerinde tam guest OS çalıştırması</button>
  </div>
  <div class="q-explain"><strong>Cevap: A.</strong> Konteyner, host çekirdeğini paylaştığı için tam OS yükü taşımaz — hafifliğin kaynağı budur. B saçma bir donanım iddiasıdır; C diskle ilgisiz; D tam tersine VM'in tanımıdır.</div>
</div>

<div class="quiz-q" data-answer="d">
  <p class="q-text"><strong>Soru 4.</strong> Windows çalıştıran bir fiziksel makinede tam bir Linux sistemi (kendi çekirdeğiyle) çalıştırmak isteyen bir kullanıcı için en uygun çözüm hangisidir?</p>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) Linux uygulamasını doğrudan Windows'a kurmak</button>
    <button class="q-opt" data-opt="b">B) Windows'u güvenli modda başlatmak</button>
    <button class="q-opt" data-opt="c">C) Diski FAT32 olarak biçimlendirmek</button>
    <button class="q-opt" data-opt="d">D) Hypervisor ile bir sanal makine kurup içine Linux yüklemek</button>
  </div>
  <div class="q-explain"><strong>Cevap: D.</strong> Farklı bir OS'i kendi çekirdeğiyle çalıştırmak VM gerektirir (host: Windows, guest: Linux). A mümkün değildir, B açılış moduyla, C dosya sistemiyle ilgilidir — soruyla alakasızdır.</div>
</div>

<div class="quiz-q" data-answer="a">
  <p class="q-text"><strong>Soru 5.</strong> (Tuzak) Aşağıdaki ifadelerden hangisi <strong>doğrudur</strong>?</p>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) Sanal makineler konteynerlere göre daha güçlü izolasyon sağlar ama daha fazla kaynak tüketir</button>
    <button class="q-opt" data-opt="b">B) Docker, sanal makineler oluşturan bir hypervisor'dur</button>
    <button class="q-opt" data-opt="c">C) Konteynerler her zaman kendi guest işletim sistemlerini içerir</button>
    <button class="q-opt" data-opt="d">D) Host işletim sistemi, sanal makinenin içinde çalışan sistemdir</button>
  </div>
  <div class="q-explain"><strong>Cevap: A.</strong> VM = güçlü izolasyon + yüksek kaynak maliyeti; bu doğru dengedir. B yanlış: Docker konteyner platformudur, hypervisor değildir. C yanlış: konteyner guest OS taşımaz, çekirdeği paylaşır. D yanlış: VM içindeki sistem GUEST'tir.</div>
</div>

<h2>🔁 Mini Tekrar</h2>
<div class="table-wrap"><table>
<thead><tr><th>Kavram</th><th>Hatırla</th></tr></thead>
<tbody>
<tr><td>VM</td><td>Tam guest OS çalıştırır; ağır ama çok izole</td></tr>
<tr><td>Container</td><td>Host çekirdeğini paylaşır; hafif, saniyede başlar</td></tr>
<tr><td>Hypervisor</td><td>VM'leri oluşturur, kaynakları paylaştırır</td></tr>
<tr><td>Docker</td><td>En yaygın konteyner platformu (hypervisor DEĞİL)</td></tr>
<tr><td>Host OS</td><td>Fiziksel makinedeki ev sahibi sistem</td></tr>
<tr><td>Guest OS</td><td>VM içindeki misafir sistem</td></tr>
<tr><td>Farklı OS gerekli mi?</td><td>Evet ise VM; sadece izole uygulama ise container</td></tr>
</tbody>
</table></div>
`
  }
]);
