var oldLoc, newLoc, correctAns, choosenAns,newSrc;

var numOfQ = 20,
    correctAns = true,
    correctMultiDrag = true,
    currentDropSol = 0,
    newSrc,
    arabicNumbers = document.getElementsByClassName("arabicNumbers"),
    quizNumber = document.getElementsByClassName("quizNumber");
var map = [
        "&\#1632;", "&\#1633;", "&\#1634;", "&\#1635;", "&\#1636;",
        "&\#1637;", "&\#1638;", "&\#1639;", "&\#1640;", "&\#1641;"
        ]
oldLoc = parseInt(window.location.href.substr(-7, 2));
if (isNaN(oldLoc)) {
    oldLoc = parseInt(window.location.href.substr(-6, 1));
}

var  imgId = document.getElementById('pullAR');
if (localStorage.EnglishPressed == "false") {
    intImage = 1;
    changeLanguageFun();
} else {
    intImage = 1;
    changeLanguageFun();
}


 
if (oldLoc > 1) {
  
    $(".bullet:first-child").animate({
        opacity: 0,
        "margin-left": "-44px"
    }, 700, function () {
        console.log("alpha 1");
        $(".bullet:first-child").hide();
        $(".bullet:nth-child(2)").animate({
            opacity: 1,
        }, 100);
    });
}
 

 


 

function next_prv_quiz() {
    /*$(".bg").fadeOut("slow", function () {*/
    // Animation complete.
    if (oldLoc < numOfQ) {
        //newLoc = "q" + (correctionArr.length + 1) + ".html";
        newLoc = oldLoc + 1;
        setTimeout(function () {
            window.location.href = window.location.href.replace("q" + oldLoc + ".html", "q" + newLoc + ".html");
        }, 500);
    } else {
        newLoc = "end.html";
        setTimeout(function () {
            window.location.href = window.location.href.replace("q" + oldLoc + ".html", newLoc);
        }, 500);
    }
    /*});*/
}
/* ** Click Question ** */
$(".choiceClick").on("click", clickchoice);
$(".choiceClick").bind("tap", clickchoice);
// .on >> Activate click event on choiceClick
function clickchoice(e) {
   
    // .off >> Deactivate click event on choiceClick
    $(".choiceClick").off("click", clickchoice);
    // and remove hand cursor
    $(".choiceClick").css("cursor", "default");
    if ($(this).hasClass("correctChoice")) { // if correct answer clicked
        localStorage.scoreL1 = Number(localStorage.scoreL1) + 1; // increase the score variable
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
   
    draggableID = ui.draggable.attr('id');
    if (oldLoc == 13 || oldLoc == 15 || oldLoc == 6 || oldLoc == 19) {
        draggable_src = ui.draggable.attr('data-src');
        dropID = $(this).attr('id');
    }
    // ui.draggable: a jQuery object representing the draggable element.
    dropData_src = $(this).attr('data-flag');
    if ( draggableID == dropData_src || ((oldLoc == 15 || oldLoc == 13 || oldLoc == 6 || oldLoc == 19) && draggable_src == dropData_src)) 
        { // if correct answer draged
        }
    else { // if wrong answer draged
            correctAns = false;
        }
    countChoice++;
    $(ui.draggable).css("opacity", "0");
    $(this).text(ui.draggable.text());
    $(this).droppable("destroy"); // Disables the droppable
    $(ui.draggable).draggable("destroy"); // Disables the draggable

    ///////////////////////////////////////////////////////////////////
    if (countChoice == choiceNum)
     {
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

function EnDigit() {
    quizNumber[0].innerHTML = oldLoc;
    for (var i = oldLoc; i < quizNumber.length; i++) {
    
    quizNumber[i].innerText = i+1;
    console.log(quizNumber[i]);
    }
}

function changeLanguageFun() {
    "use strict";
	//intImage=1;
    switch (intImage) {

        case 2:
            imgId.src = AR;
            intImage = 2;
          
            $("#pullAR").attr("src",EN);
            $("#pathtest").attr("src","imgs/saPlac-Test-en.png");
            $(".bullet").removeClass("arabicNumbers");
            $(".bullet").addClass("quizNumber");
            $(".r h2").removeClass("arabicNumbers");
            $(".navPlace div").removeClass("rightItem");
            $(".navPlace div").addClass("LeftItem");
            $(".r").addClass("lWhenEn");
            $(".bullet").addClass("bulleten");
            $(".inside_pag").addClass("inside_pagen");
     //ArDigit();
           // EnDigit();
          
            return (false);
        case 1:
            imgId.src = EN;
            intImage = 1;
            $("#pullAR").attr("src",AR);

            $("#pathtest").attr("src","imgs/Plac_Test_01.png");
        
            ArDigit();
            return (false);
    }
}






/* function changeLanguageFun() {
    "use strict";
    newSrc = $(".score img").attr("src");
    switch (intImage) {

        case 1:
            imgId.src = AR;
            intImage = 2;
            newSrc = newSrc.replace("-en", "-ar");
            console.log(newSrc)
            $(".back_button_small_all img").attr("src", newSrc);
            newSrc = newSrc.replace("-en.png", "-ar.png");
            $(".img-responsive").parent().removeClass("en-q-head");
            $(".arabic").addClass("english");
            $(".english").removeClass("arabic");
            $(".leftItem").removeClass("langWhenEn");
            $(".rightItem").removeClass("textWhenEn");
            $(".pag_small").removeClass("pageWhenEn");
            $(".pag_small").removeClass("margWhenEn" + oldLoc);
            $(".back_button_small").removeClass("swapToEnglish");
            $(".back_button_small_all").removeClass("swapBtnToEnglish");
            ArDigit();
            return (false);
        case 2:
            imgId.src = EN;
            intImage = 1;
            newSrc = newSrc.replace("-ar", "-en");
            console.log(newSrc)
            $(".back_button_small_all img").attr("src", newSrc);
            newSrc = newSrc.replace("-ar.png", "-en.png");
            $(".img-responsive").parent().addClass("en-q-head");
            $(".english").addClass("arabic");
            $(".arabic").removeClass("english");
            $(".leftItem").addClass("langWhenEn");
            $(".rightItem").addClass("textWhenEn");
            $(".pag_small").addClass("pageWhenEn");
            $(".pag_small").addClass("margWhenEn" + oldLoc);
            $(".back_button_small").addClass("swapToEnglish");
            $(".back_button_small_all").addClass("swapBtnToEnglish");
            EnDigit();
            return (false);
    }
} */
