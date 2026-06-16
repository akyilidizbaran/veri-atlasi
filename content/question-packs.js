/* Her konu icin en az 12 soru hedefi.
   Var olan sorular korunur; 12'nin altinda kalan konular konu profillerinden tamamlanir. */

(function () {
  'use strict';

  var S = window.SINAV;
  var TARGET = 12;

  var profiles = {
    'bo-01-donanim': p('donanim-yazilim ayrimi', 'Bilgisayar bilesenlerini dogru siniflandirma', [
      t('CPU', 'komutlari isleyen ana islem birimi'),
      t('RAM', 'calisan programlarin gecici olarak veri tuttugu bellek'),
      t('SSD', 'verileri kalici olarak saklayan depolama birimi'),
      t('isletim sistemi', 'donanim ile uygulamalar arasinda kaynak yonetimi yapan sistem yazilimi'),
      t('uygulama yazilimi', 'kullanicinin belirli bir isi yapmasini saglayan program'),
      t('surucu', 'donanimin isletim sistemiyle dogru haberlesmesini saglayan yazilim')
    ], ['Donanim fiziksel bilesendir; yazilim komut ve program katmanidir.', 'RAM kalici depolama degildir.', 'Isletim sistemi uygulama yazilimi degil sistem yazilimidir.']),
    'bo-02-yazilim-turleri': p('yazilim turleri', 'Yazilimin amacina gore siniflandirilmasi', [
      t('sistem yazilimi', 'bilgisayarin temel calismasini ve kaynak yonetimini saglayan yazilim'),
      t('uygulama yazilimi', 'kullanicinin belge, hesaplama, iletisim gibi islerini yapan yazilim'),
      t('programlama dili', 'yazilim gelistirmek icin kullanilan dil ve kurallar butunu'),
      t('acik kaynak', 'kaynak kodu incelenebilir ve lisansina gore degistirilebilir yazilim'),
      t('lisans', 'yazilimin hangi kosullarda kullanilabilecegini belirleyen izin yapisi'),
      t('yardimci yazilim', 'bakim, sikistirma, yedekleme gibi destek isleri yapan yazilim')
    ], ['Antivirus veya sikistirma araci genellikle yardimci yazilimdir.', 'Acik kaynak ucretsiz olmak zorunda degildir.', 'Isletim sistemi sistem yazilimidir.']),
    'bo-03-dosya-klasor': p('dosya-klasor mantigi', 'Dosya turu, uzanti ve klasor hiyerarsisini okuma', [
      t('dosya uzantisi', 'dosyanin turu hakkinda ipucu veren isim sonu'),
      t('klasor', 'dosya ve alt klasorleri duzenlemek icin kullanilan yapi'),
      t('yol', 'dosyanin sistem icindeki konumunu gosteren adres'),
      t('ZIP arsivi', 'birden cok dosyayi tek pakette toplayip sikistirabilen arsiv'),
      t('PDF', 'belgenin gorunumunu sabit sekilde paylasmaya uygun dosya turu'),
      t('yedek', 'veri kaybina karsi saklanan ikinci kopya')
    ], ['Uzanti tek basina guvenlik garantisi vermez.', 'Klasor dosyanin icerigini degil konumunu duzenler.', 'Sikistirilmis arsiv kullanmadan once acilmayi gerektirebilir.']),
    'bo-04-internet-ag': p('internet-ag temelleri', 'Ag terimlerini birbirinden ayirma', [
      t('DNS', 'alan adini IP adresine ceviren ad cozumleme sistemi'),
      t('IP adresi', 'ag uzerindeki cihaz veya arayuzu tanimlayan mantiksal adres'),
      t('HTTP', 'web istemcisi ile sunucu arasinda veri alisverisini saglayan protokol'),
      t('router', 'farkli aglar arasinda veri yonlendiren cihaz'),
      t('switch', 'ayni yerel agdaki cihazlari birbirine baglayan cihaz'),
      t('tarayici', 'web icerigini isteyen ve kullaniciya gosteren uygulama')
    ], ['Web internetin tamamı degil, internet uzerindeki servislerden biridir.', 'DNS tarayici degildir.', 'Router ile switch ayni islevi yapmaz.']),
    'bo-05-guvenlik': p('bilgi guvenligi', 'Guvenlik ilkesi ve saldiri turunu ayirt etme', [
      t('gizlilik', 'verinin yetkisiz kisilerce gorulmemesi ilkesi'),
      t('butunluk', 'verinin izinsiz degistirilmemesi ilkesi'),
      t('erisilebilirlik', 'sistemin ihtiyac aninda kullanilabilir olmasi ilkesi'),
      t('phishing', 'kullaniciyi kandirarak bilgi almaya calisan sosyal muhendislik saldirisi'),
      t('iki asamali dogrulama', 'parolaya ek ikinci kanit isteyen giris guvenligi'),
      t('yedekleme', 'veri kaybina karsi kopya saklama uygulamasi')
    ], ['Antivirus tek basina tam guvenlik saglamaz.', 'Phishing teknik aciktan cok kullaniciyi kandirmaya dayanir.', 'Yedekleme gizlilikten cok kurtarma ve erisilebilirlik ile ilgilidir.']),
    'bo-06-ofis': p('ofis programlari', 'Ofis aracini ve formul mantigini secme', [
      t('kelime islemci', 'metin belgesi olusturma ve bicimlendirme araci'),
      t('hesap tablosu', 'veri, formul, grafik ve tablo analizi araci'),
      t('sunu programi', 'slaytlarla anlatim hazirlama araci'),
      t('goreceli basvuru', 'kopyalandigi konuma gore degisen hucre referansi'),
      t('mutlak basvuru', 'dolar isaretiyle sabitlenen hucre referansi'),
      t('SUM', 'sayisal degerleri toplamak icin kullanilan fonksiyon')
    ], ['COUNT toplama yapmaz, sayma yapar.', 'PDF genellikle sabit gorunumlu paylasim icindir.', 'Slayt gecisi nesne animasyonuyla ayni degildir.']),
    'bo-07-dijital-kavramlar': p('guncel dijital kavramlar', 'Bulut, yapay zeka ve dijital servis terimlerini ayirma', [
      t('bulut bilisim', 'kaynak ve hizmetlerin internet uzerinden saglanmasi'),
      t('SaaS', 'uygulamanin internet uzerinden hizmet olarak sunulmasi'),
      t('PaaS', 'uygulama gelistirme ve calistirma platformunun hizmet olarak sunulmasi'),
      t('IaaS', 'sunucu, depolama ve ag gibi altyapinin hizmet olarak sunulmasi'),
      t('yapay zeka', 'veriden ogrenme veya karar destek davranisi sergileyen sistemler'),
      t('IoT', 'fiziksel cihazlarin internete baglanip veri uretmesi')
    ], ['SaaS kullaniciya hazir uygulama sunar.', 'Bulut sadece dosya depolama degildir.', 'IoT cihazlari veri uretir ve agla haberlesir.']),

    'os-01-nedir': p('isletim sistemi tanimi', 'Isletim sisteminin temel rolunu kavrama', [
      t('isletim sistemi', 'donanim kaynaklarini yoneten ve uygulamalara calisma ortami saglayan sistem yazilimi'),
      t('cekirdek', 'isletim sisteminin donanim ve kaynak yonetimine yakin temel bolumu'),
      t('kaynak yonetimi', 'CPU, bellek, dosya ve aygitlarin paylastirilmasi'),
      t('kullanici arayuzu', 'kullanicinin sistemle etkilesmesini saglayan katman'),
      t('surucu', 'aygit ile isletim sistemi arasinda iletisim saglayan yazilim'),
      t('servis', 'arka planda belirli gorevleri yurutebilen sistem bileseni')
    ], ['Isletim sistemi uygulama programi degil sistem yazilimidir.', 'Cekirdek tum arayuz demek degildir.', 'Surucu donanimla haberlesmeyi kolaylastirir.']),
    'os-02-gorevler': p('isletim sistemi gorevleri', 'Kaynak yonetimi gorevlerini tanima', [
      t('process yonetimi', 'calisan programlarin olusturulmasi, zamanlanmasi ve sonlandirilmasi'),
      t('bellek yonetimi', 'RAM ve adres alanlarinin duzenlenmesi'),
      t('dosya yonetimi', 'dosya olusturma, silme, erisim ve klasor hiyerarsisinin yonetimi'),
      t('aygit yonetimi', 'donanim aygitlarinin suruculerle kontrol edilmesi'),
      t('guvenlik', 'kullanici, yetki ve erisim kontrollerinin uygulanmasi'),
      t('zamanlama', 'CPU nun hangi ise ne zaman verilecegini belirleme')
    ], ['Dosya yonetimi bellek yonetimiyle ayni sey degildir.', 'CPU zamanlama performansi etkiler.', 'Yetki kontrolu isletim sistemi gorevlerinden biridir.']),
    'os-03-process-thread': p('process-thread ayrimi', 'Calisma birimlerini ayirt etme', [
      t('program', 'diskte duran pasif komutlar butunu'),
      t('process', 'calisan program ornegi ve kaynak sahibi yurutme birimi'),
      t('thread', 'process icindeki daha hafif yurutme akisi'),
      t('scheduler', 'CPU zamanini process veya threadlere paylastiran bilesen'),
      t('context switch', 'CPU nun bir calisma baglamindan digerine gecmesi'),
      t('adres alani', 'processin kullanabildigi bellek gorunumu')
    ], ['Program calismadan process olmaz.', 'Threadler genellikle process kaynaklarini paylasir.', 'Cok thread her zaman daha hizli demek degildir.']),
    'os-04-bellek': p('bellek yonetimi', 'Bellek katmanlarini ve islevlerini ayirma', [
      t('RAM', 'calisan programlarin gecici veri tuttugu ana bellek'),
      t('cache', 'CPU ya yakin hizli onbellek'),
      t('swap', 'RAM yetmediginde diskin bellek gibi kullanilan alani'),
      t('virtual memory', 'processlere soyut ve izole adres alani saglayan mekanizma'),
      t('page', 'bellek yonetiminde sabit boyutlu blok'),
      t('segmentation fault', 'gecersiz bellek erisimiyle iliskili calisma zamani hatasi')
    ], ['Swap RAM kadar hizli degildir.', 'Cache kalici depolama degildir.', 'Virtual memory sadece fiziksel RAM miktari degildir.']),
    'os-05-dosya-sistemleri': p('dosya sistemleri', 'Dosya sistemi amacini ve turlerini tanima', [
      t('NTFS', 'Windows tarafinda yaygin dosya sistemi'),
      t('FAT32', 'genis uyumluluga sahip ama dosya boyutu sinirlari olan dosya sistemi'),
      t('ext4', 'Linux sistemlerde yaygin dosya sistemi'),
      t('metadata', 'dosyanin ad, boyut, tarih ve izin gibi tanimlayici bilgileri'),
      t('partition', 'diskin mantiksal bolumu'),
      t('formatlama', 'dosya sistemi yapisini diske hazirlama islemi')
    ], ['Formatlama veri kaybina yol acabilecegi icin dikkat ister.', 'Dosya sistemi dosyanin iceriginden cok saklama duzenini belirler.', 'NTFS ve ext4 farkli ekosistemlerde yaygindir.']),
    'os-06-yetki': p('kullanici-yetki', 'Kimlik ve erisim izinlerini okuma', [
      t('kullanici', 'sistemde islem yapan hesap veya kimlik'),
      t('grup', 'birden fazla kullaniciya ortak izin vermeyi kolaylastiran yapi'),
      t('read izni', 'dosya icerigini okuma yetkisi'),
      t('write izni', 'dosyayi degistirme yetkisi'),
      t('execute izni', 'dosya veya programi calistirma yetkisi'),
      t('sudo', 'komutu yuksek yetkiyle calistirma mekanizmasi')
    ], ['Yetki vermek kimlik dogrulamayla ayni adim degildir.', 'Execute izni okuma izniyle ayni degildir.', 'sudo komutun amacini degil yetki duzeyini degistirir.']),
    'os-07-komut-satiri': p('komut satiri', 'Komutun amacini ve etkisini secme', [
      t('ls', 'dizin icerigini listeleyen komut'),
      t('cd', 'calisilan dizini degistiren komut'),
      t('pwd', 'mevcut dizin yolunu gosteren komut'),
      t('mkdir', 'yeni klasor olusturan komut'),
      t('rm', 'dosya veya klasor silmeye yarayan komut'),
      t('chmod', 'dosya izinlerini degistiren komut')
    ], ['cd listeleme yapmaz, dizin degistirir.', 'rm dikkatli kullanilmalidir.', 'chmod sahiplik degil izin degistirir.']),
    'os-08-turler': p('isletim sistemi turleri', 'Sistem turunu kullanim amacina gore ayirma', [
      t('masaustu isletim sistemi', 'kisisel bilgisayarlarda kullanima odaklanan sistem'),
      t('sunucu isletim sistemi', 'ag servisleri ve cok kullanicili hizmetlere odaklanan sistem'),
      t('mobil isletim sistemi', 'telefon ve tablet gibi mobil cihazlara yonelik sistem'),
      t('gercek zamanli sistem', 'zaman kisitlari kritik olan uygulamalara yonelik sistem'),
      t('gömülü sistem', 'belirli cihazin icinde ozel gorev yapan sistem'),
      t('cok kullanicili sistem', 'birden fazla kullanicinin kaynaklari paylasabildigi sistem')
    ], ['Gercek zamanli sistem hizli olmaktan cok zaman garantisiyle ilgilidir.', 'Mobil sistem masaustuyle ayni arayuz hedefini tasimaz.', 'Sunucu sistemi hizmet surekliligi odaklidir.']),
    'os-09-boot': p('boot sureci', 'Sistem acilis adimlarini siralama', [
      t('BIOS/UEFI', 'donanimi baslatan ve boot surecini tetikleyen firmware katmani'),
      t('POST', 'acilista temel donanim kontrolu'),
      t('bootloader', 'isletim sistemi cekirdegini yuklemeyi baslatan program'),
      t('kernel', 'isletim sisteminin temel cekirdegi'),
      t('init/systemd', 'sistem servislerini baslatan kullanici alani sureci'),
      t('firmware', 'donanima gomulu dusuk seviyeli kontrol yazilimi')
    ], ['Bootloader isletim sisteminin tamamı degildir.', 'POST donanim kontroluyle ilgilidir.', 'UEFI modern firmware arayuzudur.']),
    'os-10-sanallastirma': p('sanallastirma-konteyner', 'VM ve konteyner farkini okuma', [
      t('sanal makine', 'kendi konuk isletim sistemiyle calisan sanal bilgisayar ortami'),
      t('hypervisor', 'sanal makineleri olusturup yoneten katman'),
      t('konteyner', 'uygulamayi bagimliliklariyla izole calistiran hafif paketleme yaklasimi'),
      t('image', 'konteyner veya VM icin baslangic sablonu'),
      t('host sistem', 'sanal ortamlarin uzerinde calistigi fiziksel veya ana sistem'),
      t('izolasyon', 'ortamlarin birbirinden ayrilmasi')
    ], ['Konteyner tam sanal makine degildir.', 'Hypervisor konteyner imaji degildir.', 'VM genellikle konuk isletim sistemi icerir.']),

    'sql-01-veritabani': p('veritabani temelleri', 'Tablo, satir, kolon ve anahtar mantigini kavrama', [
      t('tablo', 'verilerin satir ve kolonlar halinde tutuldugu yapi'),
      t('satir', 'tek bir kaydi temsil eden tablo birimi'),
      t('kolon', 'kaydin belirli bir ozelligini temsil eden alan'),
      t('primary key', 'satiri benzersiz tanimlayan anahtar'),
      t('foreign key', 'baska tablodaki anahtara referans veren alan'),
      t('iliskisel veritabani', 'tablolar ve iliskiler uzerine kurulu veri modeli')
    ], ['Primary key benzersizligi saglar.', 'Foreign key tablolar arasi iliski kurar.', 'Kolon ve satir ayni kavram degildir.']),
    'sql-02-komut-turleri': p('SQL komut turleri', 'DDL, DML, DCL ve TCL ayrimini yapma', [
      t('DDL', 'CREATE, ALTER, DROP gibi yapi tanimlama komutlari grubu'),
      t('DML', 'SELECT, INSERT, UPDATE, DELETE gibi veriyle calisan komutlar grubu'),
      t('DCL', 'GRANT ve REVOKE gibi yetki komutlari grubu'),
      t('TCL', 'COMMIT, ROLLBACK gibi transaction kontrol komutlari grubu'),
      t('CREATE', 'yeni veritabani nesnesi olusturma komutu'),
      t('UPDATE', 'var olan satirlardaki veriyi degistirme komutu')
    ], ['DROP veri yapisini kaldirir.', 'COMMIT transaction sonucunu kalici hale getirir.', 'GRANT veri ekleme degil yetki verme komutudur.']),
    'sql-03-select': p('SELECT sorgulari', 'Sorgu sonucunda kolon ve satir secimini okuma', [
      t('SELECT', 'sonucta gosterilecek kolon veya ifadeleri belirleyen bolum'),
      t('FROM', 'verinin alinacagi tablo veya kaynagi belirleyen bolum'),
      t('DISTINCT', 'tekrar eden sonuc satirlarini tekillestiren ifade'),
      t('ORDER BY', 'sonuc satirlarini siralayan bolum'),
      t('alias', 'kolon veya tabloya gecici ad verme'),
      t('LIMIT/TOP', 'sonuc satiri sayisini sinirlama yaklasimi')
    ], ['SELECT filtreleme degil projeksiyon agirliklidir.', 'ORDER BY satirlari siralar, secmez.', 'DISTINCT tum secilen kolon kombinasyonuna gore calisir.']),
    'sql-04-where': p('WHERE kosullari', 'Satir bazli filtreleri dogru kurma', [
      t('WHERE', 'gruplama oncesi satirlari filtreleyen bolum'),
      t('AND', 'kosullarin birlikte saglanmasini isteyen mantiksal operator'),
      t('OR', 'kosullardan en az birinin saglanmasini isteyen mantiksal operator'),
      t('LIKE', 'metin deseniyle arama yapan operator'),
      t('IN', 'bir degerin liste icinde olup olmadigini kontrol eden operator'),
      t('IS NULL', 'NULL degeri kontrol eden ifade')
    ], ['NULL esitlik operatoruyle kontrol edilmez.', 'AND ve OR icin parantez okumasi onemlidir.', 'WHERE aggregate sonucuna gore filtreleme yapmaz.']),
    'sql-05-aggregate': p('aggregate fonksiyonlari', 'Toplu hesaplama fonksiyonlarini ayirma', [
      t('COUNT', 'satir veya NULL olmayan deger sayma fonksiyonu'),
      t('SUM', 'sayisal degerleri toplama fonksiyonu'),
      t('AVG', 'sayisal ortalama hesaplama fonksiyonu'),
      t('MIN', 'en kucuk degeri bulma fonksiyonu'),
      t('MAX', 'en buyuk degeri bulma fonksiyonu'),
      t('GROUP BY', 'aggregate hesaplari gruplara ayirmak icin kullanilan bolum')
    ], ['COUNT(*) ile COUNT(kolon) NULL durumunda farkli olabilir.', 'AVG metin birlestirme yapmaz.', 'Aggregate fonksiyonlar satir gruplari uzerinden sonuc uretir.']),
    'sql-06-group-having': p('GROUP BY ve HAVING', 'Grup olusturma ve grup filtrelemeyi ayirma', [
      t('GROUP BY', 'satirlari ortak kolon degerlerine gore gruplar'),
      t('HAVING', 'olusan gruplari aggregate sonucuna gore filtreler'),
      t('WHERE', 'gruplar olusmadan once kaynak satirlari filtreler'),
      t('COUNT(*)', 'gruptaki satir sayisini hesaplar'),
      t('aggregate kosulu', 'SUM, AVG, COUNT gibi sonuc uzerinden yazilan kosul'),
      t('grup kolonu', 'SELECT listesinde aggregate disinda kalan ve GROUP BY da yer alan kolon')
    ], ['HAVING ve WHERE ayni sirada calismaz.', 'GROUP BY siralama komutu degildir.', 'Aggregate kosulu WHERE icinde dogru kabul edilmez.']),
    'sql-07-join': p('JOIN islemleri', 'Tablolar arasi eslesme sonucunu okuma', [
      t('INNER JOIN', 'yalnizca eslesen satirlari getirir'),
      t('LEFT JOIN', 'sol tablodaki tum satirlari korur'),
      t('RIGHT JOIN', 'sag tablodaki tum satirlari korur'),
      t('FULL OUTER JOIN', 'iki taraftaki eslesen ve eslesmeyen satirlari getirir'),
      t('CROSS JOIN', 'kartezyen carpim uretir'),
      t('ON kosulu', 'tablolarin hangi alanlarla eslestirilecegini belirler')
    ], ['LEFT JOIN de korunan taraf soldur.', 'INNER JOIN eslesmeyenleri getirmez.', 'CROSS JOIN satir sayisini carpabilir.']),
    'sql-08-subquery': p('alt sorgular', 'Ic sorgu ve dis sorgu iliskisini okuma', [
      t('subquery', 'baska bir sorgunun icinde kullanilan sorgu'),
      t('IN alt sorgusu', 'bir degerin alt sorgu sonuc listesinde olup olmadigini kontrol eder'),
      t('EXISTS', 'alt sorguda en az bir satir var mi diye bakar'),
      t('correlated subquery', 'dis sorgudaki satira bagli calisan alt sorgu'),
      t('scalar subquery', 'tek deger dondurmesi beklenen alt sorgu'),
      t('derived table', 'FROM icinde tablo gibi kullanilan alt sorgu')
    ], ['Correlated subquery dis sorguya baglidir.', 'EXISTS deger listesinden cok satir varligini kontrol eder.', 'Scalar subquery birden fazla deger dondururse sorun cikarabilir.']),
    'sql-09-insert-update-delete': p('INSERT UPDATE DELETE', 'Veri ekleme, degistirme ve silme riskini okuma', [
      t('INSERT', 'tabloya yeni satir ekleme komutu'),
      t('UPDATE', 'var olan satirlardaki degerleri degistirme komutu'),
      t('DELETE', 'tablodan satir silme komutu'),
      t('WHERE', 'UPDATE veya DELETE islemini belirli satirlarla sinirlama kosulu'),
      t('transaction', 'birden cok islemi tek mantiksal butun olarak ele alma'),
      t('ROLLBACK', 'transaction icindeki degisiklikleri geri alma komutu')
    ], ['WHERE olmadan UPDATE/DELETE cok genis etki yapabilir.', 'INSERT mevcut satiri degistirmez.', 'ROLLBACK commit edilmemis islemleri geri alir.']),
    'sql-10-create-constraints': p('CREATE TABLE ve constraintler', 'Tablo kural ve kisitlarini tanima', [
      t('CREATE TABLE', 'yeni tablo yapisi olusturma komutu'),
      t('PRIMARY KEY', 'satiri benzersiz tanimlayan kisit'),
      t('FOREIGN KEY', 'baska tabloyla referans iliskisi kuran kisit'),
      t('UNIQUE', 'bir kolondaki degerlerin tekrar etmemesini saglayan kisit'),
      t('CHECK', 'kolon degeri icin mantiksal kosul tanimlayan kisit'),
      t('NOT NULL', 'kolonun bos/NULL birakilmasini engelleyen kisit')
    ], ['Primary key genellikle NULL kabul etmez.', 'Foreign key referans butunluguyla ilgilidir.', 'CHECK veri araligini denetleyebilir.']),
    'sql-11-normalizasyon': p('normalizasyon', 'Tekrar ve anomali azaltma mantigini kavrama', [
      t('1NF', 'tekrarlayan grup olmadan atomik degerlere dayanan normal form'),
      t('2NF', 'kismi bagimliliklari azaltmaya odaklanan normal form'),
      t('3NF', 'gecisli bagimliliklari azaltmaya odaklanan normal form'),
      t('tekrarli veri', 'ayni bilginin gereksiz yerde birden cok tutulmasi'),
      t('anomali', 'ekleme, silme veya guncellemede tutarsizlik ureten durum'),
      t('iliski ayirma', 'tekrar ve bagimliliklari azaltmak icin tabloyu bolme')
    ], ['Normalizasyon performans optimizasyonu degil tasarim tutarliligi hedefler.', '3NF gecisli bagimlilikla ilgilidir.', 'Atomik deger 1NF icin temeldir.']),
    'sql-12-index': p('index ve performans', 'Index etkisini ve maliyetini dengeleme', [
      t('index', 'arama ve siralama performansini artirabilen yardimci veri yapisi'),
      t('full table scan', 'tablonun genis bolumunun satir satir taranmasi'),
      t('selectivity', 'kosulun ne kadar ayirt edici oldugunu anlatan performans fikri'),
      t('write maliyeti', 'indexlerin INSERT/UPDATE/DELETE islemlerinde ek bakim maliyeti uretmesi'),
      t('composite index', 'birden fazla kolondan olusan index'),
      t('query plan', 'veritabaninin sorguyu nasil calistiracagini gosteren plan')
    ], ['Index her sorguyu otomatik hizlandirmaz.', 'Cok index yazma maliyetini artirabilir.', 'Dusuk secicilikte index beklenen faydayi vermeyebilir.']),
    'sql-13-transaction': p('transaction ve ACID', 'Islem butunlugu ve ACID ilkelerini ayirma', [
      t('transaction', 'birden cok veritabani islemini tek mantiksal birim olarak ele alma'),
      t('atomicity', 'islemlerin ya tamamen olmasi ya da hic olmamasi ilkesi'),
      t('consistency', 'veritabaninin kurallara uygun durumdan uygun duruma gecmesi'),
      t('isolation', 'es zamanli islemlerin birbirini bozmadan calismasi'),
      t('durability', 'commit sonrasi verinin kalici olmasi'),
      t('COMMIT', 'transaction sonucunu kalici hale getirme')
    ], ['ROLLBACK islemi geri alir.', 'Durability kalicilikle ilgilidir.', 'Atomicity parcali basariyi kabul etmez.']),
    'sql-14-tuzaklar': p('SQL tuzaklari', 'Benzer SQL kavramlarini ayirt etme', [
      t('DELETE', 'belirli satirlari silebilen DML komutu'),
      t('TRUNCATE', 'tablo verisini hizli bosaltmaya yarayan komut'),
      t('DROP', 'tablo gibi nesnenin yapisini kaldiran komut'),
      t('NULL', 'bilinmeyen veya yok degeri temsil eden ozel durum'),
      t('DISTINCT', 'tekrar eden sonuc satirlarini azaltan ifade'),
      t('ORDER BY', 'sonucu siralamak icin kullanilan bolum')
    ], ['DROP en yikici seceneklerden biridir.', 'NULL sifir veya bos string degildir.', 'DISTINCT ile GROUP BY ayni amacli degildir.']),

    'cs-01-dotnet': p('C# ve .NET temelleri', 'Dil, runtime ve platform iliskisini kavrama', [
      t('C#', 'tip guvenli ve nesne yonelimli programlama dili'),
      t('.NET', 'C# uygulamalarini gelistirme ve calistirma platformu'),
      t('CLR', '.NET kodunun calismasini yoneten runtime katmani'),
      t('derleme', 'kaynak kodun calistirilabilir ara koda veya hedef koda cevrilmesi'),
      t('namespace', 'tipleri mantiksal olarak gruplama yapisi'),
      t('using', 'namespace icindeki tiplere kisa erisim saglayan ifade')
    ], ['C# dil, .NET platformdur.', 'namespace nesne olusturmaz.', 'using tek basina kutuphane kurmaz.']),
    'cs-02-veri-tipleri': p('C# veri tipleri', 'Value/reference type ve null davranisini okuma', [
      t('value type', 'degeri dogrudan tasima ve kopya davranisi gosterme egilimindeki tip'),
      t('reference type', 'nesneye referans tutan tip'),
      t('int', 'tam sayi degeri tutan value type'),
      t('string', 'metin tutan reference type ama immutable davranan tip'),
      t('bool', 'true veya false degeri tutan mantiksal tip'),
      t('nullable', 'normalde null alamayan deger tipinin null alabilen hali')
    ], ['string tek karakter degildir.', 'int normalde null alamaz.', 'class ornekleri reference type davranir.']),
    'cs-03-operatorler': p('operatorler', 'Operator onceligi ve sonuc tipini okuma', [
      t('aritmetik operator', 'toplama, cikarma, carpma gibi sayisal islem yapan operator'),
      t('karsilastirma operatoru', 'iki degeri karsilastirip bool sonuc ureten operator'),
      t('mantiksal operator', 'bool ifadeleri AND/OR/NOT mantigiyla birlestiren operator'),
      t('atama operatoru', 'degiskene deger yerlestiren operator'),
      t('pre-increment', 'degeri kullanmadan once artirma islemi'),
      t('post-increment', 'degeri kullandiktan sonra artirma islemi')
    ], ['= atama, == karsilastirmadir.', '&& ve || bool mantigi uzerinde calisir.', 'i++ ile ++i ayni ifade icinde farkli sonuc verebilir.']),
    'cs-04-kosullar': p('kosul yapilari', 'Akis kontrolu ve karsilastirma mantigini secme', [
      t('if', 'kosul dogruysa belirli kodu calistiran yapi'),
      t('else', 'if kosulu saglanmadiginda calisan alternatif blok'),
      t('else if', 'birden fazla kosulu sirayla deneme yapisi'),
      t('switch', 'bir degeri farkli durumlara gore dallandiran yapi'),
      t('ternary operator', 'kosula gore iki degerden birini secen kisa ifade'),
      t('break', 'switch veya dongu akisindan cikmaya yarayan ifade')
    ], ['else if sirasi onemlidir.', 'switch her problemi if ten daha iyi cozmez.', 'Tek = kosulda karsilastirma degildir.']),
    'cs-05-donguler': p('donguler', 'Tekrar eden kod akisini okuma', [
      t('for', 'sayac veya belirli tekrar sayisi icin yaygin dongu'),
      t('while', 'kosul dogru oldukca calisan dongu'),
      t('do-while', 'kosulu sonda kontrol ettigi icin en az bir kez calisan dongu'),
      t('foreach', 'koleksiyon elemanlari uzerinde sirayla dolasan dongu'),
      t('break', 'donguyu erken bitiren ifade'),
      t('continue', 'mevcut turu atlayip sonraki tura gecen ifade')
    ], ['Sonsuz dongu kosul hatasindan dogabilir.', 'do-while en az bir kez calisir.', 'continue donguyu tamamen bitirmez.']),
    'cs-06-koleksiyonlar': p('diziler ve koleksiyonlar', 'Veri yapisini ihtiyaca gore secme', [
      t('array', 'sabit boyutlu ve indeksli eleman dizisi'),
      t('List<T>', 'dinamik boyutlu generic liste'),
      t('Dictionary<TKey,TValue>', 'anahtar-deger iliskisiyle veri tutan koleksiyon'),
      t('HashSet<T>', 'benzersiz eleman tutmaya odaklanan koleksiyon'),
      t('Queue<T>', 'ilk giren ilk cikar mantigiyla calisan koleksiyon'),
      t('Stack<T>', 'son giren ilk cikar mantigiyla calisan koleksiyon')
    ], ['Dictionary indeks degil anahtar kullanir.', 'List dinamik boyutludur.', 'Stack ve Queue cikarma sirasi olarak farklidir.']),
    'cs-07-metotlar': p('metotlar', 'Parametre, donus ve imza mantigini okuma', [
      t('metot', 'belirli isi yapan adlandirilmis kod blogu'),
      t('parametre', 'metoda disaridan verilen deger veya referans bilgisi'),
      t('return', 'metottan sonuc donduren ifade'),
      t('void', 'metodun deger dondurmedigini belirten donus tipi'),
      t('overloading', 'ayni metot adinin farkli imzalarla tanimlanmasi'),
      t('ref/out', 'parametrenin cagiran tarafla iliskili sekilde aktarilmasi')
    ], ['void metot deger dondurmez.', 'Overloading donus tipiyle tek basina ayrilmaz.', 'Parametre sirasi ve tipi metot imzasinda onemlidir.']),
    'cs-08-oop': p('OOP', 'Nesne yonelimli kavramlari ayirma', [
      t('encapsulation', 'veri ve davranisi kapsulleyip erisimi kontrol etme'),
      t('inheritance', 'bir sinifin baska siniftan ozellik ve davranis devralmasi'),
      t('polymorphism', 'ayni arayuzle farkli gercek davranislarin calisabilmesi'),
      t('abstraction', 'gereksiz ayrintilari gizleyip oz davranisi sunma'),
      t('class', 'nesne icin sablon tanimlayan yapi'),
      t('object', 'class tanimindan olusturulan somut ornek')
    ], ['Overloading ve overriding ayni degildir.', 'Class sablon, object ornektir.', 'Encapsulation sadece private yazmak degildir.']),
    'cs-09-interface-abstract': p('interface ve abstract class', 'Sozlesme ve ortak temel sinif farkini ayirma', [
      t('interface', 'uygulanmasi beklenen uyelerin sozlesmesini tanimlayan yapi'),
      t('abstract class', 'dogrudan nesne olusturulamayan ve ortak davranis tasiyabilen temel sinif'),
      t('implementation', 'interface veya abstract uyenin somut kodla gerceklenmesi'),
      t('abstract method', 'govdesi olmayan ve alt sinifta uygulanmasi beklenen metot'),
      t('override', 'kalitilan sanal/abstract davranisi yeniden yazma'),
      t('multiple interface', 'bir sinifin birden fazla interface uygulayabilmesi')
    ], ['Abstract class state tasiyabilir.', 'Interface sozlesme odaklidir.', 'Override ile overloading ayni degildir.']),
    'cs-10-exception': p('exception handling', 'Hata yakalama ve temizlik akisini okuma', [
      t('try', 'hata uretebilecek kodun yazildigi blok'),
      t('catch', 'belirli hata turunu yakalayan blok'),
      t('finally', 'hata olsa da olmasa da calisabilen temizlik blogu'),
      t('throw', 'exception firlatan ifade'),
      t('FormatException', 'uygun olmayan format donusumlerinde gorulebilen hata'),
      t('NullReferenceException', 'null referans uzerinden uye erisiminde gorulebilen hata')
    ], ['finally sadece hata olursa calismaz.', 'Ozel catch genel catchten once gelmelidir.', 'Exception yutmak hatayi cozmeyebilir.']),
    'cs-11-string': p('string islemleri', 'Metin ve immutable davranisi okuma', [
      t('string', 'metin tutan immutable reference type'),
      t('Length', 'metindeki karakter sayisini veren ozellik'),
      t('Substring', 'metnin belirli parcasini alan metot'),
      t('Contains', 'metnin belirli ifadeyi icerip icermedigini kontrol eden metot'),
      t('ToUpper', 'metni buyuk harfe donusturen metot'),
      t('StringBuilder', 'cok sayida metin birlestirmede daha uygun olabilen yapi')
    ], ['String immutable davranir.', 'Length indeksin son degeri degildir.', 'Substring baslangic ve uzunluk bilgisiyle dikkat ister.']),
    'cs-12-linq': p('LINQ', 'Filtreleme, projeksiyon ve eleman secimini ayirma', [
      t('Where', 'kosula uyan elemanlari filtreleyen LINQ metodu'),
      t('Select', 'elemanlari baska bir forma donusturen/projekte eden metot'),
      t('Any', 'en az bir eleman kosulu sagliyor mu diye kontrol eden metot'),
      t('All', 'tum elemanlar kosulu sagliyor mu diye kontrol eden metot'),
      t('First', 'ilk elemani dondurur, bulunamazsa hata uretebilir'),
      t('FirstOrDefault', 'ilk elemani veya bulunamazsa varsayilan degeri dondurur')
    ], ['Where bool degil sorgu/koleksiyon sonucu uretir.', 'Select filtreleme yapmaz.', 'First ve FirstOrDefault hata davranisi acisindan farklidir.']),
    'cs-13-generics': p('generics', 'Tip parametresi ve tip guvenligini kavrama', [
      t('generic type', 'tip parametresiyle farkli tiplerle calisabilen yapi'),
      t('T', 'generic tip parametresi icin yaygin sembol'),
      t('List<T>', 'belirli tipte eleman tutan generic liste'),
      t('Dictionary<TKey,TValue>', 'anahtar ve deger tipleri parametreli koleksiyon'),
      t('type safety', 'yanlis tip kullanimini derleme zamaninda azaltma'),
      t('constraint', 'generic tip parametresi icin kisit belirtme')
    ], ['Genericler object kullanmaya gore tip guvenligini artirabilir.', 'T gercek tip degil tip parametresidir.', 'Constraint her tipi kabul etmeyi sinirlar.']),
    'cs-14-delegate-lambda': p('delegate event lambda', 'Fonksiyon referansi ve olay mantigini ayirma', [
      t('delegate', 'metot imzasini temsil eden tip'),
      t('event', 'olay bildirim mekanizmasi'),
      t('lambda', 'kisa anonim fonksiyon yazimi'),
      t('Func', 'deger donduren hazir delegate ailesi'),
      t('Action', 'deger dondurmeyen hazir delegate ailesi'),
      t('event handler', 'olay gerceklestiginde calisan metot')
    ], ['Delegate metodu temsil eder, metodu hemen calistirmak zorunda degildir.', 'Func deger dondurur, Action dondurmez.', 'Event dis dunyaya kontrollu bildirim sunar.']),
    'cs-15-async': p('async await', 'Asenkron bekleme ve paralellik farkini ayirma', [
      t('async', 'metodun asenkron calisma modeli kullanabilecegini belirten anahtar kelime'),
      t('await', 'Task tamamlanana kadar asenkron bekleme noktasini ifade eden anahtar kelime'),
      t('Task', 'asenkron islemi temsil eden tip'),
      t('Task<T>', 'asenkron islemin tamamlaninca T tipinde sonuc urettigini anlatan tip'),
      t('parallelism', 'islerin gercekten ayni anda yurutulmesi'),
      t('async void', 'genellikle event handler disinda kacınılan asenkron imza')
    ], ['Async otomatik yeni thread demek degildir.', 'await edilen Task hatasi try-catch ile yakalanabilir.', 'Task<T> sonuc ureten asenkron isi temsil eder.']),
    'cs-16-tuzaklar': p('C# tuzaklari', 'Kod ciktisi ve celdirici davranislari okuma', [
      t('post-increment', 'degeri kullandiktan sonra artirma islemi'),
      t('pre-increment', 'degeri kullanmadan once artirma islemi'),
      t('reference sharing', 'iki degiskenin ayni nesneyi gostermesi durumu'),
      t('null access', 'null referans uzerinden uye erisimi yapma hatasi'),
      t('integer division', 'tam sayilarla bolmede kesirli kismin atilabilmesi'),
      t('short-circuit', 'mantiksal operatorun ikinci kosulu gerekmiyorsa calistirmamasi')
    ], ['i++ ve ++i farkli zamanda artirir.', 'Ayni List referansi iki degiskende gorulebilir.', 'Null kontrolu yapilmadan property erisimi hata uretebilir.'])
  };

  function p(key, scenario, terms, traps) {
    return { key: key, scenario: scenario, terms: terms, traps: traps };
  }

  function t(name, def) {
    return { name: name, def: def };
  }

  function countBaseQuestions(html) {
    return (String(html).match(/class="quiz-q"/g) || []).length;
  }

  function ensurePack(topic, profile) {
    var pack = S.enrichments[topic.id];
    if (!pack) {
      pack = {
        focus: topic.title + ' basliginda 12 soru hedefi icin ek kavram, senaryo ve celdirici sorulari.',
        deep: [],
        traps: [],
        questions: []
      };
      S.enrichments[topic.id] = pack;
    }
    if (!pack.deep) pack.deep = [];
    if (!pack.traps) pack.traps = [];
    if (!pack.questions) pack.questions = [];
    if (!pack.traps.length && profile.traps) {
      pack.traps = profile.traps.slice(0, 2);
    }
    return pack;
  }

  function pickTerms(profile, start, count) {
    var terms = profile.terms;
    var picked = [];
    for (var i = 0; i < count; i++) picked.push(terms[(start + i) % terms.length]);
    return picked;
  }

  var trMap = {
    'acik': 'açık',
    'acisindan': 'açısından',
    'ag': 'ağ',
    'aga': 'ağa',
    'agda': 'ağda',
    'agdaki': 'ağdaki',
    'agi': 'ağı',
    'agla': 'ağla',
    'aglar': 'ağlar',
    'aglari': 'ağları',
    'agirliklidir': 'ağırlıklıdır',
    'alisverisini': 'alışverişini',
    'amacina': 'amacına',
    'amaci': 'amacı',
    'anlamina': 'anlamına',
    'araci': 'aracı',
    'arayuzu': 'arayüzü',
    'arsivi': 'arşivi',
    'asamada': 'aşamada',
    'bagimliliklari': 'bağımlılıkları',
    'bagimlilikla': 'bağımlılıkla',
    'bagimliliklariyla': 'bağımlılıklarıyla',
    'bagimliliklarini': 'bağımlılıklarını',
    'bagimli': 'bağımlı',
    'bagli': 'bağlı',
    'baglanip': 'bağlanıp',
    'baglanmasi': 'bağlanması',
    'baglayan': 'bağlayan',
    'baglar': 'bağlar',
    'bakim': 'bakım',
    'basarili': 'başarılı',
    'basariyi': 'başarıyı',
    'baslangic': 'başlangıç',
    'baslatan': 'başlatan',
    'baslatir': 'başlatır',
    'baslatma': 'başlatma',
    'basligi': 'başlığı',
    'basliginda': 'başlığında',
    'basina': 'başına',
    'belirleyici': 'belirleyici',
    'bilgisayarin': 'bilgisayarın',
    'baska': 'başka',
    'bilesen': 'bileşen',
    'bileseni': 'bileşeni',
    'bilesenlerini': 'bileşenlerini',
    'bilisim': 'bilişim',
    'birakilmasini': 'bırakılmasını',
    'birden': 'birden',
    'birimi': 'birimi',
    'birimini': 'birimini',
    'butun': 'bütün',
    'butunlugu': 'bütünlüğü',
    'buyuk': 'büyük',
    'buyur': 'büyür',
    'cagiran': 'çağıran',
    'calisan': 'çalışan',
    'calisanlar': 'çalışanlar',
    'calisma': 'çalışma',
    'calismasi': 'çalışması',
    'calismasini': 'çalışmasını',
    'calistigi': 'çalıştığı',
    'calistiran': 'çalıştıran',
    'calistirir': 'çalıştırır',
    'calistirilabilir': 'çalıştırılabilir',
    'calistirma': 'çalıştırma',
    'calistirmasi': 'çalıştırması',
    'calistirmaz': 'çalıştırmaz',
    'calistirsa': 'çalıştırsa',
    'calisir': 'çalışır',
    'carpim': 'çarpım',
    'carpimini': 'çarpımını',
    'celdirici': 'çeldirici',
    'cekim': 'çekim',
    'cekirdek': 'çekirdek',
    'ceviren': 'çeviren',
    'cevrilmesi': 'çevrilmesi',
    'cikabilir': 'çıkabilir',
    'cikar': 'çıkar',
    'cikarma': 'çıkarma',
    'cikmaya': 'çıkmaya',
    'ciktisi': 'çıktısı',
    'cikti': 'çıktı',
    'cok': 'çok',
    'cozmez': 'çözmez',
    'cozum': 'çözüm',
    'daha': 'daha',
    'deger': 'değer',
    'degeri': 'değeri',
    'degerin': 'değerin',
    'degerleri': 'değerleri',
    'degerlerini': 'değerlerini',
    'degerlendirme': 'değerlendirme',
    'degerlerden': 'değerlerden',
    'degerle': 'değerle',
    'degerli': 'değerli',
    'degere': 'değere',
    'degildir': 'değildir',
    'degil': 'değil',
    'degisken': 'değişken',
    'degiskene': 'değişkene',
    'degiskenin': 'değişkenin',
    'degistiren': 'değiştiren',
    'degistirilebilir': 'değiştirilebilir',
    'degistirme': 'değiştirme',
    'degistirir': 'değiştirir',
    'destegi': 'desteği',
    'disaridan': 'dışarıdan',
    'dogabilir': 'doğabilir',
    'dogrudan': 'doğrudan',
    'dogrudur': 'doğrudur',
    'dogru': 'doğru',
    'donduren': 'döndüren',
    'dondurmesi': 'döndürmesi',
    'donmesini': 'dönmesini',
    'dondurur': 'döndürür',
    'dondururse': 'döndürürse',
    'donus': 'dönüş',
    'donusumlerinde': 'dönüşümlerinde',
    'donusturen': 'dönüştüren',
    'donusturur': 'dönüştürür',
    'donanim': 'donanım',
    'donanimi': 'donanımı',
    'dusuk': 'düşük',
    'duzen': 'düzen',
    'duzenler': 'düzenler',
    'duzenlemek': 'düzenlemek',
    'duzenlenmesi': 'düzenlenmesi',
    'erisimi': 'erişimi',
    'erisim': 'erişim',
    'erisimin': 'erişimin',
    'esitleyerek': 'eşitleyerek',
    'eslesme': 'eşleşme',
    'eslesmeyen': 'eşleşmeyen',
    'eslesmeyi': 'eşleşmeyi',
    'eslesen': 'eşleşen',
    'eslestirilecegini': 'eşleştirileceğini',
    'etkilesmesini': 'etkileşmesini',
    'fisiksel': 'fiziksel',
    'farkli': 'farklı',
    'farklidir': 'farklıdır',
    'gore': 'göre',
    'goreceli': 'göreceli',
    'gorelilik': 'görelilik',
    'gorev': 'görev',
    'gorevi': 'görevi',
    'gorevleri': 'görevleri',
    'gosteren': 'gösteren',
    'gosterilecek': 'gösterilecek',
    'gosterir': 'gösterir',
    'gosterme': 'gösterme',
    'gorulebilir': 'görülebilir',
    'gorulebilen': 'görülebilen',
    'gorunumu': 'görünümü',
    'gorunumunu': 'görünümünü',
    'gorunumlu': 'görünümlü',
    'guvenli': 'güvenli',
    'guvenligi': 'güvenliği',
    'guvenligini': 'güvenliğini',
    'guvenilir': 'güvenilir',
    'guvenligini': 'güvenliğini',
    'hata': 'hata',
    'hizli': 'hızlı',
    'hizlandirmaz': 'hızlandırmaz',
    'iceren': 'içeren',
    'icerigini': 'içeriğini',
    'icerik': 'içerik',
    'icerir': 'içerir',
    'icermedigini': 'içermediğini',
    'icinde': 'içinde',
    'icin': 'için',
    'iliskili': 'ilişkili',
    'iliskilidir': 'ilişkilidir',
    'iliskisi': 'ilişkisi',
    'iliskisini': 'ilişkisini',
    'iliski': 'ilişki',
    'iliskiler': 'ilişkiler',
    'iliskisel': 'ilişkisel',
    'iletisim': 'iletişim',
    'isleri': 'işleri',
    'islemi': 'işlemi',
    'islemin': 'işlemin',
    'islemler': 'işlemler',
    'islemleri': 'işlemleri',
    'islem': 'işlem',
    'isletim': 'işletim',
    'kacinilan': 'kaçınılan',
    'kac': 'kaç',
    'kalici': 'kalıcı',
    'kalicilikle': 'kalıcılıkla',
    'karsilastirma': 'karşılaştırma',
    'karsilastirmadir': 'karşılaştırmadır',
    'karsilastirip': 'karşılaştırıp',
    'karsi': 'karşı',
    'karistirilan': 'karıştırılan',
    'karistirilmamalidir': 'karıştırılmamalıdır',
    'karistirir': 'karıştırır',
    'karsilik': 'karşılık',
    'kayit': 'kayıt',
    'kaynak': 'kaynak',
    'kisit': 'kısıt',
    'kisitlari': 'kısıtları',
    'kisitlar': 'kısıtlar',
    'kisiler': 'kişiler',
    'kisileri': 'kişileri',
    'kisilerin': 'kişilerin',
    'kismi': 'kısmi',
    'kopyalandigi': 'kopyalandığı',
    'kosul': 'koşul',
    'kosula': 'koşula',
    'kosulu': 'koşulu',
    'kosulda': 'koşulda',
    'kosullarda': 'koşullarda',
    'kosullarin': 'koşulların',
    'kosulsuz': 'koşulsuz',
    'kullanici': 'kullanıcı',
    'kullaniciya': 'kullanıcıya',
    'kullanicinin': 'kullanıcının',
    'kullanilan': 'kullanılan',
    'kullanilabilecegini': 'kullanılabileceğini',
    'kullanilabilir': 'kullanılabilir',
    'kullanilabilirlik': 'kullanılabilirlik',
    'kullanilmalidir': 'kullanılmalıdır',
    'kullanima': 'kullanıma',
    'kullanim': 'kullanım',
    'kullanimini': 'kullanımını',
    'kullanir': 'kullanır',
    'kullanmak': 'kullanmak',
    'kutuphane': 'kütüphane',
    'mantiksal': 'mantıksal',
    'miktari': 'miktarı',
    'nesne': 'nesne',
    'okunmalidir': 'okunmalıdır',
    'olcude': 'ölçüde',
    'oldugunu': 'olduğunu',
    'olmasa': 'olmasa',
    'olusturan': 'oluşturan',
    'olusturamaz': 'oluşturamaz',
    'olusturabilir': 'oluşturabilir',
    'olusturmak': 'oluşturmak',
    'olusturma': 'oluşturma',
    'olusturur': 'oluşturur',
    'olusturulmasi': 'oluşturulması',
    'once': 'önce',
    'onbellek': 'önbellek',
    'onceligi': 'önceliği',
    'onemlidir': 'önemlidir',
    'ornegi': 'örneği',
    'ornektir': 'örnektir',
    'operator': 'operatör',
    'operatorler': 'operatörler',
    'operatoru': 'operatörü',
    'ortami': 'ortamı',
    'ozel': 'özel',
    'ozelligini': 'özelliğini',
    'ozellik': 'özellik',
    'ozellikleri': 'özellikleri',
    'paylasabilir': 'paylaşabilir',
    'paylasabildigi': 'paylaşabildiği',
    'paylasim': 'paylaşım',
    'sag': 'sağ',
    'sagda': 'sağda',
    'saglamaz': 'sağlamaz',
    'saglamasi': 'sağlaması',
    'saglayan': 'sağlayan',
    'saglar': 'sağlar',
    'saglayabilir': 'sağlayabilir',
    'saglanmasi': 'sağlanması',
    'saglanmadiginda': 'sağlanmadığında',
    'saglanmasini': 'sağlanmasını',
    'sagliyor': 'sağlıyor',
    'saklama': 'saklama',
    'sayisi': 'sayısı',
    'sayisal': 'sayısal',
    'secenek': 'seçenek',
    'seceneklerde': 'seçeneklerde',
    'secimi': 'seçimi',
    'secme': 'seçme',
    'secmez': 'seçmez',
    'secilen': 'seçilen',
    'sekilde': 'şekilde',
    'sey': 'şey',
    'sifre': 'şifre',
    'sik': 'sık',
    'sikistirma': 'sıkıştırma',
    'sinav': 'sınav',
    'sinif': 'sınıf',
    'siniflandirma': 'sınıflandırma',
    'siniflandirilmasi': 'sınıflandırılması',
    'sinifin': 'sınıfın',
    'sinirlama': 'sınırlama',
    'sinirlar': 'sınırlar',
    'sinirlari': 'sınırları',
    'siralanan': 'sıralanan',
    'siralar': 'sıralar',
    'siralamak': 'sıralamak',
    'siralamasi': 'sıralaması',
    'sirayla': 'sırayla',
    'sorgulari': 'sorguları',
    'sorulari': 'soruları',
    'sorularinda': 'sorularında',
    'sozlesme': 'sözleşme',
    'satir': 'satır',
    'satirlar': 'satırlar',
    'satirlari': 'satırları',
    'satirlarinin': 'satırlarının',
    'satirlarini': 'satırlarını',
    'satirli': 'satırlı',
    'sureci': 'süreci',
    'surekliligi': 'sürekliliği',
    'surucu': 'sürücü',
    'suruculerle': 'sürücülerle',
    'tablodaki': 'tablodaki',
    'tanimlayan': 'tanımlayan',
    'tanimi': 'tanımı',
    'tasiyabilir': 'taşıyabilir',
    'tutarliligi': 'tutarlılığı',
    'tur': 'tür',
    'turleri': 'türleri',
    'turunu': 'türünü',
    'tum': 'tüm',
    'uretebilir': 'üretebilir',
    'ureten': 'üreten',
    'uretir': 'üretir',
    'uretilebilir': 'üretilebilir',
    'uretilip': 'üretilip',
    'uretilmeyecegi': 'üretilmeyeceği',
    'uzerinden': 'üzerinden',
    'uzerindeki': 'üzerindeki',
    'uzerine': 'üzerine',
    'uzerinde': 'üzerinde',
    'ucretsiz': 'ücretsiz',
    'varsayilan': 'varsayılan',
    'veritabani': 'veritabanı',
    'yalniz': 'yalnız',
    'yalnizca': 'yalnızca',
    'yanlis': 'yanlış',
    'yardimci': 'yardımcı',
    'yas': 'yaş',
    'yazilim': 'yazılım',
    'yazilimdir': 'yazılımdır',
    'yazilimi': 'yazılımı',
    'yazilimin': 'yazılımın',
    'yazilimidir': 'yazılımıdır',
    'yoneten': 'yöneten',
    'yonetimi': 'yönetimi',
    'yonetimine': 'yönetimine',
    'yonetiminde': 'yönetiminde',
    'yonetimini': 'yönetimini',
    'yonetir': 'yönetir',
    'yonlendiren': 'yönlendiren',
    'yurutme': 'yürütme',
    'yurutulmesi': 'yürütülmesi',
    'yuksek': 'yüksek',
    'yapilirsa': 'yapılırsa',
    'ayni': 'aynı',
    'hizla': 'hızla',
    'korunacagi': 'korunacağı'
  };

  function escReg(value) {
    return String(value).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

  function trText(text) {
    var out = String(text);
    Object.keys(trMap).sort(function (a, b) {
      return b.length - a.length;
    }).forEach(function (key) {
      var re = new RegExp('(^|[^A-Za-zÇĞİÖŞÜçğıöşü])(' + escReg(key) + ')(?=$|[^A-Za-zÇĞİÖŞÜçğıöşü])', 'gi');
      out = out.replace(re, function (_, prefix, word) {
        return prefix + keepCase(word, trMap[key]);
      });
    });
    out = out.replace(/\b([A-Z][A-Z0-9+#<>/*-]*) de\b/g, "$1'de");
    return out;
  }

  function keepCase(source, replacement) {
    if (source.length > 1 && source.toLocaleUpperCase('tr-TR') === source) {
      return replacement.toLocaleUpperCase('tr-TR');
    }
    if (source.charAt(0).toLocaleUpperCase('tr-TR') === source.charAt(0)) {
      return replacement.charAt(0).toLocaleUpperCase('tr-TR') + replacement.slice(1);
    }
    return replacement;
  }

  function nameOf(term) {
    return trText(term.name);
  }

  function defOf(term) {
    return trText(term.def);
  }

  function withAnswer(correct, wrongs, index) {
    var keys = ['a', 'b', 'c', 'd'];
    var answer = keys[index % 4];
    var opts = {};
    var wi = 0;
    keys.forEach(function (k) {
      opts[k] = (k === answer) ? correct : wrongs[wi++ % wrongs.length];
    });
    return { options: opts, answer: answer };
  }

  function question(topic, profile, n) {
    var terms = pickTerms(profile, n, 4);
    var a = terms[0], b = terms[1], c = terms[2], d = terms[3];
    var style = n % 10;
    var qa;

    if (style === 0) {
      qa = withAnswer(defOf(a), [defOf(b), defOf(c), defOf(d)], n);
      return make('Ayırt edici tanım', topic.title + ' kapsamında "' + nameOf(a) + '" kavramını diğer seçeneklerden ayıran en doğru açıklama hangisidir?', qa, nameOf(a) + ' bu başlıkta "' + defOf(a) + '" anlamıyla kullanılır.');
    }

    if (style === 1) {
      qa = withAnswer(nameOf(a), [nameOf(b), nameOf(c), nameOf(d)], n);
      return make('Ters yorum', topic.title + ' sorusunda "' + defOf(a) + '" ifadesi hangi kavrama karşılık gelir?', qa, 'Verilen tanım doğrudan ' + nameOf(a) + ' kavramını anlatır.');
    }

    if (style === 2) {
      if (topic.module === 'sql') return sqlQuestion(topic, profile, terms, n);
      if (topic.module === 'csharp') return csharpQuestion(topic, profile, terms, n);
      qa = withAnswer(nameOf(a), [nameOf(b), nameOf(c), nameOf(d)], n);
      return make('Vaka analizi', topic.title + ' kapsamında ' + trText(profile.scenario).toLowerCase() + ' beklenen bir sınav sorusunda en belirleyici ipucu hangi kavrama götürür?', qa, 'Vakadaki ana ipucu ' + nameOf(a) + ' kavramıyla doğrudan ilişkilidir.');
    }

    if (style === 3) {
      qa = withAnswer(nameOf(a) + ': ' + defOf(a), [nameOf(b) + ': ' + defOf(a), nameOf(c) + ': ' + defOf(b), nameOf(d) + ': ' + defOf(c)], n);
      return make('Doğru eşleştirme', topic.title + ' başlığında doğru kavram-açıklama eşleşmesi hangisidir?', qa, nameOf(a) + ' ile verilen açıklama birbirini tamamlar; diğer seçeneklerde kavram ile açıklama bilinçli olarak yer değiştirmiştir.');
    }

    if (style === 4) {
      var trap = trText(profile.traps[n % profile.traps.length]);
      qa = withAnswer(trap, [
        nameOf(a) + ' ile ' + nameOf(b) + ' her koşulda aynı görevi yapar.',
        nameOf(c) + ' yalnızca görsel tercih olduğu için sınavda teknik anlam taşımaz.',
        nameOf(d) + ' kullanıldığında diğer tüm kavramlar otomatik olarak gereksiz kalır.'
      ], n);
      return make('Çeldirici seçimi', topic.title + ' başlığında aşağıdaki ifadelerden hangisi sınav çeldiricisi olarak özellikle dikkate alınmalıdır?', qa, 'Bu ifade konunun sık karıştırılan noktasını hedefler: ' + trap);
    }

    if (style === 5) {
      qa = withAnswer('Yalnız I ve III', ['Yalnız II', 'I, II ve III', 'Yalnız III'], n);
      return make('Öncül yorumu',
        'I. ' + nameOf(a) + ' bu konunun temel kavramlarından biridir. II. ' + nameOf(b) + ' her durumda ' + nameOf(a) + ' ile aynı sonucu verir. III. ' + trText(profile.traps[(n + 1) % profile.traps.length]) + ' Buna göre hangi öncüller güvenilir kabul edilmelidir?',
        qa,
        'I doğrudur; III konunun çeldirici noktasını doğru işaret eder. II ise iki farklı kavramı koşulsuz eşitleyerek hatalı genelleme yapar.');
    }

    if (style === 6) {
      qa = withAnswer(nameOf(d) + ' -> ' + nameOf(c) + ' -> ' + nameOf(b) + ' -> ' + nameOf(a), [
        nameOf(a) + ' -> ' + nameOf(b) + ' -> ' + nameOf(c) + ' -> ' + nameOf(d),
        nameOf(b) + ' -> ' + nameOf(a) + ' -> ' + nameOf(d) + ' -> ' + nameOf(c),
        nameOf(c) + ' -> ' + nameOf(d) + ' -> ' + nameOf(a) + ' -> ' + nameOf(b)
      ], n);
      return make('Sıralama', topic.title + ' için ' + nameOf(a) + ', ' + nameOf(b) + ', ' + nameOf(c) + ' ve ' + nameOf(d) + ' kavramları birlikte sorulduğunda hangi okuma sırası daha tutarlıdır?', qa, 'Doğru seçenek, kavramları daha genel çerçeveden daha somut uygulama veya sonuç düzeyine indirerek okur.');
    }

    if (style === 7) {
      qa = withAnswer(nameOf(b) + ': ' + defOf(a), [nameOf(a) + ': ' + defOf(a), nameOf(c) + ': ' + defOf(c), nameOf(d) + ': ' + defOf(d)], n);
      return make('Hatalı eşleştirme', 'Aşağıdaki eşleştirmelerden hangisi bilinçli olarak hatalı verilmiştir?', qa, nameOf(b) + ' kavramı, ' + nameOf(a) + ' için verilen açıklamayla eşleştirildiği için seçenek hatalıdır.');
    }

    if (style === 8) {
      if (topic.module === 'sql') return sqlQuestion(topic, profile, terms, n + 3);
      if (topic.module === 'csharp') return csharpQuestion(topic, profile, terms, n + 3);
      qa = withAnswer('Önce tanımı, sonra sınırını ve karıştırıldığı kavramı kontrol etmek', [
        'Yalnızca kavram adını ezberlemek',
        'Tüm seçenekleri aynı kategori kabul etmek',
        'Soru kökünü okumadan en tanıdık terimi işaretlemek'
      ], n);
      return make('Strateji', topic.title + ' sorusunda ' + nameOf(a) + ' ile ' + nameOf(b) + ' birbirine çok yakın görünüyorsa en sağlam çözüm yolu hangisidir?', qa, 'Zor sorularda doğru cevap çoğu zaman kavramın sınırını ve ne olmadığını okuyarak bulunur.');
    }

    qa = withAnswer(trText(profile.key), [nameOf(b), nameOf(c), nameOf(d)], n);
    return make('Kapsam sentezi', topic.title + ' başlığındaki bilgileri tek bir çalışma odağına indirgemek gerekirse en doğru odak hangisidir?', qa, 'Bu konu temel olarak ' + trText(profile.key) + ' etrafında okunmalıdır.');
  }

  function sqlQuestion(topic, profile, terms, n) {
    var a = terms[0], b = terms[1], c = terms[2], d = terms[3];
    var code = 'SELECT ' + safeSqlName(nameOf(a)) + ', COUNT(*)\nFROM tablo\nWHERE durum = \'aktif\'\nGROUP BY ' + safeSqlName(nameOf(a)) + '\nHAVING COUNT(*) > 1;';
    var qa = withAnswer('WHERE satırları gruplamadan önce, HAVING ise oluşan grupları filtreler.', [
      'HAVING her zaman FROM bölümünden önce çalışır.',
      'WHERE yalnızca ORDER BY ile birlikte kullanılabilir.',
      'GROUP BY sonucu sıralar; aggregate hesaplamasıyla ilişkisi yoktur.'
    ], n);
    return make('Sorgu yorumu', topic.title + ' bağlamında aşağıdaki sorgu için en doğru yorum hangisidir?', qa, 'Sorguda WHERE kaynak satırları azaltır; GROUP BY grupları oluşturur; HAVING ise COUNT(*) sonucuna göre grupları eler.', code, 'sql');
  }

  function csharpQuestion(topic, profile, terms, n) {
    var a = terms[0];
    var code = 'var items = new List<int> { 1, 2, 3 };\nvar copy = items;\ncopy.Add(4);\nConsole.WriteLine(items.Count);';
    var qa = withAnswer('4', ['3', '0', 'Derleme hatası'], n);
    if (topic.id.indexOf('operator') !== -1 || topic.id.indexOf('tuzak') !== -1) {
      code = 'int x = 4;\nint y = x++ + ++x;\nConsole.WriteLine(y);';
      qa = withAnswer('10', ['8', '9', 'Derleme hatası'], n);
      return make('Kod çıktısı', 'Aşağıdaki kodun çıktısı nedir?', qa, 'x++ önce 4 değerini kullanır, sonra x 5 olur; ++x önce 6 yapar ve 6 değerini kullanır. Toplam 10 olur.', code, 'csharp');
    }
    return make('Kod davranışı', '"' + nameOf(a) + '" konusuyla ilişkili olarak aşağıdaki kodun çıktısı nedir?', qa, 'List<T> bir reference type nesnesidir; copy ve items aynı listeyi gösterdiği için eklenen eleman iki referanstan da görünür.', code, 'csharp');
  }

  function safeSqlName(text) {
    return trText(text).toLowerCase()
      .replace(/ç/g, 'c').replace(/ğ/g, 'g').replace(/ı/g, 'i').replace(/ö/g, 'o').replace(/ş/g, 's').replace(/ü/g, 'u')
      .replace(/[^a-z0-9]+/g, '_').replace(/^_+|_+$/g, '') || 'alan';
  }

  function make(kind, text, qa, explain, code, lang) {
    return {
      kind: kind,
      text: text,
      code: code,
      lang: lang,
      options: qa.options,
      answer: qa.answer,
      explain: explain
    };
  }

  function normalizePack(pack) {
    if (!pack) return;
    if (pack.focus) pack.focus = trText(pack.focus);
    if (pack.deep) {
      pack.deep = pack.deep.map(function (item) { return trText(item); });
    }
    if (pack.traps) {
      pack.traps = pack.traps.map(function (item) { return trText(item); });
    }
    if (pack.questions) {
      pack.questions.forEach(normalizeQuestion);
    }
  }

  function normalizeQuestion(q) {
    if (!q) return;
    q.kind = trText(q.kind || '');
    q.text = trText(q.text || '');
    q.explain = trText(q.explain || '');
    if (q.options) {
      Object.keys(q.options).forEach(function (key) {
        q.options[key] = trText(q.options[key]);
      });
    }
  }

  S.topics.forEach(function (topic) {
    var profile = profiles[topic.id];
    if (!profile) return;
    var pack = ensurePack(topic, profile);
    var current = countBaseQuestions(topic.html) + pack.questions.length;
    var need = Math.max(0, TARGET - current);
    var start = pack.questions.length;
    for (var i = 0; i < need; i++) {
      pack.questions.push(question(topic, profile, start + i));
    }
  });

  Object.keys(S.enrichments).forEach(function (id) {
    normalizePack(S.enrichments[id]);
  });
})();
