const btnOpenMenu = document.querySelector('.nav__menu'),
             menu = document.querySelector('.menu'),
        closeMenu = document.querySelector('.menu-header__nav_menu'),
             blur = document.querySelector('.blur'),
          btnCall = document.querySelector('.footer__icon--call'),
             call = document.querySelector('.call'),
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