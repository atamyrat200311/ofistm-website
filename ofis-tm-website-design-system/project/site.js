(function () {
  var EASE = 'cubic-bezier(.2,.7,.2,1)';
  window.ofisReveal = function () {
    var root = document.documentElement;
    var reduce = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
    var els = Array.prototype.slice.call(document.querySelectorAll('[data-reveal]:not([data-rv])'));
    if (reduce || root.dataset.motion === 'off' || !('IntersectionObserver' in window)) {
      els.forEach(function (el) { el.setAttribute('data-rv', ''); el.style.opacity = ''; el.style.transform = ''; });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        var el = e.target;
        el.style.transitionDelay = (+el.getAttribute('data-reveal') || 0) + 'ms';
        el.style.opacity = '1';
        el.style.transform = 'none';
        io.unobserve(el);
      });
    }, { rootMargin: '0px 0px -6% 0px' });
    els.forEach(function (el) {
      el.setAttribute('data-rv', '');
      el.style.transition = 'opacity .9s ' + EASE + ', transform .9s ' + EASE;
      el.style.opacity = '0';
      el.style.transform = 'translateY(28px)';
      io.observe(el);
    });
  };
  window.ofisLang = function () { try { return localStorage.getItem('ofis-lang') || 'en'; } catch (e) { return 'en'; } };
})();
