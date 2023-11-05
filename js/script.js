/*For Parallax*/
var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent);
if(!isMobile) {
    if($(".parallax").length){  $(".parallax").sitManParallex({  invert: false });}
}else{
    $(".parallax").sitManParallex({  invert: true });
}

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


/* tabs */
    const tabs = document.querySelectorAll('.tabs .tab');
    const lists =document.querySelectorAll('.products-list');
    tabs.forEach((elem) => {
        elem.addEventListener('click', () => {
            if (!elem.classList.contains('tab-active')){
                tabs.forEach((e) => {
                    e.classList.remove('tab-active')
                })
                lists.forEach((e) => {
                    e.classList.remove('list-action')
                })
                elem.classList.add('tab-active');
                document.querySelector('.' + elem.getAttribute('data-id')).classList.add('list-action');
            }
        })
    })
/* tabs */

/* timer */

function timing(diff){
    return {
        "day" : Math.floor(diff / (1000 * 60 * 60 * 24) ),
        "watch" : Math.floor((diff / (1000 * 60 * 60 )) % 24 ),
        "minutes" : Math.floor((diff / (1000 * 60 )) % 60 ),
        "seconds" : Math.floor((diff / 1000) % 60 )
    };
}

function addNol(x){
    if (x>=0 && x<10) {
        return ("0" + x);
    } else {
        return x;
    }
}

function getElementsTimer(parentElem){
    return {
        "day_html" : parentElem.querySelector('.timer-day'),
        "watch_html" : parentElem.querySelector('.timer-watch'),
        "minutes_html" : parentElem.querySelector('.timer-minutes'),
        "seconds_html" : parentElem.querySelector('.timer-seconds'),
    }
}

function timerRedraw(timer_html, diff){
    const data = timing(diff);
    timer_html['day_html'].innerHTML = addNol(data['day']);
    timer_html['watch_html'].innerHTML = addNol(data['watch']);
    timer_html['minutes_html'].innerHTML = addNol(data['minutes']);
    timer_html['seconds_html'].innerHTML = addNol(data['seconds']);
}

function timerInterval(timer_html, diff){
    const id = setInterval(()=>{
        diff -= 1000;
        if (diff < 0 ){
            clearInterval(id);
            return false;
        }
        timerRedraw(timer_html, diff);
    }, 1000);
}

    const timers = document.querySelectorAll('.product-timer');
    timers.forEach((timer) => {
        const d_start = new Date(timer.getAttribute('data-server_time')),
            d_finish = new Date(timer.getAttribute('data-finish'));
        const diff = d_finish - d_start;
        if (diff >= 0){
            timerRedraw(getElementsTimer(timer), diff);
            timerInterval(getElementsTimer(timer), diff);
        } else {
            timer.remove();
        }
    })
/* timer */
