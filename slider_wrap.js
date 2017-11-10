/**
 * Created by ASUS on 2017/9/18.
 */
$(document).ready(function () {
    var timer=null;
    var index=0;
    $(".main_wrap .ct .item").mouseover(function () {
        $(this).addClass("on").siblings().removeClass("on");
    })

    $(".slider .banner_list").eq(0).show()
        .siblings().hide();
    $(".slider .sliderIndex [index]").mouseover(function () {
        index=$(this).index();
        $(this).addClass("on").siblings().removeClass("on");
        $(".slider .banner_list").eq(index).show().siblings().hide();
    })

    $(".slider").mouseover(function () {
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
        if(index<8){
            $(".slider .sliderIndex [index]").eq(index).addClass("on").siblings().removeClass("on");
            $(".slider .banner_list").eq(index).show().siblings().hide();
        }else{
            index=0;
            $(".slider .sliderIndex [index]").eq(0).addClass("on").siblings().removeClass("on");
            $(".slider .banner_list").eq(0).show().siblings().hide();
        }
    }

    function preplay(){
        index--;
        if(index<0){
            $(".slider .sliderIndex [index]").eq(7).addClass("on").siblings().removeClass("on");
            $(".slider .banner_list").eq(7).show().siblings().hide();
            index=7;
        }else{
            $(".slider .sliderIndex [index]").eq(index).addClass("on").siblings().removeClass("on");
            $(".slider .banner_list").eq(index).show().siblings().hide();
        }
    }


    $(".prev").click(function () {
        preplay();
    })

    $(".next").click(function () {
        play();
    })

});