const buttons = document.querySelectorAll('.scrollcard .nav a');
const sound = document.getElementById('key-sound');

buttons.forEach(btn => {
  btn.addEventListener('click', e => {
    e.preventDefault(); // optional
    sound.currentTime = 0;
    sound.play();
  });
});