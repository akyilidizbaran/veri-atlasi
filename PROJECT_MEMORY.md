# PROJECT_MEMORY

## 0) TL;DR (En güncel durum)

* Şu an ne yapıyoruz? Private GitHub repo oluşturuldu, kaynak kod pushlandı ve local çalıştırma odaklı README eklendi.
* Son değişiklik neydi? `README.md` dosyası proje amacı, local sunucu komutu, klasör yapısı, hızlı kontrol ve GitHub Pages notuyla oluşturuldu.
* Bir sonraki net adım ne? Site yayını için repo public yapılmalı, Pages destekleyen GitHub planına geçilmeli veya Vercel/Netlify/Cloudflare Pages gibi alternatif deployment kullanılmalı.

## 1) Proje Amacı ve Kapsam

* Amaç: Bilişim sınavına hazırlık için Türkçe, konu anlatımı + sınav taktiği + interaktif örnek soru formatında çalışan statik bir çalışma sitesi sağlamak.
* Kapsam içi: Bilişim Okuryazarlığı, İşletim Sistemi, SQL ve C# modülleri; konu sayfaları; arama; koyu/açık tema; mobil menü; interaktif soru kartları; kod blokları.
* Kapsam dışı: Sunucu tarafı kullanıcı hesabı, kalıcı ilerleme takibi, veritabanı, online sınav sonucu kaydı.

## 2) Non-negotiables / Kırmızı Çizgiler

* Mevcut statik çalışma modeli korunmalı: `index.html`, `css/style.css`, `js/app.js`, `content/*.js`.
* İçerik güvenliği için kullanıcıya gösterilen dinamik başlık/metinlerde mevcut `esc()` yaklaşımı korunmalı.
* Konu içerikleri `window.SINAV.register([...])` ile kaydolmalı; `module`, `id`, `order`, `title`, `html` alanları bozulmamalı.
* Hash route yapısı korunmalı: `#/`, `#/module/<id>`, `#/topic/<id>`.

## 3) Mimari Özet

* Bileşenler:
  * `index.html`: statik kabuk; üst bar, arama alanı, sidebar, main mount point ve script sırası.
  * `content/_modules.js`: modül metadata listesi ve `window.SINAV.register` kayıt sistemi.
  * `content/bilisim.js`, `content/isletim.js`, `content/sql-1.js`, `content/sql-2.js`, `content/csharp-1.js`, `content/csharp-2.js`: konu içerikleri.
  * `js/app.js`: route, render, sidebar, arama, tema, kod renklendirme, kopyalama ve quiz etkileşimi.
  * `css/style.css`: koyu/açık tema, layout, sidebar, kartlar, konu içeriği, kod blokları, quiz ve responsive stiller.
* Veri akışı: `content/_modules.js` `window.SINAV` objesini kurar; diğer içerik dosyaları konuları register eder; `js/app.js` hash route'a göre DOM'u üretir.
* Önemli dizinler/modüller:
  * `content/`: eğitim içeriği ve konu sırası.
  * `js/app.js`: davranış ve render kuralları.
  * `css/style.css`: görsel sistem ve responsive davranış.

## 4) Konvansiyonlar ve Standartlar

* Kod stili / lint / format: Şu an build/lint aracı yok; vanilla HTML/CSS/JS kullanılıyor. Mevcut ES5 ağırlıklı JavaScript stili korunmalı.
* Branch/commit yaklaşımı: Belirlenmedi.
* İsimlendirme/klasör düzeni: Modül id'leri `bilisim`, `isletim`, `sql`, `csharp`; konu id'leri modül prefix'iyle (`bo-`, `os-`, `sql-`, `cs-`) başlıyor.

## 5) Kurulum & Çalıştırma

* Gereksinimler: Modern tarayıcı. Geliştirme için Python 3 ile statik sunucu yeterli.
* Komutlar:
  * `python3 -m http.server 4173 --bind 127.0.0.1`
  * Tarayıcı: `http://127.0.0.1:4173/`
* Ortam değişkenleri (sadece İSİMLER): Yok.
* Lokal geliştirme notları: Doğrudan `file://` yerine yerel HTTP sunucusu ile test etmek daha güvenilir.

