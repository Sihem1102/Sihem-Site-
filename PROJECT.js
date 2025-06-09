document.addEventListener("DOMContentLoaded", () => {
  const containers = document.querySelectorAll(".image-container");

  containers.forEach((container, index) => {
    setTimeout(() => {
      container.classList.add("reveal");
    }, index * 300); // délai progressif entre chaque apparition
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const langButtons = document.querySelectorAll(".lang-option");

  let translations = {};


  fetch("lang.json")
    .then(response => response.json())
    .then(data => {
      translations = data;
    });

  langButtons.forEach(button => {
    button.addEventListener("click", () => {
      const lang = button.dataset.lang;
      const elements = document.querySelectorAll("[data-i18n]");

      elements.forEach(el => {
        const key = el.getAttribute("data-i18n");
        if (translations[lang] && translations[lang][key]) {
          el.textContent = translations[lang][key];
        }
      });
    });
  });
});


