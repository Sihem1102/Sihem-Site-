document.addEventListener("DOMContentLoaded", () => {
  const langButtons = document.querySelectorAll(".lang-option");
  let translations = {};

  // Charger le fichier lang.json
  fetch("lang.json")
    .then(response => response.json())
    .then(data => {
      translations = data;
    });

  // Quand on clique sur FR ou EN
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

function generateGrid() {
  const grid = document.querySelector(".background-grid");
  grid.innerHTML = ""; // vide pour éviter les doublons

  const cols = Math.ceil(window.innerWidth / 19);
  const rows = Math.ceil(window.innerHeight / 19);
  const total = cols * rows;
  const squares = [];

  for (let i = 0; i < total; i++) {
    const square = document.createElement("div");
    squares.push(square);
    grid.appendChild(square);
  }

  document.addEventListener("mousemove", (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    squares.forEach((square) => {
      const rect = square.getBoundingClientRect();
      const dx = rect.left + rect.width / 2 - mouseX;
      const dy = rect.top + rect.height / 2 - mouseY;
      const distance = Math.sqrt(dx * dx + dy * dy);

      const maxDistance = 120;
      const glow = Math.max(0, maxDistance - distance);
      const alpha = glow / maxDistance;

      square.style.boxShadow = glow > 0
        ? `0 0 ${glow / 6}px rgba(255,255,255,${alpha * 0.5})`
        : "none";

      square.style.borderColor = `rgba(180, 180, 180, ${0.4 + alpha * 0.5})`;
    });
  });
}

// ⛑️ Met à jour si la fenêtre est redimensionnée
window.addEventListener("load", generateGrid);
window.addEventListener("resize", generateGrid);