## 6) Decision Log (append-only)

* 2026-06-13 — Karar: İlk inceleme için site statik HTTP sunucusuyla doğrulandı. | Gerekçe: Tarayıcı güvenlik politikası `file://` açmayı reddetti; `127.0.0.1` üzerinden normal web davranışı test edilebildi. | Etki: Gelecek görsel/etkileşim doğrulamaları için yerel sunucu kullanılmalı. | Alternatifler: Sadece dosya okuma ile yetinmek.
* 2026-06-13 — Karar: Görsel yenileme mevcut vanilla statik mimari içinde yapıldı; framework eklenmedi. | Gerekçe: Proje küçük, hızlı açılan, içerik odaklı bir çalışma sitesi. | Etki: Bakım `index.html`, `css/style.css`, `js/app.js`, `content/*.js` üzerinden devam eder. | Alternatifler: React/Vite gibi yeni build sistemi kurmak.
* 2026-06-13 — Karar: GSAP ve ScrollTrigger yerel `vendor/` dosyalarıyla sabitlendi. | Gerekçe: CDN yüklenmezse animasyonların kaybolması ve doğrulamada belirsizlik oluşması önlendi. | Etki: `vendor/gsap.min.js` ve `vendor/ScrollTrigger.min.js` dosyaları dağıtıma dahil edilmeli. | Alternatifler: CDN kullanmak veya animasyonları yalnız CSS ile yapmak.
* 2026-06-14 — Karar: Varsayılan görsel dil koyu premium arayüzden açık akademik temaya taşındı. | Gerekçe: Kullanıcı göz yormayan, sade beyaz ve ders çalışmaya uygun bir görünüm istedi. | Etki: `index.html` varsayılanı `data-theme="light"` oldu; `js/app.js` tema anahtarı `sinav-theme-academic`; `css/style.css` ana değişkenleri açık tema üzerine kurulu. | Alternatifler: Koyu temayı varsayılan bırakıp sadece açık tema override'ı yapmak.
* 2026-06-14 — Karar: Modül vurgu renkleri düşük doygunluklu akademik tonlara çekildi. | Gerekçe: Önceki parlak cyan/mavi/sarı/mor tonlar beyaz tema üzerinde dikkat dağıtıyordu. | Etki: `content/_modules.js` renkleri muted sage, blue-grey, ochre ve muted violet oldu. | Alternatifler: Mevcut renkleri korumak.
* 2026-06-14 — Karar: GitHub repo private olarak oluşturuldu. | Gerekçe: Kullanıcı açıkça private repo istedi. | Etki: Remote `origin` `https://github.com/akyilidizbaran/sinav-sitesi.git`; `main` branch pushlandı. | Alternatifler: Public repo oluşturup GitHub Pages’i ücretsiz açmak.
* 2026-06-14 — Karar: GitHub README Türkçe ve local çalıştırma odaklı yazıldı. | Gerekçe: Kullanıcı GitHub’da local ayağa kaldırma için gerekli README istedi. | Etki: `README.md` içinde `python3 -m http.server 4173 --bind 127.0.0.1` komutu, proje yapısı ve Pages private repo notu yer alıyor. | Alternatifler: Daha kısa sadece komut odaklı README.

## 7) Milestones / Dönüm Noktaları (append-only)

* 2026-06-13 — Milestone: İlk proje incelemesi tamamlandı. | Sonuç: Site amacı, içerik modeli, render akışı ve temel etkileşimler anlaşıldı.
* 2026-06-13 — Milestone: Görsel yenileme ve içerik kapsamı ilk turu tamamlandı. | Sonuç: Ana pano, modül rotası, konu okuma/quiz ekranı yenilendi; yerel tarayıcıda desktop ve mobil doğrulandı.
* 2026-06-14 — Milestone: Akademik beyaz tema revizyonu tamamlandı. | Sonuç: Ana sayfa, SQL modülü, JOIN konu ekranı ve mobil ana sayfa Puppeteer ile doğrulandı; yatay taşma ve konsol hatası görülmedi.
* 2026-06-14 — Milestone: Private GitHub repo yayına hazır kaynak olarak oluşturuldu. | Sonuç: Kod `akyilidizbaran/sinav-sitesi` private repo’suna pushlandı; GitHub Pages private repo için mevcut plan nedeniyle HTTP 422 ile engellendi.
* 2026-06-14 — Milestone: GitHub README eklendi. | Sonuç: Local çalıştırma ve proje yapısı GitHub giriş sayfasında belgelenebilir hale geldi.

