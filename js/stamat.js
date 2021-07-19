$(document).ready(function (e) {
    
    $links = $('header .header_nav a');
    $top = $('.top');

    $($top).fadeOut();

    $links.click(function (e){
        e.preventDefault();
        $links.removeClass('active');

        let $id = $(this).addClass('active').attr('href');
        let $target = $($id).offset().top

        $('html, body').animate({
            scrollTop: $target,
        }, 1000)
    })

 
    $(window).scroll(function (){
        $scroll = $(this).scrollTop();

        if ($scroll >= 200){
            $($top).fadeIn(1000);
        }
        else{
            $($top).fadeOut();
        }
    })

    $(window).scroll(function (){
        $scroll = $(this).scrollTop();


        $links.each(function (){
            let $id = $(this).attr('href');
            let $target = $($id).offset().top ;

            if ($scroll >= $target){
                $links.removeClass('active')
                $(this).addClass('active');
            }
        })
    })


    $($top).click(function(){

        let $id = $('.top').attr('href')
        let $top = $($id).offset().top
        // let $id = $('.top').attr('href');
        // let $top = $($id).offset().top;

        $('html, body').animate({
            scrollTop: $top,
        }, 1000);

    })

});

let bar = document.querySelector('header .bar');
let lefts = document.querySelector('header .times');
let link = document.querySelector('header .header_nav ul');



bar.addEventListener('click', (e) => {
        e.preventDefault()
        link.style.transform = 'translate(0%)'
        console.log(link);
        console.log(bar);
})

lefts.addEventListener('click', (e) => {
        e.preventDefault()
        link.style.transform = 'translate(-100%)'
        console.log(link);
console.log(bar);

})

//  wow.js ============================

new WOW().init(); 

// ========================= loading ==================

$(window).on('load', () => {
    $preloader = $('.preloader')
    $loader = $('.loader')
    $loader4 = $('.loader4')

    $preloader.delay(2000).fadeOut('slow')
    $loader.delay(1500).fadeOut('slow')
    $loader4.delay(1500).fadeOut('slow')
})