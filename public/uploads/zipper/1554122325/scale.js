
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
    container.style.left = ((w-bw)/2) + "px";
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
    
     $("#langIcon, #print_it img, #helpVidBtn img").mouseover(function () {
        var str = $(this).attr('src');
        $(this).attr('src', str.replace("off.svg", "on.svg"));
    });
    $("#langIcon, #print_it img, #helpVidBtn img").mouseout(function () {
        var str = $(this).attr('src');
        $(this).attr('src', str.replace("on.svg", "off.svg"));
    });
    
    mainReady();
    
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