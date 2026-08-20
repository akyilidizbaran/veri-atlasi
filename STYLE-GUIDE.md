# Veri Atlası — İçerik ve Stil Rehberi

Bu dosya, `konular/` altındaki tüm konu sayfalarının uyması gereken kuralları tanımlar.
**Referans şablon: `konular/m1-bilgisayar-temelleri.html`** — yeni sayfa yazarken bu dosyayı
oku ve İSKELETİNİ (head, header, topic-head, layout, footer, script) birebir kopyala;
yalnızca içerik kısmını değiştir.

## 1. Dil ve ton

- Anlatım dili **Türkçe**, hitap **"sen"**. Samimi ama ciddiyetini koruyan bir öğretmen sesi.
- Teknik terimler **İngilizce orijinal haliyle** kullanılır; ilk geçtiği yerde parantez içinde
  Türkçe karşılık verilir: "partition (bölümleme)", "overfitting (aşırı öğrenme)".
  Sonraki kullanımlarda yalnız İngilizcesi yeterli.
- Her kavram için önce **"neden var / hangi sorunu çözüyor"**, sonra "nasıl çalışıyor", sonra
  "sahada nerede karşına çıkar" sırası izlenir.
- Günlük hayattan analojiler kullan (mutfak, kütüphane, trafik…) ama zorlama olmasın.
- Dolgu cümle yok: her paragraf yeni bilgi taşımalı. Abartılı pazarlama dili yok.

## 2. Sayfa yapısı (zorunlu sıra)

1. `topic-head`: crumbs → mod-badge → h1 (TR başlık) → `.en-title` (İngilizce başlık) →
   `topic-meta` (seviye rozeti + ⏱️ süre chip'i + 🔤 terim sayısı chip'i)
2. `article.prose` içinde:
   - Açılış h2'si: konuya bağlam kuran bir giriş bölümü ("Neden önemli?", "Nerede duruyoruz?" gibi
     ÖZGÜN bir başlık — her sayfada aynı kalıp başlığı kullanma)
   - 4–7 içerik h2 bölümü (kavram anlatımları)
   - `h2` "Sahada nasıl karşına çıkar?" — gerçek iş senaryoları, diğer modüllere bağlantılar
   - `h2` "Kendini test et" — `.quiz-box` içinde 4 adet `details.quiz`
   - `h2` "Bu konunun terimleri" — `.terms-grid` içinde 8–14 `.term` kartı
   - `.done-row` (data-slug doğru olacak!) + `.pager`
3. `aside.toc-wrap` (şablondaki gibi boş `ul#toc` — JS dolduruyor)

- h2'lere elle `id` verme (JS otomatik veriyor); quiz cevabında `<div class="answer">` kullan.
- Body etiketi: `<body data-module="mX" data-slug="SLUG">` — modül numarası vurgu rengini belirler.
- `<title>KONU BAŞLIĞI — Veri Atlası</title>` + anlamlı `<meta name="description">`.

## 3. Görseller (SVG diyagramlar) — her sayfada 2–4 adet ZORUNLU

- `figure.diagram > svg + figcaption` yapısı. SVG inline yazılır, resim dosyası YOK.
- Genişlik: `viewBox="0 0 640..780 ..."`, `width` özniteliği viewBox genişliğiyle aynı.
- Renkler SADECE şu CSS değişkenlerinden: `var(--dg-box)` kutu dolgusu, `var(--dg-line)` çizgi,
  `var(--ink)` metin, `var(--muted)` ikincil metin, `var(--acc)` vurgu,
  `rgba(var(--acc-rgb),.1..3)` vurgu dolgusu, `var(--ok)` yeşil, `var(--warn)` sarı, `var(--bad)` kırmızı.
  Sabit hex renk KULLANMA (temalar bozulur).
- Ok uçları için `<defs><marker>` tanımla; marker id'leri sayfa içinde benzersiz olsun (örn. `arr1`, `arr2`).
- Diyagram türleri: akış şeması, karşılaştırma (yan yana kutular), katman/piramit, zaman çizgisi,
  mimari şeması, önce/sonra. Kavramı GERÇEKTEN açıklayan diyagram çiz; süs değil.
