$(document).ready(function () {
    // customer review
    $('.team-review').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        responsive: {
            100: {
                items: 1
            }
        }
    });

    // client js
    $(".blog-06").owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 3,
            },
            1000: {
                items: 5,
            },
        },
    });
    // sticky
    $(window).scroll(function () {
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
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
    $(".nav-list .nav-item .nav-link").click(function (e) {
        var current_link = $(this);
        var current_link_href = current_link.attr('href');

        $(".nav-list .nav-item .nav-link").removeClass('active');
        current_link.addClass('active');

    });


    // animation
    $('[data-aos]').parent().addClass('all-animate');
});