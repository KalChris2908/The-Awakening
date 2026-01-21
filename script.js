const toggleBtn = document.getElementById("themeToggle");
const root = document.documentElement;
const heroContent = document.querySelector(".hero-content");
const logo = document.querySelector(".hero-logo");

/* Theme Toggle */
toggleBtn.addEventListener("click", () => {
  const currentTheme = root.getAttribute("data-theme");

  if (currentTheme === "light") {
    root.removeAttribute("data-theme");
    toggleBtn.textContent = "☾";
  } else {
    root.setAttribute("data-theme", "light");
    toggleBtn.textContent = "☀";
  }
});

/* Scroll Reveal */
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("reveal");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.4 }
);

observer.observe(heroContent);

/* Tap Feedback (Mobile polish) */
logo.addEventListener("touchstart", () => {
  logo.style.filter = "drop-shadow(0 0 30px rgba(245,193,108,0.7))";
});

logo.addEventListener("touchend", () => {
  logo.style.filter = "drop-shadow(0 0 0 rgba(245,193,108,0))";
});
