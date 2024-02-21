function selectTab() {
  document.querySelectorAll('.tab').classList.add('tab_active');
}
function deSelectTab() {
    document.querySelectorAll('.tab').classList.remove('tab_active');
}
let tabs = document.querySelectorAll('.tab');
let tabsArr = Array.from(tabs);
tabs.addEventListener('click', selectTab);
const tabContents = Array.from(document.querySelectorAll('.tab__content'));
tabsArr.forEach((tab, index) => {
    tab.onclick = () => {
        deSelectTab(tabsArr.indexOf(tab));
        tab[index].classList.add('tab__content_active');
        return false;
    }
});