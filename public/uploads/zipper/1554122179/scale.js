var container;
function initSize() {
    var w = Math.max(document.documentElement.clientWidth, window.innerWidth || window.parent.innerWidth);
    var h = Math.max(document.documentElement.clientHeight, window.innerHeight || window.parent.innerHeight);
    var x = document.body.innerHTML;
    var bw = document.body.offsetWidth;
    var bh = document.body.offsetHeight;
    container = document.createElement("div");
    container.setAttribute("id", "container114");
    document.body.innerHTML = "";
    document.body.appendChild(container);
    container.setAttribute("style", "position:absolute;padding:0px;margin:0px;");
    container.style.width = bw + "px";
    container.style.height = bh + "px";
    container.style.left = ((w - bw) / 2) + "px";
    container.style.padding = "0px";
    container.style.margin = "0px";
    container.style.overflow = "hidden";
    document.body.style.padding = "0px";
    document.body.style.margin = "0px";
    document.body.style.overflow = "hidden";
    container.innerHTML = x;
    var Width = h > w ? h : w;
    var Height = h > w ? w : h;
    var scaleX = Width / container.offsetWidth;
    var scaleY = Height / container.offsetHeight;
    var factor = scaleX > scaleY ? scaleY : scaleX;
    container.style.webkitTransformOrigin = "50% 0%";
    //scaled_content.style.webkitTransform("unset");
    container.style.webkitTransform = 'scale(' + factor + ',' + factor + ')';
    var scene1 = document.getElementById('scene1'),
        scene2 = document.getElementById('scene2'),
        scene3 = document.getElementById('scene3'),
        scene4 = document.getElementById('scene4'),
        
        // Scene1 Btns
        goToScene2Btn = document.getElementById('firstSceneNextBtn'),
        
        // Scene 2 Btns
        backToScene1Btn = document.getElementById('secondScenePreviousBtn'),
        goToScene3Btn = document.getElementById('secondSceneNextBtn'),
        
        // Scene 3 Btns
        backToScene2Btn = document.getElementById('thirdScenePreviousBtn'),
        goToScene4Btn = document.getElementById('thirdSceneNextBtn'),
    
        // Scene 4 Btns
        backToScene3Btn = document.getElementById('fourthScenePreviousBtn');
    
    // Go to Scene 2
    goToScene2Btn.onclick = function () {
        scene1.style.display = 'none';
        scene2.style.display = "block";
    };
    // Back to Scene 1
    backToScene1Btn.onclick = function () {
        scene2.style.display = 'none';
        scene1.style.display = "block";
    };
    
    // Go to Scene 3
    goToScene3Btn.onclick = function () {
        scene2.style.display = 'none';
        scene3.style.display=  "block";
    };
    
    // Back to Scene 2
    backToScene2Btn.onclick = function () {
        scene3.style.display = 'none';
        scene2.style.display=  "block";
    };
    
    // Go to Scene 4
    goToScene4Btn.onclick = function () {
        scene3.style.display = 'none';
        scene4.style.display = 'block';
    };
    
    // Back to Scene 3
    backToScene3Btn.onclick = function () {
        scene4.style.display = 'none';
        scene3.style.display = 'block';
    };
    
}
function myResize() {
    container.style.webkitTransform = "none";
    var w = Math.max(document.documentElement.clientWidth, window.innerWidth || window.parent.innerWidth);
    var h = Math.max(document.documentElement.clientHeight, window.innerHeight || window.parent.innerHeight);
    var Width = h > w ? h : w;
    var Height = h > w ? w : h;
    var scaleX = Width / container.offsetWidth;
    var scaleY = Height / container.offsetHeight;
    container.style.left = ((w - container.offsetWidth) / 2) + "px";
    var factor = scaleX > scaleY ? scaleY : scaleX;
    container.style.webkitTransformOrigin = "50% 0%";
    //scaled_content.style.webkitTransform("unset");
    container.style.webkitTransform = 'scale(' + factor + ',' + factor + ')';
}
