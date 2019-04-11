/**
 * Created by marwa.mf on 4/6/2017.
 */
window.addEventListener('load', init);
var canvas, stage, exportRoot;
var dragabblesNum = 23;
var num_of_draggables = ['3', '6', '10', '15'];
var sounds = document.getElementsByClassName('aud');
var currentFrame = 0;
var shawn_Ans = [[0, 1, 2, 15, 16], [3, 4, 5, 17, 18], [6, 7, 8, 9, 19, 20], [10, 11, 12, 13, 14, 21, 22]]
var score = 0;
var Right_Ans;
var False_Ans;
var Car_Sound;
var contentimg;
var langBtnClicked = false;

function init() {
    canvas = document.getElementById("canvas");
    images = images || {};

    var manifest = [
        {
            src: "images/Group.png",
            id: "Group"
        },
        {
            src: "images/Group_0.png",
            id: "Group_0"
        },
        {
            src: "images/Group_1.png",
            id: "Group_1"
        },
        {
            src: "images/Group_11.png",
            id: "Group_11"
        },
        {
            src: "images/Group_12.png",
            id: "Group_12"
        },
        {
            src: "images/Group_2.png",
            id: "Group_2"
        },
        {
            src: "images/Group_3.png",
            id: "Group_3"
        },
        {
            src: "images/Group_6.png",
            id: "Group_6"
        },
        {
            src: "images/Group_7.png",
            id: "Group_7"
        },
        {
            src: "images/Group_8.png",
            id: "Group_8"
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
            src: "images/Mesh.png",
            id: "Mesh"
        },
        {
            src: "images/Mesh_1.png",
            id: "Mesh_1"
        },
        {
            src: "images/Mesh_2.png",
            id: "Mesh_2"
        },
        {
            src: "images/Mesh_3.png",
            id: "Mesh_3"
        },
        {
            src: "images/Mesh_4.png",
            id: "Mesh_4"
        },
        {
            src: "images/Mesh_5.png",
            id: "Mesh_5"
        },
        {
            src: "images/Path_1.png",
            id: "Path_1"
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
    exportRoot = new lib.L0_B_Act_PY();

    stage = new createjs.Stage(canvas);
    stage.addChild(exportRoot);
    stage.update();

    createjs.Ticker.setFPS(24);
    createjs.Ticker.addEventListener("tick", stage);
    stage.enableMouseOver(20);
    exportRoot.finishBtn.alpha = 0;
    exportRoot['FLangBtn'].alpha = 0;



    setupGame();
}

function setupGame() {

    exportRoot['start'].onClick = startFn;
    exportRoot['start'].addEventListener('mouseover', MouseOverhandlerBtn);
    exportRoot['start'].addEventListener('mouseout', MouseOuthandlerBtn);
    exportRoot['start'].clicked = false;

    exportRoot['langBtn'].onClick = langFn;
    exportRoot['langBtn'].addEventListener('mouseover', MouseOverhandlerBtn);
    exportRoot['langBtn'].addEventListener('mouseout', MouseOuthandlerBtn);

    exportRoot['FLangBtn'].onClick = langFn;
    exportRoot['FLangBtn'].addEventListener('mouseover', MouseOverhandlerBtn)
    exportRoot['FLangBtn'].addEventListener('mouseout', MouseOuthandlerBtn)

    exportRoot.finishBtn.replay.onClick = Replay;
    exportRoot.finishBtn.replay.id = "replay";
    exportRoot.finishBtn.replay.addEventListener('mouseover', pointerMouse);
    exportRoot.finishBtn.replay.addEventListener('mouseout', pointerMouseOut);

    pauseAll();
    Right_Ans = sounds[parseInt(sounds.length - 2)];
    False_Ans = sounds[parseInt(sounds.length - 1)];
    Car_Sound = sounds[parseInt(sounds.length - 3)];

    for (var i = 0; i < dragabblesNum; i++) {

        exportRoot["dragabbles"]["dragabble_" + i].id = i;
        exportRoot["dragabbles"]["dragabble_" + i].cursor = "pointer";
        exportRoot["dragabbles"]["dragabble_" + i].xpos = exportRoot["dragabbles"]["dragabble_" + i].x;
        exportRoot["dragabbles"]["dragabble_" + i].ypos = exportRoot["dragabbles"]["dragabble_" + i].y;
        exportRoot["dragabbles"]["dragabble_" + i].scaleX = 0;
        exportRoot["dragabbles"]["dragabble_" + i].scaleY = 0;
        exportRoot["dragabbles"]["dragabble_" + i].onPress = placeIt;
        exportRoot["dragabbles"]["dragabble_" + i].gotoAndStop(0);
        if (i < 15)
            exportRoot["dragabbles"]["dropabble_" + i].gotoAndStop(0);

    }
    exportRoot.finishBtn.alpha = 0;
    pauseAll();
    sounds[currentFrame].play();
    exportRoot.pictures.gotoAndStop(0);

}

function startFn(e) {
    e.target.alpha = 0;
    exportRoot['langBtn'].alpha = 0
    exportRoot['backbtn'].alpha = 0;
    currentFrame++;

    carMotion();
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
        exportRoot['langBtn'].gotoAndStop(1);
        exportRoot['FLangBtn'].gotoAndStop(1);
        exportRoot['start'].gotoAndStop(1);
        exportRoot['backbtn'].gotoAndStop(1);
        exportRoot.finishBtn.gotoAndStop(1);
        langBtnClicked = true;
        exportRoot['start'].clicked = true;
    } else {
        exportRoot['langBtn'].gotoAndStop(0);
        exportRoot['FLangBtn'].gotoAndStop(0);
        exportRoot['start'].gotoAndStop(0);
        exportRoot['backbtn'].gotoAndStop(0);
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
        if (e2.target.id < 15) {
            console.log("X: " + Math.abs(e2.target.x - exportRoot["dragabbles"]["dropabble_" + e2.target.id].x));
            console.log("Y: " + Math.abs(e2.target.y - exportRoot["dragabbles"]["dropabble_" + e2.target.id].y));
        }

        if (e2.target.id < 15 && Math.abs(e2.target.x - exportRoot["dragabbles"]["dropabble_" + e2.target.id].x) < 40 &&
            Math.abs(e2.target.y - exportRoot["dragabbles"]["dropabble_" + e2.target.id].y) < 40) {
            e2.target.x = exportRoot["dragabbles"]["dropabble_" + e2.target.id].x;
            e2.target.y = exportRoot["dragabbles"]["dropabble_" + e2.target.id].y;
            exportRoot["dragabbles"]["dropabble_" + e2.target.id].gotoAndStop(1);
            console.log("currentFrame: " + parseInt(currentFrame - 1));
            e2.target.onPress = null;
            e2.target.gotoAndStop(1);
            pauseAll();
            Right_Ans.play();
            score++;
            setTimeout(function () {
                if (score == num_of_draggables[parseInt(currentFrame - 1)]) {
                    if (currentFrame == 1) {
                        exportRoot["dragabbles"]["dropabble_0"].gotoAndStop(2);
                        exportRoot["dragabbles"]["dropabble_1"].gotoAndStop(2);
                        exportRoot["dragabbles"]["dropabble_2"].gotoAndStop(2);
                    }
                    if (currentFrame == 2) {
                        exportRoot["dragabbles"]["dropabble_3"].gotoAndStop(2);
                        exportRoot["dragabbles"]["dropabble_4"].gotoAndStop(2);
                        exportRoot["dragabbles"]["dropabble_5"].gotoAndStop(2);
                    }
                    if (currentFrame == 3) {
                        exportRoot["dragabbles"]["dropabble_6"].gotoAndStop(2);
                        exportRoot["dragabbles"]["dropabble_7"].gotoAndStop(2);
                        exportRoot["dragabbles"]["dropabble_8"].gotoAndStop(2);
                        exportRoot["dragabbles"]["dropabble_9"].gotoAndStop(2);
                    }
                    if (currentFrame == 4) {
                        exportRoot["dragabbles"]["dropabble_10"].gotoAndStop(2);
                        exportRoot["dragabbles"]["dropabble_11"].gotoAndStop(2);
                        exportRoot["dragabbles"]["dropabble_12"].gotoAndStop(2);
                        exportRoot["dragabbles"]["dropabble_13"].gotoAndStop(2);
                        exportRoot["dragabbles"]["dropabble_14"].gotoAndStop(2);

                    }
                    removeEvent();
                    pauseAll();
                    sounds[currentFrame].play();
                    sounds[currentFrame].onended = function () {
                        setTimeout(function () {
                            exportRoot["dragabbles"].gotoAndStop(1);
                            hideAll();
                            if (score == 15) {
                                exportRoot.finishBtn.alpha = 1;
                                exportRoot['FLangBtn'].alpha = 1;
                                exportRoot['finishBtn'].alpha = 1;
                            } else {
                                exportRoot["dragabbles"].alpha = 0;
                                carMotion();
                                currentFrame++;
                            }
                        }, 1000);
                    }
                }
            }, 600);
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

function removeEvent() {
    for (var i = 0; i < dragabblesNum; i++) {
        exportRoot["dragabbles"]["dragabble_" + i].onPress = null;
    }
}

function placeEvent() {
    for (var i = 0; i < dragabblesNum; i++) {
        exportRoot["dragabbles"]["dragabble_" + i].onPress = placeIt;
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
    console.log("replay");
    exportRoot.finishBtn.alpha = 0;

    exportRoot['langBtn'].alpha = 0;
    exportRoot['FLangBtn'].alpha = 0;
    currentFrame = 1;
    score = 0;
    for (var i = 0; i < dragabblesNum; i++) {

        exportRoot["dragabbles"]["dragabble_" + i].x = exportRoot["dragabbles"]["dragabble_" + i].xpos;
        exportRoot["dragabbles"]["dragabble_" + i].y = exportRoot["dragabbles"]["dragabble_" + i].ypos;
        exportRoot["dragabbles"]["dragabble_" + i].scaleX = 0;
        exportRoot["dragabbles"]["dragabble_" + i].scaleY = 0;
        exportRoot["dragabbles"]["dragabble_" + i].onPress = placeIt;
        exportRoot["dragabbles"]["dragabble_" + i].gotoAndStop(0);
        if (i < 15)
            exportRoot["dragabbles"]["dropabble_" + i].gotoAndStop(0);

    }
    exportRoot["dragabbles"].alpha = 1;
    exportRoot["dragabbles"].gotoAndStop(0);
    exportRoot.pictures.gotoAndStop(0);
    exportRoot.gotoAndStop(currentFrame);
    pauseAll();
    carMotion();
}

function hideAll() {
    for (var i = 0; i < dragabblesNum; i++) {
        exportRoot["dragabbles"]["dragabble_" + i].scaleX = 0;
        exportRoot["dragabbles"]["dragabble_" + i].scaleY = 0;
    }
}

function carMotion() {
    pauseAll();
    Car_Sound.play();
    exportRoot.pictures.gotoAndStop(0);
    exportRoot["dragabbles"].gotoAndStop(0);
    exportRoot.car.gotoAndPlay(1);
    setTimeout(function () {
        /*  exportRoot.car.gotoAndPlay(44);*/
        for (var x = 0; x < shawn_Ans[currentFrame - 1].length; x++) {
            exportRoot["dragabbles"]["dragabble_" + shawn_Ans[currentFrame - 1][x]].onPress = placeIt;
            exportRoot["dragabbles"]["dragabble_" + shawn_Ans[currentFrame - 1][x]].scaleX = 1;
            exportRoot["dragabbles"]["dragabble_" + shawn_Ans[currentFrame - 1][x]].scaleY = 1;
            exportRoot.car.gotoAndPlay(44);
            exportRoot.pictures.gotoAndStop(currentFrame);
            exportRoot["dragabbles"].alpha = 1;
            exportRoot["dragabbles"].gotoAndStop(currentFrame - 1);
        }

    }, 2000);
}
