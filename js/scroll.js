// Smooth-scrolling effect for links in navigation bar.
$("#mainNav a").on('click', function (event) {
    if (this.hash !== "") {
        event.preventDefault();

        const hash = this.hash;

        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 800, function () {
        });
    }
});

// Slide down navigation bar on scroll.
$(window).scroll(function () {
    $("#mainNav").toggleClass("scrolling", $(this).scrollTop() > $("#mainNav").height() + 30);
});