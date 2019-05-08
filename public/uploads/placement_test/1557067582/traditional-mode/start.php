<!DOCTYPE html>
<?php

require_once $_SERVER['DOCUMENT_ROOT'] . '/asl/classes/static/PublicData.php';

require_once PublicData::importClasses('admins/login/LoginController.php');

require_once PublicData::importWS("clients/levelClientWS.php");

session_start();


?>

<html>

<head>
    <title>Start Placement Test</title>
    <link href="../css/startEndStyle.css" rel="stylesheet" />
    <link href="../../../css/style.css" rel="stylesheet" />
    <script src="../../../js/main.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.touchswipe/1.6.4/jquery.touchSwipe.min.js"></script>
     <script type="text/javascript">
        // redirect to another page >>
        //window.location.href = "q2.html";
        // check if browser support local storage
        // to save the score variable and the answes array
        if (typeof(Storage) !== "undefined") {
            localStorage.setItem("scoreL1", 0);
            localStorage.setItem("name", "");
        } else {
            // Sorry! No Web Storage support..
            console.log("Sorry! No Web Storage support");

        }

    </script>
    
    <?php
 

        PublicData::importJsRes("static_data.js");
    ?>
</head>

<body style="overflow: hidden">
    
    <?php
    if(isset($_SESSION[PublicData::admin_user_session_name])){
        $fName = $_SESSION[PublicData::admin_user_session_name]->getUser_f_name();
        $lName = $_SESSION[PublicData::admin_user_session_name]->getUser_l_name();
         $fullName = $fName."&nbsp;".$lName;
    }
    else{
       // $fullName="&nbsp;";
        $fullName="مستخدم&nbsp;جديد";
    }

    ?>
   
    
    <div class="bg hasEng">
        <img src="../images/start-ar.png" />
    </div>
    <div class="info-btn btn">
        <img src="../images/info-btn.png" />
    </div>
    <div class="name-div">
        <input type="text" placeholder="أدخل اسمك" value= <?php  echo $fullName ?> />
    </div>
    <div class="plzName hasEng">
        <img src="../images/plzName-ar.png"/>
    </div>
    <div class="bottom-btns">
        <div class="start-btn btn btn-hover hasEng">
            <img src="../images/start-ar-off.png" />
        </div>
        <div class="lang-btn lang-s btn btn-hover hasEng">
            <img src="../images/lang-ar-off.png" />
        </div>
    </div>
    
    <div class="info-window hasEng">
        <img src="../images/info-ar.png" style="width:671px"/>
        <div class="close-i btn btn-hover">
            <img src="../images/close-i-off.png"/>
        </div>
        <div class="lang-btn lang-i btn btn-hover hasEng">
            <img src="../images/lang-ar-off.png" />
        </div>
    </div>
    
    <script src="../js/jquery-3.1.1.min.js"></script>
    <script src="../js/start.js"></script>
</body>

</html>
