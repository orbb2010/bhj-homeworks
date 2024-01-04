const cookie = document.getElementById('cookie');
const clickerCounter = document.getElementById('clicker__counter');
let clicker__counter = 0;
cookie.onclick = function () {
  cookie.width = 256;
  cookie.height = 194;
  clicker__counter++;
  clickerCounter.textContent(clicker__counter);
}