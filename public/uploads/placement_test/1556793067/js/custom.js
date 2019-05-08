var intImage = 2,

    playSound = 2;

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

//Question #1
$('.question').on('click', '.Choices h1', function () {

    var id = $(this).parents('div').attr('id'),

        answer = $(this).parent('.Choices').siblings('.answer'),

        correctAnswer = 0;

    if ($(this).parents('#' + id).hasClass('answered')) {

        return false;

    } else {

        if ($(this).data('correct') == '1') {

            $(this).addClass('correct');

            $('#correct').get(0).play();

            $('.area-zone').fadeOut(1700, function () {

                window.location = linkMeTo;

            });


        } else if ($(this).data('correct') == '2') {

            $(this).addClass('incorrect');

            $('#wrong').get(0).play();

        } else if ($(this).data('correct') == '3') {

            $(this).addClass('incorrect');

            $('#wrong').get(0).play();
        }

        $(this).parent().next('.answer').show().parent('div').addClass('answered');

    }

});


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

    $('.botto').toggleClass('english arabic');

});



//Question #5
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

                if (this.getAttribute('data-flag') == ui.draggable[0].getAttribute("data-flag")) {

                    this.innerHTML = ui.draggable[0].innerHTML;

                    $('#correct').get(0).play();

                    ui.draggable.css("opacity", "0");

                    $('.area-zone').fadeOut(1000, function () {

                        window.location = "q6.html";

                    });

                } else {

                    $('#wrong').get(0).play();

                }

            }

        });

    });

});

var counter = 0;

//Question #12
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
                console.log("Stage 0");

                if (this.getAttribute('data-flag') == ui.draggable[0].getAttribute("data-flag")) {

                    counter++;
                    console.log("Stage 1");
                    if (this.getAttribute('data-flag') == ui.draggable[0].getAttribute("data-flag")) {
                        
                        console.log("Stage 2");
                        
                        this.innerHTML = ui.draggable[0].innerHTML;
                        
                        console.log("Stage 3");
                        
                        $('#correct').get(0).play();

                        ui.draggable.css("opacity", "0");

                    } else {

                        $('#wrong').get(0).play();

                    }
                    if (maxCount == counter) {
                        
                        console.log("maxCount: "+maxCount);
                        console.log("counter: "+counter);
                        $('.area-zone').fadeOut(1500, function () {
                            
                            window.location = directTo;

                        });

                    }

                } else {

                    $('#wrong').get(0).play();

                }

            }

        });

    });

});
