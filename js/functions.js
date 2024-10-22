(function ($) {
    $(document).ready(function () {

        $('.of-iconmntop').click(function () {
            $('.of-menutop').toggleClass('of-mnshow');
        });

        $('.of-search').click(function () {
            $('.of-searchbox').show(200);
        });

        $('.of-closesearch').click(function () {
            $('.of-searchbox').hide(200);
        });


        $(window).bind('scroll', function () {
            var navHeight = $(window).height();
            if ($(window).scrollTop() > navHeight) {
                $('.ss-mnbar').addClass('fixed');
            } else {
                $('.ss-mnbar').removeClass('fixed');
            }
        });

        $(document).on("click", "[toscroll]", function (e) {
            e.preventDefault();
            var link = $(this).attr("toscroll");
            if ($(link).length > 0) {
                var posi = $(link).offset().top - 50;
                $("body,html").animate({
                    scrollTop: posi
                }, 1000);
            }
        });

        $('.fs-header__top__logo .fs-header-icon i').on('click', function () {
            $('html').addClass('noscroll');
        });
        $(' .fs-menuleft-block .fs-menuleft-top .menu-icon').on('click', function () {
            $('html').removeClass('noscroll');
        });

        //rule
        $(".js--more-rule").click(function () {
            $(".st-rule__viewmore").hide();
            $(".st-rule__content").css("height", "auto");
        });
        $('.js--more-shop').on('click', function () {
            $('.st-experience .list-shop').addClass('list-full');
            $('.st-experience .view-more').hide();
        })
        $(".fs-header__top__logo .fs-header-icon i").on("click", function () {
            $("html").addClass("noscroll");
        });
        $(" .fs-menuleft-block .fs-menuleft-top .menu-icon").on("click", function () {
            $("html").removeClass("noscroll");
        });

        // modal
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
            $("html").removeClass("no-scroll data-scroll");
        });


        //readmore
        var btnReadmore = $(".js-readmore");
        var card = $(".s-features__card");
        card.slice(0, 3).show();

        btnReadmore.click(function () {
            var wrapper = $(".s-features__wrapper");
            console.log(123);
            wrapper.toggleClass("active");
            $(this).toggleClass("active");

            if (wrapper.hasClass("active")) {
                card.show();
            } else {
                card.hide();
                card.slice(0, 3).show();
            }
        });


        //dropdown
        $('.cs-dropdown').cDropdown();
        //item wrapper
        $('.js--item-wrapper').each(function () {
            $(this).children().click(function () {
                $(this).siblings().removeClass('active');
                $(this).addClass('active');
            })
        });
        //slide 1
        var swiper1 = new Swiper('.macbook-slide1 .swiper-container', {
            pagination: {
                el: ".macbook-slide1 .swiper-pagination",
                clickable: true,
            },
            navigation: {
                nextEl: ".macbook-slide1  .swiper-button-next",
                prevEl: ".macbook-slide1  .swiper-button-prev",
            },
        });
        //slide 1
        var swiper2 = new Swiper('.macbook-slide2 .swiper-container', {
            pagination: {
                el: ".macbook-slide2 .swiper-pagination",
                clickable: true,
            },
            navigation: {
                nextEl: ".macbook-slide2 .swiper-button-next",
                prevEl: ".macbook-slide2 .swiper-button-prev",
            },
        });

        //specifi
        $('.js--wrap-specifi li').click(function () {
            // var dtm = $(this).attr('data-specifi');
            // $('.specifi-list .detail').removeClass('active');
            // $('.' + dtm).addClass('active');
        })

        var swiper3 = new Swiper('.specifi .swiper-container', {
            pagination: {
                el: ".specifi .swiper-pagination",
                clickable: true,
            },
        });

        //menu
        // cache the navigation links
        var $navigationLinks = $('#navigation > ul > li > a');
        // cache (in reversed order) the sections
        var $sections = $($(".macbook-pro").get().reverse());

        // map each section id to their corresponding navigation link
        var sectionIdTonavigationLink = {};
        $sections.each(function () {
            var id = $(this).attr('id');
            sectionIdTonavigationLink[id] = $('#navigation > ul > li > a[href=\\#' + id + ']');
        });

        // throttle function, enforces a minimum time interval
        function throttle(fn, interval) {
            var lastCall, timeoutId;
            return function () {
                var now = new Date().getTime();
                if (lastCall && now < (lastCall + interval)) {
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
                    var id = currentSection.attr('id');
                    // get the corresponding navigation link
                    var $navigationLink = sectionIdTonavigationLink[id];

                    // if the link is not active
                    if (!$navigationLink.hasClass('active')) {
                        // remove .active class from all the links

                        $navigationLinks.removeClass('active');
                        // add .active class to the current link
                        $navigationLink.addClass('active');
                    }
                    // we have found our section, so we return false to exit the each loop
                    return false;
                }
            });
        }
        $(window).scroll(throttle(highlightNavigation, 100));
        $('.popup-bank').each(function () {
            var container = $(this);
            var cls = $(this).find('.js--close-popup');
            cls.click(function () {
                container.removeClass('open');
                $('html').removeClass('no-scroll');
            });
        });

        //Thể lệ + danh sách đặt hàng
        if ($(window).width < 992) {

        } else {
            $('.btn_').mouseover(function () {
                $(this).addClass('active');
            }).mouseout(function () {
                $(this).removeClass('active');
            });
        }
        let previousScrollY = 0;
        $(document).on('show.bs.modal', () => {
            previousScrollY = window.scrollY;
            $('html').addClass('modal-open').css({
                marginTop: -previousScrollY,
                overflow: 'hidden',
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                position: 'fixed',
            });
        }).on('hidden.bs.modal', () => {
            $('.modal .form-control').val('');
            $('html').removeClass('modal-open').css({
                marginTop: 0,
                overflow: 'visible',
                left: 'auto',
                right: 'auto',
                top: 'auto',
                bottom: 'auto',
                position: 'static',
            });
            window.scrollTo(0, previousScrollY);
        });
        // check danh sach
        $('.err').hide();
        $('#p1s4rad').change(function () {
            if ($(this).is(':checked')) {
                $('.err').show();
                $('.data,.ppup-foot').hide();
            } else {
                $('.data,.ppup-foot').show();
                $('.err').hide();
            }
        });
        // no scroll body
        $('[data-toggle*="modal"]').on('click', function () {
            $('html').addClass('data-scroll');

        });
        $('.modal').on('click', function () {
            $('html').removeClass('data-scroll');
        });
        //
        $('.js--open-mac-popup').click(function () {
            $('.popup-booking.popup-phone').addClass('open');
            $('html').addClass('no-scroll');
        });
        $('.js--open-bank-popup').click(function () {
            $('.popup-bank').addClass('open');
            $('html').addClass('no-scroll');
        })


        //phone-booking
        // $('.js--mac-booking').macBooking(macData);
        //watch-booking
        // $('.js--watch-booking').watchBooking(watchData);
        //watch-booking
        // $('.js--ipad-booking').ipadBooking(ipadData);
        // popup
        $('.js--popup-booking').each(function () {
            var container = $(this);
            var cls = $(this).find('.js--close-popup');
            var complete = container.find('.popup-complete');
            var btn = container.find('.btn-booking');
            var popupBox = container.find('.popup-box');
            cls.click(function () {
                container.removeClass('open');
                $('html').removeClass('no-scroll');
            })
            btn.click(function () {
                popupBox.hide();
                complete.show();
            })
        })
        //update
        //show content

        $('.st-update__btn').each(function () {
            const that = $(this),
                btnShow = that.find('.btn-show');

            btnShow.click(function () {
                const stUpdate = $(this).closest('.st-update');
                // console.log($(this), stUpdate);
                if (stUpdate.hasClass('open')) {
                    stUpdate.removeClass('open');
                    stUpdate.find('.btn-show span').text('XEM THÊM');
                    stUpdate.find('.btn-show').attr('toscroll', '.st-update__btn');
                } else {
                    stUpdate.addClass('open');
                    stUpdate.find('.btn-show span').text('THU GỌN');
                    stUpdate.find('.btn-show').attr('toscroll', '')
                }
            });
        });

        // $('.st-update .btn-show').click(function () {
        //     if ($('.st-update').hasClass('open')) {
        //         $('.st-update').removeClass('open');
        //         $('.st-update .btn-show span').text('XEM THÊM');
        //         $('.st-update .btn-show').attr('toscroll', '.st-update__btn');
        //     }
        //     else {
        //         $('.st-update').addClass('open');
        //         $('.st-update .btn-show span').text('THU GỌN');
        //         $('.st-update .btn-show').attr('toscroll', '')
        //     }
        // });

        const macDatas = [{
                id: '1',
                name: 'a13-16gb-256',
                price: '33.999.000đ',
                currentPrice: '26.499.000đ',
                gam: '256'
            },
            {
                id: '2',
                name: 'a13-16gb-512',
                price: '33.499.000đ',
                currentPrice: '39.499.000đ',
                gam: '512'
            },
            //
            {
                id: '3',
                name: 'a13-m1-8gb-256',
                price: '22.499.000đ',
                currentPrice: '26.999.000đ',
                gam: '256'
            },
            {
                id: '4',
                name: 'a13-m1-8gb-512',
                price: '28.999.000đ',
                currentPrice: '31.999.000đ',
                gam: '512'
            },
            //

            {
                id: '5',
                name: 'm13-pro-16gb-256',
                price: '34.999.000đ',
                currentPrice: '39.999.000đ',
                gam: '256',
            },
            {
                id: '6',
                name: 'm13-pro-16gb-512',
                price: '39.999.000đ',
                currentPrice: '44.999.000đ',
                gam: '512'
            },

            //
            {
                id: '7',
                name: 'm16-pro-m1-32gb-512',
                price: '71.990.000',
                currentPrice: '76.990.000',
                gam: '512'
            },
            //
            {
                id: '8',
                name: 'm13-pro-m1-8gb-256',
                price: '28.999.000đ',
                currentPrice: '32.999.000đ',
                gam: '256'
            },
            {
                id: '9',
                name: 'm13-pro-m1-8gb-512',
                price: '34.499.000đ',
                currentPrice: '37.999.000đ',
                gam: '512'
            },

            //
            {
                id: '10',
                name: 'm14-pro-16gb-1TB',
                price: '59.490.000đ',
                currentPrice: '65.990.000đ',
                gam: '1TB'
            },
            {
                id: '11',
                name: 'm14-pro-16gb-512',
                price: '46.990.000đ',
                currentPrice: '52.990.000đ',
                gam: '512'
            },
            //
            {
                id: '12',
                name: 'm14-pro-m1-32gb-512',
                price: '59.490.000đ',
                currentPrice: '63.990.000đ',
                gam: '512'
            },
            //
            {
                id: '13',
                name: 'm16-pro-16gb-1TB',
                price: '65.490.000đ',
                currentPrice: '70.990.000đ',
                gam: '1TB'
            },
            {
                id: '14',
                name: 'm16-pro-16gb-512',
                price: '58.990.000đ',
                currentPrice: '65.990.000đ',
                gam: '512'
            },

        ]

        const listProduct = $('.js--wrap-product'),
            listProductItem = $('.js--wrap-product .dropdown-item'),
            listProductItemActive = $('.js--wrap-product .dropdown-item.active');

        const colorItem = $('.select-color .item');
        const ramItem = $('.item-ram');
        const gamItem = $('.item-gam');
        const productTitle = $('.product-title');
        const dropdownRam = $('.cs-dropdown-ram'),
            btnRam = $('.cs-dropdown-ram .cs-dropdown-button span');
        const dropdownGam = $('.cs-dropdown-gam'),
            btnGam = $('.cs-dropdown-gam  .cs-dropdown-button span');
        const dropdownItemGam = $('.cs-dropdown-gam .item-gam');

        const price = $('.current-price .price'),
            priceSale = $('.current-price .price-sale');

        productTitle.text(listProductItemActive.text());

        listProductItem.click(function () {
            //
            const that = $(this);
            const thatContext = that.text();
            const attrColor = that.attr('data-color');
            const attrMemory = that.attr('data-memory');
            const attrID = that.attr('data-id');
            const attrMac = that.attr('data-mac');
            const attrDataPic = that.attr('data-pic');

            colorItem.removeClass('show active');
            ramItem.removeClass('show active');
            gamItem.removeClass('show active');

            productTitle.text(thatContext);
            $(`.${attrColor}, .${attrMemory}`).addClass('show');

            $(`.${attrColor}`).first().addClass('active');

            $('.product-img-item').removeClass('show');
            $(`.${attrMac}`).addClass('show');

            $('.item-ram.show').first().addClass('active');
            $('.item-gam.show').first().addClass('active');

            const itemRamContext = $('.item-ram.show.active').text();
            const itemGamContext = $('.item-gam.show.active').text();

            btnRam.text(itemRamContext);
            btnGam.text(itemGamContext);

            macDatas.filter(function (element) {
                if (attrID === element.id) {
                    price.text(element.currentPrice);
                    priceSale.text(element.price);
                }
            });

            const name = $('.dropdown-item.active').attr('data-name');
            const ram = $('.item-ram.active').attr('data-ram');
            const gam = $('.item-gam.active').attr('data-gam');
            $('.specifi-list .detail').removeClass('active');
            $(`.${name}-${ram}-${gam}`).addClass('active');
            console.log("attrDataPic", attrDataPic)
            // $('.m-pro14.show .pic-wrap').removeClass('active');
            // $(`.${name}`).addClass('active');

            $('.show .pic-wrap').removeClass('active');
            $(`.show .${attrDataPic}`).first().addClass('active');
            console.log("$(`.show .${attrDataPic}`)", $(`.show .${attrDataPic}`));
        });


        colorItem.click(function () {
            const $target = $(this).attr('target');

            colorItem.removeClass('active');
            $(this).addClass('active');
            console.log("$target", $target, `.show .${$target}`)
            $('.product-img-item.show .active').removeClass('active');
            $(`.show .${$target}`).addClass('active');
        });

        function getParameter() {
            const name = $('.dropdown-item.active').attr('data-name');
            const ram = $('.item-ram.active').attr('data-ram');
            const gam = $('.item-gam.active').attr('data-gam');
        }
        getParameter();

        dropdownItemGam.click(function () {
            const name = $('.dropdown-item.active').attr('data-name');
            const ram = $('.item-ram.active').attr('data-ram');
            const gam = $('.item-gam.active').attr('data-gam');

            const dataGram = $(this).attr('data-gam');

            const that = $(this);
            const elementName = `${name}-${ram}-${gam}`;
            // console.log(name, elementName);

            macDatas.filter(function (element) {
                const getID = element.id;
                const name = element.name;

                if (elementName === name) {
                    price.text(element.currentPrice);
                    priceSale.text(element.price);
                }
            });
            $('.specifi-list .detail').removeClass('active');
            $(`.${name}-${ram}-${gam}`).addClass('active');

            // console.log("ădawdawdaw", `.${name}-${ram}-${gam}`);
        });

        // console.log("nameActive", `${name}-${gam}-${ram}`);

        //tab
        const tabItem = $('.tab__item');
        tabItem.click(function () {
            tabItem.removeClass('tab-active');
            $(this).addClass('tab-active');

            const getDataTab = $(this).attr('data-tab');

            $('.tab-content').hide();
            $(`#${getDataTab}`).show();

        });


        AOS.init({
            // Global settings:
            // disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
            // startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
            // initClassName: 'aos-init', // class applied after initialization
            // animatedClassName: 'aos-animate', // class applied on animation
            // useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
            // disableMutationObserver: false, // disables automatic mutations' detections (advanced)
            // debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
            // throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


            // // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
            // offset: 120, // offset (in px) from the original trigger point
            // delay: 0, // values from 0 to 3000, with step 50ms
            duration: 400, // values from 0 to 3000, with step 50ms
            // easing: 'ease', // default easing for AOS animations
            // once: false, // whether animation should happen only once - while scrolling down
            // mirror: true, // whether elements should animate out while scrolling past them


        });



    });
})(window.jQuery);

