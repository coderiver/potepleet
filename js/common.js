$(document).ready(function() {

	// yandex map
    ymaps.ready(function () {
    var myMap = new ymaps.Map('YMapsID', {
        center: [55.733835, 37.588227],
        zoom: 12,
        controls: []
    });

    var myMap2 = new ymaps.Map('YMapsID2', {
        center: [59.939095, 30.315868],
        zoom: 12,
        controls: []
    });

    });

    // header__left text position

    function left_width(){
        var lw = $(".js-left-width").offset().left;
        $(".header__left").css('margin-left', lw);
    }
    left_width();

    
    // header animation

    function anim1(){
        var window_width = $(window).width();
        $(".header__animation").css('width', window_width);
        
        // $(".header").mousemove( function(e) {
        //     var h_width = $(".header").width();  
        //     var pos = e.pageX;
        //     var pos_pers = (100 - (pos/h_width)*100);
        //     console.log(pos_pers);
        //     $(".js-anim1").css('width', pos_pers+'%');
        //     $(".js-anim-round").css('left', pos_pers+'%');
        // });

    }
    anim1();

    // nav scroll

    $(".nav a").click(function (){
        var page = $(this).attr("href");
    
        $('html, body').animate({
            scrollTop: $(page).offset().top
        }, 500);
        return false;
    });

    // contacts tabs

    // tabs
    function tab() {
       $(".js-tab").each(function(){
         var tab_link = $(this).find("a");
         var tab_cont = $(this).parents(".js-tab-group").find(".js-tab-cont");
         tab_cont.hide();
         $(this).parents(".js-tab-group").find(".js-tab1").show();
            tab_link.on("click", function() {
                var index = $(this).attr("href");
                tab_link.removeClass("is-active");
                tab_link.parent().removeClass("is-active");
                $(this).addClass("is-active");
                $(this).parent().addClass("is-active");
                tab_cont.hide();
                $(this).parents(".js-tab-group").find("."+index).show();
                return false;
            });
        });
    }
        if ($(".js-tab-group").length) {
            tab();
        };


    $(window).resize(function() {
        left_width();    
    });
	
});