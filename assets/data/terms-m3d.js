/* Sözlük verisi — Modül 3 / Konu: m3-dbt */
window.GLOSSARY = (window.GLOSSARY || []).concat([
  { tr: "dbt", en: "data build tool", lvl: "orta", mod: "m3", topic: "m3-dbt", def: "Warehouse içindeki SQL dönüşümlerini sürümlü, testli ve belgeli bir yazılım projesine dönüştüren araç. ELT'nin \"T\" katmanıdır; veriyi taşımaz, dönüştürür." },
  { tr: "Analytics Engineer", en: "Analytics Engineer", lvl: "orta", mod: "m3", topic: "m3-dbt", def: "Veri mühendisi ile analist arasındaki rol: ham tabloları güvenilir iş tablolarına çevirir ve metrik tanımlarının sahibidir. En hızlı büyüyen giriş rollerinden biridir." },
  { tr: "dbt Model", en: "dbt Model", lvl: "orta", mod: "m3", topic: "m3-dbt", def: "İçinde tek bir SELECT bulunan .sql dosyası. dbt gerekli DDL'i kendisi üretir; warehouse'da bir view ya da tabloya karşılık gelir." },
  { tr: "ref()", en: "ref()", lvl: "orta", mod: "m3", topic: "m3-dbt", def: "Bir modelden diğerine atıf yapma işlevi. Bağımlılık grafiğinin, ortam çözümlemesinin ve otomatik lineage'ın tek kaynağıdır." },
  { tr: "source()", en: "source()", lvl: "orta", mod: "m3", topic: "m3-dbt", def: "dbt dışında üretilmiş ham tabloları tanımlı adlarla çağırma yolu. Tazelik (freshness) testleri de bu tanıma bağlanır." },
  { tr: "Materialization", en: "Materialization", lvl: "orta", mod: "m3", topic: "m3-dbt", def: "Modelin fiziksel karşılığı: view, table, incremental ya da ephemeral. SQL değişmeden maliyet–tazelik dengesini belirler." },
  { tr: "Incremental Model", en: "Incremental Model", lvl: "ileri", mod: "m3", topic: "m3-dbt", def: "Her koşuda tabloyu baştan kurmak yerine yalnızca yeni veya değişen satırları işleyen model. Büyük olay tablolarının standardıdır ama geç gelen kayıtlara dikkat gerektirir." },
  { tr: "Staging Katmanı", en: "Staging Layer", lvl: "orta", mod: "m3", topic: "m3-dbt", def: "Kaynak başına bir model içeren ve yalnızca temizlik yapan yalıtım katmanı. İş mantığı içermez; kaynak şeması değiştiğinde düzeltilecek tek yerdir." },
  { tr: "Mart", en: "Data Mart", lvl: "orta", mod: "m3", topic: "m3-dbt", def: "Belirli bir iş birimine sunulan son katman tabloları; fact ve dimension ayrımıyla, yıldız şema disiplininde modellenir." },
  { tr: "dbt Test", en: "dbt Test", lvl: "orta", mod: "m3", topic: "m3-dbt", def: "YAML'da tanımlanan otomatik veri doğrulamaları (not_null, unique, accepted_values, relationships) ve \"hiç satır dönmemeli\" mantığındaki özel SQL testleri." },
  { tr: "Jinja", en: "Jinja", lvl: "orta", mod: "m3", topic: "m3-dbt", def: "dbt'nin SQL'i çalıştırmadan önce işlediği şablon motoru. SQL'e değişken, döngü ve koşul kazandırır; abartılırsa okunmaz kod üretir." },
  { tr: "Makro", en: "Macro", lvl: "ileri", mod: "m3", topic: "m3-dbt", def: "Jinja ile yazılan, birçok modelde çağrılabilen tekrar kullanılabilir SQL parçası. DRY ilkesinin dbt'deki karşılığıdır." },
  { tr: "Snapshot", en: "Snapshot", lvl: "ileri", mod: "m3", topic: "m3-dbt", def: "Kaynak kayıttaki değişiklikleri tarihçeli olarak saklama mekanizması; SCD Tip 2'nin dbt tarafından yönetilen hâlidir." }
]);
