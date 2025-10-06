$(document).ready(function(){
    $('.banner').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 5000,
        fade: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slick-prev">&#10094;</button>',
        nextArrow: '<button type="button" class="slick-next">&#10095;</button>',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    dots: true
                }
            }
        ]
    });
    // $('.menus').slick({
    //     arrows: true,
    //     infinite: true,
    //     slidesToShow: 4,
    //     slidesToScroll: 1,
    //     // centerMode: true,
    //     prevArrow: '<button type="button" class="slick-prev">&#10094;</button>',
    //     nextArrow: '<button type="button" class="slick-next">&#10095;</button>',
    //     responsive: [
    //         {
    //             breakpoint: 768,
    //             settings: {
    //                 slidesToShow: 1,
    //                 slidesToScroll: 1
    //             }
    //         }
    //     ]
    //   });
    $('.business-slider').slick({
      arrows: false,
      autoplay: true,
      focusOnSelect: true,
      responsive: [
        {
          breakpoint: 9999,
          settings: "unslick"
        },
        {
          breakpoint: 768,
          settings: {
            centerMode: true,
            centerPadding: '60px',
            slidesToShow: 1,
            arrows: false
          }
        },
        {
          breakpoint: 480,
          settings: {
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1,
            arrows: false
          }
        }
      ]
    });
              
  });





