const swiper = new Swiper('.swiper', {
 
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
    autoplay:{
      delay: 5000,
      disableOnInteraction: false,
    },
    effect:'fade',
});

const tabItem = document.querySelectorAll('.tabs__btn-item');
const tabContent = document.querySelectorAll('.tabs__content-item');

tabItem.forEach(function(element){
  element.addEventListener('click', open);
});