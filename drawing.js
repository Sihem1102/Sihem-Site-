document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll("img"); // ou précise une classe si nécessaire
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.querySelector(".lightbox-image");
  const closeBtn = document.querySelector(".lightbox-close");

  images.forEach(img => {
    img.addEventListener("click", () => {
      lightbox.style.display = "flex";
      lightboxImg.src = img.src;
    });
  });

  closeBtn.addEventListener("click", () => {
    lightbox.style.display = "none";
  });

  // Clic sur le fond sombre pour fermer aussi
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
      lightbox.style.display = "none";
    }
  });
});
