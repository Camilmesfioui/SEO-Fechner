$(function(){
    var scroller = $('#scroller div.innerScrollArea');
    var scrollerContent = scroller.children('ul');
    scrollerContent.children().clone().appendTo(scrollerContent);
    var curX = 0;
    scrollerContent.children().each(function(){
        var $this = $(this);
        $this.css('left', curX);
        curX += $this.outerWidth(true);
    });
    var fullW = curX / 2;
    var viewportW = scroller.width();

    // Scrolling speed management
    var controller = {curSpeed:0, fullSpeed:2};
    var $controller = $(controller);
    var tweenToNewSpeed = function(newSpeed, duration)
    {
        if (duration === undefined)
            duration = 600;
        $controller.stop(true).animate({curSpeed:newSpeed}, duration);
    };

    // Pause on hover
    scroller.hover(function(){
        tweenToNewSpeed(0);
    }, function(){
        tweenToNewSpeed(controller.fullSpeed);
    });

    // Scrolling management; start the automatical scrolling
    var doScroll = function()
    {
        var curX = scroller.scrollLeft();
        var newX = curX + controller.curSpeed;
        if (newX > fullW*2 - viewportW)
            newX -= fullW;
        scroller.scrollLeft(newX);
    };
    setInterval(doScroll, 20);
    tweenToNewSpeed(controller.fullSpeed);
});

// progress

(function ($){

    $.fn.bekeyProgressbar = function(options){

        options = $.extend({
            animate     : true,
            animateText : true
        }, options);

        var $this = $(this);

        var $progressBar = $this;
        var $progressCount = $progressBar.find('.ProgressBar-percentage--count');
        var $circle = $progressBar.find('.ProgressBar-circle');
        var percentageProgress = $progressBar.attr('data-progress');
        var percentageRemaining = (100 - percentageProgress);
        var percentageText = $progressCount.parent().attr('data-progress');

        //Calcule la circonférence du cercle
        var radius = $circle.attr('r');
        var diameter = radius * 2;
        var circumference = Math.round(Math.PI * diameter);

        //Calcule le pourcentage d'avancement
        var percentage =  circumference * percentageRemaining / 100;

        $circle.css({
            'stroke-dasharray' : circumference,
            'stroke-dashoffset' : percentage
        })

        //Animation de la barre de progression
        if(options.animate === true){
            $circle.css({
                'stroke-dashoffset' : circumference
            }).animate({
                'stroke-dashoffset' : percentage
            }, 3000 )
        }

        //Animation du texte (pourcentage)
        if(options.animateText == true){

            $({ Counter: 0 }).animate(
                { Counter: percentageText },
                { duration: 3000,
                    step: function () {
                        $progressCount.text( Math.ceil(this.Counter) + '%');
                    }
                });

        }else{
            $progressCount.text( percentageText + '%');
        }

    };

})(jQuery);

$(document).ready(function(){

    $('.ProgressBar--animateNone').bekeyProgressbar({
        animate : false,
        animateText : false
    });

    $('.ProgressBar--animateCircle').bekeyProgressbar({
        animate : true,
        animateText : false
    });

    $('.ProgressBar--animateText').bekeyProgressbar({
        animate : false,
        animateText : true
    });

    $('.ProgressBar--animateAll').bekeyProgressbar();

})