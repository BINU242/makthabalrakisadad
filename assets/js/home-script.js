var winWidth = $(window).width();

let TLslide1, MobTLslide1, TLslide2, MobTLslide2, TLslide3, MobTLslide3, TLslide4, MobTLslide4, TLslide5, MobTLslide5, TLslide6, MobTLslide6, TLslide7, MobTLslide7;

CustomEase.create("customEase", ".08, .82, .17, 1");

// home page - slide 1 animation desktop

function slideOne() {

    TLslide1 = gsap.timeline({
        delay: 0.5,
        paused: true,
        smoothChildTiming: true,
    });

    TLslide1.from("#slide1 .box-green", {
        duration: 0.6,
        delay: 0.4,
        ease: "customEase",
        css: {
            left: "-70rem",
            top: "-45rem",
            opacity: "0",
            transform: "rotate(50deg)",
        }
    }).from("#slide1 .box-yellow", {
        duration: 0.5,
        ease: "expo.out",
        css: {
            left: "-61.5rem",
            top: "-30rem",
            opacity: "0",
        }
    }, "-=0.5").from("#slide1 .title", {
        duration: 0.7,
        ease: "sine.out(10)",
        css: {
            transform: "translateY(-5px)",
            opacity: "0",
        }
    }, "-=0.3").from("#slide1 .whatsapp", {
        duration: 0.7,
        ease: "back.inOut(5)",
        css: {
            transform: "scale(.5)",
            opacity: "0",
        }
    }, "-=1").from("#slide1 .desc", {
        duration: 0.7,
        ease: "sine.out(10)",
        css: {
            transform: "translateY(10px)",
            opacity: "0",
        }
    }, "-=.4").from("#slide1 .get-link", {
        duration: 0.5,
        ease: "sine.out(10)",
        css: {
            transform: "translateY(10px)",
            opacity: "0",
        }
    }, "-=0.7").from("#slide1 .slide-to-next", {
        duration: 0.4,
        delay: 0.1,
        ease: "sine.out",
        css: {
            transform: " translateX(-50%) translateY(10px)",
            opacity: "0",
        }
    })

}

// home page - slide 1 animation mobile
function mobSlideOne() {
    MobTLslide1 = gsap.timeline({
        delay: 0.5,
        paused: true,
        smoothChildTiming: true,
    });

    MobTLslide1.from("#slide1 .box-green", {
        duration: 0.6,
        delay: 0.5,
        ease: "customEase",
        css: {
            left: "-50rem",
            bottom: "20rem",
            opacity: "0",
            transform: "rotate(50deg)",
        }
    }).from("#slide1 .box-yellow", {
        duration: 0.6,
        ease: "expo.out",
        css: {
            left: "-40rem",
            bottom: "30rem",
            opacity: "0",
            transform: "rotate(90deg)",
        }
    }, "-=0.4").from("#slide1 .title", {
        duration: 0.5,
        ease: "sine.out(10)",
        css: {
            transform: "translateY(20px)",
            opacity: "0",
        }
    }, "-=0.3").from("#slide1 .whatsapp", {
        duration: 0.6,
        ease: "back.inOut(5)",
        css: {
            transform: "scale(0.6)",
            opacity: "0",
        }
    }, "-=1").from("#slide1 .desc", {
        duration: 0.6,
        ease: "sine.out(10)",
        css: {
            transform: "translateY(20px)",
            opacity: "0",
        }
    }, "-=.4").from("#slide1 .get-link", {
        duration: 0.5,
        ease: "sine.out(10)",
        css: {
            transform: "translateY(20px)",
            opacity: "0",
        }
    }, "-=.4").from("#slide1 .hashtags", {
        duration: 0.5,
        ease: "sine.out(10)",
        css: {
            transform: "translateY(20px)",
            opacity: "0",
        }
    }, "-=0.4").from("#slide1 .slide-to-next", {
        duration: 0.5,
        delay: 0.1,
        ease: "sine.out",
        css: {
            transform: "translateX(-50%) translateY(10px)",
            opacity: "0",
        }
    })
}

