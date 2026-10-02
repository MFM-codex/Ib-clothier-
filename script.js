(function () {
    var btn = document.querySelector('.menu-btn'), menu = document.getElementById('menu');
    btn.addEventListener('click', function () {
        var open = menu.classList.toggle('open');
        btn.setAttribute('aria-expanded', open);
    });
    menu.addEventListener('click', function (e) { if (e.target.tagName === 'A') { menu.classList.remove('open'); btn.setAttribute('aria-expanded', false); } });

    var els = document.querySelectorAll('.reveal');
    if ('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
        document.documentElement.classList.add('js-reveal');
        var io = new IntersectionObserver(function (entries) {
            entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } });
        }, { threshold: 0.15 });
        els.forEach(function (el) { io.observe(el); });
    }

    var lb = document.querySelector('.lightbox'), lbImg = lb.querySelector('img');
    document.querySelectorAll('.gallery figure').forEach(function (f) {
        f.addEventListener('click', function () {
            var img = f.querySelector('img');
            if (!img) return;
            lbImg.src = img.src; lbImg.alt = img.alt; lb.hidden = false;
        });
    });
    lb.addEventListener('click', function () { lb.hidden = true; });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') lb.hidden = true; });

})();
