const rotateClass = function () {
let rotatorCases = Array.from(document.querySelectorAll('.rotator__case'));
let index = 0;
setInterval(() => {
  index++;
    if (index === rotatorCases.length) {
      index = 0;
    }
    rotatorCases[index-1].classList.remove('rotator__case_active');
    rotatorCases[index].classList.add('rotator__case_active');
  }, 1000);
};
rotateClass();