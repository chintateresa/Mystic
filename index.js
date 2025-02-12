$(document).ready(function () {
    // Example of jQuery interaction, add more as needed.
    $('.btn-cta').hover(function () {
        $(this).css('background-color', '#ff5b54');
    }, function () {
        $(this).css('background-color', '#ff6f61');
    });
});
$(document).ready(function () {
    // Smooth scrolling effect for CTA button
    $('.btn-explore').click(function () {
        $('html, body').animate({
            scrollTop: $('#collections').offset().top
        }, 1000);
    });
});
$(document).ready(function () {
    // Optional: Add any additional effects on the hover of the category cards
});
