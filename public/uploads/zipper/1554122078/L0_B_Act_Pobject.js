/**
 * Created by marwa.mf on 4/6/2017.
 */
window.addEventListener('load', init);
var canvas, stage, exportRoot;
var dragabblesNum = 17;
var numofAns = ['0', '0', '3', '6', '10', '14'];
var sounds = document.getElementsByClassName('aud');
var currentFrame = 0;

var score = 0;
var intro_sound;
var Right_Ans;
var False_Ans;
var currentChar = 3;
var langBtnClicked = false;
var currentId = 3;

function init() {
    canvas = document.getElementById("canvas");
    images = images || {};

    var manifest = [
        {
            src: "images/Bitmap1.png",
            id: "Bitmap1"
        },
        {
            src: "images/LV1_U1_L1_Activity_P_img_11.png",
            id: "LV1_U1_L1_Activity_P_img_11"
        },
        {
            src: "images/LV1_U1_L1_Activity_P_img_21.png",
            id: "LV1_U1_L1_Activity_P_img_21"
        },
        {
            src: "images/path000.png",
            id: "path000"
        },
        {
            src: "images/path001.png",
            id: "path001"
        },
        {
            src: "images/path002.png",
            id: "path002"
        },
        {
            src: "images/path005.png",
            id: "path005"
        },
        {
            src: "images/path007.png",
            id: "path007"
        },
        {
            src: "images/path008.png",
            id: "path008"
        },
        {
            src: "images/path009.png",
            id: "path009"
        }
    ];


    var loader = new createjs.LoadQueue(false);
    loader.addEventListener("fileload", handleFileLoad);
    loader.addEventListener("complete", handleComplete);
    loader.loadManifest(manifest);


}

function handleFileLoad(evt) {
    if (evt.item.type == "image") {
        images[evt.item.id] = evt.result;
    }
}

function handleComplete() {
    exportRoot = new lib.L0_B_Act_P();

    stage = new createjs.Stage(canvas);
    stage.addChild(exportRoot);
    stage.update();

    createjs.Ticker.setFPS(24);
    createjs.Ticker.addEventListener("tick", stage);
    stage.enableMouseOver(20);
    setupGame();
}

function setupGame() {

    exportRoot['start'].onClick = startFn;
    exportRoot['start'].addEventListener('mouseover', MouseOverhandlerBtn);
    exportRoot['start'].addEventListener('mouseout', MouseOuthandlerBtn);
    exportRoot['start'].clicked = false;

    exportRoot['langBtn'].onClick = langFn;
    exportRoot['langBtn'].addEventListener('mouseover', MouseOverhandlerBtn)
    exportRoot['langBtn'].addEventListener('mouseout', MouseOuthandlerBtn)

    exportRoot['FLangBtn'].onClick = langFn;
    exportRoot['FLangBtn'].addEventListener('mouseover', MouseOverhandlerBtn)
    exportRoot['FLangBtn'].addEventListener('mouseout', MouseOuthandlerBtn)

    exportRoot.finishBtn.replay.id = "replay";
    exportRoot.finishBtn.replay.onClick = Replay;
    exportRoot.finishBtn.replay.addEventListener('mouseover', pointerMouse);
    exportRoot.finishBtn.replay.addEventListener('mouseout', pointerMouseOut);

    intro_Sound = sounds[0];
    Right_Ans = sounds[1];
    False_Ans = sounds[2];

    pauseAll();
    intro_Sound.play();

    exportRoot["ans_" + currentId].onPress = placeIt;

    for (var i = 3; i < dragabblesNum; i++) {
        exportRoot["ans_" + i].id = i;
        exportRoot["ans_" + i].cursor = "pointer";
        exportRoot["ans_" + i].xpos = exportRoot["ans_" + i].x;
        exportRoot["ans_" + i].ypos = exportRoot["ans_" + i].y;

        exportRoot["ans_" + i].gotoAndStop(0);
        exportRoot["place_" + i].gotoAndStop(0);
    }
}

function startFn(e) {
    pauseAll();
    e.target.alpha = 0;
    currentFrame++;
    exportRoot.gotoAndStop(currentFrame);
    exportRoot["sim"].play();
    setTimeout(function () {
        currentFrame += 2;
        exportRoot.gotoAndStop(currentFrame);
    }, 9000);
}

