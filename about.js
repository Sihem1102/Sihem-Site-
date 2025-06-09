document.addEventListener("DOMContentLoaded", () => {
  const langButtons = document.querySelectorAll(".lang-option");
  let translations = {};

  // Charger le fichier de traduction
  fetch("lang.json")
    .then(response => response.json())
    .then(data => {
      translations = data;
    });

  // Quand l'utilisateur clique sur une langue
  langButtons.forEach(button => {
    button.addEventListener("click", () => {
      const lang = button.dataset.lang;

      // Traduction du contenu textuel
      const elements = document.querySelectorAll("[data-i18n]");
      elements.forEach(el => {
        const key = el.getAttribute("data-i18n");
        if (translations[lang] && translations[lang][key]) {
          el.textContent = translations[lang][key];
        }
      });

      // Traduction des placeholders
      const placeholders = document.querySelectorAll("[data-i18n-placeholder]");
      placeholders.forEach(el => {
        const key = el.getAttribute("data-i18n-placeholder");
        if (translations[lang] && translations[lang][key]) {
          el.setAttribute("placeholder", translations[lang][key]);
        }
      });
    });
  });
});

