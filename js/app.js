$(document).ready(function(){
    $('.video-slider').slick({
        dots: true,
        slidesToShow: 1,
        variableWidth: false,
        adaptiveHeight: true,
        prevArrow: '',
        nextArrow: "<img src='img/arrow.svg'>",
    });
});