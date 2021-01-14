;(function(window,document,$,undefined){


var t = 0;

    setTimeout(formatFn,100);
    
    function formatFn(){
        $('#section9 .title-01').stop().animate({ left:1000, opacity:0 }, 1000);
        $('#section9 .title-02').stop().animate({ left:1000, opacity:0 }, 1000);
        $('#section9 .store-find-wrap').stop().animate({ left:1000, opacity:0 }, 1000);
    }
    function animationFn(){
        $('#section9 .title-01').stop().animate({ left:0, opacity:1 }, 2000);
        $('#section9 .title-02').stop().animate({ left:0, opacity:1 }, 2500);
        $('#section9 .store-find-wrap').stop().animate({ left:0, opacity:1 }, 3000);
    }

    $(window).scroll(function(){
        if( $(this).scrollTop() >= $('#section8').offset().top-200 ){   //애니메이션
            if(t==0){
                t=1;
                animationFn();
            }
        }
        if( $(this).scrollTop() < $('#section8').offset().top-200 ){    //초기화
            if(t==1){
                t=0;
                formatFn();
            }
        }
    });



})(window,document,jQuery);