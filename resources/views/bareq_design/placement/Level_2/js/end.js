// put the student name
$(".student-name").text(localStorage.name);
var newLocation;
// calculate the unit to go
var studScore = Number(localStorage.scoreL1),
        // var studScore=0,    
        maxScore = 40,
        success = false,
        loadingItrv,
        arabicNumbers = document.getElementsByClassName("arabicNumbers");
var map = [
    "&\#1632;", "&\#1633;", "&\#1634;", "&\#1635;", "&\#1636;",
    "&\#1637;", "&\#1638;", "&\#1639;", "&\#1640;", "&\#1641;"
];
var l1 = document.getElementById('l1-score'),
        l2 = document.getElementById('l2-score'),
        l0 = document.getElementById('l0-score'),
        l3 = document.getElementById('l3-score'),
        l4 = document.getElementById('l4-score');
/*$(".windowFB").animate({
 opacity: 1,
 }, 500);*/
var level1_score;
var level2_score;

if (studScore < (maxScore * 60 / 100)) {
    $("#loadingImg").show();
    $("#loadingImg").animate({
        opacity: 1,
    }, 500);
    loadingAnimate();
    loadingItrv = setInterval(loadingAnimate, 1200);
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var obj = JSON.parse(this.responseText);
            $("#l1-score span").text(obj.lastLevelScore);
            $("#l0-score span").text(20);
            level2_score = studScore - obj.lastLevelScore;
            ArDigit();

            maxScore=20;
            studScore=level2_score;

            var url = window.location.href;
            var arr = url.split(":");

            var p = arr[0];
            // var newLocation = p + "://" + document.domain + "/asl/views/clients/units.php?arabicName="+obj.arabic+"&parentId="+obj.id+"&lang=AR";
             newLocation = p + "://" + document.domain + "/asl/views/clients/lessons.php?levelId=" + obj.id + "&parentId=" + obj.unitId + "&lang=AR";
           // setTimeout(function () {
           //     window.open(newLocation, "_blank");
           // }, 4000);
        }
    };

    var url = window.location.href;
    var arr = url.split(":");

    var p = arr[0];
    var ws_path = p + "://" + document.domain + "/asl/ws/";
    var url = ws_path + "clients/level2_score.php?level_2_score=" + studScore;
    xhttp.open("GET", url, true);
    xhttp.send();
} else {
    success = true;
    $(".windowFB").css("background-color", "#c7c7c7");
    $("#goodFBImg").show();
    $("#goodFBImg").animate({
        opacity: 1,
    }, 500);

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
        }
    };

    var url = window.location.href;
    var arr = url.split(":");

    var p = arr[0];
    var ws_path = p + "://" + document.domain + "/asl/ws/";
    var url = ws_path + "clients/level2_score.php?level_2_score=" + studScore;
    xhttp.open("GET", url, true);
    xhttp.send();
    var home = p + "://" + document.domain + "/asl/";
   // setTimeout(function () {
   //    window.open(home, "_blank");
   // }, 2000);
}

setTimeout(function () {
    if (!success) {
        clearInterval(loadingItrv);
        // put the student score in level1
        //$("#l2-score span").text(localStorage.scoreL1);
console.log(studScore)
        $("#l2-score span").text(level2_score);
        // show level1 img
        $("#l2-div").css("opacity", 1);
        $("#l2-div a").css("opacity", 1);
        if (studScore >= (maxScore * (10 / 100)) && studScore < (maxScore * (20 / 100))) {
            $("#l2-div p a").text("الوحدة الثانية");
            $("#l2-div p a").attr("href",newLocation);
            $("#l2-div p a").attr("target", "_blank");
            $(".levels-div:nth-child(1) ").css("opacity", 1);
        } else if (studScore >= (maxScore * (20 / 100)) && studScore < (maxScore * (30 / 100))) {
            $("#l2-div p a").text("الوحدة الثالثة");
            $("#l2-div p a").attr("href", newLocation);
             $("#l2-div p a").attr("target", "_blank");
            $(".levels-div:nth-child(2) ").css("opacity", 1);
        } else if (studScore >= (maxScore * (30 / 100)) && studScore < (maxScore * (40 / 100))) {
            $("#l2-div p a").text("الوحدة الرابعة");
            $("#l2-div p a").attr("href", newLocation);
             $("#l2-div p a").attr("target", "_blank");
            $(".levels-div:nth-child(3) ").css("opacity", 1);
        } else if (studScore >= (maxScore * (40 / 100)) && studScore < (maxScore * (50 / 100))) {
            $("#l2-div p a").text("الوحدة الخامسة");
            $("#l2-div p a").attr("href", newLocation);
             $("#l2-div p a").attr("target", "_blank");
            $(".levels-div:nth-child(4) ").attr("opacity", "1");
        } else if (studScore >= (maxScore * (50 / 100)) && studScore < (maxScore * (60 / 100))) {
            $("#l2-div p a").text("الوحدة السادسة");
            $("#l2-div p a").attr("href", newLocation);
             $("#l2-div p a").attr("target", "_blank");
        }
        else {
            $("#l2-div p a").text("الوحدة الأولى");
            $("#l2-div p a").attr("href", newLocation);
             $("#l2-div p a").attr("target", "_blank");
        }
        ArDigit();
        $(".windowFB").animate({
            opacity: 0,
        }, 500, function () {
            $(".windowFB").hide();
        });
    }
}, 5000);

function loadingAnimate() {
    $("#ldP1").animate({
        opacity: 1,
    }, 200, function () {
        $("#ldP2").animate({
            opacity: 1,
        }, 200, function () {
            $("#ldP3").animate({
                opacity: 1,
            }, 200, function () {
                $("#ldP4").animate({
                    opacity: 1,
                }, 200, function () {
                    $("#ldP5").animate({
                        opacity: 1,
                    }, 200, function () {
                        $("#ldP6").animate({
                            opacity: 1,
                        }, 200, function () {
                            $("#ldP2").css("opacity", 0);
                            $("#ldP3").css("opacity", 0);
                            $("#ldP4").css("opacity", 0);
                            $("#ldP5").css("opacity", 0);
                            $("#ldP6").css("opacity", 0);
                        });
                    });
                });
            });
        });
    });
}
function ArDigit() {
    for (var i = 0; i < arabicNumbers.length; i++) {
        arabicNumbers[i].innerHTML =
                arabicNumbers[i].innerHTML.replace(
                /\d(?=[^<>]*(<|$))/g,
                function ($0) {
                    return map[$0]
                }
        );
    }
}
ArDigit();
l0.style.direction = 'ltr';
l1.style.direction = 'ltr';
l2.style.direction = 'ltr';
l3.style.direction = 'ltr';
l4.style.direction = 'ltr';
function preventBack() {
    if (window.history && history.pushState) { // check for history api support
        window.addEventListener('load', function () {

            // create history states
            history.pushState(-1, null); // back state
            history.pushState(0, null); // main state
            history.pushState(1, null); // forward state
            history.go(-1); // start in main state

            this.addEventListener('popstate', function (event, state) {
                // check history state and fire custom events
                if (state = event.state) {

                    event = document.createEvent('Event');
                    event.initEvent(state > 0 ? 'next' : 'previous', true, true);
                    this.dispatchEvent(event);

                    var r = confirm("Changes you made may not be saved");
                    if (r == true) {
                        // Do nothing 
                        console.log(r);
                        window.location = "../../../../../..";

                    } else {
                        //  self.location = document.referrer;  
                        console.log("continue with test");

                    }
                    // reset state
                    history.go(-state);

                }
            }, false);
        }, false);
    }

}