jQuery.fn.extend({
    cDropdown: function () {
        return this.each(function () {
            var containermenu = $(this);
            var button = containermenu.find('.cs-dropdown-button');
            var menu = containermenu.find('.cs-dropdown-menu');
            var list = containermenu.find('.cs-dropdown-menu-wrapper');
            var item = list.children();
            var option = button.find('span');
            button.click(function (e) {
                menu.addClass('open');
            });
            item.click(function () {
                $(this).siblings().removeClass('active');
                $(this).addClass('active');
                var txt = $(this).find('span').text();
                option.text(txt);
                menu.removeClass('open');
            })
            $(document).click(function (e) {
                e.stopPropagation();
                var container = containermenu;
                if (container.has(e.target).length === 0) {
                    menu.removeClass('open');
                }
            })
        });
    },

    //mac booking
    macBooking: function (macData) {
        return this.each(function () {
            var container = $(this);
            var list = container.find('.js--booking-wrapper');
            var showChip = container.find('.js--show-chip');
            var showStorage = container.find('.js--show-storage');
            var showColor = container.find('.js--show-color');
            showChip.children().click(function () {
                var size = $(this).attr('data-size');
                container.find('.chip-box ul').removeClass('show');
                container.find('.' + size).addClass('show');
            });
            showStorage.children().click(function () {
                var size = container.find('.size-box ul li.active').attr('data-size');
                var chip = container.find('.chip-box ul.show li.active').attr('data-chip');
                container.find('.storage-box ul').removeClass('show');
                container.find('.' + size + '-' + chip).addClass('show');
            })
            showColor.children().click(function () {
                var size = container.find('.size-box ul li.active').attr('data-size');
                var chip = container.find('.chip-box ul.show li.active').attr('data-chip');
                var storage = container.find('.storage-box ul.show li.active').attr('data-storage');
                container.find('.color-box ul').removeClass('show');
                container.find('.' + size + '-' + chip + '-' + storage).addClass('show');
            })
            list.each(function () {
                var child = $(this).children();
                child.click(function () {
                    var size = container.find('.size-box ul li.active').attr('data-size');
                    var chip = container.find('.chip-box ul.show li.active').attr('data-chip');
                    var storage = container.find('.storage-box ul.show li.active').attr('data-storage');
                    var color = container.find('.color-box ul.show li.active').attr('data-color');
                    var fls = size + '-' + chip + '-' + storage + '-' + color;
                    console.log(fls);
                    const product = `${fls}`;
                    const objProduct = macData[product];

                    var imgProduct = container.find('.js--img-wrapper img');
                    imgProduct.attr('src', objProduct.url);

                    var priceProduct = container.find('.js--price-wrapper .price');
                    priceProduct.text(objProduct.price);

                    var chipTxt = container.find('.chip-box .cs-dropdown-menu-wrapper.show li.active').text();
                    var storageTxt = container.find('.storage-box .cs-dropdown-menu-wrapper.show li.active').text();
                    container.find('.chip-box .cs-dropdown-button span').text(chipTxt);
                    container.find('.storage-box .cs-dropdown-button span').text(storageTxt);
                })
            })
        })
    },
    watchBooking: function (watchData) {
        return this.each(function () {
            var container = $(this);
            var list = container.find('.js--wrapper');
            var swSeries = container.find('.js-series');
            var swMaterial = container.find('.js--show-material');
            var swColor = container.find('.js--show-color');
            swSeries.children().click(function () {
                var srp = $(this).attr('series-watch');
                container.find('.js--select-size-watch .cs-dropdown-menu-wrapper').removeClass('show');
                container.find('.' + srp).addClass('show');
            });
            swMaterial.children().click(function () {
                container.find('.material-box ul').removeClass('show');
                var series = $('.js-series.show li.active').attr('series-watch');
                var size = $('.js--select-size-watch ul.show li.active').attr('size-watch');
                container.find('.' + series + '-' + size).addClass('show');
            });
            swColor.children().click(function () {
                var series = $('.js-series.show li.active').attr('series-watch');
                var size = $('.js--select-size-watch ul.show li.active').attr('size-watch');
                var material = $('.material-box ul.show li.active').attr('watch-material');
                container.find('.color-box ul').removeClass('show');
                container.find('.' + series + '-' + size + '-' + material).addClass('show');
            })

            list.each(function () {
                var child = $(this).children();
                var par = $(this).closest('.cs-dropdown');
                var btn = par.find('.cs-dropdown-button span');
                child.click(function () {
                    var series = container.find('.series-bx li.active').attr('series-watch');
                    var size = container.find('.size-bx.show li.active').attr('size-watch');
                    var material = container.find('.material-box ul.show li.active').attr('watch-material');
                    var color = container.find('.color-bx.show li.active').attr('color-watch');
                    var fls = series + '-' + size + '-' + material + '-' + color;
                    /*  console.log(fls)*/
                    const product = `${fls}`;
                    const objProduct = watchData[product];
                    container.find('.js--img-wrapper img').attr('src', objProduct.url);
                    container.find('.js--price-wrapper .price').text(objProduct.price);
                    //code backend
                    var sizeText = container.find('.js--select-size-watch .cs-dropdown-menu-wrapper.show li.active').text();
                    container.find('.js--select-size-watch .cs-dropdown-button span').text(sizeText);
                    var colorText = container.find('.js--select-color-watch .cs-dropdown-menu-wrapper.show li.active').text();
                    container.find('.js--select-color-watch .cs-dropdown-button span').text(colorText);
                })
            })
        })
    },
    ipadBooking: function (ipadData) {
        return this.each(function () {
            var container = $(this);
            var list = container.find('.js--wrapper');
            var swSize = container.find('.js--wrap-size');
            var swStorageColor = container.find('.js--storage-color');
            swSize.children().click(function () {
                var size = $(this).attr('data-size');
                container.find('.js--select-size ul').removeClass('show');
                container.find('.' + size).addClass('show');
            });
            swStorageColor.children().click(function () {
                container.find('.storage-box ul').removeClass('show');
                container.find('.color-box ul').removeClass('show');
                var size = container.find('.size-box li.active').attr('data-size');
                var connect = container.find('.connect-box ul.show li.active').attr('data-connect');
                container.find('.' + size + '-' + connect).addClass('show');
            })
            list.each(function () {
                var child = $(this).children();
                child.click(function () {
                    var size = container.find('.size-box li.active').attr('data-size');
                    var connect = container.find('.connect-box ul.show li.active').attr('data-connect');
                    var storage = container.find('.storage-box ul.show li.active').attr('data-storage');
                    var color = container.find('.color-box ul.show li.active').attr('data-color');
                    var fullAttr = size + '-' + connect + '-' + storage + '-' + color;
                    console.log(fullAttr);
                    const product = `${fullAttr}`;
                    const objProduct = ipadData[product];
                    container.find('.js--img-wrapper img').attr('src', objProduct.url);
                    container.find('.js--price-wrapper .price').text(objProduct.price);
                    var connectText = container.find('.connect-box ul.show li.active').text();
                    container.find('.connect-box .cs-dropdown-button span').text(connectText);
                })
            })
        })
    }
});


