var newBtnSrc, enImgSrc;
var intImage = 1;
// for hover on button
$(".btn-hover > img").hover(
    function () {
        newBtnSrc = $(this).attr("src").replace("-off", "-on");
        $(this).attr("src", newBtnSrc);
    },
    function () {
        newBtnSrc = $(this).attr("src").replace("-on", "-off");
        $(this).attr("src", newBtnSrc);
    }
);

// change language
$(".lang-btn").click(function () {
    "use strict";
    switch (intImage) {
        case 1:
            $(".hasEng > img").each(function () {
                enImgSrc = $(this).attr("src").replace("-ar", "-en");
                $(this).attr("src", enImgSrc);
            });
            $(".lang-s").css("top", "27px");
            $(".info-window").css("top", "-139%");
            $(".name-div input").attr("placeholder", "Enter your name");
            intImage = 2;
            return (false);
        case 2:
            $(".hasEng > img").each(function () {
                enImgSrc = $(this).attr("src").replace("-en", "-ar");
                $(this).attr("src", enImgSrc);
            });
            $(".lang-s").css("top", "25px");
            $(".info-window").css("top", "-139.5%");
            $(".name-div input").attr("placeholder", "أدخل اسمك");
            intImage = 1;
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

$(".start-btn").click(function(){
    //if($(".name-div input").val() != "")
    {
        localStorage.name = $(".name-div input").val();
        $("body").animate({
            opacity: 0,
        }, 700, function(){
            window.location.href ="q1.html";
        });
    }
    /*else{
        $(".plzName").css("opacity", 1);
    }*/
    
});
