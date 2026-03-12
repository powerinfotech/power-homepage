var swiper1 = new Swiper(".businessSlide", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 30,
    speed: 800,
    loop: true,
    pagination: {
    el: ".swiper-pagination",
    // type: "fraction",
    },
    navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    },
});

// var swiper2 = new Swiper(".technologySlide", {
//     grabCursor: true,
//     effect: "creative",
//     creativeEffect: {
//     prev: {
//         shadow: true,
//         translate: [0, 0, -400],
//     },
//     next: {
//         translate: ["100%", 0, 0],
//     },
//     },
// });

var swiper4 = new Swiper(".creativeSlide", {
    spaceBetween: 4,
    centeredSlides: true,
    speed: 4000,
    autoplay: {
        delay: 1,
    },
    loop: true,
    slidesPerView: 'auto',
    allowTouchMove: false,
    disableOnInteraction: false,
});

var swiper5 = new Swiper(".bannerList", {
  slidesPerView: 'auto',
  spaceBetween: 40,
  loop: true,
  speed: 6000,
  allowTouchMove: false,
  autoplay: {
    delay: 0,
    disableOnInteraction: false
  },
  centeredSlides: false,
  watchOverflow: true,
});

// var swiper5 = new Swiper(".bannerList", {
//     spaceBetween: 70,
//     // centeredSlides: true,
//     speed: 6000,
//     autoplay: {
//         delay: 1,
//     },
//     loop: true,
//     slidesPerView: 'auto',
//     allowTouchMove: false,
//     disableOnInteraction: false,
// });

var tecArr = ['PowerAX', 'PowerBOS', 'PowerPOB', 'PowerITSM', 'PowerUX'];

var swiper3 = new Swiper(".technologySlide", {
    // autoHeight: true,
    //   effect: "creative",
      effect: "coverflow",
      grabCursor: true,
    //   centeredSlides: true,
    //   slidesPerView: "auto",
    slidesPerView: "auto",
    centeredSlides: true,
    // loopAdditionalSlides : 10,
    loop: true,
    spaceBetween: 30,
    speed : 800,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + tecArr[index] + "</span>";
        },
    },
    coverflowEffect: {
        rotate: 0,
        stretch: -600,
        depth: 1000,
        modifier: 1,
        slideShadows: false,
    },
    // creativeEffect: {
    //     prev: {
    //         shadow: true,
    //         translate: ["-120%", 0, -500],
    //     },
    //     next: {
    //         shadow: true,
    //         translate: ["120%", 0, -500],
    //     },
    // },
});

// var swiper = new Swiper(".newsSlide", {
//     slidesPerView: "auto",
//     // slidesPerView: 5,
//     centeredSlides: true,
//     spaceBetween: 30,
//     loop: true,
//     autoplay: {
//         delay: 2500,
//         disableOnInteraction: false,
//     },
//     pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//     },
// });

const swiperSlides = document.querySelectorAll('.newsSlide');

swiperSlides.forEach(function (element, index) {
    element.classList.add("swiper-" + index);
    let swiper = new Swiper(".swiper-" + index, {
      autoplay: {
        delay: 2000,
        desableOnInteraction: false,
      },
      centeredSlides: true,
    //   speed: 8e3,
        spaceBetween: 70,
        speed: 1000,
        loop: true,
        loopAdditionalSlides : 1,
        slidesPerView: "auto",
        freemode: true,   
    });
});