// home page - slide 2 animation desktop
function slideTwo() {

    TLslide2 = gsap.timeline({
        delay: 0.5,
        paused: true,
        smoothChildTiming: true,
    });

    TLslide2.from("#slide2 .box-green", {
        duration: .6,
        delay: 0.3,
        ease: "customEase",
        css: {
            left: "-70rem",
            top: "-10rem",
            opacity: "0",
            transform: "rotate(50deg)",
        }
    }).from("#slide2 .box-yellow", {
        duration: 0.5,
        ease: "expo.out",
        css: {
            left: "-62rem",
            top: "-25rem",
            opacity: "0",
            transform: "rotate(73deg)",

        }
    }, "-=.4").from("#slide2 .grey-img", {
        duration: 0.7,
        ease: "customEase",
        css: {
            left: "-2rem",
            top: "-2rem",
            transform: "rotate(10deg)",
            opacity: "0",
        }
    }, "-=.6").from("#slide2 .title", {
        duration: 0.6,
        ease: "sine.out(10)",
        css: {
            transform: "translateY(-5px)",
            opacity: "0",
        }
    }, "-=.4").from("#slide2 .desc", {
        duration: 0.6,
        ease: "sine.out",
        css: {
            transform: "translateY(10px)",
            opacity: "0",
        }
    }, "-=.4").from("#slide2 .asset-wrap ", {
        duration: 0.5,
        ease: "sine.out(10)",
        css: {
            transform: "rotate(-10deg) translateY(-50%)",
            opacity: "0",
        }
    }, "-=.4").from("#slide2 .slide-info .yellow-img", {
        duration: 0.5,
        delay: 0.1,
        ease: "customEase",
        css: {
            bottom: "-20rem",
            opacity: "0",
        }
    });
}

// home page - slide 2 animation mobile
function mobSlideTwo() {

    MobTLslide2 = gsap.timeline({
        delay: 0.5,
        paused: true,
        smoothChildTiming: true,
    });

    MobTLslide2.from("#slide2 .box-green", {
        duration: .6,
        delay: 0.3,
        ease: "customEase",
        css: {
            right: "17rem",
            top: "-41rem",
            opacity: "0",
            transform: "rotate(50deg)",
        }
    }).from("#slide2 .box-yellow", {
        duration: 0.6,
        ease: "expo.out",
        css: {
            right: "-9rem",
            top: "-15rem",
            opacity: "0",
            transform: "rotate(-32deg)",

        }
    }, "-=.5").from("#slide2 .grey-img", {
        duration: 0.8,
        ease: "customEase",
        css: {
            left: "5rem",
            top: "-3rem",
            transform: "rotate(10deg)",
            opacity: "0",
        }
    }, "-=.6").from("#slide2 .title", {
        duration: 0.6,
        ease: "sine.out(10)",
        css: {
            transform: "translateY(20px)",
            opacity: "0",
        }
    }, "-=.4").from("#slide2 .desc", {
        duration: 0.6,
        ease: "sine.out",
        css: {
            transform: "translateY(20px)",
            opacity: "0",
        }
    }, "-=.4").from("#slide2 .slide-info .yellow-img", {
        duration: 0.5,
        ease: "customEase",
        css: {
            bottom: "-20rem",
            opacity: "0",
        }
    }, "-=.4").from("#slide2 .asset-wrap ", {
        duration: 0.5,
        ease: "sine.out(10)",
        css: {
            transform: "rotate(-10deg) translateX(-50%)",
            opacity: "0",
        }
    });
}

