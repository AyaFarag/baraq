/*

    This Code Written By 
    
    Ahmed Ali Ahmed Mahmoud 
    
    on 10/8/2018
    
    Task Name: Activity FW Level1, Unit1, Lesson1
    
**/


$(document).ready(function () {
    
    $('#card1').hover(function () {
            nav_audio1.play();
        },
        function () {
            nav_audio1.load();
        });
    $('#card1').click(function () {
            nav_audio1.play();
        },
        function () {
            nav_audio1.load();
        });
});

$(document).ready(function () {
    $('#card2').hover(function () {
            nav_audio2.play();
        },
        function () {
            nav_audio2.load();
        });
});
$(document).ready(function () {
    $('#card3').hover(function () {
            nav_audio3.play();
        },
        function () {
            nav_audio3.load();
        });
});
$(document).ready(function () {
    $('#card4').hover(function () {
            nav_audio4.play();
        },
        function () {
            nav_audio4.load();
        });
});
$(document).ready(function () {
    $('#card5').hover(function () {
            nav_audio5.play();
        },
        function () {
            nav_audio5.load();
        });
});
$(document).ready(function () {
    $('#card6').hover(function () {
            nav_audio6.play();
        },
        function () {
            nav_audio6.load();
        });
});



$('.flip-all').click(function () {
    $(".card-style").flip('toggle');
});


$(document).ready(function () {
    $('#card6').hover(function () {
            nav_audio6.play();
        },
        function () {
            nav_audio6.load();
        });
});
$(document).ready(function () {
    $('#card7').hover(function () {
            nav_audio7.play();
        },
        function () {
            nav_audio7.load();
        });
});

$(document).ready(function () {
    $('#card8').hover(function () {
            nav_audio8.play();
        },
        function () {
            nav_audio8.load();
        });
});

$(document).ready(function () {
    $('#card9').hover(function () {
            nav_audio9.play();
        },
        function () {
            nav_audio9.load();
        });
});

$(document).ready(function () {
    $('#card10').hover(function () {
            nav_audio10.play();
        },
        function () {
            nav_audio10.load();
        });
});

$(document).ready(function () {
    $('#card11').hover(function () {
            nav_audio11.play();
        },
        function () {
            nav_audio11.load();
        });
});

$(document).ready(function () {
    $('#card12').hover(function () {
            nav_audio12.play();
        },
        function () {
            nav_audio12.load();
        });
});

var intImage = 2;

function changeListenImageWhenHover() {

    "use strict";

    var imgBeforHover = document.getElementById("imgBeforeHover");

    if (intImage === 2) {

        imgBeforHover.src = "imgs/flip-on.png";
        intImage = 1;

    } else {

        imgBeforHover.src = "imgs/flip-off.png";
        intImage = 2;
    }

}

// For Animation
function tweeningCards() {
    
    var delay = 0;
    console.log($('.cc'));
    $('.cc').each(function () {

        $(this).delay(delay).animate({
            opacity: '1',
            top: '0px',
            left: '0px',
        }, 300);
        delay += 200;
    });
    
}
tweeningCards();