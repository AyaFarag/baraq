"use strict";
var keepGoing = true;

// 0 onLoad - 1 play - 2 pause
var playerState = 0;
var mp3Lenght = 0;
var currentTimeBar = document.getElementById("currentTimeBar");

var sound = new Howl({
    src: [soundSrc]
});

// Load how long the mp3 is
sound.once('load', setTotalTime);

function setTotalTime() {
    mp3Lenght = sound._duration;
    $("#lblMp3Lenght").text(mp3Lenght + ' s');

    var handle = $("#custom-handle");
    // I go to the second x (depending on the percentage of the bar)
    $("#slider").slider({
        slide: function (event, ui) {
            var goTO = Math.round((mp3Lenght / 100) * ui.value);
            sound.seek(goTO);
        }
    });
}

// Fires when the sound finishes playing.
sound.on('end', function () {
    stopLoop();
});

// Fires when the sound start to play
sound.on('play', function () {
    startLoop();
    playerState = 1;

});

function myLoop() {
    // Update time
    var with2Decimals = sound.seek().toString().match(/^-?\d+(?:\.\d{0,2})?/)[0];
    $("#lblMp3State").text(with2Decimals + ' / ');
    // Calculate the percentage of progress of the MP3
    var width;
    width = (sound.seek() * 100) / mp3Lenght;

    currentTimeBar.style.width = width + '%';
    $("#slider").slider("value", width); // Seta the placeholder
    if (keepGoing) {
        setTimeout(myLoop, 250);
    }
}

function startLoop() {
    keepGoing = true;
    myLoop();
}

function stopLoop() {
    keepGoing = false;
}

function bntMp3Play() {
    if (playerState == 2) {
        sound.play();
    } else {
        sound.stop().play();
    }
    playerState = 1;
}

function bntMp3Pause() {
    sound.pause();
    playerState = 2;
}

function bntMp3Stop() {
    sound.stop();
    playerState = 0;
    var with2Decimals = sound.seek().toString().match(/^-?\d+(?:\.\d{0,2})?/)[0];
    $("#lblMp3State").text(with2Decimals + ' /');
}