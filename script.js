const toggleBtn = document.getElementById("themeToggle");
const root = document.documentElement;

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
