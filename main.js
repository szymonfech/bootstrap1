$("document").ready(function () {
    $(".projects .thumbnail").click(function (e) {
        e.preventDefault()
    });
    $(".thumbnail").hover(function () {
        $(this).addClass("zoom")
    }, function () {
        $(this).removeClass("zoom")
    });
    $("#slides").slidesjs({
        width: 940,
        height: 528
    });
})
