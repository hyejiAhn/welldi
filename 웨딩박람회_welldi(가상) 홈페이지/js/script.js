$(".m_menu").hide();

$(".m_btn").click(function(){
    $(".m_menu").slideToggle(300);
})

$(".top_btn").click(function(){
    $("html").animate({scrollTop:0},500)
})




$(".top_btn").hide();
$(window).scroll(function(){

    scrTop=$("html").scrollTop();
    if(scrTop>50){
        $(".top_btn").fadeIn();
    }else{
        $(".top_btn").fadeOut();
    }
})

$(".slide2,.slide3").hide();

setInterval(slide)

function slide(){
    $(".slide").delay(2000);
    $(".slide1").fadeOut(1000);
    $(".slide2").fadeIn(1000);
    $(".slide").delay(2000);
    $(".slide2").fadeOut(1000);
    $(".slide3").fadeIn(1000);
    $(".slide").delay(2000);
    $(".slide3").fadeOut(1000);
    $(".slide1").fadeIn(1000);
}