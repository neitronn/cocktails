export default function HeaderMenu(){
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

    window.addEventListener('scroll', function() {
        toggleHeaderMenu();
    })
}