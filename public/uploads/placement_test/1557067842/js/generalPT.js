var oldLoc, newLoc, correctAns, choosenAns;
var numOfQ = 20,
    correctAns = true,
    correctMultiDrag = true,
    currentDropSol = 0,
    newSrc,
    arabicNumbers = document.getElementsByClassName("arabicNumbers");
var map = [
        "&\#1632;", "&\#1633;", "&\#1634;", "&\#1635;", "&\#1636;",
        "&\#1637;", "&\#1638;", "&\#1639;", "&\#1640;", "&\#1641;"
        ]
oldLoc = parseInt(window.location.href.substr(-7, 2));
if (isNaN(oldLoc)) {
    oldLoc = parseInt(window.location.href.substr(-6, 1));
}
if (oldLoc > 1) {
    console.log("sss")
    $(".bullet:first-child").animate({
        opacity: 0,
        "margin-right": "-44px"
    }, 700, function () {
        $(".bullet:first-child").hide();
        $(".bullet:nth-child(2)").animate({
            opacity: 1,
        }, 100);
    });
}
if ($("#myAudio").length != 0) {
    Sound = document.getElementById("myAudio");
    Sound.addEventListener('pause', function () {
        Sound.currentTime = 0;
    }, false);
    /*$(".choiceClick").on('click', playSound);
    $(".choiceClick").on('tap', playSound);*/
}

function playSound() {
    Sound.play();
}

function next_prv_quiz() {
    /*$(".bg").fadeOut("slow", function () {*/
    // Animation complete.
    if (oldLoc < numOfQ) {
        //newLoc = "q" + (correctionArr.length + 1) + ".html";
        newLoc = oldLoc + 1;
        setTimeout(function () {
            window.location.href = window.location.href.replace("q" + oldLoc , "q" + newLoc );
        }, 500);
    } else {
        newLoc = "end";
        setTimeout(function () {
            window.location.href = window.location.href.replace("q" + oldLoc, newLoc);
        }, 500);
    }
    /*});*/
}
/* ** Click Question ** */
$(".choiceClick").on("click", clickchoice);
$(".choiceClick").bind("tap", clickchoice);
// .on >> Activate click event on choiceClick
function clickchoice(e) {
    playSound();
    // .off >> Deactivate click event on choiceClick
    $(".choiceClick").off("click", clickchoice);
    // and remove hand cursor
    $(".choiceClick").css("cursor", "default");
    if ($(this).hasClass("correctChoice")) { // if correct answer clicked
        
        if(localStorage.scoreL1!=null)
        localStorage.scoreL1 =  Number(localStorage.scoreL1) +1; // increase the score variable
        else
            localStorage.scoreL1=1;
        //
        
        console.log("here increase local storage");
        
    }
    setTimeout(next_prv_quiz, 100);
}
/////////////////////////////////////////////////////////////////////////
/* ** DragDrop Question ** */
var countChoice = 0,
    choiceNum = $(".ansDrop").length;
$(".choiceDrag").draggable({ // to apply the daraging fun.
    revert: true // to make the object return to it's original position
});

$(".ansDrop").droppable({ // to apply the dropping fun.
    accept: ".choiceDrag", // which object can drop on it
    // Triggered when an accepted draggable is dropped on the droppable
    hoverClass: "drop-hover",
    // The class will be added to the droppable while >>
    // >> an acceptable draggable is being hovered over the droppable.
    drop: dropElement,
    // fun. to define what happen when droppingthe object
});

function dropElement(event, ui) {
    playSound();
    draggableID = ui.draggable.attr('id');
    if (oldLoc == 16 || oldLoc == 17) {
        draggable_src = ui.draggable.attr('data-src');
        dropID = $(this).attr('id');
    }
    // ui.draggable: a jQuery object representing the draggable element.
    dropData_src = $(this).attr('data-flag');
    if (draggableID == dropData_src || ((oldLoc == 16 || oldLoc == 17) && draggable_src == dropData_src)) { // if correct answer draged
    } else { // if wrong answer draged
        correctAns = false;
    }
    countChoice++;
    $(ui.draggable).css("opacity", "0");
    $(this).text(ui.draggable.text());
    $(this).droppable("destroy"); // Disables the droppable
    $(ui.draggable).draggable("destroy"); // Disables the draggable
    ///////////////////////////////////////////////////////////////////
    if (countChoice == choiceNum) {
        if (correctAns) {
            localStorage.scoreL1 = Number(localStorage.scoreL1) + 1; // increase the score variable
        }
        setTimeout(next_prv_quiz, 500);
    }
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