// Demo animation
function animateFrom(elem, direction) {
    direction = direction || 1;
    var x = 0,
        y = direction * 100;
    if (elem.classList.contains("gs_reveal_fromLeft")) {
        x = -150;
        y = 0;
    } else if (elem.classList.contains("gs_reveal_fromRight")) {
        x = 150;
        y = 0;
    }
    if (elem.classList.contains("gs_reveal_fromTop")) {
        x = 0;
        y = -150;
    } else if (elem.classList.contains("gs_reveal_fromBottom")) {
        x = 0;
        y = 150;
    }
    elem.style.transform = "translate(" + x + "px, " + y + "px)";
    elem.style.opacity = "0";
    gsap.fromTo(elem, {
        x: x,
        y: y,
        autoAlpha: 0
    }, {
        duration: 3.25,
        x: 0,
        y: 0,
        autoAlpha: 1,
        ease: "expo",
        overwrite: "auto"
    });
}

function hide(elem) {
    gsap.set(elem, {
        autoAlpha: 0
    });
}

document.addEventListener("DOMContentLoaded", function () {
    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray(".gs_reveal").forEach(function (elem) {
        hide(elem); // assure that the element is hidden when scrolled into view

        ScrollTrigger.create({
            trigger: elem,
            onEnter: function () {
                animateFrom(elem)
            },
            onEnterBack: function () {
                animateFrom(elem, -1)
            },
            onLeave: function () {
                hide(elem)
            } // assure that the element is hidden when scrolled into view
        });
    });
});