// home page - slide 3 animation desktop
function slideThree() {

    TLslide3 = gsap.timeline({
        delay: 0.5,
        paused: true,
        smoothChildTiming: true,
    });

    TLslide3.from("#slide3 .asset-wrap .img-1 .bg", {
        duration: .6,
        delay: 0.4,
        ease: "customEase",
        css: {
            transform: "rotate(-116deg) scale(0.5)",
            opacity: "0",
        }
    }).from("#slide3 .img-1 .main-img", {
        duration: 0.5,
        ease: "customEase",
        css: {
            transform: "scale(1.15)",
            opacity: "0",
        }
    }, "-=.4").from("#slide3 .img-1 .whatsapp", {
        duration: 0.6,
        ease: "customEase",
        css: {
            opacity: "0",
        }
    }, "-=.4").from("#slide3 .asset-wrap .img-3 .bg", {
        duration: 0.5,
        ease: "customEase",
        css: {
            transform: "rotate(-103deg) scale(0.5)",
            opacity: "0",
        }
    }, "-=.4").from("#slide3 .asset-wrap .img-3 img", {
        duration: 0.5,
        ease: "customEase",
        css: {
            transform: "scale(1.15)",
            opacity: "0",
        }
    }, "-=.4").from("#slide3 .asset-wrap .img-2 .bg", {
        duration: 0.5,
        ease: "customEase",
        css: {
            transform: "rotate(-68deg) scale(0.5)",
            opacity: "0",
        }
    }, "-=.4").from("#slide3 .asset-wrap .img-2 img", {
        duration: 0.5,
        ease: "customEase",
        css: {
            transform: "scale(1.15)",
            opacity: "0",
        }
    }, "-=.4").from("#slide3 .asset-wrap .img-4 .bg", {
        duration: 0.5,
        ease: "customEase",
        css: {
            transform: "rotate(-182deg) scale(0.5)",
            opacity: "0",
        }
    }, "-=.4").from("#slide3 .asset-wrap .img-4 img", {
        duration: 0.5,
        ease: "customEase",
        css: {
            transform: "scale(1.15)",
            opacity: "0",
        }
    }, "-=.4").from("#slide3 .box-gray", {
        duration: 0.5,
        ease: "sine.out",
        css: {
            top: "-24rem",
            right: "-130rem",
            opacity: "0",
        }
    }, "-=.4").from("#slide3 .title", {
        duration: 0.5,
        ease: "sine.out(10)",
        css: {
            transform: "translateY(20px)",
            opacity: "0",
        }
    }, "-=.4").from("#slide3 .desc", {
        duration: 0.5,
        ease: "sine.out",
        css: {
            transform: "translateY(20px)",
            opacity: "0",
        }
    }, "-=.4")
}

// home page - slide 3 animation mobile
function mobSlideThree() {

    MobTLslide3 = gsap.timeline({
        duration: .6,
        paused: true,
        smoothChildTiming: true,
    });

    MobTLslide3.from("#slide3 .asset-wrap .img-1 .bg", {
        duration: .6,
        delay: 0.4,
        ease: "customEase",
        css: {
            transform: "rotate(-116deg) scale(0.5)",
            opacity: "0",
        }
    }).from("#slide3 .img-1 .main-img", {
        duration: 0.5,
        ease: "customEase",
        css: {
            transform: "scale(1.15)",
            opacity: "0",
        }
    }, "-=.4").from("#slide3 .img-1 .whatsapp", {
        duration: 0.5,
        ease: "customEase",
        css: {
            opacity: "0",
        }
    }, "-=.4").from("#slide3 .asset-wrap .img-3 .bg", {
        duration: 0.5,
        ease: "customEase",
        css: {
            transform: "rotate(-103deg) scale(0.5)",
            opacity: "0",
        }
    }, "-=.4").from("#slide3 .asset-wrap .img-3 img", {
        duration: 0.5,
        ease: "customEase",
        css: {
            transform: "scale(1.15)",
            opacity: "0",
        }
    }, "-=.4").from("#slide3 .asset-wrap .img-2 .bg", {
        duration: 0.5,
        ease: "customEase",
        css: {
            transform: "rotate(-68deg) scale(0.5)",
            opacity: "0",
        }
    }, "-=.4").from("#slide3 .asset-wrap .img-2 img", {
        duration: 0.5,
        ease: "customEase",
        css: {
            transform: "scale(1.15)",
            opacity: "0",
        }
    }, "-=.4").from("#slide3 .asset-wrap .img-4 .bg", {
        duration: 0.5,
        ease: "customEase",
        css: {
            transform: "rotate(-182deg) scale(0.5)",
            opacity: "0",
        }
    }, "-=.4").from("#slide3 .asset-wrap .img-4 img", {
        duration: 0.5,
        ease: "customEase",
        css: {
            transform: "scale(1.15)",
            opacity: "0",
        }
    }, "-=.3").from("#slide3 .box-gray", {
        duration: 0.5,
        ease: "sine.out",
        css: {
            top: "-24rem",
            right: "-130rem",
            opacity: "0",
        }
    }, "-=.3").from("#slide3 .title", {
        duration: 0.5,
        ease: "sine.out(10)",
        css: {
            transform: "translateY(20px)",
            opacity: "0",
        }
    }, "-=.3").from("#slide3 .desc", {
        duration: 0.5,
        ease: "sine.out",
        css: {
            transform: "translateY(20px)",
            opacity: "0",
        }
    })
}

