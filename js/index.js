/*
$( document ).ready(function() {
    $("#downarrow").click(function() {
        $('html, body').animate({
            scrollTop: $("#loans").offset().top
        }, 500);
    });
});

var hidden = false;
$(window).scroll(function() {
    if ($(document).scrollTop() > 200 && !hidden) {
        $("#downarrow").fadeOut();
        hidden = true;
    } else if (hidden && $(document).scrollTop() < 199) {
        $("#downarrow").fadeIn();
        hidden = false;
    }
});
*/