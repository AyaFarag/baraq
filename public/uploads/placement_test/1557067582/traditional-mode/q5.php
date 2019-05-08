<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title> Question 5 </title>

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
                <div class="bullet arabicNumbers" style="opacity: 1">4</div>
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
                <div class="bullet arabicNumbers">17</div>
                <div class="bullet arabicNumbers">18</div>
                <div class="bullet arabicNumbers">19</div>
                <div class="bullet arabicNumbers">20</div>
            </div>
        </div>
        <div class="navPlace">
            <div class="rightItem">
                <div class="l">
                    <img id="pullAR" class="img-responsive" src="../images/Plac_Test_131.png" />
                </div>
                <div class="r">
                    <h2 class="text-center arabicNumbers">5</h2>
                </div>
            </div>
        </div>
        <div id="mp3Player">
            <div id="mp3PlayerProgressBar">
                <div id="slider">
                    <div id="currentTimeBar"></div>
                </div>
            </div>
            <div id="mp3PlayerButtons">
                <a onclick="bntMp3Stop();">
                    <img src="../images/Plac_Test_46.png" />
                </a>
                <a onclick="bntMp3Play();">
                    <img src="../images/Plac_Test_47.png" style="margin-left: 20px; margin-right: 20px" />
                </a>
                <a onclick="bntMp3Pause();">
                    <img src="../images/Plac_Test_48.png" />
                </a>
            </div>
        </div>
        <img src="../images/Plac_Test_45.png" style="margin-right: 27%;margin-top: -41px;" />
        <div class="Choices2" style="margin-top: 2%;margin-right: 18%;">
            <img src="../images/Plac_Test_49.png" style="display:inline-block" id="1" class="choiceClick" />
            <img src="../images/Plac_Test_50.png" style="display: inline-block;margin-right: 61px" id="2" class="choiceClick correctChoice" />
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
        var soundSrc = '../media/Place_Test_Sound_02.mp3';
    </script>
    <script src="../js/play-q.js"></script>
    <script src="../js/generalPT.js"></script>
    <!-- Include all compiled plugins (below), or include individual files as needed -->
    
</body>

</html>
