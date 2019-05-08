var intImage = 2,

    playSound = 2;

var oldLoc,

    newLoc,

    correctAns,

    choosenAns;

var numOfQ = 16,

    counterForPushing = 0,

    correctAns = true,

    correctMultiDrag = true,

    firstChoice = true;


oldLoc = parseInt(window.location.href.substr(-7, 2));

if (isNaN(oldLoc)) {

    oldLoc = parseInt(window.location.href.substr(-6, 1));

}

if (localStorage.final == "true") {

    $(".buttonPages").css("display", "block");

}

var correctionArr = JSON.parse(localStorage.getItem("correctionArr"));

var storedAnswers = JSON.parse(localStorage.getItem("storedAnswers"));

var storedAnswersLength = storedAnswers.length;

function swapQuizImage() {

    "use strict";

    var rSide = document.getElementById("rightSide"),

        lSide = document.getElementById("leftSide");

    switch (intImage) {

        case 1:
            IMG1.src = "images/English_Button.png";

            IMG2.src = "images/Tradition_type.png";

            IMG3.src = "images/Freeback_type.png";

            IMG4.src = "images/Print.png";

            IMG5.src = "images/quizAr-01.png";

            rSide.style.float = "right";

            lSide.style.float = "left";

            intImage = 2;

            return (false);

        case 2:
            IMG1.src = "images/Arabic_Button.png";

            IMG2.src = "images/classic.png";

            IMG3.src = "images/review.png";

            IMG4.src = "images/print_btn.png";

            IMG5.src = "images/QuizEn.png";

            rSide.style.float = "left";

            lSide.style.float = "right";

            intImage = 1;

            return (false);

    }
}

function playAudio() {

    "use strict";

    var sound = document.getElementById("myAudio");


    if (playSound === 2) {

        sound.play();

        playSound = 1;

    } else {

        sound.pause();

        playSound = 2;
    }
}

function changeListenImageWhenHover() {

    "use strict";

    var imgBeforHover = document.getElementById("imgBeforeHover");

    if (intImage === 2) {

        imgBeforHover.src = "../images/Listening_button_back.png";

        intImage = 1;

    } else {

        imgBeforHover.src = "../images/Listening_button.png";

        intImage = 2;
    }

}
// click function
//Question #1
if (localStorage.final == "false") { // if didn't finish the Quiz

    $('.question').on('click', '.answ .an', clickFun);

} else if ($(".answ .an").length != 0) { // if finish Quiz and in click question

    $('.answ .an').removeClass("click-hover");

    if (storedAnswers[oldLoc - 1] !== true) { // if wrong choice 
        // (storedAnswers array's element of the number of the page -1 has the choosen answer)

        if (oldLoc < 15) {

            $(".answ .an[data-correct='" + storedAnswers[oldLoc - 1] + "']").addClass("incorrect");
            // add the incorrect class to the incorrect choosen answer

        } else {

            $(".answ .an[data-correct='" + storedAnswers[oldLoc - 1] + "']").addClass("incorrectNoSymbol");
        }
    }
    if (oldLoc < 15) {
        $(".answ .an[data-correct='1']").addClass("correct"); // add the correct class to the correct answer
    } else {
        $(".answ .an[data-correct='1']").addClass("correctNoSymbol"); // add the correct class to the correct answer
    }
}

function clickFun() {



    "use strict";


    var id = $(this).parents('div').attr('id'),

        answer = $(this).parent('.answ').siblings('.answer'),

        correctAnswer = 0;

    $(this).removeClass("drag2-hover");

    $(".movehere").text($(this).text());

    if ($(this).parents('#' + id).hasClass('answered')) {

        return false;

    } else {

        if ($(this).data('correct') == '1') {

            if (oldLoc < 15) {
                $(this).addClass("correct"); // add the correct class to the correct answer
            } else {
                $(this).addClass("correctNoSymbol"); // add the correct class to the correct answer
            }
            $('#correct').get(0).play();



            $('.question').off('click', '.answ .an', clickFun);

            // ** review-mode **
            if (firstChoice) {
                localStorage.score = Number(localStorage.score) + 1; // increase the score variable
                correctionArr.push(1); // push the result for the page in my answers array
                storedAnswers.push(true);
                firstChoice = false;
            }
            $('.area-zone').fadeOut(1700, function () {

                window.location = linkMeTo;

            });


        } else {
            if (oldLoc < 15) {

                $(this).addClass("incorrect");
                // add the incorrect class to the incorrect choosen answer

            } else {

                $(this).addClass("incorrectNoSymbol");
            }
            $(this).off('click', '.answ .an', clickFun);

            $('#wrong').get(0).play();

            // ** review-mode **
            if (firstChoice) {
                correctionArr.push(0); // push the result for the page in my answers array
                storedAnswers.push($(this).attr("data-correct"));
                firstChoice = false;
            }
        }

        // update my answers array in localStorage
        localStorage.setItem("correctionArr", JSON.stringify(correctionArr));
        localStorage.setItem("storedAnswers", JSON.stringify(storedAnswers));
        //console.log(localStorage.getItem("score"));

        $(this).parent().next('.answer').show().parent('div').addClass('answered');

    }

}

