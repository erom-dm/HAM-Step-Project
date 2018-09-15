$( document ).ready(function() {
    $(document).on('click','.services__menu-item',function(){
        $('.services__menu-item').removeClass('active');
        $(this).addClass('active');
        $('.services__item').removeClass('active').eq($(this).index()).addClass('active');
    });

    let link = $('.nav-buttons');
    link.click(function (e) {
        e.preventDefault();
        $('body, html').animate({
            scrollTop: $($(this).children()[0].hash).offset().top,
        },1000);
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
            $('#btn-plus').hide();
            $('#btn-text').hide();
            $('#loader').show();
            setTimeout(function() {
                if (maxItemCount < 36){
                    maxItemCount += 12;
                }
                if(type === "all"){
                    item.slice(0, maxItemCount).show();
                } else {
                    item.filter(`.${type}`).slice(0, maxItemCount).show();
                }

                $('#btn-plus').show();
                $('#btn-text').show();
                $('#loader').hide();

                if (maxItemCount === 36){
                    $(".load_more-btn").fadeOut();
                }
            }, 3000);

        });

    });

    let $grid = $('.masonry').masonry({
        itemSelector: '.item',
        percentPosition: true,
        columnWidth: '.grid-sizer',
        gutter: 15
    });

    $grid.imagesLoaded().progress( function() {
        $grid.masonry();
    });

    $('.gallery-btn').on( 'click', function() {
        $('.item.add').toggleClass('add');
        $grid.masonry();
    });
});

