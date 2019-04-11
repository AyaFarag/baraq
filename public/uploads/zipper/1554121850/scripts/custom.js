var animateHelp;
var loop = false;

$(document).ready(function () {
    var EnglishPressed = false;
    var firstClick = false;
    var audio_context;
    var recorder;
    var url;
    var secondClick = true;
    var firstTime = false;
    
    $('#audioTitle')[0].play();
    
    // enable the microphone
    try {
        window.AudioContext = window.AudioContext || window.webkitAudioContext || false;
        navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;
        window.URL = window.URL || window.webkitURL;

        audio_context = new AudioContext;
    } catch (e) {
        alert('No web audio support in this browser!');
    }


    navigator.getUserMedia({
        audio: true
    }, startUserMedia, function (e) {
        console.log("alert");
    });

    // start button hide
    $(".startico").click(function () {
        $('#audioTitle')[0].pause();
        $(".hide-when-start").css("display", "none");
        $('.vidimg1 img').addClass('animateHelp');
        animateHelp = setInterval(animateFun, 1000 / 30);
        $(".showtype").on("click", PlayVideo); // enable click event on video tags
    });

    // change language button
    $(".langbtn").click(function () {
        var newSrc = $(this).attr("src");
        var newStartSrc = $(".startico").attr("src");
        if (EnglishPressed == "false") {
            newSrc = newSrc.replace("_ar_on.png", "_en_on.png");
            $(this).attr("src", newSrc);
            newStartSrc = newStartSrc.replace("_en_off.png", "_ar_off.png");
            $(".startico").attr("src", newStartSrc);
            $(".start h1").text("اسْتَمِعْ ثُمَّ رَدِّدْ");
            EnglishPressed = "true";

        } else {
            newSrc = newSrc.replace("_en_on.png", "_ar_on.png");
            $(this).attr("src", newSrc);
            newStartSrc = newStartSrc.replace("_ar_off.png", "_en_off.png");
            $(".startico").attr("src", newStartSrc);
            $(".start h1").text("listen then repeat");
            EnglishPressed = "false";
        }
    });

    // hover event for all button
    $(".hover").hover(function () {
        var newSrc = $(this).attr("src");
        newSrc = newSrc.replace("_off.png", "_on.png");
        $(this).attr("src", newSrc);
        $(this).addClass("add");
    }, function () {
        var newSrc = $(this).attr("src");
        newSrc = newSrc.replace("_on.png", "_off.png");
        $(this).attr("src", newSrc);
        $(this).removeClass("add");
    });

    // record button 
    function RecorderFn() {
        
        if (firstClick == false) {
            $("#audioPar").attr("src", "");
            firstClick = true;
            $(this).attr("src", "imgs/icon_reco_stop_off.png");
            startRecording(); // start recording in first click
            if (firstTime == false) {
                clearInterval(animateHelp);
                $('.RecordBtn').clearQueue();
                $('.RecordBtn').stop();
                $('.RecordBtn').removeClass('animateFunFirst');
                $('.RecordBtn').removeAttr('style');
            }
        } else {
            firstClick = false;
            $(this).attr("src", "imgs/icon_reco_off.png");
            stopRecording(); // stop recoring in second click
            //$('.RecordBtn').off("click", RecorderFn);
            $(".showtype").on("click", PlayVideo);
            if (firstTime == false) {
                $('.RepeatBtn').addClass('animateFunFirst');
                $('.RecordBtn').removeClass('animated');
                $('.RecordBtn').removeClass('rubberBand');
                animateHelp = setInterval(animateFunFirst, 700);
            }
        }
    }

    // change the running video 
    function PlayVideo() {
        $(".showtype").off("click", PlayVideo);
        if (firstTime == false) {
            clearInterval(animateHelp);
            $('.vidimg1 img').clearQueue();
            $('.vidimg1 img').stop();
            $('.vidimg1 img').removeClass('animateHelp');
            $('.vidimg1 img').removeAttr('style');
        }

        if ($(this).hasClass("vidimg1")) {
            $("video").attr("src", "vid/U1_L1_01.mp4")
            /*$('video').attr('poster', "imgs/poster_vid1.png");*/
        }
        if ($(this).hasClass("vidimg2")) {
            $("video").attr("src", "vid/U1_L1_02.mp4")
        }
        if ($(this).hasClass("vidimg3")) {
            $("video").attr("src", "vid/U1_L1_03.mp4")
        }
        if ($(this).hasClass("vidimg4")) {
            $("video").attr("src", "vid/U1_L1_04.mp4")
        }
        if ($(this).hasClass("vidimg5")) {
            $("video").attr("src", "vid/U1_L1_05.mp4")
        }
        $('video').get(0).play();
        $('video').attr('controls', true);
        $("#audioPar").attr("src", "");

        $('video').bind('ended', function () {
            if (firstTime == false) {
                $('.RecordBtn').addClass('animateFunFirst');
                animateHelp = setInterval(animateFunFirst, 700);
                $('.RecordBtn').on("click", RecorderFn);
            }
        })

        //$('.RecordBtn').on("click", RecorderFn);
        $('.RepeatBtn').click(function () {
            $('#audioPar')[0].play();
            if (firstTime == false) {
                clearInterval(animateHelp);
                $('.RepeatBtn').clearQueue();
                $('.RepeatBtn').stop();
                $('.RepeatBtn').removeClass('animateFunFirst');
                $(this).removeAttr('style');
                firstTime = true;
            }
        })
    }

    // create the recorder object
    function startUserMedia(stream) {
        var input = audio_context.createMediaStreamSource(stream);
        recorder = new Recorder(input);
    }

    // start recording function
    function startRecording() {
        recorder && recorder.record();
    }

    // stop recording function
    function stopRecording() {
        recorder && recorder.stop();

        // create WAV download link using audio data blob
        createDownloadLink();

        recorder.clear();
    }

    // pass the Created URL for audio tag
    function createDownloadLink() {
        recorder && recorder.exportWAV(function (blob) {
            url = URL.createObjectURL(blob);
            $("#audioPar").attr("src", url);
        });
    }

    function animateFun() {
        $('.animateHelp').animate({
            'width': "-=10px",
            'marginTop': "+=5px",
            'height': "-=10px",
           /* 'marginLeft': "+=5px",*/
        }, "slow");
        $('.animateHelp').animate({
            'width': "+=10px",
            'marginTop': "-=5px",
            'height': "+=10px",
           /* 'marginLeft': "-=5px",*/
        }, "slow");
    }
	
	function animateFunFirst(){
		if(loop == false)
		{
			$('.animateFunFirst').addClass('animated');
			$('.animateFunFirst').addClass('rubberBand');
			loop = true;
			console.log("add class");
		}
		else
		{
			$('.animateFunFirst').removeClass('animated');
			$('.animateFunFirst').removeClass('rubberBand');
			loop = false;
			console.log("remove Class");
		}
	}
});
