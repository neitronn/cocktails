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