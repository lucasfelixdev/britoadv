var swiper = new Swiper(".mySwiper-infinite", {
  slidesPerView: 'auto', // Corrigido: 'auto' precisa estar entre aspas
  slidesPerGroup: 1,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
    pauseOnMouseEnter: false
  },
  speed: 500,
  direction: 'horizontal',
  lazy: false,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  on: {
    init: function () {
      // Aplica os delays dinâmicos com base no índice de cada slide
      document.querySelectorAll('.mySwiper-infinite .swiper-slide').forEach((slide, index) => {
        slide.setAttribute('data-swiper-slide-index', index);
        slide.style.animationDelay = `${index * 0.5}s`;
      });
    }
  }
});
