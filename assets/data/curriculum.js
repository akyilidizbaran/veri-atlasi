/* Veri Atlası — müfredat yapısı.
   Ana sayfa ızgarası, arama ve ilerleme takibi bu veriden beslenir.
   Konu sayfası dosya adı: konular/<slug>.html */
window.CURRICULUM = [
  {
    id: "m1",
    name: "Temeller ve Hazırlık",
    desc: "Bilgisayarların çalışma mantığından Python'a, algoritmalardan matematiğe: her şeyin üzerine kurulduğu zemin.",
    topics: [
      { slug: "m1-bilgisayar-temelleri", title: "Bilgisayarlar Veriyi Nasıl İşler?", en: "How Computers Handle Data", level: "baslangic", min: 14, keywords: ["bit", "byte", "binary", "cpu", "gpu", "ram", "disk", "utf-8", "encoding", "dosya sistemi"] },
      { slug: "m1-python", title: "Python: Verinin Ana Dili", en: "Python for Data", level: "baslangic", min: 18, keywords: ["python", "değişken", "list", "dict", "fonksiyon", "oop", "class", "pip", "virtual environment", "exception"] },
      { slug: "m1-veri-yapilari-algoritmalar", title: "Veri Yapıları ve Algoritmalar", en: "Data Structures & Algorithms", level: "orta", min: 17, keywords: ["array", "linked list", "stack", "queue", "hash table", "tree", "graph", "big-o", "algoritma", "recursion"] },
      { slug: "m1-matematik", title: "Matematik Temelleri", en: "Math Foundations", level: "orta", min: 19, keywords: ["lineer cebir", "vektör", "matris", "türev", "gradyan", "olasılık", "istatistik", "dağılım", "bayes", "varyans"] },
      { slug: "m1-linux-git", title: "Linux, Terminal ve Git", en: "Linux, Terminal & Git", level: "baslangic", min: 15, keywords: ["linux", "terminal", "shell", "bash", "ssh", "git", "commit", "branch", "merge", "github"] }
    ]
  },
  {
    id: "m2",
    name: "Veri Dünyası",
    desc: "Veri hangi biçimlerde yaşar, nerede saklanır, nasıl sorgulanır ve nasıl modellenir?",
    topics: [
      { slug: "m2-veri-kavramlari", title: "Veri Tipleri ve Formatları", en: "Data Types & File Formats", level: "baslangic", min: 15, keywords: ["structured", "unstructured", "csv", "json", "parquet", "avro", "orc", "columnar", "schema", "serialization"] },
      { slug: "m2-sql", title: "SQL ve İlişkisel Veritabanları", en: "SQL & Relational Databases", level: "baslangic", min: 20, keywords: ["sql", "select", "join", "group by", "index", "transaction", "acid", "normalizasyon", "primary key", "window function"] },
      { slug: "m2-nosql", title: "NoSQL ve Dağıtık Veritabanları", en: "NoSQL & Distributed Databases", level: "orta", min: 16, keywords: ["nosql", "mongodb", "redis", "cassandra", "neo4j", "cap teoremi", "sharding", "replication", "eventual consistency", "document store"] },
      { slug: "m2-veri-modelleme", title: "Veri Modelleme", en: "Data Modeling", level: "orta", min: 17, keywords: ["er diyagramı", "oltp", "olap", "star schema", "snowflake schema", "fact", "dimension", "scd", "data vault", "kardinalite"] },
      { slug: "m2-scraping", title: "Web Scraping ve Veri Toplama", en: "Web Scraping & Data Collection", level: "orta", min: 16, keywords: ["scraping", "web kazıma", "crawler", "beautifulsoup", "requests", "html", "dom", "css seçici", "robots.txt", "rate limiting", "veri toplama", "headless browser"] }
    ]
  },
  {
    id: "m3",
    name: "Veri Mühendisliği",
    desc: "Veriyi kaynaktan alıp güvenilir, ölçeklenebilir ve zamanında akan boru hatlarına dönüştürme sanatı.",
    topics: [
      { slug: "m3-etl-elt", title: "ETL, ELT ve Data Pipeline Kavramı", en: "ETL, ELT & Data Pipelines", level: "orta", min: 16, keywords: ["etl", "elt", "pipeline", "ingestion", "batch", "incremental", "idempotency", "backfill", "cdc", "dbt"] },
      { slug: "m3-orkestrasyon", title: "Orkestrasyon: Airflow ve DAG'ler", en: "Orchestration: Airflow & DAGs", level: "orta", min: 15, keywords: ["airflow", "dag", "task", "operator", "scheduler", "cron", "retry", "sla", "sensor", "xcom"] },
      { slug: "m3-streaming", title: "Streaming ve Event-Driven Mimari", en: "Streaming & Event-Driven Architecture", level: "ileri", min: 18, keywords: ["kafka", "event", "topic", "partition", "offset", "consumer group", "pub/sub", "exactly-once", "windowing", "flink"] },
      { slug: "m3-spark", title: "Dağıtık Veri İşleme: Spark", en: "Distributed Processing: Spark", level: "ileri", min: 19, keywords: ["spark", "hadoop", "hdfs", "mapreduce", "rdd", "dataframe", "lazy evaluation", "shuffle", "executor", "cluster"] },
      { slug: "m3-warehouse-lake", title: "Data Warehouse, Lake ve Lakehouse", en: "Warehouse, Lake & Lakehouse", level: "orta", min: 17, keywords: ["data warehouse", "data lake", "lakehouse", "snowflake", "bigquery", "delta lake", "iceberg", "medallion", "bronze silver gold", "partitioning"] },
      { slug: "m3-dbt", title: "dbt ve Analytics Engineering", en: "dbt & Analytics Engineering", level: "orta", min: 17, keywords: ["dbt", "analytics engineer", "ref", "materialization", "incremental", "jinja", "staging", "mart", "sql test", "makro", "snapshot", "dönüşüm"] },
      { slug: "m3-veri-kalitesi", title: "Veri Kalitesi, Governance ve Lineage", en: "Data Quality, Governance & Lineage", level: "orta", min: 15, keywords: ["data quality", "great expectations", "data contract", "lineage", "catalog", "governance", "pii", "kvkk", "gdpr", "data mesh"] },
      { slug: "m3-bulut", title: "Bulut Platformları", en: "Cloud Platforms", level: "orta", min: 17, keywords: ["aws", "gcp", "azure", "s3", "lambda", "iaas", "paas", "serverless", "iam", "terraform"] }
    ]
  },
  {
    id: "m4",
    name: "Analitik ve İstatistik",
    desc: "Veriyi anlamak: keşif, özet, görselleştirme ve 'bu fark gerçek mi?' sorusunun bilimsel cevabı.",
    topics: [
      { slug: "m4-eda", title: "Keşifsel Veri Analizi ve pandas", en: "EDA & pandas", level: "baslangic", min: 17, keywords: ["eda", "pandas", "dataframe", "numpy", "groupby", "merge", "missing value", "outlier", "vectorization", "describe"] },
      { slug: "m4-istatistiksel-cikarim", title: "İstatistiksel Çıkarım ve A/B Testleri", en: "Statistical Inference & A/B Testing", level: "orta", min: 18, keywords: ["hipotez testi", "p-value", "güven aralığı", "t-test", "a/b test", "clt", "örneklem", "statistical power", "ki-kare", "anlamlılık"] },
      { slug: "m4-gorsellestirme", title: "Veri Görselleştirme", en: "Data Visualization", level: "baslangic", min: 14, keywords: ["görselleştirme", "matplotlib", "seaborn", "plotly", "dashboard", "tableau", "power bi", "grafik türleri", "histogram", "bi"] },
      { slug: "m4-zaman-serisi", title: "Zaman Serisi Analizi ve Tahminleme", en: "Time Series Analysis & Forecasting", level: "orta", min: 18, keywords: ["zaman serisi", "forecasting", "tahmin", "trend", "mevsimsellik", "durağanlık", "arima", "sarima", "prophet", "lag", "backtesting", "hareketli ortalama"] }
    ]
  },
  {
    id: "m5",
    name: "Makine Öğrenmesi",
    desc: "Verilerden kural çıkaran sistemler: temel kavramlar, klasik algoritmalar ve iyi model kurma pratiği.",
    topics: [
      { slug: "m5-ml-giris", title: "ML'e Giriş: Temel Kavramlar", en: "Intro to Machine Learning", level: "baslangic", min: 16, keywords: ["machine learning", "supervised", "unsupervised", "feature", "label", "train test", "overfitting", "underfitting", "bias-variance", "generalization"] },
      { slug: "m5-supervised", title: "Supervised Learning Algoritmaları", en: "Supervised Learning Algorithms", level: "orta", min: 20, keywords: ["linear regression", "logistic regression", "decision tree", "random forest", "xgboost", "gradient boosting", "svm", "knn", "naive bayes", "ensemble"] },
      { slug: "m5-unsupervised", title: "Unsupervised Learning", en: "Unsupervised Learning", level: "orta", min: 16, keywords: ["clustering", "k-means", "dbscan", "hierarchical", "pca", "t-sne", "umap", "anomaly detection", "boyut indirgeme", "association rules"] },
      { slug: "m5-feature-engineering", title: "Feature Engineering", en: "Feature Engineering", level: "orta", min: 17, keywords: ["feature engineering", "one-hot encoding", "scaling", "missing data", "outlier", "feature selection", "data leakage", "imbalanced", "smote", "target encoding"] },
      { slug: "m5-model-degerlendirme", title: "Model Değerlendirme ve Tuning", en: "Model Evaluation & Tuning", level: "orta", min: 18, keywords: ["confusion matrix", "precision", "recall", "f1", "roc auc", "cross-validation", "grid search", "hyperparameter", "rmse", "baseline"] },
      { slug: "m5-oneri-sistemleri", title: "Öneri Sistemleri", en: "Recommender Systems", level: "orta", min: 16, keywords: ["öneri sistemi", "recommender", "collaborative filtering", "işbirlikçi filtreleme", "matris çarpanlarına ayırma", "latent factor", "cold start", "soğuk başlangıç", "precision@k", "ndcg", "kişiselleştirme", "filtre balonu"] },
      { slug: "m5-nlp", title: "Klasik NLP: Metni Sayıya Çevirmek", en: "Classical NLP", level: "orta", min: 17, keywords: ["nlp", "doğal dil işleme", "tf-idf", "bag of words", "stopword", "lemmatization", "stemming", "n-gram", "bm25", "duygu analizi", "word2vec", "ner", "metin sınıflandırma"] }
    ]
  },
  {
    id: "m6",
    name: "Derin Öğrenme",
    desc: "Sinir ağlarının içi: nöronlardan Transformer'a, modern yapay zekânın motor dairesi.",
    topics: [
      { slug: "m6-sinir-aglari", title: "Sinir Ağlarının Temelleri", en: "Neural Network Fundamentals", level: "orta", min: 19, keywords: ["neural network", "perceptron", "weight", "activation", "relu", "backpropagation", "gradient descent", "adam", "loss", "epoch"] },
      { slug: "m6-cnn", title: "CNN: Görüntü İşleyen Ağlar", en: "Convolutional Neural Networks", level: "ileri", min: 17, keywords: ["cnn", "convolution", "kernel", "filter", "pooling", "stride", "padding", "resnet", "transfer learning", "data augmentation"] },
      { slug: "m6-rnn", title: "Diziler: RNN, LSTM ve GRU", en: "Sequences: RNN, LSTM & GRU", level: "ileri", min: 16, keywords: ["rnn", "lstm", "gru", "sequence", "vanishing gradient", "seq2seq", "time series", "hidden state", "gate", "dizi"] },
      { slug: "m6-transformer", title: "Transformer ve Attention", en: "Transformers & Attention", level: "ileri", min: 18, keywords: ["transformer", "attention", "self-attention", "query key value", "multi-head", "positional encoding", "bert", "gpt", "encoder", "decoder"] },
      { slug: "m6-egitim-pratikleri", title: "Derin Öğrenme Eğitim Pratikleri", en: "Deep Learning Training Practices", level: "ileri", min: 17, keywords: ["regularization", "dropout", "batch norm", "learning rate", "early stopping", "gradient clipping", "mixed precision", "gpu", "distributed training", "initialization"] }
    ]
  },
  {
    id: "m7",
    name: "Üretken AI ve LLM'ler",
    desc: "Büyük dil modelleri çağı: tokenlardan RAG'e, fine-tuning'den AI ajanlarına.",
    topics: [
      { slug: "m7-llm-temelleri", title: "LLM'lerin Temelleri", en: "LLM Fundamentals", level: "orta", min: 17, keywords: ["llm", "token", "tokenization", "embedding", "pretraining", "context window", "temperature", "hallucination", "next token", "scaling laws"] },
      { slug: "m7-prompt-engineering", title: "Prompt Engineering", en: "Prompt Engineering", level: "baslangic", min: 14, keywords: ["prompt", "system prompt", "few-shot", "zero-shot", "chain-of-thought", "in-context learning", "structured output", "prompt injection", "talimat", "örnek"] },
      { slug: "m7-rag", title: "RAG ve Vektör Veritabanları", en: "RAG & Vector Databases", level: "orta", min: 17, keywords: ["rag", "vector database", "embedding", "cosine similarity", "chunking", "retrieval", "reranking", "faiss", "pgvector", "hybrid search"] },
      { slug: "m7-fine-tuning", title: "Fine-tuning ve Model Hizalama", en: "Fine-tuning & Alignment", level: "ileri", min: 18, keywords: ["fine-tuning", "lora", "qlora", "peft", "rlhf", "dpo", "instruction tuning", "quantization", "distillation", "alignment"] },
      { slug: "m7-ajanlar-multimodal", title: "AI Ajanları ve Multimodal Modeller", en: "AI Agents & Multimodal Models", level: "ileri", min: 17, keywords: ["agent", "tool use", "function calling", "mcp", "react", "multi-agent", "multimodal", "diffusion", "guardrails", "planning"] },
      { slug: "m7-llm-degerlendirme", title: "LLM Değerlendirme ve LLMOps", en: "LLM Evaluation & LLMOps", level: "ileri", min: 18, keywords: ["eval", "değerlendirme", "llm-as-judge", "golden set", "faithfulness", "regresyon testi", "prompt caching", "model routing", "tracing", "red teaming", "llmops", "maliyet"] }
    ]
  },
  {
    id: "m8",
    name: "MLOps ve Üretim",
    desc: "Notebook'ta çalışan model yetmez: deploy etme, izleme, sürümleme ve sorumlu AI pratiği.",
    topics: [
      { slug: "m8-deployment", title: "Model Deployment ve Serving", en: "Model Deployment & Serving", level: "orta", min: 18, keywords: ["deployment", "serving", "fastapi", "rest api", "docker", "container", "kubernetes", "inference", "latency", "throughput"] },
      { slug: "m8-cicd-tracking", title: "CI/CD ve Experiment Tracking", en: "CI/CD & Experiment Tracking", level: "orta", min: 16, keywords: ["ci/cd", "mlflow", "experiment tracking", "model registry", "reproducibility", "github actions", "test", "versioning", "pipeline", "otomasyon"] },
      { slug: "m8-monitoring", title: "Monitoring ve Model Drift", en: "Monitoring & Model Drift", level: "ileri", min: 16, keywords: ["monitoring", "data drift", "concept drift", "logging", "metrics", "alerting", "canary", "shadow deployment", "observability", "retraining"] },
      { slug: "m8-feature-store", title: "Feature Store ve Veri Versiyonlama", en: "Feature Stores & Data Versioning", level: "ileri", min: 15, keywords: ["feature store", "online store", "offline store", "training-serving skew", "point-in-time", "dvc", "dataset versioning", "feast", "lineage", "feature"] },
      { slug: "m8-sorumlu-ai", title: "Sorumlu AI: Etik, Bias ve Açıklanabilirlik", en: "Responsible AI", level: "orta", min: 16, keywords: ["responsible ai", "bias", "fairness", "explainability", "shap", "lime", "privacy", "model card", "eu ai act", "etik"] }
    ]
  },
  {
    id: "m9",
    name: "Kariyer ve Yol Haritası",
    desc: "Öğrendiklerini işe dönüştür: portfolyo projeleri, araç ekosistemi ve adım adım öğrenme planı.",
    topics: [
      { slug: "m9-portfolyo", title: "Portfolyo Projeleri", en: "Portfolio Projects", level: "baslangic", min: 15, keywords: ["portfolyo", "proje", "github", "readme", "kaggle", "açık veri", "uçtan uca", "end-to-end", "cv", "demo"] },
      { slug: "m9-ekosistem", title: "Araç Ekosistemi Haritası", en: "The Tool Ecosystem Map", level: "baslangic", min: 14, keywords: ["araçlar", "ekosistem", "stack", "hangi araç", "alternatif", "modern data stack", "karşılaştırma", "seçim", "trend", "landscape"] },
      { slug: "m9-yol-haritasi", title: "Öğrenme Yol Haritası ve Kaynaklar", en: "Learning Roadmap & Resources", level: "baslangic", min: 16, keywords: ["yol haritası", "roadmap", "kaynak", "kurs", "kitap", "sertifika", "mülakat", "plan", "topluluk", "kariyer"] }
    ]
  }
];
