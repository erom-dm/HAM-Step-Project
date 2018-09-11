$( document ).ready(function() {
    $(document).on('click','.services__menu-item',function(){
        $('.services__menu-item').removeClass('active');
        $(this).addClass('active');
        $('.services__item').removeClass('active').eq($(this).index()).addClass('active');
    });
});
