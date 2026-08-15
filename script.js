(function () {
  const tabButtons = document.querySelectorAll('.tab-btn');
  const panels = document.querySelectorAll('.tab-panel');
  const menuToggle = document.querySelector('.menu-toggle');
  const tabsNav = document.querySelector('.tabs');

  function activateTab(name, updateHash) {
    tabButtons.forEach(btn => btn.classList.toggle('is-active', btn.dataset.tab === name));
    panels.forEach(panel => panel.classList.toggle('is-active', panel.dataset.panel === name));
    if (updateHash) history.replaceState(null, '', '#' + name);
    tabsNav.classList.remove('is-open');
    menuToggle?.setAttribute('aria-expanded', 'false');
  }

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => activateTab(btn.dataset.tab, true));
  });

  menuToggle?.addEventListener('click', () => {
    const open = tabsNav.classList.toggle('is-open');
    menuToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });

  const initial = window.location.hash.replace('#', '');
  if (initial && document.querySelector(`[data-panel="${initial}"]`)) {
    activateTab(initial, false);
  }
})();