function arabicToEnglish() {

    "use strict";

    switch (intImage) {

        case 1:
            q1En.src = "../images/English_Button.png";
            clkSuitableChoice.src = "../images/ChooseSuitableChoice-01.png";
            listenToVoice.src = "../images/listentothenanswer-01.png";
            intImage = 2;
            return (false);

        case 2:
            q1En.src = "../images/Arabic_Button.png";
            clkSuitableChoice.src = "../images/ClickonSuitableChoiceBlack-01.png";
            listenToVoice.src = "../images/ListentoVoiceEN-01.png";
            intImage = 1;
            return (false);

    }

}

$('.botto').click(function () {

    "use strict";

    $('.botto').toggleClass('english arabic');

});

var counter = 0;

// DragDrop Question
//Question #12
if (localStorage.final == "false") {
    $(function () {

        "use strict";

        $(".draggable").each(function () {

            $(this).draggable({

                revert: true

            });

        });

        $(".droppable").each(function () {

            $(this).droppable({

                drop: function (event, ui) {

                    if ($(this).attr('data-flag') == ui.draggable.attr("data-flag")) {

                        counter++;

                        if (firstChoice && maxCount == 1) {
                            //$(".draggable").draggable("destroy");
                            storedAnswers.push(true);
                        }

                        $(this).text(ui.draggable.text());
                        if (maxCount > 1) {
                            $(this).next().css("opacity", 0);
                        }

                        ui.draggable.css("opacity", "0");

                        if (maxCount == counter) {

                            $('#correct').get(0).play();

                            if (correctAns) {
                                localStorage.score = Number(localStorage.score) + 1; // increase the score variable
                                correctionArr.push(1); // push the result for the page in my answers array
                                if (firstChoice && maxCount > 1) {
                                    storedAnswers.push(true);
                                }
                            } else {
                                correctionArr.push(0);
                            }
                            localStorage.setItem("correctionArr", JSON.stringify(correctionArr));
                            localStorage.setItem("storedAnswers", JSON.stringify(storedAnswers));

                            $('.area-zone').fadeOut(1500, function () {

                                window.location = directTo;
                                if (oldLoc == 16) {
                                    localStorage.final = "true";
                                }

                            });
                        }

                    } else {

                        $('#wrong').get(0).play();
                        if (firstChoice) {
                            correctAns = false;
                            storedAnswers.push(ui.draggable.attr("data-flag"));
                            firstChoice = false;
                        }

                    }
                }

            });

        });

    });
} else if ($(".draggable").length != 0) { // else if finish Quiz and in drag question

    $(".draggable").parent().removeClass("drag-hover");
    $(".draggable").parent().removeClass("drag2-hover");
    $(".draggable").removeClass("drag-hover");
    $(".draggable").removeClass("drag2-hover");
    // remove the has cursor from draggable objects

    if (maxCount == 1) { // if single dragging object
        correctAns = $(".draggable[data-flag='1']");
        // correctAns found by id attr equal to data-flag attr of the droppable obj.
        if (storedAnswers[oldLoc - 1] !== true) { // if wrong drag
            choosenAns = $(".draggable[data-flag='" + storedAnswers[oldLoc - 1] + "']");
            $(".droppable").text(choosenAns.text()); // put the wrong choosen text
            correctAns.addClass("correctNoSymbol"); // highlight the correct ans
            $(".droppable").parent().addClass("incorrectDrag"); // highlight the wrong ans
        } else { // if correct drag
            choosenAns = correctAns;
            $(".droppable").parent().addClass("correctDrag"); // highlight the correct ans
            $(".droppable").text(correctAns.text());
            // put the correct choosen text in the dropped place
        }
        choosenAns.css("opacity", "0"); // hide the choosenAns

    } else { // if multi dragging objects
        for (var i = 1; i <= maxCount; i++) {
            correctAns = $(".draggable[data-flag='" + i + "']");
            currentDrop = $(".droppable[data-flag='" + i + "']");
            if (storedAnswers[oldLoc - 1] == true) { // if correct multi drag
                currentDrop.text(correctAns.text());
                currentDrop.next().css("opacity", 0);
                // put the correct choosen text in the dropped place
            } else { // if wrong multi drag
                $(".correctAnsDiv").text($(".correctAnsDiv").text() + " " + correctAns.text());
                // put the correct ans in the correctAnsDiv
            }
        }
        if (storedAnswers[oldLoc - 1] == true) {
            currentDrop.parent().parent().addClass("correctDrag"); // highlight the correct ans
        } else {
            $(".droppable").parent().parent().css("opacity", 0); // hide the dropped place
            $(".draggable").parent().parent().addClass("incorrectDrag"); // highlight the wrong ans
        }
    }
}





function changeLanguageFun() {

    "use strict";

    switch (intImage) {

        case 1:
            imgId.src = AR;
            intImage = 2;
            return (false);
        case 2:
            imgId.src = EN;
            intImage = 1;
            return (false);

    }


}
