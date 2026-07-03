// ============================================================
// iEYAL Solutions — shared site behavior
// ============================================================

document.addEventListener('DOMContentLoaded', () => {

  /* ---- header scroll state ---- */
  const header = document.querySelector('header.site');
  if (header) {
    const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  /* ---- mobile menu ---- */
  const burger = document.querySelector('.nav-burger');
  const mobileMenu = document.querySelector('.mobile-menu');
  if (burger && mobileMenu) {
    burger.addEventListener('click', () => mobileMenu.classList.toggle('open'));
    mobileMenu.querySelectorAll('a').forEach(a =>
      a.addEventListener('click', () => mobileMenu.classList.remove('open'))
    );
  }

  /* ---- mark active nav link ---- */
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('nav.primary a, .mobile-menu a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === path || (path === '' && href === 'index.html')) a.classList.add('active');
  });

  /* ---- scroll reveal ---- */
  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.15 });
    revealEls.forEach(el => io.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add('in'));
  }

  /* ---- hero phone mockup loop ---- */
  const frames = document.querySelectorAll('.phone-frame');
  if (frames.length) {
    let idx = 0;
    let paused = false;
    const phone = document.querySelector('.phone');
    if (phone) {
      phone.addEventListener('mouseenter', () => paused = true);
      phone.addEventListener('mouseleave', () => paused = false);
    }
    setInterval(() => {
      if (paused) return;
      frames[idx].classList.remove('show');
      idx = (idx + 1) % frames.length;
      frames[idx].classList.add('show');
    }, 2600);
  }

  /* ---- ecosystem stepper interaction ---- */
  const steps = document.querySelectorAll('.step');
  if (steps.length) {
    steps.forEach(s => {
      s.addEventListener('mouseenter', () => {
        steps.forEach(o => o.style.opacity = o === s ? '1' : '.55');
      });
      s.addEventListener('mouseleave', () => {
        steps.forEach(o => o.style.opacity = '1');
      });
    });
  }

  /* ---- pricing monthly/annual toggle ---- */
  const priceToggle = document.getElementById('priceToggle');
  if (priceToggle) {
    const monthlyEls = document.querySelectorAll('[data-monthly]');
    const annualEls = document.querySelectorAll('[data-annual]');
    priceToggle.addEventListener('change', () => {
      const annual = priceToggle.checked;
      monthlyEls.forEach(el => el.classList.toggle('hidden', annual));
      annualEls.forEach(el => el.classList.toggle('hidden', !annual));
    });
  }

  /* ---- forms: prevent real submit, show confirmation (no backend wired) ---- */
  document.querySelectorAll('form[data-demo-form]').forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = form.querySelector('button[type="submit"]');
      const original = btn.textContent;
      btn.textContent = 'Sent — we\u2019ll be in touch ✓';
      btn.disabled = true;
      setTimeout(() => { btn.textContent = original; btn.disabled = false; form.reset(); }, 3200);
    });
  });

  /* ---- footer year ---- */
  document.querySelectorAll('.js-year').forEach(el => el.textContent = new Date().getFullYear());

  /* ---- map dotted line draw-on-view ---- */
  const mapCard = document.querySelector('.map-card');
  if (mapCard && 'IntersectionObserver' in window) {
    const io2 = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          mapCard.classList.add('drawn');
          io2.unobserve(e.target);
        }
      });
    }, { threshold: 0.3 });
    io2.observe(mapCard);
  }
});
