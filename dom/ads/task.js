const rotateClass = function () {
let rotatorCases = Array.from(document.querySelectorAll('.rotator__case'));
setInterval(() => {
  for (let i = 0; i < rotatorCases.length; i++) {
    rotatorCases[i].classList.add('rotator__case_active');
    if (rotatorCases[i-1]) {
    if (rotatorCases[i-1].classList.contains('rotator__case_active')) {
        rotatorCases[i-1].classList.remove('rotator__case_active');
    }
    }
    }
  }, 1000);
};
rotateClass();