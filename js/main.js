$(document).ready(function() {
    $("#search-button").click(function() {
        $(".search form").toggleClass("active");
    });

    $(".menumobile").click(function() {
        $(".header-menu ul").slideToggle("slow");
    });
});
$(window).scroll(function() {
    if ($(this).scrollTop() > 0) {
        $('#header').addClass("sticky-header");
    } else {
        $('#header').removeClass("sticky-header");
    }
});