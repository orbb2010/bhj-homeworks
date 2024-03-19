const btnChangeSize = Array.from(document.querySelectorAll('.font-size'));
const book = document.querySelector('.book__content');
let size;
btnChangeSize.forEach(value => {
value.addEventListener('click', selectBtn);
});

function selectBtn(event) {
  btnChangeSize.forEach(value => {
  value.classList.remove('font-size_active');
  event.preventDefault();
  this.classList.add('font-size_active');
  });
  book.classList.remove('book_fs-small', 'book_fs-big');
  const size = this.dataset.size;
  if (size) {
    book.classList.add(`book_fs-${size}`);
  }
}

