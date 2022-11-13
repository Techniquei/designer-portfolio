$(function(){

    // Filter 

    let filter = $("[data-filter]");
    filter.on("click", function(event){
        event.preventDefault();
        let cat = $(this).data('filter');
        console.log(cat)
        $("[data-cat]").each(function(){
            let workCat = $(this).data('cat');
            if(cat == 'all'){
                $(this).show();
            } else if(workCat != cat){
                // $(this).addClass('hide');
                $(this).hide()
            }else{
                // $(this).removeClass('hide');
                $(this).show();
            }
        })
    })


    //Modal
    let modalCall = $("[data-modal]");
    modalCall.on('click', function (event) {
        event.preventDefault();
        let $this = $(this);
        let modalId = $this.data('modal');
        
        $(modalId).show();
        $('body').css({
            overflow: 'hidden',
            height: '100%'
        })

        setTimeout(function(){
            $(modalId).find('.modal__dialog').css({
                transform: "rotateX(0)"
            });
        }, 50);

        $('[data-slider="slick"]').slick('setPosition');

    })

    //Modal close
    let modalClose = $('.modal__close');
    modalClose.on('click', function (event) {
        event.preventDefault();
        let modalParent = $(this).parents('.modal');

        modalParent.find('.modal__dialog').css({
            transform: 'rotateX(90deg)'
        })

        setTimeout(function(){
            modalParent.hide();
        $('body').css({
            overflow: 'auto',
            height: 'auto'
        })
        }, 200);
        
        

    })

    
    $(".modal").on('click', function (event) {
        

        // $(this).hide();
        // $('body').css({
        //     overflow: 'auto',
        //     height: 'auto'
        // })
        let modal = $(this)

        modal.find('.modal__dialog').css({
            transform: 'rotateX(90deg)'
        })

        setTimeout(function(){
            modal.hide();
        $('body').css({
            overflow: 'auto',
            height: 'auto'
        })
        }, 200);
    })
    
    $(".modal__dialog").on('click', function (event) {
        event.stopPropagation();
        
    })



    // Slider
    $('[data-slider="slick"]').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows:  false,
        dots: true
    });

    $(".slick_prev").on('click', function (event) {
        event.preventDefault();
        let currentSlider = $(this).parents('.modal').find('[data-slider="slick"]');
        currentSlider.slick('slickPrev');
    })
    
    $(".slick_next").on('click', function (event) {
        event.preventDefault();
        let currentSlider = $(this).parents('.modal').find('[data-slider="slick"]');
        currentSlider.slick('slickNext');
    })   

})
