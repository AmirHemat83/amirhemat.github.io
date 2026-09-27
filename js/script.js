'use strict';

const menuButton = document.querySelector('.menu-toggle');
const navLinks = document.getElementById('nav-links');

if (menuButton && navLinks) {
  menuButton.addEventListener('click', () => {
    const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!isOpen));
    menuButton.setAttribute('aria-label', isOpen ? 'Open navigation' : 'Close navigation');
    navLinks.classList.toggle('is-open', !isOpen);
  });
  navLinks.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Open navigation');
    navLinks.classList.remove('is-open');
  }));
}

const portrait = document.getElementById('portrait');
const portraitFallback = document.getElementById('portrait-fallback');
if (portrait && portraitFallback) {
  const showFallback = () => { portrait.hidden = true; portraitFallback.hidden = false; };
  portraitFallback.hidden = true;
  portrait.addEventListener('error', showFallback);
  if (portrait.complete && portrait.naturalWidth === 0) showFallback();
}

const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();
