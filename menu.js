document.addEventListener('DOMContentLoaded', function () {
  fetch('header.html')
    .then(res => res.text())
    .then(data => {
      document.body.insertAdjacentHTML('afterbegin', data);

      const burger = document.getElementById("burger");
      const navLinks = document.getElementById("nav-links");

      if (burger && nav) {
        burger.addEventListener('click', () => {
          navLinks.classList.toggle("active");
          const expanded = burger.getAttribute('aria-expanded') === 'true';
          burger.setAttribute('aria-expanded', String(!expanded));
          burger.setAttribute('aria-label', expanded ? 'Ouvrir le menu' : 'Fermer le menu');
          nav.toggleAttribute('hidden');
          nav.classList.toggle('nav-active');
          burger.classList.toggle('toggle');
        });

        document.addEventListener('keydown', (e) => {
          if (e.key === 'Escape' && burger.getAttribute('aria-expanded') === 'true') {
            burger.click();
          }
        });
      }
    })
    .catch(error => {
      console.error('Erreur lors du chargement du menu:', error);
    });
});
// Fermer le menu quand on clique sur un lien (mobile)
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});


