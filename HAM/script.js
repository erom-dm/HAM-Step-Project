$('.services__menu-item').click(function () {
    let num = $(this).index();

    $('.services__menu-item').removeClass('services__menu-item_active');
    $(this).addClass('services__menu-item_active');

    $('.services__item').removeClass('services__item_active');
    $($('.services__item')[num]).addClass('services__item_active');
});


$('.aw__nav-item').click(function () {

    $(".grid-item").hide();
    let type = ($(this).attr("data-info"));
    if(type === "all"){
        $(".grid-item").slice(0, 12).show();
    } else{
        $(".grid-item").show();
        $(".grid-item").not(`.${type}`).addClass("passive");
        $(".grid-item").not(`.${type}`).hide();
        $(".grid-item").is(`.${type}`).slice(0, 12).addClass("active");
        $(".grid-item").is(`.${type}`).slice(0, 12).show();
    }

})