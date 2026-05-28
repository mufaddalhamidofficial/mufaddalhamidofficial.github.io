AOS.init({
  duration: 800,
  easing: "slide",
});

(function ($) {
  "use strict";

  $(window).stellar({
    responsive: true,
    parallaxBackgrounds: true,
    parallaxElements: true,
    horizontalScrolling: false,
    hideDistantElements: false,
    scrollProperty: "scroll",
  });

  var fullHeight = function () {
    $(".js-fullheight").css("height", $(window).height());
    $(window).resize(function () {
      $(".js-fullheight").css("height", $(window).height());
    });
  };
  fullHeight();

  // loader
  var loader = function () {
    setTimeout(function () {
      if ($("#ftco-loader").length > 0) {
        $("#ftco-loader").removeClass("show");
      }
    }, 1);
  };
  loader();

  // Scrollax
  $.Scrollax();

  // Burger Menu
  var burgerMenu = function () {
    $("body").on("click", ".js-fh5co-nav-toggle", function (event) {
      event.preventDefault();

      if ($("#ftco-nav").is(":visible")) {
        $(this).removeClass("active");
      } else {
        $(this).addClass("active");
      }
    });
  };
  burgerMenu();

  var onePageClick = function () {
    $(document).on("click", '#ftco-nav a[href^="#"]', function (event) {
      event.preventDefault();

      var href = $.attr(this, "href");

      $("html, body").animate(
        {
          scrollTop: $($.attr(this, "href")).offset().top - 70,
        },
        500,
        function () {
          // window.location.hash = href;
        },
      );
    });
  };

  onePageClick();

  var carousel = function () {
    $(".home-slider").owlCarousel({
      loop: true,
      autoplay: true,
      margin: 0,
      animateOut: "fadeOut",
      animateIn: "fadeIn",
      nav: false,
      autoplayHoverPause: false,
      items: 1,
      navText: ["<span class='ion-md-arrow-back'></span>", "<span class='ion-chevron-right'></span>"],
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 1,
        },
        1000: {
          items: 1,
        },
      },
    });
  };
  carousel();

  $("nav .dropdown").hover(
    function () {
      var $this = $(this);
      // 	 timer;
      // clearTimeout(timer);
      $this.addClass("show");
      $this.find("> a").attr("aria-expanded", true);
      // $this.find('.dropdown-menu').addClass('animated-fast fadeInUp show');
      $this.find(".dropdown-menu").addClass("show");
    },
    function () {
      var $this = $(this);
      // timer;
      // timer = setTimeout(function(){
      $this.removeClass("show");
      $this.find("> a").attr("aria-expanded", false);
      // $this.find('.dropdown-menu').removeClass('animated-fast fadeInUp show');
      $this.find(".dropdown-menu").removeClass("show");
      // }, 100);
    },
  );

  $("#dropdown04").on("show.bs.dropdown", function () {
    console.log("show");
  });

  // scroll
  var scrollWindow = function () {
    $(window).scroll(function () {
      var $w = $(this),
        st = $w.scrollTop(),
        navbar = $(".ftco_navbar"),
        sd = $(".js-scroll-wrap");

      if (st > 150) {
        if (!navbar.hasClass("scrolled")) {
          navbar.addClass("scrolled");
        }
      }
      if (st < 150) {
        if (navbar.hasClass("scrolled")) {
          navbar.removeClass("scrolled sleep");
        }
      }
      if (st > 350) {
        if (!navbar.hasClass("awake")) {
          navbar.addClass("awake");
        }

        if (sd.length > 0) {
          sd.addClass("sleep");
        }
      }
      if (st < 350) {
        if (navbar.hasClass("awake")) {
          navbar.removeClass("awake");
          navbar.addClass("sleep");
        }
        if (sd.length > 0) {
          sd.removeClass("sleep");
        }
      }
    });
  };
  scrollWindow();

  var counter = function () {
    $("#section-counter, .hero-wrap, .ftco-counter, .ftco-about").waypoint(
      function (direction) {
        if (direction === "down" && !$(this.element).hasClass("ftco-animated")) {
          var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(",");
          $(".number").each(function () {
            var $this = $(this),
              num = $this.data("number");
            console.log(num);
            $this.animateNumber(
              {
                number: num,
                numberStep: comma_separator_number_step,
              },
              3000,
            );
          });
        }
      },
      { offset: "95%" },
    );
  };
  counter();

  var counter1 = function () {
    $("#section-counter, .hero-wrap, .ftco-counter, .ftco-about").waypoint(
      function (direction) {
        if (direction === "down" && !$(this.element).hasClass("ftco-animated")) {
          var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(",");
          $(".number1").each(function () {
            var $this = $(this),
              num = $this.data("number1");
            console.log(num);
            $this.animateNumber(
              {
                number: num,
                numberStep: function (now, tween) {
                  var target = $(tween.elem);
                  target.prop("number1", now).text(now.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,"));
                },
              },
              2000,
              function () {
                $this.text($this.text() + "+");
              },
            );
          });
        }
      },
      { offset: "95%" },
    );
  };
  counter1();

  var contentWayPoint = function () {
    var i = 0;
    $(".ftco-animate").waypoint(
      function (direction) {
        if (direction === "down" && !$(this.element).hasClass("ftco-animated")) {
          i++;

          $(this.element).addClass("item-animate");
          setTimeout(function () {
            $("body .ftco-animate.item-animate").each(function (k) {
              var el = $(this);
              setTimeout(
                function () {
                  var effect = el.data("animate-effect");
                  if (effect === "fadeIn") {
                    el.addClass("fadeIn ftco-animated");
                  } else if (effect === "fadeInLeft") {
                    el.addClass("fadeInLeft ftco-animated");
                  } else if (effect === "fadeInRight") {
                    el.addClass("fadeInRight ftco-animated");
                  } else {
                    el.addClass("fadeInUp ftco-animated");
                  }
                  el.removeClass("item-animate");
                },
                k * 50,
                "easeInOutExpo",
              );
            });
          }, 100);
        }
      },
      { offset: "95%" },
    );
  };
  contentWayPoint();

  // magnific popup
  $(".image-popup").magnificPopup({
    type: "image",
    closeOnContentClick: true,
    closeBtnInside: false,
    fixedContentPos: true,
    mainClass: "mfp-no-margins mfp-with-zoom", // class to remove default margin from left and right side
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1], // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      verticalFit: true,
    },
    zoom: {
      enabled: true,
      duration: 300, // don't foget to change the duration also in CSS
    },
  });

  $(".popup-youtube, .popup-vimeo, .popup-gmaps").magnificPopup({
    disableOn: 700,
    type: "iframe",
    mainClass: "mfp-fade",
    removalDelay: 160,
    preloader: false,

    fixedContentPos: false,
  });

  const items = $(".square");
  items.css("height", items.width());

  $(document).ready(function () {
    $("img").click(function () {
      this.requestFullscreen();
    });
  });

  $(".project").click(function () {
    var src = window.location.origin + "/" + $(this).attr("data-url");
    console.log(src);
    $("<div>")
      .css({
        background: "RGBA(0,0,0,.5) url(" + src + ") no-repeat center",
        backgroundSize: "contain",
        width: "100%",
        height: "100%",
        position: "fixed",
        zIndex: "10000",
        top: "0",
        left: "0",
        cursor: "zoom-out",
      })
      .click(function () {
        $(this).remove();
      })
      .appendTo("body");
  });
  $("#contact-form").submit(function (e) {
    e.preventDefault(); // Prevent the default form submission

    // Get the form data
    var formData = {
      name: $("#contact-name").val(),
      email: $("#contact-email").val(),
      subject: $("#contact-subject").val(),
      phone: $("#contact-phone").val(),
      message: $("#contact-message").val(),
    };

    // Get the URL from the data attribute
    var url = "https://sendcontactemail-7bpdznwgqa-uc.a.run.app/";

    // Send the data to the server using AJAX
    $.ajax({
      type: "POST",
      url: url,
      data: formData,
      success: function (response) {
        // Handle the server's response (e.g., show a success message)
        console.log(response);
        $("#form-message").text("The message has been sent, I will contact you soon");
        $("#contact-name").val("");
        $("#contact-email").val("");
        $("#contact-subject").val("");
        $("#contact-phone").val("");
        $("#contact-message").val("");
      },
      error: function (response) {
        // Handle the server's response (e.g., show a success message)
        console.log(response);
        $("#form-message").text("Failed to send message, please try again later or contact on email above");
      },
    });
  });
})(jQuery);
// function presentFullScreen(img) {
//   const fullPage = document.querySelector('#fullpage');
//   fullPage.style.backgroundImage = 'url(' + window.location.origin + '/' + img + ')';
//   fullPage.style.display = 'block';
//   console.log(fullPage.style);
// }
