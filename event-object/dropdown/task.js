function openMenu() {
  document.querySelector('.dropdown__list').classList.add('dropdown__list_active');
}
function closeMenu() {
  document.querySelector('.dropdown__list').classList.remove('dropdown__list_active');
}
const dropdown__value = document.querySelector('.dropdown__value');
dropdown__value.addEventListener('click', openMenu);
const items = Array.from(document.querySelectorAll('.dropdown__item')); 
  items.forEach((item, index) => {
    item.onclick = () => {
    closeMenu();
    dropdown__value.textContent = items[index].textContent;
    return false;
  }
});