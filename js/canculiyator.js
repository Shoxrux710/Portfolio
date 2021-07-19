
window.addEventListener('load', function (e) {
    var mas = document.querySelectorAll('.null');
    var nuqq = document.querySelector('.nuq');
    var min = document.querySelector('.minus');
    var amal = document.querySelectorAll('.plus');
    var teng = document.querySelector('.alert');
    var navv = document.querySelector('.nav');
    var value1 = 0;
    var value2 = 0;
    teng.disabled = true;


    var str = [];
    nuqq.disabled = true;




    for (var i = 0; i < mas.length; i++) {
        mas[i].addEventListener('click', function () {
            nuqq.disabled = false;
        })
    }
    nuqq.addEventListener('click', function () {
        str.push(nuqq.getAttribute('nut'));
        nuqq.disabled = true;
    })

    var arr = ['red', 'blue', 'green', 'black', 'brown', 'grey', 'violet', 'teal', 'salmon']

    for (var i = 0; i < mas.length; i++) {
        mas[i].addEventListener('click', function () {

            var random = Math.floor(Math.random() * arr.length);

            navv.style.color = 'white';
            navv.style.background = arr[random];

            str.push(this.getAttribute('son'));

            navv.innerHTML = str.join('');

            switch (true) {
                case amal[0].classList.contains('active'):
                    value2 = +navv.innerHTML;
                    break;
                case amal[1].classList.contains('active'):
                    value2 = +navv.innerHTML;
                    break;
                case amal[2].classList.contains('active'):
                    value2 = +navv.innerHTML;
                    break;
                case amal[3].classList.contains('active'):
                    value2 = +navv.innerHTML;
                    break;
                case amal[4].classList.contains('active'):
                    value2 = +navv.innerHTML;
                    break;
                case amal[5].classList.contains('active'):
                    value2 = +navv.innerHTML;
                    break;
                default:
                    value1 = +navv.innerHTML;
            }

            console.log(value1);
            console.log(value2);
        })
    }


    for (var i = 0; i < amal.length; i++) {
        amal[i].addEventListener('click', function () {
            teng.disabled = false;
            str = [];
            navv.innerHTML = this.getAttribute('top');

            for (var i = 0; i < amal.length; i++) {
                amal[i].classList.remove('active');
            }
            this.classList.add('active');

        })
    }

    teng.addEventListener('click', function () {

        switch (true) {
            case amal[0].classList.contains('active'):
                var result = value1 + value2;
                break;
            case amal[1].classList.contains('active'):
                var result = value1 - value2;
                break;
            case amal[2].classList.contains('active'):
                var result = value1 * value2;
                break;
            case amal[3].classList.contains('active'):
                var result = value1 / value2;
                break;
            case amal[4].classList.contains('active'):
                var result = value1 ** value2;
                break;
            case amal[5].classList.contains('active'):
                var result = value1 % value2;
                break;
        }

        navv.innerHTML = result;

        for (var i = 0; i < amal.length; i++) {
            amal[i].classList.remove('active');
        }
        value1 = 0;
        value2 = 0;
    })

    min.addEventListener('click', function () {
        value2 = 0;
        value1 = 0;
        str = [];
        navv.innerHTML = '';
    })




    // ========================= loading ==================

    $(window).on('load', () => {
        $preloader = $('.preloader')
        $loader = $('.loader')
        $loader4 = $('.loader4')
    
        $preloader.delay(2000).fadeOut('slow')
        $loader.delay(1500).fadeOut('slow')
        $loader4.delay(1500).fadeOut('slow')
    })

});

