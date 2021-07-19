$(document).ready(function (){

    let $bar = $('header .header_nav .bar');
    let $link = $('header .header_nav ul');
    let $links = $('header .header_nav ul li a');
    let $times = $('header .header_nav .times');
    let $top = $('header .box')
    
    console.log($links);
    $top.fadeOut();


    $links.click(function (e) { 
        e.preventDefault();

        $links.removeClass('active');
        let $id = $(this).addClass('active').attr('href');
        let $top = $($id).offset().top - 60;

        console.log($top);

        $('html, body').animate({
            scrollTop: $top,
        },1000)
        
    });

    $(window).scroll(function (){
        $scroll = $(this).scrollTop();

        $links.each(function (){
            let $id = $(this).attr('href');
            let $top = $($id).offset().top - 170

            if ($scroll >= $top){
                $links.removeClass('active');
                $(this).addClass('active')

            }
        })
    })


//  button ================================
    $('header .header_nav .bar').on('click', () =>{
        $($link).animate({
            right: 0,
        },500)
    })
    $('header .header_nav .times').on('click', () =>{
        $($link).animate({
            right: -250,
        },500)
    })


   // wow.js ==============================
  new WOW().init(); 
    
  // ========== loading ========================

  $(window).on('load', () => {
    $preloader = $('.preloader')
    $loader = $('.loader')
    $loader4 = $('.loader4')

    $preloader.delay(2000).fadeOut('slow')
    $loader.delay(1500).fadeOut('slow')
    $loader4.delay(1500).fadeOut('slow')
})



  $(window).scroll(function (){
    $scroll = $(this).scrollTop();

    if ($scroll >= 200){
        $top.fadeIn(1000);
    }
    else{
        $top.fadeOut();
    }
})

 $top.click(function (){
     let $id = $(this).attr('href');
     let $target = $($id).offset().top;
     console.log($target);

     $('html, body').animate({
         scrollTop: $target,

     }, 1000)
 })

 
})

