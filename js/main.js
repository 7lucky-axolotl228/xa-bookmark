const modifiers = {
  tabItemActive: 'tabs__item--active',
  tabPanelsItemsActive: 'tabpanels__item--active',
  accordionItemOpen: 'accordion__item--open'
};


const elsTabsItem = document.querySelectorAll('.tabs__item');
const elsTabLink = document.querySelectorAll('.js-tab-link');
const elsTabsPanel = document.querySelectorAll('.tabpanels__item');

const elsAccordionItem = document.querySelectorAll('.accordion__item');
const elsAccordionItemToggler = document.querySelectorAll('.accordion__item-toggler');

// Functions
function deactivateTabItems () {
  elsTabsItem.forEach(function (elTabsItem) {
    elTabsItem.classList.remove(modifiers.tabItemActive);
  });
}
function deactivateTabPanels () {
  elsTabsPanel.forEach(function (elTabsPanel) {
    elTabsPanel.classList.remove(modifiers.tabPanelsItemsActive);
  });
}

function closeAccordionItems () {
  elsAccordionItem.forEach(function (elAccordionItem) {
    elAccordionItem.classList.remove(modifiers.accordionItemOpen);
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
    elTabLink.parentElement.classList.add(modifiers.tabItemActive);

    //Remove active class from tabs__item elements
    deactivateTabPanels();

    //Show active tab panel
    // const elTargetPanel = document.querySelector(`#${elTabLink.href.split('#')[1]}`);
    const elTargetPanel = document.querySelector(elTabLink.dataset.tabTarget);
    elTargetPanel.classList.add(modifiers.tabPanelsItemsActive);

    console.log(elTabLink.dataset.tabTarget);
    console.log(elTargetPanel);
  });
});

// Open and close accordion item

elsAccordionItemToggler.forEach(function (elAccordionItemtoggler) {
  elAccordionItemtoggler.addEventListener('click', function () {
    closeAccordionItems();

    elAccordionItemtoggler.closest('.accordion__item').classList.add(modifiers.accordionItemOpen)
  });
});
