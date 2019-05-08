
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

    tweeningCards();













    

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
   

    
        $('#card2').hover(function () {
            nav_audio2.play();
        },
            function () {
                nav_audio2.load();
            });
   
   
        $('#card3').hover(function () {
            nav_audio3.play();
        },
            function () {
                nav_audio3.load();
            });
   
    
        $('#card4').hover(function () {
            nav_audio4.play();
        },
            function () {
                nav_audio4.load();
            });
  
    
        $('#card5').hover(function () {
            nav_audio5.play();
        },
            function () {
                nav_audio5.load();
            });
  
        $('#card6').hover(function () {
            nav_audio6.play();
        },
            function () {
                nav_audio6.load();
            });
  



    $('.flip-all').click(function () {
        $(".card-style").flip('toggle');
    });


    
        $('#card6').hover(function () {
            nav_audio6.play();
        },
            function () {
                nav_audio6.load();
            });
   
    
        $('#card7').hover(function () {
            nav_audio7.play();
        },
            function () {
                nav_audio7.load();
            });
   

   
        $('#card8').hover(function () {
            nav_audio8.play();
        },
            function () {
                nav_audio8.load();
            });
   

    
        $('#card9').hover(function () {
            nav_audio9.play();
        },
            function () {
                nav_audio9.load();
            });
  

    
        $('#card10').hover(function () {
            nav_audio10.play();
        },
            function () {
                nav_audio10.load();
            });
  

    
        $('#card11').hover(function () {
            nav_audio11.play();
        },
            function () {
                nav_audio11.load();
            });
    

    
        $('#card12').hover(function () {
            nav_audio12.play();
        },
            function () {
                nav_audio12.load();
            });
   



        $('#card1').flip({
            axis: 'y',
            trigger: 'click',
            speed: 500,
        });

        $('#card2').flip({
            axis: 'y',
            trigger: 'click',
            speed: 500,
        });

        $('#card3').flip({
            axis: 'y',
            trigger: 'click',
            speed: 500,
        });

        $('#card4').flip({
            axis: 'y',
            trigger: 'click',
            speed: 500,
        });

        $('#card5').flip({
            axis: 'y',
            trigger: 'click',
            speed: 500,
        });

        $('#card6').flip({
            axis: 'y',
            trigger: 'click',
            speed: 500,
        });

        $('#card7').flip({
            axis: 'y',
            trigger: 'click',
            speed: 500,
        });

        $('#card8').flip({
            axis: 'y',
            trigger: 'click',
            speed: 500,
        });

        $('#card9').flip({
            axis: 'y',
            trigger: 'click',
            speed: 500,
        });

        $('#card10').flip({
            axis: 'y',
            trigger: 'click',
            speed: 500,
        });

        $('#card11').flip({
            axis: 'y',
            trigger: 'click',
            speed: 500,
        });

        $('#card12').flip({
            axis: 'y',
            trigger: 'click',
            speed: 500,
        });



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