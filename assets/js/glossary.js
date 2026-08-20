/* Veri Atlası — sözlük sayfası: arama + filtreler + kart listesi */
(function () {
  "use strict";
  document.addEventListener("DOMContentLoaded", function () {
    var listEl = document.getElementById("glossary-list");
    if (!listEl) return;

    var terms = (window.GLOSSARY || []).slice();
    var LEVEL_TR = { baslangic: "Başlangıç", orta: "Orta", ileri: "İleri" };
    var MOD_NAMES = {};
    (window.CURRICULUM || []).forEach(function (m, i) { MOD_NAMES[m.id] = (i + 1) + ". " + m.name; });

    // Türkçe sıralama
    try {
      var coll = new Intl.Collator("tr");
      terms.sort(function (a, b) { return coll.compare(a.tr, b.tr); });
    } catch (e) {
      terms.sort(function (a, b) { return a.tr < b.tr ? -1 : 1; });
    }

    var qEl = document.getElementById("gloss-search");
    var modEl = document.getElementById("gloss-module");
    var countEl = document.getElementById("gloss-count");
    var level = "all";

    // Modül seçeneklerini doldur
    if (modEl && window.CURRICULUM) {
      window.CURRICULUM.forEach(function (m, i) {
        var opt = document.createElement("option");
        opt.value = m.id;
        opt.textContent = (i + 1) + ". " + m.name;
        modEl.appendChild(opt);
      });
    }

    function esc(s) {
      return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    }

    function render() {
      var q = (qEl && qEl.value || "").trim().toLowerCase();
      var mod = (modEl && modEl.value) || "all";
      var out = [];
      var shown = 0;
      terms.forEach(function (t) {
        if (mod !== "all" && t.mod !== mod) return;
        if (level !== "all" && t.lvl !== level) return;
        if (q) {
          var hay = (t.tr + " " + t.en + " " + t.def).toLowerCase();
          if (hay.indexOf(q) === -1) return;
        }
        shown++;
        out.push(
          '<div class="term mod-' + t.mod + '">' +
            '<div class="term-head">' +
              '<span class="term-tr">' + esc(t.tr) + "</span>" +
              '<span class="term-en">' + esc(t.en) + "</span>" +
              '<span class="lvl lvl-' + t.lvl + '">' + (LEVEL_TR[t.lvl] || t.lvl) + "</span>" +
            "</div>" +
            "<p>" + t.def + "</p>" +
            '<a class="term-link" href="konular/' + t.topic + '.html">' +
              esc(MOD_NAMES[t.mod] || t.mod) + " → konuya git" +
            "</a>" +
          "</div>"
        );
      });
      listEl.innerHTML = out.length
        ? out.join("")
        : '<p class="gloss-empty">Bu filtrelerle eşleşen terim yok. Aramayı sadeleştirmeyi dene.</p>';
      if (countEl) countEl.textContent = shown + " / " + terms.length + " terim gösteriliyor";
    }

    if (qEl) qEl.addEventListener("input", render);
    if (modEl) modEl.addEventListener("change", render);
    document.querySelectorAll(".fchip[data-level]").forEach(function (chip) {
      chip.addEventListener("click", function () {
        level = chip.getAttribute("data-level");
        document.querySelectorAll(".fchip[data-level]").forEach(function (c) {
          c.classList.toggle("active", c === chip);
        });
        render();
      });
    });

    render();
  });
})();