## 8) Yapılanlar

* [x] Repo yapısı incelendi.
* [x] Ana site kabuğu ve içerik kayıt sistemi anlaşıldı.
* [x] 4 modül ve 47 konu olduğu doğrulandı.
* [x] Ana sayfa, SQL modül sayfası, SQL ilk konu sayfası, quiz cevabı ve arama davranışı tarayıcıda doğrulandı.
* [x] Ana sayfa görsel sistemi yenilendi: geniş hero, bento modül kartları, sınav formatı ve günlük çalışma akışı.
* [x] Modül sayfalarına sınav odağı, kaçınılacak hatalar ve daha okunur konu rotası eklendi.
* [x] Konu sayfalarına sağ çalışma paneli, bitirme ölçütü ve hızlı tekrar akışı eklendi.
* [x] Eski dekoratif arayüz simgeleri uygulama kabuğundan temizlendi.
* [x] Desktop ve mobil görsel doğrulama ekran görüntüleri alındı.
* [x] Açık akademik tema varsayılan yapıldı.
* [x] Modül renkleri göz yormayan muted tonlara çekildi.
* [x] Ana sayfa, modül ve konu/quiz yüzeyleri beyaz/ivory kağıt hissine taşındı.
* [x] Puppeteer ile ana sayfa, SQL modülü, JOIN konu ekranı ve mobil ana sayfa doğrulandı.
* [x] `.gitignore` eklendi; doğrulama PNG’leri repoya alınmadı.
* [x] Private GitHub repo oluşturuldu ve `main` branch pushlandı.
* [x] GitHub için local çalıştırma odaklı `README.md` eklendi.

## 9) Yapılacaklar (Next)

* [ ] Kullanıcı geri bildirimine göre akademik tema yoğunluğu, tipografi ölçeği veya renk sıcaklığı revizyonu yap.
* [ ] Site yayını için bir seçenek seç: repo public + GitHub Pages, Pages destekleyen GitHub planı veya alternatif statik hosting.
* [ ] Gerekirse tek tek konu içeriklerinde eksik teorik alanlar veya yeni açıklamalı sorular ekle.
* [ ] Gerekirse arama sonuç metinlerini daha ayrık okunacak şekilde iyileştir.

## 10) Bilinen Sorunlar / Teknik Borç / Riskler

* İçerik büyük HTML template string'leri içinde tutuluyor; kapsamlı içerik düzenlemelerinde kaçan karakterler ve backtick kullanımı dikkat ister.
* Arama sonucu metni badge/modül metniyle bitişik görünebiliyor (`C#LINQC#` gibi); UI'da görsel olarak ayrılmış olsa da metin çıkarımında bitişik.
* Build/test otomasyonu yok; doğrulama manuel veya tarayıcı otomasyonu ile yapılmalı.
* Proje git deposu değil; değişiklik takibi için dış yedek veya sonradan git init gerekebilir.

## 11) Notlar ve Tuzaklar (Pitfalls)

* `content/_modules.js` script'i diğer `content/*.js` dosyalarından önce yüklenmeli.
* Aynı topic linki hem sidebar'da hem ana içerikte bulunabilir; testlerde seçiciyi `main` ile scope etmek gerekir.
* Kod bloklarının kopyalama/renklendirme davranışı `decorateCodeBlocks()` ile konu render'ından sonra uygulanıyor.
* Quiz kartları `data-answer` ve seçeneklerde `data-opt` uyumuna bağlı.
* GSAP ve ScrollTrigger yerel `vendor/` klasöründen yükleniyor; CDN bağımlılığı yok.
* Eski tarayıcıda `sinav-theme` anahtarı koyu tema olarak kalmış olabilir; yeni akademik tema `sinav-theme-academic` anahtarıyla ayrıldı.

### Güncelleme Kaydı

* Son güncelleme: 2026-06-14
