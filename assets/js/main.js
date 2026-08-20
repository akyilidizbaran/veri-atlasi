/* Veri Atlası — ortak site davranışları */
(function () {
  "use strict";

  /* ---------- Tema ---------- */
  var saved = null;
  try { saved = localStorage.getItem("va-theme"); } catch (e) {}
  if (saved === "light" || saved === "dark") {
    document.documentElement.setAttribute("data-theme", saved);
  }

  /* ---------- Tamamlanan konular (localStorage) ---------- */
  var DONE_KEY = "va-done";
  function getDone() {
    try { return JSON.parse(localStorage.getItem(DONE_KEY)) || []; }
    catch (e) { return []; }
  }
  function setDone(list) {
    try { localStorage.setItem(DONE_KEY, JSON.stringify(list)); } catch (e) {}
  }

  /* ---------- Basit sözdizimi renklendirici ---------- */
  var KW = {
    python: "False None True and as assert async await break class continue def del elif else except finally for from global if import in is lambda nonlocal not or pass raise return try while with yield self print len range open dict list set tuple str int float bool type map filter zip enumerate sum min max abs sorted any all",
    sql: "select from where group by order having join left right inner outer full cross on as and or not null is in between like limit offset insert into values update set delete create table view index primary key foreign references distinct union all case when then else end with over partition row_number rank dense_rank count sum avg min max cast date timestamp varchar int integer float boolean desc asc merge using window rows unbounded preceding following current row lag lead qualify",
    bash: "cd ls pwd echo export source sudo apt brew pip pip3 python python3 git docker kubectl curl grep awk sed cat head tail chmod chown mkdir rm mv cp ssh scp tar wget which if then else elif fi for do done while function return exit set env",
    yaml: "true false null",
    javascript: "const let var function return if else for while class new import export from async await try catch throw typeof instanceof this null undefined true false"
  };
  function escapeHtml(s) {
    return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }
  function highlight(codeEl) {
    var lang = (codeEl.getAttribute("data-lang") || "text").toLowerCase();
    var src = codeEl.textContent;
    var kws = (KW[lang] || "").trim();
    var parts = [];
    // Alternatif gruplar: yorum | string | keyword | sayı | fonksiyon adı
    var comment = lang === "sql" ? "(--[^\\n]*)" : "(#[^\\n]*)";
    if (lang === "javascript") comment = "(\\/\\/[^\\n]*)";
    var str = "(\"\"\"[\\s\\S]*?\"\"\"|'''[\\s\\S]*?'''|f?\"(?:\\\\.|[^\"\\\\\\n])*\"|f?'(?:\\\\.|[^'\\\\\\n])*')";
    var kw = kws ? "(\\b(?:" + kws.split(/\s+/).join("|") + ")\\b)" : "(\\b__nomatch__\\b)";
    var num = "(\\b\\d+(?:\\.\\d+)?\\b)";
    var fn = "(\\b[A-Za-z_][\\w]*(?=\\s*\\())";
    var flags = lang === "sql" ? "gi" : "g";
    var re;
    try { re = new RegExp([comment, str, kw, num, fn].join("|"), flags); }
    catch (e) { return; }
    var last = 0, m;
    while ((m = re.exec(src)) !== null) {
      if (m.index > last) parts.push(escapeHtml(src.slice(last, m.index)));
      var cls = m[1] ? "tok-com" : m[2] ? "tok-str" : m[3] ? "tok-kw" : m[4] ? "tok-num" : "tok-fn";
      parts.push('<span class="' + cls + '">' + escapeHtml(m[0]) + "</span>");
      last = re.lastIndex;
    }
    parts.push(escapeHtml(src.slice(last)));
    codeEl.innerHTML = parts.join("");
  }

  /* ---------- Türkçe uyumlu slug ---------- */
  var TRMAP = { "ç": "c", "ğ": "g", "ı": "i", "ö": "o", "ş": "s", "ü": "u", "Ç": "c", "Ğ": "g", "İ": "i", "I": "i", "Ö": "o", "Ş": "s", "Ü": "u" };
  function slugify(s) {
    return s.replace(/[çğıöşüÇĞİIÖŞÜ]/g, function (c) { return TRMAP[c] || c; })
      .toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
  }

  document.addEventListener("DOMContentLoaded", function () {

    /* Tema düğmesi */
    var toggle = document.getElementById("theme-toggle");
    if (toggle) {
      toggle.addEventListener("click", function () {
        var cur = document.documentElement.getAttribute("data-theme") === "light" ? "light" : "dark";
        var next = cur === "light" ? "dark" : "light";
        document.documentElement.setAttribute("data-theme", next);
        try { localStorage.setItem("va-theme", next); } catch (e) {}
      });
    }

    /* Okuma ilerleme çubuğu */
    var bar = document.getElementById("readbar");
    if (bar) {
      var onScroll = function () {
        var h = document.documentElement;
        var max = h.scrollHeight - h.clientHeight;
        bar.style.width = (max > 0 ? (h.scrollTop / max) * 100 : 0) + "%";
      };
      window.addEventListener("scroll", onScroll, { passive: true });
      onScroll();
    }

    /* Kod blokları: renklendir + kopyala düğmesi */
    document.querySelectorAll(".codebox pre code").forEach(function (code) {
      highlight(code);
      var cap = code.closest(".codebox").querySelector("figcaption");
      if (cap && !cap.querySelector(".copy-btn")) {
        var btn = document.createElement("button");
        btn.className = "copy-btn";
        btn.type = "button";
        btn.textContent = "Kopyala";
        btn.addEventListener("click", function () {
          var done = function () {
            btn.textContent = "Kopyalandı ✓";
            setTimeout(function () { btn.textContent = "Kopyala"; }, 1600);
          };
          if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(code.textContent).then(done, done);
          } else { done(); }
        });
        cap.appendChild(btn);
      }
    });

    /* İçindekiler (konu sayfaları): article.prose içindeki h2'lerden kur */
    var article = document.querySelector("article.prose");
    var toc = document.getElementById("toc");
    if (article && toc) {
      var links = [];
      article.querySelectorAll("h2").forEach(function (h2) {
        if (!h2.id) h2.id = slugify(h2.textContent);
        var li = document.createElement("li");
        var a = document.createElement("a");
        a.href = "#" + h2.id;
        a.textContent = h2.textContent;
        li.appendChild(a);
        toc.appendChild(li);
        links.push({ id: h2.id, a: a });
      });
      if ("IntersectionObserver" in window && links.length) {
        var actives = {};
        var io = new IntersectionObserver(function (entries) {
          entries.forEach(function (en) { actives[en.target.id] = en.isIntersecting; });
          var current = null;
          links.forEach(function (l) { if (actives[l.id] && current === null) current = l.id; });
          links.forEach(function (l) { l.a.classList.toggle("active", l.id === current); });
        }, { rootMargin: "-20% 0px -65% 0px" });
        article.querySelectorAll("h2").forEach(function (h2) { io.observe(h2); });
      }
    }

    /* "Tamamladım" düğmesi (konu sayfaları) */
    var doneBtn = document.getElementById("mark-done");
    if (doneBtn) {
      var slug = doneBtn.getAttribute("data-slug") || document.body.getAttribute("data-slug");
      var render = function () {
        var isDone = getDone().indexOf(slug) !== -1;
        doneBtn.classList.toggle("is-done", isDone);
        doneBtn.textContent = isDone ? "✓ Tamamlandı — tebrikler!" : "Bu konuyu tamamladım olarak işaretle";
      };
      doneBtn.addEventListener("click", function () {
        var list = getDone();
        var i = list.indexOf(slug);
        if (i === -1) list.push(slug); else list.splice(i, 1);
        setDone(list);
        render();
      });
      render();
    }

    /* Ana sayfa: modül ızgarası + arama + ilerleme */
    var grid = document.getElementById("module-grid");
    if (grid && window.CURRICULUM) {
      var doneList = getDone();
      var LEVEL_TR = { baslangic: "Başlangıç", orta: "Orta", ileri: "İleri" };
      window.CURRICULUM.forEach(function (mod, mi) {
        var card = document.createElement("div");
        card.className = "module-card mod-" + mod.id;
        card.id = mod.id;
        var doneCount = mod.topics.filter(function (t) { return doneList.indexOf(t.slug) !== -1; }).length;
        var pct = Math.round((doneCount / mod.topics.length) * 100);
        var html = "";
        html += '<div class="mc-head"><span class="mc-no">' + (mi + 1) + "</span><h3>" + mod.name + "</h3></div>";
        html += '<p class="mc-desc">' + mod.desc + "</p>";
        html += "<ul>";
        mod.topics.forEach(function (t) {
          var isDone = doneList.indexOf(t.slug) !== -1;
          html += '<li class="' + (isDone ? "done" : "") + '" data-search="' + escapeHtml((t.title + " " + t.en + " " + t.keywords.join(" ")).toLowerCase()) + '">';
          html += '<a href="konular/' + t.slug + '.html" title="' + LEVEL_TR[t.level] + " · ~" + t.min + ' dk">';
          html += '<span class="t-dot d-' + t.level + '"></span>' + t.title;
          html += '<span class="t-min"><span class="t-done">✓ </span>~' + t.min + " dk</span></a></li>";
        });
        html += "</ul>";
        html += '<div class="mc-progress"><div class="bar"><i style="width:' + pct + '%"></i></div><span>' + doneCount + "/" + mod.topics.length + " konu tamamlandı</span></div>";
        card.innerHTML = html;
        grid.appendChild(card);
      });

      var search = document.getElementById("site-search");
      if (search) {
        search.addEventListener("input", function () {
          var q = search.value.trim().toLowerCase();
          grid.querySelectorAll(".module-card").forEach(function (card) {
            var any = false;
            card.querySelectorAll("li").forEach(function (li) {
              var hit = !q || (li.getAttribute("data-search") || "").indexOf(q) !== -1;
              li.classList.toggle("hidden", !hit);
              if (hit) any = true;
            });
            card.style.display = any ? "" : "none";
          });
        });
      }

      /* Toplam ilerleme (hero'daki sayaç) */
      var totalEl = document.getElementById("total-progress");
      if (totalEl) {
        var total = 0;
        window.CURRICULUM.forEach(function (m) { total += m.topics.length; });
        totalEl.textContent = doneList.length + "/" + total;
      }
    }

    /* Footer yılı */
    var yr = document.getElementById("year");
    if (yr) yr.textContent = new Date().getFullYear();
  });
})();
