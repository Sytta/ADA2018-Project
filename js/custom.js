// Show more Show less Button
$(document).ready(function () {
    $('.more1').show();
    $('.less1').hide();
    $('.more2').show();
    $('.less2').hide();
    $('.more3').show();
    $('.less3').hide();
    $('.more4').show();
    $('.less4').hide();

    $('.more-button1').click(function () {
        $('.less1').show();
        $('.more-button1').hide();
    });
    $('.less-button1').click(function () {
        $('.more1').show();
        $('.less-button1').hide();
        $('.less1').hide(300);
    });

    $('.more-button2').click(function () {
        $('.less2').show();
        $('.more-button2').hide();
    });
    $('.less-button2').click(function () {
        $('.more2').show();
        $('.less-button2').hide();
        $('.less2').hide(300);
    });

    $('.more-button3').click(function () {
        $('.less3').show();
        $('.more-button3').hide();
    });
    $('.less-button3').click(function () {
        $('.more3').show();
        $('.less-button3').hide();
        $('.less3').hide(300);
    });

    $('.more-button3').click(function () {
        $('.less3').show();
        $('.more-button3').hide();
    });
    $('.less-button3').click(function () {
        $('.more3').show();
        $('.less-button3').hide();
        $('.less3').hide(300);
    });
});
