/*function timing(diff){
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
})*/

export default class TimerProduct{
    constructor(timer_elem) {
        this.timer = timer_elem;
    }

    init() {
        const d_start = new Date(this.timer.getAttribute('data-server_time')),
            d_finish = new Date(this.timer.getAttribute('data-finish'));
        const diff = d_finish - d_start;
        if (diff >= 0) {
            this.timerRedraw(this.getElementsTimer( this.timer), diff);
            this.timerInterval(this.getElementsTimer( this.timer), diff);
        } else {
            this.timer.remove();
        }
    }

    timerRedraw(timer_html, diff){
        const data = this.timing(diff);
        timer_html['day_html'].innerHTML = this.addNol(data['day']);
        timer_html['watch_html'].innerHTML = this.addNol(data['watch']);
        timer_html['minutes_html'].innerHTML = this.addNol(data['minutes']);
        timer_html['seconds_html'].innerHTML = this.addNol(data['seconds']);
    }

    getElementsTimer(parentElem){
        return {
            "day_html" : parentElem.querySelector('.timer-day'),
            "watch_html" : parentElem.querySelector('.timer-watch'),
            "minutes_html" : parentElem.querySelector('.timer-minutes'),
            "seconds_html" : parentElem.querySelector('.timer-seconds'),
        }
    }

    timerInterval(timer_html, diff){
        const id = setInterval(()=>{
            diff -= 1000;
            if (diff < 0 ){
                clearInterval(id);
                return false;
            }
           this.timerRedraw(timer_html, diff);
        }, 1000);
    }

    timing(diff){
        return {
            "day" : Math.floor(diff / (1000 * 60 * 60 * 24) ),
            "watch" : Math.floor((diff / (1000 * 60 * 60 )) % 24 ),
            "minutes" : Math.floor((diff / (1000 * 60 )) % 60 ),
            "seconds" : Math.floor((diff / 1000) % 60 )
        };
    }

    addNol(x){
        if (x>=0 && x<10) {
            return ("0" + x);
        } else {
            return x;
        }
    }

}