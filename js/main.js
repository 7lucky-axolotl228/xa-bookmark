const elsTabsItem = document.querySelectorAll('.tabs__item');
const elsTabLink = document.querySelectorAll('.js-tab-link');

elsTabLink.forEach(function (elTabLink) {
  elTabLink.addEventListener('click', function (evt) {
    // Prevent page move
    evt.preventDefault();

    // Remove active class from tabs__item elements
    elsTabsItem.forEach(function (elTabsItem) {
      elTabsItem.classList.remove('tabs__item--active');
    });

    // Add active class to clicked tabs__item
    elTabLink.parentElement.classList.add('tabs__item--active');

    console.log(elTabLink.href.split('#')[1]);
  });
});