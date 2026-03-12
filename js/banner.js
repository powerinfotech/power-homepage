// const bannerList = document.querySelector('.bannerList');
// const bannerItems = document.querySelectorAll('.bannerList li');
// const numBanners = bannerItems.length;

// for (let i = 0; i < numBanners; i++) {
//   bannerList.appendChild(bannerItems[i].cloneNode(true));
// }

// const bannerWidth = bannerItems[0].offsetWidth;
// bannerList.style.width = `${bannerWidth * numBanners * 2 + 10 * (numBanners * 2 - 1)}px`;

// let currentPos = 0;
// let lastTime = 0;

// function animate(timestamp) {
//   const delta = timestamp - lastTime;
//   lastTime = timestamp;

//   currentPos -= (bannerWidth + 10) * delta / 1000;
//   if (currentPos <= -(bannerWidth + 10) * numBanners) {
//     currentPos = 0;
//   }
//   bannerList.style.transform = `translateX(${currentPos}px)`;

//   requestAnimationFrame(animate);
// }

// requestAnimationFrame(animate);


// $(function(){
// 	var swiper = new Swiper('.swiper-container', {
//         spaceBetween: 0,
//         freeMode: false,
//         enteredSlides: true,
//         speed: 5000,
//         autoplay: {
//             delay: 1,
//         },
//         loop: true,
//         slidesPerView:'auto',
//         allowTouchMove: false,
//         disableOnInteraction: true
//     });
//  });


const wave = document.querySelector(".wave");

wave.innerHTML = wave.textContent
  .split("")
  .map((letter, idx) => {
    if (letter === " ") return " ";
    return `<h2 style="animation-delay:${
      idx * 15
    }ms" class="letter">${letter}</h2>`;
  })
  .join("");



// let rollingSwiper; // Swiper 슬라이드

// // 롤링시작 함수
// function PlayRollingSwiper(target){
//   rollingSwiper = new Swiper('.bannerList', {
//     spaceBetween: 0,
//     centeredSlides: true,
//     speed: 5000,
//     autoplay: {
//       delay: 1,
//     },
//     loop: true,
//     slidesPerView: 'auto',
//     allowTouchMove: false,
//     disableOnInteraction: false,
//     // loopAdditionalSlides : 10,
//   });
// }

// // 페이지 로드
// window.addEventListener('load', function(){
//   PlayRollingSwiper();
// });