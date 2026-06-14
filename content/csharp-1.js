window.SINAV.register([
  {
    module: 'csharp',
    id: 'cs-01-dotnet',
    order: 1,
    title: 'C# ve .NET Temelleri',
    html: `
<h2>📖 Konu Anlatımı</h2>

<h3>C# Nedir?</h3>
<p><strong>C#</strong> ("si şarp" okunur), Microsoft tarafından geliştirilen <strong>nesne yönelimli</strong>, modern ve <strong>tip güvenli</strong> (type-safe) bir programlama dilidir. Masaüstü uygulamaları, web siteleri (ASP.NET), mobil uygulamalar ve oyunlar (Unity) gibi birçok alanda kullanılır. Şunu hiç unutma: <strong>C# bir dildir</strong>, tek başına çalışmaz; <strong>.NET platformu üzerinde</strong> çalışır.</p>

<h3>.NET Nedir?</h3>
<p><strong>.NET</strong>, Microsoft'un uygulama geliştirme ve çalıştırma <strong>platformudur</strong> (çatısıdır). İki temel parçadan oluşur:</p>
<ul>
  <li><strong>CLR (Common Language Runtime):</strong> Programı çalıştıran motor.</li>
  <li><strong>Sınıf kütüphanesi (BCL):</strong> Console, String, List gibi hazır sınıfların bulunduğu dev kütüphane.</li>
</ul>
<p>.NET sadece C# için değildir; <strong>VB.NET</strong> ve <strong>F#</strong> gibi diller de .NET üzerinde çalışır. Hepsi sonunda aynı ara dile (IL) derlenir.</p>

<h3>CLR (Common Language Runtime) Nedir?</h3>
<p>CLR, .NET programlarının <strong>çalışma zamanı (runtime) ortamıdır</strong>. Başlıca görevleri:</p>
<ul>
  <li>IL kodunu <strong>JIT derleyici</strong> aracılığıyla makine koduna çevirmek</li>
  <li><strong>Garbage Collection (çöp toplama):</strong> kullanılmayan nesneleri bellekten otomatik temizlemek</li>
  <li>Tip güvenliğini sağlamak ve exception (hata) yönetimini yürütmek</li>
</ul>

<h3>Derleme Mantığı: C# → IL → Makine Kodu</h3>
<p>C# kodu <strong>doğrudan makine koduna çevrilmez</strong>. Süreç iki aşamalıdır:</p>
<ol>
  <li>Yazdığın C# kodu, C# derleyicisi (Roslyn) tarafından <strong>IL</strong> (Intermediate Language — ara dil) koduna derlenir. Bu kod .exe veya .dll dosyasında saklanır.</li>
  <li>Program çalıştırıldığında CLR içindeki <strong>JIT (Just-In-Time) derleyici</strong>, IL kodunu o anda <strong>makine koduna</strong> çevirir. "Just-In-Time" = tam zamanında; bir metot ilk kez çağrıldığında çevrilir.</li>
</ol>
<div class="callout info"><p><strong>Neden iki aşama?</strong> IL platformdan bağımsızdır. Aynı IL kodu Windows, Linux veya macOS üzerinde, o sistemin CLR'ı tarafından kendi makine koduna çevrilerek çalıştırılabilir. Bu, .NET'in taşınabilirliğinin temelidir.</p></div>

<h3>Geliştirme Ortamları (IDE)</h3>
<ul>
  <li><strong>Visual Studio:</strong> Microsoft'un tam donanımlı IDE'si; C# için en yaygın tercih.</li>
  <li><strong>JetBrains Rider:</strong> Çapraz platform, güçlü bir ticari IDE.</li>
  <li><strong>VS Code:</strong> Hafif bir kod editörü; C# eklentisiyle .NET geliştirmede kullanılır.</li>
</ul>

<h3>Console Application ve Temel Program Yapısı</h3>
<p><strong>Console application</strong> (konsol uygulaması), görsel arayüzü olmayan, siyah komut ekranında çalışan en temel uygulama türüdür. Öğrenme sürecinde hep bununla çalışacaksın. Klasik yapı:</p>
<pre><code class="lang-csharp">using System;

namespace MerhabaDunya
{
    class Program
    {
        static void Main()
        {
            Console.WriteLine("Merhaba");
        }
    }
}</code></pre>
<p>Satır satır inceleyelim:</p>
<ul>
  <li><strong>using System;</strong> — System isim alanını projeye dahil eder. Console sınıfı burada yaşar; bu satır olmazsa Console yerine System.Console yazman gerekirdi.</li>
  <li><strong>namespace</strong> — sınıfları gruplamak için kullanılan <strong>isim alanıdır</strong>; isim çakışmalarını önler.</li>
  <li><strong>class Program</strong> — C#'ta tüm kod bir <strong>sınıfın içinde</strong> yazılmak zorundadır.</li>
  <li><strong>static void Main()</strong> — programın <strong>giriş noktasıdır</strong>. Program çalışınca ilk olarak Main metodu çağrılır. static olmalıdır; void olduğu için değer döndürmez.</li>
  <li><strong>Console.WriteLine("Merhaba");</strong> — ekrana yazı yazar ve <strong>satır sonu ekler</strong>. Her komut <strong>noktalı virgülle</strong> biter.</li>
</ul>
<p>Konsolun üç temel komutu:</p>
<div class="table-wrap"><table>
<thead><tr><th>Komut</th><th>Ne yapar?</th></tr></thead>
<tbody>
<tr><td><code>Console.WriteLine("...")</code></td><td>Yazar ve <strong>alt satıra geçer</strong></td></tr>
<tr><td><code>Console.Write("...")</code></td><td>Yazar ama <strong>aynı satırda kalır</strong></td></tr>
<tr><td><code>Console.ReadLine()</code></td><td>Kullanıcıdan <strong>string</strong> olarak girdi okur</td></tr>
</tbody>
</table></div>
<div class="callout info"><p><strong>Modern C# notu:</strong> Yeni sürümlerde "top-level statements" sayesinde tek satır Console.WriteLine("Merhaba"); de geçerli bir programdır (Main'i derleyici arka planda üretir). Ama sınavlar genellikle klasik yapıyı sorar; yukarıdaki iskeleti ezbere bil.</p></div>

<h2>⚠️ Karıştırılan Kavramlar</h2>
<div class="table-wrap"><table>
<thead><tr><th>Kavram</th><th>Nedir?</th><th>Aklında kalsın</th></tr></thead>
<tbody>
<tr><td><strong>C#</strong></td><td>Programlama dili</td><td>Kodu sen yazarsın</td></tr>
<tr><td><strong>.NET</strong></td><td>Platform / çatı</td><td>Dilin çalıştığı ortam</td></tr>
<tr><td><strong>CLR</strong></td><td>Çalışma zamanı motoru</td><td>Programı çalıştırır, belleği yönetir</td></tr>
<tr><td><strong>IL</strong></td><td>Ara dil</td><td>C# derleyicisinin ürettiği kod</td></tr>
<tr><td><strong>JIT</strong></td><td>Çalışma anı derleyicisi</td><td>IL → makine kodu çevirisi</td></tr>
</tbody>
</table></div>
<div class="callout warn"><p><strong>Tuzak:</strong> "C# derleyicisi makine kodu üretir" ifadesi <strong>yanlıştır</strong>. C# derleyicisi <strong>IL</strong> üretir; makine kodunu çalışma anında <strong>JIT</strong> üretir. Sınavda bu iki aşamayı birbirine karıştırtmaya çalışırlar.</p></div>
<div class="callout tip"><p><strong>Ezber hilesi:</strong> Zinciri tek cümleyle ezberle: "C# kodu → (derleyici) → IL → (JIT, çalışma anında) → makine kodu". CLR ise bu çevirinin yapıldığı evin kendisidir.</p></div>

<h2>🎯 Sınavda Nasıl Sorulur?</h2>
<ul>
  <li><strong>"C# kodu önce neye derlenir?"</strong> — cevap her zaman IL (ara dil); makine kodu çeldiricidir.</li>
  <li><strong>"CLR'ın / JIT'in görevi nedir?"</strong> — görev eşleştirme soruları; garbage collection'ın CLR'a ait olduğunu bil.</li>
  <li><strong>"Programın giriş noktası hangi metottur?"</strong> — Main metodu; static olduğu da sorulur.</li>
  <li><strong>"Bu kodun çıktısı nedir?"</strong> — Write ile WriteLine farkını test eden basit çıktı soruları.</li>
  <li><strong>"Hangisi bir IDE'dir / .NET dili değildir?"</strong> — kavram sınıflandırma soruları.</li>
</ul>

<h2>✍️ Örnek Sorular</h2>

<div class="quiz-q" data-answer="b">
  <p class="q-text"><strong>Soru 1.</strong> C# kaynak kodu derlendiğinde ilk olarak hangi koda çevrilir?</p>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) Doğrudan makine koduna</button>
    <button class="q-opt" data-opt="b">B) IL (Intermediate Language) koduna</button>
    <button class="q-opt" data-opt="c">C) Assembly diline</button>
    <button class="q-opt" data-opt="d">D) HTML koduna</button>
  </div>
  <div class="q-explain"><strong>Cevap: B.</strong> C# derleyicisi kodu önce IL'e (ara dile) çevirir; makine kodu çalışma anında JIT tarafından üretilir. A şıkkı klasik çeldiricidir — doğrudan makine koduna çeviri yoktur.</div>
</div>

<div class="quiz-q" data-answer="c">
  <p class="q-text"><strong>Soru 2.</strong> Bir C# konsol uygulamasında programın çalışmaya başladığı giriş noktası hangisidir?</p>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) Start() metodu</button>
    <button class="q-opt" data-opt="b">B) Program() metodu</button>
    <button class="q-opt" data-opt="c">C) Main() metodu</button>
    <button class="q-opt" data-opt="d">D) Run() metodu</button>
  </div>
  <div class="q-explain"><strong>Cevap: C.</strong> Program her zaman static Main() metodundan başlar. Start, Run gibi isimler başka platformlardan (ör. Unity, Java thread'leri) akılda kalan çeldiricilerdir.</div>
</div>

<div class="quiz-q" data-answer="a">
  <p class="q-text"><strong>Soru 3.</strong> Aşağıdakilerden hangisi CLR'ın görevlerinden <strong>değildir</strong>?</p>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) C# kaynak kodunu IL'e derlemek</button>
    <button class="q-opt" data-opt="b">B) Garbage Collection ile belleği yönetmek</button>
    <button class="q-opt" data-opt="c">C) IL kodunu JIT ile makine koduna çevirmek</button>
    <button class="q-opt" data-opt="d">D) Exception (hata) yönetimini sağlamak</button>
  </div>
  <div class="q-explain"><strong>Cevap: A.</strong> Kaynak kodu IL'e çevirmek <strong>C# derleyicisinin</strong> (Roslyn) işidir ve çalışma zamanından ÖNCE yapılır. CLR çalışma zamanında devreye girer: bellek yönetimi (B), JIT derleme (C) ve hata yönetimi (D) onun görevleridir.</div>
</div>

<div class="quiz-q" data-answer="d">
  <p class="q-text"><strong>Soru 4.</strong> JIT (Just-In-Time) derleyicinin görevi nedir?</p>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) C# kodundaki yazım hatalarını bulmak</button>
    <button class="q-opt" data-opt="b">B) Makine kodunu IL koduna çevirmek</button>
    <button class="q-opt" data-opt="c">C) Kodu derlemeden satır satır yorumlamak</button>
    <button class="q-opt" data-opt="d">D) IL kodunu çalışma anında makine koduna çevirmek</button>
  </div>
  <div class="q-explain"><strong>Cevap: D.</strong> JIT, program çalışırken IL'i makine koduna çevirir. B şıkkı yönü ters verir (klasik tuzak), C şıkkı yorumlayıcı (interpreter) tanımıdır — JIT yorumlamaz, derler.</div>
</div>

<div class="quiz-q" data-answer="b">
  <p class="q-text"><strong>Soru 5.</strong> Aşağıdaki kodun ekran çıktısı nedir?</p>
  <pre><code class="lang-csharp">Console.Write("A");
Console.Write("B");
Console.WriteLine("C");
Console.Write("D");</code></pre>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) A B C D (hepsi ayrı satırda)</button>
    <button class="q-opt" data-opt="b">B) İlk satırda ABC, ikinci satırda D</button>
    <button class="q-opt" data-opt="c">C) Tek satırda ABCD</button>
    <button class="q-opt" data-opt="d">D) İlk satırda AB, ikinci satırda CD</button>
  </div>
  <div class="q-explain"><strong>Cevap: B.</strong> Write aynı satırda devam eder, WriteLine yazdıktan SONRA alt satıra geçer. A, B ve C aynı satıra yazılır; C'den sonra satır atlanır ve D yeni satıra gelir. WriteLine'ın "yazmadan önce değil, yazdıktan sonra" satır atladığını unutma.</div>
</div>

<h2>🔁 Mini Tekrar</h2>
<div class="table-wrap"><table>
<thead><tr><th>Soru</th><th>Cevap</th></tr></thead>
<tbody>
<tr><td>C# nedir?</td><td>Microsoft'un nesne yönelimli, tip güvenli dili</td></tr>
<tr><td>.NET nedir?</td><td>Uygulama geliştirme/çalıştırma platformu</td></tr>
<tr><td>CLR nedir?</td><td>Çalışma zamanı motoru (GC + JIT + hata yönetimi)</td></tr>
<tr><td>Derleme zinciri</td><td>C# → IL → (JIT ile) makine kodu</td></tr>
<tr><td>Giriş noktası</td><td>static void Main()</td></tr>
<tr><td>Write / WriteLine</td><td>Aynı satır / yazdıktan sonra alt satır</td></tr>
<tr><td>ReadLine dönüş tipi</td><td>string</td></tr>
</tbody>
</table></div>
`
  },
  {
    module: 'csharp',
    id: 'cs-02-veri-tipleri',
    order: 2,
    title: 'Değişkenler ve Veri Tipleri',
    html: `
<h2>📖 Konu Anlatımı</h2>

<h3>Değişken Nedir?</h3>
<p>Değişken, bellekte veri saklamak için kullanılan isimlendirilmiş bir alandır. C# <strong>statik tipli</strong> bir dildir: her değişkenin tipi bellidir ve sonradan değişmez. Söz dizimi: <code>tip isim = değer;</code></p>
<pre><code class="lang-csharp">int age = 20;
double price = 15.5;
string name = "Baran";
bool isActive = true;
char grade = 'A';</code></pre>

<h3>Tam Sayı Tipleri</h3>
<div class="table-wrap"><table>
<thead><tr><th>Tip</th><th>Boyut</th><th>Aralık (yaklaşık)</th><th>Örnek</th></tr></thead>
<tbody>
<tr><td><code>byte</code></td><td>1 bayt</td><td>0 ... 255</td><td><code>byte b = 200;</code></td></tr>
<tr><td><code>short</code></td><td>2 bayt</td><td>-32.768 ... 32.767</td><td><code>short s = 1000;</code></td></tr>
<tr><td><code>int</code></td><td>4 bayt</td><td>±2,1 milyar</td><td><code>int x = 50000;</code></td></tr>
<tr><td><code>long</code></td><td>8 bayt</td><td>±9,2 kentilyon</td><td><code>long l = 10000000000;</code></td></tr>
</tbody>
</table></div>
<p>Günlük kullanımda tam sayılar için varsayılan tercih <strong>int</strong>'tir.</p>

<h3>Ondalıklı Tipler ve Harf Ekleri</h3>
<div class="table-wrap"><table>
<thead><tr><th>Tip</th><th>Boyut</th><th>Hassasiyet</th><th>Ek</th><th>Örnek</th></tr></thead>
<tbody>
<tr><td><code>float</code></td><td>4 bayt</td><td>~7 basamak</td><td><strong>f</strong></td><td><code>float f = 15.5f;</code></td></tr>
<tr><td><code>double</code></td><td>8 bayt</td><td>~15-16 basamak</td><td>yok (varsayılan)</td><td><code>double d = 15.5;</code></td></tr>
<tr><td><code>decimal</code></td><td>16 bayt</td><td>28-29 basamak</td><td><strong>m</strong></td><td><code>decimal para = 15.5m;</code></td></tr>
</tbody>
</table></div>
<ul>
  <li>Ondalıklı bir sayı yazdığında (15.5 gibi) C# bunu varsayılan olarak <strong>double</strong> kabul eder.</li>
  <li>Bu yüzden <code>float f = 15.5;</code> <strong>derleme hatasıdır</strong> — sonuna <strong>f</strong> eki gerekir: <code>15.5f</code></li>
  <li><code>decimal d = 15.5;</code> de hatadır — <strong>m</strong> eki gerekir: <code>15.5m</code></li>
  <li><strong>decimal</strong>, para ve finans hesapları için en uygun tiptir; ondalık hassasiyeti en yüksek olandır.</li>
</ul>

<h3>char ve string</h3>
<ul>
  <li><strong>char:</strong> <strong>TEK</strong> karakter tutar ve <strong>tek tırnak</strong> ile yazılır: <code>char harf = 'A';</code></li>
  <li><strong>string:</strong> metin (0 veya daha çok karakter) tutar ve <strong>çift tırnak</strong> ile yazılır: <code>string ad = "Ali";</code></li>
</ul>
<pre><code class="lang-csharp">char dogru = 'A';      // tek tırnak, tek karakter
string metin = "A";    // çift tırnak — bu da geçerli ama tipi string
// char yanlis = "A";  // HATA: çift tırnak char'a atanamaz
// char yanlis2 = 'AB'; // HATA: char'a iki karakter sığmaz</code></pre>
<p>String birleştirme ve interpolation:</p>
<pre><code class="lang-csharp">string ad = "Baran";
Console.WriteLine("Merhaba " + ad);     // birleştirme
Console.WriteLine($"Merhaba {ad}");     // string interpolation ($ işaretiyle)</code></pre>

<h3>bool</h3>
<p>Sadece iki değer alır: <code>true</code> veya <code>false</code>. C#'ta 1/0 sayıları bool yerine <strong>kullanılamaz</strong> (C dilinden farklı olarak).</p>
<pre><code class="lang-csharp">bool isActive = true;
bool gecti = false;</code></pre>

<h3>var — Tip Çıkarımı (Type Inference)</h3>
<p><code>var</code>, "tipsiz değişken" DEĞİLDİR. Derleyici, atanan değere bakarak tipi <strong>derleme zamanında (compile-time)</strong> kendisi belirler. Değişken yine statik tiplidir, dinamik değildir!</p>
<pre><code class="lang-csharp">var sayi = 10;        // derleyici: int
var oran = 3.14;      // derleyici: double
var ad = "Ali";       // derleyici: string

// sayi = "merhaba";  // HATA! sayi artık int, string atanamaz
// var bos;           // HATA! var ile tanımlarken ilk değer ZORUNLU</code></pre>
<p>İki kural: <strong>1)</strong> var ile tanımlarken başlangıç değeri zorunludur. <strong>2)</strong> Tip bir kez belirlendikten sonra değişmez.</p>

<h3>const — Sabitler</h3>
<p><code>const</code> ile tanımlanan değer <strong>derleme zamanı sabitidir</strong>: tanımlanırken değer verilmek zorundadır ve sonradan asla değiştirilemez.</p>
<pre><code class="lang-csharp">const double Pi = 3.14159;
// Pi = 3.15;   // DERLEME HATASI: sabit değiştirilemez</code></pre>

<h3>Nullable Tipler (int?)</h3>
<p>Değer tipleri (int, double, bool...) normalde <strong>null olamaz</strong>. Tipin sonuna <code>?</code> eklersen null alabilen (nullable) hale gelir:</p>
<pre><code class="lang-csharp">// int x = null;    // HATA: int null olamaz
int? yas = null;     // GEÇERLİ: nullable int
yas = 25;            // sonradan değer atanabilir</code></pre>

<h3>Value Type / Reference Type (Giriş)</h3>
<div class="table-wrap"><table>
<thead><tr><th></th><th>Value Type (Değer Tipi)</th><th>Reference Type (Referans Tipi)</th></tr></thead>
<tbody>
<tr><td><strong>Örnekler</strong></td><td>int, double, bool, char, struct</td><td>string, diziler, class nesneleri</td></tr>
<tr><td><strong>Ne saklar?</strong></td><td>Değerin kendisini</td><td>Verinin bellekteki adresini (referans)</td></tr>
<tr><td><strong>Kopyalama</strong></td><td>Değer kopyalanır (bağımsız kopya)</td><td>Referans kopyalanır (aynı veriyi gösterir)</td></tr>
<tr><td><strong>null olabilir mi?</strong></td><td>Hayır (ancak ? ile nullable yapılır)</td><td>Evet</td></tr>
</tbody>
</table></div>
<pre><code class="lang-csharp">int a = 5;
int b = a;     // b'ye 5 KOPYALANIR
b = 10;
Console.WriteLine(a);  // 5 — a etkilenmez, çünkü int değer tipidir</code></pre>

<h2>⚠️ Karıştırılan Kavramlar</h2>
<div class="table-wrap"><table>
<thead><tr><th>Karışan ikili</th><th>Fark</th></tr></thead>
<tbody>
<tr><td><strong>char / string</strong></td><td>char: tek karakter, <strong>tek tırnak</strong> 'A' — string: metin, <strong>çift tırnak</strong> "A"</td></tr>
<tr><td><strong>float / double / decimal</strong></td><td>float'a <strong>f</strong>, decimal'e <strong>m</strong> eki şart; eksiz ondalık sayı double'dır; para işlerinde decimal</td></tr>
<tr><td><strong>int / double</strong></td><td>int tam sayı (20), double ondalıklı (15.5); int'e 15.5 atanamaz</td></tr>
<tr><td><strong>var / dynamic</strong></td><td>var: tip <strong>derleme zamanında</strong> sabitlenir; dynamic: tip çalışma zamanında belirlenir. var dinamik DEĞİLDİR</td></tr>
<tr><td><strong>const / değişken</strong></td><td>const tanımda değer ister, sonradan asla değişmez</td></tr>
<tr><td><strong>int / int?</strong></td><td>int null alamaz; int? (nullable) null alabilir</td></tr>
</tbody>
</table></div>
<div class="callout warn"><p><strong>En klasik tuzaklar:</strong> 1) <code>float f = 15.5;</code> derlenmez — f eki unutulmuş. 2) <code>char c = "A";</code> derlenmez — çift tırnak string üretir. 3) <code>var x = 10; x = "abc";</code> derlenmez — var'ın tipi int olarak sabitlenmiştir. Sınav bu üçünü çok sever.</p></div>
<div class="callout tip"><p><strong>Ezber hilesi:</strong> "<strong>f</strong>loat → <strong>f</strong> eki, deci<strong>m</strong>al → <strong>m</strong> eki, double → eksiz (varsayılan)". Para deyince aklına hep <strong>decimal</strong> gelsin: "para = decimal".</p></div>

<h2>🎯 Sınavda Nasıl Sorulur?</h2>
<ul>
  <li><strong>"Hangi satır derleme hatası verir?"</strong> — f/m eki eksikliği, char'a çift tırnak, const'a yeniden atama.</li>
  <li><strong>"Hangi veri tipi en uygundur?"</strong> — para → decimal, tek karakter → char, evet/hayır → bool.</li>
  <li><strong>"var ile tanımlanan değişkenin tipi nedir?"</strong> — atanan değere bakıp tipi çıkarman istenir.</li>
  <li><strong>"Hangisi value type / reference type'tır?"</strong> — sınıflandırma soruları.</li>
  <li><strong>"Bu kodun çıktısı nedir?"</strong> — değer tipi kopyalama davranışını test eden sorular.</li>
</ul>

<h2>✍️ Örnek Sorular</h2>

<div class="quiz-q" data-answer="a">
  <p class="q-text"><strong>Soru 1.</strong> Aşağıdaki değişken tanımlarından hangisi <strong>doğrudur</strong>?</p>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) char harf = 'A';</button>
    <button class="q-opt" data-opt="b">B) char harf = "A";</button>
    <button class="q-opt" data-opt="c">C) string ad = 'Ali';</button>
    <button class="q-opt" data-opt="d">D) int sayi = 15.5;</button>
  </div>
  <div class="q-explain"><strong>Cevap: A.</strong> char tek tırnakla tek karakter alır. B'de çift tırnak string üretir, char'a atanamaz. C'de string'e tek tırnak kullanılmış (string çift tırnak ister). D'de int'e ondalıklı değer atanamaz.</div>
</div>

<div class="quiz-q" data-answer="d">
  <p class="q-text"><strong>Soru 2.</strong> bool tipindeki bir değişken hangi değerleri alabilir?</p>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) 0 ve 1</button>
    <button class="q-opt" data-opt="b">B) "evet" ve "hayır"</button>
    <button class="q-opt" data-opt="c">C) Herhangi bir tam sayı</button>
    <button class="q-opt" data-opt="d">D) Sadece true ve false</button>
  </div>
  <div class="q-explain"><strong>Cevap: D.</strong> C#'ta bool yalnızca true/false alır. C dilinden farklı olarak 0 ve 1 bool yerine geçmez (A şıkkı bu yüzden tuzaktır).</div>
</div>

<div class="quiz-q" data-answer="c">
  <p class="q-text"><strong>Soru 3.</strong> Aşağıdaki satırlardan hangisi <strong>derleme hatası</strong> verir?</p>
  <pre><code class="lang-csharp">double a = 15.5;      // 1. satır
decimal b = 15.5m;    // 2. satır
float c = 15.5;       // 3. satır
int d = 20;           // 4. satır</code></pre>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) 1. satır</button>
    <button class="q-opt" data-opt="b">B) 2. satır</button>
    <button class="q-opt" data-opt="c">C) 3. satır</button>
    <button class="q-opt" data-opt="d">D) 4. satır</button>
  </div>
  <div class="q-explain"><strong>Cevap: C.</strong> 15.5 literali varsayılan olarak double'dır ve double bir değer float değişkene otomatik atanamaz; 15.5f yazılmalıydı. 1. satır doğal (double varsayılan), 2. satırda m eki doğru kullanılmış, 4. satır normal int ataması.</div>
</div>

<div class="quiz-q" data-answer="b">
  <p class="q-text"><strong>Soru 4.</strong> Aşağıdaki kodda x değişkeninin tipi nedir?</p>
  <pre><code class="lang-csharp">var x = 10;</code></pre>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) var adında özel bir tip; çalışma anında belirlenir</button>
    <button class="q-opt" data-opt="b">B) int; derleme zamanında belirlenir</button>
    <button class="q-opt" data-opt="c">C) object; her tipe dönüşebilir</button>
    <button class="q-opt" data-opt="d">D) double; sayılar varsayılan olarak double'dır</button>
  </div>
  <div class="q-explain"><strong>Cevap: B.</strong> var, atanan değere bakarak tipi DERLEME zamanında çıkarır; 10 tam sayı olduğu için x kesin olarak int'tir. A şıkkı dynamic'in tanımıdır. D yanlış: yalnızca ONDALIKLI literaller (15.5) varsayılan double'dır, tam sayılar int'tir.</div>
</div>

<div class="quiz-q" data-answer="d">
  <p class="q-text"><strong>Soru 5.</strong> Aşağıdaki kod parçası için ne söylenebilir?</p>
  <pre><code class="lang-csharp">const int Limit = 100;
Limit = 200;
Console.WriteLine(Limit);</code></pre>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) Ekrana 200 yazar</button>
    <button class="q-opt" data-opt="b">B) Ekrana 100 yazar</button>
    <button class="q-opt" data-opt="c">C) Çalışma zamanında hata fırlatır</button>
    <button class="q-opt" data-opt="d">D) Derleme hatası verir, program hiç çalışmaz</button>
  </div>
  <div class="q-explain"><strong>Cevap: D.</strong> const ile tanımlanan sabite yeniden değer atamak DERLEME hatasıdır; kod hiç çalışmaya başlamaz. C şıkkı tuzaktır: bu hata çalışma zamanında değil, derleme aşamasında yakalanır.</div>
</div>

<div class="quiz-q" data-answer="a">
  <p class="q-text"><strong>Soru 6 (Tuzak).</strong> Aşağıdaki kodun çıktısı nedir?</p>
  <pre><code class="lang-csharp">int a = 5;
int b = a;
b = 10;
Console.WriteLine(a + " " + b);</code></pre>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) 5 10</button>
    <button class="q-opt" data-opt="b">B) 10 10</button>
    <button class="q-opt" data-opt="c">C) 5 5</button>
    <button class="q-opt" data-opt="d">D) 10 5</button>
  </div>
  <div class="q-explain"><strong>Cevap: A.</strong> int bir DEĞER tipidir: b = a satırında a'nın değeri (5) b'ye KOPYALANIR. Sonra b'yi 10 yapmak a'yı etkilemez. B şıkkı, referans tipi davranışını değer tipine uygulayanların düştüğü tuzaktır.</div>
</div>

<h2>🔁 Mini Tekrar</h2>
<div class="table-wrap"><table>
<thead><tr><th>Tip</th><th>Ne tutar?</th><th>Örnek</th><th>Not</th></tr></thead>
<tbody>
<tr><td>int</td><td>Tam sayı</td><td><code>int x = 20;</code></td><td>Varsayılan tam sayı tipi</td></tr>
<tr><td>double</td><td>Ondalıklı</td><td><code>double d = 15.5;</code></td><td>Eksiz ondalık literal double'dır</td></tr>
<tr><td>float</td><td>Ondalıklı (küçük)</td><td><code>float f = 15.5f;</code></td><td><strong>f eki şart</strong></td></tr>
<tr><td>decimal</td><td>Ondalıklı (hassas)</td><td><code>decimal p = 9.99m;</code></td><td><strong>m eki şart; para için</strong></td></tr>
<tr><td>char</td><td>Tek karakter</td><td><code>char c = 'A';</code></td><td><strong>Tek tırnak</strong></td></tr>
<tr><td>string</td><td>Metin</td><td><code>string s = "Ali";</code></td><td><strong>Çift tırnak</strong>, referans tipi</td></tr>
<tr><td>bool</td><td>true/false</td><td><code>bool b = true;</code></td><td>1/0 kullanılamaz</td></tr>
<tr><td>var</td><td>Çıkarımlı tip</td><td><code>var x = 10;</code></td><td>Compile-time, dinamik değil</td></tr>
<tr><td>const</td><td>Sabit</td><td><code>const int N = 5;</code></td><td>Değiştirilemez</td></tr>
<tr><td>int?</td><td>Null alabilen int</td><td><code>int? y = null;</code></td><td>Nullable tip</td></tr>
</tbody>
</table></div>
`
  },
  {
    module: 'csharp',
    id: 'cs-03-operatorler',
    order: 3,
    title: 'Operatörler',
    html: `
<h2>📖 Konu Anlatımı</h2>

<h3>Aritmetik Operatörler</h3>
<div class="table-wrap"><table>
<thead><tr><th>Operatör</th><th>Anlamı</th><th>Örnek</th><th>Sonuç</th></tr></thead>
<tbody>
<tr><td><code>+</code></td><td>Toplama</td><td><code>7 + 2</code></td><td>9</td></tr>
<tr><td><code>-</code></td><td>Çıkarma</td><td><code>7 - 2</code></td><td>5</td></tr>
<tr><td><code>*</code></td><td>Çarpma</td><td><code>7 * 2</code></td><td>14</td></tr>
<tr><td><code>/</code></td><td>Bölme</td><td><code>7 / 2</code></td><td><strong>3</strong> (dikkat!)</td></tr>
<tr><td><code>%</code></td><td>Mod (kalan)</td><td><code>7 % 2</code></td><td>1</td></tr>
</tbody>
</table></div>
<p><strong>EN ÖNEMLİ TUZAK — tam sayı bölmesi:</strong> İki tam sayının bölümü yine <strong>tam sayıdır</strong>; ondalık kısım ATILIR (yuvarlanmaz, kesilir).</p>
<pre><code class="lang-csharp">Console.WriteLine(7 / 2);     // 3   (3.5 DEĞİL — int / int = int)
Console.WriteLine(7.0 / 2);   // 3.5 (taraflardan biri double olunca sonuç double)
Console.WriteLine(7 % 2);     // 1   (kalan)
Console.WriteLine(10 % 5);    // 0   (tam bölünüyor)</code></pre>
<div class="callout tip"><p><strong>İpucu:</strong> % operatörü "kalan" demektir. Bir sayının çift olup olmadığını anlamanın klasik yolu: <code>sayi % 2 == 0</code> ise çifttir. Sınavda % gördüğünde bölme değil KALAN hesapla.</p></div>

<h3>Karşılaştırma Operatörleri</h3>
<p>Sonuçları her zaman <strong>bool</strong> (true/false) olur: <code>==</code> (eşit mi), <code>!=</code> (eşit değil mi), <code>&gt;</code>, <code>&lt;</code>, <code>&gt;=</code>, <code>&lt;=</code></p>
<pre><code class="lang-csharp">int a = 5, b = 8;
Console.WriteLine(a == b);   // False
Console.WriteLine(a != b);   // True
Console.WriteLine(a &lt;= 5);   // True</code></pre>

<h3>Mantıksal Operatörler</h3>
<div class="table-wrap"><table>
<thead><tr><th>Operatör</th><th>Anlamı</th><th>Kural</th></tr></thead>
<tbody>
<tr><td><code>&amp;&amp;</code></td><td>VE (AND)</td><td>İki taraf da true ise true</td></tr>
<tr><td><code>||</code></td><td>VEYA (OR)</td><td>En az biri true ise true</td></tr>
<tr><td><code>!</code></td><td>DEĞİL (NOT)</td><td>true'yu false, false'u true yapar</td></tr>
</tbody>
</table></div>
<pre><code class="lang-csharp">int yas = 20;
bool ehliyet = true;
Console.WriteLine(yas &gt;= 18 &amp;&amp; ehliyet);   // True (ikisi de doğru)
Console.WriteLine(yas &lt; 18 || ehliyet);    // True (biri doğru yeter)
Console.WriteLine(!ehliyet);               // False</code></pre>
<div class="callout info"><p><strong>Kısa devre (short-circuit):</strong> <code>&amp;&amp;</code> işleminde sol taraf false ise sağ taraf hiç değerlendirilmez; <code>||</code> işleminde sol taraf true ise sağ tarafa bakılmaz. Buna kısa devre değerlendirme denir.</p></div>

<h3>Atama ve Bileşik Atama Operatörleri</h3>
<pre><code class="lang-csharp">int x = 10;   // = : atama
x += 5;       // x = x + 5  → 15
x -= 3;       // x = x - 3  → 12
x *= 2;       // x = x * 2  → 24
x /= 4;       // x = x / 4  → 6
x %= 4;       // x = x % 4  → 2</code></pre>

<h3>Artırma ve Azaltma: ++ ve --</h3>
<p><code>i++</code> ve <code>++i</code> ikisi de i'yi 1 artırır; fark, <strong>ifade içinde kullanıldığında</strong> ortaya çıkar:</p>
<ul>
  <li><strong>i++ (postfix / sonek):</strong> ÖNCE mevcut değeri kullanır, SONRA artırır.</li>
  <li><strong>++i (prefix / önek):</strong> ÖNCE artırır, SONRA yeni değeri kullanır.</li>
</ul>
<pre><code class="lang-csharp">int i = 5;
Console.WriteLine(i++);   // 5 yazar (önce kullan, sonra artır)
Console.WriteLine(i);     // 6

int j = 5;
Console.WriteLine(++j);   // 6 yazar (önce artır, sonra kullan)
Console.WriteLine(j);     // 6</code></pre>

<h3>Ternary (Üçlü) Operatör: ? :</h3>
<p>Tek satırda if-else gibidir: <code>koşul ? doğruysaDeğer : yanlışsaDeğer</code></p>
<pre><code class="lang-csharp">int age = 20;
string result = age &gt;= 18 ? "Yetişkin" : "Çocuk";
Console.WriteLine(result);   // Yetişkin</code></pre>

<h3>Null-Coalescing Operatörü: ??</h3>
<p><code>a ?? b</code> şu demektir: "a null DEĞİLSE a'yı, null İSE b'yi kullan."</p>
<pre><code class="lang-csharp">string name = null;
string gosterilecek = name ?? "Misafir";
Console.WriteLine(gosterilecek);   // Misafir

int? sayi = 7;
Console.WriteLine(sayi ?? 0);      // 7 (null değil, kendi değeri kullanılır)</code></pre>

<h2>⚠️ Karıştırılan Kavramlar</h2>
<div class="table-wrap"><table>
<thead><tr><th>Karışan ikili</th><th>Fark</th></tr></thead>
<tbody>
<tr><td><strong>= / ==</strong></td><td><code>=</code> atama yapar, <code>==</code> eşitliği KARŞILAŞTIRIR ve bool döndürür</td></tr>
<tr><td><strong>7 / 2 ve 7.0 / 2</strong></td><td>int/int = int (3); taraflardan biri ondalıklıysa sonuç ondalıklı (3.5)</td></tr>
<tr><td><strong>i++ / ++i</strong></td><td>i++: önce kullan sonra artır; ++i: önce artır sonra kullan</td></tr>
<tr><td><strong>/ ve %</strong></td><td>/ bölümü verir, % bölmeden kalanı verir</td></tr>
<tr><td><strong>&amp;&amp; / ||</strong></td><td>&amp;&amp; ikisi de true ister; || biri true olsa yeter</td></tr>
<tr><td><strong>?: ve ??</strong></td><td>?: koşula göre seçer; ?? sadece null kontrolü yapar</td></tr>
</tbody>
</table></div>
<div class="callout warn"><p><strong>Tuzak:</strong> Sınavın bir numaralı klasiği <code>7 / 2 = 3</code> sorusudur. İki int'in bölümünde sonuç ASLA ondalıklı olmaz; küsurat kesilir (yuvarlama yapılmaz: 9 / 2 = 4'tür, 5 değil). Ondalıklı sonuç istiyorsan taraflardan en az biri double/float/decimal olmalı.</p></div>

<h2>🎯 Sınavda Nasıl Sorulur?</h2>
<ul>
  <li><strong>"Bu kodun çıktısı nedir?"</strong> — özellikle tam sayı bölmesi (7/2) ve mod (%) işlemleriyle.</li>
  <li><strong>"i++ ve ++i içeren ifadenin sonucu nedir?"</strong> — WriteLine içinde postfix/prefix farkı.</li>
  <li><strong>"Ternary ifadenin değeri nedir?"</strong> — koşulun true/false olduğuna göre hangi değerin seçildiği.</li>
  <li><strong>"?? operatörü ne döndürür?"</strong> — değişken null iken ve değilken davranış.</li>
  <li><strong>"İfadenin sonucu true mu false mu?"</strong> — &amp;&amp;, ||, ! kombinasyonları.</li>
</ul>

<h2>✍️ Örnek Sorular</h2>

<div class="quiz-q" data-answer="b">
  <p class="q-text"><strong>Soru 1.</strong> Aşağıdaki kodun çıktısı nedir?</p>
  <pre><code class="lang-csharp">Console.WriteLine(7 / 2);</code></pre>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) 3.5</button>
    <button class="q-opt" data-opt="b">B) 3</button>
    <button class="q-opt" data-opt="c">C) 4</button>
    <button class="q-opt" data-opt="d">D) Derleme hatası</button>
  </div>
  <div class="q-explain"><strong>Cevap: B.</strong> İki int'in bölümü int'tir: 7/2 = 3 (küsurat kesilir, yuvarlanmaz — bu yüzden C de yanlış). 3.5 (A) ancak 7.0/2 gibi bir ifadede çıkar.</div>
</div>

<div class="quiz-q" data-answer="a">
  <p class="q-text"><strong>Soru 2.</strong> Aşağıdaki kodun çıktısı nedir?</p>
  <pre><code class="lang-csharp">Console.WriteLine(7 % 2);
Console.WriteLine(10 % 5);</code></pre>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) 1 ve 0</button>
    <button class="q-opt" data-opt="b">B) 3 ve 2</button>
    <button class="q-opt" data-opt="c">C) 3.5 ve 2</button>
    <button class="q-opt" data-opt="d">D) 1 ve 5</button>
  </div>
  <div class="q-explain"><strong>Cevap: A.</strong> % kalanı verir: 7'nin 2'ye bölümünden kalan 1; 10, 5'e tam bölündüğü için kalan 0. B şıkkı %'yi bölme sananlar için tuzaktır.</div>
</div>

<div class="quiz-q" data-answer="c">
  <p class="q-text"><strong>Soru 3.</strong> Aşağıdaki kodun çıktısı nedir?</p>
  <pre><code class="lang-csharp">int i = 5;
Console.WriteLine(i++);
Console.WriteLine(i);</code></pre>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) 6 ve 6</button>
    <button class="q-opt" data-opt="b">B) 5 ve 5</button>
    <button class="q-opt" data-opt="c">C) 5 ve 6</button>
    <button class="q-opt" data-opt="d">D) 6 ve 5</button>
  </div>
  <div class="q-explain"><strong>Cevap: C.</strong> i++ postfix'tir: WriteLine önce MEVCUT değeri (5) yazar, artırma sonra gerçekleşir. İkinci satırda i artık 6'dır. ++i olsaydı çıktı 6 ve 6 (A şıkkı) olurdu.</div>
</div>

<div class="quiz-q" data-answer="d">
  <p class="q-text"><strong>Soru 4.</strong> Aşağıdaki kodun çıktısı nedir?</p>
  <pre><code class="lang-csharp">int age = 16;
string result = age &gt;= 18 ? "Yetişkin" : "Çocuk";
Console.WriteLine(result);</code></pre>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) Yetişkin</button>
    <button class="q-opt" data-opt="b">B) true</button>
    <button class="q-opt" data-opt="c">C) 16</button>
    <button class="q-opt" data-opt="d">D) Çocuk</button>
  </div>
  <div class="q-explain"><strong>Cevap: D.</strong> Koşul (16 &gt;= 18) false olduğu için ternary operatör iki nokta üst üste işaretinin SAĞINDAKİ değeri seçer: "Çocuk". Koşul true olsaydı "Yetişkin" seçilirdi.</div>
</div>

<div class="quiz-q" data-answer="a">
  <p class="q-text"><strong>Soru 5.</strong> Aşağıdaki kodun çıktısı nedir?</p>
  <pre><code class="lang-csharp">string name = null;
Console.WriteLine(name ?? "Misafir");
name = "Ayşe";
Console.WriteLine(name ?? "Misafir");</code></pre>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) Misafir ve Ayşe</button>
    <button class="q-opt" data-opt="b">B) Misafir ve Misafir</button>
    <button class="q-opt" data-opt="c">C) Ayşe ve Ayşe</button>
    <button class="q-opt" data-opt="d">D) Hata verir, null yazdırılamaz</button>
  </div>
  <div class="q-explain"><strong>Cevap: A.</strong> ?? operatörü sol taraf null ise sağdaki yedek değeri döndürür. İlk yazdırmada name null olduğundan "Misafir", ikinci yazdırmada name dolu olduğundan kendi değeri "Ayşe" yazılır.</div>
</div>

<div class="quiz-q" data-answer="c">
  <p class="q-text"><strong>Soru 6 (Tuzak).</strong> Aşağıdaki kodun sonunda x'in değeri nedir?</p>
  <pre><code class="lang-csharp">int x = 10;
x += 5;
x *= 2;
Console.WriteLine(x);</code></pre>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) 20</button>
    <button class="q-opt" data-opt="b">B) 25</button>
    <button class="q-opt" data-opt="c">C) 30</button>
    <button class="q-opt" data-opt="d">D) 15</button>
  </div>
  <div class="q-explain"><strong>Cevap: C.</strong> Adım adım: x = 10 → x += 5 ile x = 15 → x *= 2 ile x = 30. İşlemler sırayla, üst üste uygulanır. A şıkkı (10*2) ilk atamayı atlayanlar, D şıkkı (10+5) çarpmayı unutanlar için tuzaktır.</div>
</div>

<h2>🔁 Mini Tekrar</h2>
<div class="table-wrap"><table>
<thead><tr><th>Operatör</th><th>Görevi</th><th>Kritik nokta</th></tr></thead>
<tbody>
<tr><td><code>/</code></td><td>Bölme</td><td>int / int = int → 7/2 = 3</td></tr>
<tr><td><code>%</code></td><td>Kalan (mod)</td><td>7 % 2 = 1; çiftlik testi: x % 2 == 0</td></tr>
<tr><td><code>==</code></td><td>Eşitlik karşılaştırma</td><td>= atamadır, karıştırma!</td></tr>
<tr><td><code>&amp;&amp;</code> / <code>||</code></td><td>VE / VEYA</td><td>Kısa devre yapar</td></tr>
<tr><td><code>i++</code> / <code>++i</code></td><td>1 artırma</td><td>Postfix: önce kullan; prefix: önce artır</td></tr>
<tr><td><code>?:</code></td><td>Tek satır if-else</td><td>koşul ? doğru : yanlış</td></tr>
<tr><td><code>??</code></td><td>Null yedeği</td><td>Sol null ise sağı kullan</td></tr>
<tr><td><code>+=</code> vb.</td><td>Bileşik atama</td><td>x += 5 → x = x + 5</td></tr>
</tbody>
</table></div>
`
  },
  {
    module: 'csharp',
    id: 'cs-04-kosullar',
    order: 4,
    title: 'Koşul Yapıları',
    html: `
<h2>📖 Konu Anlatımı</h2>

<h3>if / else if / else</h3>
<p>Koşul yapıları, programın belirli koşullara göre farklı yollar izlemesini sağlar. <code>if</code> parantezinin içine <strong>mutlaka bool üreten bir ifade</strong> yazılır:</p>
<pre><code class="lang-csharp">int score = 65;

if (score &gt;= 50)
{
    Console.WriteLine("Geçti");
}
else
{
    Console.WriteLine("Kaldı");
}</code></pre>
<p>Birden çok koşul için <code>else if</code> zinciri kurulur. <strong>Kritik kural:</strong> Zincirde yukarıdan aşağı bakılır, İLK doğru olan blok çalışır ve <strong>gerisi atlanır</strong> — birden fazla blok çalışmaz:</p>
<pre><code class="lang-csharp">int score = 85;

if (score &gt;= 90)
    Console.WriteLine("AA");
else if (score &gt;= 80)
    Console.WriteLine("BA");      // 85 buraya girer, alttakilere bakılmaz
else if (score &gt;= 70)
    Console.WriteLine("BB");
else
    Console.WriteLine("Kaldı");</code></pre>
<div class="callout info"><p><strong>Not:</strong> Blokta tek komut varsa süslü parantezler isteğe bağlıdır; ama birden çok komut varsa süslü parantez ZORUNLUDUR. Alışkanlık olarak hep parantez kullanmak hatayı önler.</p></div>

<h3>switch-case</h3>
<p>Bir değişkenin <strong>belirli değerlere eşitliğini</strong> kontrol etmek için switch kullanılır. Her dolu case'in sonunda <code>break</code> <strong>zorunludur</strong>; hiçbir case uymadığında <code>default</code> bloğu çalışır:</p>
<pre><code class="lang-csharp">int gun = 2;

switch (gun)
{
    case 1:
        Console.WriteLine("Pazartesi");
        break;
    case 2:
        Console.WriteLine("Salı");
        break;
    case 3:
        Console.WriteLine("Çarşamba");
        break;
    default:
        Console.WriteLine("Bilinmeyen gün");
        break;
}</code></pre>
<div class="callout warn"><p><strong>Sınav noktası:</strong> C ve Java'dan farklı olarak C#'ta dolu bir case'te break (ya da return/goto) unutulursa kod <strong>çalışıp alttaki case'e "düşmez" — DERLEME HATASI olur</strong>. C#'ta örtük fall-through yoktur. Tek istisna: gövdesi tamamen BOŞ case'ler üst üste yazılıp ortak gövdeyi paylaşabilir.</p></div>
<pre><code class="lang-csharp">switch (gun)
{
    case 6:
    case 7:                          // boş case'ler birleşebilir
        Console.WriteLine("Hafta sonu");
        break;
    default:
        Console.WriteLine("Hafta içi");
        break;
}</code></pre>

<h3>switch Expression (Modern Söz Dizimi)</h3>
<p>C# 8 ile gelen switch expression, switch'i bir <strong>değer üreten ifadeye</strong> çevirir. break gerekmez; <code>_</code> (discard) default görevi görür:</p>
<pre><code class="lang-csharp">int gun = 2;

string ad = gun switch
{
    1 =&gt; "Pazartesi",
    2 =&gt; "Salı",
    3 =&gt; "Çarşamba",
    _ =&gt; "Bilinmeyen"
};

Console.WriteLine(ad);   // Salı</code></pre>

<h3>= ile == Tuzağı</h3>
<p>if içinde <code>==</code> yerine yanlışlıkla <code>=</code> yazmak klasik hatadır. C#'ta bu çoğu zaman <strong>derleme hatası</strong> verir, çünkü atamanın sonucu bool değildir:</p>
<pre><code class="lang-csharp">int x = 5;
// if (x = 5) { }      // DERLEME HATASI: int, bool'a dönüştürülemez
if (x == 5) { }        // doğrusu bu

bool b = false;
if (b = true) { }      // DİKKAT: bu DERLENİR! b'ye true atanır ve blok çalışır</code></pre>

<h2>⚠️ Karıştırılan Kavramlar</h2>
<div class="table-wrap"><table>
<thead><tr><th></th><th>if / else if</th><th>switch</th></tr></thead>
<tbody>
<tr><td><strong>Ne için ideal?</strong></td><td>Aralık ve karmaşık koşullar (score &gt;= 50)</td><td>Bir değişkenin sabit değerlere eşitliği</td></tr>
<tr><td><strong>break gerekir mi?</strong></td><td>Hayır</td><td>Dolu case'lerde evet (yoksa derleme hatası)</td></tr>
<tr><td><strong>Varsayılan durum</strong></td><td>else bloğu</td><td>default bloğu</td></tr>
<tr><td><strong>Kaç blok çalışır?</strong></td><td>Zincirde ilk doğru olan tek blok</td><td>Eşleşen tek case (veya default)</td></tr>
</tbody>
</table></div>
<div class="callout warn"><p><strong>Tuzaklar:</strong> 1) <code>if (x = 5)</code> int için derleme hatasıdır ama <code>if (b = true)</code> bool değişkende DERLENİR — sınav bu ayrımı sorabilir. 2) "C#'ta break unutulursa alttaki case de çalışır" ifadesi YANLIŞTIR; C#'ta bu derleme hatasıdır (C/Java'da fall-through olur, C#'ta olmaz). 3) else if zincirinde koşulu sağlayan İLK blok çalışır; 85 puan hem &gt;=80 hem &gt;=70 olsa da yalnızca &gt;=80 bloğu çalışır.</p></div>
<div class="callout tip"><p><strong>İpucu:</strong> else if zinciri sorularında değeri alıp yukarıdan aşağı tek tek koşullara sok; İLK true gördüğün yerde dur. Sonraki koşulların da doğru olması sonucu değiştirmez.</p></div>

<h2>🎯 Sınavda Nasıl Sorulur?</h2>
<ul>
  <li><strong>"Bu kodun çıktısı nedir?"</strong> — else if zincirine bir değer sokulur, hangi bloğun çalıştığı sorulur.</li>
  <li><strong>"Hangi satır derleme hatası verir?"</strong> — switch'te eksik break veya if içinde = kullanımı.</li>
  <li><strong>"switch'te hiçbir case uymazsa ne olur?"</strong> — default bloğu çalışır.</li>
  <li><strong>"Kaç blok çalışır?"</strong> — else if zincirinde tek blok çalıştığını test eden sorular.</li>
  <li><strong>"switch expression'ın değeri nedir?"</strong> — modern söz dizimiyle değer eşleştirme.</li>
</ul>

<h2>✍️ Örnek Sorular</h2>

<div class="quiz-q" data-answer="c">
  <p class="q-text"><strong>Soru 1.</strong> Aşağıdaki kodun çıktısı nedir?</p>
  <pre><code class="lang-csharp">int score = 45;

if (score &gt;= 50)
{
    Console.WriteLine("Geçti");
}
else
{
    Console.WriteLine("Kaldı");
}</code></pre>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) Geçti</button>
    <button class="q-opt" data-opt="b">B) Hiçbir şey yazmaz</button>
    <button class="q-opt" data-opt="c">C) Kaldı</button>
    <button class="q-opt" data-opt="d">D) Derleme hatası</button>
  </div>
  <div class="q-explain"><strong>Cevap: C.</strong> 45 &gt;= 50 koşulu false olduğundan if bloğu atlanır ve else bloğu çalışır. else varken "hiçbir şey yazmaz" (B) mümkün değildir; iki yoldan biri mutlaka çalışır.</div>
</div>

<div class="quiz-q" data-answer="b">
  <p class="q-text"><strong>Soru 2.</strong> C#'ta switch yapısında dolu bir case bloğunun sonuna break yazılmazsa ne olur?</p>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) Alttaki case de çalışır (fall-through)</button>
    <button class="q-opt" data-opt="b">B) Derleme hatası oluşur</button>
    <button class="q-opt" data-opt="c">C) Sadece uyarı verir, program çalışır</button>
    <button class="q-opt" data-opt="d">D) default bloğu çalışır</button>
  </div>
  <div class="q-explain"><strong>Cevap: B.</strong> C#'ta örtük fall-through yoktur; dolu case break (veya return/goto) ile bitmek ZORUNDADIR, yoksa kod derlenmez. A şıkkı C ve Java'nın davranışıdır — C#'a sorulduğunda tuzaktır.</div>
</div>

<div class="quiz-q" data-answer="a">
  <p class="q-text"><strong>Soru 3.</strong> Aşağıdaki kodun çıktısı nedir?</p>
  <pre><code class="lang-csharp">int score = 85;

if (score &gt;= 90)
    Console.WriteLine("AA");
else if (score &gt;= 80)
    Console.WriteLine("BA");
else if (score &gt;= 70)
    Console.WriteLine("BB");
else
    Console.WriteLine("Kaldı");</code></pre>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) BA</button>
    <button class="q-opt" data-opt="b">B) BA ve BB</button>
    <button class="q-opt" data-opt="c">C) AA</button>
    <button class="q-opt" data-opt="d">D) BB</button>
  </div>
  <div class="q-explain"><strong>Cevap: A.</strong> 85 için ilk koşul (&gt;=90) false, ikinci koşul (&gt;=80) true → "BA" yazılır ve zincirin GERİSİ ATLANIR. 85 aynı zamanda &gt;=70 olsa da o blok çalışmaz; bu yüzden B tuzaktır.</div>
</div>

<div class="quiz-q" data-answer="d">
  <p class="q-text"><strong>Soru 4.</strong> Aşağıdaki kod parçası için ne söylenebilir?</p>
  <pre><code class="lang-csharp">int x = 5;

if (x = 10)
{
    Console.WriteLine("Eşit");
}</code></pre>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) Ekrana "Eşit" yazar</button>
    <button class="q-opt" data-opt="b">B) Hiçbir şey yazmaz, sorunsuz çalışır</button>
    <button class="q-opt" data-opt="c">C) Çalışma zamanında hata fırlatır</button>
    <button class="q-opt" data-opt="d">D) Derleme hatası verir</button>
  </div>
  <div class="q-explain"><strong>Cevap: D.</strong> if parantezi bool ister; x = 10 bir ATAMADIR ve sonucu int'tir. C# int'i bool'a çevirmediği için kod derlenmez. Doğrusu x == 10 olmalıydı. (Dikkat: değişken bool olsaydı, örn. if (b = true), kod derlenirdi — o ayrı bir tuzaktır.)</div>
</div>

<div class="quiz-q" data-answer="b">
  <p class="q-text"><strong>Soru 5 (Tuzak).</strong> Aşağıdaki kodun çıktısı nedir?</p>
  <pre><code class="lang-csharp">int gun = 9;

string sonuc = gun switch
{
    1 =&gt; "Pazartesi",
    2 =&gt; "Salı",
    _ =&gt; "Bilinmeyen"
};

Console.WriteLine(sonuc);</code></pre>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) Derleme hatası: break eksik</button>
    <button class="q-opt" data-opt="b">B) Bilinmeyen</button>
    <button class="q-opt" data-opt="c">C) Hiçbir şey yazmaz</button>
    <button class="q-opt" data-opt="d">D) Salı</button>
  </div>
  <div class="q-explain"><strong>Cevap: B.</strong> Bu bir switch EXPRESSION'dır: break gerektirmez (A bu yüzden tuzak). 9 değeri 1'e ve 2'ye uymadığından _ (discard) deseni eşleşir ve "Bilinmeyen" değeri üretilir.</div>
</div>

<h2>🔁 Mini Tekrar</h2>
<div class="table-wrap"><table>
<thead><tr><th>Yapı</th><th>Kritik kural</th></tr></thead>
<tbody>
<tr><td>if (koşul)</td><td>Parantez içi mutlaka bool olmalı; = değil == kullan</td></tr>
<tr><td>else if zinciri</td><td>İlk doğru blok çalışır, gerisi atlanır</td></tr>
<tr><td>else</td><td>Hiçbir koşul tutmazsa çalışır</td></tr>
<tr><td>switch-case</td><td>Dolu case'te break zorunlu (yoksa DERLEME hatası)</td></tr>
<tr><td>default</td><td>Hiçbir case uymadığında çalışır</td></tr>
<tr><td>switch expression</td><td>Değer üretir; break yok; _ = varsayılan desen</td></tr>
</tbody>
</table></div>
`
  },
  {
    module: 'csharp',
    id: 'cs-05-donguler',
    order: 5,
    title: 'Döngüler',
    html: `
<h2>📖 Konu Anlatımı</h2>

<h3>for Döngüsü</h3>
<p>Tekrar sayısı belli olan işlerde kullanılır. Üç bölümü vardır: <strong>başlangıç; koşul; artırma</strong></p>
<pre><code class="lang-csharp">for (int i = 0; i &lt; 5; i++)
{
    Console.Write(i + " ");
}
// Çıktı: 0 1 2 3 4   (5 kez çalışır)</code></pre>
<p>Akış şöyle işler: başlangıç bir kez çalışır → koşul kontrol edilir → true ise gövde çalışır → artırma yapılır → tekrar koşula dönülür. Koşul false olduğu anda döngü biter.</p>
<div class="callout tip"><p><strong>Sayaç hesabı:</strong> <code>for (int i = 0; i &lt; 5; i++)</code> tam <strong>5 kez</strong> çalışır (i = 0,1,2,3,4). <code>i &lt;= 5</code> olsaydı <strong>6 kez</strong> çalışırdı (0'dan 5'e). Döngü bittiğinde sayaç, koşulu BOZAN ilk değerdedir (burada 5).</p></div>

<h3>while Döngüsü</h3>
<p>Tekrar sayısı belli olmayan, "koşul sağlandığı sürece" devam eden işlerde kullanılır. Koşul <strong>başta</strong> kontrol edilir — koşul daha en başta false ise gövde <strong>hiç çalışmaz</strong>:</p>
<pre><code class="lang-csharp">int i = 0;
while (i &lt; 3)
{
    Console.Write(i + " ");
    i++;
}
// Çıktı: 0 1 2</code></pre>

<h3>do-while Döngüsü</h3>
<p>while'ın tersine koşul <strong>sonda</strong> kontrol edilir. Bu yüzden gövde, koşul ne olursa olsun <strong>en az 1 kez çalışır</strong>:</p>
<pre><code class="lang-csharp">int i = 100;
do
{
    Console.WriteLine("Çalıştım! i = " + i);
    i++;
} while (i &lt; 5);
// Çıktı: Çalıştım! i = 100   (koşul false olsa bile 1 kez çalıştı)</code></pre>

<h3>foreach Döngüsü</h3>
<p>Bir koleksiyonun (dizi, List...) <strong>tüm elemanlarını sırayla gezmek</strong> için kullanılır. Sayaç ve indeks yoktur; her turda sıradaki eleman değişkene kopyalanır:</p>
<pre><code class="lang-csharp">int[] numbers = { 10, 20, 30 };

foreach (var item in numbers)
{
    Console.Write(item + " ");
}
// Çıktı: 10 20 30</code></pre>
<div class="callout info"><p><strong>Not:</strong> foreach değişkeni salt okunurdur; döngü içinde <code>item = 99;</code> yazarak koleksiyonun elemanını değiştiremezsin (derleme hatası). Elemanları değiştirmek gerekiyorsa indeksli for kullanılır.</p></div>

<h3>break ve continue</h3>
<ul>
  <li><strong>break:</strong> Döngüyü <strong>tamamen bitirir</strong>; akış döngüden sonraki satıra geçer.</li>
  <li><strong>continue:</strong> Sadece <strong>o turu atlar</strong>; döngü bir sonraki turdan devam eder.</li>
</ul>
<pre><code class="lang-csharp">for (int i = 1; i &lt;= 5; i++)
{
    if (i == 3) break;
    Console.Write(i + " ");
}
// Çıktı: 1 2          (3'te döngü tamamen bitti)

for (int i = 1; i &lt;= 5; i++)
{
    if (i == 3) continue;
    Console.Write(i + " ");
}
// Çıktı: 1 2 4 5      (sadece 3. tur atlandı)</code></pre>

<h3>Sonsuz Döngü</h3>
<p>Koşulu hiç false olmayan döngü sonsuzdur. Bilerek kullanılacaksa içinde mutlaka bir <code>break</code> bulunmalıdır:</p>
<pre><code class="lang-csharp">while (true)
{
    // sürekli çalışır; break ile çıkılır
}

for (;;)
{
    // bu da sonsuz döngüdür
}</code></pre>
<p>Dikkat: Sayacı artırmayı unutmak da kazara sonsuz döngü yaratır: <code>while (i &lt; 5)</code> içinde i++ yoksa döngü hiç bitmez.</p>

<h3>İç İçe Döngüler</h3>
<p>Bir döngünün içine başka bir döngü yazılabilir. <strong>İç döngü, dış döngünün her turu için baştan sona çalışır.</strong> Toplam tekrar = dış × iç:</p>
<pre><code class="lang-csharp">for (int i = 1; i &lt;= 3; i++)
{
    for (int j = 1; j &lt;= 2; j++)
    {
        Console.WriteLine(i + "-" + j);
    }
}
// Çıktı: 1-1, 1-2, 2-1, 2-2, 3-1, 3-2  → toplam 3 x 2 = 6 satır</code></pre>

<h2>⚠️ Karıştırılan Kavramlar</h2>
<div class="table-wrap"><table>
<thead><tr><th>Karışan ikili</th><th>Fark</th></tr></thead>
<tbody>
<tr><td><strong>while / do-while</strong></td><td>while koşulu BAŞTA kontrol eder (0 kez çalışabilir); do-while SONDA kontrol eder (en az 1 kez çalışır)</td></tr>
<tr><td><strong>break / continue</strong></td><td>break döngüyü tamamen BİTİRİR; continue sadece o TURU atlar</td></tr>
<tr><td><strong>for / foreach</strong></td><td>for sayaç ve indeksle çalışır, eleman değiştirebilir; foreach elemanları okumak için en pratik yoldur, eleman değiştiremez</td></tr>
<tr><td><strong>i &lt; 5 / i &lt;= 5</strong></td><td>0'dan başlayan döngüde &lt; 5 → 5 tur; &lt;= 5 → 6 tur</td></tr>
</tbody>
</table></div>
<div class="callout warn"><p><strong>Tuzaklar:</strong> 1) İç içe döngüde break yalnızca <strong>içinde bulunduğu</strong> döngüyü bitirir, dış döngü devam eder. 2) Döngü bittikten sonra sayacın değeri sorulursa: koşulu bozan İLK değerdir (for i &lt; 5 → döngü sonrası i = 5). 3) do-while'ın sonunda noktalı virgül vardır: <code>} while (koşul);</code></p></div>

<h2>🎯 Sınavda Nasıl Sorulur?</h2>
<ul>
  <li><strong>"Döngü kaç kez çalışır?"</strong> — sınır koşulu (&lt; mı &lt;= mi) ve başlangıç değerine dikkat.</li>
  <li><strong>"Döngü bittiğinde i'nin değeri nedir?"</strong> — koşulu bozan ilk değer.</li>
  <li><strong>"Bu kodun çıktısı nedir?"</strong> — break/continue içeren döngülerin çıktısı.</li>
  <li><strong>"Hangisi en az bir kez çalışır?"</strong> — do-while'ın klasik özelliği.</li>
  <li><strong>"İç içe döngü toplam kaç kez döner?"</strong> — dış × iç çarpımı.</li>
</ul>

<h2>✍️ Örnek Sorular</h2>

<div class="quiz-q" data-answer="b">
  <p class="q-text"><strong>Soru 1.</strong> Aşağıdaki döngü kaç kez çalışır?</p>
  <pre><code class="lang-csharp">for (int i = 0; i &lt; 5; i++)
{
    Console.WriteLine("Merhaba");
}</code></pre>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) 4</button>
    <button class="q-opt" data-opt="b">B) 5</button>
    <button class="q-opt" data-opt="c">C) 6</button>
    <button class="q-opt" data-opt="d">D) Sonsuz</button>
  </div>
  <div class="q-explain"><strong>Cevap: B.</strong> i = 0, 1, 2, 3, 4 değerleri için çalışır → 5 kez. i = 5 olduğunda koşul (5 &lt; 5) false olur ve döngü biter. Koşul i &lt;= 5 olsaydı 6 kez (C) çalışırdı.</div>
</div>

<div class="quiz-q" data-answer="a">
  <p class="q-text"><strong>Soru 2.</strong> Koşulu en başından false olsa bile gövdesi en az bir kez çalışan döngü hangisidir?</p>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) do-while</button>
    <button class="q-opt" data-opt="b">B) while</button>
    <button class="q-opt" data-opt="c">C) for</button>
    <button class="q-opt" data-opt="d">D) foreach</button>
  </div>
  <div class="q-explain"><strong>Cevap: A.</strong> do-while koşulu gövde çalıştıktan SONRA kontrol eder; bu yüzden gövde her durumda en az 1 kez çalışır. while ve for koşulu başta kontrol eder, koşul false ise hiç çalışmazlar.</div>
</div>

<div class="quiz-q" data-answer="c">
  <p class="q-text"><strong>Soru 3.</strong> Aşağıdaki kodun çıktısı nedir?</p>
  <pre><code class="lang-csharp">int i = 0;
while (i &lt; 3)
{
    i++;
}
Console.WriteLine(i);</code></pre>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) 2</button>
    <button class="q-opt" data-opt="b">B) 0</button>
    <button class="q-opt" data-opt="c">C) 3</button>
    <button class="q-opt" data-opt="d">D) 4</button>
  </div>
  <div class="q-explain"><strong>Cevap: C.</strong> i sırasıyla 1, 2, 3 olur. i = 3 olduğunda koşul (3 &lt; 3) false olur ve döngü biter; yazdırılan değer koşulu bozan ilk değer olan 3'tür. A şıkkı "son çalışan turdaki değeri" düşünenler için tuzaktır.</div>
</div>

<div class="quiz-q" data-answer="d">
  <p class="q-text"><strong>Soru 4.</strong> Aşağıdaki kodun çıktısı nedir?</p>
  <pre><code class="lang-csharp">int toplam = 0;
for (int i = 1; i &lt;= 5; i++)
{
    if (i == 3) continue;
    toplam += i;
}
Console.WriteLine(toplam);</code></pre>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) 15</button>
    <button class="q-opt" data-opt="b">B) 3</button>
    <button class="q-opt" data-opt="c">C) 6</button>
    <button class="q-opt" data-opt="d">D) 12</button>
  </div>
  <div class="q-explain"><strong>Cevap: D.</strong> continue, i = 3 turunda toplama satırını atlar; diğer turlar normal işler: 1 + 2 + 4 + 5 = 12. A şıkkı (15) continue'yu yok sayanlar, C şıkkı (6) continue'yu break sananlar (1+2+3 değil 1+2=3 olurdu gerçi break'te) için çeldiricidir.</div>
</div>

<div class="quiz-q" data-answer="a">
  <p class="q-text"><strong>Soru 5.</strong> Aşağıdaki kodun çıktısı nedir?</p>
  <pre><code class="lang-csharp">for (int i = 0; i &lt; 10; i++)
{
    if (i == 4) break;
    Console.Write(i + " ");
}</code></pre>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) 0 1 2 3</button>
    <button class="q-opt" data-opt="b">B) 0 1 2 3 4</button>
    <button class="q-opt" data-opt="c">C) 0 1 2 3 5 6 7 8 9</button>
    <button class="q-opt" data-opt="d">D) 0 1 2 3 4 5 6 7 8 9</button>
  </div>
  <div class="q-explain"><strong>Cevap: A.</strong> i = 4 olduğunda break döngüyü TAMAMEN bitirir; 4 yazdırılmadan çıkılır (break, Write satırından önce çalıştı). C şıkkı continue davranışıdır — break ile karıştırma.</div>
</div>

<div class="quiz-q" data-answer="c">
  <p class="q-text"><strong>Soru 6 (Tuzak).</strong> Aşağıdaki iç içe döngüde "Merhaba" kaç kez yazdırılır?</p>
  <pre><code class="lang-csharp">for (int i = 0; i &lt; 3; i++)
{
    for (int j = 0; j &lt; 3; j++)
    {
        Console.WriteLine("Merhaba");
    }
}</code></pre>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) 3</button>
    <button class="q-opt" data-opt="b">B) 6</button>
    <button class="q-opt" data-opt="c">C) 9</button>
    <button class="q-opt" data-opt="d">D) 27</button>
  </div>
  <div class="q-explain"><strong>Cevap: C.</strong> İç döngü, dış döngünün HER turu için baştan sona (3 kez) çalışır: 3 × 3 = 9. B şıkkı (3+3) toplama yapanlar, A şıkkı iç döngüyü tek sefer sayanlar için tuzaktır.</div>
</div>

<h2>🔁 Mini Tekrar</h2>
<div class="table-wrap"><table>
<thead><tr><th>Döngü / Komut</th><th>Özellik</th></tr></thead>
<tbody>
<tr><td>for</td><td>Sayısı belli tekrarlar; başlangıç; koşul; artırma</td></tr>
<tr><td>while</td><td>Koşul başta; 0 kez çalışabilir</td></tr>
<tr><td>do-while</td><td>Koşul sonda; EN AZ 1 kez çalışır; sonunda ; var</td></tr>
<tr><td>foreach</td><td>Koleksiyon elemanlarını gezer; eleman değiştirilemez</td></tr>
<tr><td>break</td><td>Döngüyü tamamen bitirir</td></tr>
<tr><td>continue</td><td>Sadece o turu atlar</td></tr>
<tr><td>İç içe döngü</td><td>Toplam tur = dış × iç</td></tr>
<tr><td>Döngü sonrası sayaç</td><td>Koşulu bozan ilk değer</td></tr>
</tbody>
</table></div>
`
  },
  {
    module: 'csharp',
    id: 'cs-06-koleksiyonlar',
    order: 6,
    title: 'Diziler ve Koleksiyonlar',
    html: `
<h2>📖 Konu Anlatımı</h2>

<h3>Dizi (Array)</h3>
<p>Dizi, <strong>aynı tipte</strong> birden çok değeri tutan, <strong>boyutu sabit</strong> bir yapıdır. Oluşturulduktan sonra eleman sayısı değiştirilemez. Eleman sayısına <code>.Length</code> ile ulaşılır:</p>
<pre><code class="lang-csharp">int[] numbers = { 1, 2, 3 };          // değerlerle oluşturma
int[] dizi = new int[5];              // 5 elemanlı boş dizi (hepsi 0)

Console.WriteLine(numbers[0]);        // 1  → indeks 0'dan başlar!
Console.WriteLine(numbers[2]);        // 3  → SON elemanın indeksi Length - 1
Console.WriteLine(numbers.Length);    // 3

numbers[1] = 99;                      // eleman güncelleme</code></pre>
<div class="callout warn"><p><strong>IndexOutOfRangeException:</strong> 3 elemanlı dizide geçerli indeksler 0, 1, 2'dir. <code>numbers[3]</code> yazmak derleme hatası DEĞİL, <strong>çalışma zamanı hatasıdır</strong> (IndexOutOfRangeException fırlatılır). Sınavın favori tuzağıdır.</p></div>

<h3>List — Dinamik Liste</h3>
<p><code>List&lt;T&gt;</code> boyutu <strong>dinamik</strong> olan listedir; eleman ekledikçe büyür. Eleman sayısına <code>.Count</code> ile ulaşılır:</p>
<pre><code class="lang-csharp">List&lt;int&gt; numbers = new List&lt;int&gt;();
numbers.Add(5);                  // ekle
numbers.Add(10);
numbers.Add(15);
numbers.Remove(10);              // DEĞERİ 10 olan elemanı sil
Console.WriteLine(numbers.Count);          // 2
Console.WriteLine(numbers[0]);             // 5 (indeksle erişim var)
Console.WriteLine(numbers.Contains(15));   // True</code></pre>
<p>Sık kullanılan üyeler: <code>Add</code> (sona ekler), <code>Remove</code> (değere göre siler), <code>RemoveAt</code> (indekse göre siler), <code>Contains</code> (var mı diye bakar), <code>Count</code> (eleman sayısı), <code>Clear</code> (hepsini siler).</p>

<h3>Dictionary — Anahtar-Değer</h3>
<p><code>Dictionary&lt;TKey, TValue&gt;</code> verileri <strong>anahtar-değer (key-value)</strong> çiftleri halinde tutar. Anahtarlar <strong>benzersizdir</strong>; aynı anahtar iki kez eklenemez:</p>
<pre><code class="lang-csharp">Dictionary&lt;string, int&gt; ages = new Dictionary&lt;string, int&gt;();
ages["Ali"] = 25;                    // ekleme / güncelleme
ages["Ayşe"] = 30;
Console.WriteLine(ages["Ali"]);          // 25 (anahtarla erişim)
Console.WriteLine(ages.ContainsKey("Ayşe"));  // True
Console.WriteLine(ages.Count);           // 2</code></pre>

<h3>HashSet — Tekrarsız Küme</h3>
<p><code>HashSet&lt;T&gt;</code> her değerden <strong>en fazla bir tane</strong> tutar; aynı değeri tekrar eklemek listeyi değiştirmez (hata da vermez, sessizce yok sayar):</p>
<pre><code class="lang-csharp">HashSet&lt;int&gt; set = new HashSet&lt;int&gt;();
set.Add(5);
set.Add(5);       // yok sayılır (Add false döndürür)
set.Add(7);
Console.WriteLine(set.Count);   // 2</code></pre>

<h3>Stack — LIFO (Son Giren İlk Çıkar)</h3>
<p><code>Stack&lt;T&gt;</code> tabak yığını gibidir: <strong>son konan, ilk alınır</strong> (Last In, First Out). Metotları: <code>Push</code> (ekle), <code>Pop</code> (üsttekini al ve çıkar), <code>Peek</code> (üsttekine bak ama çıkarma):</p>
<pre><code class="lang-csharp">Stack&lt;int&gt; stack = new Stack&lt;int&gt;();
stack.Push(1);
stack.Push(2);
stack.Push(3);
Console.WriteLine(stack.Pop());    // 3 (son giren ilk çıktı)
Console.WriteLine(stack.Peek());   // 2 (bakar ama çıkarmaz)
Console.WriteLine(stack.Count);    // 2</code></pre>

<h3>Queue — FIFO (İlk Giren İlk Çıkar)</h3>
<p><code>Queue&lt;T&gt;</code> market kasası kuyruğu gibidir: <strong>ilk gelen, ilk çıkar</strong> (First In, First Out). Metotları: <code>Enqueue</code> (kuyruğa ekle), <code>Dequeue</code> (baştakini al ve çıkar), <code>Peek</code>:</p>
<pre><code class="lang-csharp">Queue&lt;string&gt; queue = new Queue&lt;string&gt;();
queue.Enqueue("A");
queue.Enqueue("B");
queue.Enqueue("C");
Console.WriteLine(queue.Dequeue());   // A (ilk giren ilk çıktı)
Console.WriteLine(queue.Peek());      // B</code></pre>

<h2>⚠️ Karıştırılan Kavramlar</h2>
<div class="table-wrap"><table>
<thead><tr><th></th><th>Array (Dizi)</th><th>List</th></tr></thead>
<tbody>
<tr><td><strong>Boyut</strong></td><td>Sabit (değişmez)</td><td>Dinamik (Add ile büyür)</td></tr>
<tr><td><strong>Eleman sayısı</strong></td><td><code>.Length</code> (özellik)</td><td><code>.Count</code> (özellik)</td></tr>
<tr><td><strong>Ekleme/Silme</strong></td><td>Yok</td><td>Add / Remove / RemoveAt</td></tr>
<tr><td><strong>Tanım</strong></td><td><code>int[] a = { 1, 2, 3 };</code></td><td><code>List&lt;int&gt; l = new List&lt;int&gt;();</code></td></tr>
</tbody>
</table></div>
<div class="table-wrap"><table>
<thead><tr><th></th><th>Stack</th><th>Queue</th></tr></thead>
<tbody>
<tr><td><strong>Mantık</strong></td><td>LIFO — son giren ilk çıkar</td><td>FIFO — ilk giren ilk çıkar</td></tr>
<tr><td><strong>Ekleme</strong></td><td>Push</td><td>Enqueue</td></tr>
<tr><td><strong>Çıkarma</strong></td><td>Pop</td><td>Dequeue</td></tr>
<tr><td><strong>Benzetme</strong></td><td>Tabak yığını</td><td>Kasa kuyruğu</td></tr>
</tbody>
</table></div>
<div class="callout warn"><p><strong>Tuzaklar:</strong> 1) Dizide <code>.Count</code>, List'te <code>.Length</code> YOKTUR — tersini sorarlar. 2) Son elemanın indeksi <code>Length - 1</code>'dir; <code>dizi[dizi.Length]</code> her zaman IndexOutOfRangeException fırlatır. 3) <code>List.Remove(10)</code> İNDEKS 10'u değil, DEĞERİ 10 olan ilk elemanı siler; indeksle silmek RemoveAt(10)'dur.</p></div>
<div class="callout tip"><p><strong>Ezber hilesi:</strong> Stack = "kirli tabak yığını" → en üste koyarsın (Push), en üstten alırsın (Pop) → LIFO. Queue = "kuyruk" → sona girersin (Enqueue), baştan çıkarsın (Dequeue) → FIFO.</p></div>

<h2>🎯 Sınavda Nasıl Sorulur?</h2>
<ul>
  <li><strong>"Bu kodun çıktısı nedir?"</strong> — dizi indeksiyle eleman okuma (indeks 0'dan başlar!).</li>
  <li><strong>"Pop / Dequeue hangi değeri döndürür?"</strong> — LIFO/FIFO ayrımını test eder.</li>
  <li><strong>"Count kaçtır?"</strong> — Add/Remove işlemlerinden sonra eleman sayısı; HashSet'te tekrarların sayılmadığı.</li>
  <li><strong>"Bu kod hangi hatayı verir?"</strong> — geçersiz indeks → IndexOutOfRangeException (çalışma zamanı!).</li>
  <li><strong>"Hangi koleksiyon uygundur?"</strong> — senaryo verilir: benzersiz değerler → HashSet, anahtar-değer → Dictionary, sıra bekleyenler → Queue.</li>
</ul>

<h2>✍️ Örnek Sorular</h2>

<div class="quiz-q" data-answer="b">
  <p class="q-text"><strong>Soru 1.</strong> Aşağıdaki kodun çıktısı nedir?</p>
  <pre><code class="lang-csharp">int[] numbers = { 10, 20, 30 };
Console.WriteLine(numbers[1]);</code></pre>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) 10</button>
    <button class="q-opt" data-opt="b">B) 20</button>
    <button class="q-opt" data-opt="c">C) 30</button>
    <button class="q-opt" data-opt="d">D) 1</button>
  </div>
  <div class="q-explain"><strong>Cevap: B.</strong> Dizi indeksleri 0'dan başlar: numbers[0] = 10, numbers[1] = 20, numbers[2] = 30. A şıkkı, indeksin 1'den başladığını sananlar için klasik tuzaktır.</div>
</div>

<div class="quiz-q" data-answer="c">
  <p class="q-text"><strong>Soru 2.</strong> Aşağıdaki kodun çıktısı nedir?</p>
  <pre><code class="lang-csharp">List&lt;int&gt; liste = new List&lt;int&gt;();
liste.Add(5);
liste.Add(10);
liste.Add(15);
liste.Remove(10);
Console.WriteLine(liste.Count);</code></pre>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) 3</button>
    <button class="q-opt" data-opt="b">B) 1</button>
    <button class="q-opt" data-opt="c">C) 2</button>
    <button class="q-opt" data-opt="d">D) Hata: List'te Count yoktur</button>
  </div>
  <div class="q-explain"><strong>Cevap: C.</strong> 3 eleman eklendi, Remove(10) DEĞERİ 10 olan elemanı sildi → 2 eleman kaldı. List'te eleman sayısı Count ile alınır (D yanlış; Length dizide kullanılır).</div>
</div>

<div class="quiz-q" data-answer="d">
  <p class="q-text"><strong>Soru 3.</strong> Aşağıdaki kodun çıktısı nedir?</p>
  <pre><code class="lang-csharp">Stack&lt;int&gt; stack = new Stack&lt;int&gt;();
stack.Push(1);
stack.Push(2);
stack.Push(3);
Console.WriteLine(stack.Pop());</code></pre>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) 1</button>
    <button class="q-opt" data-opt="b">B) 2</button>
    <button class="q-opt" data-opt="c">C) 6</button>
    <button class="q-opt" data-opt="d">D) 3</button>
  </div>
  <div class="q-explain"><strong>Cevap: D.</strong> Stack LIFO çalışır: son giren (3) ilk çıkar. A şıkkı Queue (FIFO) davranışıdır — iki yapıyı karıştırma.</div>
</div>

<div class="quiz-q" data-answer="a">
  <p class="q-text"><strong>Soru 4.</strong> Aşağıdaki kodun çıktısı nedir?</p>
  <pre><code class="lang-csharp">Queue&lt;string&gt; queue = new Queue&lt;string&gt;();
queue.Enqueue("A");
queue.Enqueue("B");
queue.Enqueue("C");
Console.WriteLine(queue.Dequeue());</code></pre>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) A</button>
    <button class="q-opt" data-opt="b">B) C</button>
    <button class="q-opt" data-opt="c">C) B</button>
    <button class="q-opt" data-opt="d">D) ABC</button>
  </div>
  <div class="q-explain"><strong>Cevap: A.</strong> Queue FIFO çalışır: ilk giren ("A") ilk çıkar. B şıkkı Stack (LIFO) davranışıdır. Kuyruk benzetmesini hatırla: kasada ilk sıradaki önce işlem görür.</div>
</div>

<div class="quiz-q" data-answer="b">
  <p class="q-text"><strong>Soru 5 (Tuzak).</strong> Aşağıdaki kod için ne söylenebilir?</p>
  <pre><code class="lang-csharp">int[] dizi = new int[3];
dizi[3] = 99;
Console.WriteLine(dizi[3]);</code></pre>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) Ekrana 99 yazar</button>
    <button class="q-opt" data-opt="b">B) Çalışma zamanında IndexOutOfRangeException fırlatır</button>
    <button class="q-opt" data-opt="c">C) Derleme hatası verir</button>
    <button class="q-opt" data-opt="d">D) Dizi otomatik büyür ve 99 eklenir</button>
  </div>
  <div class="q-explain"><strong>Cevap: B.</strong> 3 elemanlı dizinin geçerli indeksleri 0, 1, 2'dir; dizi[3] sınır dışıdır. Bu hata derlemede DEĞİL (C yanlış), program çalışırken ortaya çıkar. Diziler otomatik büyümez (D, List davranışını çağrıştıran tuzaktır).</div>
</div>

<div class="quiz-q" data-answer="d">
  <p class="q-text"><strong>Soru 6.</strong> Aşağıdaki kodun çıktısı nedir?</p>
  <pre><code class="lang-csharp">HashSet&lt;int&gt; set = new HashSet&lt;int&gt;();
set.Add(5);
set.Add(5);
set.Add(7);
Console.WriteLine(set.Count);</code></pre>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) 3</button>
    <button class="q-opt" data-opt="b">B) 1</button>
    <button class="q-opt" data-opt="c">C) Hata: aynı değer iki kez eklenemez</button>
    <button class="q-opt" data-opt="d">D) 2</button>
  </div>
  <div class="q-explain"><strong>Cevap: D.</strong> HashSet tekrarsız değerler tutar: ikinci Add(5) sessizce yok sayılır (hata fırlatmaz — C yanlış). Kümede 5 ve 7 kalır → Count = 2.</div>
</div>

<h2>🔁 Mini Tekrar</h2>
<div class="table-wrap"><table>
<thead><tr><th>Yapı</th><th>Özellik</th><th>Eleman sayısı</th><th>Temel metotlar</th></tr></thead>
<tbody>
<tr><td>Array</td><td>Sabit boyut, indeks 0'dan</td><td><code>.Length</code></td><td>—</td></tr>
<tr><td>List</td><td>Dinamik boyut</td><td><code>.Count</code></td><td>Add, Remove, Contains</td></tr>
<tr><td>Dictionary</td><td>Anahtar-değer, anahtar benzersiz</td><td><code>.Count</code></td><td>ContainsKey, [key]</td></tr>
<tr><td>HashSet</td><td>Tekrarsız değerler</td><td><code>.Count</code></td><td>Add, Contains</td></tr>
<tr><td>Stack</td><td>LIFO</td><td><code>.Count</code></td><td>Push, Pop, Peek</td></tr>
<tr><td>Queue</td><td>FIFO</td><td><code>.Count</code></td><td>Enqueue, Dequeue, Peek</td></tr>
</tbody>
</table></div>
`
  },
  {
    module: 'csharp',
    id: 'cs-07-metotlar',
    order: 7,
    title: 'Metotlar',
    html: `
<h2>📖 Konu Anlatımı</h2>

<h3>Metot Nedir?</h3>
<p>Metot, belirli bir işi yapan, isimlendirilmiş, <strong>tekrar tekrar çağrılabilen</strong> kod bloğudur. Aynı kodu kopyalamak yerine bir kez yazıp her yerden çağırırsın. Bir metodun anatomisi:</p>
<pre><code class="lang-csharp">//  dönüş tipi  isim   parametreler
static int     Add   (int a, int b)
{
    return a + b;     // geri dönüş değeri
}

static void Main()
{
    int sonuc = Add(3, 4);      // metot çağrısı; 3 ve 4 argümandır
    Console.WriteLine(sonuc);   // 7
}</code></pre>

<h3>void ve return</h3>
<ul>
  <li><strong>void:</strong> metot <strong>değer döndürmez</strong>; sadece iş yapar. void metodun sonucu bir değişkene atanamaz.</li>
  <li><strong>return:</strong> hem değeri geri gönderir hem de <strong>metodu o anda bitirir</strong> — return'den sonraki satırlar çalışmaz.</li>
  <li>Dönüş tipi void değilse, metot <strong>her yoldan bir değer return etmek zorundadır</strong>; etmezse derleme hatası olur.</li>
</ul>
<pre><code class="lang-csharp">static void PrintMessage()
{
    Console.WriteLine("Hello");
    // return 5;   // HATA: void metot değer döndüremez
    return;        // bu geçerli: sadece metodu bitirir (isteğe bağlı)
}

static int Kare(int x)
{
    return x * x;
    // Console.WriteLine("Buraya asla gelinmez");  // return sonrası ölü kod
}</code></pre>

<h3>Parametre ve Argüman</h3>
<p><strong>Parametre</strong>, metot tanımındaki değişkendir (int a); <strong>argüman</strong>, çağrı sırasında gönderilen gerçek değerdir (3). Varsayılan olarak değer tipleri metoda <strong>kopyalanarak</strong> geçer; metot içindeki değişiklik dışarıyı etkilemez:</p>
<pre><code class="lang-csharp">static void Degistir(int x)
{
    x = 100;
}

static void Main()
{
    int sayi = 5;
    Degistir(sayi);
    Console.WriteLine(sayi);   // 5 — kopya değişti, aslı değişmedi
}</code></pre>

<h3>Method Overloading (Aşırı Yükleme)</h3>
<p><strong>Aynı isimde</strong>, fakat <strong>farklı parametre listesine</strong> (sayı, tip veya sıra) sahip birden çok metot yazılabilir. Derleyici, çağrıdaki argümanlara bakarak doğru olanı <strong>derleme zamanında</strong> seçer:</p>
<pre><code class="lang-csharp">static int Add(int a, int b)          { return a + b; }
static double Add(double a, double b) { return a + b; }
static int Add(int a, int b, int c)   { return a + b + c; }

Add(3, 4);        // 1. metot çağrılır
Add(1.5, 2.5);    // 2. metot çağrılır
Add(1, 2, 3);     // 3. metot çağrılır</code></pre>
<div class="callout warn"><p><strong>Tuzak:</strong> Yalnızca <strong>dönüş tipi farklı</strong> olan iki aynı imzalı metot overloading SAYILMAZ ve derleme hatasıdır. <code>int Topla(int a)</code> ile <code>double Topla(int a)</code> bir arada bulunamaz — parametre listesi aynı çünkü.</p></div>

<h3>Optional Parameter ve Named Argument</h3>
<p>Parametreye varsayılan değer verilirse çağrıda o argüman atlanabilir. Named argument ile argümanlar isimle, sırasız gönderilebilir:</p>
<pre><code class="lang-csharp">static void Greet(string name = "Misafir", int kez = 1)
{
    for (int i = 0; i &lt; kez; i++)
        Console.WriteLine("Merhaba " + name);
}

Greet();                    // Merhaba Misafir (varsayılanlar kullanıldı)
Greet("Ali");               // Merhaba Ali
Greet(kez: 2);              // named argument: sadece kez'i verdik</code></pre>
<p>Kural: optional parametreler, parametre listesinde <strong>zorunlu parametrelerden sonra</strong> gelmelidir.</p>

<h3>ref ve out</h3>
<p>Bu iki anahtar kelime, değer tiplerini metoda <strong>referansla</strong> geçirir; metot içindeki değişiklik dışarıya yansır. Farkları kritik bir sınav noktasıdır:</p>
<ul>
  <li><strong>ref:</strong> değişken metoda gönderilmeden <strong>ÖNCE değer atanmış olmalı</strong>. Metot değeri okuyabilir ve değiştirebilir.</li>
  <li><strong>out:</strong> önceden değer atanması <strong>gerekmez</strong>; ama metot, çıkmadan önce out parametresine <strong>mutlaka değer atamak ZORUNDADIR</strong>.</li>
  <li>Her ikisinde de anahtar kelime hem tanımda hem <strong>çağrıda</strong> yazılır.</li>
</ul>
<pre><code class="lang-csharp">static void Change(ref int x)  { x = 99; }
static void GetValue(out int y) { y = 42; }   // out içeride atanmak ZORUNDA

static void Main()
{
    int a = 5;              // ref için önceden atama ŞART
    Change(ref a);
    Console.WriteLine(a);   // 99

    int b;                  // out için atamaya gerek yok
    GetValue(out b);
    Console.WriteLine(b);   // 42
}</code></pre>

<h2>⚠️ Karıştırılan Kavramlar</h2>
<div class="table-wrap"><table>
<thead><tr><th></th><th>ref</th><th>out</th></tr></thead>
<tbody>
<tr><td><strong>Çağrıdan önce atama</strong></td><td><strong>Zorunlu</strong></td><td>Gerekmez</td></tr>
<tr><td><strong>Metot içinde atama</strong></td><td>İsteğe bağlı</td><td><strong>Zorunlu</strong></td></tr>
<tr><td><strong>Amaç</strong></td><td>Var olan değeri metoda verip değiştirtmek</td><td>Metottan (ek) değer almak</td></tr>
<tr><td><strong>Çağrı yazımı</strong></td><td><code>Metot(ref a)</code></td><td><code>Metot(out b)</code></td></tr>
</tbody>
</table></div>
<div class="table-wrap"><table>
<thead><tr><th>Karışan ikili</th><th>Fark</th></tr></thead>
<tbody>
<tr><td><strong>void / return'lü metot</strong></td><td>void değer döndürmez, sonucu değişkene atanamaz; diğeri dönüş tipinde değer return etmek zorunda</td></tr>
<tr><td><strong>Parametre / argüman</strong></td><td>Parametre tanımdaki isim; argüman çağrıda gönderilen değer</td></tr>
<tr><td><strong>Overloading ölçütü</strong></td><td>Parametre listesi (sayı/tip/sıra) farkı; dönüş tipi tek başına YETMEZ</td></tr>
</tbody>
</table></div>
<div class="callout warn"><p><strong>Tuzak:</strong> "ref mi out mu?" sorularında ezber cümlen şu olsun: <strong>ref dışarıda dolu gelir, out içeride doldurulur.</strong> Atanmamış değişkeni ref ile göndermek de, out parametresini metot içinde atamadan bırakmak da DERLEME hatasıdır.</p></div>

<h2>🎯 Sınavda Nasıl Sorulur?</h2>
<ul>
  <li><strong>"Bu kodun çıktısı nedir?"</strong> — metot çağrısı sonucu; ref/out'lu çağrılardan sonra değişkenin değeri.</li>
  <li><strong>"Hangi metot tanımı overloading için geçerlidir?"</strong> — parametre listesi farkı aranır.</li>
  <li><strong>"Hangi satır derleme hatası verir?"</strong> — void metottan değer döndürme, atanmamış değişkeni ref ile gönderme.</li>
  <li><strong>"Metot hangi değeri döndürür?"</strong> — return akışını takip etme.</li>
  <li><strong>"Parametresiz çağrıda çıktı ne olur?"</strong> — optional parameter'ın varsayılan değeri.</li>
</ul>

<h2>✍️ Örnek Sorular</h2>

<div class="quiz-q" data-answer="a">
  <p class="q-text"><strong>Soru 1.</strong> Dönüş tipi void olan bir metot için hangisi doğrudur?</p>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) Değer döndürmez; sonucu bir değişkene atanamaz</button>
    <button class="q-opt" data-opt="b">B) Her zaman 0 döndürür</button>
    <button class="q-opt" data-opt="c">C) Sadece string döndürebilir</button>
    <button class="q-opt" data-opt="d">D) İçinde return kelimesi hiçbir şekilde kullanılamaz</button>
  </div>
  <div class="q-explain"><strong>Cevap: A.</strong> void "hiçbir şey döndürmez" demektir. D şıkkı incelikli tuzaktır: void metotta DEĞERSİZ <code>return;</code> kullanılabilir (metodu erken bitirir); yasak olan değer döndürmektir.</div>
</div>

<div class="quiz-q" data-answer="c">
  <p class="q-text"><strong>Soru 2.</strong> Aşağıdaki kodun çıktısı nedir?</p>
  <pre><code class="lang-csharp">static int Add(int a, int b)
{
    return a + b;
}

static void Main()
{
    Console.WriteLine(Add(3, 4) + Add(1, 2));
}</code></pre>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) 7</button>
    <button class="q-opt" data-opt="b">B) 34 ve 12</button>
    <button class="q-opt" data-opt="c">C) 10</button>
    <button class="q-opt" data-opt="d">D) 73</button>
  </div>
  <div class="q-explain"><strong>Cevap: C.</strong> Add(3,4) = 7 ve Add(1,2) = 3 döner; ikisi int olduğu için + işareti TOPLAR: 7 + 3 = 10. Sonuçlar string olsaydı birleştirme olurdu — burada değiller.</div>
</div>

<div class="quiz-q" data-answer="b">
  <p class="q-text"><strong>Soru 3.</strong> Method overloading (aşırı yükleme) için hangisi <strong>doğrudur</strong>?</p>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) Aynı isimli metotlar sadece dönüş tipiyle ayrışabilir</button>
    <button class="q-opt" data-opt="b">B) Aynı isimli metotlar parametre sayısı veya tipleriyle ayrışmalıdır</button>
    <button class="q-opt" data-opt="c">C) Overloading yalnızca miras alınan sınıflarda yapılır</button>
    <button class="q-opt" data-opt="d">D) Bir isim en fazla iki kez yüklenebilir</button>
  </div>
  <div class="q-explain"><strong>Cevap: B.</strong> Overloading'in ölçütü parametre listesidir (sayı/tip/sıra). Dönüş tipi tek başına yeterli DEĞİLDİR (A yanlış ve klasik tuzak). C, overriding ile karıştırmadır; overloading aynı sınıf içinde olur. Yükleme sayısında sınır yoktur (D yanlış).</div>
</div>

<div class="quiz-q" data-answer="d">
  <p class="q-text"><strong>Soru 4.</strong> ref ve out anahtar kelimeleri için hangisi <strong>doğrudur</strong>?</p>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) ref'li değişkene metot içinde değer atamak zorunludur</button>
    <button class="q-opt" data-opt="b">B) out ile gönderilen değişkene önceden değer atanmış olmalıdır</button>
    <button class="q-opt" data-opt="c">C) İkisi de yalnızca string tiplerle kullanılır</button>
    <button class="q-opt" data-opt="d">D) ref önceden atanmış değişken ister; out ise metot içinde atanmak zorundadır</button>
  </div>
  <div class="q-explain"><strong>Cevap: D.</strong> Ezber cümle: "ref dışarıda dolu gelir, out içeride doldurulur." A ve B kuralları tam ters yazılmış çeldiricilerdir — sınav en çok bu ters çevirmeyi yapar.</div>
</div>

<div class="quiz-q" data-answer="a">
  <p class="q-text"><strong>Soru 5.</strong> Aşağıdaki kodun çıktısı nedir?</p>
  <pre><code class="lang-csharp">static void Greet(string name = "Misafir")
{
    Console.WriteLine("Merhaba " + name);
}

static void Main()
{
    Greet();
    Greet("Ali");
}</code></pre>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) Merhaba Misafir, sonra Merhaba Ali</button>
    <button class="q-opt" data-opt="b">B) Derleme hatası: Greet() parametresiz çağrılamaz</button>
    <button class="q-opt" data-opt="c">C) Merhaba, sonra Merhaba Ali</button>
    <button class="q-opt" data-opt="d">D) Merhaba Ali, sonra Merhaba Ali</button>
  </div>
  <div class="q-explain"><strong>Cevap: A.</strong> name optional parametredir: argüman verilmezse varsayılan değeri "Misafir" kullanılır. Bu yüzden parametresiz çağrı geçerlidir (B yanlış) ve boş da yazmaz (C yanlış).</div>
</div>

<div class="quiz-q" data-answer="c">
  <p class="q-text"><strong>Soru 6 (Tuzak).</strong> Aşağıdaki kodun çıktısı nedir?</p>
  <pre><code class="lang-csharp">static void Change(ref int x)
{
    x = 99;
}

static void Main()
{
    int a = 5;
    Change(ref a);
    Console.WriteLine(a);
}</code></pre>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) 5</button>
    <button class="q-opt" data-opt="b">B) Derleme hatası: a değişkeni ref ile gönderilemez</button>
    <button class="q-opt" data-opt="c">C) 99</button>
    <button class="q-opt" data-opt="d">D) 0</button>
  </div>
  <div class="q-explain"><strong>Cevap: C.</strong> ref, değişkeni REFERANSLA geçirir: metottaki x, dışarıdaki a'nın kendisidir; x = 99 ataması a'yı değiştirir. ref olmasaydı kopya geçerdi ve çıktı 5 (A) olurdu. a önceden atanmış olduğu için ref kullanımı tamamen geçerlidir (B yanlış).</div>
</div>

<h2>🔁 Mini Tekrar</h2>
<div class="table-wrap"><table>
<thead><tr><th>Kavram</th><th>Özet</th></tr></thead>
<tbody>
<tr><td>void</td><td>Değer döndürmez; çıplak return; ile erken bitebilir</td></tr>
<tr><td>return</td><td>Değeri döndürür VE metodu bitirir</td></tr>
<tr><td>Parametre geçişi</td><td>Değer tipleri varsayılan olarak kopyalanır</td></tr>
<tr><td>Overloading</td><td>Aynı isim + farklı parametre listesi; dönüş tipi yetmez</td></tr>
<tr><td>Optional parameter</td><td>Varsayılan değerli; zorunlulardan sonra yazılır</td></tr>
<tr><td>Named argument</td><td>Çağrıda isim: değer; sıra önemsizleşir</td></tr>
<tr><td>ref</td><td>Önceden ATANMIŞ değişken ister</td></tr>
<tr><td>out</td><td>Metot içinde ATANMAK zorundadır</td></tr>
</tbody>
</table></div>
`
  },
  {
    module: 'csharp',
    id: 'cs-08-oop',
    order: 8,
    title: 'Nesne Yönelimli Programlama (OOP)',
    html: `
<h2>📖 Konu Anlatımı</h2>

<h3>Sınıf (Class) ve Nesne (Object)</h3>
<p><strong>Class</strong> bir şablondur (kalıptır); <strong>object</strong> ise bu şablondan <code>new</code> ile üretilmiş somut örnektir. Bir sınıftan istediğin kadar nesne üretebilirsin; her nesnenin kendi verileri olur.</p>
<pre><code class="lang-csharp">class Person
{
    public string Name { get; set; }            // property

    public Person(string name)                   // constructor
    {
        Name = name;
    }

    public void SayHello()                       // metot
    {
        Console.WriteLine("Hello " + Name);
    }
}

class Program
{
    static void Main()
    {
        Person p1 = new Person("Ali");    // new ile nesne oluşturma
        Person p2 = new Person("Ayşe");
        p1.SayHello();   // Hello Ali
        p2.SayHello();   // Hello Ayşe
    }
}</code></pre>

<h3>Field ve Property</h3>
<p><strong>Field (alan)</strong>, sınıfın içindeki veri değişkenidir; genellikle <code>private</code> yapılır. <strong>Property (özellik)</strong>, field'a kontrollü erişim sağlayan get/set kapısıdır:</p>
<pre><code class="lang-csharp">class Ogrenci
{
    private int yas;                  // field — dışarıdan erişilemez

    public int Yas                    // property — kontrollü kapı
    {
        get { return yas; }
        set
        {
            if (value &gt;= 0)           // doğrulama yapılabilir!
                yas = value;
        }
    }

    public string Ad { get; set; }    // auto-property (kısa yazım)
}</code></pre>

<h3>Constructor (Yapıcı Metot)</h3>
<p>Constructor, nesne <code>new</code> ile oluşturulurken <strong>otomatik çalışan</strong> özel metottur. İki altın kuralı vardır:</p>
<ul>
  <li>Adı <strong>sınıfın adıyla birebir aynıdır</strong>.</li>
  <li><strong>Dönüş tipi YOKTUR</strong> — void bile yazılmaz.</li>
</ul>
<pre><code class="lang-csharp">class Araba
{
    public string Marka;

    public Araba()                    // parametresiz constructor
    {
        Marka = "Bilinmiyor";
    }

    public Araba(string marka)        // constructor overloading
    {
        Marka = marka;
    }
}

Araba a1 = new Araba();           // Marka = "Bilinmiyor"
Araba a2 = new Araba("Togg");     // Marka = "Togg"</code></pre>
<div class="callout info"><p><strong>Not:</strong> Hiç constructor yazmazsan derleyici görünmez bir parametresiz constructor üretir. Ama SEN parametreli bir constructor yazarsan, bu otomatik üretim durur — parametresiz çağrı istiyorsan onu da kendin yazmalısın.</p></div>

<h3>Encapsulation (Kapsülleme)</h3>
<p>Verileri (field'ları) <strong>private</strong> yapıp dış dünyaya yalnızca <strong>property veya metotlarla</strong> kontrollü erişim vermektir. Amaç: nesnenin iç durumunu geçersiz değerlerden korumak. Yukarıdaki Yas property'sindeki negatif yaş kontrolü, kapsüllemenin tam kendisidir.</p>

<h3>Inheritance (Kalıtım / Miras)</h3>
<p>Bir sınıfın, başka bir sınıfın üyelerini devralmasıdır. <code>:</code> işaretiyle yazılır. C#'ta bir sınıf <strong>yalnızca BİR sınıftan</strong> miras alabilir (çoklu sınıf kalıtımı yok!):</p>
<pre><code class="lang-csharp">class Person                       // taban (base) sınıf
{
    public string Name { get; set; }
    public void Walk() { Console.WriteLine("Yürüyor"); }
}

class Student : Person             // türeyen (derived) sınıf
{
    public int Numara { get; set; }
}

Student s = new Student();
s.Name = "Ali";     // Person'dan miras geldi
s.Walk();           // Person'dan miras geldi
s.Numara = 101;     // Student'ın kendi üyesi</code></pre>

<h3>Polymorphism (Çok Biçimlilik) — virtual ve override</h3>
<p>Aynı metodun farklı sınıflarda <strong>farklı davranmasıdır</strong>. Taban sınıftaki metot <code>virtual</code> ile "ezilebilir" olarak işaretlenir; türeyen sınıf <code>override</code> ile kendi sürümünü yazar:</p>
<pre><code class="lang-csharp">class Animal
{
    public virtual void Speak()            // virtual: ezilebilir
    {
        Console.WriteLine("Ses çıkarır");
    }
}

class Dog : Animal
{
    public override void Speak()           // override: ezdik
    {
        Console.WriteLine("Hav");
    }
}

Animal a = new Dog();    // taban tip referansı, türeyen tip nesnesi
a.Speak();               // "Hav" — ÇALIŞMA ZAMANINDA nesnenin GERÇEK tipine bakılır</code></pre>
<div class="callout warn"><p><strong>Sınav noktası:</strong> Taban sınıftaki metot <code>virtual</code> (veya abstract) değilse türeyen sınıfta <code>override</code> EDİLEMEZ — derleme hatası olur. virtual/override çifti birlikte çalışır.</p></div>

<h3>Abstraction (Soyutlama): abstract Class ve Interface</h3>
<ul>
  <li><strong>abstract class:</strong> <code>new</code> ile nesnesi OLUŞTURULAMAZ; sadece miras almak içindir. İçinde gövdesiz <strong>abstract metotlar</strong> olabilir; türeyen sınıf bunları <strong>override etmek zorundadır</strong>. Normal (gövdeli) metot ve field da içerebilir.</li>
  <li><strong>interface:</strong> bir <strong>sözleşmedir</strong> — yalnızca üye imzalarını tanımlar (klasik kullanım). Uygulayan sınıf tüm üyeleri yazmak zorundadır. Bir sınıf <strong>birden çok interface</strong> uygulayabilir (çoklu kalıtım açığını kapatır). İsimlendirme geleneği: I ile başlar (IAnimal, IDisposable).</li>
</ul>
<pre><code class="lang-csharp">abstract class Sekil
{
    public abstract double Alan();          // gövdesiz; override ZORUNLU
    public void Yazdir() { Console.WriteLine(Alan()); }  // normal metot da olur
}

interface IUcabilen
{
    void Uc();                              // sadece imza
}

class Kus : Sekil, IUcabilen               // 1 sınıf + n interface olabilir
{
    public override double Alan() { return 10; }
    public void Uc() { Console.WriteLine("Uçuyor"); }
}</code></pre>

<h3>Overriding ile Overloading Farkı</h3>
<ul>
  <li><strong>Overloading:</strong> AYNI sınıfta, aynı isim, FARKLI parametre listesi. <strong>Derleme zamanında</strong> çözülür.</li>
  <li><strong>Overriding:</strong> MİRAS ilişkisinde, aynı isim, AYNI imza; virtual/override ikilisiyle. <strong>Çalışma zamanında</strong> çözülür.</li>
</ul>

<h3>Access Modifiers (Erişim Belirleyiciler)</h3>
<div class="table-wrap"><table>
<thead><tr><th>Belirleyici</th><th>Nereden erişilir?</th></tr></thead>
<tbody>
<tr><td><code>public</code></td><td>Her yerden</td></tr>
<tr><td><code>private</code></td><td>Sadece tanımlandığı sınıfın içinden (varsayılan üye erişimi)</td></tr>
<tr><td><code>protected</code></td><td>Tanımlandığı sınıf + ondan miras alan sınıflar</td></tr>
<tr><td><code>internal</code></td><td>Aynı assembly (proje) içinden</td></tr>
</tbody>
</table></div>

<h2>⚠️ Karıştırılan Kavramlar</h2>
<div class="table-wrap"><table>
<thead><tr><th></th><th>Overloading</th><th>Overriding</th></tr></thead>
<tbody>
<tr><td><strong>Nerede?</strong></td><td>Aynı sınıf içinde</td><td>Miras ilişkisinde (taban → türeyen)</td></tr>
<tr><td><strong>İmza</strong></td><td>Aynı isim, FARKLI parametreler</td><td>Aynı isim, AYNI parametreler</td></tr>
<tr><td><strong>Anahtar kelime</strong></td><td>Gerekmez</td><td>virtual (tabanda) + override (türeyende)</td></tr>
<tr><td><strong>Ne zaman çözülür?</strong></td><td>Derleme zamanı</td><td>Çalışma zamanı</td></tr>
</tbody>
</table></div>
<div class="table-wrap"><table>
<thead><tr><th></th><th>abstract class</th><th>interface</th></tr></thead>
<tbody>
<tr><td><strong>new ile nesne</strong></td><td>Oluşturulamaz</td><td>Oluşturulamaz</td></tr>
<tr><td><strong>Gövdeli metot/field</strong></td><td>Olabilir</td><td>Klasik kullanımda olmaz (sadece imza)</td></tr>
<tr><td><strong>Kaç tane alınır?</strong></td><td>En fazla 1 sınıftan miras</td><td>İstenildiği kadar uygulanır</td></tr>
<tr><td><strong>Constructor</strong></td><td>Olabilir</td><td>Olmaz</td></tr>
</tbody>
</table></div>
<div class="callout warn"><p><strong>Tuzaklar:</strong> 1) Constructor'a dönüş tipi yazarsan (void dahil) o artık constructor değil sıradan bir metottur. 2) virtual olmayan metodu override etmeye çalışmak derleme hatasıdır. 3) "C#'ta bir sınıf birden çok sınıftan miras alabilir" ifadesi YANLIŞTIR; birden çok şey ancak interface olarak alınır. 4) private üyeye sınıf dışından erişim derleme hatasıdır.</p></div>
<div class="callout tip"><p><strong>4 sütunlu ezber:</strong> OOP'nin 4 ilkesi — <strong>Encapsulation</strong> (veriyi sakla: private + property), <strong>Inheritance</strong> (devral: A : B), <strong>Polymorphism</strong> (farklı davran: virtual/override), <strong>Abstraction</strong> (sözleşmeyi tanımla: abstract/interface).</p></div>

<h2>🎯 Sınavda Nasıl Sorulur?</h2>
<ul>
  <li><strong>"Bu kodun çıktısı nedir?"</strong> — Animal a = new Dog(); a.Speak(); kalıbı; hangi sürümün çalıştığı sorulur.</li>
  <li><strong>"Hangi erişim belirleyici uygundur / private üyeye nereden erişilir?"</strong> — tablo bilgisi.</li>
  <li><strong>"Constructor için hangisi doğrudur?"</strong> — isim ve dönüş tipi kuralları.</li>
  <li><strong>"Overriding ile overloading farkı nedir?"</strong> — derleme/çalışma zamanı ve miras ayrımı.</li>
  <li><strong>"Hangi satır derleme hatası verir?"</strong> — virtual'sız override, abstract sınıftan new ile nesne, private erişim ihlali.</li>
</ul>

<h2>✍️ Örnek Sorular</h2>

<div class="quiz-q" data-answer="b">
  <p class="q-text"><strong>Soru 1.</strong> Bir sınıftan nesne oluşturmak için hangi anahtar kelime kullanılır?</p>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) create</button>
    <button class="q-opt" data-opt="b">B) new</button>
    <button class="q-opt" data-opt="c">C) object</button>
    <button class="q-opt" data-opt="d">D) make</button>
  </div>
  <div class="q-explain"><strong>Cevap: B.</strong> Nesne <code>new SinifAdi()</code> ile oluşturulur; bu sırada constructor çalışır. create/make C#'ta anahtar kelime değildir; object bir tip adıdır, oluşturucu değildir.</div>
</div>

<div class="quiz-q" data-answer="d">
  <p class="q-text"><strong>Soru 2.</strong> private erişim belirleyicili bir field'a nereden erişilebilir?</p>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) Her yerden</button>
    <button class="q-opt" data-opt="b">B) Aynı assembly'deki tüm sınıflardan</button>
    <button class="q-opt" data-opt="c">C) Miras alan sınıflardan da</button>
    <button class="q-opt" data-opt="d">D) Sadece tanımlandığı sınıfın içinden</button>
  </div>
  <div class="q-explain"><strong>Cevap: D.</strong> private en kısıtlı erişimdir: yalnızca kendi sınıfı içinden. A = public, B = internal, C = protected tanımıdır — şıklar dört belirleyiciyi karıştırtmak için yazılmıştır.</div>
</div>

<div class="quiz-q" data-answer="a">
  <p class="q-text"><strong>Soru 3.</strong> Constructor (yapıcı metot) için hangisi <strong>doğrudur</strong>?</p>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) Sınıfla aynı ismi taşır ve dönüş tipi yazılmaz</button>
    <button class="q-opt" data-opt="b">B) Dönüş tipi her zaman void olarak yazılır</button>
    <button class="q-opt" data-opt="c">C) Her sınıfta elle yazılması zorunludur</button>
    <button class="q-opt" data-opt="d">D) Nesne silinirken çalışır</button>
  </div>
  <div class="q-explain"><strong>Cevap: A.</strong> Constructor sınıf adıyla birebir aynıdır ve dönüş tipi YOKTUR (void bile yazılmaz — B yanlış; void yazarsan sıradan metot olur). Yazmazsan derleyici parametresiz olanı üretir (C yanlış). D, yıkıcı (finalizer) tanımıdır.</div>
</div>

<div class="quiz-q" data-answer="c">
  <p class="q-text"><strong>Soru 4.</strong> Taban sınıftaki bir metodun türeyen sınıfta override edilebilmesi için taban metodun hangi anahtar kelimeyle işaretlenmesi gerekir?</p>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) static</button>
    <button class="q-opt" data-opt="b">B) sealed</button>
    <button class="q-opt" data-opt="c">C) virtual</button>
    <button class="q-opt" data-opt="d">D) const</button>
  </div>
  <div class="q-explain"><strong>Cevap: C.</strong> virtual, metodu "ezilebilir" yapar; türeyen sınıf override ile ezer (abstract metotlar da override edilir). sealed tam tersine ezmeyi YASAKLAR (B çeldirici). static ve const'un overriding ile ilgisi yoktur.</div>
</div>

<div class="quiz-q" data-answer="b">
  <p class="q-text"><strong>Soru 5.</strong> Aşağıdaki kodun çıktısı nedir?</p>
  <pre><code class="lang-csharp">class Animal
{
    public virtual void Speak() { Console.WriteLine("Ses"); }
}

class Dog : Animal
{
    public override void Speak() { Console.WriteLine("Hav"); }
}

class Program
{
    static void Main()
    {
        Animal a = new Dog();
        a.Speak();
    }
}</code></pre>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) Ses</button>
    <button class="q-opt" data-opt="b">B) Hav</button>
    <button class="q-opt" data-opt="c">C) Derleme hatası: Animal referansına Dog atanamaz</button>
    <button class="q-opt" data-opt="d">D) Önce Ses, sonra Hav</button>
  </div>
  <div class="q-explain"><strong>Cevap: B.</strong> Polymorphism: referans tipi Animal olsa da nesnenin GERÇEK tipi Dog'dur; virtual/override sayesinde çalışma zamanında Dog'un sürümü çağrılır. A şıkkı referans tipine bakanlar için tuzaktır. Türeyen nesne taban referansına atanabilir (C yanlış).</div>
</div>

<div class="quiz-q" data-answer="d">
  <p class="q-text"><strong>Soru 6 (Tuzak).</strong> Overriding ile overloading arasındaki fark için hangisi <strong>doğrudur</strong>?</p>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) Overriding aynı sınıfta farklı parametrelerle yapılır</button>
    <button class="q-opt" data-opt="b">B) Overloading için virtual anahtar kelimesi zorunludur</button>
    <button class="q-opt" data-opt="c">C) İkisi de yalnızca çalışma zamanında çözülür</button>
    <button class="q-opt" data-opt="d">D) Overriding miras ilişkisi gerektirir ve çalışma zamanında çözülür; overloading aynı sınıfta derleme zamanında çözülür</button>
  </div>
  <div class="q-explain"><strong>Cevap: D.</strong> Özet formül: overloading = aynı sınıf + farklı parametre + derleme zamanı; overriding = miras + aynı imza + virtual/override + çalışma zamanı. A şıkkı iki kavramın tanımlarını birbirine geçirmiş, B virtual'ı yanlış kavrama bağlamış, C overloading'i çalışma zamanına taşımıştır.</div>
</div>

<div class="quiz-q" data-answer="a">
  <p class="q-text"><strong>Soru 7.</strong> Field'ları private yapıp dışarıya property üzerinden kontrollü erişim sunmak hangi OOP ilkesidir?</p>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) Encapsulation (kapsülleme)</button>
    <button class="q-opt" data-opt="b">B) Inheritance (kalıtım)</button>
    <button class="q-opt" data-opt="c">C) Polymorphism (çok biçimlilik)</button>
    <button class="q-opt" data-opt="d">D) Overloading</button>
  </div>
  <div class="q-explain"><strong>Cevap: A.</strong> Veriyi saklayıp (private field) erişimi kapıdan (property/metot) geçirmek kapsüllemenin tanımıdır. Kalıtım devralma, polymorphism farklı davranma ilkesidir; overloading ise OOP'nin 4 ilkesinden biri bile değildir.</div>
</div>

<h2>🔁 Mini Tekrar</h2>
<div class="table-wrap"><table>
<thead><tr><th>Kavram</th><th>Özet</th></tr></thead>
<tbody>
<tr><td>Class / Object</td><td>Şablon / new ile üretilen örnek</td></tr>
<tr><td>Constructor</td><td>Sınıfla aynı isim, dönüş tipi YOK, new'de çalışır</td></tr>
<tr><td>Encapsulation</td><td>private field + public property</td></tr>
<tr><td>Inheritance</td><td>class B : A — C#'ta tek sınıftan miras</td></tr>
<tr><td>Polymorphism</td><td>virtual (taban) + override (türeyen); çalışma zamanı</td></tr>
<tr><td>Abstraction</td><td>abstract class / interface; ikisi de new'lenemez</td></tr>
<tr><td>Overloading</td><td>Aynı sınıf, farklı parametre, derleme zamanı</td></tr>
<tr><td>Overriding</td><td>Miras, aynı imza, çalışma zamanı</td></tr>
<tr><td>public / private</td><td>Her yer / sadece sınıf içi</td></tr>
<tr><td>protected / internal</td><td>Sınıf + mirasçılar / aynı assembly</td></tr>
</tbody>
</table></div>
`
  }
]);
