$(function(){
    /* 네비게이션 */
    $('header nav ul.gnb>li').hover(function(){
      $(this).find('ul.sub').stop().slideDown();
    },function(){
      $(this).find('ul.sub').stop().slideUp();
    });


    /* 모달 : 레이어 팝업 */
    $('section.notice ul li').eq(0).click(function(){
        $('.modal').fadeIn();
    });
    $('.modal .modal_inner button').click(function(){
        $('.modal').fadeOut();
    });

    /* 공지사항 갤러리 탭메뉴 */
    $('.contents article.con1 section h3').click(function(){
        $(this).parent('section').addClass('on').siblings()
        .removeClass('on');
    });


    /* 슬라이드 */
    let slideI = 0;
    $('.main_visual ul li').eq(0).siblings().hide();
    setInterval(function(){
      if(slideI<2){
        slideI++;
      }else{
        slideI = 0 ;
      }
     // console.log(slideI);
     $('.main_visual ul li').eq(slideI).fadeIn().siblings().fadeOut();
    },3000);

  });