function selectTab() {
  let selectedTabs = Array.from(document.querySelectorAll('.tab'));
  selectedTabs.forEach((selectedTab, index) => {
  selectedTab.classList.add('tab_active');
  tabContents[index].classList.add('tab__content_active');
  });
}
function deSelectTab() {
    let deSelectedTabs = Array.from(document.querySelectorAll('.tab'));
    deSelectedTabs.forEach((deSelectedTab, index) => {
    deSelectedTab.classList.remove('tab_active');
    tabContents[index].classList.remove('tab__content_active');
    });
}
let tabs = Array.from(document.querySelectorAll('.tab'));
tabs.forEach((tab) => {
  tab.addEventListener('click', selectTab);
});
const tabContents = Array.from(document.querySelectorAll('.tab__content'));
tabs.forEach((tab, index) => {
  tab.onclick = () => {
    deSelectTab();
    tabContents[index].classList.add('tab__content_active');
    return false;
    }
});