$('.home-slider').slick({
    slidesToShow: 1,
    fade: true,
    appendArrows: '.home-slider-nav',
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>'
});

$('.choosing-a-home-slider').slick({
    slidesToShow: 3,
    variableWidth: true,
    appendArrows: '.choosing-a-home-slider__nav',
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>'
});

$('.news-slider').slick({
    slidesToShow: 4,
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>'
});