# Veri Atlası 🗺️

**AI & Data Engineering öğrencileri için kapsamlı, Türkçe, görsel öğrenme sitesi.**
Bit'ten LLM'e: 9 modül, 48 konu, 600+ terim — hepsi diyagramlar ve gerçek kod örnekleriyle.

## Çalıştırma

Derleme adımı yok; statik bir site. İki yol:

```bash
# 1) Doğrudan aç
open index.html

# 2) veya küçük bir sunucuyla (önerilen)
python3 -m http.server 8000
# http://localhost:8000
```

GitHub Pages'e olduğu gibi yüklenebilir.

## İçerik haritası

| # | Modül | Konu |
|---|-------|------|
| 1 | Temeller ve Hazırlık | 5 |
| 2 | Veri Dünyası | 5 |
| 3 | Veri Mühendisliği | 8 |
| 4 | Analitik ve İstatistik | 4 |
| 5 | Makine Öğrenmesi | 7 |
| 6 | Derin Öğrenme | 5 |
| 7 | Üretken AI ve LLM'ler | 6 |
| 8 | MLOps ve Üretim | 5 |
| 9 | Kariyer ve Yol Haritası | 3 |

## Yapı

```
index.html              # Ana sayfa: modül ızgarası, arama, ilerleme
sozluk.html             # 600+ terimlik aranabilir/filtrelenebilir sözlük
konular/*.html          # 48 konu sayfası (her biri: diyagramlar, kod, quiz, terimler)
assets/css/style.css    # Tasarım sistemi (koyu/açık tema, modül renkleri)
assets/js/main.js       # Tema, içindekiler, kod renklendirme, ilerleme takibi
assets/js/glossary.js   # Sözlük arama/filtre mantığı
assets/data/curriculum.js   # Müfredat tanımı (tek doğruluk kaynağı)
assets/data/terms-*.js      # Sözlük verileri (modül bazlı)
STYLE-GUIDE.md          # Yeni içerik eklerken uyulacak kurallar
```

## Özellikler

- **Görsel öğretim:** her konuda 2–4 el yapımı SVG diyagram (temaya uyumlu)
- **İlerleme takibi:** "Tamamladım" işaretleri tarayıcıda (localStorage) saklanır
- **Zorluk seviyeleri:** Başlangıç / Orta / İleri rozetleri her konu ve terimde
- **Mini quizler:** her konunun sonunda 4 soruluk kendini test etme bölümü
- **Koyu/açık tema**, kod renklendirme, kopyala düğmesi, içindekiler menüsü

## Yeni konu eklemek

1. `STYLE-GUIDE.md`'yi oku.
2. `konular/m1-bilgisayar-temelleri.html`'i şablon olarak kopyala.
3. `assets/data/curriculum.js`'e konuyu, `assets/data/terms-*.js`'e terimleri ekle.
4. `sozluk.html`'e yeni terim dosyasının `<script>` etiketini ekle (yeni dosya açtıysan).
