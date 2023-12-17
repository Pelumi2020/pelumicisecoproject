const header = document.querySelector('header');

window.addEventListener("scroll",function(){
header.classList.toggle ("sticky",window.scrolly > 0);

});

let menu = document.querySelector('menu-icon');
let navbar= document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('open');

};

const sr = Scrollreveal({
    distance:'60px',
    duration:2500,
    delay:400;
    reset:true,


})
sr.revel('.home-text', {delay:200, origin:'top'});
sr.revel('.home-img', {delay:200, origin:'top'});
sr.revel('.feature',.product, .cta.content, contact, {delay:200, origin:'top'});

