(() => {
  const header = document.querySelector('.site-header');
  const menuButton = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.primary-nav');
  const modal = document.querySelector('#video-modal');
  const player = document.querySelector('#video-player');
  const videoTitle = document.querySelector('#video-title');
  const closeButton = document.querySelector('#video-close');

  const closeMenu = () => {
    menuButton.setAttribute('aria-expanded', 'false');
    nav.classList.remove('open');
    document.body.classList.remove('menu-open');
  };

  menuButton.addEventListener('click', () => {
    const open = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!open));
    nav.classList.toggle('open', !open);
    document.body.classList.toggle('menu-open', !open);
  });
  nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));

  const setHeader = () => header.classList.toggle('scrolled', window.scrollY > 24);
  setHeader();
  window.addEventListener('scroll', setHeader, { passive: true });

  const openVideo = (source, title) => {
    player.src = source;
    videoTitle.textContent = title;
    modal.showModal();
    player.play().catch(() => {});
  };
  const closeVideo = () => {
    player.pause();
    player.removeAttribute('src');
    player.load();
    modal.close();
  };
  document.querySelectorAll('[data-video-open]').forEach((trigger) => {
    trigger.addEventListener('click', () => openVideo(trigger.dataset.videoOpen, trigger.dataset.videoTitle));
  });
  closeButton.addEventListener('click', closeVideo);
  modal.addEventListener('click', (event) => {
    if (event.target === modal) closeVideo();
  });
  modal.addEventListener('cancel', (event) => {
    event.preventDefault();
    closeVideo();
  });

  const previewObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const video = entry.target;
      if (entry.isIntersecting) video.play().catch(() => {});
      else video.pause();
    });
  }, { threshold: 0.35 });
  document.querySelectorAll('.film video').forEach((video) => previewObserver.observe(video));

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach((item) => revealObserver.observe(item));

  document.querySelector('#booking-form').addEventListener('submit', (event) => {
    event.preventDefault();
    const name = document.querySelector('#name').value.trim();
    const type = document.querySelector('#event-type').value;
    const date = document.querySelector('#event-date').value || 'Not fixed yet';
    const details = document.querySelector('#details').value.trim();
    const message = `Hello Yommy Plus Event! My name is ${name}.\n\nEvent: ${type}\nDate: ${date}\n\nWhat I am planning:\n${details}`;
    window.open(`https://wa.me/2348067616620?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
  });

  document.querySelector('#year').textContent = new Date().getFullYear();
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && nav.classList.contains('open')) closeMenu();
  });
})();
