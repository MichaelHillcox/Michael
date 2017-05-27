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

    $('body, html').animate({opacity: 1}, 200);
    if( first === null )
        $('#header').animate({top: 0}, 600, 'ease');
    else
        $('#header').css({top: 0});

    // animate our internal links
    $("a[data-internal='true']").on('click', function(e){
        e.preventDefault();
        var $me = $(this);
        $('body, html').animate({opacity: 0}, 80, () => {
            document.location = $me.attr('href');
        });
    });

    if( first === null )
        storage.setItem("firsttime", true);
});
