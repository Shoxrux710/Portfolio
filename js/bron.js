

let $bar = $('header .header_top .header_nav .list .bar')
let $times = $('header .header_top .header_nav ul .times')
let $link = $('header .header_top .header_nav ul')
let $links = $('header .header_top .header_nav ul li a')









//  link_top ==========================================
$links.click(function (e){
    
    e.preventDefault();
    $links.removeClass('active');
    let $id = $(this).addClass('active').attr('href');

    let $top = $($id).offset().top - 60;
    $('html, body').animate({
      scrollTop: $top, 
    }, 1000)

  })

  $(window).scroll(function (){
    $scroll =  $(this).scrollTop();
    
    $links.each(function (){
      let $id = $(this).attr('href');
      let $top = $($id).offset().top - 100;

      if ($scroll >= $top){
        $links.removeClass('active');
        $(this).addClass('active')
      }
    })

    })
// button ===============================

$bar.on('click', () => {
    $link.animate({
        right: 0,
    }, 500)

})
$times.on('click', () => {
    $link.animate({
        right: -220,
    }, 500)

})

// wow.js ==============================
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