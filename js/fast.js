$(document).ready(function () {

    $('.link1').on('click', function () {

        $('li a').removeClass('active');
        $(this).addClass('active');

        $('.two').animate({
            top: -1200,

        }, 1500)
        $('.one').animate({
            top: 25,
        }, 1500)
        $('.three').animate({
            top: -2000,
        }, 1500)
        $('.four').animate({
            top: -2000,
        }, 1500)
        $('.five').animate({
            top: -1000,
        }, 1500)
        $('.col-lg-2 ul').animate({
            marginTop: 0,
        }, 1500);
    })

    $('.link2').on('click', function () {

        $('li a').removeClass('active');
        $(this).addClass('active');

        $('.two').animate({
            top: 25,
        }, 1500)
        $('.one').animate({
            top: -1200,

        }, 1500)
        $('.three').animate({
            top: -2000,

        }, 1500)

        $('.four').animate({
            top: -2000,
        }, 1500)
        $('.five').animate({
            top: -1000,
        }, 1500)
        $('.col-lg-2 ul').animate({
            marginTop: 0,
        }, 1500);
    })
    $('.link3').on('click', function () {
        $('li a').removeClass('active');
        $(this).addClass('active');

        $('.two').animate({
            top: -1200,
        }, 1500)
        $('.one').animate({
            top: -1000,
        }, 1500)
        $('.three').animate({
            top: 25,
        }, 1500)
        $('.four').animate({
            top: -2000,
        }, 1500)
        $('.five').animate({
            top: -1000,
        }, 1500)
        $('.col-lg-2 ul').animate({
            marginTop: 0,
        }, 1500);
    })
    $('.link4').on('click', function () {
        $('li a').removeClass('active');
        $(this).addClass('active');

        $('.two').animate({
            top: -1200,
        }, 1500)
        $('.one').animate({
            top: -1000,
        }, 1500)
        $('.three').animate({
            top: -2000,
        }, 1500)
        $('.four').animate({
            top: 25,
        }, 1500)
        $('.five').animate({
            top: -1000,
        }, 1500)
        $('.col-lg-2 ul').animate({
            marginTop: 0,
        }, 1500);
    })
    $('.link5').on('click', function () {

        $('li a').removeClass('active');
        $(this).addClass('active');

        $('.col-lg-2 ul').animate({
            marginTop: -1000,
        }, 1500);
        $('.two').animate({
            top: -1200,
        }, 1500)
        $('.one').animate({
            top: -1000,
        }, 1500)
        $('.three').animate({
            top: -2000,
        }, 1500)
        $('.four').animate({
            top: -2000,
        }, 1500)

        $('.five').animate({
            top: 25,
        }, 7000)
    })

    let $sum = 0;
    let $num = 0;

    $('.fa-minus').hide();

    $('.fa-plus').on('click', function () {
        $(this).parent().parent().find('.fa-minus').show(400);
        $(this).parent().parent().find('.num').show(200);
        $num++;

        let $id = $(this).parent().parent().find('.price').attr('data');
        $sum += +$id;

        $(this).parent().parent().find('.num').html($num);

    })
    $('.fa-minus').on('click', function () {
        $num--;

        let $id = $(this).parent().parent().find('.price').attr('data');
        $(this).parent().parent().find('.num').html($num);
        $sum += -$id;

        if ($num < 1) {
            $(this).parent().parent().find('.num').hide(200);
            $(this).hide(200);
        }

    })

    $('.fa-check').hide(1000);
    let $names = "<br>";
    let $nums;
    $('.next').on('click', function () {

        $(this).parent().find('.fa-check').show(400);

        $nums = $(this).parent().find('.price').attr('data');
        $names += $(this).parent().find('.names').html() +
            " _ _ _ _ _ _ _ _ _ " + $num + " _ _ _ _ _ " + $nums * $num + "$" + "<br>" ;
        console.log($names);
        $num = 0;

    })

    $('.link5').on('click', function () {
        $('.texts').html($names);
        $('.sum').html("<br>" + "==================================" + "<br>" + "Total:  " + $sum + "$");
    })

    $('.fa-caret-up').hide();

    $('.fa-caret-down').on('click', function () {
        $('.col-lg-2 ul').animate({
            marginTop: -60,
        }, 1500);
        $('.fa-caret-up').show();
        $('.fa-caret-down').hide();
    })

    $('.fa-caret-up').on('click', function () {
        $('.col-lg-2 ul').animate({
            marginTop: -1000,
        }, 1500);
        $('.fa-caret-up').hide();
        $('.fa-caret-down').show();
    })

    $('.good').on('click', function () {
        $('.fa-caret-up').hide();
        $('.fa-caret-down').show();

        $('.five').animate({
            top: -1000,
        }, 2000)

        $sum = 0;
        $num = 0;
        $('.fa-check').hide();
        $('.fa-minus').hide();

        $('.num').html('');
        $('li a').removeClass('active');
        $('.texts').html('');
        $('.sum').html('');
        $names = "<br>";
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