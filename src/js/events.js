const btnOpenMenu = document.querySelector('.nav__menu'),
             menu = document.querySelector('.menu'),
        closeMenu = document.querySelector('.menu-header__nav_menu'),
             blur = document.querySelector('.blur'),
          btnCall = document.querySelector('.footer__icon--call'),
             call = document.querySelector('.call'),
         infoText = document.querySelector('.info__text'),
         readMore = document.querySelector('.read-more'),
         showBtn1 = document.querySelector('#showBtn1'),
         showBtn2 = document.querySelector('#showBtn2'),
  brandsContainer = document.querySelector('.brands-container'),
 repairsContainer = document.querySelector('.repairs__container'),
        closeCall = document.querySelector('.call_close'),
       closePhone = document.querySelector('.phone_close'),
            phone = document.querySelector('.phone'),
          message = document.querySelector('.footer__icon--chat'),
             body = document.querySelector('body');

btnOpenMenu.addEventListener('click', () => {
    menu.classList.add('show');
    blur.style = 'z-index: 7; background: #fff; opacity: 0.9;';
    body.style = 'overflow: hidden';
});

readMore.addEventListener('click', () => {
    if(readMore.innerText === 'Читать далее'){
        infoText.style = '-webkit-line-clamp: 15;';
        readMore.innerText = 'Скрыть';
    } else {
        infoText.style = '-webkit-line-clamp: 5;';
        readMore.innerText = 'Читать далее';
    }
}); 

showBtn1.addEventListener('click', () => {
    if(showBtn1.innerText === 'Показать все'){
        brandsContainer.style = 'height: 260px; transition: .5s;';
        showBtn1.innerText = 'Скрыть';
    } else {
        brandsContainer.style = 'height: 160px; transition: .5s;';
        showBtn1.innerText = 'Показать все';
    }
});

showBtn2.addEventListener('click', () => {
    if(showBtn2.innerText === 'Показать все'){
        repairsContainer.style = 'height: 350px; transition: .5s';
        showBtn2.innerText = 'Скрыть';
    } else {
        repairsContainer.style = 'height: 160px; transition: .5s';
        showBtn2.innerText = 'Показать все';
    }
});

closeMenu.addEventListener('click', () => {
    menu.classList.remove('show');
    blur.style = 'z-index: -100; background: transparent; opacity: 1;';
    body.style.overflow = 'auto';
});

blur.addEventListener('click', () => {
    menu.classList.remove('show');
    call.classList.remove('show');
    phone.classList.remove('show');
    blur.style = 'z-index: -100; background: transparent; opacity: 1;';
    body.style.overflow = 'auto';
});

document.addEventListener('keydown', (e) => {
    if (e.keyCode == 27) {
        menu.classList.remove('show');
        call.classList.remove('show');
        phone.classList.remove('show');
        blur.style = 'z-index: -100; background: transparent; opacity: 1;';
        body.style.overflow = 'auto';
    }
});

btnCall.addEventListener('click', () => {
    call.classList.add('show');
});

closeCall.addEventListener('click', () => {
    call.classList.remove('show');
});

message.addEventListener('click', () => {
    phone.classList.add('show');
});

closePhone.addEventListener('click', () => {
    phone.classList.remove('show');
});