// home page - slide 4 animation desktop
function slideFour() {

    TLslide4 = gsap.timeline({
        delay: 0.4,
        paused: true,
        smoothChildTiming: true,
    });

    TLslide4.from("#slide4 .box-gray", {
        duration: 0.6,
        delay: 0.4,
        ease: "customEase",
        css: {
            left: "-28%",
            top: "-37rem",
            opacity: "0",
            transform: "rotate(40deg)",
        }
    }).from("#slide4 .yellow-img", {
        duration: .5,
        ease: "sine.out(10)",
        css: {
            right: "-9rem",
            top: "-9rem",
            opacity: "0",
            transform: "rotate(20deg)",

        }
    }, "-=.4").from("#slide4 .title", {
        duration: 0.5,
        ease: "sine.out(10)",
        css: {
            transform: "translateY(-5px)",
            opacity: "0",
        }
    }, "-=.1").from("#slide4 .desc", {
        duration: 0.5,
        ease: "sine.out(10)",
        css: {
            transform: "translateY(10px)",
            opacity: "0",
        }
    }, "-=.3").from("#slide4 .btn-wrap", {
        duration: 0.4,
        ease: "sine.out",
        css: {
            transform: "translateY(10px)",
            opacity: "0",
        }
    }, "-=.3").from("#slide4 .img-1", {
        duration: 0.4,
        ease: "sine.out(10)",
        css: {
            opacity: "0",
            transform: "rotate(-10deg)",
        }
    }, "-=.3");
}
// home page - slide 4 animation mobile
function mobSlideFour() {

    MobTLslide4 = gsap.timeline({
        delay: 0.4,
        paused: true,
        smoothChildTiming: true,
    });

    MobTLslide4.from("#slide4 .box-gray", {
        duration: 0.7,
        delay: 0.4,
        ease: "customEase",
        css: {
            left: "-28%",
            top: "-37rem",
            opacity: "0",
            transform: "rotate(40deg)",
        }
    }).from("#slide4 .yellow-img", {
        duration: .6,
        ease: "sine.out(10)",
        css: {
            right: "-15rem",
            top: "-15rem",
            opacity: "0",
            transform: "rotate(73deg)",

        }
    }, "-=.5").from("#slide4 .title", {
        duration: 0.5,
        ease: "sine.out(10)",
        css: {
            transform: "translateY(20px)",
            opacity: "0",
        }
    }, "-=.1").from("#slide4 .desc", {
        duration: 0.5,
        ease: "sine.out(10)",
        css: {
            transform: "translateY(20px)",
            opacity: "0",
        }
    }, "-=.3").from("#slide4 .btn-wrap", {
        duration: 0.4,
        ease: "sine.out",
        css: {
            transform: "translateY(20px)",
            opacity: "0",
        }
    }, "-=.3").from("#slide4 .img-1", {
        duration: 0.4,
        ease: "sine.out(10)",
        css: {
            opacity: "0",
            transform: "rotate(-10deg)",

        }
    });
}
// home page - slide 5 animation desktop
function slideFive() {

    TLslide5 = gsap.timeline({
        delay: 0.5,
        paused: true,
        smoothChildTiming: true,
    });

    TLslide5.from("#slide5 .box-green", {
        duration: 0.7,
        delay: 0.4,
        ease: "customEase",
        css: {
            right: "-47rem",
            top: "-16rem",
            opacity: "0",
            transform: "rotate(42deg)",
        }
    }).from("#slide5 .box-yellow", {
        duration: 0.6,
        ease: "expo.out",
        css: {
            right: "-52rem",
            top: "-27rem",
            opacity: "0",
            transform: "rotate(4deg)",
        }
    }, "-=.4").from("#slide5 .black-img-2", {
        duration: 0.6,
        ease: "expo.out",
        css: {
            right: "24rem",
            opacity: "0",
            transform: "rotate(-171deg)",
        }
    }, "-=.4").from("#slide5 .title", {
        duration: 0.6,
        ease: "sine.out(10)",
        css: {
            transform: "translateY(-5px)",
            opacity: "0",
        }
    }, "-=1").from("#slide5 .desc", {
        duration: 0.6,
        ease: "sine.out(10)",
        css: {
            transform: "translateY(10px)",
            opacity: "0",
        }

    }, "-=.4").from("#slide5 .img-1", {
        duration: 0.4,
        ease: "sine.out(10)",
        css: {
            opacity: "0",
            transform: "rotate(10deg)",
        }
    }, "-=.3");
}
// home page - slide 5 animation mobile
function mobSlideFive() {

    MobTLslide5 = gsap.timeline({
        delay: 0.5,
        paused: true,
        smoothChildTiming: true,
    });

    MobTLslide5.from("#slide5 .box-green", {
        duration: 0.6,
        delay: 0.4,
        ease: "customEase",
        css: {
            right: "-47rem",
            top: "-16rem",
            opacity: "0",
            transform: "rotate(42deg)",
        }
    }).from("#slide5 .box-yellow", {
        duration: 0.6,
        ease: "expo.out",
        css: {
            right: "-52rem",
            top: "-27rem",
            opacity: "0",
            transform: "rotate(4deg)",

        }
    }, "-=.5").from("#slide5 .black-img-2", {
        duration: 0.6,
        ease: "expo.out",
        css: {
            bottom: "18rem",
            opacity: "0",
            transform: "rotate(-171deg)",
        }
    }, "-=.5").from("#slide5 .title", {
        duration: 0.6,
        ease: "sine.out(10)",
        css: {
            transform: "translateY(20px)",
            opacity: "0",
        }
    }, "-=1").from("#slide5 .desc", {
        duration: 0.6,
        ease: "sine.out(10)",
        css: {
            transform: "translateY(20px)",
            opacity: "0",
        }
    }, "-=.4").from("#slide5 .img-1", {
        duration: 0.4,
        ease: "sine.out(10)",
        css: {
            opacity: "0",
            transform: "rotate(10deg)",

        }
    });
}
// home page - slide 6 animation desktop
function slideSix() {

    TLslide6 = gsap.timeline({
        delay: 0.5,
        paused: true,
        smoothChildTiming: true,
    });

    TLslide6.from("#slide6 .box-green", {
        duration: 0.6,
        delay: 0.4,
        ease: "customEase",
        css: {
            left: "-64rem",
            top: "-15rem",
            opacity: "0",
            transform: "rotate(50deg)",
        }
    }).from("#slide6 .box-yellow", {
        duration: 0.6,
        ease: "expo.out",
        css: {
            left: "-53rem",
            top: "-45rem",
            opacity: "0",
            transform: "rotate(-45deg)",

        }
    }, "-=.5").from("#slide6 .gray-img", {
        duration: 0.7,
        ease: "customEase",
        css: {
            left: "-14rem",
            top: "-12rem",
            opacity: "0",
            transform: "rotate(-10deg)",
        }
    }, "-=.5").from("#slide6 .title", {
        duration: 0.6,
        ease: "sine.out(10)",
        css: {
            transform: "translateY(-5px)",
            opacity: "0",
        }
    }, "-=.4").from("#slide6 .desc", {
        duration: 0.6,
        ease: "sine.out(10)",
        css: {
            transform: "translateY(10px)",
            opacity: "0",
        }
    }, "-=.4").from("#slide6 .main-img", {
        duration: 0.4,
        ease: "sine.out(10)",
        css: {
            transform: "rotate(-15deg)",
            opacity: "0",
        }
    }, "-=.4").from("#slide6 .bg-img", {
        duration: 0.5,
        ease: "back.out(1.7)",
        css: {
            transform: "translate(-50%, -50%) scale(0.7)",
            opacity: "0",
        }
    }, "-=.2");
}
// home page - slide 6 animation mobile
function mobSlideSix() {

    MobTLslide6 = gsap.timeline({
        delay: 0.5,
        paused: true,
        smoothChildTiming: true,
    });

    MobTLslide6.from("#slide6 .box-green", {
        duration: 0.6,
        delay: 0.4,
        ease: "customEase",
        css: {
            right: "18rem",
            top: "-22rem",
            opacity: "0",
            transform: "rotate(50deg)",
        }
    }).from("#slide6 .box-yellow", {
        duration: 0.6,
        ease: "expo.out",
        css: {
            left: "-52rem",
            top: "-29rem",
            opacity: "0",
            transform: "rotate(-45deg)",

        }
    }, "-=.5").from("#slide6 .gray-img", {
        duration: 0.7,
        ease: "customEase",
        css: {
            left: "-14rem",
            top: "-12rem",
            opacity: "0",
            transform: "rotate(-20deg)",

        }
    }, "-=.5").from("#slide6 .title", {
        duration: 0.6,
        ease: "sine.out(10)",
        css: {
            transform: "translateY(20px)",
            opacity: "0",
        }
    }, "-=.5").from("#slide6 .desc", {
        duration: 0.6,
        ease: "sine.out(10)",
        css: {
            transform: "translateY(20px)",
            opacity: "0",
        }
    }, "-=.4").from("#slide6 .main-img", {
        duration: 0.4,
        ease: "sine.out(10)",
        css: {
            transform: "rotate(-15deg)",
            opacity: "0",
        }
    }, "-=.4").from("#slide6 .bg-img", {
        duration: 0.4,
        ease: "back.out(1.7)",
        css: {
            transform: "translate(-52%, -24%) scale(0.8)",
            opacity: "0",
        }
    }, "-=.2");
}
// home page - slide 7 animation desktop
function slideSeven() {

    TLslide7 = gsap.timeline({
        delay: 1,
        paused: true,
        smoothChildTiming: true,
    });

    TLslide7.from("#slide7 .title", {
        duration: 0.6,
        delay: .5,
        ease: "sine.out(10)",
        css: {
            transform: "translateY(-10px)",
            opacity: "0",
        }
    }).from("#slide7 .desc", {
        duration: 0.6,
        ease: "sine.out(10)",
        css: {
            transform: "translateY(10px)",
            opacity: "0",
        }

    }, "-=.4").from("#slide7 .asset-wrap", {
        duration: 0.6,
        ease: "sine.out(10)",
        css: {
            transform: "translateY(-50%) rotate(3deg)",
            opacity: "0",
        }
    }, "-=.3");
}
// home page - slide 7 animation mobile
function mobSlideSeven() {

    MobTLslide7 = gsap.timeline({
        delay: 0.7,
        paused: true,
        smoothChildTiming: true,
    });

    MobTLslide7.from("#slide7 .title", {
        duration: 0.5,
        delay: .4,
        ease: "sine.out(10)",
        css: {
            transform: "translateY(20px)",
            opacity: "0",
        }
    }).from("#slide7 .desc", {
        duration: 0.5,
        ease: "sine.out(10)",
        css: {
            transform: "translateY(20px)",
            opacity: "0",
        }

    }, "-=.4").from("#slide7 .asset-wrap", {
        duration: 0.5,
        ease: "sine.out(10)",
        css: {
            transform: "rotate(8deg)",
            opacity: "0",
        }
    });
}

