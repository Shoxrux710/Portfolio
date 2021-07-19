window.addEventListener('load', function (e) {

    var cart = document.querySelectorAll('.cart');
    var price = document.querySelector('.total b');
  
  
    for (var i = 0; i < cart.length; i++) {
      cart[i].addEventListener('click', function () {
        this.classList.toggle('cart-active');
  
        price.innerHTML = sum();
  
      })
    }
  
  
    function sum() {
  
      var sum = 0;
  
      for (var i = 0; i < cart.length; i++) {
  
        if (cart[i].classList.contains('cart-active')) {
          sum = sum + +cart[i].getAttribute('data-price')
        }
  
      }
      return sum;
  
    }
  
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
  