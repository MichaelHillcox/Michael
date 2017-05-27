$(document).ready((e) => {
    var storage = window.localStorage,
        first = storage.getItem("firsttime");

    var nav = $('#topNav'),
        navBtn = $('#navIcon'),
        close = nav.find('.close');

    navBtn.on('click', (e) => {
        nav.css({visibility: "visible", "z-index": 500}).animate({opacity: 1}, 300, 'ease');
    });

    close.on('click', () => {
        nav.animate({opacity: 0}, 300, () => {
            nav.removeAttr("style");
        });
    });

    setTimeout(function () {
        $('body, html').animate({opacity: 1}, 300);
        if( first === null )
            $('#header').animate({top: 0}, 600, 'ease');
        else
            $('#header').css({top: 0});
    }, 100);

    if( first === null )
        storage.setItem("firsttime", true);
});
