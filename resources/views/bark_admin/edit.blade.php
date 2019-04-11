<!DOCTYPE html>
<html lang="en">

<head>
    <title>Bark</title>
    <!-- HTML5 Shim and Respond.js IE11 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesnt work if you view the page via file:// -->
    <!--[if lt IE 11]>
		<script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
		<script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
		<![endif]-->
    <!-- Meta -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0, minimal-ui">
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="description" content="Datta Able Bootstrap admin template made using Bootstrap 4 and it has huge amount of ready made feature, UI components, pages which completely fulfills any dashboard needs."/>
    <meta name="keywords" content="admin templates, bootstrap admin templates, bootstrap 4, dashboard, dashboard templets, sass admin templets, html admin templates, responsive, bootstrap admin templates free download,premium bootstrap admin templates, datta able, datta able bootstrap admin template">
    <meta name="author" content="Codedthemes" />

    <!-- Favicon icon -->
    <link rel="icon" href="assets/images/favicon.ico" type="image/x-icon">
    <!-- fontawesome icon -->
    <link rel="stylesheet" href="assets/fonts/fontawesome/css/fontawesome-all.min.css">
    <!-- animation css -->
    <link rel="stylesheet" href="assets/plugins/animation/css/animate.min.css">
    <!-- notification css -->
    <link rel="stylesheet" href="assets/plugins/notification/css/notification.min.css">
    <!-- vendor css -->
    <link rel="stylesheet" href="assets/css/style.css">
    <link rel="stylesheet" href="assets/css/layouts/rtl.css">

</head>

