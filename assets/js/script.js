$("[data-trigger]").on("click", function () {
    var trigger_id = $(this).attr('data-trigger');
    $(trigger_id).toggleClass("show");
    $('body').toggleClass("offcanvas-active");
})

$(".btn-close").click(function (e) {
    $(".navbar-collapse").removeClass("show");
    $("body").removeClass("offcanvas-active");
}); 

$('.navbar-nav>li>a').on('click', function () {
    $('.navbar-collapse').collapse('hide');
});

$(window).on('resize', function () {
    if ($(window).width() < 576) {
        $("#contact-list").addClass("d-block");
        $("#contact-list").removeClass("d-flex");
    } else {
        $("#contact-list").addClass("d-flex");
        $("#contact-list").removeClass("d-block");
    }
})