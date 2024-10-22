(function ($) {
    $(document).ready(function () {
      $(".of-iconmntop").click(function () {
        $(".of-menutop").toggleClass("of-mnshow");
      });
  
      $(".of-search").click(function () {
        $(".of-searchbox").show(200);
      });
  
      $(".of-closesearch").click(function () {
        $(".of-searchbox").hide(200);
      });
  
      $(document).on("click", "[toscroll]", function (e) {
        e.preventDefault();
        var link = $(this).attr("toscroll");
        if ($(link).length > 0) {
          var posi = $(link).offset().top - 50;
          $("body,html").animate(
            {
              scrollTop: posi,
            },
            600
          );
        }
      });
  
      //rule
      $(".js--more-rule").click(function () {
        $(".st-rule__viewmore").hide();
        $(".st-rule__content").css("height", "auto");
      });
      $(".js--more-shop").on("click", function () {
        $(".st-experience .list-shop").addClass("list-full");
        $(".st-experience .view-more").hide();
      });
      $(".fs-header__top__logo .fs-header-icon i").on("click", function () {
        $("html").addClass("noscroll");
      });
      $(" .fs-menuleft-block .fs-menuleft-top .menu-icon").on(
        "click",
        function () {
          $("html").removeClass("noscroll");
        }
      );
  
      // open modal talkshow
      $(".js--talkshow").each(function () {
        $(this).click(function () {
          var videoId = $(this).attr("id-video");
          $("html").addClass("no-scroll");
          $(".modal-youtube").addClass("open");
          $(".js--video-iframe").attr(
            "src",
            `https://www.youtube.com/embed/${videoId}?autoplay=1`
          );
        });
      });
      //js close modal
      $(".modal-youtube").each(function () {
        var parent = $(this);
        var btnClose = $(this).find(".js-modal-close");
        btnClose.click(function () {
          parent.removeClass("open");
          $(".js--video-iframe").attr("src", "");
          $("html").removeClass("no-scroll");
        });
      });
      //menu
      // cache the navigation links
      var $navigationLinks = $("#navigation > ul > li > a");
      // cache (in reversed order) the sections
      var $sections = $($(".backtoschool").get().reverse());
  
      // map each section id to their corresponding navigation link
      var sectionIdTonavigationLink = {};
      $sections.each(function () {
        var id = $(this).attr("id");
        sectionIdTonavigationLink[id] = $(
          "#navigation > ul > li > a[href=\\#" + id + "]"
        );
      });
  
      // throttle function, enforces a minimum time interval
      function throttle(fn, interval) {
        var lastCall, timeoutId;
        return function () {
          var now = new Date().getTime();
          if (lastCall && now < lastCall + interval) {
            // if we are inside the interval we wait
            clearTimeout(timeoutId);
            timeoutId = setTimeout(function () {
              lastCall = now;
              fn.call();
            }, interval - (now - lastCall));
          } else {
            // otherwise, we directly call the function
            lastCall = now;
            fn.call();
          }
        };
      }
  
      function highlightNavigation() {
        // get the current vertical position of the scroll bar
        var scrollPosition = $(window).scrollTop();
  
        // iterate the sections
        $sections.each(function () {
          var currentSection = $(this);
          // get the position of the section
          var sectionTop = currentSection.offset().top;
  
          // if the user has scrolled over the top of the section
          if (scrollPosition >= sectionTop - 70) {
            // get the section id
            var id = currentSection.attr("id");
            // get the corresponding navigation link
            var $navigationLink = sectionIdTonavigationLink[id];
  
            // if the link is not active
            if (!$navigationLink.hasClass("active")) {
              // remove .active class from all the links
  
              $navigationLinks.removeClass("active");
              // add .active class to the current link
              $navigationLink.addClass("active");
            }
            // we have found our section, so we return false to exit the each loop
            return false;
          }
        });
      }
      $(window).scroll(throttle(highlightNavigation, 100));
  
      $(".cs-dropdown").cDropdown();
  
      $(".js--swap-item").each(function () {
        $(this)
          .children()
          .click(function () {
            $(this).addClass("active");
            $(this).siblings().removeClass("active");
          });
      });
  
      //modal
      $(".js--open-modal").each(function () {
        var btn = $(this).find(".btn-more");
        btn.click(function () {
          var dataTaget = $(this).attr("data-target");
          $("." + dataTaget).show();
          $("html").addClass("no-scroll");
        });
      });
      $(".js--close-modal").click(function () {
        $(".popup-modal").hide();
        $("html").removeClass("no-scroll");
      });
      // slide
      var swiper = new Swiper(".commemorative-swiper", {
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
      // doi thong so ky thuat
      $(".js--change-info")
        .children()
        .click(function () {
          var attrStorage = $(this).attr("data-storage");
          $(".info .detail-storage .detail").removeClass("active");
          $(".detail." + attrStorage).addClass("active");
        });
      const macData = {
        "gray-8cpu-256gb": {
          url: "images/mac-gray.png",
          price: "34.490.000đ",
          delPrice: "35.990.000đ",
        },
        "silver-8cpu-256gb": {
          url: "images/mac-silver.png",
          price: "34.490.000đ",
          delPrice: "35.990.000đ",
        },
        "gray-8cpu-512gb": {
          url: "images/mac-gray.png",
          price: "39.490.000đ",
          delPrice: "41.990.000đ",
        },
        "silver-8cpu-512gb": {
          url: "images/mac-silver.png",
          price: "39.490.000đ",
          delPrice: "41.990.000đ",
        },
      };
  
      // booking
      $(".js--macbook-booking").each(function () {
        var parent = $(this);
        var list = parent.find(".js--change-product");
        var color = parent.find(".order__color");
        var chip = parent.find(".booking-chip");
        var storage = parent.find(".booking-storage");
        list.each(function () {
          $(this)
            .children()
            .click(function () {
              var colorActive = color
                .find(".order__color-item.active")
                .attr("data-color");
              var chipActive = chip.find("li.active").attr("data-spec");
              var storageActive = storage.find("li.active").attr("data-storage");
              var attrData = `${colorActive}-${chipActive}-${storageActive}`;
  
              const product = `${attrData}`;
              const objProduct = macData[product];
              var imgProduct = parent.find(".js--img-wrapper img");
              imgProduct.attr("src", objProduct.url);
              var priceProduct = parent.find(".js--price-wrapper");
              priceProduct.text(objProduct.price);
              var delPriceProduct = parent.find(".js--del-price");
              delPriceProduct.text(objProduct.delPrice);
            });
        });
      });
    });
  
    //dropdown
  })(window.jQuery);
  
  jQuery.fn.extend({
    cDropdown: function () {
      return this.each(function () {
        var containermenu = $(this);
        var button = containermenu.find(".cs-dropdown-button");
        var menu = containermenu.find(".cs-dropdown-menu");
        var list = containermenu.find(".cs-dropdown-menu-wrapper");
        var item = list.children();
        var option = button.find("span");
        button.click(function (e) {
          menu.addClass("open");
        });
        item.click(function () {
          $(this).siblings().removeClass("active");
          $(this).addClass("active");
          var txt = $(this).find("span").text();
          option.text(txt);
          menu.removeClass("open");
        });
        $(document).click(function (e) {
          e.stopPropagation();
          var container = containermenu;
          if (container.has(e.target).length === 0) {
            menu.removeClass("open");
          }
        });
      });
    },
  });
  