// home page - onepage animation
function onePageInit() {
    if (winWidth > 768) {
        $(".parent-section").onepage_scroll({
            sectionContainer: ".parent-section .slide",
            loop: false,
            updateURL: false,
            responsiveFallback: false,
            direction: "horizontal",
            beforeMove: function(index) {
                $(".cp-custom-nav .item").removeClass("active");
                $(".cp-custom-nav .item:eq(" + (index - 1) + ")").addClass("active");
                if (index == 1) {
                    TLslide1.restart(true, false);
                }
                if (index == 2) {
                    TLslide2.restart(true, false);
                }
                if (index == 3) {
                    TLslide3.restart(true, false);
                }
                if (index == 4) {
                    TLslide4.restart(true, false);
                }
                if (index == 5) {
                    TLslide5.restart(true, false);
                }
                if (index == 6) {
                    TLslide6.restart(true, false);
                }
                if (index == 7) {
                    TLslide7.restart(true, false);
                }
            }
        });
    } else {
        $(".parent-section").onepage_scroll({
            sectionContainer: ".parent-section .slide",
            loop: false,
            updateURL: false,
            responsiveFallback: false,
            direction: "vertical",
            beforeMove: function(index) {
                $(".cp-custom-nav .item").removeClass("active");
                $(".cp-custom-nav .item:eq(" + (index - 1) + ")").addClass("active");

                if (index == 1) {
                    MobTLslide1.restart(true, false);
                }
                if (index == 2) {
                    MobTLslide2.restart(true, false);
                }
                if (index == 3) {
                    MobTLslide3.restart(true, false);
                }
                if (index == 4) {
                    MobTLslide4.restart(true, false);
                }
                if (index == 5) {
                    MobTLslide5.restart(true, false);
                }
                if (index == 6) {
                    MobTLslide6.restart(true, false);
                }
                if (index == 7) {
                    MobTLslide7.restart(true, false);
                }
            }

        });
    }

    $(".cp-custom-nav .item").click(function() {
        var currentIndex = $(this).index();
        $(".parent-section").moveTo(currentIndex + 1);
    })

    $(".slide-to-next").click(function() {
        $(".parent-section").moveTo(2);
    })
}

