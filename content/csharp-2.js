window.SINAV.register([
  {
    module: 'csharp',
    id: 'cs-09-interface-abstract',
    order: 9,
    title: 'Interface ve Abstract Class',
    html: `
<h2>📖 Konu Anlatımı</h2>

<h3>Interface (Arayüz): Bir Sözleşme</h3>
<p>Interface, bir sınıfın <strong>"şu yetenekleri sağlayacağım" diye imzaladığı sözleşmedir</strong>. İçinde klasik olarak sadece metot imzaları bulunur; gövde (kod) yoktur. Interface'i uygulayan (implement eden) her sınıf, bu imzaların tamamını kendi içinde yazmak <strong>zorundadır</strong>.</p>
<pre><code class="lang-csharp">interface IAnimal
{
    void Speak();   // sadece imza var, gövde YOK
}

class Dog : IAnimal
{
    public void Speak()   // sözleşme gereği yazmak ZORUNDASIN
    {
        Console.WriteLine("Hav!");
    }
}</code></pre>
<div class="callout info"><p><strong>Bilgi:</strong> Interface üyeleri <strong>varsayılan olarak public</strong> kabul edilir; imzaların başına ayrıca public yazılmaz. Uygulayan sınıfta ise metot <code>public</code> olarak yazılmalıdır. İsimlendirme geleneği: interface adları <strong>I</strong> harfiyle başlar (IAnimal, IDisposable, IComparable).</p></div>

<h3>Abstract Class: Ortak Temel Sınıf</h3>
<p>Abstract class, <strong>yarım bırakılmış bir temel sınıftır</strong>. Hem gövdesiz (abstract) metotlar hem de gövdeli (hazır kod içeren) metotlar barındırabilir. Yani "ortak kodu ben yazayım, özel davranışı çocuklarım tamamlasın" mantığıyla çalışır.</p>
<pre><code class="lang-csharp">abstract class Animal
{
    public abstract void Speak();   // gövdesiz: türeyen sınıf override ETMEK ZORUNDA

    public void Sleep()             // gövdeli ortak kod: tüm çocuklara hazır gelir
    {
        Console.WriteLine("Sleeping");
    }
}

class Cat : Animal
{
    public override void Speak()    // abstract metot mutlaka override edilir
    {
        Console.WriteLine("Miyav!");
    }
}</code></pre>
<ul>
  <li><strong>abstract metot</strong> gövdesizdir ve türeyen somut sınıfta <code>override</code> edilmesi <strong>zorunludur</strong>.</li>
  <li><strong>virtual metot</strong> ise gövdelidir; override etmek <strong>isteğe bağlıdır</strong>. Bu ikisini karıştırma!</li>
  <li>Abstract class içinde alan (field), constructor ve normal metotlar da bulunabilir.</li>
</ul>

<h3>Nesne Üretilemez!</h3>
<p>Hem interface'ten hem abstract class'tan <strong>doğrudan nesne üretilemez</strong>:</p>
<pre><code class="lang-csharp">// Animal a = new Animal();    // HATA! Abstract sınıftan nesne üretilemez
// IAnimal i = new IAnimal();  // HATA! Interface'ten nesne üretilemez

Animal a = new Cat();     // GEÇERLİ: referans tipi abstract, nesne somut sınıftan
IAnimal i = new Dog();    // GEÇERLİ: interface referansı somut nesneyi gösterebilir</code></pre>

<h3>Çoklu Kalıtım Meselesi (Çok Sorulur!)</h3>
<p>C#'ta bir sınıf <strong>yalnızca BİR sınıftan miras alabilir</strong>; çoklu sınıf kalıtımı yoktur. Ama bir sınıf <strong>istediği kadar interface uygulayabilir</strong>:</p>
<pre><code class="lang-csharp">class Robot : Machine, IWalker, ITalker { }   // GEÇERLİ: 1 sınıf + N interface
// class X : Machine, Vehicle { }             // HATA! İki sınıftan miras alınamaz</code></pre>
<div class="callout tip"><p><strong>Ezber hilesi:</strong> "Tek anne, çok meslek." Bir sınıfın tek ebeveyn sınıfı (anne) olur ama birden çok interface'i (meslek sertifikası) olabilir.</p></div>

<h2>⚠️ Karıştırılan Kavramlar</h2>

<div class="table-wrap"><table>
<thead><tr><th>Özellik</th><th>Interface</th><th>Abstract Class</th></tr></thead>
<tbody>
<tr><td>Mantığı</td><td>Sözleşme: "şunları yapacaksın"</td><td>Ortak temel sınıf: "yarısını ben yazdım"</td></tr>
<tr><td>Gövdeli metot</td><td>Klasik olarak yok (yalnızca imza)</td><td>Olabilir (ortak kod barındırır)</td></tr>
<tr><td>Alan (field)</td><td>Yok</td><td>Olabilir</td></tr>
<tr><td>Constructor</td><td>Yok</td><td>Olabilir</td></tr>
<tr><td>Çoklu kullanım</td><td>Bir sınıf ÇOK interface uygulayabilir</td><td>Yalnızca TEK sınıftan miras alınır</td></tr>
<tr><td>Nesne üretimi</td><td>Üretilemez</td><td>Üretilemez</td></tr>
<tr><td>Üye erişimi</td><td>Varsayılan public</td><td>Erişim belirleyiciler serbest</td></tr>
</tbody>
</table></div>

<div class="callout warn"><p><strong>Tuzak:</strong> "Nesne üretilemez" özelliği ikisinde de ortaktır — sınavda "hangisinden nesne üretilemez?" sorusunda <strong>ikisi de</strong> doğru cevaptır. Asıl ayırt edici fark: <strong>gövdeli kod ve alan barındırma (abstract class) ile çoklu uygulanabilme (interface)</strong>.</p></div>
<div class="callout warn"><p><strong>Tuzak:</strong> <code>abstract</code> metot ile <code>virtual</code> metot karıştırılır. abstract = gövdesiz + override <strong>zorunlu</strong>; virtual = gövdeli + override <strong>isteğe bağlı</strong>.</p></div>

<h2>🎯 Sınavda Nasıl Sorulur?</h2>
<ul>
  <li><strong>"Hangisi interface'in / abstract class'ın özelliğidir?"</strong> — tablo bilgisini doğrudan ölçer (çoklu uygulama, gövdeli kod, nesne üretimi).</li>
  <li><strong>"Bu kod derlenir mi?"</strong> — abstract metodu override etmeyen sınıf, iki sınıftan miras almaya çalışan kod, new ile abstract nesne üretme.</li>
  <li><strong>"Abstract metot için hangisi doğrudur?"</strong> — gövdesizdir ve override zorunludur.</li>
  <li><strong>Polimorfizm bağlantısı:</strong> <code>Animal a = new Cat();</code> geçerli midir, <code>a.Speak()</code> hangi metodu çağırır?</li>
  <li><strong>İsimlendirme/erişim detayı:</strong> interface üyeleri varsayılan public mıdır, interface adı neyle başlar?</li>
</ul>

<h2>✍️ Örnek Sorular</h2>

<div class="quiz-q" data-answer="a">
  <p class="q-text"><strong>Soru 1.</strong> C#'ta kalıtım ve interface uygulamasıyla ilgili hangisi doğrudur?</p>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) Bir sınıf tek sınıftan miras alabilir ama birden fazla interface uygulayabilir</button>
    <button class="q-opt" data-opt="b">B) Bir sınıf birden fazla sınıftan miras alabilir</button>
    <button class="q-opt" data-opt="c">C) Bir sınıf en fazla bir interface uygulayabilir</button>
    <button class="q-opt" data-opt="d">D) Interface uygulayan sınıf başka sınıftan miras alamaz</button>
  </div>
  <div class="q-explain"><strong>Cevap: A.</strong> C#'ta çoklu sınıf kalıtımı yoktur (B yanlış) ama çoklu interface uygulanabilir (C yanlış). Sınıf hem bir sınıftan miras alıp hem interface uygulayabilir (D yanlış).</div>
</div>

<div class="quiz-q" data-answer="c">
  <p class="q-text"><strong>Soru 2.</strong> Interface içinde tanımlanan üyelerin varsayılan erişim belirleyicisi nedir?</p>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) private</button>
    <button class="q-opt" data-opt="b">B) protected</button>
    <button class="q-opt" data-opt="c">C) public</button>
    <button class="q-opt" data-opt="d">D) internal</button>
  </div>
  <div class="q-explain"><strong>Cevap: C.</strong> Interface bir sözleşmedir; dış dünyaya açık olması gerektiği için üyeleri varsayılan olarak public kabul edilir. private/protected üyeler sözleşme mantığına aykırıdır.</div>
</div>

<div class="quiz-q" data-answer="b">
  <p class="q-text"><strong>Soru 3.</strong> Aşağıdaki kod için ne söylenebilir?</p>
  <pre><code class="lang-csharp">abstract class Sekil
{
    public abstract double Alan();
}

class Kare : Sekil
{
    public double Kenar = 4;
    // Alan() metodu yazılmadı
}</code></pre>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) Sorunsuz derlenir, Alan() varsayılan 0 döner</button>
    <button class="q-opt" data-opt="b">B) Derleme hatası: Kare, abstract Alan() metodunu override etmek zorundadır</button>
    <button class="q-opt" data-opt="c">C) Çalışma zamanında exception fırlatır</button>
    <button class="q-opt" data-opt="d">D) Kare sınıfı otomatik olarak abstract olur</button>
  </div>
  <div class="q-explain"><strong>Cevap: B.</strong> Somut (abstract olmayan) bir sınıf, miras aldığı tüm abstract metotları override etmek zorundadır; etmezse derleme hatası alınır. D'deki "otomatik abstract olma" diye bir mekanizma yoktur — Kare'yi abstract yapmak ancak senin elinle olur.</div>
</div>

<div class="quiz-q" data-answer="d">
  <p class="q-text"><strong>Soru 4.</strong> Aşağıdakilerden hangisi abstract class'ta bulunabilir ama klasik bir interface'te bulunamaz?</p>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) Gövdesiz metot imzası</button>
    <button class="q-opt" data-opt="b">B) public metot</button>
    <button class="q-opt" data-opt="c">C) void dönüş tipli metot</button>
    <button class="q-opt" data-opt="d">D) Alan (field) ve constructor</button>
  </div>
  <div class="q-explain"><strong>Cevap: D.</strong> Abstract class normal bir sınıf gibi alan, constructor ve gövdeli metot barındırabilir; klasik interface'te bunlar yoktur. A, B ve C interface'te de bulunabilen şeylerdir.</div>
</div>

<div class="quiz-q" data-answer="b">
  <p class="q-text"><strong>Soru 5. (Tuzak)</strong> Aşağıdaki kodun çıktısı nedir?</p>
  <pre><code class="lang-csharp">interface IAnimal { void Speak(); }

class Dog : IAnimal
{
    public void Speak() { Console.WriteLine("Hav"); }
}

class Program
{
    static void Main()
    {
        IAnimal a = new Dog();
        a.Speak();
    }
}</code></pre>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) Derleme hatası: interface tipinde değişken tanımlanamaz</button>
    <button class="q-opt" data-opt="b">B) Hav</button>
    <button class="q-opt" data-opt="c">C) Çalışma zamanında hata: interface'ten nesne üretilemez</button>
    <button class="q-opt" data-opt="d">D) Hiçbir şey yazdırmaz</button>
  </div>
  <div class="q-explain"><strong>Cevap: B.</strong> Tuzak şurada: new Dog() ile nesne <strong>somut sınıftan</strong> üretiliyor; interface yalnızca <strong>referans tipi</strong> olarak kullanılıyor. Bu tamamen geçerlidir ve polimorfizmin temelidir. "new IAnimal()" yazılsaydı hata olurdu — ama burada öyle bir şey yok.</div>
</div>

<h2>🔁 Mini Tekrar</h2>
<div class="table-wrap"><table>
<thead><tr><th>Kavram</th><th>Akılda Kalacak Kural</th></tr></thead>
<tbody>
<tr><td>Interface</td><td>Sözleşme; sadece imza; üyeler varsayılan public; ÇOK sayıda uygulanabilir</td></tr>
<tr><td>Abstract class</td><td>Ortak temel sınıf; gövdeli kod + alan + constructor olabilir; TEK miras</td></tr>
<tr><td>abstract metot</td><td>Gövdesiz; türeyen somut sınıfta override ZORUNLU</td></tr>
<tr><td>virtual metot</td><td>Gövdeli; override İSTEĞE BAĞLI</td></tr>
<tr><td>Nesne üretimi</td><td>İkisinden de new ile nesne üretilemez; referans tipi olarak kullanılabilirler</td></tr>
<tr><td>Çoklu kalıtım</td><td>Sınıftan: HAYIR — Interface'ten: EVET ("tek anne, çok meslek")</td></tr>
</tbody>
</table></div>
`
  },
  {
    module: 'csharp',
    id: 'cs-10-exception',
    order: 10,
    title: 'Exception Handling',
    html: `
<h2>📖 Konu Anlatımı</h2>

<h3>Exception Nedir?</h3>
<p><strong>Exception (istisna)</strong>, program çalışırken ortaya çıkan beklenmedik hata durumudur: sıfıra bölme, olmayan dizine erişme, null nesneyi kullanma... Yakalanmazsa program <strong>çöker</strong>. Exception handling, bu hataları kontrollü şekilde yakalayıp programın devam etmesini sağlar.</p>

<h3>try - catch - finally - throw</h3>
<ul>
  <li><strong>try:</strong> Hata çıkma ihtimali olan kodu içine koyarsın.</li>
  <li><strong>catch:</strong> Hata olursa burası çalışır; hatayı yakalar.</li>
  <li><strong>finally:</strong> Hata olsa da olmasa da <strong>HER DURUMDA</strong> çalışır (dosya kapatma, bağlantı temizleme için ideal).</li>
  <li><strong>throw:</strong> Kendi elinle exception fırlatmanı sağlar.</li>
</ul>
<pre><code class="lang-csharp">int sifir = 0;
try
{
    int result = 10 / sifir;   // DivideByZeroException fırlatılır
    Console.WriteLine("Buraya hiç gelinmez");
}
catch (DivideByZeroException)
{
    Console.WriteLine("Sıfıra bölme hatası");
}
finally
{
    Console.WriteLine("İşlem tamamlandı");   // her koşulda yazılır
}
// Çıktı:
// Sıfıra bölme hatası
// İşlem tamamlandı</code></pre>
<div class="callout info"><p><strong>Bilgi:</strong> try bloğunda hata oluşan satırdan <strong>sonraki satırlar atlanır</strong>; akış doğrudan uygun catch bloğuna geçer. Hata hiç oluşmazsa catch atlanır ama finally yine çalışır.</p></div>
<p><code>throw</code> ile kendin hata fırlatabilirsin:</p>
<pre><code class="lang-csharp">static void YasKontrol(int yas)
{
    if (yas &lt; 0)
        throw new ArgumentException("Yaş negatif olamaz");
}</code></pre>

<h3>Sık Karşılaşılan Exception Türleri</h3>
<div class="table-wrap"><table>
<thead><tr><th>Exception</th><th>Ne Zaman Oluşur?</th><th>Örnek</th></tr></thead>
<tbody>
<tr><td><strong>NullReferenceException</strong></td><td>null bir nesnenin üyesine erişince</td><td><code>string s = null; s.Length</code></td></tr>
<tr><td><strong>IndexOutOfRangeException</strong></td><td>Dizide olmayan indise erişince</td><td><code>int[] d = new int[3]; d[5]</code></td></tr>
<tr><td><strong>DivideByZeroException</strong></td><td>Tam sayıyı sıfıra bölünce</td><td><code>10 / sifir</code></td></tr>
<tr><td><strong>FormatException</strong></td><td>Metin uygun formatta dönüştürülemeyince</td><td><code>int.Parse("abc")</code></td></tr>
</tbody>
</table></div>

<h3>Birden Çok catch: Spesifik Önce!</h3>
<p>Birden fazla catch bloğu yazılabilir; ama <strong>spesifik (özel) exception türü önce, genel Exception en sonda</strong> olmalıdır. Aksi halde derleme hatası alırsın çünkü genel Exception her şeyi yakalar ve alttaki bloklara hiç sıra gelmez:</p>
<pre><code class="lang-csharp">try
{
    int sayi = int.Parse(Console.ReadLine());
}
catch (FormatException)          // spesifik ÖNCE
{
    Console.WriteLine("Sayı formatı hatalı");
}
catch (Exception ex)             // genel EN SONDA
{
    Console.WriteLine("Beklenmedik hata: " + ex.Message);
}</code></pre>

<h2>⚠️ Karıştırılan Kavramlar</h2>

<div class="table-wrap"><table>
<thead><tr><th>Durum</th><th>catch çalışır mı?</th><th>finally çalışır mı?</th></tr></thead>
<tbody>
<tr><td>try'da hata YOK</td><td>Hayır</td><td><strong>Evet</strong></td></tr>
<tr><td>try'da hata VAR, catch yakaladı</td><td>Evet</td><td><strong>Evet</strong></td></tr>
<tr><td>try içinde return var</td><td>—</td><td><strong>Evet (return'den önce çalışır)</strong></td></tr>
</tbody>
</table></div>

<div class="callout warn"><p><strong>Tuzak:</strong> "finally sadece hata olursa çalışır" çeldiricisine düşme! finally'nin tek görevi <strong>her durumda</strong> çalışmaktır — hata olsa da, olmasa da, hatta try içinde return olsa bile.</p></div>
<div class="callout warn"><p><strong>Tuzak:</strong> <code>int.Parse("abc")</code> sorusunda çeldirici olarak NullReferenceException verilir; doğru cevap <strong>FormatException</strong>'dır. null nesneye erişim ise NullReferenceException üretir — ikisini karıştırma.</p></div>

<h2>🎯 Sınavda Nasıl Sorulur?</h2>
<ul>
  <li><strong>"Hangi sırayla yazdırılır?"</strong> — try/catch/finally içine Console.WriteLine'lar konur, akışı takip etmen istenir. En klasik soru tipi!</li>
  <li><strong>"Bu kod hangi exception'ı fırlatır?"</strong> — int.Parse("abc"), dizi taşması, null erişim, sıfıra bölme eşleştirmesi.</li>
  <li><strong>"finally bloğu için hangisi doğrudur?"</strong> — her durumda çalıştığı bilgisi.</li>
  <li><strong>catch sıralaması:</strong> genel Exception'ı başa yazan kodun derlenip derlenmeyeceği.</li>
  <li><strong>throw'un görevi:</strong> hata fırlatma ile hata yakalamayı (catch) ayırt etme.</li>
</ul>

<h2>✍️ Örnek Sorular</h2>

<div class="quiz-q" data-answer="b">
  <p class="q-text"><strong>Soru 1.</strong> finally bloğu ne zaman çalışır?</p>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) Sadece try bloğunda hata oluşursa</button>
    <button class="q-opt" data-opt="b">B) Hata olsa da olmasa da her durumda</button>
    <button class="q-opt" data-opt="c">C) Sadece catch bloğu çalışmazsa</button>
    <button class="q-opt" data-opt="d">D) Sadece hata oluşmazsa</button>
  </div>
  <div class="q-explain"><strong>Cevap: B.</strong> finally'nin var olma amacı budur: temizlik kodunun (dosya/bağlantı kapatma) her koşulda çalışmasını garanti eder. A, C ve D "koşula bağlı" çalıştığını söylediği için yanlıştır.</div>
</div>

<div class="quiz-q" data-answer="d">
  <p class="q-text"><strong>Soru 2.</strong> <code>int.Parse("abc")</code> ifadesi hangi exception'ı fırlatır?</p>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) NullReferenceException</button>
    <button class="q-opt" data-opt="b">B) IndexOutOfRangeException</button>
    <button class="q-opt" data-opt="c">C) DivideByZeroException</button>
    <button class="q-opt" data-opt="d">D) FormatException</button>
  </div>
  <div class="q-explain"><strong>Cevap: D.</strong> "abc" metni sayıya dönüştürülemediği için format hatasıdır. NullReferenceException null nesneye erişimde (A), IndexOutOfRangeException dizi taşmasında (B), DivideByZeroException sıfıra bölmede (C) oluşur.</div>
</div>

<div class="quiz-q" data-answer="a">
  <p class="q-text"><strong>Soru 3.</strong> Aşağıdaki kodun çıktısı hangi sırayla olur?</p>
  <pre><code class="lang-csharp">int sifir = 0;
try
{
    Console.WriteLine("A");
    int x = 5 / sifir;
    Console.WriteLine("B");
}
catch (DivideByZeroException)
{
    Console.WriteLine("C");
}
finally
{
    Console.WriteLine("D");
}</code></pre>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) A - C - D</button>
    <button class="q-opt" data-opt="b">B) A - B - C - D</button>
    <button class="q-opt" data-opt="c">C) A - D</button>
    <button class="q-opt" data-opt="d">D) C - D</button>
  </div>
  <div class="q-explain"><strong>Cevap: A.</strong> Önce "A" yazılır; bölme satırında exception fırlar, bu yüzden "B" hiç çalışmaz; akış catch'e geçer ("C"), en son finally çalışır ("D"). B şıkkı "B"yi de yazdırdığı için, C şıkkı catch'i atladığı için yanlıştır.</div>
</div>

<div class="quiz-q" data-answer="c">
  <p class="q-text"><strong>Soru 4.</strong> Aşağıdaki kod için ne söylenebilir?</p>
  <pre><code class="lang-csharp">try
{
    int sayi = int.Parse("12x");
}
catch (Exception)
{
    Console.WriteLine("Genel hata");
}
catch (FormatException)
{
    Console.WriteLine("Format hatası");
}</code></pre>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) "Format hatası" yazdırır</button>
    <button class="q-opt" data-opt="b">B) "Genel hata" yazdırır ve sorunsuz derlenir</button>
    <button class="q-opt" data-opt="c">C) Derleme hatası: genel Exception, spesifik FormatException'dan önce yazılamaz</button>
    <button class="q-opt" data-opt="d">D) İki catch bloğu da sırayla çalışır</button>
  </div>
  <div class="q-explain"><strong>Cevap: C.</strong> Genel Exception her hatayı yakalayacağı için sonraki FormatException bloğuna asla ulaşılamaz; C# derleyicisi bunu "ulaşılamaz catch" hatası olarak işaretler. Doğru sıra: spesifik önce, genel sonra. D ayrıca yanlış: bir hatayı yalnızca TEK catch bloğu yakalar.</div>
</div>

<div class="quiz-q" data-answer="c">
  <p class="q-text"><strong>Soru 5. (Tuzak)</strong> Aşağıdaki metot çağrıldığında çıktı ne olur?</p>
  <pre><code class="lang-csharp">static int Hesapla()
{
    try
    {
        return 1;
    }
    finally
    {
        Console.WriteLine("F");
    }
}

static void Main()
{
    Console.WriteLine(Hesapla());
}</code></pre>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) Sadece 1 (finally çalışmaz çünkü return var)</button>
    <button class="q-opt" data-opt="b">B) 1 sonra F</button>
    <button class="q-opt" data-opt="c">C) F sonra 1</button>
    <button class="q-opt" data-opt="d">D) Derleme hatası: try içinde return kullanılamaz</button>
  </div>
  <div class="q-explain"><strong>Cevap: C.</strong> finally, metot return ile çıkmadan hemen önce çalışır: önce "F" yazılır, sonra Main'deki WriteLine dönen 1 değerini basar. Tuzak A şıkkıdır — return bile finally'yi atlatamaz. D yanlış: try içinde return tamamen geçerlidir.</div>
</div>

<h2>🔁 Mini Tekrar</h2>
<div class="table-wrap"><table>
<thead><tr><th>Kavram</th><th>Akılda Kalacak Kural</th></tr></thead>
<tbody>
<tr><td>try</td><td>Riskli kod buraya; hata çıkan satırdan sonrası atlanır</td></tr>
<tr><td>catch</td><td>Hatayı yakalar; spesifik tür ÖNCE, genel Exception EN SONDA</td></tr>
<tr><td>finally</td><td>HER DURUMDA çalışır (hata olsa da, return olsa da)</td></tr>
<tr><td>throw</td><td>Kendi elinle exception fırlatır</td></tr>
<tr><td>int.Parse("abc")</td><td>FormatException</td></tr>
<tr><td>null nesneye erişim</td><td>NullReferenceException</td></tr>
<tr><td>dizi[olmayanIndis]</td><td>IndexOutOfRangeException</td></tr>
<tr><td>tam sayı / 0</td><td>DivideByZeroException</td></tr>
</tbody>
</table></div>
`
  },
  {
    module: 'csharp',
    id: 'cs-11-string',
    order: 11,
    title: 'String İşlemleri',
    html: `
<h2>📖 Konu Anlatımı</h2>

<h3>Temel String Üyeleri</h3>
<p>String, metin tutan veri tipidir ve üzerinde çok kullanılan hazır üyeler vardır. Önce hepsini tek tabloda gör:</p>
<div class="table-wrap"><table>
<thead><tr><th>Üye</th><th>Ne Yapar?</th><th>Örnek → Sonuç</th></tr></thead>
<tbody>
<tr><td><code>Length</code></td><td>Karakter sayısını verir (<strong>property'dir, parantezsiz!</strong>)</td><td><code>"Baran".Length</code> → 5</td></tr>
<tr><td><code>ToUpper()</code></td><td>Tümünü büyük harfe çevirir</td><td><code>"abc".ToUpper()</code> → "ABC"</td></tr>
<tr><td><code>ToLower()</code></td><td>Tümünü küçük harfe çevirir</td><td><code>"ABC".ToLower()</code> → "abc"</td></tr>
<tr><td><code>Trim()</code></td><td>Baştaki ve sondaki boşlukları kırpar</td><td><code>"  ab  ".Trim()</code> → "ab"</td></tr>
<tr><td><code>Contains("x")</code></td><td>İçinde geçiyor mu? (bool)</td><td><code>"kalem".Contains("ale")</code> → true</td></tr>
<tr><td><code>StartsWith("x")</code></td><td>Bununla mı başlıyor? (bool)</td><td><code>"kalem".StartsWith("ka")</code> → true</td></tr>
<tr><td><code>EndsWith("x")</code></td><td>Bununla mı bitiyor? (bool)</td><td><code>"kalem".EndsWith("em")</code> → true</td></tr>
<tr><td><code>Substring(b, u)</code></td><td>b indisinden başlayıp u karakter alır</td><td><code>"Bilgisayar".Substring(0, 5)</code> → "Bilgi"</td></tr>
<tr><td><code>Replace("a", "e")</code></td><td>Tüm a'ları e yapar, <strong>YENİ string döndürür</strong></td><td><code>"kalem".Replace("a", "e")</code> → "kelem"</td></tr>
<tr><td><code>Split(',')</code></td><td>Ayırıcıya göre böler, <strong>string DİZİSİ döndürür</strong></td><td><code>"a,b,c".Split(',')</code> → ["a","b","c"]</td></tr>
</tbody>
</table></div>

<h3>Substring'in Parametreleri</h3>
<p><code>Substring(başlangıç, uzunluk)</code>: ilk parametre <strong>başlangıç indisi</strong> (0'dan sayılır), ikinci parametre <strong>kaç karakter alınacağı</strong>dır. "İkinci parametre bitiş indisi" sanmak klasik hatadır!</p>
<pre><code class="lang-csharp">string kelime = "Bilgisayar";
//               0123456789
Console.WriteLine(kelime.Substring(2, 3));   // "lgi" (2. indisten 3 karakter)
Console.WriteLine(kelime.Substring(5));      // "sayar" (5. indisten sonuna kadar)</code></pre>

<h3>Split: Diziye Bölme</h3>
<pre><code class="lang-csharp">string veri = "elma,armut,kiraz";
string[] parcalar = veri.Split(',');    // dönüş tipi string[] (DİZİ)
Console.WriteLine(parcalar.Length);     // 3
Console.WriteLine(parcalar[1]);         // armut</code></pre>

<h3>String Interpolation</h3>
<p>Başına <code>$</code> konan string içinde süslü parantezle değişken kullanılır — en okunaklı birleştirme yöntemi:</p>
<pre><code class="lang-csharp">string name = "Baran";
int yas = 25;
Console.WriteLine($"Merhaba {name}");           // Merhaba Baran
Console.WriteLine($"{name} {yas} yaşında.");    // Baran 25 yaşında.</code></pre>

<h3>String Immutable'dır (ÇOK ÖNEMLİ)</h3>
<p>String <strong>değiştirilemez (immutable)</strong>: hiçbir string metodu orijinal değeri değiştirmez; hepsi <strong>yeni bir string döndürür</strong>. Sonucu kullanmak istiyorsan bir değişkene atamalısın.</p>
<pre><code class="lang-csharp">string s = "kalem";
s.Replace("a", "e");        // dönen yeni değer ÇÖPE gitti, s değişmedi
Console.WriteLine(s);       // kalem

s = s.Replace("a", "e");    // doğrusu: sonucu geri ata
Console.WriteLine(s);       // kelem</code></pre>
<div class="callout tip"><p><strong>İpucu:</strong> ToUpper, ToLower, Trim, Replace, Substring... hepsi aynı kuralla çalışır: <strong>"döndürür, değiştirmez."</strong> Sınavda "metot çağrılmış ama sonuç atanmamış" kodu görürsen çıktı her zaman ORİJİNAL string'tir.</p></div>

<h2>⚠️ Karıştırılan Kavramlar</h2>

<div class="table-wrap"><table>
<thead><tr><th>Karıştırılan</th><th>Doğrusu</th></tr></thead>
<tbody>
<tr><td>Length bir metot mu?</td><td>Hayır, <strong>property</strong>: <code>s.Length</code> (parantezsiz). <code>s.Length()</code> derleme hatasıdır</td></tr>
<tr><td>Substring(2, 3) → "2'den 3'e kadar mı?"</td><td>Hayır: 2. indisten başlayıp <strong>3 karakter</strong> alır</td></tr>
<tr><td>Replace orijinali değiştirir mi?</td><td>Hayır, <strong>yeni string döndürür</strong>; orijinal aynı kalır</td></tr>
<tr><td>Split ne döndürür?</td><td>Tek string değil, <strong>string dizisi (string[])</strong></td></tr>
<tr><td>Contains ne döndürür?</td><td>İndis değil, <strong>bool</strong> (true/false). İndis isteyen IndexOf kullanır</td></tr>
</tbody>
</table></div>

<div class="callout warn"><p><strong>Tuzak:</strong> En klasik string tuzağı: <code>s.ToUpper();</code> satırından sonra <code>Console.WriteLine(s)</code> hâlâ <strong>küçük harfli orijinali</strong> yazar. Atama yapılmadıysa string değişmez!</p></div>

<h2>🎯 Sınavda Nasıl Sorulur?</h2>
<ul>
  <li><strong>"Bu kodun çıktısı nedir?"</strong> — Substring/Replace/Trim zinciri verilir, karakter karakter takip etmen beklenir.</li>
  <li><strong>Immutable tuzağı:</strong> metot çağrılır ama sonucu atanmaz; çıktının orijinal string olduğunu görmen istenir.</li>
  <li><strong>"Split'in dönüş tipi nedir?"</strong> veya bölünmüş dizinin belli bir elemanı sorulur.</li>
  <li><strong>Length sorusu:</strong> boşluklar dahil karakter sayısı; property/metot ayrımı.</li>
  <li><strong>Interpolation okuma:</strong> $"..." içindeki ifadenin sonucu sorulur.</li>
</ul>

<h2>✍️ Örnek Sorular</h2>

<div class="quiz-q" data-answer="c">
  <p class="q-text"><strong>Soru 1.</strong> <code>Console.WriteLine("merhaba".ToUpper());</code> kodunun çıktısı nedir?</p>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) merhaba</button>
    <button class="q-opt" data-opt="b">B) Merhaba</button>
    <button class="q-opt" data-opt="c">C) MERHABA</button>
    <button class="q-opt" data-opt="d">D) Derleme hatası</button>
  </div>
  <div class="q-explain"><strong>Cevap: C.</strong> ToUpper tüm harfleri büyütür. B çeldirici: sadece ilk harfi büyüten hazır bir string metodu yoktur. Burada dönen değer doğrudan WriteLine'a verildiği için immutable tuzağı da yok.</div>
</div>

<div class="quiz-q" data-answer="a">
  <p class="q-text"><strong>Soru 2.</strong> <code>"a,b,c".Split(',')</code> ifadesinin dönüş tipi nedir?</p>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) string[] (string dizisi)</button>
    <button class="q-opt" data-opt="b">B) string</button>
    <button class="q-opt" data-opt="c">C) char[]</button>
    <button class="q-opt" data-opt="d">D) int</button>
  </div>
  <div class="q-explain"><strong>Cevap: A.</strong> Split, metni ayırıcıya göre parçalara böler ve bu parçaları string dizisi olarak döndürür: ["a", "b", "c"]. Tek string döndürmez (B); karakter dizisi de döndürmez (C).</div>
</div>

<div class="quiz-q" data-answer="d">
  <p class="q-text"><strong>Soru 3.</strong> Aşağıdaki kodun çıktısı nedir?</p>
  <pre><code class="lang-csharp">string kelime = "Bilgisayar";
Console.WriteLine(kelime.Substring(2, 3));</code></pre>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) il</button>
    <button class="q-opt" data-opt="b">B) ilg</button>
    <button class="q-opt" data-opt="c">C) lg</button>
    <button class="q-opt" data-opt="d">D) lgi</button>
  </div>
  <div class="q-explain"><strong>Cevap: D.</strong> İndisler 0'dan başlar: B(0) i(1) l(2) g(3) i(4)... 2. indisten başlayıp 3 karakter: "lgi". B çeldiricisi 1. indisten başlayanlar için; "2'den 3'e kadar" diye okuyanlar da yanılır — ikinci parametre UZUNLUKTUR.</div>
</div>

<div class="quiz-q" data-answer="b">
  <p class="q-text"><strong>Soru 4.</strong> Aşağıdaki kodun çıktısı nedir?</p>
  <pre><code class="lang-csharp">string s = "kalem";
s.Replace("a", "e");
Console.WriteLine(s);</code></pre>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) kelem</button>
    <button class="q-opt" data-opt="b">B) kalem</button>
    <button class="q-opt" data-opt="c">C) keleme</button>
    <button class="q-opt" data-opt="d">D) Derleme hatası</button>
  </div>
  <div class="q-explain"><strong>Cevap: B.</strong> Klasik immutable tuzağı! Replace yeni bir string döndürür ama sonuç hiçbir değişkene atanmadığı için kaybolur; s orijinal haliyle kalır. "kelem" çıkması için s = s.Replace("a", "e") yazılmalıydı.</div>
</div>

<div class="quiz-q" data-answer="a">
  <p class="q-text"><strong>Soru 5. (Tuzak)</strong> Aşağıdaki kodun çıktısı nedir?</p>
  <pre><code class="lang-csharp">string s = " abc ";
s.Trim();
Console.WriteLine(s.Length);</code></pre>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) 5</button>
    <button class="q-opt" data-opt="b">B) 3</button>
    <button class="q-opt" data-opt="c">C) 4</button>
    <button class="q-opt" data-opt="d">D) Derleme hatası: Length() metot olarak çağrılmalıydı</button>
  </div>
  <div class="q-explain"><strong>Cevap: A.</strong> Çifte kontrol gerektiren soru: (1) Trim'in sonucu atanmadığı için s hâlâ " abc " — boşluklar duruyor; (2) Length boşlukları da sayar: 1 + 3 + 1 = 5. B şıkkı Trim'in orijinali değiştirdiğini sananlar için. D yanlış: Length property'dir, parantezsiz kullanım doğrudur.</div>
</div>

<h2>🔁 Mini Tekrar</h2>
<div class="table-wrap"><table>
<thead><tr><th>Kavram</th><th>Akılda Kalacak Kural</th></tr></thead>
<tbody>
<tr><td>Immutable</td><td>String metotları orijinali DEĞİŞTİRMEZ, yeni string DÖNDÜRÜR — atamazsan kaybolur</td></tr>
<tr><td>Length</td><td>Property (parantezsiz), boşluklar dahil karakter sayısı</td></tr>
<tr><td>Substring(b, u)</td><td>b indisinden başla, u karakter al (u bitiş indisi DEĞİL)</td></tr>
<tr><td>Split</td><td>string[] (dizi) döndürür</td></tr>
<tr><td>Contains / StartsWith / EndsWith</td><td>Hepsi bool döndürür</td></tr>
<tr><td>$"Merhaba {name}"</td><td>String interpolation: değişken süslü parantezle gömülür</td></tr>
</tbody>
</table></div>
`
  },
  {
    module: 'csharp',
    id: 'cs-12-linq',
    order: 12,
    title: 'LINQ',
    html: `
<h2>📖 Konu Anlatımı</h2>

<h3>LINQ Nedir?</h3>
<p><strong>LINQ (Language Integrated Query)</strong>, koleksiyonlar (dizi, List vb.) üzerinde sorgu yazmanı sağlayan C# özelliğidir: filtrele, dönüştür, sırala, grupla, topla... Hepsi metot zinciriyle yapılır ve genelde lambda ifadeleriyle kullanılır.</p>
<pre><code class="lang-csharp">List&lt;int&gt; numbers = new List&lt;int&gt; { 3, 8, 12, 5, 20 };
var result = numbers.Where(x =&gt; x &gt; 10).ToList();   // [12, 20]</code></pre>

<h3>Filtreleme ve Dönüştürme: Where / Select</h3>
<ul>
  <li><strong>Where:</strong> Koşulu sağlayan elemanların <strong>TÜMÜNÜ</strong> döndürür (filtre).</li>
  <li><strong>Select:</strong> Her elemanı <strong>dönüştürür</strong> (eleman sayısı değişmez). Dikkat: SQL'deki SELECT gibi "seçme" değil, <strong>dönüştürme</strong> yapar!</li>
</ul>
<pre><code class="lang-csharp">int[] sayilar = { 1, 2, 3, 4, 5 };

var ciftler = sayilar.Where(x =&gt; x % 2 == 0);    // [2, 4]      (filtre)
var kareler = sayilar.Select(x =&gt; x * x);        // [1,4,9,16,25] (dönüşüm)</code></pre>

<h3>Sıralama: OrderBy / OrderByDescending</h3>
<pre><code class="lang-csharp">int[] sayilar = { 5, 1, 4 };
var artan  = sayilar.OrderBy(x =&gt; x);              // [1, 4, 5]
var azalan = sayilar.OrderByDescending(x =&gt; x);    // [5, 4, 1]</code></pre>

<h3>Tek Eleman Getirenler: First / FirstOrDefault / Single / SingleOrDefault</h3>
<p>Bu dörtlü sınavın gözdesidir; farkları net bil:</p>
<div class="table-wrap"><table>
<thead><tr><th>Metot</th><th>Davranış</th><th>Eleman yoksa</th><th>Birden çok eşleşme varsa</th></tr></thead>
<tbody>
<tr><td><strong>First</strong></td><td>İlk elemanı getirir</td><td><strong>HATA</strong> (exception)</td><td>Sorun yok, ilkini verir</td></tr>
<tr><td><strong>FirstOrDefault</strong></td><td>İlk elemanı getirir</td><td><strong>default döner</strong> (int için 0, referans için null)</td><td>Sorun yok, ilkini verir</td></tr>
<tr><td><strong>Single</strong></td><td>TAM tek eleman bekler</td><td><strong>HATA</strong></td><td><strong>HATA</strong></td></tr>
<tr><td><strong>SingleOrDefault</strong></td><td>0 veya 1 eleman kabul eder</td><td>default döner</td><td><strong>HATA</strong></td></tr>
</tbody>
</table></div>

<h3>Sorgu Metotları: Any / All / Count / Sum / Average</h3>
<pre><code class="lang-csharp">int[] notlar = { 60, 85, 90 };

bool gecenVar   = notlar.Any(x =&gt; x &gt;= 50);    // true  (en az biri sağlıyor mu?)
bool hepsiGecti = notlar.All(x =&gt; x &gt;= 50);    // true  (TÜMÜ sağlıyor mu?)
int adet        = notlar.Count(x =&gt; x &gt; 80);   // 2
int toplam      = notlar.Sum();                // 235
double ortalama = notlar.Average();            // 78.33...</code></pre>

<h3>Gruplama: GroupBy</h3>
<pre><code class="lang-csharp">string[] isimler = { "Ali", "Ayşe", "Berk" };
var gruplar = isimler.GroupBy(x =&gt; x[0]);   // baş harfe göre grupla
// 'A' grubu: Ali, Ayşe  |  'B' grubu: Berk
foreach (var grup in gruplar)
    Console.WriteLine(grup.Key + ": " + grup.Count());
// A: 2
// B: 1</code></pre>

<h3>Zincirleme Kullanım</h3>
<pre><code class="lang-csharp">var sonuc = numbers
    .Where(x =&gt; x &gt; 5)              // önce filtrele
    .OrderByDescending(x =&gt; x)      // sonra azalan sırala
    .Select(x =&gt; x * 10)            // sonra dönüştür
    .ToList();</code></pre>

<h2>⚠️ Karıştırılan Kavramlar</h2>

<div class="table-wrap"><table>
<thead><tr><th>Karşılaştırma</th><th>Fark</th></tr></thead>
<tbody>
<tr><td>Where ↔ Select</td><td>Where FİLTRELER (eleman sayısı azalabilir), Select DÖNÜŞTÜRÜR (eleman sayısı aynı kalır)</td></tr>
<tr><td>First ↔ FirstOrDefault</td><td>İkisi de ilkini getirir; eleman yoksa First HATA verir, FirstOrDefault default döner (0 / null)</td></tr>
<tr><td>Single ↔ First</td><td>Single "tam 1 tane olmalı" der, 2+ eşleşmede HATA verir; First ilkini alır, gerisine bakmaz</td></tr>
<tr><td>Any ↔ All</td><td>Any: "en az biri sağlıyor mu?", All: "tamamı sağlıyor mu?" — ikisi de bool döndürür</td></tr>
<tr><td>Count ↔ Sum</td><td>Count eleman SAYISINI, Sum elemanların TOPLAMINI verir</td></tr>
</tbody>
</table></div>

<div class="callout warn"><p><strong>Tuzak:</strong> "Listede eşleşen 2 eleman varken Single çağrılırsa ilkini döndürür" çeldiricisine düşme — Single bu durumda <strong>InvalidOperationException fırlatır</strong>. Birden çok eşleşmede güvenli olan First/FirstOrDefault'tur.</p></div>
<div class="callout warn"><p><strong>Tuzak:</strong> FirstOrDefault'un boş sonuçta döndürdüğü değer tipe bağlıdır: <strong>int için 0, string/sınıf için null</strong>. "Her zaman null döner" ifadesi yanlıştır.</p></div>

<h2>🎯 Sınavda Nasıl Sorulur?</h2>
<ul>
  <li><strong>"Sonuç ne olur?"</strong> — küçük sayı listesi + Where/Select/Count zinciri verilir, elemanları tek tek takip etmen istenir.</li>
  <li><strong>First/FirstOrDefault/Single ayrımı:</strong> "boş listede hangisi hata verir?", "2 eşleşmede Single ne yapar?"</li>
  <li><strong>Any/All okuma:</strong> verilen listede ifadenin true mu false mu döndüğü.</li>
  <li><strong>Where ile Select'i ayırt etme:</strong> hangisinin filtre, hangisinin dönüşüm olduğu.</li>
  <li><strong>Dönüş tipi soruları:</strong> Any → bool, Count → int, Where → koleksiyon.</li>
</ul>

<h2>✍️ Örnek Sorular</h2>

<div class="quiz-q" data-answer="b">
  <p class="q-text"><strong>Soru 1.</strong> Boş bir <code>List&lt;int&gt;</code> üzerinde <code>FirstOrDefault()</code> çağrılırsa ne olur?</p>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) InvalidOperationException fırlatır</button>
    <button class="q-opt" data-opt="b">B) 0 döner</button>
    <button class="q-opt" data-opt="c">C) null döner</button>
    <button class="q-opt" data-opt="d">D) -1 döner</button>
  </div>
  <div class="q-explain"><strong>Cevap: B.</strong> FirstOrDefault eleman yoksa tipin default değerini döndürür; int'in default'u 0'dır. C tuzak: null ancak referans tiplerinde (string, sınıf) döner. A, First için geçerli olurdu.</div>
</div>

<div class="quiz-q" data-answer="d">
  <p class="q-text"><strong>Soru 2.</strong> <code>numbers.Any(x =&gt; x &gt; 10)</code> ifadesinin dönüş tipi nedir?</p>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) int</button>
    <button class="q-opt" data-opt="b">B) List&lt;int&gt;</button>
    <button class="q-opt" data-opt="c">C) İlk eşleşen eleman</button>
    <button class="q-opt" data-opt="d">D) bool</button>
  </div>
  <div class="q-explain"><strong>Cevap: D.</strong> Any bir evet/hayır sorusudur: "en az bir eleman koşulu sağlıyor mu?" — bool döndürür. Eleman getiren First'le (C), sayı veren Count'la (A) karıştırma.</div>
</div>

<div class="quiz-q" data-answer="a">
  <p class="q-text"><strong>Soru 3.</strong> Aşağıdaki kodun çıktısı nedir?</p>
  <pre><code class="lang-csharp">List&lt;int&gt; numbers = new List&lt;int&gt; { 3, 8, 12, 5, 20 };
int sonuc = numbers.Where(x =&gt; x &gt; 6).Count();
Console.WriteLine(sonuc);</code></pre>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) 3</button>
    <button class="q-opt" data-opt="b">B) 2</button>
    <button class="q-opt" data-opt="c">C) 40</button>
    <button class="q-opt" data-opt="d">D) 8</button>
  </div>
  <div class="q-explain"><strong>Cevap: A.</strong> 6'dan büyük olanlar: 8, 12, 20 → 3 adet. C çeldiricisi (40) bu üçünün toplamı — Count ile Sum'ı karıştıranlar için. D ise ilk eşleşen eleman (First mantığı).</div>
</div>

<div class="quiz-q" data-answer="c">
  <p class="q-text"><strong>Soru 4.</strong> Aşağıdaki kodun çıktısı nedir?</p>
  <pre><code class="lang-csharp">int[] sayilar = { 1, 2, 3 };
var sonuc = sayilar.Select(x =&gt; x * 2).ToList();
Console.WriteLine(string.Join(",", sonuc));</code></pre>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) 2 (sadece koşulu sağlayan ilk eleman)</button>
    <button class="q-opt" data-opt="b">B) 1,2,3</button>
    <button class="q-opt" data-opt="c">C) 2,4,6</button>
    <button class="q-opt" data-opt="d">D) 2,3 (1'den büyük olanlar)</button>
  </div>
  <div class="q-explain"><strong>Cevap: C.</strong> Select her elemanı dönüştürür: 1→2, 2→4, 3→6. Eleman sayısı değişmez. D şıkkı Select'i filtre (Where) sananlar için çeldiricidir — x * 2 bir koşul değil, dönüşüm ifadesidir.</div>
</div>

<div class="quiz-q" data-answer="d">
  <p class="q-text"><strong>Soru 5. (Tuzak)</strong> Aşağıdaki kod çalıştırıldığında ne olur?</p>
  <pre><code class="lang-csharp">List&lt;int&gt; sayilar = new List&lt;int&gt; { 4, 7, 10, 7 };
int sonuc = sayilar.Single(x =&gt; x == 7);
Console.WriteLine(sonuc);</code></pre>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) 7 yazdırır (ilk eşleşeni getirir)</button>
    <button class="q-opt" data-opt="b">B) 14 yazdırır (eşleşenleri toplar)</button>
    <button class="q-opt" data-opt="c">C) 2 yazdırır (eşleşme sayısı)</button>
    <button class="q-opt" data-opt="d">D) InvalidOperationException fırlatır</button>
  </div>
  <div class="q-explain"><strong>Cevap: D.</strong> Single "tam olarak 1 eşleşme" bekler; listede iki tane 7 olduğu için exception fırlatır. A şıkkı First'ün davranışıdır — Single ile First'ü ayırt ettirmek bu sorunun tüm amacı.</div>
</div>

<div class="quiz-q" data-answer="a">
  <p class="q-text"><strong>Soru 6.</strong> Aşağıdaki kodun çıktısı nedir?</p>
  <pre><code class="lang-csharp">List&lt;string&gt; words = new List&lt;string&gt; { "elma", "armut" };
string sonuc = words.FirstOrDefault(w =&gt; w.StartsWith("k"));
Console.WriteLine(sonuc == null ? "null geldi" : sonuc);</code></pre>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) null geldi</button>
    <button class="q-opt" data-opt="b">B) elma</button>
    <button class="q-opt" data-opt="c">C) Boş string yazdırır</button>
    <button class="q-opt" data-opt="d">D) InvalidOperationException fırlatır</button>
  </div>
  <div class="q-explain"><strong>Cevap: A.</strong> "k" ile başlayan kelime yok; FirstOrDefault referans tipi olan string için default değer olan null döndürür. D, First kullanılsaydı doğru olurdu. C tuzak: default(string) boş string ("") değil, null'dır.</div>
</div>

<h2>🔁 Mini Tekrar</h2>
<div class="table-wrap"><table>
<thead><tr><th>Metot</th><th>Akılda Kalacak Kural</th></tr></thead>
<tbody>
<tr><td>Where</td><td>Filtre: koşulu sağlayanların TÜMÜ</td></tr>
<tr><td>Select</td><td>Dönüşüm: her eleman değişir, sayı aynı kalır</td></tr>
<tr><td>First / FirstOrDefault</td><td>İlk eleman; yoksa First HATA, FirstOrDefault default (0 / null)</td></tr>
<tr><td>Single / SingleOrDefault</td><td>Tam 1 eleman; 2+ eşleşmede İKİSİ DE hata</td></tr>
<tr><td>Any / All</td><td>Any: en az biri mi? All: hepsi mi? (bool)</td></tr>
<tr><td>Count / Sum / Average</td><td>Adet / toplam / ortalama</td></tr>
<tr><td>OrderBy / OrderByDescending</td><td>Artan / azalan sıralama</td></tr>
<tr><td>GroupBy</td><td>Anahtara göre gruplar (grup.Key ile erişilir)</td></tr>
</tbody>
</table></div>
`
  },
  {
    module: 'csharp',
    id: 'cs-13-generics',
    order: 13,
    title: 'Generics',
    html: `
<h2>📖 Konu Anlatımı</h2>

<h3>Generic Nedir?</h3>
<p><strong>Generic</strong>, tipin sonradan belirlendiği şablon yapıdır. <code>List&lt;T&gt;</code> yazımındaki <strong>T bir yer tutucudur (tip parametresi)</strong>: kullanırken <code>List&lt;int&gt;</code>, <code>List&lt;string&gt;</code> diye somut tip verirsin. Böylece aynı kod, farklı tiplerle <strong>tip güvenli</strong> şekilde çalışır.</p>
<pre><code class="lang-csharp">List&lt;string&gt; names = new List&lt;string&gt;();
names.Add("Ali");
// names.Add(5);   // DERLEME HATASI: bu listeye sadece string girer

List&lt;int&gt; sayilar = new List&lt;int&gt; { 1, 2, 3 };
Console.WriteLine(sayilar.Count);   // 3</code></pre>

<h3>Type Safety: Derleme Zamanında Güvence</h3>
<p>Generics'in en büyük avantajı: yanlış tip eklemeye çalıştığında hatayı <strong>program çalışmadan, derleme anında</strong> alırsın. Generic olmayan eski <code>ArrayList</code> ise her şeyi <code>object</code> olarak tuttuğu için hata ancak çalışma zamanında patlar:</p>
<pre><code class="lang-csharp">// ESKİ YOL: ArrayList (generic değil)
ArrayList liste = new ArrayList();
liste.Add(5);          // int → object'e BOXING (maliyetli)
liste.Add("merhaba");  // her tip girebilir, derleyici susar!
int x = (int)liste[1]; // ÇALIŞMA ZAMANINDA PATLAR (InvalidCastException)

// YENİ YOL: List&lt;int&gt; (generic)
List&lt;int&gt; liste2 = new List&lt;int&gt;();
liste2.Add(5);            // boxing YOK, tip belli
// liste2.Add("merhaba"); // DERLEME HATASI: hata daha yazarken yakalanır</code></pre>
<div class="callout info"><p><strong>Bilgi:</strong> ArrayList'e int eklemek, değeri object'e sarmalar (<strong>boxing</strong>); geri okurken kutudan çıkarılır (<strong>unboxing</strong>). Bu hem yavaştır hem hataya açıktır. Generics bu maliyeti ortadan kaldırır — sınavın sevdiği kıyas budur.</p></div>

<h3>Generic Metot</h3>
<pre><code class="lang-csharp">static void Print&lt;T&gt;(T value)
{
    Console.WriteLine(value);
}

Print(5);          // T = int olarak çıkarılır
Print("merhaba");  // T = string
Print(3.14);       // T = double</code></pre>

<h3>Generic Sınıf</h3>
<pre><code class="lang-csharp">class Kutu&lt;T&gt;
{
    public T Icerik;
}

Kutu&lt;int&gt; sayiKutusu = new Kutu&lt;int&gt;();
sayiKutusu.Icerik = 42;

Kutu&lt;string&gt; yaziKutusu = new Kutu&lt;string&gt;();
yaziKutusu.Icerik = "merhaba";</code></pre>

<h3>Dictionary&lt;TKey, TValue&gt;</h3>
<p>İki tip parametresi alır: <strong>TKey anahtar tipi, TValue değer tipi</strong>. Anahtarla hızlı erişim sağlar; anahtarlar benzersizdir.</p>
<pre><code class="lang-csharp">Dictionary&lt;string, int&gt; yaslar = new Dictionary&lt;string, int&gt;();
yaslar["Ali"] = 25;
yaslar["Ayşe"] = 30;
Console.WriteLine(yaslar["Ali"]);    // 25
Console.WriteLine(yaslar.Count);     // 2</code></pre>

<h2>⚠️ Karıştırılan Kavramlar</h2>

<div class="table-wrap"><table>
<thead><tr><th>Özellik</th><th>ArrayList (eski)</th><th>List&lt;T&gt; (generic)</th></tr></thead>
<tbody>
<tr><td>Tip kontrolü</td><td>Yok — her tip girer</td><td>Derleme zamanında SIKI kontrol</td></tr>
<tr><td>Hata ne zaman çıkar?</td><td>Çalışma zamanında (geç!)</td><td>Derleme zamanında (erken!)</td></tr>
<tr><td>Boxing/unboxing</td><td>Değer tiplerinde VAR (yavaş)</td><td>YOK (hızlı)</td></tr>
<tr><td>Cast gerekir mi?</td><td>Evet: (int)liste[0]</td><td>Hayır, tip zaten belli</td></tr>
</tbody>
</table></div>

<div class="callout warn"><p><strong>Tuzak:</strong> "Generics tip kontrolünü çalışma zamanında yapar" ifadesi YANLIŞTIR. Generics'in bütün olayı kontrolün <strong>derleme zamanında</strong> yapılmasıdır; hata sen daha kodu yazarken yakalanır.</p></div>
<div class="callout warn"><p><strong>Tuzak:</strong> T özel bir tip DEĞİLDİR; yalnızca bir <strong>yer tutucu isimdir</strong>. T yerine U, TKey, TValue gibi başka isimler de kullanılabilir — önemli olan köşeli değil açılı parantez içinde tanımlanmış olmasıdır.</p></div>

<h2>🎯 Sınavda Nasıl Sorulur?</h2>
<ul>
  <li><strong>"T nedir?"</strong> — tip parametresi / yer tutucu olduğu; somut tipin kullanım anında verildiği.</li>
  <li><strong>"Generics'in avantajı nedir?"</strong> — derleme zamanı tip güvenliği + boxing/unboxing maliyetinin önlenmesi.</li>
  <li><strong>ArrayList ↔ List&lt;T&gt; kıyası:</strong> hangisi tip güvenli, hangisinde cast gerekir.</li>
  <li><strong>"Bu satır derlenir mi?"</strong> — List&lt;int&gt;'e string eklemeye çalışan kod.</li>
  <li><strong>Dictionary kullanımı:</strong> TKey/TValue'nun ne anlama geldiği, anahtarla erişim.</li>
</ul>

<h2>✍️ Örnek Sorular</h2>

<div class="quiz-q" data-answer="c">
  <p class="q-text"><strong>Soru 1.</strong> <code>List&lt;T&gt;</code> tanımındaki T neyi ifade eder?</p>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) Time (zaman) tipini</button>
    <button class="q-opt" data-opt="b">B) Sadece tam sayı tiplerini</button>
    <button class="q-opt" data-opt="c">C) Kullanım anında belirlenen yer tutucu tip parametresini</button>
    <button class="q-opt" data-opt="d">D) Table (tablo) yapısını</button>
  </div>
  <div class="q-explain"><strong>Cevap: C.</strong> T bir şablon parametresidir: List&lt;int&gt; yazınca T=int, List&lt;string&gt; yazınca T=string olur. Belirli bir tipi temsil etmez (A, B, D bu yüzden yanlış).</div>
</div>

<div class="quiz-q" data-answer="b">
  <p class="q-text"><strong>Soru 2.</strong> Generics kullanmanın temel avantajı aşağıdakilerden hangisidir?</p>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) Programın her tip hatasını çalışma zamanında yakalaması</button>
    <button class="q-opt" data-opt="b">B) Derleme zamanında tip güvenliği sağlaması ve boxing maliyetini önlemesi</button>
    <button class="q-opt" data-opt="c">C) Kodun yalnızca tek bir veri tipiyle çalışmaya zorlanması</button>
    <button class="q-opt" data-opt="d">D) Bellek kullanımını sıfıra indirmesi</button>
  </div>
  <div class="q-explain"><strong>Cevap: B.</strong> Generics yanlış tipi daha derleme anında yakalar ve değer tipleri için boxing/unboxing'i ortadan kaldırır. A tam tersini söylüyor (çalışma zamanı ArrayList'in zayıflığıdır); C de tersi: generics aynı kodun ÇOK tiple çalışmasını sağlar.</div>
</div>

<div class="quiz-q" data-answer="d">
  <p class="q-text"><strong>Soru 3.</strong> Aşağıdaki kodun çıktısı nedir?</p>
  <pre><code class="lang-csharp">static void Print&lt;T&gt;(T value)
{
    Console.WriteLine(value);
}

static void Main()
{
    Print(5);
    Print("abc");
}</code></pre>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) Derleme hatası: Print iki farklı tiple çağrılamaz</button>
    <button class="q-opt" data-opt="b">B) Sadece 5 yazdırır</button>
    <button class="q-opt" data-opt="c">C) T ve T yazdırır</button>
    <button class="q-opt" data-opt="d">D) 5 ve abc yazdırır</button>
  </div>
  <div class="q-explain"><strong>Cevap: D.</strong> Generic metodun amacı tam olarak bu: ilk çağrıda T=int, ikincide T=string olarak çıkarılır ve her değer normal şekilde yazdırılır. A şıkkı generics'in varlık sebebini inkâr eden çeldiricidir.</div>
</div>

<div class="quiz-q" data-answer="a">
  <p class="q-text"><strong>Soru 4.</strong> <code>Dictionary&lt;string, int&gt; stok</code> tanımında string ve int neyi belirtir?</p>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) string anahtar (key) tipi, int değer (value) tipidir</button>
    <button class="q-opt" data-opt="b">B) int anahtar tipi, string değer tipidir</button>
    <button class="q-opt" data-opt="c">C) İkisi de değer tipidir, anahtar otomatik üretilir</button>
    <button class="q-opt" data-opt="d">D) string koleksiyon adı, int boyuttur</button>
  </div>
  <div class="q-explain"><strong>Cevap: A.</strong> Dictionary&lt;TKey, TValue&gt; sırası bellidir: önce anahtar tipi, sonra değer tipi. stok["kalem"] = 10 gibi kullanılır. B sırayı ters çevirmiş; C ve D Dictionary'nin yapısını yanlış anlatır.</div>
</div>

<div class="quiz-q" data-answer="b">
  <p class="q-text"><strong>Soru 5. (Tuzak)</strong> Aşağıdaki iki kod parçası için hangisi doğrudur?</p>
  <pre><code class="lang-csharp">ArrayList a = new ArrayList();
a.Add(5);                 // 1. parça

List&lt;int&gt; b = new List&lt;int&gt;();
b.Add(5);                 // 2. parça</code></pre>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) İki kodda da boxing oluşur</button>
    <button class="q-opt" data-opt="b">B) ArrayList'te 5 değeri object'e boxing edilir; List&lt;int&gt;'te boxing olmaz</button>
    <button class="q-opt" data-opt="c">C) İkisinde de boxing olmaz, fark sadece isimdir</button>
    <button class="q-opt" data-opt="d">D) List&lt;int&gt;'te boxing olur, ArrayList'te olmaz</button>
  </div>
  <div class="q-explain"><strong>Cevap: B.</strong> ArrayList her elemanı object olarak tutar; int gibi bir değer tipi eklenince object'e sarmalanır (boxing). List&lt;int&gt; ise doğrudan int saklar, sarmalama gerekmez. D tam tersini söyleyen klasik çeldiricidir.</div>
</div>

<h2>🔁 Mini Tekrar</h2>
<div class="table-wrap"><table>
<thead><tr><th>Kavram</th><th>Akılda Kalacak Kural</th></tr></thead>
<tbody>
<tr><td>T</td><td>Yer tutucu tip parametresi; somut tip kullanım anında verilir</td></tr>
<tr><td>Type safety</td><td>Yanlış tip DERLEME zamanında yakalanır (çalışma zamanında değil)</td></tr>
<tr><td>List&lt;T&gt;</td><td>Tip güvenli liste; yanlış tip eklenemez, cast gerekmez</td></tr>
<tr><td>Dictionary&lt;TKey, TValue&gt;</td><td>Anahtar-değer; önce anahtar tipi, sonra değer tipi</td></tr>
<tr><td>ArrayList</td><td>Eski, tip güvensiz; değer tiplerinde boxing/unboxing maliyeti var</td></tr>
<tr><td>Generic metot</td><td>Print&lt;T&gt;(T value): her tiple çağrılabilir, tip çağrıdan çıkarılır</td></tr>
</tbody>
</table></div>
`
  },
  {
    module: 'csharp',
    id: 'cs-14-delegate-lambda',
    order: 14,
    title: 'Delegate, Event ve Lambda',
    html: `
<h2>📖 Konu Anlatımı</h2>

<h3>Delegate: Metot Referansı Tutan Tip</h3>
<p><strong>Delegate</strong>, bir metodu işaret eden (referansını tutan) tiptir. Değişkene sayı atar gibi, delegate değişkenine <strong>metot</strong> atarsın; sonra değişken üzerinden o metodu çağırırsın.</p>
<pre><code class="lang-csharp">delegate int Islem(int x, int y);    // imzayı tanımla: 2 int alır, int döner

static int Topla(int a, int b) { return a + b; }

static void Main()
{
    Islem islem = Topla;             // metodu değişkene ata
    Console.WriteLine(islem(3, 4));  // 7 — değişken üzerinden çağır
}</code></pre>

<h3>Lambda Expression: Adsız Mini Metot</h3>
<p><strong>Lambda</strong>, ayrı bir metot yazmadan satır içinde fonksiyon tanımlamandır. Okunuşu: <code>x =&gt; x * 2</code> → "x'i al, x çarpı 2'yi döndür". Eski <strong>anonymous method</strong> sözdiziminin (delegate kelimesiyle yazılan) modern halidir:</p>
<pre><code class="lang-csharp">Islem topla1 = delegate(int a, int b) { return a + b; };   // anonymous method (eski)
Islem topla2 = (a, b) =&gt; a + b;                            // lambda (modern, aynı iş)</code></pre>

<h3>Hazır Delegate Tipleri: Func, Action, Predicate</h3>
<p>Her seferinde delegate tanımlamamak için C# hazır jenerik delegate'ler sunar — sınavın favori üçlüsü:</p>
<div class="table-wrap"><table>
<thead><tr><th>Tip</th><th>Dönüş</th><th>Kural</th></tr></thead>
<tbody>
<tr><td><strong>Func&lt;...&gt;</strong></td><td>Değer DÖNDÜRÜR</td><td><strong>SON tip parametresi dönüş tipidir</strong>; öncekiler parametre tipleri</td></tr>
<tr><td><strong>Action&lt;...&gt;</strong></td><td>void (döndürmez)</td><td>Tüm tip parametreleri metodun parametreleridir</td></tr>
<tr><td><strong>Predicate&lt;T&gt;</strong></td><td>bool döndürür</td><td>T alır, koşul testi yapar (true/false)</td></tr>
</tbody>
</table></div>
<pre><code class="lang-csharp">Func&lt;int, int&gt; square = x =&gt; x * x;
Console.WriteLine(square(5));            // 25

Func&lt;int, int, int&gt; topla = (a, b) =&gt; a + b;   // 2 int alır, int döner
Console.WriteLine(topla(3, 4));          // 7

Action&lt;string&gt; print = message =&gt; Console.WriteLine(message);
print("Merhaba");                        // Merhaba (geriye değer dönmez)

Predicate&lt;int&gt; isEven = x =&gt; x % 2 == 0;
Console.WriteLine(isEven(4));            // True</code></pre>

<h3>Event: Delegate Tabanlı Bildirim</h3>
<p><strong>Event</strong>, "bir şey olduğunda haber ver" mekanizmasıdır ve delegate üzerine kuruludur. Dinleyiciler <code>+=</code> ile abone olur; olay gerçekleşince hepsi tetiklenir (buton tıklaması gibi).</p>
<pre><code class="lang-csharp">class Buton
{
    public event Action Tiklandi;                 // olay tanımı (delegate tabanlı)

    public void Tikla()
    {
        Tiklandi?.Invoke();                       // aboneleri bilgilendir
    }
}

Buton b = new Buton();
b.Tiklandi += () =&gt; Console.WriteLine("Butona basıldı!");   // abone ol
b.Tikla();    // Butona basıldı!</code></pre>
<div class="callout tip"><p><strong>İpucu:</strong> Delegate = metot referansı tutan TİP; event = bu delegate'i kullanan <strong>bildirim mekanizması</strong>. Event'e dışarıdan yalnızca += / -= ile abone olunabilir; doğrudan tetiklenemez — bu, delegate'e göre en önemli farkıdır.</p></div>

<h2>⚠️ Karıştırılan Kavramlar</h2>

<div class="table-wrap"><table>
<thead><tr><th>Tip</th><th>Parametre</th><th>Dönüş</th><th>Örnek</th></tr></thead>
<tbody>
<tr><td>Func&lt;int, int&gt;</td><td>1 int</td><td>int (SON parametre)</td><td>x =&gt; x * x</td></tr>
<tr><td>Func&lt;int, int, int&gt;</td><td>2 int</td><td>int</td><td>(a, b) =&gt; a + b</td></tr>
<tr><td>Action&lt;string&gt;</td><td>1 string</td><td>void — DÖNDÜRMEZ</td><td>m =&gt; Console.WriteLine(m)</td></tr>
<tr><td>Predicate&lt;int&gt;</td><td>1 int</td><td>her zaman bool</td><td>x =&gt; x % 2 == 0</td></tr>
</tbody>
</table></div>

<div class="callout warn"><p><strong>Tuzak:</strong> <code>Func&lt;int, int&gt;</code> "2 int alır" DEĞİLDİR! Son tip parametresi dönüş tipidir: bu örnek <strong>1 int alıp 1 int döndürür</strong>. "Func'ta sonuncusu çıkıştır" diye ezberle.</p></div>
<div class="callout warn"><p><strong>Tuzak:</strong> "Action değer döndürür" ifadesi yanlıştır — Action her zaman <strong>void</strong>'dir. Değer döndürmesi gereken yerde Func kullanılır; bool döndüren özel durum içinse Predicate vardır.</p></div>

<h2>🎯 Sınavda Nasıl Sorulur?</h2>
<ul>
  <li><strong>Func/Action/Predicate eşleştirme:</strong> "değer döndürmeyen hangisidir?", "Func&lt;int, int, int&gt; kaç parametre alır?"</li>
  <li><strong>Lambda okuma:</strong> x =&gt; x * 2 ifadesinin ne yaptığı; verilen girdiyle çıktının hesaplanması.</li>
  <li><strong>Delegate tanımı:</strong> "metot referansı tutan tip hangisidir?"</li>
  <li><strong>Event kavramı:</strong> delegate ile event'in ilişkisi, += ile abonelik.</li>
  <li><strong>"Çıktı nedir?"</strong> — lambda'lı küçük kod parçasının sonucu.</li>
</ul>

<h2>✍️ Örnek Sorular</h2>

<div class="quiz-q" data-answer="d">
  <p class="q-text"><strong>Soru 1.</strong> <code>Func&lt;int, int, int&gt;</code> tipi için hangisi doğrudur?</p>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) 3 int parametre alır, değer döndürmez</button>
    <button class="q-opt" data-opt="b">B) 1 int alır, 2 int döndürür</button>
    <button class="q-opt" data-opt="c">C) 3 int alır, bool döndürür</button>
    <button class="q-opt" data-opt="d">D) 2 int parametre alır, int döndürür</button>
  </div>
  <div class="q-explain"><strong>Cevap: D.</strong> Func'ta SON tip parametresi dönüş tipidir: ilk iki int parametre, üçüncü int dönüştür. A şıkkı tüm parametreleri girdi sanıp dönüşü unutanlar için klasik çeldiricidir (o tanım Action&lt;int, int, int&gt; olurdu).</div>
</div>

<div class="quiz-q" data-answer="a">
  <p class="q-text"><strong>Soru 2.</strong> Action delegate'inin dönüş tipi nedir?</p>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) void — değer döndürmez</button>
    <button class="q-opt" data-opt="b">B) bool</button>
    <button class="q-opt" data-opt="c">C) Son tip parametresinde belirtilen tip</button>
    <button class="q-opt" data-opt="d">D) object</button>
  </div>
  <div class="q-explain"><strong>Cevap: A.</strong> Action "yap ve dön" mantığıyla çalışır, geriye hiçbir şey döndürmez. B Predicate'in, C ise Func'ın özelliğidir — üçlüyü ayırt ettiren temel soru budur.</div>
</div>

<div class="quiz-q" data-answer="c">
  <p class="q-text"><strong>Soru 3.</strong> Aşağıdaki kodun çıktısı nedir?</p>
  <pre><code class="lang-csharp">Predicate&lt;int&gt; isEven = x =&gt; x % 2 == 0;
Console.WriteLine(isEven(7));</code></pre>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) 7</button>
    <button class="q-opt" data-opt="b">B) True</button>
    <button class="q-opt" data-opt="c">C) False</button>
    <button class="q-opt" data-opt="d">D) 1</button>
  </div>
  <div class="q-explain"><strong>Cevap: C.</strong> 7 % 2 = 1, yani 0'a eşit değil → koşul sağlanmaz, False döner. Predicate her zaman bool döndürür; sayı yazdıran A ve D bu yüzden baştan elenir.</div>
</div>

<div class="quiz-q" data-answer="b">
  <p class="q-text"><strong>Soru 4.</strong> Event için aşağıdakilerden hangisi doğrudur?</p>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) Event, string saklamak için kullanılan bir koleksiyondur</button>
    <button class="q-opt" data-opt="b">B) Event, delegate tabanlı bir bildirim mekanizmasıdır; dinleyiciler += ile abone olur</button>
    <button class="q-opt" data-opt="c">C) Event, exception fırlatmanın diğer adıdır</button>
    <button class="q-opt" data-opt="d">D) Event yalnızca veritabanı işlemlerinde kullanılır</button>
  </div>
  <div class="q-explain"><strong>Cevap: B.</strong> Event "bir şey olduğunda abonelere haber ver" yapısıdır ve altında delegate çalışır; buton tıklaması en bilinen örneğidir. Diğer şıklar event'i tamamen alakasız kavramlarla eşleştiren çeldiricilerdir.</div>
</div>

<div class="quiz-q" data-answer="c">
  <p class="q-text"><strong>Soru 5. (Tuzak)</strong> Aşağıdaki kodun çıktısı nedir?</p>
  <pre><code class="lang-csharp">Func&lt;int, int&gt; square = x =&gt; x * x;
Console.WriteLine(square(square(2)));</code></pre>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) 4</button>
    <button class="q-opt" data-opt="b">B) 8</button>
    <button class="q-opt" data-opt="c">C) 16</button>
    <button class="q-opt" data-opt="d">D) Derleme hatası: lambda iç içe çağrılamaz</button>
  </div>
  <div class="q-explain"><strong>Cevap: C.</strong> İçten dışa: square(2) = 4, sonra square(4) = 16. A şıkkı dıştaki çağrıyı unutanlar için. D yanlış: square artık normal çağrılabilir bir değişkendir, iç içe kullanım tamamen geçerlidir.</div>
</div>

<h2>🔁 Mini Tekrar</h2>
<div class="table-wrap"><table>
<thead><tr><th>Kavram</th><th>Akılda Kalacak Kural</th></tr></thead>
<tbody>
<tr><td>Delegate</td><td>Metot referansı tutan tip; değişkene metot atanır</td></tr>
<tr><td>Lambda</td><td>x =&gt; x * 2 — satır içi adsız fonksiyon; anonymous method'un modern hali</td></tr>
<tr><td>Func</td><td>Değer DÖNDÜRÜR; son tip parametresi dönüş tipidir</td></tr>
<tr><td>Action</td><td>void — değer döndürmez</td></tr>
<tr><td>Predicate&lt;T&gt;</td><td>T alır, BOOL döndürür (koşul testi)</td></tr>
<tr><td>Event</td><td>Delegate tabanlı bildirim; += ile abone olunur, sınıf içinden tetiklenir</td></tr>
</tbody>
</table></div>
`
  },
  {
    module: 'csharp',
    id: 'cs-15-async',
    order: 15,
    title: 'Async / Await Temelleri',
    html: `
<h2>📖 Konu Anlatımı</h2>

<h3>Senkron ve Asenkron Çalışma</h3>
<p><strong>Senkron</strong> kodda işlemler sırayla çalışır: bir satır bitmeden sonraki başlamaz. Uzun süren bir işlem (dosya indirme, veritabanı sorgusu) varsa program o noktada <strong>bekler ve kilitlenir</strong>. <strong>Asenkron</strong> kodda ise uzun işlem başlatılır, sonucu beklerken program <strong>başka işler yapmaya devam edebilir</strong>; işlem bitince kaldığı yerden devam eder.</p>
<div class="callout info"><p><strong>Bilgi:</strong> Asenkronluğun en görünür faydası <strong>UI'ın donmaması</strong>dır: masaüstü uygulamasında 5 saniyelik bir indirme senkron yapılırsa arayüz 5 saniye tıklanamaz hale gelir; asenkron yapılırsa kullanıcı arayüzü akıcı kalır. Bu yüzden async, özellikle <strong>I/O işlemleri</strong> (ağ, disk, veritabanı) için kullanılır.</p></div>

<h3>Task, async ve await</h3>
<ul>
  <li><strong>Task:</strong> Devam eden bir işin temsilidir ("söz/fiş" gibi düşün). Değer döndürecekse <code>Task&lt;T&gt;</code> olur.</li>
  <li><strong>async:</strong> Metodun asenkron olduğunu belirten işarettir; içinde await kullanılmasına izin verir.</li>
  <li><strong>await:</strong> "Bu iş bitene kadar bekle ama <strong>thread'i kilitleme</strong>" der; iş bitince akış kaldığı satırdan sürer.</li>
</ul>
<pre><code class="lang-csharp">async Task&lt;string&gt; GetDataAsync()
{
    await Task.Delay(1000);   // 1 saniye bekle (thread'i BLOKLAMADAN)
    return "Data";            // Task&lt;string&gt; içine sarılarak döner
}

async Task KullanAsync()
{
    string veri = await GetDataAsync();   // sonuç hazır olunca devam et
    Console.WriteLine(veri);              // Data
}</code></pre>

<h3>Temel Kurallar (Sınav Noktaları)</h3>
<ul>
  <li>async bir metot <strong>Task</strong> (değer dönmüyorsa) veya <strong>Task&lt;T&gt;</strong> (T tipinde değer dönüyorsa) döndürür. (Event handler'lara özel async void istisnası vardır ama önerilmez.)</li>
  <li><strong>await yalnızca async işaretli metot içinde</strong> kullanılabilir; normal metotta await yazarsan derleme hatası alırsın.</li>
  <li>Metodun içinde <code>return "Data";</code> yazılır; sarmalama otomatiktir — elle <code>new Task</code> oluşturmazsın.</li>
  <li><code>Task.Delay(1000)</code>, <code>Thread.Sleep(1000)</code>'in asenkron karşılığıdır: Sleep thread'i kilitler, Delay kilitlemez.</li>
</ul>

<h3>Async, "Paralel" Demek DEĞİLDİR</h3>
<p>Sık karıştırılan nokta: asenkron çalışma, işi illa <strong>yeni bir thread'de</strong> ya da <strong>aynı anda</strong> yapmak demek değildir. Async'in özü <strong>beklerken thread'i serbest bırakmaktır</strong> — garson siparişi mutfağa verir ve yemek pişerken diğer masalara bakar; ikinci bir garson (thread) işe alınmaz. Paralellik ise birden çok işin gerçekten aynı anda, ayrı çekirdek/thread'lerde yürümesidir (multithreading).</p>

<h2>⚠️ Karıştırılan Kavramlar</h2>

<div class="table-wrap"><table>
<thead><tr><th>Kavram</th><th>Ne Demek?</th><th>Karıştırma!</th></tr></thead>
<tbody>
<tr><td>Senkron</td><td>Sırayla; uzun işte program bekler/kilitlenir</td><td>"Senkron = hızlı" değildir</td></tr>
<tr><td>Asenkron (async/await)</td><td>Beklerken thread serbest kalır, akış sonra devam eder</td><td>"Async = yeni thread / paralel" DEĞİLDİR</td></tr>
<tr><td>Thread (multithreading)</td><td>İşleri gerçekten aynı anda ayrı iş parçacıklarında yürütmek</td><td>Async'in amacı CPU paralelliği değil, bekleme yönetimidir</td></tr>
<tr><td>Task.Delay</td><td>Asenkron bekleme (thread'i bloklamaz)</td><td>Thread.Sleep thread'i BLOKLAR</td></tr>
</tbody>
</table></div>

<div class="callout warn"><p><strong>Tuzak:</strong> "async metot her zaman yeni bir thread açar" ifadesi YANLIŞTIR. await edilen iş (örn. ağ isteği) çoğu zaman hiçbir thread'i meşgul etmeden bekler; async'in derdi paralellik değil, <strong>bekleme sırasında kaynağı serbest bırakmaktır</strong>.</p></div>
<div class="callout warn"><p><strong>Tuzak:</strong> await'i async olmayan bir metodun içinde kullanmak <strong>derleme hatasıdır</strong>. "await her yerde kullanılabilir" şıkkı her zaman yanlıştır.</p></div>

<h2>🎯 Sınavda Nasıl Sorulur?</h2>
<ul>
  <li><strong>"async metot ne döndürür?"</strong> — Task / Task&lt;T&gt; bilgisi doğrudan sorulur.</li>
  <li><strong>"await nerede kullanılabilir?"</strong> — yalnızca async metot içinde.</li>
  <li><strong>"Asenkron programlamanın faydası nedir?"</strong> — UI donmasını önleme, I/O sırasında thread'in serbest kalması.</li>
  <li><strong>Kavram ayrımı:</strong> async ile multithreading/paralellik farkı; Task.Delay ile Thread.Sleep farkı.</li>
  <li><strong>Doğru/yanlış ifade seçtirme:</strong> "async her zaman yeni thread açar" gibi yanlış ifadeyi buldurma.</li>
</ul>

<h2>✍️ Örnek Sorular</h2>

<div class="quiz-q" data-answer="a">
  <p class="q-text"><strong>Soru 1.</strong> Değer döndüren bir async metodun dönüş tipi tipik olarak nedir?</p>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) Task&lt;T&gt;</button>
    <button class="q-opt" data-opt="b">B) int</button>
    <button class="q-opt" data-opt="c">C) Thread</button>
    <button class="q-opt" data-opt="d">D) Delegate</button>
  </div>
  <div class="q-explain"><strong>Cevap: A.</strong> async metot, T tipinde değer dönecekse Task&lt;T&gt; (örn. Task&lt;string&gt;), değer dönmeyecekse Task döndürür. C çeldirici: Task bir thread değildir, devam eden işin temsilidir.</div>
</div>

<div class="quiz-q" data-answer="b">
  <p class="q-text"><strong>Soru 2.</strong> await anahtar kelimesi nerede kullanılabilir?</p>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) Her metodun içinde serbestçe</button>
    <button class="q-opt" data-opt="b">B) Yalnızca async olarak işaretlenmiş metotların içinde</button>
    <button class="q-opt" data-opt="c">C) Yalnızca Main metodunun dışında</button>
    <button class="q-opt" data-opt="d">D) Yalnızca try bloğunun içinde</button>
  </div>
  <div class="q-explain"><strong>Cevap: B.</strong> await kullanabilmek için metodun imzasında async olmalıdır; aksi halde derleme hatası alınır. (Modern C#'ta Main bile async Task Main olarak işaretlenebilir — C bu yüzden de yanlış.)</div>
</div>

<div class="quiz-q" data-answer="d">
  <p class="q-text"><strong>Soru 3.</strong> <code>await Task.Delay(1000);</code> satırı ne yapar?</p>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) Thread'i 1 saniye kilitler (Thread.Sleep ile aynıdır)</button>
    <button class="q-opt" data-opt="b">B) Programı kalıcı olarak durdurur</button>
    <button class="q-opt" data-opt="c">C) 1000 adet görev başlatır</button>
    <button class="q-opt" data-opt="d">D) Thread'i bloklamadan yaklaşık 1 saniye bekler, sonra akış devam eder</button>
  </div>
  <div class="q-explain"><strong>Cevap: D.</strong> Task.Delay asenkron beklemedir: bekleme sırasında thread serbest kalır, başka işler yapabilir. A şıkkı tam tuzak: Thread.Sleep thread'i bloklar, Task.Delay bloklamaz — ikisinin farkı sınav klasiğidir.</div>
</div>

<div class="quiz-q" data-answer="c">
  <p class="q-text"><strong>Soru 4.</strong> Masaüstü uygulamasında uzun süren indirme işleminin async yapılmasının temel faydası nedir?</p>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) İndirme hızı artar</button>
    <button class="q-opt" data-opt="b">B) Kod daha az satır tutar</button>
    <button class="q-opt" data-opt="c">C) İndirme sürerken arayüz (UI) donmaz, kullanıcı uygulamayı kullanmaya devam eder</button>
    <button class="q-opt" data-opt="d">D) Exception oluşması engellenir</button>
  </div>
  <div class="q-explain"><strong>Cevap: C.</strong> Async, UI thread'ini bekletmediği için arayüz akıcı kalır. A klasik yanılgıdır: async işin kendisini hızlandırmaz, sadece bekleme biçimini değiştirir. D'nin async ile ilgisi yoktur.</div>
</div>

<div class="quiz-q" data-answer="d">
  <p class="q-text"><strong>Soru 5. (Tuzak)</strong> Asenkron programlama ile ilgili aşağıdaki ifadelerden hangisi YANLIŞTIR?</p>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) async metotlar genellikle Task veya Task&lt;T&gt; döndürür</button>
    <button class="q-opt" data-opt="b">B) await, beklenen iş bitene kadar thread'i bloklamadan bekler</button>
    <button class="q-opt" data-opt="c">C) Asenkron yaklaşım özellikle I/O işlemlerinde (ağ, disk) faydalıdır</button>
    <button class="q-opt" data-opt="d">D) async bir metot her zaman yeni bir thread oluşturarak paralel çalışır</button>
  </div>
  <div class="q-explain"><strong>Cevap: D.</strong> Yanlış olan budur: async, paralellik veya yeni thread demek değildir; özü beklerken kaynağı serbest bırakmaktır. A, B ve C async/await'in ders kitabı tanımlarıdır ve doğrudur.</div>
</div>

<h2>🔁 Mini Tekrar</h2>
<div class="table-wrap"><table>
<thead><tr><th>Kavram</th><th>Akılda Kalacak Kural</th></tr></thead>
<tbody>
<tr><td>Senkron</td><td>Sırayla çalışır; uzun işte program kilitlenir</td></tr>
<tr><td>async</td><td>Metodu asenkron işaretler; dönüş tipi Task / Task&lt;T&gt;</td></tr>
<tr><td>await</td><td>Bloklamadan bekler; SADECE async metot içinde kullanılır</td></tr>
<tr><td>Task</td><td>Devam eden işin temsili (thread değildir!)</td></tr>
<tr><td>Task.Delay ↔ Thread.Sleep</td><td>Delay bloklamaz, Sleep bloklar</td></tr>
<tr><td>Async ≠ Paralel</td><td>Async bekleme yönetimidir; her zaman yeni thread açmaz</td></tr>
</tbody>
</table></div>
`
  },
  {
    module: 'csharp',
    id: 'cs-16-tuzaklar',
    order: 16,
    title: "C#'ta Sık Tuzak Sorular",
    html: `
<h2>📖 Konu Anlatımı</h2>
<p>Bu konu bir "tuzak avcısı" özetidir: sınavın çeldirici üretmeyi en çok sevdiği 16 noktayı kısa açıklama + mini kodla tek tek geçiyoruz. Adaptif sınavda bu temel noktalarda hata yapmak seviyeni düşürür — hepsini refleks haline getir.</p>

<h3>Tip Sistemi Tuzakları</h3>
<p><strong>1) Value type / Reference type:</strong> int, bool, char, double, struct → <strong>değer tipi</strong> (kopyalanır); string, class, array → <strong>referans tipi</strong> (aynı nesneyi gösterir).</p>
<pre><code class="lang-csharp">int a = 5;  int b = a;  b = 10;
Console.WriteLine(a);            // 5 (kopya değişti, a etkilenmedi)

int[] d1 = { 1, 2 };  int[] d2 = d1;  d2[0] = 99;
Console.WriteLine(d1[0]);        // 99 (aynı diziyi gösteriyorlar!)</code></pre>
<p><strong>2) String referans tipidir ama immutable'dır:</strong> Referans tipi olmasına rağmen içeriği değiştirilemez; tüm metotları yeni string döndürür. Bu yüzden çoğu durumda değer tipi gibi davranıyormuş hissi verir.</p>
<pre><code class="lang-csharp">string s = "abc";
string t = s;
s = s + "d";              // s artık YENİ bir string'i gösteriyor
Console.WriteLine(t);     // abc (t eski nesnede kaldı)</code></pre>
<p><strong>3) == ve .Equals():</strong> Değer tiplerinde ikisi de değeri karşılaştırır. Referans tiplerinde == genelde <strong>referansı</strong>, Equals <strong>içeriği</strong> karşılaştırır. (string özel durumdur: == operatörü string için içerik karşılaştıracak şekilde tanımlanmıştır.)</p>
<pre><code class="lang-csharp">object a = 5;
object b = 5;
Console.WriteLine(a == b);        // False (iki ayrı kutu/referans)
Console.WriteLine(a.Equals(b));   // True  (değerler eşit)</code></pre>
<p><strong>4) var dinamik DEĞİLDİR:</strong> var, derleme zamanında tip çıkarımı (type inference) yapar; tip ilk atamada sabitlenir ve değişemez.</p>
<pre><code class="lang-csharp">var x = 5;        // x artık kesin olarak int
// x = "merhaba"; // DERLEME HATASI: tip değişemez</code></pre>

<h3>Anahtar Kelime Tuzakları</h3>
<p><strong>5) const ↔ readonly:</strong> const <strong>derleme zamanı</strong> sabitidir, tanımda atanmak zorundadır. readonly <strong>çalışma zamanında constructor içinde</strong> atanabilir, sonra değişmez.</p>
<pre><code class="lang-csharp">class Ayar
{
    public const double Pi = 3.14;        // derlemede sabit
    public readonly int Kod;
    public Ayar(int kod) { Kod = kod; }   // readonly ctor'da atanabilir
}</code></pre>
<p><strong>6) static:</strong> Üye <strong>nesneye değil tipe (sınıfa)</strong> aittir; tüm nesneler aynı kopyayı paylaşır ve sınıf adıyla erişilir: <code>Sayac.Adet</code>. Nesne üzerinden static üyeye erişilmez.</p>
<p><strong>7) private ↔ protected:</strong> private üyeye <strong>yalnızca tanımlandığı sınıf</strong> erişir; protected üyeye tanımlandığı sınıf <strong>+ ondan türeyen sınıflar</strong> erişir.</p>
<p><strong>8) new ile nesne oluşturma:</strong> new, heap'te nesne oluşturur, constructor'ı çalıştırır ve referansını döndürür. Referans tipi değişken new yapılmadan kullanılırsa null'dur.</p>
<p><strong>9) NullReferenceException:</strong> null olan (nesne atanmamış) bir referansın üyesine erişince fırlar — sınavın bir numaralı "neden hata verdi?" cevabıdır.</p>
<pre><code class="lang-csharp">string ad = null;
Console.WriteLine(ad.Length);   // NullReferenceException!</code></pre>

<h3>OOP Tuzakları</h3>
<p><strong>10) Overloading ↔ Overriding:</strong> Overloading = AYNI sınıfta aynı isim, FARKLI parametre listeleri (derleme zamanı). Overriding = türeyen sınıfta virtual/abstract metodu AYNI imzayla yeniden yazma (çalışma zamanı, override anahtar kelimesi).</p>
<pre><code class="lang-csharp">// Overloading: aynı isim, farklı parametre
void Yaz(int x) { }
void Yaz(string x) { }

// Overriding: kalıtımda davranışı değiştirme
class Hayvan { public virtual void Ses() { } }
class Kedi : Hayvan { public override void Ses() { } }</code></pre>
<p><strong>11) Interface ↔ Abstract class:</strong> Önceki konunun özeti: interface sözleşmedir, çoklu uygulanır, alan/constructor içermez; abstract class ortak kod + alan barındırır, tek miras alınır. <strong>İkisinden de nesne üretilemez.</strong></p>

<h3>Koleksiyon ve LINQ Tuzakları</h3>
<p><strong>12) Array.Length ↔ List.Count:</strong> Dizide <code>Length</code>, List'te <code>Count</code> property'si kullanılır. Ters kullanmak derleme hatasıdır. (LINQ'in <code>Count()</code> metodu ayrı bir şeydir — parantezlidir.)</p>
<pre><code class="lang-csharp">int[] dizi = { 1, 2, 3 };
List&lt;int&gt; liste = new List&lt;int&gt; { 1, 2 };
Console.WriteLine(dizi.Length);   // 3
Console.WriteLine(liste.Count);   // 2</code></pre>
<p><strong>13) First ↔ FirstOrDefault:</strong> Eleman yoksa First <strong>exception fırlatır</strong>; FirstOrDefault <strong>default değer</strong> döndürür (int için 0, referans için null).</p>
<p><strong>14) IEnumerable ↔ List:</strong> IEnumerable yalnızca <strong>üzerinde gezinilebilen</strong> (foreach) en genel arayüzdür; Add, indeksle erişim, Count property gibi yetenekleri yoktur. List bunların hepsini sunar. LINQ sorguları çoğunlukla IEnumerable döndürür; List istiyorsan <code>.ToList()</code> dersin. Ayrıca IEnumerable sorgular <strong>ertelenmiş (lazy)</strong> çalışabilir.</p>

<h3>Akış Tuzakları</h3>
<p><strong>15) break ↔ continue:</strong> break döngüyü <strong>tamamen bitirir</strong>; continue <strong>o turu atlayıp</strong> sonraki tura geçer.</p>
<pre><code class="lang-csharp">for (int i = 1; i &lt;= 5; i++)
{
    if (i == 3) continue;     // 3'ü atla
    Console.Write(i + " ");
}
// 1 2 4 5     (break olsaydı: 1 2)</code></pre>
<p><strong>16) try-catch-finally sırası:</strong> try'da hata çıkan satırdan sonrası atlanır → uygun catch çalışır → finally <strong>HER DURUMDA</strong> en son çalışır (return olsa bile).</p>

<h2>⚠️ Karıştırılan Kavramlar</h2>

<div class="table-wrap"><table>
<thead><tr><th>İkili</th><th>Tek Cümlelik Ayrım</th></tr></thead>
<tbody>
<tr><td>== ↔ Equals</td><td>Referans tiplerinde == referansa, Equals içeriğe bakar (string == istisna: içeriğe bakar)</td></tr>
<tr><td>Value ↔ Reference</td><td>Değer tipi KOPYALANIR; referans tipi AYNI nesneyi gösterir</td></tr>
<tr><td>const ↔ readonly</td><td>const derlemede sabit; readonly constructor'da atanabilir</td></tr>
<tr><td>Overloading ↔ Overriding</td><td>Overloading aynı sınıfta farklı parametre; overriding kalıtımda aynı imza</td></tr>
<tr><td>break ↔ continue</td><td>break döngüyü ÖLDÜRÜR; continue turu ATLAR</td></tr>
<tr><td>Length ↔ Count</td><td>Dizi → Length; List → Count</td></tr>
<tr><td>private ↔ protected</td><td>private sadece kendi sınıfı; protected + türeyenler</td></tr>
<tr><td>IEnumerable ↔ List</td><td>IEnumerable sadece gezinme; List ekleme/indeks/Count sunar</td></tr>
</tbody>
</table></div>

<div class="callout warn"><p><strong>Tuzak:</strong> "string değer tipidir çünkü kopyalanıyor gibi davranır" — YANLIŞ. String <strong>referans tipidir</strong>; değer tipi gibi hissettiren şey <strong>immutable</strong> olmasıdır.</p></div>
<div class="callout warn"><p><strong>Tuzak:</strong> "var ile tanımlanan değişkenin tipi çalışma zamanında değişebilir" — YANLIŞ. var = derleme zamanı tip çıkarımı; dinamik olan ayrı bir anahtar kelimedir (dynamic).</p></div>

<h2>🎯 Sınavda Nasıl Sorulur?</h2>
<ul>
  <li><strong>"Çıktı nedir?"</strong> — değer/referans kopyalama, string immutable, break/continue, try-finally akışı üzerine mini kodlar.</li>
  <li><strong>"Hangisi doğrudur / yanlıştır?"</strong> — const/readonly, var, static, private/protected hakkında ifade seçtirme.</li>
  <li><strong>"Bu kod neden hata verir?"</strong> — null referans erişimi, List'te Length kullanma, boş listede First.</li>
  <li><strong>İkili ayrım soruları:</strong> overloading/overriding, ==/Equals, IEnumerable/List tanım eşleştirme.</li>
</ul>

<h2>✍️ Örnek Sorular</h2>

<div class="quiz-q" data-answer="b">
  <p class="q-text"><strong>Soru 1.</strong> Aşağıdaki kodun çıktısı nedir?</p>
  <pre><code class="lang-csharp">int a = 5;
int b = a;
b = 10;
Console.WriteLine(a);</code></pre>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) 10</button>
    <button class="q-opt" data-opt="b">B) 5</button>
    <button class="q-opt" data-opt="c">C) 15</button>
    <button class="q-opt" data-opt="d">D) Derleme hatası</button>
  </div>
  <div class="q-explain"><strong>Cevap: B.</strong> int bir değer tipidir: b = a satırında değer KOPYALANIR. b'yi değiştirmek a'yı etkilemez. A şıkkı referans tipi davranışını değer tipine uygulayanlar için çeldiricidir.</div>
</div>

<div class="quiz-q" data-answer="c">
  <p class="q-text"><strong>Soru 2.</strong> Aşağıdaki kodun çıktısı nedir?</p>
  <pre><code class="lang-csharp">string s = "abc";
string t = s;
s = s + "d";
Console.WriteLine(t);</code></pre>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) abcd</button>
    <button class="q-opt" data-opt="b">B) d</button>
    <button class="q-opt" data-opt="c">C) abc</button>
    <button class="q-opt" data-opt="d">D) Derleme hatası: string toplama operatörünü desteklemez</button>
  </div>
  <div class="q-explain"><strong>Cevap: C.</strong> String immutable olduğu için s + "d" işlemi YENİ bir string oluşturur ve s artık onu gösterir; t ise hâlâ eski "abc" nesnesini gösterir. A şıkkı "ikisi aynı nesneyi gösteriyordu, ikisi de değişti" diye düşünenler için tuzaktır.</div>
</div>

<div class="quiz-q" data-answer="a">
  <p class="q-text"><strong>Soru 3.</strong> const ve readonly ile ilgili hangisi doğrudur?</p>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) const derleme zamanı sabitidir; readonly çalışma zamanında constructor içinde atanabilir</button>
    <button class="q-opt" data-opt="b">B) İkisi de yalnızca çalışma zamanında atanabilir</button>
    <button class="q-opt" data-opt="c">C) readonly değişkenin değeri her metotta değiştirilebilir</button>
    <button class="q-opt" data-opt="d">D) const, constructor içinde atanabilir</button>
  </div>
  <div class="q-explain"><strong>Cevap: A.</strong> const tanım anında sabitlenmek zorundadır ve derleme zamanında değeri bilinmelidir; readonly ise constructor'da (nesne kurulurken) atanabilir, sonrasında değişemez. D tam tersini söylüyor — const ile readonly'nin ayrım noktasını ters çeviren klasik çeldirici.</div>
</div>

<div class="quiz-q" data-answer="d">
  <p class="q-text"><strong>Soru 4.</strong> var anahtar kelimesi ile ilgili hangisi doğrudur?</p>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) var değişkeni dinamiktir, tipi çalışma zamanında değişebilir</button>
    <button class="q-opt" data-opt="b">B) var yalnızca string tutabilir</button>
    <button class="q-opt" data-opt="c">C) var ile tanımlanan değişkene ilk atama yapılmadan kullanılabilir</button>
    <button class="q-opt" data-opt="d">D) var, derleme zamanında tip çıkarımı yapar; tip ilk atamada belirlenir ve değişemez</button>
  </div>
  <div class="q-explain"><strong>Cevap: D.</strong> var = compile-time type inference. var x = 5 yazdığında x kesin olarak int olur; sonradan string atanamaz. A şıkkı var'ı dynamic ile karıştıran en yaygın tuzaktır. C de yanlış: var mutlaka tanım anında atama ister.</div>
</div>

<div class="quiz-q" data-answer="b">
  <p class="q-text"><strong>Soru 5.</strong> Aşağıdaki kodun çıktısı nedir?</p>
  <pre><code class="lang-csharp">for (int i = 1; i &lt;= 5; i++)
{
    if (i == 3) continue;
    Console.Write(i + " ");
}</code></pre>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) 1 2</button>
    <button class="q-opt" data-opt="b">B) 1 2 4 5</button>
    <button class="q-opt" data-opt="c">C) 1 2 3 4 5</button>
    <button class="q-opt" data-opt="d">D) 4 5</button>
  </div>
  <div class="q-explain"><strong>Cevap: B.</strong> continue yalnızca i=3 turunu atlar, döngü devam eder: 1 2 4 5. A şıkkı break yazılmış olsaydı doğru olurdu — break/continue ayrımını ölçen tipik soru.</div>
</div>

<div class="quiz-q" data-answer="a">
  <p class="q-text"><strong>Soru 6.</strong> Eleman sayısını almak için doğru kullanım çifti hangisidir?</p>
  <pre><code class="lang-csharp">int[] dizi = { 1, 2, 3 };
List&lt;int&gt; liste = new List&lt;int&gt; { 1, 2, 3 };</code></pre>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) dizi.Length ve liste.Count</button>
    <button class="q-opt" data-opt="b">B) dizi.Count ve liste.Length</button>
    <button class="q-opt" data-opt="c">C) İkisinde de yalnızca Size kullanılır</button>
    <button class="q-opt" data-opt="d">D) İkisinde de yalnızca Length kullanılır</button>
  </div>
  <div class="q-explain"><strong>Cevap: A.</strong> Dizilerde Length, List'lerde Count property'si vardır. B tam tersine çevirip yanıltmaya çalışır; Size diye bir üye C# koleksiyonlarında yoktur (C, Java'dan gelenler için çeldiricidir).</div>
</div>

<div class="quiz-q" data-answer="d">
  <p class="q-text"><strong>Soru 7.</strong> Overloading (aşırı yükleme) için hangisi doğrudur?</p>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) Türeyen sınıfta virtual metodu override anahtar kelimesiyle yeniden yazmaktır</button>
    <button class="q-opt" data-opt="b">B) Bir metodun adının sonradan değiştirilmesidir</button>
    <button class="q-opt" data-opt="c">C) Yalnızca static metotlarda kullanılabilir</button>
    <button class="q-opt" data-opt="d">D) Aynı sınıfta aynı isimli ama farklı parametre listeli metotlar yazmaktır</button>
  </div>
  <div class="q-explain"><strong>Cevap: D.</strong> Overloading: aynı isim + farklı parametre (sayı veya tip), aynı sınıf içinde. A şıkkı overriding'in tanımıdır — bu iki kavramı yer değiştirtmek sınavın en sevdiği oyundur.</div>
</div>

<div class="quiz-q" data-answer="c">
  <p class="q-text"><strong>Soru 8. (Tuzak)</strong> Aşağıdaki kodun çıktısı nedir?</p>
  <pre><code class="lang-csharp">class Kutu { public int Deger; }

class Program
{
    static void Main()
    {
        Kutu k1 = new Kutu();
        k1.Deger = 5;
        Kutu k2 = k1;
        k2.Deger = 99;
        Console.WriteLine(k1.Deger);
    }
}</code></pre>
  <div class="q-options">
    <button class="q-opt" data-opt="a">A) 5</button>
    <button class="q-opt" data-opt="b">B) 0</button>
    <button class="q-opt" data-opt="c">C) 99</button>
    <button class="q-opt" data-opt="d">D) NullReferenceException fırlatır</button>
  </div>
  <div class="q-explain"><strong>Cevap: C.</strong> Kutu bir class, yani referans tipidir: k2 = k1 ataması nesneyi KOPYALAMAZ, aynı nesneye ikinci bir referans verir. k2 üzerinden yapılan değişiklik k1'de de görünür. A şıkkı değer tipi (struct olsaydı) davranışıdır — Soru 1 ile bu sorunun farkı tam olarak value/reference ayrımıdır.</div>
</div>

<h2>🔁 Mini Tekrar</h2>
<div class="table-wrap"><table>
<thead><tr><th>Tuzak</th><th>Tek Satırlık Kural</th></tr></thead>
<tbody>
<tr><td>Value ↔ Reference</td><td>int/bool/char/struct kopyalanır; class/array/string aynı nesneyi gösterir</td></tr>
<tr><td>string</td><td>Referans tipi AMA immutable; metotları yeni string döndürür</td></tr>
<tr><td>== ↔ Equals</td><td>Referansta == referansa bakar, Equals içeriğe (string == istisna)</td></tr>
<tr><td>var</td><td>Dinamik DEĞİL; derleme zamanı tip çıkarımı, tip değişemez</td></tr>
<tr><td>const ↔ readonly</td><td>const derlemede; readonly constructor'da atanabilir</td></tr>
<tr><td>static</td><td>Nesneye değil TİPE ait; sınıf adıyla erişilir</td></tr>
<tr><td>private ↔ protected</td><td>private sadece kendi sınıfı; protected + türeyen sınıflar</td></tr>
<tr><td>new</td><td>Heap'te nesne oluşturur, constructor çalıştırır; new'siz referans null'dur</td></tr>
<tr><td>NullReferenceException</td><td>null referansın üyesine erişince fırlar</td></tr>
<tr><td>Interface ↔ Abstract</td><td>Interface çoklu + sadece sözleşme; abstract tek miras + ortak kod</td></tr>
<tr><td>Overloading ↔ Overriding</td><td>Aynı sınıf farklı parametre ↔ kalıtımda aynı imza</td></tr>
<tr><td>break ↔ continue</td><td>break döngüyü bitirir; continue turu atlar</td></tr>
<tr><td>try-catch-finally</td><td>Hata satırından sonrası atlanır; finally HER ZAMAN en son</td></tr>
<tr><td>First ↔ FirstOrDefault</td><td>Boşta First HATA; FirstOrDefault 0 / null döner</td></tr>
<tr><td>Length ↔ Count</td><td>Dizi → Length; List → Count</td></tr>
<tr><td>IEnumerable ↔ List</td><td>IEnumerable sadece gezinme; List ekleme/indeks/Count</td></tr>
</tbody>
</table></div>
`
  }
]);
