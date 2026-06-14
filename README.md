# Sınav Kampı

Türkçe bilişim sınavına hazırlanmak için hazırlanmış statik çalışma sitesi.

Site; Bilişim Okuryazarlığı, İşletim Sistemi, SQL ve C# başlıklarını konu anlatımı, sınav taktiği, hızlı tekrar notları, kod örnekleri ve interaktif soru kartlarıyla çalıştırır.

## Local'de Çalıştırma

Repo kök dizinindeyken:

```bash
python3 -m http.server 4173 --bind 127.0.0.1
```

Tarayıcıdan aç:

```text
http://127.0.0.1:4173/
```

Alternatif port gerekirse:

```bash
python3 -m http.server 5173 --bind 127.0.0.1
```

ve:

```text
http://127.0.0.1:5173/
```

## Proje Yapısı

```text
.
├── index.html              # Statik uygulama kabuğu
├── css/
│   └── style.css           # Tema, layout, responsive stiller
├── js/
│   └── app.js              # Route, render, arama, tema, quiz davranışı
├── content/
│   ├── _modules.js         # Modül metadata ve içerik kayıt sistemi
│   ├── bilisim.js
│   ├── isletim.js
│   ├── sql-1.js
│   ├── sql-2.js
│   ├── csharp-1.js
│   └── csharp-2.js
└── vendor/
    ├── gsap.min.js
    └── ScrollTrigger.min.js
```

## Özellikler

- Hash tabanlı statik routing: `#/`, `#/module/<id>`, `#/topic/<id>`
- Sol menülü konu navigasyonu
- Konu arama
- Açık akademik tema ve isteğe bağlı koyu tema
- SQL ve C# kod bloklarında basit renklendirme
- Kod kopyalama butonu
- İnteraktif quiz kartları
- Mobil menü ve responsive yerleşim
- Yerel GSAP/ScrollTrigger dosyalarıyla bağımsız animasyonlar

## İçerik Kapsamı

- Bilişim Okuryazarlığı
- İşletim Sistemi
- SQL
- C#

Konu içerikleri `content/*.js` dosyalarında `window.SINAV.register([...])` yapısıyla kaydolur.

## Geliştirme Notları

- Build aracı yoktur; proje vanilla HTML/CSS/JS ile çalışır.
- Doğrudan `file://` yerine lokal HTTP sunucusu kullanmak daha güvenilirdir.
- `content/_modules.js`, diğer `content/*.js` dosyalarından önce yüklenmelidir.
- Yeni konu eklerken `module`, `id`, `order`, `title`, `html` alanlarını koru.
- Route yapısını bozmamak için konu linkleri hash formatında kalmalıdır.

## Hızlı Kontrol

JavaScript sözdizimi için:

```bash
node --check js/app.js
node --check content/_modules.js
```

## GitHub Pages Notu

Repo private ise GitHub Pages desteği GitHub planına bağlı olabilir. Bu repo private durumdayken Pages açma denemesi GitHub tarafından plan kısıtıyla reddedildi. Public repo yapılırsa veya uygun plan kullanılırsa GitHub Pages `main` branch root dizinden yayınlanabilir.
