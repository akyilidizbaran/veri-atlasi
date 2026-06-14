/* Kritik konular icin ek pekistirme paketleri.
   Bu dosya ana konu metnini bozmadan derinlestirme notlari ve yeni soru tipleri ekler. */

window.SINAV.enrich({
  'bo-04-internet-ag': {
    focus: 'Bu konu sinavda genellikle terim ayirt etme seklinde gelir: internet, web, tarayici, arama motoru, IP, DNS ve HTTP ayni sey degildir.',
    deep: [
      'Internet fiziksel ve mantiksal aglarin toplamidir; web bu ag uzerinde calisan servislerden sadece biridir.',
      'DNS alan adini IP adresine cevirir; tarayici ise HTTP/HTTPS isteklerini gonderip sonucu kullaniciya gosterir.',
      'Modem, router ve switch ayni gorevi yapmaz: modem dis ag baglantisini saglar, router aglar arasinda yonlendirir, switch ayni yerel ag icindeki cihazlari baglar.'
    ],
    traps: [
      'Arama motoru tarayici degildir.',
      'HTTP protokoldur; HTML sayfa isaretleme dilidir.',
      'IP adresi cihaz/ag arayuzu kimligidir; MAC adresi yerel ag seviyesinde kullanilir.'
    ],
    questions: [
      {
        kind: 'Kavram ayirma',
        text: 'Bir kullanici adres cubuguna bir alan adi yazdiginda, alan adinin ilgili IP adresine cozulmesinde temel rol oynayan sistem hangisidir?',
        options: { a: 'HTML', b: 'DNS', c: 'HTTP', d: 'Switch' },
        answer: 'b',
        explain: 'DNS, alan adlarini IP adresleriyle eslestiren ad cozumleme sistemidir.'
      },
      {
        kind: 'Senaryo',
        text: 'Ayni ofisteki bilgisayarlarin birbirleriyle yerel agda haberlesmesini kolaylastiran cihaz hangisidir?',
        options: { a: 'Switch', b: 'Arama motoru', c: 'Tarayici', d: 'Kelime islemci' },
        answer: 'a',
        explain: 'Switch, ayni LAN icindeki cihazlar arasinda veri iletimini duzenler.'
      },
      {
        kind: 'Celdirici',
        text: 'Web ile internet arasindaki iliski icin en dogru ifade hangisidir?',
        options: { a: 'Web, internetin uzerinde calisan servislerden biridir', b: 'Internet yalnizca web sayfalarindan olusur', c: 'Tarayici internetin fiziksel adidir', d: 'DNS web sayfasi tasarlamak icin kullanilir' },
        answer: 'a',
        explain: 'Internet altyapidir; web ise bu altyapi uzerinde HTTP/HTTPS ile calisan hizmetlerden biridir.'
      }
    ]
  },

  'bo-05-guvenlik': {
    focus: 'Guvenlik sorularinda ana eksen CIA uclusu, kimlik dogrulama, yetkilendirme ve sosyal muhendislik farkidir.',
    deep: [
      'Gizlilik verinin yetkisiz kisilerce gorulmemesidir; butunluk verinin izinsiz degismemesidir; erisilebilirlik hizmetin ihtiyac aninda kullanilabilmesidir.',
      'Authentication kim oldugunu kanitlama, authorization hangi kaynaga ne kadar erisebilecegini belirleme adimidir.',
      'Phishing teknik aciktan cok kullaniciyi kandirmaya dayanir; guvenli gorunen bir arayuzle parola veya kart bilgisi istenir.'
    ],
    traps: [
      'Antivirus tek basina guvenlik stratejisi degildir.',
      'Guclu parola, iki asamali dogrulamanin yerini tamamen tutmaz.',
      'Yedekleme gizlilik degil, daha cok erisilebilirlik ve kurtarma stratejisidir.'
    ],
    questions: [
      {
        kind: 'Kavram',
        text: 'Bir dosyanin yetkisiz sekilde degistirilmediginden emin olma hedefi hangi guvenlik ilkesidir?',
        options: { a: 'Gizlilik', b: 'Butunluk', c: 'Erisilebilirlik', d: 'Kimlik dogrulama' },
        answer: 'b',
        explain: 'Butunluk, verinin dogru ve degistirilmemis kalmasiyla ilgilidir.'
      },
      {
        kind: 'Senaryo',
        text: 'Sahte banka e-postasiyla kullanicidan parola isteyen saldiri en dogru hangi adla anilir?',
        options: { a: 'Defrag', b: 'Phishing', c: 'Backup', d: 'Compression' },
        answer: 'b',
        explain: 'Phishing, kullaniciyi kandirarak hassas bilgi alma saldirisidir.'
      },
      {
        kind: 'Celdirici',
        text: 'Kullanicinin sisteme parola ile girisi hangi adima ornektir?',
        options: { a: 'Authentication', b: 'Authorization', c: 'Defragmentation', d: 'Virtualization' },
        answer: 'a',
        explain: 'Parola ile kimligini kanitlama authentication adimidir; yetki kontrolu sonraki authorization adimidir.'
      }
    ]
  },

  'bo-06-ofis': {
    focus: 'Ofis sorularinda program amaci, dosya uzantisi ve Excel formul mantigi birlikte sorulabilir.',
    deep: [
      'Kelime islemci belge duzenler; hesap tablosu veri, formul ve grafik uzerinden analiz yapar; sunu programi slayt tabanli anlatim hazirlar.',
      'Excelde goreceli basvuru kopyalaninca degisir; mutlak basvuruda dolar isaretiyle sabitlenen kisim degismez.',
      'Formuller genellikle esittir isaretiyle baslar; fonksiyonlar hazir hesaplama kaliplaridir.'
    ],
    traps: [
      'PDF genellikle duzenleme degil, paylasim/sabit gorunum amaciyla kullanilir.',
      'SUM toplar, COUNT sayisal deger sayar, COUNTA bos olmayan hucreleri sayar.',
      'Slayt gecisi ile nesne animasyonu farkli kavramlardir.'
    ],
    questions: [
      {
        kind: 'Excel mantigi',
        text: 'A1 hucre referansi B1 hucrelerine kopyalaninca A2 gibi degisiyorsa bu hangi referans turudur?',
        options: { a: 'Mutlak basvuru', b: 'Goreceli basvuru', c: 'Salt okunur dosya', d: 'Sunum gecisi' },
        answer: 'b',
        explain: 'Goreceli basvurular kopyalandiklari konuma gore satir/sutun olarak degisir.'
      },
      {
        kind: 'Dosya turu',
        text: 'Bir sunu dosyasi icin en olasi uzanti hangisidir?',
        options: { a: '.xlsx', b: '.docx', c: '.pptx', d: '.zip' },
        answer: 'c',
        explain: '.pptx PowerPoint sunulari icin kullanilir.'
      },
      {
        kind: 'Celdirici',
        text: 'Excelde belirli bir araliktaki sayilari toplamak icin en uygun fonksiyon hangisidir?',
        options: { a: 'SUM', b: 'COUNT', c: 'MAX', d: 'AVERAGE' },
        answer: 'a',
        explain: 'SUM toplama yapar; COUNT sayisal hucre adedini sayar.'
      }
    ]
  },

  'os-03-process-thread': {
    focus: 'Bu konu program, process ve thread ayrimini net kurmaya dayanir; sinavda ayni cumlede birlikte verilebilirler.',
    deep: [
      'Program pasif dosyadir; process calisan program ornegidir ve kendi adres alani, kaynaklari ve durum bilgisi vardir.',
      'Thread process icindeki daha hafif yurutme birimidir; ayni processin threadleri genellikle ayni adres alanini paylasir.',
      'Context switch CPU nun bir isten digerine gecmesi icin durum bilgisini kaydedip yuklemesidir; cok sik olursa performans maliyeti uretir.'
    ],
    traps: [
      'Her program calisiyor demek degildir.',
      'Threadler tamamen bagimsiz process gibi dusunulmemelidir.',
      'Cok thread her zaman daha hizli sonuc demek degildir.'
    ],
    questions: [
      {
        kind: 'Kavram',
        text: 'Diskte duran fakat calistirilmamis bir uygulama dosyasi en dogru hangi kavramla ifade edilir?',
        options: { a: 'Program', b: 'Process', c: 'Thread', d: 'Scheduler' },
        answer: 'a',
        explain: 'Program pasif dosyadir; calistirilinca process ortaya cikar.'
      },
      {
        kind: 'Senaryo',
        text: 'Ayni uygulama icinde arayuzun donmamasi icin arka planda dosya indiren yurutme birimi nasil adlandirilir?',
        options: { a: 'Bootloader', b: 'Thread', c: 'Partition', d: 'File system' },
        answer: 'b',
        explain: 'Thread, ayni process icinde eszamanli/ayri akislar olusturmak icin kullanilir.'
      },
      {
        kind: 'Celdirici',
        text: 'Process ile thread arasindaki en kritik farklardan biri hangisidir?',
        options: { a: 'Threadler genellikle ayni process adres alanini paylasir', b: 'Process sadece metin dosyasidir', c: 'Thread disk bolumu olusturur', d: 'Process yalnizca web tarayicisinda bulunur' },
        answer: 'a',
        explain: 'Threadler process icinde calisir ve process kaynaklarini paylasabilir.'
      }
    ]
  },

  'os-04-bellek': {
    focus: 'Bellek sorularinda hiz, kalicilik ve islev ayrimi onemlidir: register/cache/RAM/swap/disk ayni katmanda degildir.',
    deep: [
      'Cache CPU ya cok yakindir ve hiz icin kullanilir; RAM ana bellektir; disk kalici depolamadir.',
      'Virtual memory, processlere daha genis ve izole adres alani izlenimi verir; swap ise RAM yetmediginde diskin bellek gibi kullanilmasidir.',
      'Bellek yonetimi yalnizca yer ayirma degil, koruma, izolasyon ve verimli kullanim hedeflerini de kapsar.'
    ],
    traps: [
      'Cache kalici depolama degildir.',
      'Swap RAM kadar hizli degildir.',
      'Virtual memory fiziksel RAM miktarinin bire bir aynisi degildir.'
    ],
    questions: [
      {
        kind: 'Kavram',
        text: 'CPU ya en yakin ve en hizli bellek katmani hangisidir?',
        options: { a: 'Optik disk', b: 'Cache', c: 'Swap alani', d: 'Harici disk' },
        answer: 'b',
        explain: 'Cache, CPU ya yakin hizli bellek katmanidir.'
      },
      {
        kind: 'Senaryo',
        text: 'RAM yetersiz kaldiginda diskin bir bolumunun gecici bellek gibi kullanilmasi hangi kavramla ilgilidir?',
        options: { a: 'Fragmentation', b: 'Swap', c: 'Boot', d: 'Permission' },
        answer: 'b',
        explain: 'Swap, disk alaninin bellek baskisini azaltmak icin kullanilmasidir; ancak RAM den yavaştir.'
      },
      {
        kind: 'Celdirici',
        text: 'Virtual memory icin en dogru ifade hangisidir?',
        options: { a: 'Her process icin soyut/izole adres alani saglayabilir', b: 'Sadece dosya sikistirma yontemidir', c: 'Antivirus taramasidir', d: 'Monitor cozunurlugudur' },
        answer: 'a',
        explain: 'Virtual memory bellek adresleme, izolasyon ve fiziksel bellek yonetimiyle ilgilidir.'
      }
    ]
  },

  'os-07-komut-satiri': {
    focus: 'Komut satiri sorularinda komutun amaci, bulundugun dizin ve parametre etkisi birlikte okunmalidir.',
    deep: [
      'pwd/cd/ls temel gezinme komutlaridir; Windows tarafinda benzer isler cd ve dir ile gorulur.',
      'rm silme, cp kopyalama, mv tasima veya yeniden adlandirma icin kullanilir; yanlis hedef secimi veri kaybina yol acabilir.',
      'sudo yetkili komut calistirma anlamina gelir; komutun kendisini degistirmez, calistirma yetkisini yukseltir.'
    ],
    traps: [
      'cd dosya icerigini gostermez, dizin degistirir.',
      'rm geri donus kutusuna tasima garantisi vermez.',
      'sudo her hatayi cozen sihirli komut degildir; yetkisiz islemi yetkili calistirir.'
    ],
    questions: [
      {
        kind: 'Komut tanima',
        text: 'Linux terminalinde mevcut dizindeki dosya ve klasorleri listelemek icin en temel komut hangisidir?',
        options: { a: 'ls', b: 'cd', c: 'pwd', d: 'mkdir' },
        answer: 'a',
        explain: 'ls mevcut dizin icerigini listeler.'
      },
      {
        kind: 'Senaryo',
        text: 'Bir klasorun icine gecmek icin hangi komut kullanilir?',
        options: { a: 'rm', b: 'cd', c: 'cat', d: 'chmod' },
        answer: 'b',
        explain: 'cd dizin degistirmek icin kullanilir.'
      },
      {
        kind: 'Celdirici',
        text: 'sudo komutunun temel amaci nedir?',
        options: { a: 'Komutu yetkili kullanici haklariyla calistirmak', b: 'Dosyayi sikistirmak', c: 'Ag baglantisini koparmak', d: 'Ekran goruntusu almak' },
        answer: 'a',
        explain: 'sudo, komutu daha yuksek yetkiyle calistirir; komutun mantigini degistirmez.'
      }
    ]
  },

  'sql-04-where': {
    focus: 'WHERE satir bazli filtrelemedir; aggregate sonucuna gore filtreleme yapmaz. NULL ve operator onceligi burada en cok tuzak uretir.',
    deep: [
      'WHERE, gruplama ve aggregate hesaplamasindan once satirlari eler.',
      'NULL bilinmeyen degerdir; NULL ile esitlik karsilastirmasi yerine IS NULL / IS NOT NULL kullanilir.',
      'AND genellikle OR dan once degerlendirilir; parantez kullanmak niyeti acik hale getirir.'
    ],
    traps: [
      'NULL = NULL dogru kabul edilmez.',
      'LIKE metin deseni arar, IN liste uyeligini kontrol eder.',
      'BETWEEN sinir degerleri dahil edecek sekilde dusunulmelidir.'
    ],
    questions: [
      {
        kind: 'SQL mantigi',
        text: 'departman_id degeri NULL olan satirlari bulmak icin dogru kosul hangisidir?',
        options: { a: 'departman_id = NULL', b: 'departman_id IS NULL', c: 'departman_id LIKE NULL', d: 'departman_id IN NULL' },
        answer: 'b',
        explain: 'NULL kontrolu esitlik operatoruyle degil IS NULL ile yapilir.'
      },
      {
        kind: 'Celdirici',
        text: 'WHERE kosulu SQL calisma sirasinda hangi asamada etkilidir?',
        options: { a: 'Satirlar gruplamadan once elenirken', b: 'Sadece SELECT listesinden sonra', c: 'Sadece ORDER BY sonrasinda', d: 'Yalnizca tablo olustururken' },
        answer: 'a',
        explain: 'WHERE, GROUP BY ve aggregate islemlerinden once kaynak satirlari filtreler.'
      },
      {
        kind: 'Sorgu okuma',
        text: 'A veya B kosullarini C ile birlikte zorunlu kilmak icin en guvenli ifade hangisidir?',
        options: { a: 'A OR B AND C', b: '(A OR B) AND C', c: 'A AND B OR C', d: 'A OR (B OR C)' },
        answer: 'b',
        explain: 'Parantez, A veya B sonucunun ayrica C ile birlikte saglanmasini netlestirir.'
      }
    ]
  },

  'sql-06-group-having': {
    focus: 'GROUP BY satirlari gruplar, aggregate fonksiyonlar grup uzerinden sonuc uretir, HAVING ise olusmus gruplari filtreler.',
    deep: [
      'SELECT listesinde aggregate disinda kalan kolonlar genellikle GROUP BY icinde yer almalidir.',
      'WHERE grup olusmadan once satirlari azaltir; HAVING grup olustuktan sonra aggregate sonucuna gore eleme yapar.',
      'COUNT(*) tum satirlari sayar; COUNT(kolon) NULL olmayan degerleri sayar.'
    ],
    traps: [
      'Aggregate kosulu WHERE icinde kullanilmaz.',
      'GROUP BY, ORDER BY ile ayni is degildir.',
      'COUNT(*) ile COUNT(kolon) NULL iceren veride farkli sonuc verebilir.'
    ],
    questions: [
      {
        kind: 'SQL mantigi',
        text: 'Her departmanda calisan sayisi 5 ten fazla olan departmanlari bulmak icin hangi kosul yeri dogrudur?',
        options: { a: 'WHERE COUNT(*) > 5', b: 'HAVING COUNT(*) > 5', c: 'ORDER BY COUNT(*) > 5', d: 'JOIN COUNT(*) > 5' },
        answer: 'b',
        explain: 'COUNT(*) aggregate sonucudur; gruplar olustuktan sonra HAVING ile filtrelenir.'
      },
      {
        kind: 'Celdirici',
        text: 'COUNT(maas) ile COUNT(*) hangi durumda farkli sonuc verebilir?',
        options: { a: 'maas kolonunda NULL varsa', b: 'Tablo tek satirsa', c: 'ORDER BY kullanilmissa', d: 'Kolon adi kisa ise' },
        answer: 'a',
        explain: 'COUNT(kolon) NULL degerleri saymaz; COUNT(*) satir sayar.'
      },
      {
        kind: 'Kavram',
        text: 'GROUP BY nin temel amaci nedir?',
        options: { a: 'Satirlari belirli kolon degerlerine gore gruplamak', b: 'Tabloyu fiziksel olarak silmek', c: 'Veriyi sifrelemek', d: 'Kullaniciyi yetkilendirmek' },
        answer: 'a',
        explain: 'GROUP BY, aggregate islemler icin satirlari ortak degerlere gore gruplar.'
      }
    ]
  },

  'sql-07-join': {
    focus: 'JOIN sorularinda hangi tablonun satirlarinin korunacagi ve eslesmeyen tarafta NULL uretilip uretilmeyecegi okunmalidir.',
    deep: [
      'INNER JOIN sadece eslesen satirlari getirir.',
      'LEFT JOIN sol tablonun tum satirlarini korur; sagda eslesme yoksa sag kolonlar NULL olur.',
      'CROSS JOIN iki tablonun kartezyen carpimini uretir; satir sayisi hizla buyur.'
    ],
    traps: [
      'JOIN yazmak tek basina INNER JOIN anlamina gelebilir.',
      'LEFT JOIN de korunacak taraf soldaki tablodur.',
      'ON baglanti kosulu yanlis kurulursa sonuc satir sayisi beklenenden fazla olabilir.'
    ],
    questions: [
      {
        kind: 'Sorgu okuma',
        text: 'Calisanlar tablosundaki tum calisanlari, departmani olmasa bile gormek icin hangi JOIN daha uygundur?',
        options: { a: 'INNER JOIN', b: 'LEFT JOIN', c: 'CROSS JOIN', d: 'SELF JOIN zorunludur' },
        answer: 'b',
        explain: 'Calisanlar sol taraftaysa LEFT JOIN sol tablonun tum satirlarini korur.'
      },
      {
        kind: 'Celdirici',
        text: 'INNER JOIN sonucunda eslesmeyen satirlar icin ne olur?',
        options: { a: 'Sonuca girmezler', b: 'NULL ile mutlaka gosterilirler', c: 'Iki kez yazilirlar', d: 'Tablodan silinirler' },
        answer: 'a',
        explain: 'INNER JOIN yalnizca kosula gore eslesen satirlari getirir.'
      },
      {
        kind: 'Satir sayisi',
        text: '4 satirli A tablosu ile 3 satirli B tablosu CROSS JOIN yapilirsa kac satir uretilebilir?',
        options: { a: '3', b: '4', c: '7', d: '12' },
        answer: 'd',
        explain: 'CROSS JOIN kartezyen carpimdir: 4 x 3 = 12 satir.'
      }
    ]
  },

  'sql-14-tuzaklar': {
    focus: 'SQL tuzaklari genellikle benzer komutlar, NULL davranisi, aggregate ayrimi ve mantiksal calisma sirasindan gelir.',
    deep: [
      'DELETE satir siler; TRUNCATE tablonun verisini hizli bosaltir; DROP tablo yapisini da kaldirir.',
      'DISTINCT tekrar eden sonuc satirlarini azaltir; GROUP BY ile ayni amacla kullanilmaz.',
      'ORDER BY sonucun siralanmasidir; sorgunun hangi satirlari sececegini belirlemez.'
    ],
    traps: [
      'WHERE ile HAVING yer degistirilemez.',
      'NULL degeri bos string veya sifir degildir.',
      'DROP komutu veri kaybinda en yikici seceneklerden biridir.'
    ],
    questions: [
      {
        kind: 'Komut farki',
        text: 'Tabloyu yapisiyla birlikte tamamen kaldiran komut hangisidir?',
        options: { a: 'DELETE', b: 'TRUNCATE', c: 'DROP', d: 'SELECT' },
        answer: 'c',
        explain: 'DROP tablo nesnesini kaldirir; DELETE satir siler.'
      },
      {
        kind: 'Celdirici',
        text: 'NULL icin en dogru ifade hangisidir?',
        options: { a: 'Bilinmeyen/yok deger anlamina gelir', b: 'Her zaman 0 demektir', c: 'Her zaman bos metindir', d: 'Sadece tarih kolonunda kullanilir' },
        answer: 'a',
        explain: 'NULL bilinmeyen veya mevcut olmayan degeri temsil eder; sifir ya da bos string degildir.'
      },
      {
        kind: 'Sorgu sirasi',
        text: 'ORDER BY nin temel gorevi nedir?',
        options: { a: 'Sonuc satirlarini siralamak', b: 'Tablo olusturmak', c: 'Satirlari gruplamadan once silmek', d: 'Yetki vermek' },
        answer: 'a',
        explain: 'ORDER BY sonucu siralar; filtreleme WHERE/HAVING ile yapilir.'
      }
    ]
  },

  'cs-02-veri-tipleri': {
    focus: 'C# sorularinda value type/reference type ayrimi, atama sonrasi davranis ve string ozelligi cok sik celdirici uretir.',
    deep: [
      'Value type degisken genellikle degerin kendisini tasir; atamada kopya davranisi beklenir.',
      'Reference type degisken nesnenin referansini tasir; iki degisken ayni nesneyi gosterebilir.',
      'string reference type olmasina ragmen immutable davranir; metin degisikliklerinde yeni string olusur.'
    ],
    traps: [
      'class ve struct ayni kopyalama davranisina sahip degildir.',
      '== operatoru her tipte ayni anlamda referans karsilastirmasi yapmaz.',
      'Nullable deger tipleri null alabilir ama bu normal int ile ayni degildir.'
    ],
    questions: [
      {
        kind: 'Kod okuma',
        text: 'Bu kodun sonunda a degeri nedir?',
        code: 'int a = 5;\nint b = a;\nb = 9;\nConsole.WriteLine(a);',
        lang: 'csharp',
        options: { a: '5', b: '9', c: '0', d: 'Derleme hatasi' },
        answer: 'a',
        explain: 'int value type oldugu icin b ye a nin kopyasi atanir; b degisince a degismez.'
      },
      {
        kind: 'Kavram',
        text: 'C# ta class ornekleri icin en dogru ifade hangisidir?',
        options: { a: 'Her zaman value type tir', b: 'Reference type davranisi gosterir', c: 'Sadece sayi saklar', d: 'Compile edilmez' },
        answer: 'b',
        explain: 'class ile olusturulan nesneler reference type olarak davranir.'
      },
      {
        kind: 'Celdirici',
        text: 'string icin hangisi dogrudur?',
        options: { a: 'Reference type tir ama immutable davranir', b: 'Her zaman int gibi value type tir', c: 'Degeri asla karsilastirilamaz', d: 'Sadece tek karakter tutar' },
        answer: 'a',
        explain: 'string reference type tir; ancak metin degisiklikleri mevcut nesneyi degistirmek yerine yeni metin uretir.'
      }
    ]
  },

  'cs-08-oop': {
    focus: 'OOP sorularinda encapsulation, inheritance, polymorphism ve abstraction terimlerini birbirinden ayirmak gerekir.',
    deep: [
      'Encapsulation, veriyi ve davranisi sinif icinde toplarken dis erisimi kontrollu hale getirir.',
      'Inheritance ortak davranisi temel siniftan devralmayi saglar; her ortaklik kalitim gerektirmez.',
      'Polymorphism, ayni arayuz veya temel tip uzerinden farkli davranislarin calisabilmesidir.'
    ],
    traps: [
      'private alan kullanmak tek basina iyi encapsulation anlamina gelmez; anlamli metot/property siniri gerekir.',
      'Overloading imza farkidir; overriding kalitilan davranisi yeniden yazmadir.',
      'Abstract class ile interface ayni sey degildir.'
    ],
    questions: [
      {
        kind: 'Kavram',
        text: 'Bir nesnenin ic verisini disaridan dogrudan degistirmeyi engelleyip kontrollu metotlarla erisim saglama hangi OOP ilkesidir?',
        options: { a: 'Encapsulation', b: 'Compilation', c: 'Recursion', d: 'Indexing' },
        answer: 'a',
        explain: 'Encapsulation veri ve davranisi kapsuller, erisimi kontrollu hale getirir.'
      },
      {
        kind: 'Celdirici',
        text: 'Ayni metot adinin farkli parametre listeleriyle tanimlanmasi hangisidir?',
        options: { a: 'Overriding', b: 'Overloading', c: 'Inheritance', d: 'Boxing' },
        answer: 'b',
        explain: 'Overloading ayni isim, farkli imza demektir; overriding temel sinif davranisini ezmektir.'
      },
      {
        kind: 'Senaryo',
        text: 'Animal tipindeki listede Dog ve Cat nesnelerinin kendi Speak davranisini calistirmasi hangi ilkeyle ilgilidir?',
        options: { a: 'Polymorphism', b: 'Normalization', c: 'Deadlock', d: 'Pagination' },
        answer: 'a',
        explain: 'Polymorphism ayni temel tip uzerinden farkli gercek davranislarin calismasini saglar.'
      }
    ]
  },

  'cs-10-exception': {
    focus: 'Exception sorularinda hatanin nerede yakalandigi, finally blogunun calisip calismayacagi ve exception turu okunur.',
    deep: [
      'try riskli kodu, catch hata yakalamayi, finally ise hata olsa da olmasa da calismasi gereken temizlik adimini temsil eder.',
      'Daha ozel exception turleri genel Exception catch inden once yazilmalidir.',
      'Yakalanmayan exception cagri zincirinde yukari dogru ilerleyebilir.'
    ],
    traps: [
      'finally sadece hata olursa calisir sanmak yanlistir.',
      'catch sirasi onemlidir.',
      'Exception yutmak hatayi cozmeyebilir; bazen loglayip tekrar firlatmak gerekir.'
    ],
    questions: [
      {
        kind: 'Kavram',
        text: 'finally blogu icin en dogru ifade hangisidir?',
        options: { a: 'Genellikle try-catch sonrasi temizlik icin calisir', b: 'Sadece hic hata yoksa calisir', c: 'Sadece derleme hatalarini yakalar', d: 'Metot tanimlamayi saglar' },
        answer: 'a',
        explain: 'finally blogu hata olsa da olmasa da kaynak kapatma gibi islemler icin kullanilir.'
      },
      {
        kind: 'Kod okuma',
        text: 'Bu kodda hangi catch blogu calisir?',
        code: 'try\n{\n    int x = int.Parse(\"abc\");\n}\ncatch (FormatException)\n{\n    Console.WriteLine(\"format\");\n}\ncatch (Exception)\n{\n    Console.WriteLine(\"genel\");\n}',
        lang: 'csharp',
        options: { a: 'format', b: 'genel', c: 'Ikisi birden', d: 'Hicbiri' },
        answer: 'a',
        explain: 'int.Parse uygun olmayan metinde FormatException uretir ve ozel catch blogu yakalar.'
      },
      {
        kind: 'Celdirici',
        text: 'Daha ozel exception catch bloklari neden genel Exception catch inden once yazilmalidir?',
        options: { a: 'Aksi halde genel catch once yakalayip ozel blogu ulasilamaz yapabilir', b: 'Kod daha yavas calissin diye', c: 'finally calismasin diye', d: 'Derleyici stringleri silsin diye' },
        answer: 'a',
        explain: 'Genel catch once gelirse ozel hata turleri ona duserek ozel catch blogunu anlamsiz hale getirebilir.'
      }
    ]
  },

  'cs-12-linq': {
    focus: 'LINQ sorularinda sorgunun ne zaman calistigi, filtre/projeksiyon farki ve First/FirstOrDefault gibi metotlar ayrilir.',
    deep: [
      'Where filtreler, Select donusturur/projeksiyon yapar.',
      'Any en az bir eleman var mi diye bakar; All tum elemanlar kosulu sagliyor mu diye bakar.',
      'First eleman bulamazsa hata uretir; FirstOrDefault uygun eleman yoksa varsayilan deger dondurur.'
    ],
    traps: [
      'Where sonucu bool degil, filtrelenmis koleksiyon/sorgudur.',
      'Select filtreleme yapmaz.',
      'LINQ sorgulari bircok durumda ertelenmis calisma davranisi gosterebilir.'
    ],
    questions: [
      {
        kind: 'Metot secimi',
        text: 'Bir listedeki sadece 18 yas ve uzeri kisileri almak icin hangi LINQ metodu en uygundur?',
        options: { a: 'Where', b: 'Select', c: 'OrderBy', d: 'ToString' },
        answer: 'a',
        explain: 'Where kosula uyan elemanlari filtreler.'
      },
      {
        kind: 'Celdirici',
        text: 'Eleman bulunamadiginda hata yerine varsayilan deger donmesini istiyorsan hangisi daha uygundur?',
        options: { a: 'First', b: 'FirstOrDefault', c: 'Throw', d: 'RemoveAt' },
        answer: 'b',
        explain: 'FirstOrDefault eleman yoksa default deger dondurur; First hata firlatabilir.'
      },
      {
        kind: 'Kod okuma',
        text: 'Bu sorgunun amaci nedir?',
        code: 'var names = users\n    .Where(u => u.Active)\n    .Select(u => u.Name);',
        lang: 'csharp',
        options: { a: 'Aktif kullanicilarin adlarini secmek', b: 'Tum kullanicilari silmek', c: 'Kullanicilari pasif yapmak', d: 'Veritabanini olusturmak' },
        answer: 'a',
        explain: 'Where aktifleri filtreler; Select ad alanini projekte eder.'
      }
    ]
  },

  'cs-15-async': {
    focus: 'Async/await sorularinda asenkronluk ile paralellik karistirilir; await bekleme noktasini okunur hale getirir.',
    deep: [
      'async metot genellikle Task veya Task<T> dondurur; await tamamlanmayi beklerken akisi okunur tutar.',
      'Asenkron kod, bekleme sirasinda threadin bosa cikmasina yardimci olabilir; otomatik olarak yeni thread demek degildir.',
      'await edilen async metotta olusan exception, await noktasinda try-catch ile yakalanabilir.'
    ],
    traps: [
      'async her zaman paralel calisma demek degildir.',
      'await kullanmadan Task sonucunu dogru yonetmemek hataya yol acabilir.',
      'async void genellikle event handler disinda tercih edilmez.'
    ],
    questions: [
      {
        kind: 'Kavram',
        text: 'async/await icin en dogru ifade hangisidir?',
        options: { a: 'Asenkron islemleri daha okunur yazmayi saglar', b: 'Her zaman yeni thread acar', c: 'Sadece SQL icin kullanilir', d: 'Derleme islemini kapatir' },
        answer: 'a',
        explain: 'async/await asenkron islemlerin akisini okunur hale getirir; otomatik paralellik garantisi vermez.'
      },
      {
        kind: 'Celdirici',
        text: 'await edilen bir Task icinde exception olusursa genellikle nerede yakalanabilir?',
        options: { a: 'await noktasini saran try-catch icinde', b: 'Sadece HTML icinde', c: 'CSS dosyasinda', d: 'Mutlaka isletim sistemi kapaninca' },
        answer: 'a',
        explain: 'await, Task icindeki hatayi cagiran akisa tasir; try-catch ile yakalanabilir.'
      },
      {
        kind: 'Kod okuma',
        text: 'Bu imza ne anlatir?',
        code: 'public async Task<int> GetCountAsync()\n{\n    await Task.Delay(100);\n    return 5;\n}',
        lang: 'csharp',
        options: { a: 'Asenkron olarak int sonucu ureten metot', b: 'Senkron void metot', c: 'SQL tablo tanimi', d: 'Interface bildirimi' },
        answer: 'a',
        explain: 'Task<int>, asenkron is tamamlaninca int sonuc uretilecegini gosterir.'
      }
    ]
  },

  'cs-16-tuzaklar': {
    focus: 'C# tuzak sorulari genellikle operator onceligi, null davranisi, referans paylasimi, koleksiyon degisimi ve metot imzasindan gelir.',
    deep: [
      'Post-increment ve pre-increment farki cikti sorularinda belirleyici olabilir.',
      'Reference type degiskenlerde ayni nesneyi gosteren iki referans, nesne uzerindeki degisikligi birlikte gorur.',
      'Exception, LINQ ve async sorularinda calisma zamani davranisi derleme zamani bilgisinden daha onemlidir.'
    ],
    traps: [
      '++i ve i++ ayni ifade icinde kullanildiginda sonuc farki dogurabilir.',
      'Null kontrolu yapmadan uye erisimi NullReferenceException uretir.',
      'List degisimi referans paylasimi nedeniyle baska degiskende de gorulebilir.'
    ],
    questions: [
      {
        kind: 'Kod okuma',
        text: 'Bu kodun ciktisi nedir?',
        code: 'int x = 3;\nConsole.WriteLine(x++);\nConsole.WriteLine(x);',
        lang: 'csharp',
        options: { a: '3 sonra 4', b: '4 sonra 4', c: '3 sonra 3', d: 'Derleme hatasi' },
        answer: 'a',
        explain: 'x++ once mevcut degeri kullanir, sonra x i 1 artirir.'
      },
      {
        kind: 'Referans tuzagi',
        text: 'Ayni List<int> nesnesini gosteren iki degiskenden biri Add yaparsa digeri ne gorur?',
        options: { a: 'Eklenen elemani gorur', b: 'Her zaman bos kalir', c: 'Derleme hatasi verir', d: 'Liste otomatik silinir' },
        answer: 'a',
        explain: 'Iki degisken ayni liste nesnesini gosteriyorsa nesne uzerindeki degisiklik ortak gorulur.'
      },
      {
        kind: 'Null kontrolu',
        text: 'Null olan bir nesnenin propertysine dogrudan erismek en olasi hangi hatayi uretir?',
        options: { a: 'NullReferenceException', b: 'FormatException', c: 'DivideByZeroException', d: 'IndexOutOfRangeException' },
        answer: 'a',
        explain: 'Null referans uzerinden uye erisimi NullReferenceException uretir.'
      }
    ]
  }
});