function placeIt(e) {
    e.target.disX = stage.mouseX - e.target.x;
    e.target.disY = stage.mouseY - e.target.y;

    // -- onMouseMove ----------
    e.onMouseMove = function (e1) {

        e1.target.x = e1.stageX - e1.target.disX;
        e1.target.y = e1.stageY - e1.target.disY;

    }
    // -- onMouseUp ----------&& exportRoot["place_"+i].count==0
    e.onMouseUp = function (e2) {

        if (Math.abs(e2.target.x - exportRoot["place_" + e2.target.id].x) < 60 &&
            Math.abs(e2.target.y - exportRoot["place_" + e2.target.id].y) < 60 &&
            e2.target.id == currentChar) {
            if (score < 13 ) {
                currentId++;
                exportRoot["ans_" +currentId].onPress = placeIt;
            }


            e2.target.x = exportRoot["place_" + e2.target.id].x;
            e2.target.y = exportRoot["place_" + e2.target.id].y;
            exportRoot["place_" + e2.target.id].gotoAndStop(1);
            e2.target.onPress = null;
            e2.target.gotoAndStop(1);
            pauseAll();
            Right_Ans.play();
            score++;
            console.log(score)
            currentChar++;
            if (score == numofAns[currentFrame - 1]) {
                currentFrame++;
                setTimeout(function () {
                    exportRoot.gotoAndStop(currentFrame);

                    if (score == 14) {
                        if (langBtnClicked) {
                            exportRoot.finishBtn.gotoAndStop(1);
                            exportRoot['FLangBtn'].gotoAndStop(1);
                        } else {
                            exportRoot.finishBtn.gotoAndStop(0);
                            exportRoot['FLangBtn'].gotoAndStop(0);
                        }
                    }
                }, 1000);
            }
        } else {

            createjs.Tween.get(e2.target, {
                override: true
            }).to({
                x: e2.target.xpos,
                y: e2.target.ypos
            }, 500, createjs.Ease.easeOut);
            pauseAll();
            False_Ans.play();
        }
    }
}

function pointerMouse(e) {
    e.target.cursor = 'pointer';
    if (e.target.id === "replay") {
        e.target.gotoAndStop(1);
    }
}

function pointerMouseOut(e) {
    e.target.cursor = 'default';
    if (e.target.id === "replay") {
        e.target.gotoAndStop(0);
    }
}

function Replay() {
    currentFrame = 3;
    currentChar = 3;
    score = 0;
    langBtnClicked = false;
    currentId = 3;
    exportRoot["ans_" + currentId].onPress = placeIt;
    
    for (var i = 3; i < dragabblesNum; i++) {

        exportRoot["ans_" + i].x = exportRoot["ans_" + i].xpos;
        exportRoot["ans_" + i].y = exportRoot["ans_" + i].ypos;
        //exportRoot["ans_" + i].onPress = placeIt;
        exportRoot["ans_" + i].gotoAndStop(0);

        exportRoot["place_" + i].gotoAndStop(0);

    }
    exportRoot.gotoAndStop(currentFrame);

}

function hideAll() {

    for (var i = 3; i < dragabblesNum; i++) {

        exportRoot["ans_" + i].scaleX = 0;
        exportRoot["ans_" + i].scaleY = 0;
    }
}

function MouseOverhandlerBtn(e) {

    if (!langBtnClicked) {
        e.target.cursor = 'pointer'
        e.target.pre_0.gotoAndStop(1)
    } else {
        e.target.cursor = 'pointer'
        e.target.pre_1.gotoAndStop(1)
    }
}

function MouseOuthandlerBtn(e) {

    if (!langBtnClicked) {
        e.target.pre_0.gotoAndStop(0)
    } else {
        e.target.pre_1.gotoAndStop(0)
    }
}

function MouseOuthandler(e) {
    e.target.gotoAndStop(0)
}

function langFn(e) {
    if (!langBtnClicked) {
        e.target.gotoAndStop(1);
        exportRoot['start'].gotoAndStop(1);
        exportRoot.backbtn.gotoAndStop(1);
        exportRoot.finishBtn.gotoAndStop(1);
        langBtnClicked = true;
        exportRoot['start'].clicked = true;
    } else {
        e.target.gotoAndStop(0);
        exportRoot['start'].gotoAndStop(0);
        exportRoot.backbtn.gotoAndStop(0);
        exportRoot.finishBtn.gotoAndStop(0);
        langBtnClicked = false;
        exportRoot['start'].clicked = false;
    }
}

function pauseAll() {

    for (var i = 0; i < sounds.length; i++) {
        sounds[i].pause();
        sounds[i].currentTime = 0;
    }
}
