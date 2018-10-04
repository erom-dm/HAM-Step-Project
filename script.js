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

    $(document).on('click', '.header_purchase-btn', function () {
        $('.modal__wrapper').addClass('active');
        $('.modal').addClass('active');
    });

    $(document).on('click', '.modal__wrapper, .modal__social-button, .register__button', function (e) {
        if (e.target === this) {
            $('.modal__wrapper').removeClass('active');
            $('.modal').removeClass('active');
        }
    });
    //---------------------slider----------------------------
    let index = 1;
    let measure = 4;
    selectCurrentSmall();

    let moveNext = function(counter) {
        if (counter > 0) {
            let items = $('.reviews__item');
            let width = items.parent().width();
            let current = $($(items[0]));
            current.animate({marginLeft: `-${width}px`}, 1000/counter, 'linear', function () {
                current.css({'margin':'0'});
                $('.reviews__slider ul').append(current);
                moveNext(counter-1);
            });
        }
    };

    let movePrev = function(counter) {
        if (counter > 0) {
            let items = $('.reviews__item');
            let width = items.parent().width();
            let current = $($(items[items.length-1])).css({'margin-left':`-${width}px`});

            $('.reviews__slider ul').prepend(current);
            current.animate({marginLeft: `0`}, 1000/counter ,'linear', function () {
                movePrev(counter-1);
            });
        }
    };

    $(document).on('click', '#sliderNext', function (e) {
        e.preventDefault();
        moveNext(1);
        deleteSelectCurrentSmall();
        index++;
        if (index > measure) {
            index = 1;
            let smallItems = $('.reviews__item-img.small');
            for (let i = 0; i < 4; i++) {
                $(smallItems[i]).removeClass('active');
                $('.reviews__mini-slider').append(smallItems[i]);
            }

            smallItems = $('.reviews__item-img.small');
            for (let i = 0; i < 4; i++) {
                $(smallItems[i]).addClass('active');
            }
        }
        selectCurrentSmall();
    });

    $(document).on('click', '#sliderPrev', function (e) {
        e.preventDefault();
        movePrev(1);
        deleteSelectCurrentSmall();
        index--;
        if (index < 1) {
            index = measure;
            let smallItems = $('.reviews__item-img.small');
            for (let i = smallItems.length-1; i > smallItems.length-1 - measure; i--) {
                $(smallItems[i]).addClass('active');
                $('.reviews__mini-slider').prepend(smallItems[i]);
            }

            smallItems = $('.reviews__item-img.small');
            for (let i = smallItems.length-1; i > smallItems.length-1 - measure; i--) {
                $(smallItems[i]).removeClass('active');
            }
        }
        selectCurrentSmall();
    });

    $(document).on('click', '.reviews__item-img.small', function (e) {
        e.preventDefault();
        deleteSelectCurrentSmall();
        let attr = $(this).attr('data-info');
        attr = attr>4? attr%4: attr;

        if (attr > index) {
            moveNext(attr-index);
            index = attr;
        } else if(attr < index) {
            movePrev(index-attr);
            index = attr;
        }
        selectCurrentSmall();

    });

    let link = $('.nav-buttons');
    link.click(function (e) {
        e.preventDefault();
        $('body, html').animate({
            scrollTop: $($(this).children()[0].hash).offset().top,
        },1000);
    });

    //---------------------amazing work pics----------------------------
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
            }, getRandomInt(15, 30)*100);

        });

    });


    function selectCurrentSmall() {
        $($('.reviews__item-img.small.active')[index-1]).css({
            'border-color':'#18cfab',
            'align-self': 'baseline'
        });
    }

    function deleteSelectCurrentSmall() {
        $($('.reviews__item-img.small.active')[index-1]).css({
            'border-color':'rgba(31, 218, 181, 0.2)',
            'align-self': 'auto'
        });
    }

    // --------------------------  masonry
    let $grid = $('.masonry').masonry({
        itemSelector: '.item',
        percentPosition: true,
        columnWidth: '.grid-sizer',
        gutter: 15
    });

    $grid.imagesLoaded().progress( function() {
        $grid.masonry('layout');
    });

    $(".gallery-btn").click(function(e) {
        e.preventDefault();
        $('#gallery-btn-plus').hide();
        $('#gallery-btn-text').hide();
        $('#gallery-loader').show();
        setTimeout(function() {
            let elems = $('<div></div>', {class:'item'}).append($('<img>',{src:`img/masonry-img/${getRandomInt(1,7)}.jpg`}));
            $grid.append(elems).masonry('appended', elems);
            elems = $('<div></div>', {class:'item'}).append($('<img>',{src:`img/masonry-img/${getRandomInt(1,7)}.jpg`}));
            $grid.append(elems).masonry('appended', elems);
            elems = $('<div></div>', {class:'item'}).append($('<img>',{src:`img/masonry-img/${getRandomInt(1,7)}.jpg`}));
            $grid.append(elems).masonry('appended', elems);

            $('#gallery-btn-plus').show();
            $('#gallery-btn-text').show();
            $('#gallery-loader').hide();

            if(($grid).children().length > 30){
                $(".gallery-btn").hide();
            }

        }, getRandomInt(3, 10)*100);
    });

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

});

