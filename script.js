function playSound(id, button) {
  const audio = document.getElementById(id);

  // reinicia el sonido
  audio.currentTime = 0;
  audio.play();

  // animación extra
  button.classList.add("playing");

  setTimeout(() => {
    button.classList.remove("playing");
  }, 300);
}
