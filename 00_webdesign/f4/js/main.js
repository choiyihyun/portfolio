$(function(){
    $('nav').hover(function(){
        $('ul.sub,.nav_bg').stop().slideDown();
    },function(){
        $('ul.sub,.nav_bg').stop().slideUp();
    });


    //슬라이드
    let slideI = 0;
    const leng = $('.main_visual ul.slide li').length - 1;
    //console.log(leng);
    setInterval(function(){
        if(slideI < leng){
            slideI++;
        }else{
            slideI = 0;
        }
        $('.main_visual ul.slide').animate({
            top: `${slideI*(-100)}%`,
        },500);
    },3000);
});//r e