$(document).ready(function () {
    // ---------------services-tab------------------------
    $(document).on('click', '.services__menu-item', function () {
        $('.services__menu-item').removeClass('active');
        $(this).addClass('active');
        $('.services__item').removeClass('active').eq($(this).index()).addClass('active');
    });
    //---------------modal-window------------------------
    $(document).on('click', '.purchase-block__button', function () {
        $('.modal__wrapper').addClass('active');
        $('.modal').addClass('active');
    });

    $(document).on('click', '.modal__wrapper, .modal__social-button, .register__button', function (e) {
        if (e.target === this) {
            $('.modal__wrapper').removeClass('active');
            $('.modal').removeClass('active');
        }
    });
});