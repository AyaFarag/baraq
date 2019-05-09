var newBtnSrc, enImgSrc;
var intImage2 = 1;
var infoImage = 2;
localStorage.EnglishPressed = "true";
// for hover on button
$(".btn-hover > img").hover(
    function () {
        if(intImage2==1)
        {
            newBtnSrc = $(this).attr("src").replace("2", "4");
            $(this).attr("src", newBtnSrc);
        }
        else{
            newBtnSrc = $(this).attr("src").replace("1", "3");
            $(this).attr("src", newBtnSrc);
        }
       
       
    },
    function () {
        if(intImage2==1)
        {
            newBtnSrc = $(this).attr("src").replace("4", "2");
            $(this).attr("src", newBtnSrc);
        }
        else{
            newBtnSrc = $(this).attr("src").replace("3", "1");
            $(this).attr("src", newBtnSrc);
        }
    }
);

// change language
$(".lang-btn").click(function () {
    "use strict";
    switch (intImage2) {
        case 1:
            
             $(".lang-s>img").attr("src","imgs/Asset 6.png")
              
            $(".lang-s").css("top", "27px");
            $(".info-window").css("top", "-139%");
            $(".info-window >img").attr("src","imgs/Eng-Info.png");
            $(".bg >img").attr("src","imgs/satrt-en.png");
            $(".plzName>img").attr("src","imgs/Asset 15.png");
            $(".start-btn>img").attr("src","imgs/Asset 1.png");
            $(".name-div input").attr("placeholder", "Enter your name");

            intImage2 = 2;
            return (false);
        case 2:
        $(".lang-s>img").attr("src","imgs/Asset 8.png")
               
            $(".lang-s").css("top", "25px");
            $(".info-window >img").attr("src","imgs/Ar-info.png");
            $(".bg >img").attr("src","imgs/start-Ar.png");
            $(".info-window").css("top", "-139.5%");
            $(".start-btn>img").attr("src","imgs/Asset 2.png");
            $(".plzName>img").attr("src","imgs/Asset 13.png");
            $(".name-div input").attr("placeholder", "أدخل اسمك");
            intImage2 = 1;
            return (false);
    }
});

//show info window
$(".info-btn").click(function () {
    $(".info-window").show();
    $(".info-window").animate({
        opacity: 1,
    }, 500);
});
//close info window
$(".close-i").click(function () {
    $(".info-window").animate({
        opacity: 0,
    }, 500, function () {
        $(".info-window").hide();
    });
});
// change info language
$(".lang-btn").click(function () {
    "use strict";
    switch (infoImage) {
        case 1:
        $(".lang-i>img").attr("src","imgs/Asset 6.png")
            $(".info-window >img").attr("src","imgs/Eng-Info.png");
            localStorage.EnglishPressed = "true";
            infoImage = 2;
            return (false);
        case 2:
        $(".lang-i>img").attr("src","imgs/Asset 8.png")
            localStorage.EnglishPressed = "false";
            $(".info-window >img").attr("src","imgs/Ar-info.png");
            infoImage = 1;
            return (false);
    }
});

$(".start-btn").click(function(){
    if($(".name-div input").val() != ""){
        localStorage.name = $(".name-div input").val();
        $("body").animate({
            opacity: 0,
        }, 700, function(){
            window.location.href = window.location.href.replace("startpage", "q1");
        });
    }else{
        $(".plzName").css("opacity", 1);
    }
    
});
