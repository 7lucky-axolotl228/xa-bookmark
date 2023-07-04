const elsTabsItem = document.querySelectorAll('.tabs__item');
const elsTabLink = document.querySelectorAll('.js-tab-link');
const elsTabsPanel = document.querySelectorAll('.tabpanels__item');

const elsAccordionItem = document.querySelectorAll('.accordion__item');
const elsAccordionItemToggler = document.querySelectorAll('.accordion__item-toggler');

// Functions
function deactivateTabItems () {
  elsTabsItem.forEach(function (elTabsItem) {
    elTabsItem.classList.remove('tabs__item--active');
  });
}
function deactivateTabPanels () {
  elsTabsPanel.forEach(function (elTabsPanel) {
    elTabsPanel.classList.remove('tabpanels__item--active');
  });
}

function closeAccordionItems () {
  elsAccordionItem.forEach(function (elAccordionItem) {
    elAccordionItem.classList.remove('accordion__item--open');
  });
}

//

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
    // const elTargetPanel = document.querySelector(`#${elTabLink.href.split('#')[1]}`);
    const elTargetPanel = document.querySelector(elTabLink.dataset.tabTarget);
    elTargetPanel.classList.add('tabpanels__item--active');

    console.log(elTabLink.dataset.tabTarget);
    console.log(elTargetPanel);
  });
});

// Open and close accordion item

elsAccordionItemToggler.forEach(function (elAccordionItemtoggler) {
  elAccordionItemtoggler.addEventListener('click', function () {
    closeAccordionItems();

    elAccordionItemtoggler.closest('.accordion__item').classList.add('accordion__item--open')
  });
});
