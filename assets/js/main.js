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


// Checkout page js




 // Quantity update logic
    document.querySelectorAll('.order-item').forEach(item => {
      const minus = item.querySelector('.minus');
      const plus = item.querySelector('.plus');
      const qtyEl = item.querySelector('.qty');
      const priceEl = item.querySelector('.price');
      const basePrice = parseFloat(priceEl.dataset.price);

      function updatePrice() {
        const qty = parseInt(qtyEl.textContent);
        priceEl.textContent = `$${(basePrice * qty).toFixed(2)}`;
        updateTotal();
      }

      minus.addEventListener('click', () => {
        let qty = parseInt(qtyEl.textContent);
        if (qty > 1) {
          qtyEl.textContent = qty - 1;
          updatePrice();
        }
      });

      plus.addEventListener('click', () => {
        let qty = parseInt(qtyEl.textContent);
        qtyEl.textContent = qty + 1;
        updatePrice();
      });
    });

    function updateTotal() {
      let total = 0;
      document.querySelectorAll('.price').forEach(el => {
        total += parseFloat(el.textContent.replace('$', ''));
      });
      document.getElementById('subtotal').textContent = `$${total.toFixed(2)}`;
      document.getElementById('total').textContent = `$${total.toFixed(2)}`;
    }

    document.getElementById('scheduleToggle').addEventListener('change', e => {
      document.getElementById('scheduleBox').style.display = e.target.checked ? 'block' : 'none';
    });

    function confirmOrder() {
      alert('✅ Order Confirmed! Thank you for shopping.');
    }





