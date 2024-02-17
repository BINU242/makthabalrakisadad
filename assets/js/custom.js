var winWidth = $(window).width();

function openMenu() {
    $(".menu-icon").click(function() {
        $(".navbar").addClass("active");
    })
    $(".icon-close").click(function() {
        $(".navbar").removeClass("active");
    })
}

function headerSticky() {
    var scroll = $(window).scrollTop();
    if (scroll >= 50) {
        $(".cp-header").addClass("sticky");
    } else {
        $(".cp-header").removeClass("sticky");
    }
}


$(function() {
    /* document ready*/
    if ($(".menu-icon").length) {
        openMenu();
    }

    window.onscroll = function() {
        if ($(".cp-header").length) {
            headerSticky();
        }
    };
    if ($(".cp-header").length) {
        headerSticky();
    }
});