function playSound(id) {
  const audio = document.getElementById(id);
  audio.currentTime = 0; // reinicia si ya estaba sonando
  audio.play();
}