// menu js - for mobile
function openMenu() {
    $(".menu-icon").click(function() {
        $(".navbar").addClass("active");
    })
    $(".icon-close").click(function() {
        $(".navbar").removeClass("active");
    })
}

// slider for testimonial 
function swiperSlider() {
    var testimonialSlider = new Swiper('.cp-testimonial .swiper-container', {
        autoplay: {
            delay: 7000,
        },
        speed: 1000,
        loop: true,
        pagination: {
            el: '.cp-testimonial .swiper-pagination',
            clickable: true
        }
    })
}

// Stichy header for static pages
function headerSticky() {
    var scroll = $(window).scrollTop();
    if (scroll >= 50) {
        $(".cp-header").addClass("sticky");
    } else {
        $(".cp-header").removeClass("sticky");
    }
}


function setBg() {
    $(".set-bg").each(function() {
        var imageUrl = $(this).find(".fetch-img-src").attr("src");
        $(this).css("background-image", "url(" + imageUrl + ")");
    });
}

$(function() {

    if ($(".parent-section").length) {
        onePageInit();
    }
    if ($(".set-bg").length) {
        setBg();
    }
    if ($(".menu-icon").length) {
        openMenu();
    }
    if ($(".cp-testimonial").length) {
        swiperSlider();
    }
    window.onscroll = function() {
        if ($(".cp-header").length) {
            headerSticky();
        }
    };
    if ($(".cp-header").length) {
        headerSticky();
    }
    if (winWidth > 767) {
        slideOne();
        TLslide1.play();
        slideTwo();
        slideThree();
        slideFour();
        slideFive();
        slideSix();
        slideSeven();
    }

    if (winWidth < 767) {
        mobSlideOne();
        MobTLslide1.play();
        mobSlideTwo()
        mobSlideThree()
        mobSlideFour()
        mobSlideFive()
        mobSlideSix()
        mobSlideSeven()
    }
});

$(window).on("load", function() {
    $(".loader").fadeOut();
    $("header").addClass("fade-in");
})