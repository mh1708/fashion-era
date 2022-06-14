$(document).ready(function() {
    $('.owl-one').owlCarousel({
        loop: true,
        dots: false,
        nav: true,
        navText: ['<i class="fa-solid fa-left-long" aria-hidden="true"></i>', '<i class="fa-solid fa-right-long" aria-hidden="true"></i>'],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            },
            1025: {
                items: 3
            },
            1026: {
                items: 4
            }
        }

    })
    $('.owl-two').owlCarousel({
        loop: true,
        dots: false,
        nav: true,
        navText: ['<i class="fa-solid fa-left-long" aria-hidden="true"></i>', '<i class="fa-solid fa-right-long" aria-hidden="true"></i>'],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            },
            1025: {
                items: 3
            },
            1026: {
                items: 4
            }
        }
    });
    $('.owl-thrid').owlCarousel({
        loop: true,
        dots: false,
        nav: true,
        navText: ['<i class="fa-solid fa-left-long" aria-hidden="true"></i>', '<i class="fa-solid fa-right-long" aria-hidden="true"></i>'],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });



});