const btnChangeSize = Array.from(document.querySelectorAll('.font-size'));
const paragraphs = Array.from(document.querySelectorAll('.book__content'));
let size;
btnChangeSize.forEach(value => {
value.addEventListener('click', selectBtn);
});

function selectBtn(event) {
  btnChangeSize.forEach(value => {
  value.classList.remove('font-size_active');
  event.preventDefault();
  });
  this.classList.add('font-size_active');
  size = this.getAttribute('data-size');
  paragraphs[value].setAttribute('data-size') = size;
  
}
