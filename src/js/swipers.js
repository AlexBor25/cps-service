// Swiper brands, repairs, price
let mySwiper = new Swiper('.swiper-container', {
    slidesPerView: 1.10,
    spaceBetween: 16,
    pagination: {
        el: '.pag',
        type: 'bullets',
        clickable: true,
    }
});

let mqlMin = matchMedia('(min-width: 593px)').matches,
    mqlMax = matchMedia('(max-width: 592px)');

mqlMax.addEventListener('change', (e) => {
    if (e.matches) {
        mySwiper = new Swiper('.swiper-container', {
            slidesPerView: 1.10,
            spaceBetween: 16,
            pagination: {
                el: '.pag',
                type: 'bullets',
                clickable: true,
            },
        });
    } else {
        mySwiper.destroy();
    }
});

window.addEventListener('load', () => {
    if (mqlMin) {
        mySwiper.destroy();
    } 
});

let mySwiper1 = new Swiper('.swiper-container1', {
    slidesPerView: 1.13,
    spaceBetween: 16,
    pagination: {
        el: '.pag1',
        type: 'bullets',
        clickable: true,
    }
});

mqlMax.addEventListener('change', (e) => {
    if (e.matches) {
        mySwiper1 = new Swiper('.swiper-container1', {
            slidesPerView: 1.16,
            spaceBetween: 16,
            pagination: {
                el: '.pag1',
                type: 'bullets',
                clickable: true,
            },
        });
    } else {
        mySwiper1.destroy();
    }
});

window.addEventListener('load', () => {
    if (mqlMin) {
        mySwiper1.destroy();
    } 
});

let mySwiper2 = new Swiper('.swiper-container2', {
    slidesPerView: 1.1,
    spaceBetween: 16,
    pagination: {
        el: '.pag2',
        type: 'bullets',
        clickable: true,
    }
});

mqlMax.addEventListener('change', (e) => {
    if (e.matches) {
        mySwiper2 = new Swiper('.swiper-container2', {
            slidesPerView: 1.1,
            spaceBetween: 16,
            pagination: {
                el: '.pag2',
                type: 'bullets',
                clickable: true,
            },
        });
    } else {
        mySwiper2.destroy();
    }
});

window.addEventListener('load', () => {
    if (mqlMin) {
        mySwiper2.destroy();
    } 
});