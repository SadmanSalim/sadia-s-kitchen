$(document).ready(function () {
  // ===== Banner Slick =====
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
          dots: true,
        },
      },
    ],
  });

  // $('.menus').slick({
  //   arrows: true,
  //   infinite: true,
  //   slidesToShow: 4,
  //   slidesToScroll: 1,
  //   // centerMode: true,
  //   prevArrow: '<button type="button" class="slick-prev">&#10094;</button>',
  //   nextArrow: '<button type="button" class="slick-next">&#10095;</button>',
  //   responsive: [
  //     {
  //       breakpoint: 768,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //       },
  //     },
  //   ],
  // });

  $('.business-slider').slick({
    arrows: false,
    autoplay: true,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 9999,
        settings: 'unslick',
      },
      {
        breakpoint: 768,
        settings: {
          centerMode: true,
          centerPadding: '60px',
          slidesToShow: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  });

  /* =============================
     MENU JS SECTION START
  ============================= */
  const tabsContainer = document.querySelector('.food-menu-tabs-wrapper');
  const scrollLeftBtn = document.querySelector('.scroll-left-btn');
  const scrollRightBtn = document.querySelector('.scroll-right-btn');
  const menuTabs = document.querySelectorAll('.menu-tab-btn');
  const foodItems = document.querySelectorAll('.food-menu-item');
  const scrollAmount = 200;

  // Initial visibility
  if (scrollLeftBtn && scrollRightBtn) {
    scrollLeftBtn.style.display = 'none';
    scrollRightBtn.style.display = 'flex';
  }

  // Scroll event
  if (tabsContainer && scrollLeftBtn && scrollRightBtn) {
    tabsContainer.addEventListener('scroll', () => {
      scrollLeftBtn.style.display = tabsContainer.scrollLeft > 0 ? 'flex' : 'none';
      scrollRightBtn.style.display =
        tabsContainer.scrollLeft + tabsContainer.clientWidth >= tabsContainer.scrollWidth
          ? 'none'
          : 'flex';
    });

    // Scroll buttons click
    scrollLeftBtn.addEventListener('click', () => {
      tabsContainer.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    });

    scrollRightBtn.addEventListener('click', () => {
      tabsContainer.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    });
  }

  // Filter buttons
  menuTabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      menuTabs.forEach((t) => t.classList.remove('active'));
      tab.classList.add('active');

      const category = tab.dataset.category;
      foodItems.forEach((item) => {
        if (category === 'all' || item.dataset.category === category) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
              
  });


  document.addEventListener('DOMContentLoaded', function() {
            // Navigation functionality
            const navItems = document.querySelectorAll('.nav-item, .mobile-nav-item');
            
            navItems.forEach(item => {
                item.addEventListener('click', function(e) {
                    if (this.getAttribute('data-target')) {
                        e.preventDefault();
                        
                        // Remove active class from all items
                        navItems.forEach(navItem => {
                            navItem.classList.remove('active');
                        });
                        
                        // Add active class to clicked item
                        this.classList.add('active');
                        
                        // Hide all sections
                        document.querySelectorAll('.content-section').forEach(section => {
                            section.classList.remove('active');
                        });
                        
                        // Show target section
                        const targetId = this.getAttribute('data-target');
                        document.getElementById(targetId).classList.add('active');
                    }
                });
            });
            
            // Profile image hover effect
            const profileImg = document.querySelector('.profile-img');
            if (profileImg) {
                profileImg.addEventListener('click', function() {
                    alert('Profile picture change functionality would go here');
                });
            }
            
            // Add some interactive elements
            const orderCards = document.querySelectorAll('.order-card');
            orderCards.forEach(card => {
                card.addEventListener('click', function(e) {
                    if (!e.target.classList.contains('view-details') && !e.target.closest('.view-details')) {
                        this.querySelector('.view-details').click();
                    }
                });
            });
        });
  /* =============================
     MENU JS SECTION END
  ============================= */



  // ===== CART SIDEBAR =====
  const cartButton = document.querySelector(".cart");
  const cartSidebar = document.querySelector(".cart-sidebar");
  const closeCart = document.querySelector(".cart-close");

  if (cartButton && cartSidebar && closeCart) {
    // Toggle sidebar
    cartButton.addEventListener("click", (e) => {
      e.stopPropagation(); // prevent bubbling issues
      cartSidebar.classList.toggle("active");
    });

    // Close sidebar
    closeCart.addEventListener("click", () => {
      cartSidebar.classList.remove("active");
    });

    // Optional: Close if clicked outside
    document.addEventListener("click", (e) => {
      if (!cartSidebar.contains(e.target) && !cartButton.contains(e.target)) {
        cartSidebar.classList.remove("active");
      }
    });
  }
});







