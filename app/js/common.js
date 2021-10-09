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
    nextArrow: '<button type="button" class="slick-next"></button>',
    responsive: [

        {
            breakpoint: 768,
            settings: {
                variableWidth: false,
                slidesToShow: 1,
            }
        }

    ]
});

$('.news-slider').slick({
    slidesToShow: 4,
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>',
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
            }
        }

    ]
});

$('.btn-burger').on('click', function () {
   $('.mobile-menu').fadeToggle();
});

$('.btn-close').on('click', function () {
    $('.mobile-menu').fadeOut();
});

//плавный скролл
$('.go_to').on('click', function (e) {
    e.preventDefault();
    var scroll_el = $(this).attr('href');
    if ($(scroll_el).length != 0) {
        $('html, body').animate({
            scrollTop: $(scroll_el).offset().top
        }, 500);
    }
    $('.mobile-menu').fadeOut();
    return false;
});
//плавный скролл end

$('[name="phone"]').mask('+7 (999) 999-99-99');