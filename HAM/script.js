$( document ).ready(function() {
    $(document).on('click','.services__menu-item',function(){
        $('.services__menu-item').removeClass('active');
        $(this).addClass('active');
        $('.services__item').removeClass('active').eq($(this).index()).addClass('active');
    });
});

$(function () {
    let maxItemCount = 12;
    let type = "all";
    let item = $(".grid-item");
    item.slice(0, maxItemCount).show();
    $('.aw__nav-item').click(function (e) {
        e.preventDefault();
        item.hide();
        type = ($(this).attr("data-info"));
        if(type === "all"){
            item.slice(0, maxItemCount).show();
        } else{
            item.show();
            item.not(`.${type}`).hide();
            item.filter(`.${type}`).slice(maxItemCount).hide();
        }

    });
    $(".load_more-btn").click(function(e){
        e.preventDefault();
        if (maxItemCount < 36){
            maxItemCount += 12;
        }
        if(type === "all"){
            item.slice(0, maxItemCount).show();
        } else {
            item.filter(`.${type}`).slice(0, maxItemCount).show();
        }

        if (maxItemCount === 36){
            $(".load_more-btn").fadeOut();
        }
    });

});