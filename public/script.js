const header = document.querySelector("header");
window.addEventListener ("scroll" , function ()
{header,classList.toggle ("stick",window.scrollY >100)
})

let menu = document.querySelector('#menu-icon');
let navilist = document.querySelector('navlist');

menu.onclik = () => {
    menu.classList.toggle('bx-x');
    navilist.classList.toggle('open');
};

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navilist.classList.remove('open');
};
