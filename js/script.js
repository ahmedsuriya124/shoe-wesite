const shoes = [
  { id: 1, brand: "Nike", model: "Nike React Infinity Run Flyknit", size: 10, color: "Red", price: 120, image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/i1-665455a5-45de-40fb-945f-c1852b82400d/react-infinity-run-flyknit-mens-running-shoe-zX42Nc.jpg" },
  { id: 2, brand: "Nike", model: "Nike React Miler", size: 9, color: "Black", price: 180, image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/i1-5cc7de3b-2afc-49c2-a1e4-0508997d09e6/react-miler-mens-running-shoe-DgF6nr.jpg" },
  { id: 3, brand: "Nike", model: "Nike Air Zoom Pegasus 37", size: 11, color: "Blue", price: 75, image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/i1-33b0a0a5-c171-46cc-ad20-04a768703e47/air-zoom-pegasus-37-womens-running-shoe-Jl0bDf.jpg" },
  { id: 4, brand: "Nike", model: "Nike Joyride Run Flyknit", size: 8, color: "White", price: 85, image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/99a7d3cb-e40c-4474-91c2-0f2e6d231fd2/joyride-run-flyknit-womens-running-shoe-HcfnJd.jpg" },
  { id: 5, brand: "Nike", model: "Nike Mercurial Vapor 13 Elite FG", size: 12, color: "Gray", price: 100, image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/9dda6202-e2ff-4711-9a09-0fcb7d90c164/mercurial-vapor-13-elite-fg-firm-ground-soccer-cleat-14MsF2.jpg" },
  { id: 6, brand: "Converse", model: "Nike Phantom Vision Elite Dynamic Fit FG", size: 7, color: "Black", price: 60, image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/s1amp7uosrn0nqpsxeue/phantom-vision-elite-dynamic-fit-fg-firm-ground-soccer-cleat-19Kv1V.jpg" },
  { id: 7, brand: "New Balance", model: "Nike Phantom Venom Academy FG", size: 9, color: "Gray", price: 175, image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/whegph8z9ornhxklc8rp/phantom-venom-academy-fg-firm-ground-soccer-cleat-6JVNll.jpg" },
  { id: 8, brand: "Saucony", model: "Nike Mercurial Vapor 13 Elite Tech Craft FG", size: 10, color: "Pink", price: 140, image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/vhbwnkor8sxt8qtecgia/mercurial-vapor-13-elite-tech-craft-fg-firm-ground-soccer-cleat-l38JPj.jpg" },
  { id: 9, brand: "Asics", model: "Nike Mercurial Superfly 7 Pro MDS FG", size: 10, color: "Green", price: 160, image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/i1-a52a8aec-22dc-4982-961b-75c5f4c72805/mercurial-superfly-7-pro-mds-fg-firm-ground-soccer-cleat-mhcpdN.jpg" },
  { id: 10, brand: "ADIDAS", model: "NMD_R1 Flash Red", size: 8, color: "White", price: 65, image: "https://assets.adidas.com/images/h_320,f_auto,q_auto:sensitive,fl_lossy/90f85768e3894aeaab67aba0014a3379_9366/NMD_R1_Shoes_Red_FY9389_01_standard.jpg" },
  { id: 11, brand: "Nike", model: "Nike Air Max 90", size: 11, color: "Black", price: 90, image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/8439f823-86cf-4086-81d2-4f9ff9a66866/air-max-90-big-kids-shoe-1wzwJM.jpg" },
  { id: 12, brand: "Adidas", model: "Nike Air Max 90 LTR", size: 10, color: "Red", price: 130, image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/i1-620aeb37-1b28-44b0-9b14-5572f8cbc948/air-max-90-ltr-big-kids-shoe-hdNLQ5.jpg" },
  { id: 13, brand: "Puma", model: "Superstar", size: 9, color: "Blue", price: 80, image: "https://assets.adidas.com/images/h_320,f_auto,q_auto:sensitive,fl_lossy/12365dbc7c424288b7cdab4900dc7099_9366/Superstar_Shoes_White_FW3553_FW3553_01_standard.jpg" },
  { id: 14, brand: "Reebok", model: "Nike Renew Run", size: 12, color: "Gray", price: 110, image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/i1-73e54c0b-11a6-478b-9f90-bd97fcde872d/renew-run-big-kids-running-shoe-5Bpz93.jpg" },
  { id: 15, brand: "ADIDAS", model: "NMD_R1", size: 10, color: "Black", price: 120, image: "https://assets.adidas.com/images/h_320,f_auto,q_auto:sensitive,fl_lossy/99ca762cb9054caf82fbabc500fd146e_9366/NMD_R1_Shoes_Blue_FY9392_01_standard.jpg" }
  ,
  { id: 9, brand: "Asics", model: "Nike Mercurial Superfly 7 Pro MDS FG", size: 10, color: "Green", price: 160, image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/i1-a52a8aec-22dc-4982-961b-75c5f4c72805/mercurial-superfly-7-pro-mds-fg-firm-ground-soccer-cleat-mhcpdN.jpg" }

];
let cartArry = [];
let productCards = document.getElementById('product-cards');
let cartNumber = document.getElementById('cart-number');
let cartScreen = document.getElementById('cart-screen')

for (let i = 0; i < shoes.length; i++) {
  const e = shoes[i];
  const shoeCard = document.createElement('div');
  shoeCard.classList.add('col', 'mb-4');

  shoeCard.innerHTML = `
  <div class="product-card position-relative">
    <div class="card-img">
    <img src="${e.image}" alt="product-item" class="product-image img-fluid">
    <div class="cart-concern position-absolute d-flex justify-content-center">
    <div class="cart-button d-flex gap-2 justify-content-center align-items-center">
          <button  type="button" class="btn btn-light cartBtn"" data-bs-toggle="modal" data-bs-target="#modallong">
          <svg class="shopping-carriage">
          <use xlink:href="#shopping-carriage"></use>
          </svg>
          </button>
          
          </div>
          </div>
          <!-- cart-concern -->
          </div>
          <div class="card-detail d-flex justify-content-between align-items-center mt-3">
          <h3 class="card-title fs-6 fw-normal m-0">
          <a href="index.html">${e.model}</a>
          </h3>
          <span class="card-price fw-bold">$${e.price}</span>
    </div>
  </div>`;
  productCards.appendChild(shoeCard);
}

let cartBtns = document.querySelectorAll('.cartBtn');
let initialCart = 0
// cartBtn.addEventListener('click', () => {
//   initialCart++;
//   console.log(initialCart)
//   cartNumber.textContent = initialCart;
// });
// console.log(cartBtn);
let closeButton = false;
cartBtns.forEach((cartButton, k) => {
  cartButton.addEventListener('click', () => {
    closeButton = true;
    const shoeCart = document.createElement('div');
    shoeCart.classList.add('mini-cart','cart-list','p-0','mt-3');
    initialCart++;
    cartNumber.textContent = initialCart;
    shoeCart.innerHTML = `
    <div class="mini-cart-item d-flex border-bottom pb-3">
      <div class="col-lg-2 col-md-3 col-sm-2 me-4">
        <a href="#" title="product-image">
          <img src="${shoes[k].image}" class="img-fluid" alt="single-product-item">
        </a>
      </div>
      <div class="col-lg-9 col-md-8 col-sm-8">
        <div class="product-header d-flex justify-content-between align-items-center mb-3">
          <h4 class="product-title fs-6 me-5">${shoes[k].model}</h4>
          <button class="cart-close-btn">
            <svg class="close">
              <use xlink:href="#close"></use>
            </svg>
          </button>
        </div>
        <div class="quantity-price d-flex justify-content-between align-items-center">
          <div class="input-group product-qty">
            <button type="button"
              class="quantity-left-minus btn btn-light rounded-0 rounded-start btn-number"
              data-type="minus">
              <svg width="16" height="16">
                <use xlink:href="#minus"></use>
              </svg>
            </button>
            <input type="text" name="quantity" class="form-control input-number quantity" value="1">
            <button type="button" class="quantity-right-plus btn btn-light rounded-0 rounded-end btn-number"
              data-type="plus">
              <svg width="16" height="16">
                <use xlink:href="#plus"></use>
              </svg>
            </button>
          </div>
          <div class="price-code">
            <span class="product-price fs-6">$${shoes[k].price}</span>
          </div>
        </div>
        <!-- quantity-price -->
      </div>
    </div>`
    cartScreen.appendChild(shoeCart)


    const closeBtn = shoeCart.querySelector('.cart-close-btn');
    closeBtn.addEventListener('click', () => {
      shoeCart.remove();
    });
  });
});


(function ($) {

  "use strict";

  // init jarallax parallax
  var initJarallax = function () {
    jarallax(document.querySelectorAll(".jarallax"));

    jarallax(document.querySelectorAll(".jarallax-img"), {
      keepImg: true,
    });
  }

  // input spinner
  var initProductQty = function () {

    $('.product-qty').each(function () {

      var $el_product = $(this);
      var quantity = 0;

      $el_product.find('.quantity-right-plus').click(function (e) {
        e.preventDefault();
        var quantity = parseInt($el_product.find('.quantity').val());
        $el_product.find('.quantity').val(quantity + 1);
      });

      $el_product.find('.quantity-left-minus').click(function (e) {
        e.preventDefault();
        var quantity = parseInt($el_product.find('.quantity').val());
        if (quantity > 0) {
          $el_product.find('.quantity').val(quantity - 1);
        }
      });

    });

  }

  // init Chocolat light box
  var initChocolat = function () {
    Chocolat(document.querySelectorAll('.image-link'), {
      imageSize: 'contain',
      loop: true,
    })
  }

  // Animate Texts
  var initTextFx = function () {
    $('.txt-fx').each(function () {
      var newstr = '';
      var count = 0;
      var delay = 0;
      var stagger = 10;
      var words = this.textContent.split(/\s/);

      $.each(words, function (key, value) {
        newstr += '<span class="word">';

        for (var i = 0, l = value.length; i < l; i++) {
          newstr += "<span class='letter' style='transition-delay:" + (delay + stagger * count) + "ms;'>" + value[i] + "</span>";
          count++;
        }
        newstr += '</span>';
        newstr += "<span class='letter' style='transition-delay:" + delay + "ms;'>&nbsp;</span>";
        count++;
      });

      this.innerHTML = newstr;
    });
  }

  $(document).ready(function () {

    initProductQty();
    initJarallax();
    initChocolat();
    initTextFx();

    $(".user-items .search-item").click(function () {
      $(".search-box").toggleClass('active');
      $(".search-box .search-input").focus();
    });
    $(".close-button").click(function () {
      $(".search-box").toggleClass('active');
    });

    var breakpoint = window.matchMedia('(max-width:61.93rem)');

    if (breakpoint.matches === false) {

      var swiper = new Swiper(".main-swiper", {
        slidesPerView: 1,
        spaceBetween: 48,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        breakpoints: {
          900: {
            slidesPerView: 2,
            spaceBetween: 48,
          },
        },
      });

      // homepage 2 slider
      var swiper = new Swiper(".thumb-swiper", {
        direction: 'horizontal',
        slidesPerView: 6,
        spaceBetween: 6,
        breakpoints: {
          900: {
            direction: 'vertical',
            spaceBetween: 6,
          },
        },
      });
      var swiper2 = new Swiper(".large-swiper", {
        spaceBetween: 48,
        effect: 'fade',
        slidesPerView: 1,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        thumbs: {
          swiper: swiper,
        },
      });

    }

    // product single page
    var thumb_slider = new Swiper(".product-thumbnail-slider", {
      slidesPerView: 5,
      spaceBetween: 10,
      // autoplay: true,
      direction: "vertical",
      breakpoints: {
        0: {
          direction: "horizontal"
        },
        992: {
          direction: "vertical"
        },
      },
    });

    // product large
    var large_slider = new Swiper(".product-large-slider", {
      slidesPerView: 1,
      // autoplay: true,
      spaceBetween: 0,
      effect: 'fade',
      thumbs: {
        swiper: thumb_slider,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });



  }); // End of a document

  $(window).load(function () {
    $('.preloader').fadeOut();
  });

})(jQuery);