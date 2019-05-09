<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title> Question 19 </title>

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
            <img class="img-responsive" src="../images/Plac_Test_03.png" />
        </div>
        <div class="pag">
            <div class="inside_pag">
                <div class="bullet arabicNumbers" style="opacity: 1">18</div>
                <div class="bullet arabicNumbers">19</div>
                <div class="bullet arabicNumbers">20</div>
            </div>
        </div>
        <div class="navPlace">
            <div class="rightItem">
                <div class="l">
                    <img id="pullAR" class="img-responsive" src="../images/Plac_Test_113.png" />
                </div>
                <div class="r">
                    <h2 class="text-center arabicNumbers">19</h2>
                </div>
            </div>
        </div>
        <div id="mp3Player">
            <div id="mp3PlayerProgressBar" class="slider-blue-purple">
                <div id="slider">
                    <div id="currentTimeBar"></div>
                </div>
            </div>
            <div id="mp3PlayerButtons">
                <a onclick="bntMp3Stop();">
                    <img src="../images/Plac_Test_110.png" />
                </a>
                <a onclick="bntMp3Play();">
                    <img src="../images/Plac_Test_111.png" style="margin-left: 20px; margin-right: 20px" />
                </a>
                <a onclick="bntMp3Pause();">
                    <img src="../images/Plac_Test_112.png" />
                </a>
            </div>
        </div>
        <img src="../images/Plac_Test_114.png" style="margin-right: 28%;margin-top: -6%;" />
        <div class="Choices2" style="margin-top: 2%;margin-right: 16%;">
            <img src="../images/Plac_Test_135.png" style="display:inline-block" id="1" class="choiceClick correctChoice" />
            <img src="../images/Plac_Test_136.png" style="display: inline-block;margin-right: 114px" id="2" class="choiceClick" />
        </div>
    </div>

    <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
    <!--    <script src="../js/jquery-3.1.1.min.js"></script>-->
    <script src="../js/jquery-1.11.3.min.js"></script>
    <!--script src="../js/jquery-ui.min.js"></script-->
    <script src="../js/bootstrap.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/howler/2.0.1/howler.core.min.js"></script>
    <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>

    <script>
        var soundSrc = '../media/Place_Test_Sound_06.mp3';

    </script>
    <script src="../js/play-q.js"></script>
    <script src="../js/generalPT.js"></script>
    <!-- Include all compiled plugins (below), or include individual files as needed -->

</body>

</html>
