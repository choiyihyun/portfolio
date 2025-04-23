$(function () {
    /* 네비게이션 */
    $('header nav ul.gnb>li').hover(function () {
      $(this).find('ul.sub').stop().slideDown();
    }, function () {
      $(this).find('ul.sub').stop().slideUp();
    });

    let mainSlide = new Swiper(".main_visual", {
      slidesPerView: 1,
      spaceBetween: 0,
      centeredSlides: true,
      initialSlide: 2,
      pagination: {
        el: ".main_visual .swiper-pagination",
        clickable: true,
      },
    });

    let swiper = new Swiper(".contents1", {
        slidesPerView: 5,
        spaceBetween: 30,
        centeredSlides: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
    });
    