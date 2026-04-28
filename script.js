function playSound(id, button) {
  const audio = document.getElementById(id);
  audio.currentTime = 0;
  audio.play();

  button.classList.add("playing");
  setTimeout(() => button.classList.remove("playing"), 300);
}

// CAMBIO DE TEMA
const toggle = document.getElementById("themeToggle");

// cargar preferencia guardada
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
  toggle.textContent = "☀️";
}

toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
    toggle.textContent = "☀️";
  } else {
    localStorage.setItem("theme", "light");
    toggle.textContent = "🌙";
  }
});
