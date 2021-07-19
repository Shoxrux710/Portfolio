/* ======================= header_nav ========== */


let bar = document.querySelector('header .bar');
let navlink = document.querySelector('header .header_nav ul');
let times = document.querySelector('header .header_nav .times');
let product = document.querySelector('header .icon_product');


bar.addEventListener('click', (e) => {
    e.preventDefault();
    navlink.style.transform = 'translate(0%)';
    document.querySelector('.like-sidebar').style.transform = 'translate(100%)';
    document.querySelector('.cart-sidebar').style.transform = 'translate(100%)';
})
const closeNav = () => navlink.style.transform = 'translate(-100%)';

times.addEventListener('click', (e) => {
    e.preventDefault();
    closeNav()

})
/* ==================== LIKE SIDEBAR MOVE  ===========*/

like.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('.like-sidebar').style.transform = 'translate(0%)';
    document.querySelector('.cart-sidebar').style.transform = 'translate(100%)';
    /* navlink.style.transform = 'translate(-100%)'; */
    document.querySelector('.side-like .fa').style.color = 'red';
})
cart.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('.cart-sidebar').style.transform = 'translate(0%)';
    document.querySelector('.like-sidebar').style.transform = 'translate(100%)';
    /* navlink.style.transform = 'translate(-100%)';  */
    document.querySelector('.side-cart .fa').style.color = 'red';
})
/* =================== right-sidebar-close =========== */

document.querySelector('.icon-like').addEventListener('click', function () {
    document.querySelector('.like-sidebar').style.transform = 'translate(100%)';
    document.querySelector('.side-like .fa').style.color = '';

});
document.querySelector('.icon-cart').addEventListener('click', function () {
    document.querySelector('.cart-sidebar').style.transform = 'translate(100%)';
    document.querySelector('.side-cart .fa').style.color = '';
});
/* =============== like and cart click */

const links = [...document.querySelectorAll(['.like']),
...document.querySelectorAll(['.cart'])]

console.log(links) 


links.forEach(el =>{

  
    el.addEventListener('click', function (){

        this.classList.toggle('active');
        let $price = $(this).parent().find('h4').html();
        let $lorem = $(this).parent().find('p').html();
        product.innerHTML += 'name: ' + $price + '<br>' + 'price: ' + $lorem + '<br>' + '<br>'
        /* console.log($price); */
        console.log(product.innerHTML);
    })

});



/* ============== click random ======== */

const random = (max, min) => Math.floor(Math.random() * (max - min + 1) + min)

document.querySelectorAll('.output').forEach(item => {
    let day = random(1, 30)
    month = random(1, 12)
    year = random(2010, 2020)
    hour = random(1, 23)
    minute = random(1, 59)

    item.innerHTML = `
   ${day > 9 ? day : '0' + day}.${month > 9 ? month : '0' + month}.${year} | ${hour > 9 ? hour : '0' + hour}:${minute > 9 ? minute : '0' + minute}
    `
});

// ======================= loading ================

$(window).on('load', () => {
    $preloader = $('.preloader')
    $loader = $('.loader')
    $loader4 = $('.loader4')

    $preloader.delay(2000).fadeOut('slow')
    $loader.delay(1500).fadeOut('slow')
    $loader4.delay(1500).fadeOut('slow')
})

// wow.js ==============================
new WOW().init(); 
  

 