- Metinler kısa ve okunur: başlık 13–14px bold, gövde 11–12px. `text-anchor="middle"` hizala.
  `font-family` verme (CSS hallediyor). Taşan metin olmasın — kutuyu büyüt ya da metni kısalt.
- **Renk çakışmasına dikkat:** üç modülün vurgu rengi bir semantik renkle BİREBİR aynıdır —
  `m2` = `--ok` (yeşil), `m4` = `--warn` (amber), `m6` = `--bad` (gül). Bu modüllerin
  sayfalarında, aynı diyagramda iki farklı rolü `--acc` ve çakışan renkle boyarsan ikisi
  ayırt edilemez hâle gelir. O sayfalarda ikinci rol için başka bir değişken seç
  (ör. m4'te eğitim/test ayrımı `--ok` + `--warn`; dördüncü bir renk gerekiyorsa `--g2` mor).
  Renk tek ayırt edici olmasın: opaklık ve kenarlık farkını da kullan.

## 4. Kod blokları — her sayfada en az 1–3 adet

```html
<figure class="codebox">
  <figcaption>Python — kısa açıklama</figcaption>
  <pre><code data-lang="python">...</code></pre>
</figure>
```
- `data-lang`: `python` | `sql` | `bash` | `yaml` | `javascript` | `text`.
- Kod içinde `<` `>` `&` karakterlerini MUTLAKA `&lt;` `&gt;` `&amp;` olarak yaz (HTML bozulmasın).
- Kodlar kısa (5–25 satır), çalışır mantıkta ve bol yorumlu olsun; yorumlar Türkçe.
- Girintiler 4 boşluk; `pre` içinde satır başında fazladan boşluk bırakma.

## 5. Bilgi kutuları

`<div class="note">ℹ️ bilgi</div>`, `<div class="tip">💡 pratik ipucu</div>`,
`<div class="warn">⚠️ sık hata/tuzak</div>` — sayfa başına toplam 2–4 adet.
İçinde `<b>Başlık.</b> açıklama` kalıbı kullan. (Emoji CSS'ten geliyor, içeriğe emoji yazma.)

## 6. Terim kartları ve sözlük verisi

- Sayfadaki `.terms-grid` kartları ile sözlük veri dosyasındaki tanımlar tutarlı olsun
  (birebir aynı olmak zorunda değil; kart kısa, sözlük tanımı 1–2 cümle daha zengin olabilir).
- Sözlük dosyası formatı (`assets/data/terms-XX.js`):

```js
/* Sözlük verisi — ... */
window.GLOSSARY = (window.GLOSSARY || []).concat([
  { tr: "Türkçe Ad (gerekirse EN)", en: "English Name", lvl: "baslangic|orta|ileri",
    mod: "mX", topic: "SLUG", def: "1–3 cümlelik tanım. Neden önemli olduğunu da söyle." },
]);
```
- `topic` alanı terimin anlatıldığı sayfanın slug'ı. `def` içinde HTML kullanma (düz metin).
  Çift tırnak gerekiyorsa `\"` ile kaçır.

## 7. Gezinme zinciri

- `.pager` önceki/sonraki konuya bağlanır (görev tanımında verilen href'leri aynen kullan).
  İlk konunun "önceki"si, son konunun "sonraki"si yoksa şablondaki `.empty` kalıbını kullan.
- Crumbs modül bağlantısı: `../index.html#mX`.

## 8. Kalite çıtası

- Her sayfa kendi başına ders niteliğinde: konuyu hiç bilmeyen biri okuyup anlayabilmeli,
  bilen biri de "sahada" bölümünden değer bulmalı.
- Sayılar/olgular doğru olmalı; emin olmadığın istatistik uydurma.
- Bölümler arası geçiş cümleleri kur; sayfa kopuk madde yığını olmasın.
- Türkçe imla: kesme işaretleri doğru ("Spark'ın", "DAG'ler"), "veri tabanı" yerine "veritabanı" kullan.
- Diğer konulara çapraz bağlantı ver: `<a href="m3-spark.html">Spark konusunda</a>` gibi (aynı klasörde).
