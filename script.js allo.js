// script.js

document.addEventListener('DOMContentLoaded', function () {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');

  if (burger && nav) {
    burger.addEventListener('click', () => {
      const expanded = burger.getAttribute('aria-expanded') === 'true';
      burger.setAttribute('aria-expanded', String(!expanded));
      burger.setAttribute('aria-label', expanded ? 'Ouvrir le menu' : 'Fermer le menu');

      nav.toggleAttribute('hidden');
      nav.classList.toggle('nav-active');
      burger.classList.toggle('toggle');
    });

    // Ajout navigation au clavier (ESC pour fermer)
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        if (burger.getAttribute('aria-expanded') === 'true') {
          burger.click(); // ferme le menu
        }
      }
    });
  }
});

