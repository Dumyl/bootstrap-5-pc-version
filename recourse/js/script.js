$(document).ready(function () {
    // owlcarousel
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        responsive: {
            100: {
                items: 1
            }
        }
    });
    // sticky bar
    $(window).scroll(function () {
        if (this.scrollY > 20) {
            $('.header-2').addClass("sticky");
        } else {
            $('.header-2').removeClass("sticky");
        }
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide up scroll
    $('.scroll-up-btn').click(function () {
        $('html').animate({
            scrollTop: 0
        });

    });

    // active link
    $(".header-2-1 li a").click(function (e) { 
        var current_link = $(this);
        var current_link_href = current_link.attr('href');
    
        $(".header-2-1 li a").removeClass('active');
        current_link.addClass('active');
        
    });


    /* amimation scolll */
    // $('.service-animate-1')
    //     .css('opacity', 0) // immediately hide element
    //     .waypoint(function (direction) {
    //         if (direction === 'down') {
    //             $(this.element).animate({
    //                 opacity: 1
    //             })
    //         } else {
    //             $(this.element).animate({
    //                 opacity: 0
    //             })
    //         }
    //     }, {
    //         offset: 'bottom-in-view'
    //     })
});