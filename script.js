// Mobile nav toggle + Deep Analysis sub-tabs. Everything else on this site
// is static content rendered server-side by publish_site.py -- no
// client-side data fetching. Collapsible conviction tiers use native
// <details>/<summary>, no JS needed for those.
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.mobile-toggle');
  const links = document.querySelector('.topnav-links');
  if (toggle && links) {
    toggle.addEventListener('click', () => links.classList.toggle('open'));
    links.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => links.classList.remove('open'));
    });
  }

  const tabBtns = document.querySelectorAll('.tab-btn');
  if (tabBtns.length) {
    tabBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const target = btn.dataset.tab;
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.toggle('active', b === btn));
        document.querySelectorAll('.tab-panel').forEach(p => {
          const active = p.dataset.panel === target;
          p.classList.toggle('active', active);
          p.style.display = active ? '' : 'none';
        });
      });
    });
  }
});
