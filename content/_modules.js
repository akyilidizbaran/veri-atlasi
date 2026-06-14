/* Modül tanımları ve içerik kayıt sistemi.
   Konu içerikleri content/*.js dosyalarından window.SINAV.register(...) ile eklenir. */

window.SINAV = {
  modules: [
    {
      id: 'bilisim',
      name: 'Bilişim Okuryazarlığı',
      badge: 'BO',
      color: '#4f8f83',
      stage: 'Aşama 1',
      questions: '20 soru',
      time: '10 dk',
      pace: '30 sn / soru',
      desc: 'Donanım-yazılım ayrımı, dosya sistemleri, internet ve ağ, siber güvenlik, ofis araçları ve güncel dijital kavramlar.',
      goal: 'Süre çok kısa olduğu için hedef: hızlı kavram tanıma ve ayırt etme refleksi kazanmak. Kavram ezberi + ayırt etme çalışacağız.',
      examWatch: 'Terim benzerlikleri hızlı çeldirici üretir. Tanım sorularında önce anahtar kelimeyi yakala, sonra seçenekleri ele.',
      avoid: [
        'Donanım, yazılım ve işletim sistemi kavramlarını aynı kategoriye koymak',
        'Web, internet, tarayıcı ve arama motorunu birbirinin yerine kullanmak',
        'Dosya boyutu birimlerinde KB, MB, GB sırasını karıştırmak'
      ],
      focus: [
        'Donanım / yazılım ayrımı',
        'İnternet – web – tarayıcı – arama motoru farkı',
        'Siber güvenlik kavramları (virüs, worm, trojan, phishing…)',
        'Dosya uzantıları ve boyut birimleri',
        'Bulut bilişim (SaaS / PaaS / IaaS)',
        'Temel ofis bilgisi (özellikle Excel)'
      ]
    },
    {
      id: 'isletim',
      name: 'İşletim Sistemi',
      badge: 'İS',
      color: '#5f7f9f',
      stage: 'Aşama 2',
      questions: '10 soru',
      time: '10 dk',
      pace: '1 dk / soru',
      desc: 'İşletim sisteminin görevleri, process/thread, bellek yönetimi, dosya sistemleri, yetkilendirme, komut satırı, boot süreci ve sanallaştırma.',
      goal: 'Temel teknik kavramları netleştirmek. Kavramları net bilmek bu modül için yeterli olur.',
      examWatch: 'Bu modülde kavram sınırları belirleyicidir. Bir terimin ne yaptığı kadar ne yapmadığını da bilmek gerekir.',
      avoid: [
        'Program, process ve thread kavramlarını aynı şey sanmak',
        'RAM, cache, swap ve virtual memory farkını tek bellek başlığına sıkıştırmak',
        'Yetki komutlarında kullanıcı, grup ve izin ilişkisini gözden kaçırmak'
      ],
      focus: [
        'Process / thread / program farkı',
        'RAM / virtual memory / cache / swap',
        'Dosya sistemleri (NTFS, FAT32, ext4…)',
        'İzinler (read / write / execute, chmod, sudo)',
        'Linux ve Windows komutları',
        'Boot süreci sıralaması'
      ]
    },
    {
      id: 'sql',
      name: 'SQL',
      badge: 'SQL',
      color: '#a87922',
      stage: 'Aşama 3',
      questions: '20 soru',
      time: '20 dk',
      pace: '1 dk / soru',
      desc: 'Veritabanı temelleri, SELECT, WHERE, JOIN, GROUP BY/HAVING, alt sorgular, DML/DDL, normalizasyon, transaction, index ve tuzak sorular.',
      goal: 'En kritik modül: hem teorik hem pratik soru gelir, yanlış seçenekler birbirine çok yakın olabilir. Bol sorgu okuma pratiği yapacağız.',
      examWatch: 'Sorgu sorularında yazım sırası, mantıksal çalışma sırası ve NULL davranışı en sık tuzak kurulan alanlardır.',
      avoid: [
        'WHERE ile HAVING kullanım yerini karıştırmak',
        'JOIN sonucunda hangi satırların korunacağını ezber yerine ilişki üzerinden okumamak',
        'COUNT(*) ile COUNT(sütun) farkını NULL davranışında unutmak'
      ],
      focus: [
        'SELECT / WHERE / ORDER BY',
        'JOIN türleri (INNER, LEFT, RIGHT, FULL, CROSS)',
        'GROUP BY ve HAVING farkı',
        'Aggregate fonksiyonlar (COUNT, SUM, AVG…)',
        'Primary key / foreign key',
        'DELETE / DROP / TRUNCATE farkı',
        'NULL mantığı (IS NULL, NULL = NULL tuzağı)'
      ]
    },
    {
      id: 'csharp',
      name: 'C#',
      badge: 'C#',
      color: '#8b6f9f',
      stage: 'Aşama 4',
      questions: '20 soru',
      time: 'Adaptif',
      pace: 'Değişken',
      desc: 'C#/.NET temelleri, veri tipleri, döngüler, metotlar, OOP, koleksiyonlar, LINQ, generics, exception handling, delegate/lambda ve async/await.',
      goal: 'Sınav adaptif: temel konularda hata yapmamak çok önemli, çünkü sistem performansa göre seviye ayarlıyor. Temelleri kusursuz yapacağız.',
      examWatch: 'Kod çıktısı sorularında önce tür davranışını, sonra akış kontrolünü, en son istisna ihtimalini kontrol et.',
      avoid: [
        'Value type ve reference type davranışını aynı kabul etmek',
        'Overloading ile overriding kavramlarını yer değiştirmek',
        'async kullanımını otomatik paralellik veya yeni thread sanmak'
      ],
      focus: [
        'Veri tipleri ve value/reference type farkı',
        'Döngüler ve metotlar',
        'OOP (encapsulation, inheritance, polymorphism)',
        'Interface / abstract class farkı',
        'Collections (Array, List, Dictionary…)',
        'LINQ (First/FirstOrDefault, Any/All…)',
        'Exception handling (try-catch-finally)'
      ]
    }
  ],

  topics: [],

  register: function (list) {
    Array.prototype.push.apply(this.topics, list);
  }
};
