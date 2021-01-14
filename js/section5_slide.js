;(function(window,document,$,undefined){

    var t = 0;
    // var s5AnimationFn = 0; //호이스팅 (이크마5 에서만 발생)  사용XXX
    //변수 이름과 함수 이름이 같은경우 변수가 우선 실행된다.
    //주의 같지 않도록
    //ECMA SCRIPT 5에서만 발생
    //var 변수 재사용이 가능하다.


    //ECMA SCRIPT 6에서는 절대 허락안함
    // let abc=0
    // const xyz=0; 상수변수   이크마6에서만 사용가능 변수 재사용 절대X
    

    //페럴럭스(parallax) : 페이지 스크롤 이벤트
    //강화할 수 있는 이벤트는 : 마우스 휠 이벤트
    //(BOM)browser object modeling 윈도우(창)스크롤이벤트 : 스크롤 탑값이 상단에서 400px 위치에 도달하면
    //scroll, location, resize
    //애니메이션 함수 : 섹션5의 애니메이션(슬라이드) 함수 호출 실행 
    //문서 전체 길이 값 알아보기
    
    //로딩시 0.1초후에 곧바로 실행(setTimeout)
    setTimeout(s5AnimationFormatFn, 100);

    function s5AnimationFormatFn(){
        $('#section5 .left') .stop().animate({ left: -1000 },1000);
        $('#section5 .right').stop().animate({ right:-1000 },1000);
    }

    function s5AnimationFn(){
        $('#section5 .left') .stop().animate({ left: 0 },2000);
        $('#section5 .right').stop().animate({ right:0 },2000);
    }

    $(window).scroll(function(){
        // console.log( '현재 스크롤 탑값', $(this).scrollTop() );  //스크롤 발생시 현재 위치 값 출력
        // console.log('문서전체 갯수', $(document).length );
        // console.log('총슬라이드 갯수', $('.slide').length );
        // console.log('현재 슬라이드 갯수', $('.slide').length-2 );
        // console.log('문서전체 높이', $(document).height() );
        // console.log('문서전체 너비', $(document).width() );
        // console.log( $(document).height()-$(this).scrollTop() );
        // console.log( '창높이', $(window).height() );
        // console.log( '창너비', $(window).width() );
        
        //스크롤 탑값이 맨위 상단 위치 400 미만이면 다시 변수 초기화
        if( $(this).scrollTop() < 400 ){
            if(t==1){
                t=0;
                s5AnimationFormatFn(); //애니메이션 포지션 초기화
            }
          }  

        if( $(this).scrollTop() >=400 ){
          if(t==0){ 
              t=1;             //토글별수 티 값이 0이면 함수호출
              s5AnimationFn();   //호출하고 변수 값 1로 변경
              
              }
            }  
    
    });

/*
    $(window).scroll();
    $(window).scroll(function(){});
    $(window).scroll(function(){

    });


    $(window).resize(function(){

    });
*/

})(window,document,jQuery);