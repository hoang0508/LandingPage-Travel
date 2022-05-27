$(".holiday-list").slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  prevArrow:
    "<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
  nextArrow:
    "<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
  responsive: [
    {
      breakpoint: 1023,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        // dots: true
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});

//
const bgActive = document.querySelector(".header-bg");
const menuToggle = document.querySelector(".menu-toggle");
const menuList = document.querySelector(".header-list");
const menuClose = document.querySelector(".menu-close");
menuToggle.addEventListener("click", function (e) {
  bgActive.classList.add("is-active");
  menuList.classList.add("is-show");
  menuClose.classList.add("is-close");
});

menuClose.addEventListener("click", function (e) {
  bgActive.classList.remove("is-active");
  menuList.classList.remove("is-show");
});
