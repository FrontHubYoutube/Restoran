const menu = document.querySelector('#menu-bars');
const navbar = document.querySelector('.navbar');
const searchIcon = document.querySelector('#search-icon')
const searchForm = document.querySelector('#search-form')
const closeForm = document.querySelector('#close')

menu.onclick = () => {
    menu.classList.toggle('fa-x');
    navbar.classList.toggle('active');
}
searchIcon.onclick = () => {
    searchForm.classList.toggle('active')
    navbar.classList.remove('active');
    menu.classList.remove('fa-x');
}
window.onscroll = () => {
    menu.classList.remove('fa-x');
    navbar.classList.remove('active');
    searchForm.classList.remove('active')
}
closeForm.onclick = () => {
    searchForm.classList.remove('active')
}

var swiper = new Swiper(".home-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    loop:true,
  });
  var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    loop:true,
    breakpoints: {
        0: {
            slidesPerView:1,
        },
        640: {
            slidesPerView:2,
        },
        768: {
            slidesPerView:2,
        },
        1024: {
            slidesPerView:2.5,
        },
    },
  });