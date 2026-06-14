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
    var style = n % 6;
    var qa;

    if (style === 0) {
      qa = withAnswer(a.def, [b.def, c.def, d.def], n);
      return make('Kavram tanima', '"' + a.name + '" icin en dogru aciklama hangisidir?', qa, a.name + ' bu konuda "' + a.def + '" anlamiyla kullanilir.');
    }

    if (style === 1) {
      qa = withAnswer(a.name, [b.name, c.name, d.name], n);
      return make('Ters tanim', '"' + a.def + '" ifadesi hangi kavrama karsilik gelir?', qa, 'Verilen tanim dogrudan ' + a.name + ' kavramini anlatir.');
    }

    if (style === 2) {
      qa = withAnswer(a.name, [b.name, c.name, d.name], n);
      return make('Senaryo', profile.scenario + ' gereken bir soruda oncelikle hangi kavram secilmelidir?', qa, 'Senaryonun ana ipucu ' + a.name + ' kavramina baglanir.');
    }

    if (style === 3) {
      qa = withAnswer(a.name + ': ' + a.def, [b.name + ': ' + a.def, c.name + ': ' + b.def, d.name + ': ' + c.def], n);
      return make('Eslesme', topic.title + ' basliginda dogru kavram-aciklama eslesmesi hangisidir?', qa, a.name + ' ile verilen aciklama birbirini tamamlar.');
    }

    if (style === 4) {
      var trap = profile.traps[n % profile.traps.length];
      qa = withAnswer(trap, [a.name + ' her zaman ' + b.name + ' ile ayni seydir.', c.name + ' bu konu kapsaminda hic sorulmaz.', d.name + ' sadece gorsel tasarim ayaridir.'], n);
      return make('Celdirici kontrolu', 'Bu baslikta sinav celdiricisi olarak dikkat edilmesi gereken ifade hangisidir?', qa, 'Bu ifade konunun sik karistirilan noktasini isaret eder: ' + trap);
    }

    qa = withAnswer(profile.key, [b.name, c.name, d.name], n);
    return make('Kapsam', topic.title + ' basliginin ana calisma odağı hangisidir?', qa, 'Bu konu temel olarak ' + profile.key + ' etrafinda okunmalidir.');
  }

  function make(kind, text, qa, explain) {
    return {
      kind: kind,
      text: text,
      options: qa.options,
      answer: qa.answer,
      explain: explain
    };
  }

  S.topics.forEach(function (topic) {
    var profile = profiles[topic.id];
    if (!profile) return;
    var pack = ensurePack(topic, profile);
    var current = countBaseQuestions(topic.html) + pack.questions.length;
    var need = Math.max(0, TARGET - current);
    for (var i = 0; i < need; i++) {
      pack.questions.push(question(topic, profile, pack.questions.length + i));
    }
  });
})();
