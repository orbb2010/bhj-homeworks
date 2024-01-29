const cookie = document.getElementById('cookie');
const clickerCounter = document.getElementById('clicker__counter');
let clicker__counter = 0;
cookie.onclick = function () {
  clicker__counter++;
  clickerCounter.textContent = clicker__counter;
  cookie.classList.toggle('clicker__cookie');
  if (cookie.width === 200) {
    cookie.width = 250;
  } else {
    cookie.width = 200;
  }
}