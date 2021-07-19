document.querySelector('.header_nav .times').addEventListener('click', function () {
    document.querySelector('.header_nav .links').style.transform = 'translate(-100%)';
  });
  
  document.querySelector('.header_nav .bar').addEventListener('click', function () {
    document.querySelector('.header_nav .links').style.transform = 'translate(0)';
  });

  document.querySelector('.header_nav .form-inline .fa').addEventListener('click', function () {
    document.querySelector('.header_nav .form-inline .form-control').style.transform = 'translateY(0px)';
  });
  
$('.header_main .icon_top').fadeOut();


$(window).scroll(function (){

  $scroll = $(this).scrollTop()

  if ($scroll > 200){
    $('.header_main .icon_top').fadeIn(1000)
  }
  else{
    $('.header_main .icon_top').fadeOut();
  }
 })


 $('.header_main .icon_top').click(function (){
  let $id = $(this).attr('href');
  let $top = $($id).offset().top;

  $('html, body').animate({
    scrollTop: $top,
  },1000)
  })

  $(window).on('load', () => {
    $preloader = $('.preloader')
    $loader = $('.loader')
    $loader4 = $('.loader4')

    $preloader.delay(2000).fadeOut('slow')
    $loader.delay(1500).fadeOut('slow')
    $loader4.delay(1500).fadeOut('slow')
})