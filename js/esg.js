// Keep the ESG guide outside the transformed smooth-scroll container.
(function () {
  const section = document.getElementById('esg');
  const nav = document.querySelector('.esgStepNav');
  const header = document.getElementById('header');
  const links = Array.from(nav.querySelectorAll('a'));
  const targets = links.map(link => document.getElementById(link.hash.slice(1)));
  const smoothScrollbar = window.Scrollbar.get(document.getElementById('my-scrollbar'));
  const compactLayout = window.matchMedia('(max-width: 1279px)');
  let framePending = false;

  function updateGuide() {
    framePending = false;
    // Never reveal an unstyled guide if its stylesheet has not loaded.
    if (window.getComputedStyle(nav).position !== 'fixed') {
      nav.hidden = true;
      return;
    }
    const headerHeight = header.getBoundingClientRect().height;
    const contentTop = headerHeight + (compactLayout.matches ? 64 : 0);
    const bounds = section.getBoundingClientRect();
    nav.style.setProperty('--esg-header-height', headerHeight + 'px');
    nav.hidden = bounds.top > contentTop + 4 || bounds.bottom <= contentTop + 12;
    if (nav.hidden) return;

    const readingLine = contentTop + Math.min(160, window.innerHeight * 0.2);
    let activeIndex = 0;
    targets.forEach((target, index) => {
      if (target.getBoundingClientRect().top <= readingLine) activeIndex = index;
    });
    links.forEach((link, index) => {
      if (index === activeIndex) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
  }

  function scheduleUpdate() {
    if (framePending) return;
    framePending = true;
    window.requestAnimationFrame(updateGuide);
  }

  if (smoothScrollbar) smoothScrollbar.addListener(scheduleUpdate);
  window.addEventListener('scroll', scheduleUpdate, { passive: true, capture: true });
  window.addEventListener('resize', scheduleUpdate);
  window.addEventListener('load', scheduleUpdate);
  document.querySelector('link[href^="css/esg.css"]')
    ?.addEventListener('load', scheduleUpdate);
  updateGuide();
})();
