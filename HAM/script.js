$('.services__menu-item').click(function () {
    let num = $(this).index();

    $('.services__menu-item').removeClass('services__menu-item_active');
    $(this).addClass('services__menu-item_active');

    $('.services__item').removeClass('services__item_active');
    $($('.services__item')[num]).addClass('services__item_active');
});