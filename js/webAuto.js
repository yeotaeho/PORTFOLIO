$(function(){
    // 인터파크
    $("#interpark_box").mouseenter(function(){
        $("#interpark > li").stop().animate({marginTop:"-3248px"},7400)
    }).mouseleave(function(){
        $("#interpark > li").stop().animate({marginTop:"0px"},3000)
    })
    
    // MLB
    $("#mlb_box").mouseenter(function(){
        $("#mlb > li").stop().animate({marginTop:"-3054px"},8000)
    }).mouseleave(function(){
        $("#mlb > li").stop().animate({marginTop:"0px"},3000)
    })
    
    // CAFE
    $("#cafe_box").mouseenter(function(){
        $("#cafe > li").stop().animate({marginTop:"-3417px"},7000)
    }).mouseleave(function(){
        $("#cafe > li").stop().animate({marginTop:"0px"},3000)
    })
    
    // vittz
    $("#vittz_box").mouseenter(function(){
        $("#vittz > li").stop().animate({marginTop:"-3335px"},6700)
    }).mouseleave(function(){
        $("#vittz > li").stop().animate({marginTop:"0px"},3000)
    })
})
