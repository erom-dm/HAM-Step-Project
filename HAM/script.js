$( document ).ready(function() {
    $(document).on('click','.services__menu-item',function(){
        $('.services__menu-item').removeClass('active');
        $(this).addClass('active');
        $('.services__item').removeClass('active').eq($(this).index()).addClass('active');
    });
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