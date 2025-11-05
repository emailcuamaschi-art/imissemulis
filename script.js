const buttons = document.querySelectorAll('button');
buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    const soundId = btn.dataset.sound;
    const audio = document.getElementById(soundId);
    if (audio.paused) {
      audio.play();
      btn.classList.add('active');
    } else {
      audio.pause();
      btn.classList.remove('active');
    }
  });
});
