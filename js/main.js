$(function () {

    var mouseX, mouseY;
    var ww = $(window).width();
    var wh = $(window).height();
    var traX, traY;

    $.scrollify({
        section: ".section",
        sectionName: "section-name",
        interstitialSection: "",
        easing: "easeOutExpo",
        scrollSpeed: 1100,
        offset: 0,
        scrollbars: true,
        standardScrollElements: "",
        setHeights: true,
        overflowScroll: true,
        updateHash: false,
        touchScroll: true,
        before: function () { },
        after: function () { },
        afterResize: function () { },
        afterRender: function () { }
    });
    $(document).mousemove(function (e) {
        mouseX = e.pageX;
        mouseY = e.pageY;
        traX = ((4 * mouseX) / 570) + 40;
        traY = ((4 * mouseY) / 570) + 50;
        $(".title").css({ "background-position": traX + "%" + traY + "%" });
    });


    $('.toggle-nav').on('click', function () {
        toggleNavigation($(this), $('.nav-pane'));

    });
    $("a").on("click", function () {
        toggleNavigation($(".toggle-nav"), $(".nav-pane"));
    });

    function toggleNavigation(btn, nav) {

        btn.toggleClass('open');
        nav.toggleClass('open');
        changeLetters($('.toggle-nav'));
    }

    function changeLetters(btn) {
        let m = $('span.m');
        let e = $('span.e');
        let n = $('span.n');
        let u = $('span.u');
        // e.toggleClass('btn-close');

        if (btn.hasClass('open')) {

            m.text("E");
            n.text("I");
            e.addClass('btn-close');
            u.text("T");
        } else {
            m.text("M");
            e.removeClass('btn-close');
            n.text("N");
            u.text("U");

        }
    }
})