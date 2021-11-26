$('.home-slider').slick({
    slidesToShow: 1,
    fade: true,
    dots: true,
    arrows: false,
    // appendArrows: '.home-slider-nav',
    // prevArrow: '<button type="button" class="slick-prev"></button>',
    // nextArrow: '<button type="button" class="slick-next"></button>'
    responsive: [
        {
            breakpoint: 576,
            settings: {
                asNavFor: ".home-slider-content"
            }
        }
    ]
});

$('.home-slider-content').slick({
    slidesToShow: 1,
    fade: true,
    arrows: false,
    asNavFor: '.home-slider'
});


$('.choosing-a-home__img').slick({
    slidesToShow: 1,
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
    fade: true,

});

$('.btn-burger').on('click', function () {
   $('.mobile-menu').fadeToggle();
});

$('.btn-close').on('click', function () {
    $('.mobile-menu').fadeOut();
});

//плавный скролл
$(document).ready(function () {
    $(".go_to").on("click", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top,
            heightHeader = $('header').outerHeight();

        $('body,html').animate({scrollTop: top - heightHeader}, 500);
        $('.mobile-menu').fadeOut();
    });
});
//плавный скролл end

$('[name="phone"]').mask('+7 (999) 999-99-99');

$('.btn-plane').on('click', function (e) {
    e.preventDefault();
    var
        $this = $(this),
        img1 = $(this).parent('.type-cottage__img').find('.img-photo-house'),
        img2 = $(this).parent('.type-cottage__img').find('.img-plane-house');

    if(!$this.hasClass('trigger')){
        $this.addClass('trigger');
        $this.find('.btn-text').html('Фото дома');

        img2.show();
        img1.hide();

    } else {
        $this.removeClass('trigger');
        $this.find('.btn-text').html('Планировка');

        img1.show();
        img2.hide();
    }
});

// header fised
$(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
        $('header').addClass('fixed');
    } else {
        $('header').removeClass('fixed');
    }
});
