<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title> Question 1 </title>
    <link href="../css/bootstrap.css" rel="stylesheet" />
    <link href="../css/font-awesome.min.css" rel="stylesheet" />
    <link href="../css/style.css" rel="stylesheet" />
    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
</head>
<body><audio id="myAudio">         <source src="../media/click.mp3" />     </audio>
    <div class="area-zone bg">
        <div>
            <img class="img-responsive" src="../images/Plac_Test_01.png" />
        </div>
        <div class="pag">
            <div class="inside_pag">
                <div class="bullet arabicNumbers" style="opacity: 1">1</div>
                <div class="bullet arabicNumbers">2</div>
                <div class="bullet arabicNumbers">3</div>
                <div class="bullet arabicNumbers">4</div>
                <div class="bullet arabicNumbers">5</div>
                <div class="bullet arabicNumbers">6</div>
                <div class="bullet arabicNumbers">7</div>
                <div class="bullet arabicNumbers">8</div>
                <div class="bullet arabicNumbers">9</div>
                <div class="bullet arabicNumbers">10</div>
                <div class="bullet arabicNumbers">11</div>
                <div class="bullet arabicNumbers">12</div>
                <div class="bullet arabicNumbers">13</div>
                <div class="bullet arabicNumbers">14</div>
                <div class="bullet arabicNumbers">15</div>
                <div class="bullet arabicNumbers">16</div>
            </div>
        </div>
        <div class="navPlace">
            <div class="rightItem">
                <div class="l">
                    <img id="pullAR" class="img-responsive" src="../images/Plac_Test_129.png" />
                </div>
                <div class="r">
                    <h2 class="text-center arabicNumbers">1</h2>
                </div>
            </div>
        </div>
        <div id="mp3Player">
            <div id="mp3PlayerProgressBar" class="slider-green-purple">
                <div id="slider">
                    <div id="currentTimeBar"></div>
                </div>
            </div>
            <div id="mp3PlayerButtons">
                <a onclick="bntMp3Stop();">
                    <img src="../images/Plac_Test_22.png" />
                </a>
                <a onclick="bntMp3Play();">
                    <img src="../images/Plac_Test_23.png" style="margin-left: 20px; margin-right: 20px" />
                </a>
                <a onclick="bntMp3Pause();">
                    <img src="../images/Plac_Test_21.png" />
                </a>
            </div>
        </div>
        <img src="../images/Plac_Test_24.png" style="margin-right: 27%;margin-top: -41px;" />
        <div class="Choices2" style="margin-top: 4%;margin-right: 10%;">
            <img src="../images/Plac_Test_25.png" style="display:inline-block" id="1" class="choiceClick" />
            <img src="../images/Plac_Test_26.png" style="display: inline-block; margin-right: 6%;" id="2" class="choiceClick" />
            <img src="../images/Plac_Test_27.png" style="display: inline-block;margin-top: 43px;" id="3" class="choiceClick correctChoice" />
            <img src="../images/Plac_Test_28.png" style="display: inline-block;margin-right: 6%;margin-top: 43px;" id="4" class="choiceClick" />
        </div>
    </div>
    <audio id="myAudio">
        <source src="../media/click.mp3" />
    </audio>
    <script src="../js/jquery-1.11.3.min.js"></script>
    <!--script src="../js/jquery-ui.min.js"></script-->
    <script src="../js/bootstrap.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/howler/2.0.1/howler.core.min.js"></script>
    <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
    <script>
        var soundSrc = '../media/Place_Test_Sound_01.mp3';
    </script>
    <script src="../js/play-q.js"></script>
    <script src="../js/generalPT.js"></script>
    <!-- Include all compiled plugins (below), or include individual files as needed -->
</body>
</html>

