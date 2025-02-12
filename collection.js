// JavaScript can be used for additional interactive functionality
$(document).ready(function () {
    // Example: Animation on scroll or interaction effect
    $('.collection-item').hover(
        function () {
            $(this).addClass('shadow-lg');
        },
        function () {
            $(this).removeClass('shadow-lg');
        }
    );
});
