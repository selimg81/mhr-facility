/* =====================================================================
   MHR Facility — leichtes JS (Progressive Enhancement)
   Die Seite ist ohne JS vollständig nutzbar; JS verbessert nur die UX.
   ===================================================================== */
(function () {
  'use strict';

  /* ---------------------- Mobiles Menü ---------------------- */
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('primary-nav');

  if (toggle && nav) {
    var setOpen = function (open) {
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Menü schließen' : 'Menü öffnen');
      nav.setAttribute('data-open', String(open));
    };

    toggle.addEventListener('click', function () {
      var open = toggle.getAttribute('aria-expanded') === 'true';
      setOpen(!open);
      // Beim Öffnen Fokus in das Menü legen (Tastatur-/Screenreader-Nutzer)
      if (!open) {
        var firstLink = nav.querySelector('a');
        if (firstLink) firstLink.focus();
      }
    });

    // Schließen mit Escape
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
        setOpen(false);
        toggle.focus();
      }
    });

    // Schließen bei Klick auf einen Navigationslink (mobil)
    nav.addEventListener('click', function (e) {
      if (e.target.closest('a') && toggle.getAttribute('aria-expanded') === 'true') {
        setOpen(false);
      }
    });
  }

  /* ---------------------- Scroll-Reveal ---------------------- */
  var singles = Array.prototype.slice.call(document.querySelectorAll('.reveal'));
  var groups = Array.prototype.slice.call(document.querySelectorAll('.reveal-group'));

  // Ohne Observer-Support: nichts verstecken, alles sichtbar lassen.
  // (Reduced-Motion wird in CSS auf ein sanftes Fade reduziert, nicht entfernt.)
  if ('IntersectionObserver' in window) {
    singles.forEach(function (el) { el.classList.add('will-reveal'); });
    groups.forEach(function (group) {
      Array.prototype.forEach.call(group.children, function (child) { child.classList.add('will-reveal'); });
    });

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var el = entry.target;
        if (el.classList.contains('reveal-group')) {
          // Kinder gestaffelt einblenden
          Array.prototype.forEach.call(el.children, function (child, i) {
            setTimeout(function () { child.classList.add('in'); }, i * 80);
          });
        } else {
          el.classList.add('in');
        }
        io.unobserve(el);
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });

    singles.concat(groups).forEach(function (el) { io.observe(el); });
  }
})();
