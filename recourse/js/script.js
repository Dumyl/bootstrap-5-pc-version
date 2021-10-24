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


    // animation
    $('[data-aos]').parent().addClass('all-animate');
});