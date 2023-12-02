const swiper = new Swiper('.swiper1', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView: 1,
  spaceBetween: 10,
  breakpoints:{
    768:{
    slidesPerView:3,
    loop: true,
    }
  },
  autoplay: {
    delay: 3000
  },

});
