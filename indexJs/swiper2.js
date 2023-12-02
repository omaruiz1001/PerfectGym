const swiper2 = new Swiper('.swiper2', {
  // Optional parameters
  autoplay:false,
  direction: 'horizontal',
  loop: true,
  slidesPerView: 1,
  spaceBetween: 10,
  breakpoints:{
    768:{
    slidesPerView:3,
    }
  },
  // If we need pagination
  pagination: {
    el: '.swiper-pagination2',
    clickable: true,
  },
});