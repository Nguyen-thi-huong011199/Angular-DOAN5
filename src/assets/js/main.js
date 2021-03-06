$(document).ready(function() {
    "use strict";
    $(".animsition").animsition({
        inClass: "fade-in",
        outClass: "fade-out",
        inDuration: 800,
        outDuration: 800,
        linkElement: ".animsition-link",
        loading: !0,
        loadingParentElement: "body",
        loadingClass: "animsition-loading",
        loadingInner: "",
        timeout: !1,
        timeoutCountdown: 5e3,
        onLoadEvent: !0,
        browser: ["animation-duration", "-webkit-animation-duration"],
        overlay: !1,
        overlayClass: "animsition-overlay-slide",
        overlayParentElement: "body",
        transition: function(e) {
            window.location.href = e
        }
    }), $(".bg-image").css("background", function() {
        var e = "url(" + $(this).data("image-src") + ") no-repeat center center";
        return e
    }), $(".bg-image").css("background-size", "cover"), $("body").on("click", ".page-scroll", function(e) {
        var t = $(this);
        $("html, body").stop().animate({
            scrollTop: $(t.attr("href")).offset().top - 80
        }, 1500, "easeInOutExpo"), e.preventDefault()
    }), $("#cc-slider").slick({
        infinite: !0,
        adaptiveHeight: !0,
        dots: !0,
        autoplay: false,
        speed: 700,
        autoplaySpeed: 2500,
        arrows: !1,
        centerMode: !0,
        slidesToShow: 3,
        slidesToScroll: 2,
        responsive: [{
            breakpoint: 1170,
            settings: {
                arrows: !1,
                slidesToShow: 2
            }
        }, {
            breakpoint: 978,
            settings: {
                arrows: !1,
                slidesToShow: 2
            }
        }, {
            breakpoint: 768,
            settings: {
                arrows: !1,
                slidesToShow: 2
            }
        }, {
            breakpoint: 668,
            settings: {
                arrows: !1,
                slidesToShow: 1
            }
        }, {
            breakpoint: 480,
            settings: {
                arrows: !1,
                slidesToShow: 1
            }
        }]
    }), $(".profile_carousel").slick({
        dots: !1,
        arrows: !1,
        infinite: !1,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: !0,
                dots: !1
            }
        }, {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                dots: !1
            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: !1
            }
        }]
    }), $(".bt-tabs a").click(function(e) {
        e.preventDefault(), $(this).parent().addClass("current"), $(this).parent().siblings().removeClass("current");
        var t = $(this).attr("href");
        $(".tab-content").not(t).css("display", "none"), $(t).fadeIn()
    }), $('a[href="#"]').click(function(e) {
        e.preventDefault ? e.preventDefault() : e.returnValue = !1
    }), $(".btn-swipe").on("click", function() {
        var e = $(this);
        e.text() == e.data("text-swap") ? e.text(e.data("text-original")) : (e.data("text-original", e.text()), e.text(e.data("text-swap")))
    }), $.stellar({
        horizontalOffset: 50,
        verticalOffset: 50,
        responsive: !0
    })
});