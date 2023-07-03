const elsTabsItem = document.querySelectorAll('.tabs__item');
const elsTabLink = document.querySelectorAll('.js-tab-link');
const elsTabsPanel = document.querySelectorAll('.tabs__panel');

// Functions
function deactivateTabItems () {
  elsTabsItem.forEach(function (elTabsItem) {
    elTabsItem.classList.remove('tabs__item--active');
  });
}
function deactivateTabPanels () {
  elsTabsPanel.forEach(function (elTabsPanel) {
    elTabsPanel.classList.remove('tabs__panel--active');
  });
}

elsTabLink.forEach(function (elTabLink) {
  elTabLink.addEventListener('click', function (evt) {
    // Prevent page move
    evt.preventDefault();

    // Remove active class from tabs__item elements
    deactivateTabItems();

    // Add active class to clicked tabs__item
    elTabLink.parentElement.classList.add('tabs__item--active');

    //Remove active class from tabs__item elements
    deactivateTabPanels();

    //Show active tab panel
    const elTargetPanel = document.querySelector(`#${elTabLink.href.split('#')[1]}`);
    elTargetPanel.classList.add('tabs__panel--active');

    console.log(elTargetPanel);
  });
});