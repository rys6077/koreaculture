
var du = 400;

//section3이미지(.th)  -아래서 위로, 앨범 이미지도 위로  
$(".th .item").on("mouseenter",function(){
    $(this).find("strong").stop().animate({bottom:0, opacity:1},400,'easeInCubic'); 
    $(this).find("img").stop().animate({top:'-15px'},400,'easeInCubic');   
    $(this).find("span").stop().delay(300).animate({opacity:1},400);
    
})
.on("mouseleave",function(){
    $(this).find("strong").stop().animate({bottom:"-100px", opacity:0},du,'easeOutCubic'); 
    $(this).find("img").stop().animate({top:'0'},du,'easeOutCubic');   
    $(this).find("span").stop().delay(300).animate({opacity:0},du);
    
})

$(function(){
    //서브메뉴 슬라이드다운
    $('.gnb>li>a').mouseenter(function(){
        $('.gnblistBox').stop().slideDown(300);
    });
    $('nav').mouseleave(function(){
        $('.gnblistBox').stop().slideUp(300);
    });

    
});

