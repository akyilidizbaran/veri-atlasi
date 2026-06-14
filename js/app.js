/* ============================================================
   Sınav Kampı — uygulama mantığı
   Hash tabanlı yönlendirme, kenar çubuğu, arama, tema,
   kod renklendirme ve interaktif soru kartları.
   ============================================================ */

(function () {
  'use strict';

  var S = window.SINAV;
  var $main = document.getElementById('main');
  var $sidebar = document.getElementById('sidebar');
  var $search = document.getElementById('search');
  var $results = document.getElementById('searchResults');
  var $themeBtn = document.getElementById('themeBtn');
  var $menuBtn = document.getElementById('menuBtn');
  var $overlay = document.getElementById('overlay');

  /* ---------- Yardımcılar ---------- */

  function esc(s) {
    return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;')
      .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }

  function getModule(id) {
    for (var i = 0; i < S.modules.length; i++) if (S.modules[i].id === id) return S.modules[i];
    return null;
  }

  function topicsOf(modId) {
    return S.topics.filter(function (t) { return t.module === modId; })
      .sort(function (a, b) { return a.order - b.order; });
  }

  function getTopic(id) {
    for (var i = 0; i < S.topics.length; i++) if (S.topics[i].id === id) return S.topics[i];
    return null;
  }

  function totalQuestionCount() {
    var sum = 0;
    S.modules.forEach(function (m) {
      var n = parseInt(m.questions, 10);
      if (!isNaN(n)) sum += n;
    });
    return sum;
  }

  function moduleTone(id) {
    var tones = {
      bilisim: 'Kavram tanıma',
      isletim: 'Teknik temel',
      sql: 'Sorgu pratiği',
      csharp: 'Kod okuma'
    };
    return tones[id] || 'Çalışma rotası';
  }

  function moduleAction(id) {
    var first = topicsOf(id)[0];
    return first ? '#/topic/' + first.id : '#/module/' + id;
  }

  function stripDecorativeLead(s) {
    return String(s).replace(/^[^A-Za-z0-9ÇĞİÖŞÜçğıöşü]+[\s\uFE0F]*/, '');
  }

  /* ---------- Tema ---------- */

  function applyTheme(t) {
    document.documentElement.setAttribute('data-theme', t);
    $themeBtn.textContent = t === 'dark' ? 'Açık' : 'Koyu';
    try { localStorage.setItem('sinav-theme-academic', t); } catch (e) {}
  }

  $themeBtn.addEventListener('click', function () {
    var cur = document.documentElement.getAttribute('data-theme');
    applyTheme(cur === 'dark' ? 'light' : 'dark');
  });

  var savedTheme = 'light';
  try { savedTheme = localStorage.getItem('sinav-theme-academic') || 'light'; } catch (e) {}
  applyTheme(savedTheme);

  /* ---------- Mobil menü ---------- */

  $menuBtn.addEventListener('click', function () { document.body.classList.toggle('nav-open'); });
  $overlay.addEventListener('click', function () { document.body.classList.remove('nav-open'); });

  /* ---------- Kenar çubuğu ---------- */

  var CHEV = '<span class="chev"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 6 15 12 9 18"/></svg></span>';

  function buildSidebar(activeTopicId, activeModId) {
    var html = '<a class="side-home' + (!activeTopicId && !activeModId ? ' active' : '') + '" href="#/"><span class="side-dot"></span>Genel Bakış</a>';

    S.modules.forEach(function (m) {
      var list = topicsOf(m.id);
      var isOpen = (m.id === activeModId);
      html += '<div class="side-module' + (isOpen ? ' open' : '') + '" data-mod="' + m.id + '" style="--mc:' + m.color + '">';
      html += '<button class="side-mod-head" type="button">' +
        '<span class="mod-badge">' + esc(m.badge) + '</span>' +
        '<span>' + esc(m.name) + '</span>' +
        '<span class="count">' + list.length + '</span>' + CHEV + '</button>';
      html += '<ol class="side-topics">';
      list.forEach(function (t) {
        html += '<li><a href="#/topic/' + t.id + '"' + (t.id === activeTopicId ? ' class="active"' : '') + '>' +
          '<span class="t-no">' + t.order + '</span><span>' + esc(t.title) + '</span></a></li>';
      });
      html += '</ol></div>';
    });

    $sidebar.innerHTML = html;

    $sidebar.querySelectorAll('.side-mod-head').forEach(function (btn) {
      btn.addEventListener('click', function () {
        btn.parentElement.classList.toggle('open');
      });
    });
  }

  /* ---------- Kod renklendirme ---------- */

  var SQL_KW = ('SELECT FROM WHERE ORDER BY GROUP HAVING JOIN INNER LEFT RIGHT FULL OUTER CROSS SELF ON AS AND OR NOT IN BETWEEN LIKE IS NULL DISTINCT INSERT INTO VALUES UPDATE SET DELETE CREATE TABLE ALTER DROP TRUNCATE GRANT REVOKE COMMIT ROLLBACK SAVEPOINT BEGIN TRANSACTION PRIMARY FOREIGN KEY REFERENCES UNIQUE CHECK DEFAULT INDEX VIEW UNION ALL TOP LIMIT OFFSET EXISTS ANY SOME CASE WHEN THEN ELSE END DESC ASC INT INTEGER VARCHAR CHAR TEXT DATE DATETIME DECIMAL FLOAT BIGINT BIT BOOLEAN IDENTITY AUTO_INCREMENT CONSTRAINT ADD COLUMN DATABASE USE COUNT SUM AVG MIN MAX GETDATE NOW').split(' ');

  var CS_KW = ('using namespace class struct interface enum abstract sealed static void var const readonly new return if else switch case default for while do foreach in break continue try catch finally throw public private protected internal override virtual base this null true false get set value async await out ref params is as typeof sizeof nameof lock event delegate where partial yield record init global').split(' ');

  var CS_TYPE = ('int double float decimal char string bool byte sbyte long ulong short ushort uint object dynamic Task List Dictionary HashSet Queue Stack Array Console Math Exception NullReferenceException IndexOutOfRangeException DivideByZeroException FormatException ArgumentException InvalidOperationException Func Action Predicate IEnumerable IList ICollection IDisposable EventHandler StringBuilder DateTime TimeSpan Nullable Convert').split(' ');

  function highlightCode(el) {
    var langClass = '';
    el.classList.forEach(function (c) { if (c.indexOf('lang-') === 0) langClass = c.slice(5); });
    var src = el.textContent;

    if (langClass !== 'sql' && langClass !== 'csharp') {
      el.innerHTML = esc(src);
      return langClass || 'metin';
    }

    var re, isSql = (langClass === 'sql');
    if (isSql) {
      re = /(--[^\n]*|\/\*[\s\S]*?\*\/)|('(?:[^']|'')*')|(\b\d+(?:\.\d+)?\b)|([A-Za-zçğıöşüÇĞİÖŞÜ_][A-Za-z0-9çğıöşüÇĞİÖŞÜ_]*)/g;
    } else {
      re = /(\/\/[^\n]*|\/\*[\s\S]*?\*\/)|([$@]*"(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*')|(\b\d+(?:\.\d+)?[fFmMdDlL]?\b)|([A-Za-zçğıöşüÇĞİÖŞÜ_][A-Za-z0-9çğıöşüÇĞİÖŞÜ_]*)/g;
    }

    var out = '', last = 0, m;
    while ((m = re.exec(src)) !== null) {
      out += esc(src.slice(last, m.index));
      if (m[1] !== undefined) out += '<span class="tok-com">' + esc(m[1]) + '</span>';
      else if (m[2] !== undefined) out += '<span class="tok-str">' + esc(m[2]) + '</span>';
      else if (m[3] !== undefined) out += '<span class="tok-num">' + esc(m[3]) + '</span>';
      else {
        var w = m[4];
        if (isSql && SQL_KW.indexOf(w.toUpperCase()) !== -1) out += '<span class="tok-kw">' + esc(w) + '</span>';
        else if (!isSql && CS_KW.indexOf(w) !== -1) out += '<span class="tok-kw">' + esc(w) + '</span>';
        else if (!isSql && CS_TYPE.indexOf(w) !== -1) out += '<span class="tok-type">' + esc(w) + '</span>';
        else out += esc(w);
      }
      last = re.lastIndex;
    }
    out += esc(src.slice(last));
    el.innerHTML = out;
    return isSql ? 'SQL' : 'C#';
  }

  function decorateCodeBlocks(root) {
    root.querySelectorAll('pre').forEach(function (pre) {
      if (pre.parentElement.classList.contains('codeblock')) return;
      var code = pre.querySelector('code');
      var label = code ? highlightCode(code) : 'metin';
      if (label === 'text') label = 'metin';

      var wrap = document.createElement('div');
      wrap.className = 'codeblock';
      pre.parentNode.insertBefore(wrap, pre);

      var head = document.createElement('div');
      head.className = 'cb-head';
      head.innerHTML = '<span class="cb-lang">' + esc(label) + '</span>' +
        '<button class="cb-copy" type="button">Kopyala</button>';
      wrap.appendChild(head);
      wrap.appendChild(pre);

      head.querySelector('.cb-copy').addEventListener('click', function () {
        var btn = this, txt = pre.textContent;
        function done() {
          btn.textContent = 'Kopyalandı';
          btn.classList.add('ok');
          setTimeout(function () { btn.textContent = 'Kopyala'; btn.classList.remove('ok'); }, 1600);
        }
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(txt).then(done, function () { fallbackCopy(txt); done(); });
        } else { fallbackCopy(txt); done(); }
      });
    });
  }

  function fallbackCopy(text) {
    var ta = document.createElement('textarea');
    ta.value = text;
    ta.style.position = 'fixed';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.select();
    try { document.execCommand('copy'); } catch (e) {}
    document.body.removeChild(ta);
  }

  function cleanTopicChrome(root) {
    root.querySelectorAll('.topic-content h2').forEach(function (h) {
      h.textContent = stripDecorativeLead(h.textContent);
    });
  }

  function enhanceMotion(root) {
    if (!window.gsap) return;
    if (window.ScrollTrigger) window.gsap.registerPlugin(window.ScrollTrigger);

    window.gsap.fromTo(root.querySelectorAll('[data-animate="hero"]'),
      { opacity: 0, y: 18, scale: 0.985 },
      { opacity: 1, y: 0, scale: 1, duration: 0.65, ease: 'power3.out', stagger: 0.08 });

    root.querySelectorAll('[data-animate="fade"], .module-card, .topic-item, .quiz-q').forEach(function (el) {
      window.gsap.fromTo(el,
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.55,
          ease: 'power2.out',
          scrollTrigger: window.ScrollTrigger ? {
            trigger: el,
            start: 'top 88%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          } : null
        });
    });

    var paragraphs = root.querySelectorAll('.lesson-main > p, .topic-content > p');
    if (window.ScrollTrigger && paragraphs.length) {
      window.gsap.fromTo(paragraphs,
        { opacity: 0.92 },
        {
          opacity: 1,
          stagger: 0.04,
          ease: 'none',
          scrollTrigger: {
            trigger: root,
            start: 'top 70%',
            end: 'bottom 75%',
            scrub: true
          }
        });
    }
  }

  /* ---------- Soru kartları ---------- */

  document.addEventListener('click', function (e) {
    var reset = e.target.closest('.q-reset');
    if (reset) {
      var qq = reset.closest('.quiz-q');
      qq.classList.remove('answered');
      qq.querySelectorAll('.q-opt').forEach(function (o) { o.classList.remove('correct', 'wrong'); });
      var ex = qq.querySelector('.q-explain');
      if (ex) ex.classList.remove('show');
      reset.remove();
      return;
    }

    var btn = e.target.closest('.q-opt');
    if (!btn) return;
    var q = btn.closest('.quiz-q');
    if (!q || q.classList.contains('answered')) return;

    q.classList.add('answered');
    var ans = (q.getAttribute('data-answer') || '').toLowerCase();
    q.querySelectorAll('.q-opt').forEach(function (o) {
      if ((o.getAttribute('data-opt') || '').toLowerCase() === ans) o.classList.add('correct');
    });
    if ((btn.getAttribute('data-opt') || '').toLowerCase() !== ans) btn.classList.add('wrong');

    var ex = q.querySelector('.q-explain');
    if (ex) ex.classList.add('show');

    var rs = document.createElement('button');
    rs.type = 'button';
    rs.className = 'q-reset';
    rs.textContent = 'Soruyu sıfırla';
    q.appendChild(rs);
  });

  /* ---------- Sayfa şablonları ---------- */

  function statChips(m, tinted) {
    return '<div class="chips">' +
      '<span class="chip' + (tinted ? ' tinted' : '') + '"><b>' + esc(m.questions) + '</b></span>' +
      '<span class="chip"><b>' + esc(m.time) + '</b></span>' +
      '<span class="chip">' + esc(m.pace) + '</span>' +
      '<span class="chip">' + topicsOf(m.id).length + ' konu</span>' +
      '</div>';
  }

  function renderHome() {
    document.title = 'Sınav Kampı — Bilişim Sınavına Hazırlık';
    $main.style.setProperty('--mc', 'var(--accent)');

    var html = '<section class="hero home-hero" data-animate="hero">' +
      '<div class="hero-copy">' +
      '<p class="eyebrow">Odaklı sınav hazırlığı</p>' +
      '<h1>Sınava odaklı çalışma alanı</h1>' +
      '<p>Bilişim Okuryazarlığı, İşletim Sistemi, SQL ve C# başlıklarını tek sırada çalış. Her konu anlatım, karıştırılan kavramlar, sınavda soru kalıpları, açıklamalı test ve mini tekrar ile ilerler.</p>' +
      '<div class="hero-actions">' +
      '<a class="btn primary" href="#/module/sql">SQL ile başla</a>' +
      '<a class="btn ghost" href="#/module/csharp">C# rotasını aç</a>' +
      '</div>' +
      '</div>' +
      '<div class="study-visual" aria-hidden="true">' +
      '<div class="visual-card visual-card-main"><span>SELECT</span><strong>JOIN pratiği</strong><small>1 dk / soru</small></div>' +
      '<div class="visual-card visual-card-sub"><span>try</span><strong>kod çıktısı</strong><small>adaptif temel</small></div>' +
      '</div>' +
      '</section>';

    html += '<section class="study-strip" data-animate="fade">' +
      '<div><span class="strip-value">' + S.modules.length + '</span><span>modül</span></div>' +
      '<div><span class="strip-value">' + S.topics.length + '</span><span>konu</span></div>' +
      '<div><span class="strip-value">' + totalQuestionCount() + '</span><span>sınav sorusu</span></div>' +
      '<div><span class="strip-value">1</span><span>net çalışma sırası</span></div>' +
      '</section>';

    html += '<div class="section-h"><h2>Çalışma rotası</h2><span class="hint">önce kavram, sonra soru refleksi</span></div>';
    html += '<div class="module-grid bento-grid">';
    S.modules.forEach(function (m) {
      html += '<a class="module-card" href="#/module/' + m.id + '" style="--mc:' + m.color + '">' +
        '<span class="mc-stage">' + esc(moduleTone(m.id)) + '</span>' +
        '<div class="mc-head"><span class="mod-badge">' + esc(m.badge) + '</span><h3>' + esc(m.name) + '</h3></div>' +
        '<p class="mc-desc">' + esc(m.desc) + '</p>' +
        '<div class="mc-meta"><span>' + esc(m.questions) + '</span><span>' + esc(m.time) + '</span><span>' + esc(m.pace) + '</span><span>' + topicsOf(m.id).length + ' konu</span></div>' +
        '</a>';
    });
    html += '</div>';

    html += '<div class="section-h"><h2>Sınav formatı</h2><span class="hint">süre yönetimi ana avantaj</span></div>';
    html += '<div class="exam-table-card premium-table" data-animate="fade"><div class="table-wrap" style="border:none;margin:8px 0 0"><table>' +
      '<thead><tr><th>Modül</th><th>Soru</th><th>Süre</th><th>Soru başına süre</th></tr></thead><tbody>' +
      '<tr><td>Bilişim Okuryazarlığı</td><td>20</td><td>10 dk</td><td>30 sn</td></tr>' +
      '<tr><td>İşletim Sistemi</td><td>10</td><td>10 dk</td><td>1 dk</td></tr>' +
      '<tr><td>SQL</td><td>20</td><td>20 dk</td><td>1 dk</td></tr>' +
      '<tr><td>C#</td><td>20</td><td>Adaptif</td><td>Değişken</td></tr>' +
      '</tbody></table></div></div>';

    html += '<div class="section-h"><h2>Eksik kalan çalışma halkası</h2><span class="hint">konu bitirmek yetmez, yanlış analizi gerekir</span></div>';
    html += '<div class="strategy-grid" data-animate="fade">' +
      '<div class="panel focus-panel"><h3>Öncelik sırası</h3><ol>' +
      '<li><b>SQL</b> — 20 soru, yanlış seçenekler birbirine çok yakın olabilir.</li>' +
      '<li><b>C#</b> — adaptif olduğu için temel hatalar performansı ciddi etkiler.</li>' +
      '<li><b>İşletim Sistemi</b> — kavram bilgisiyle çözülür.</li>' +
      '<li><b>Bilişim Okuryazarlığı</b> — hızlı kavram tanıma yeterli.</li>' +
      '</ol></div>' +
      '<div class="panel daily-plan"><h3>Günlük çalışma akışı</h3><ol>' +
      '<li><b>12 dk:</b> konu anlatımını oku, tablo ve notları işaretle.</li>' +
      '<li><b>8 dk:</b> örnek soruları çözüp açıklamaları karşılaştır.</li>' +
      '<li><b>5 dk:</b> yanlış yaptığın kavramı mini tekrar tablosuna bağla.</li>' +
      '<li><b>2 dk:</b> aynı başlıktan bir sonraki gün hızlı tekrar yap.</li>' +
      '</ol></div>' +
      '<div class="panel warning-panel"><h3>Yanlış analizi kuralı</h3><p>Bir soruyu yanlış yaptıysan sadece doğru cevabı ezberleme. Yanlış seçeneğin neden çekici göründüğünü not et. Sınavda puanı artıran şey, çeldiriciyi erken tanımaktır.</p><a class="inline-action" href="#/module/sql">En kritik modüle git</a></div>' +
      '</div>';

    $main.innerHTML = html;
    buildSidebar(null, null);
    enhanceMotion($main);
  }

  function renderModule(modId) {
    var m = getModule(modId);
    if (!m) return renderNotFound();
    var list = topicsOf(modId);
    document.title = m.name + ' — Sınav Kampı';
    $main.style.setProperty('--mc', m.color);

    var html = '<div class="crumbs"><a href="#/">Genel Bakış</a><span class="sep">›</span><span class="here">' + esc(m.name) + '</span></div>';

    html += '<section class="mod-hero" style="--mc:' + m.color + '" data-animate="hero">' +
      '<div class="mod-hero-copy">' +
      '<p class="eyebrow">' + esc(m.stage) + ' · ' + esc(moduleTone(m.id)) + '</p>' +
      '<div class="mc-head"><span class="mod-badge" style="--mc:' + m.color + '">' + esc(m.badge) + '</span>' +
      '<h1 class="page-title">' + esc(m.name) + '</h1></div>' +
      '<p class="page-sub">' + esc(m.desc) + '</p>' +
      statChips(m, true) +
      '<div class="callout info"><p><strong>Hedef:</strong> ' + esc(m.goal) + '</p></div>' +
      '</div>' +
      '<div class="module-proof">' +
      '<span class="proof-kicker">Sınav odağı</span>' +
      '<p>' + esc(m.examWatch) + '</p>' +
      '<a class="btn primary compact" href="' + moduleAction(m.id) + '">İlk konuya geç</a>' +
      '</div>' +
      '</section>';

    html += '<div class="module-insight-grid" data-animate="fade">' +
      '<div class="panel"><h3>En kritik konular</h3><ul>' +
      m.focus.map(function (f) { return '<li>' + esc(f) + '</li>'; }).join('') +
      '</ul></div>' +
      '<div class="panel"><h3>Kaçınılacak hatalar</h3><ul>' +
      (m.avoid || []).map(function (f) { return '<li>' + esc(f) + '</li>'; }).join('') +
      '</ul></div>' +
      '<div class="panel method-panel"><h3>Nasıl çalışacağız?</h3><ul>' +
      '<li>Konuları <b>sıra ile</b> ilerlet, her konunun sonundaki soruları mutlaka çöz.</li>' +
      '<li>Yanlış yaptığın soruların açıklamalarını oku, ilgili bölüme geri dön.</li>' +
      '<li>Bitirdiğinde <b>mini tekrar tablolarını</b> hızlı tur olarak yeniden gez.</li>' +
      '</ul></div></div>';

    html += '<div class="section-h"><h2>Konular</h2><span class="hint">' + list.length + ' başlık</span></div>';
    html += '<ol class="topic-list roadmap-list" data-animate="fade">';
    list.forEach(function (t) {
      html += '<li class="topic-item"><a href="#/topic/' + t.id + '">' +
        '<span class="t-num">' + t.order + '</span>' +
        '<span class="t-title">' + esc(t.title) + '</span>' +
        '<span class="t-arrow">→</span></a></li>';
    });
    html += '</ol>';

    $main.innerHTML = html;
    buildSidebar(null, modId);
    enhanceMotion($main);
  }

  function renderTopic(topicId) {
    var t = getTopic(topicId);
    if (!t) return renderNotFound();
    var m = getModule(t.module);
    var list = topicsOf(t.module);
    var idx = list.findIndex(function (x) { return x.id === t.id; });
    document.title = t.title + ' — ' + m.name + ' — Sınav Kampı';
    $main.style.setProperty('--mc', m.color);

    var html = '<div class="crumbs"><a href="#/">Genel Bakış</a><span class="sep">›</span>' +
      '<a href="#/module/' + m.id + '">' + esc(m.name) + '</a><span class="sep">›</span>' +
      '<span class="here">' + esc(t.title) + '</span></div>';

    html += '<section class="lesson-head" style="--mc:' + m.color + '" data-animate="hero">' +
      '<div><p class="eyebrow">' + esc(m.name) + ' · Konu ' + t.order + ' / ' + list.length + '</p>' +
      '<h1 class="page-title">' + esc(t.title) + '</h1>' +
      '<p class="page-sub">Önce kavramı netleştir, sonra çeldiriciyi tanı. Bu konu sonunda açıklamalı sorularla sınav refleksini kontrol et.</p></div>' +
      '<div class="lesson-progress"><span>' + t.order + '</span><small>' + list.length + ' konu içinde</small></div>' +
      '</section>';

    html += '<div class="lesson-layout">';
    html += '<article class="topic-content lesson-main">' + t.html + '</article>';
    html += '<aside class="lesson-aside" data-animate="fade">' +
      '<div class="aside-card">' +
      '<h3>Bu konuyu bitirme ölçütü</h3>' +
      '<ul>' +
      '<li>Tanımı kendi cümlenle açıklayabiliyorsun.</li>' +
      '<li>Karıştırılan kavramlarda farkı söyleyebiliyorsun.</li>' +
      '<li>Örnek sorularda yanlış şıkkın neden yanlış olduğunu görebiliyorsun.</li>' +
      '</ul>' +
      '</div>' +
      '<div class="aside-card accent">' +
      '<h3>Sınav taktiği</h3>' +
      '<p>' + esc(m.examWatch) + '</p>' +
      '</div>' +
      '<div class="aside-card compact-list">' +
      '<h3>Hızlı tekrar</h3>' +
      '<ol>' +
      '<li>Kavram tablosu</li>' +
      '<li>Tuzak notu</li>' +
      '<li>Örnek soru açıklaması</li>' +
      '<li>Mini tekrar</li>' +
      '</ol>' +
      '</div>' +
      '</aside>';
    html += '</div>';

    var prev = idx > 0 ? list[idx - 1] : null;
    var next = idx < list.length - 1 ? list[idx + 1] : null;
    html += '<nav class="pager">';
    if (prev) html += '<a class="prev" href="#/topic/' + prev.id + '"><span class="p-label">Önceki konu</span><span class="p-title">' + esc(prev.title) + '</span></a>';
    if (next) html += '<a class="next" href="#/topic/' + next.id + '"><span class="p-label">Sonraki konu</span><span class="p-title">' + esc(next.title) + '</span></a>';
    else html += '<a class="next" href="#/module/' + m.id + '"><span class="p-label">Modül sonu</span><span class="p-title">' + esc(m.name) + ' konu listesine dön</span></a>';
    html += '</nav>';

    $main.innerHTML = html;
    decorateCodeBlocks($main);
    cleanTopicChrome($main);
    buildSidebar(t.id, t.module);
    enhanceMotion($main);

    var act = $sidebar.querySelector('.side-topics a.active');
    if (act && act.scrollIntoView) act.scrollIntoView({ block: 'nearest' });
  }

  function renderNotFound() {
    $main.innerHTML = '<div class="hero"><h1>Sayfa bulunamadı</h1>' +
      '<p>Aradığın konu mevcut değil. <a href="#/">Genel Bakış</a> sayfasına dönebilirsin.</p></div>';
    buildSidebar(null, null);
  }

  /* ---------- Arama ---------- */

  var searchIndex = null;

  function buildSearchIndex() {
    var div = document.createElement('div');
    searchIndex = S.topics.map(function (t) {
      div.innerHTML = t.html;
      var text = (div.textContent || '').toLowerCase();
      div.innerHTML = '';
      return { id: t.id, title: t.title, mod: getModule(t.module), text: text };
    });
  }

  function trLower(s) {
    return s.replace(/İ/g, 'i').replace(/I/g, 'ı').toLowerCase();
  }

  function doSearch(qRaw) {
    var q = trLower(qRaw.trim());
    if (q.length < 2) { closeSearch(); return; }
    if (!searchIndex) buildSearchIndex();

    var hits = [];
    searchIndex.forEach(function (item) {
      var tl = trLower(item.title);
      if (tl.indexOf(q) !== -1) hits.push({ item: item, score: 2 });
      else if (item.text.indexOf(q) !== -1) hits.push({ item: item, score: 1 });
    });
    hits.sort(function (a, b) { return b.score - a.score; });
    hits = hits.slice(0, 10);

    if (!hits.length) {
      $results.innerHTML = '<div class="search-empty">“' + esc(qRaw) + '” için sonuç yok</div>';
    } else {
      $results.innerHTML = hits.map(function (h) {
        return '<a class="search-hit" href="#/topic/' + h.item.id + '">' +
          '<span class="mod-badge" style="--mc:' + h.item.mod.color + '">' + esc(h.item.mod.badge) + '</span>' +
          '<span class="hit-title">' + esc(h.item.title) + '</span>' +
          '<span class="hit-mod">' + esc(h.item.mod.name) + '</span></a>';
      }).join('');
    }
    $results.classList.add('open');
  }

  function closeSearch() {
    $results.classList.remove('open');
    $results.innerHTML = '';
  }

  $search.addEventListener('input', function () { doSearch($search.value); });
  $search.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') { $search.value = ''; closeSearch(); $search.blur(); }
    if (e.key === 'Enter') {
      var first = $results.querySelector('.search-hit');
      if (first) { location.hash = first.getAttribute('href'); $search.value = ''; closeSearch(); $search.blur(); }
    }
  });
  document.addEventListener('click', function (e) {
    if (e.target.closest('.search-hit')) { $search.value = ''; closeSearch(); return; }
    if (!e.target.closest('.search-wrap')) closeSearch();
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === '/' && document.activeElement !== $search &&
        !/INPUT|TEXTAREA/.test(document.activeElement.tagName)) {
      e.preventDefault();
      $search.focus();
    }
  });

  /* ---------- Yönlendirme ---------- */

  function route() {
    document.body.classList.remove('nav-open');
    var h = location.hash.replace(/^#\/?/, '');
    if (h.indexOf('module/') === 0) renderModule(h.slice(7));
    else if (h.indexOf('topic/') === 0) renderTopic(h.slice(6));
    else renderHome();
    window.scrollTo(0, 0);
  }

  window.addEventListener('hashchange', route);
  route();
})();
