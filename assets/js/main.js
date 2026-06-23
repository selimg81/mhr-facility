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

  /* ---------------------- Bewegung: Parallax + 3D-Tilt ---------------------- */
  var prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!prefersReduced) {
    var heroSkews = Array.prototype.slice.call(document.querySelectorAll('.hero__skew, .hero__skew2'));
    var driftX = Array.prototype.slice.call(document.querySelectorAll('.page-header__skew, .cta-band__skew'));
    var driftY = Array.prototype.slice.call(document.querySelectorAll('.media-ph'));
    var vh = window.innerHeight;
    var ticking = false;

    var centerOffset = function (el) {
      var r = el.getBoundingClientRect();
      return (r.top + r.height / 2) - vh / 2;
    };
    var frame = function () {
      var y = window.pageYOffset || document.documentElement.scrollTop || 0;
      // Hero: linke und rechte Fläche driften beim Scrollen auseinander
      heroSkews.forEach(function (el) {
        var dir = el.classList.contains('hero__skew2') ? -1 : 1;
        el.style.setProperty('--px', (y * 0.09 * dir).toFixed(1) + 'px');
        el.style.setProperty('--py', (y * -0.05 * dir).toFixed(1) + 'px');
      });
      // Dekorative Schrägen und Bildflächen laufen sanft mit
      driftX.forEach(function (el) { el.style.setProperty('--px', (centerOffset(el) * -0.07).toFixed(1) + 'px'); });
      driftY.forEach(function (el) { el.style.setProperty('--py', (centerOffset(el) * -0.045).toFixed(1) + 'px'); });
      ticking = false;
    };
    var onScroll = function () { if (!ticking) { window.requestAnimationFrame(frame); ticking = true; } };
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', function () { vh = window.innerHeight; onScroll(); }, { passive: true });
    frame();

    // 3D-Tilt der Karten, nur mit präzisem Zeiger (Desktop)
    if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
      var tiltCards = document.querySelectorAll('.service-card, .value-card, .target-card');
      Array.prototype.forEach.call(tiltCards, function (card) {
        card.addEventListener('pointermove', function (e) {
          var r = card.getBoundingClientRect();
          var rx = (((e.clientY - r.top) / r.height) - 0.5) * -6;
          var ry = (((e.clientX - r.left) / r.width) - 0.5) * 6;
          card.style.transform = 'perspective(900px) rotateX(' + rx.toFixed(2) + 'deg) rotateY(' + ry.toFixed(2) + 'deg) translateY(-4px)';
        });
        card.addEventListener('pointerleave', function () { card.style.transform = ''; });
      });
    }
  }
})();
