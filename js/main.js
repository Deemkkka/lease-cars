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