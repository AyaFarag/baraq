var animateHelp;
var loop = false;

$(document).ready(function () {

    //anmait of elsmaa

    setInterval(moveHand, 1000);


    //To hide the earphone
    $('.fastyle').hide();
    //To change on click
    $(".houv").hover(function () {
        //   $(this > '.fastyle').css("display", "inline-block");
        //  $(this).siblings('.fastyle').css("display", "inline-block");
        //$(this).siblings(this).children('.fastyle').css("display", "inline-block");
        $(this).find(".fastyle").css("display", "inline-block");
        $(this).find(".fastyle").css("margin-right", "8%");
        $(this).css("background-color", "#FFFFFF");
    });
    //To change in mouse leave
    $(".houv").mouseleave(function () {
        $('.fastyle').css("display", "none");
        // $('.houv').css("background-color", "#F7F7F7");
    });
    //functions of occordion
    $('.f').click(function () {

        $(this).css("color", "#F98D4A");
        $('.s').css("color", "#444");
        $('.th').css("color", "#444");
        $('.fo').css("color", "#444");

    });
    $('.s').click(function () {

        $(this).css("color", "#F98D4A");
        $('.f').css("color", "#444");
        $('.th').css("color", "#444");
        $('.fo').css("color", "#444");

    });
    $('.th').click(function () {

        $(this).css("color", "#F98D4A");
        $('.s').css("color", "#444");
        $('.f').css("color", "#444");
        $('.fo').css("color", "#444");

    });
    $('.fo').click(function () {

        $(this).css("color", "#F98D4A");
        $('.s').css("color", "#444");
        $('.th').css("color", "#444");
        $('.f').css("color", "#444");

    });
    $('.u1 , .u2 , .u3').click(function () {

        $(this).css("color", "#F98D4A");
        // window.location =  $( this ).att;
        window.location = "words.html";


    });



});
//function to play sound of the words
$('.houv').click(function () {
    var sound = $(this).attr('soundame');
    console.log(sound);
    $('#carteSoudCtrl').attr('src', sound);
    console.log($('#carteSoudCtrl').attr('src'));
    $('#carteSoudCtrl')[0].play();
    
    $('.pressHere i').css("display", "none");

});


// function to animate  


function moveHand() {
    console.log("Move Hand");
    $(".pressHere i").animate({
        marginRight: "-=20px"
    }, 300, function () {
        $(".pressHere i").animate({
            marginRight: "+=20px"
        }, 300);
    });
}
