$(function(){
    let ht= $(window).height();
    $(window).resize(function(){
        ht= $(window).height();
        $('section').height(ht);
    });
   /* 스크롤 이벤트 = 메뉴 on class */
     $(window).on('scroll',function(){
        let sct=$(window).scrollTop();
        let sectionLength=$('#wrap section').length;
        for(let i=0; i<sectionLength; i++){
            if(sct >= ht*i && sct<ht*(i+1)){
                $('ul#menu li').removeClass().eq(i).addClass('on');
            }
        }
    });

    let isScrolling=false; //스크롤 중복 방지
    $('section').on('wheel mousewheel DOMMouseScroll',function(e){
        if(isScrolling) return; //스크롤 중이라면 중복 실행 방지
        e.preventDefault();
        let delta = e.originalEvent.deltaY || -e.originalEvent.wheelDelta || e.originalEvent.detail;
        let nav=delta > 0 ? $(this).next():$(this).prev();
        
        if(nav.length){
            isScrolling=true;
            let moveTop=nav.offset().top;
            $('html, body').stop().animate({
                scrollTop:moveTop
            },400,function(){
                isScrolling=false;//스크롤 완료 후 다시 사용
            })           
        }

    })


    //마우스 무브 이벤트
    $('section').on('mousemove',function(e){
        let posX=e.pageX;
        let posY=e.pageY;
        /* 
        .p11{position: absolute; bottom: 20px; right: 20px;}
        .p12{position: absolute; bottom: -40px; right: 130px;}
        .p13{position: absolute; top:180px; right: 60px;}
        */
        //console.log(posX,posY);
        $('.p11').css({
            bottom:20-(posY/30),
            right:20-(posX/30)
        });
        $('.p12').css({
            bottom:-40+(posY/20),
            right:130+(posX/20)
        });
        $('.p13').css({
            top:180+(posY/50),
            right:60+(posX/50)
        });


        $('.p21').css({
            bottom:-480+(posY/30),
            right:-180+(posX/30)
        });
        $('.p22').css({
            bottom:-40-(posY/30),
            right:130-(posX/30)
        });


        $('.p31').css({
            bottom:30+(posY/30),
            right:180+(posX/30)
        });
        $('.p32').css({
            bottom:-270-(posY/30),
            right:110-(posX/30)
        });
        $('.p33').css({
            bottom:-130+(posY/30),
            right:-70+(posX/30)
        });


        $('.p41').css({
            bottom:-120+(posY/30),
            right:20-(posX/30)
        });
        $('.p42').css({
            bottom:120+(posY/30),
            right:180-(posX/30)
        });


    })



});