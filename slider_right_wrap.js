/**
 * Created by WEB-UID-JAVA on 2017/9/21.
 */
$(document).ready(function () {
    // $.adaptiveBackground.run();
    var timer=null;
    var index=0;
    $(".banner .banner_list").eq(0).addClass("cur").siblings().removeClass("cur");
    $(".banner .bannerIndex [index]").mouseover(function () {
        index=$(this).index();
        $(this).addClass("on").siblings().removeClass("on");
        $(".banner .banner_list").eq(index).addClass("cur").siblings().removeClass("cur");
    })

    $(".banner").mouseover(function () {
        clearInterval(timer);
    }).mouseout(function () {
        autoPlay();
    });

    autoPlay();
    function autoPlay(){
        timer=setInterval(function () {
            play();
        },3000);
    }

    function play(){
        index++;
        if(index<3){
            $(".banner .bannerIndex [index]").eq(index).addClass("on").siblings().removeClass("on");
            $(".banner .banner_list").eq(index).addClass("cur").siblings().removeClass("cur");
        }else{
            index=0;
            $(".banner .bannerIndex [index]").eq(0).addClass("on").siblings().removeClass("on");
            $(".banner .banner_list").eq(0).addClass("cur").siblings().removeClass("cur");
        }
    }
});