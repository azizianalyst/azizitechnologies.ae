// ============================================================
// Azizi Technologies — client-side enhancements
// Nav behavior is handled by the React MegaMenu component;
// this file powers content inside dangerouslySetInnerHTML blocks.
// ============================================================

const WHATSAPP_NUMBER = '971557530104';

// --- Back-to-top button ---
const backToTop = document.getElementById('backToTop');
if (backToTop) {
  window.addEventListener('scroll', () => {
    backToTop.classList.toggle('visible', window.scrollY > 500);
  });
}

// --- All contact forms → open WhatsApp with pre-filled message ---
function wireWhatsappForm(form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    const originalText = btn ? btn.textContent : '';

    const data = new FormData(form);
    const fields = [];
    data.forEach((value, key) => {
      const v = String(value).trim();
      if (!v) return;
      const label = key
        .replace(/[-_]/g, ' ')
        .replace(/\b\w/g, (c) => c.toUpperCase());
      fields.push(`${label}: ${v}`);
    });

    const pageTitle = document.title.split('—')[0].trim() || 'Website';
    const body =
      `Hello Azizi Technologies,\n\n` +
      `I'd like to request support.\n\n` +
      fields.join('\n') +
      `\n\n— Sent from ${pageTitle} (${location.pathname})`;

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(body)}`;

    if (btn) {
      btn.textContent = 'Opening WhatsApp…';
      btn.disabled = true;
    }
    window.open(url, '_blank', 'noopener,noreferrer');

    setTimeout(() => {
      if (btn) {
        btn.textContent = originalText;
        btn.disabled = false;
      }
    }, 1500);
  });
}

document.querySelectorAll('form').forEach(wireWhatsappForm);

// --- Side menu toggle (service detail pages) ---
const sideMenu = document.getElementById('sideMenu');
const sideMenuToggle = document.getElementById('sideMenuToggle');
if (sideMenuToggle && sideMenu) {
  sideMenuToggle.addEventListener('click', () => {
    sideMenu.classList.toggle('active');
  });
  sideMenu.querySelectorAll('.side-menu__link').forEach((link) => {
    link.addEventListener('click', () => {
      sideMenu.classList.remove('active');
    });
  });

  const sections = document.querySelectorAll('.service-detail[id]');
  const sideLinks = document.querySelectorAll('.side-menu__link');
  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach((section) => {
      const top = section.offsetTop - 120;
      if (window.scrollY >= top) current = section.id;
    });
    sideLinks.forEach((link) => {
      link.classList.remove('active');
      if (link.getAttribute('data-target') === current) {
        link.classList.add('active');
      }
    });
  });
}

// --- Smooth reveal on scroll ---
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  );
  document
    .querySelectorAll('.service-card, .category-card, .why-card, .amc-card')
    .forEach((el) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      el.style.transition = 'opacity .5s ease, transform .5s ease';
      observer.observe(el);
    });
}
