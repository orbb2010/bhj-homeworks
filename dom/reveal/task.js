const reveals_arr = Array.from(document.querySelectorAll('.reveal'));
let revealTop, revealBottom;
document.addEventListener('scroll', function () {
  for (let i = 0; i < reveals_arr.length; i++) {
    revealTop = reveals_arr[i].getBoundingClientRect().top;
    revealBottom = reveals_arr[i].getBoundingClientRect().bottom;
    if ((revealTop < window.innerHeight) && (revealBottom > window.innerHeight)) {
      reveals_arr[i].classList.add('reveal_active');
    }
  }
});
