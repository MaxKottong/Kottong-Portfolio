$(window).on('resize', function () {
    if ($(window).width() < 576) {
        $("#contact-list").addClass("d-block");
        $("#contact-list").removeClass("d-flex");
    } else {
        $("#contact-list").addClass("d-flex");
        $("#contact-list").removeClass("d-block");
    }
})