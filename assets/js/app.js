$(document).ready((e) => {
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
});
