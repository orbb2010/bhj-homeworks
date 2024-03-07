const btnChangeSize = Array.from(document.querySelectorAll('.font-size'));
const paragraphs = Array.from(document.querySelectorAll('.book__content p'));
let size;
btnChangeSize.forEach(value => {
value.addEventListener('click', selectBtn);
});

function selectBtn(event) {
  btnChangeSize.forEach(event => {
  btnChangeSize.classList.add('font-size_active');
  });
}



// paragraphs.classList.add('font-size_active');
//   size = this.getAttribute('data-size');
//   paragraphs[value].setAttribute('data-size') = size;
//   event.preventDefault();
