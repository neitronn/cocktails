/*For Parallax*/
var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent);
if(!isMobile) {
    if($(".parallax").length){  $(".parallax").sitManParallex({  invert: false });}
}else{
    $(".parallax").sitManParallex({  invert: true });
}



const swiper = new Swiper('.products-swiper', {
    slidesPerView: 4,
    loop: true,
    spaceBetween: 70,
    navigation: {
        nextEl: '.products-list .swiper-button-next',
        prevEl: '.products-list .swiper-button-prev',
    },
    speed: 1000
});

const swiper_reviews = new Swiper('.swiper-reviews', {
    slidesPerView: 1,
    pagination: {
        el: '.swiper-reviews .swiper-pagination',
        type: 'bullets',
    },
    autoplay: {
        delay: 3000,
    },
    rewind: true,
    speed: 1200
});

const swiper_blogs = new Swiper('.swiper-blogs', {
    slidesPerView: 3,
    rewind: true,
    spaceBetween: 30,
    navigation: {
        nextEl: '.blogs-content .swiper-button-next',
        prevEl: '.blogs-content .swiper-button-prev',
    },
    speed: 1000
});

const swiper_partners = new Swiper('.swiper-partners', {
    slidesPerView: 5,
    rewind: true,
    spaceBetween: 70,
    navigation: {
        nextEl: '.partners .swiper-button-next',
        prevEl: '.partners .swiper-button-prev',
    },
    speed: 1000
});

const main_slider= new Swiper('.main-slider', {
    slidesPerView: 1,
    rewind: true,
    spaceBetween: 0,
    navigation: {
        nextEl: '.main-slider .swiper-button-next',
        prevEl: '.main-slider .swiper-button-prev',
    }
});

/* header-menu */
    const colorBackgroundMenu = ['#ff9da9', '#70D18E'];
    function toggleHeaderMenu(){
        const menu = document.querySelector('.header_top');
        const index = [...document.querySelectorAll(".main-slider .swiper-wrapper > .main-slider-slide")].indexOf(document.querySelector(".main-slider .swiper-wrapper > .swiper-slide-active"));
        if (pageYOffset > 400) {
            menu.classList.add('scroll-menu');
            menu.style.backgroundColor = colorBackgroundMenu[index];
        } else {
            menu.classList.remove('scroll-menu');
            menu.style.backgroundColor = 'inherit'
        }
    }

    toggleHeaderMenu();
/* header-menu */

/* top_site button */
const top_site = document.querySelector('.top_site')
 function toggleTopSiteButton(){
     if (pageYOffset > 300) {
         top_site.classList.add('top_site__active');
     }else{
         top_site.classList.remove('top_site__active');
     }
 }
toggleTopSiteButton()

top_site.addEventListener('click', function (){
    window.scrollBy({
        top: -pageYOffset,
        behavior: 'smooth'
    });
})
/* top_site button */

window.addEventListener('scroll', function() {
    toggleHeaderMenu(); // header-menu
    toggleTopSiteButton(); // top_site button
})

