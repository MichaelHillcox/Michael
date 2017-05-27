$(document).ready((e) => {
    var nav = $('#topNav'),
        navBtn = $('#navIcon');

    navBtn.on('click', (e) => {
        nav.css({visibility: "visible", "z-index": 500});
        nav.animate({opacity: 1}, 300, 'ease');
    });
});
