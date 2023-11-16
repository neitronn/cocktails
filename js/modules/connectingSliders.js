import Swiper from 'swiper/bundle';
export default function ConnectingSliders(){
    document.querySelectorAll('.products-swiper').forEach((elem) => {
        new Swiper(elem, {
            slidesPerView: 4,
            loop: true,
            spaceBetween: 70,
            navigation: {
                nextEl: elem.closest('.products-list').querySelector('.swiper-button-next'),
                prevEl: elem.closest('.products-list').querySelector('.swiper-button-prev')
            },
            speed: 1000
        });
    })

    new Swiper('.swiper-reviews', {
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

    new Swiper('.swiper-blogs', {
        slidesPerView: 3,
        rewind: true,
        spaceBetween: 30,
        navigation: {
            nextEl: '.blogs-content .swiper-button-next',
            prevEl: '.blogs-content .swiper-button-prev',
        },
        speed: 1000
    });

    new Swiper('.swiper-partners', {
        slidesPerView: 5,
        rewind: true,
        spaceBetween: 70,
        navigation: {
            nextEl: '.partners .swiper-button-next',
            prevEl: '.partners .swiper-button-prev',
        },
        speed: 1000
    });

    new Swiper('.main-slider', {
        slidesPerView: 1,
        rewind: true,
        spaceBetween: 0,
        navigation: {
            nextEl: '.main-slider .swiper-button-next',
            prevEl: '.main-slider .swiper-button-prev',
        }
    });
}

