

// put the student name
$(".student-name").text(localStorage.name);
var newLocation;
// calculate the unit to go
var studScore = Number(localStorage.scoreL1),
        maxScore = 20,
        success = false,
        loadingItrv,
        arabicNumbers = document.getElementsByClassName("arabicNumbers");
var map = [
    "&\#1632;", "&\#1633;", "&\#1634;", "&\#1635;", "&\#1636;",
    "&\#1637;", "&\#1638;", "&\#1639;", "&\#1640;", "&\#1641;"
];
var l1 = document.getElementById('l1-score'),
        l2 = document.getElementById('l2-score'),
        l3 = document.getElementById('l3-score'),
        l0 = document.getElementById('l0-score'),
        l4 = document.getElementById('l4-score');
$(".windowFB").animate({
    opacity: 1,
}, 500);

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        var obj = JSON.parse(this.responseText);

console.log(obj);

         //{result,next_url,start_unit,start_level}

        if (obj.result) {
          

           




            success = true;
            $(".windowFB").css("background-color", "#c7c7c7");
            $("#goodFBImg").show();
            $("#goodFBImg").animate({
                opacity: 1,
            }, 500);

            setTimeout(function(){

                window.location.href = obj.next_url;
            },2000);
            

        } else {
            
                window.location.href = obj.next_url;
         
        }

    }

}


var url = window.location.href;
var arr = url.split(":");

var p = arr[0];
var ws_path = p + "://" + document.domain + "/asl/ws/";

var url = "http://localhost:1234/baraq/public/placement/test/" + studScore + "/" + maxScore + "/1"

console.log(url)
xhttp.open("GET", url, true);
xhttp.send();



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

function navigate() {
    window.open(newLocation, "_blank");
}