<body>

      <!-- [ Pre-loader ] start -->
      <!-- <div class="loader-bg">
            <div class="loader-track">
                <div class="loader-fill"></div>
            </div>
        </div> -->
        <!-- [ Pre-loader ] End -->

        <!-- [ navigation menu ] start -->
  
        <nav class="pcoded-navbar">
                <div class="navbar-wrapper">
                    <div class="navbar-brand header-logo">
                        <a href="index.html" class="b-brand">
                            <div class="b-bg">
                                <i class="feather icon-trending-up"></i>
                            </div>
                            <span class="b-title"> بارق</span>
                        </a>
                        <a class="mobile-menu" id="mobile-collapse" href="javascript:"><span></span></a>
                    </div>
                    <div class="navbar-content scroll-div">
                        <ul class="nav pcoded-inner-navbar">
                            <li class="nav-item pcoded-menu-caption">
                                <label>الادمن</label>
                            </li>
                      <!-- start manage user -->

                      <li data-username="Vertical Horizontal Box Layout RTL fixed static Collapse menu color icon dark" class="nav-item pcoded-hasmenu">
                            <a href="javascript:" class="nav-link"><span class="pcoded-micon"><i class="feather icon-layout"></i></span><span class="pcoded-mtext"> المستخدمين </span></a>
                            <ul class="pcoded-submenu">
                                <li class=""><a href="add_user.html" class="" target="_blank">  اضافه مستخدم </a></li>
                                <li class=""><a href="all_user.html" class="" target="_blank"> كل المستخدمين</a></li>
                             
                               
                            </ul>
                        </li>




                        <li data-username="Vertical Horizontal Box Layout RTL fixed static Collapse menu color icon dark" class="nav-item pcoded-hasmenu">
                                <a href="javascript:" class="nav-link"><span class="pcoded-micon"><i class="feather icon-layout"></i></span><span class="pcoded-mtext"> فريق الانتاج </span></a>
                                <ul class="pcoded-submenu">
                                    <li class=""><a href="add_user.html" class="" target="_blank">  اضافه مستخدم </a></li>
                                    <li class=""><a href="all_production_team.html" class="" target="_blank"> كل المستخدمين</a></li>
                                 
                                   
                                </ul>
                            </li>
    


        
                            <li data-username="Vertical Horizontal Box Layout RTL fixed static Collapse menu color icon dark" class="nav-item pcoded-hasmenu">
                                <a href="javascript:" class="nav-link"><span class="pcoded-micon"><i class="feather icon-layout"></i></span><span class="pcoded-mtext"> المستويات </span></a>
                                <ul class="pcoded-submenu">
                                    <li class=""><a href="add_level.html" class="" target="_blank"> اضافه مستوى </a></li>
                                    <!-- <li class=""><a href="edit_level.html" class="" target="_blank">تعديل مستوى</a></li> -->
                                    <li class=""><a href="all_level.html" class="" target="_blank"> كل المستويات </a></li>
                                   
                                </ul>
                            </li>
                         
                           
                            
                            <li data-username="Charts AM Chart js Echart Google Highchart Knob Morris Nvd3 Peity Radial" class="nav-item pcoded-hasmenu">
                                <a href="stastic.html" class="nav-link"><span class="pcoded-micon"><i class="feather icon-pie-chart"></i></span><span class="pcoded-mtext">احصائيات</span></a>
                                <ul class="pcoded-submenu">
                                    <li class=""><a href="chart-am.html" class=""> </a></li>
                                </ul>
                            </li>



                            

                            <li data-username="Charts AM Chart js Echart Google Highchart Knob Morris Nvd3 Peity Radial" class="">
                                <a href="" class="nav-link">تسجيل خروج</a>
                               
                            </li>
                            
                            
                            
                        </ul>
                    </div>
                </div>
            </nav>
   <!-- end nav -->

   <!-- [ Form Validation ] start -->
   <div class="col-sm-12" style="width: 77%;
   margin-right: 17%;
   margin-top: 2%;" >
        <div class="card">
            <div class="card-header">
                <h5> تعديل المستخدم</h5>
            </div>
            <div class="card-block">
                <form id="validation-form123" action="#!">
                    <div class="row">
                            <div class="col-md-12">
                                    <div class="form-group">
                                        <label class="form-label">الاسم كامل</label>
                                        <input type="text" class="form-control" name="" placeholder="الاسم">
                                    </div>
                                </div>
                        <div class="col-md-12">
                            <div class="form-group">
                                <label class="form-label">ايميل</label>
                                <input type="text" class="form-control" name="validation-email" placeholder="ايميل">
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="form-group">
                                <label class="form-label">كلمه السر</label>
                                <input type="password" class="form-control" name="validation-password" placeholder="كلمه السر">
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="form-group">
                                <label class="form-label"> تاكيد كلمه السر</label>
                                <input type="password" class="form-control" name="validation-password-confirmation" placeholder="Confirm password">
                            </div>
                        </div>
                       
                       
                        
                        <div class="col-md-12">
                            <div class="form-group">
                                <label class="form-label">الفئه</label>
                                <select class="form-control" name="validation-select" style="display:block">
                                    <option value> اختيار الفئه ...</option>
                                    <optgroup label="الاختيارات">
                                        <option value="pitons">ادمن</option>
                                        <option value="cams">مستخدم</option>
                                        <option value="nuts">مدحل بيانات</option>
                                        <option value="bolts">والد</option>
                                    </optgroup>
                                </select>
                            </div>
                        </div>
                      
                        
                    </div>
                    <button type="button" class="btn btn-danger" style=" float: right;" title="btn btn-danger" data-toggle="tooltip">حذف</button>
                    <button type="submit" class="btn btn-success">تاكيد</button>
                 
                </form>
            </div>
        </div>
    </div>
    <!-- [ Form Validation ] end -->



    <!-- Required Js -->
    <script src="assets/js/vendor-all.min.js"></script>
	<script src="assets/plugins/bootstrap/js/bootstrap.min.js"></script>
    <script src="assets/js/pcoded.min.js"></script>
    <!-- amchart js -->
    <script src="assets/plugins/amchart/js/amcharts.js"></script>
    <script src="assets/plugins/amchart/js/gauge.js"></script>
    <script src="assets/plugins/amchart/js/serial.js"></script>
    <script src="assets/plugins/amchart/js/light.js"></script>
    <script src="assets/plugins/amchart/js/pie.min.js"></script>
    <script src="assets/plugins/amchart/js/ammap.min.js"></script>
    <script src="assets/plugins/amchart/js/usaLow.js"></script>
    <script src="assets/plugins/amchart/js/radar.js"></script>
    <script src="assets/plugins/amchart/js/worldLow.js"></script>
    <!-- notification Js -->
    <script src="assets/plugins/notification/js/bootstrap-growl.min.js"></script>

    <!-- dashboard-custom js -->
    <script src="assets/js/pages/dashboard-custom.js"></script>

</body>

</html>
