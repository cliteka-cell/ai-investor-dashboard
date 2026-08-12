// Mobile sidebar toggle + desktop sidebar collapse (persisted across page
// loads via localStorage, since this is a static multi-page site, not an
// SPA -- every nav click is a full reload). The collapsed-state class
// itself is applied earlier, inline in <head>, to avoid a flash of the
// expanded sidebar before this file loads.
document.addEventListener('DOMContentLoaded', () => {
  const mobileToggle = document.querySelector('.mobile-toggle');
  const sidebar = document.querySelector('.sidebar');
  if (mobileToggle && sidebar) {
    mobileToggle.addEventListener('click', () => sidebar.classList.toggle('open'));
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => sidebar.classList.remove('open'));
    });
  }

  const desktopToggle = document.querySelector('.sidebar-toggle');
  if (desktopToggle) {
    desktopToggle.addEventListener('click', () => {
      const collapsed = document.documentElement.classList.toggle('sidebar-collapsed');
      localStorage.setItem('sidebar-collapsed', collapsed ? 'true' : 'false');
      desktopToggle.textContent = collapsed ? '»' : '«';
    });
    desktopToggle.textContent = document.documentElement.classList.contains('sidebar-collapsed') ? '»' : '«';
  }
});
