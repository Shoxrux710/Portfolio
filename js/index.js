$(document).ready(function () {



    let $link = $('header .header_nav ul li a');
    let $links = $('header .header_nav ul');
    let $bar = $('header .header_nav .bar');
    let $times = $('header .header_nav .times');
    
    let $icon = $('.icon');
    console.log($link);

    $icon.fadeOut();
// header_nav ========================================

$link.click(function (e){
    
  e.preventDefault();
  $link.removeClass('active');
  let $id = $(this).addClass('active').attr('href');

  let $top = $($id).offset().top - 60;
  $('html, body').animate({
    scrollTop: $top, 
  }, 1000)

})

$(window).scroll(function (){
  $scroll =  $(this).scrollTop();
  
  $link.each(function (){
    let $id = $(this).attr('href');
    let $top = $($id).offset().top - 100;

    if ($scroll >= $top){
      $link.removeClass('active');
      $(this).addClass('active')
    }
  })

  })
// button ==============================
  $bar.on('click', () => {
    $($links).animate({
      right: 0,
    }, 500)
  })
  $link.on('click', () => {
    $($links).animate({
      right: -260,
    }, 500)
  })

  $times.on('click', () => {
    $($links).animate({
      right: -260,
    }, 500)
  })
  // ===================== icon =========================

   $(window).scroll(function (){

    $scroll = $(this).scrollTop()

    if ($scroll > 200){
      $icon.fadeIn(1000)
    }
    else{
      $icon.fadeOut();
    }
   })

   $icon.click(function (){
     let $id = $(this).attr('href');
     let $top = $($id).offset().top;

     $('html, body').animate({
       scrollTop: $top,
     },1000)
   })



 /* =================================== scroll_starting ======================= */
    // gsap.from('header .bottom h3', {opacity: 0, duration: 3, y: -100, stagger: 0.6});
    // gsap.from('header .bottom p', {opacity: 0, duration: 3, y: -100, stagger: 0.6});
    /* gsap.from('header .bottom .fa', {opacity: 0, duration: 5, y: 100, stagger: 0.6}); */
    // gsap.from('header nav', {opacity: 0, duration: 2.5, y: -50, stagger: 0.6});
    /* gsap.from('header', {duration: 3.5, delay: 1.1, backgroundPosition: '0px, 0px', opacity: 0.6}); */
    // gsap.from('header .bottom .fa', {duration: 3, delay: 1.1, backgroundPosition: '0px, 0px', opacity: 0});

    // let tl = gsap.timeline({
    //     scrollTrigger: '.about',
    // })

 /*    tl.from("h1", {y: 300, opacity: 0, duration: 1})
    tl.from(".first", {y: 300, opacity: 0, duration: 1})
    tl.from(".second", {y: 300, opacity: 0, duration: 1})
    .from("img", {y: 300, opacity: 0, duration: 1}) */

    /* =================================== scroll_end =================== */
    /* gsap.from('header', {duration: 2, delay: 1.1, backgroundPosition: '200px, 0px', opacity: 0}); */
    /* ============================== nav_starting =================== */


//  particles.js ==================================
particlesJS('particles-js',

{
  "particles": {
    "number": {
      "value": 30,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#ffff00"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.6,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 50,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 6,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": false,
        "mode": "repulse"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true,
  "config_demo": {
    "hide_card": false,
    "background_color": "#b61924",
    "background_image": "",
    "background_position": "50% 50%",
    "background_repeat": "no-repeat",
    "background_size": "cover"
  }
}

)


//  wow.js ==================================
  new WOW().init();

// ========================= loading ==================

  $(window).on('load', () => {
    $preloader = $('.preloader')
    $loader = $('.loader')
    $loader4 = $('.loader4')

    $preloader.delay(2000).fadeOut()
    $loader.delay(1500).fadeOut()
    $loader4.delay(1500).fadeOut()
})



//  swiper.js ==================================
    var swiper = new Swiper('.swiper-container', {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
        },
        pagination: {
            el: '.swiper-pagination',
        },
    });




});




