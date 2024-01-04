const countdownTimer = function () {
  const outputText = document.getElementById("timer");
    if (outputText.textContent > 0) {
      outputText.textContent--;
    } else {
      alert('Вы победили в конкурсе!');
      clearInterval(id);
    }
}
id = setInterval(countdownTimer, 1000);