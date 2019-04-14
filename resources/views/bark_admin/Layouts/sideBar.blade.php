<body>

        <nav class="pcoded-navbar">
                <div class="navbar-wrapper">
                    <div class="navbar-brand header-logo">
                        <a href="{{ route('adminPanel') }}" class="b-brand">
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
                                                 
                        <li data-username="Charts AM Chart js Echart Google Highchart Knob Morris Nvd3 Peity Radial" class="nav-item pcoded-hasmenu">
                            <a href="{{ route('adminPanel') }}" class="nav-link"><span class="pcoded-micon"><i class="feather icon-pie-chart"></i></span><span class="pcoded-mtext">احصائيات</span></a>
                        </li>
                        
                     <!-- start manage user -->

                      <li data-username="Vertical Horizontal Box Layout RTL fixed static Collapse menu color icon dark" class="nav-item pcoded-hasmenu">
                            <a href="{{ route('user.index') }}" class="nav-link"><span class="pcoded-micon"><i class="feather icon-layout"></i></span><span class="pcoded-mtext"> المستخدمين </span></a>

                        </li>




                        <li data-username="Vertical Horizontal Box Layout RTL fixed static Collapse menu color icon dark" class="nav-item pcoded-hasmenu">
                                <a href="{{ route('getDataEntry')}}" class="nav-link"><span class="pcoded-micon"><i class="feather icon-layout"></i></span><span class="pcoded-mtext"> فريق الانتاج </span></a>

                            </li>
    


        
                            <li data-username="Vertical Horizontal Box Layout RTL fixed static Collapse menu color icon dark" class="nav-item pcoded-hasmenu">
                                <a href="{{ route('structure.index')}}" class="nav-link"><span class="pcoded-micon"><i class="feather icon-layout"></i></span><span class="pcoded-mtext"> المستويات </span></a>

                            </li>
                            
                            <li data-username="Vertical Horizontal Box Layout RTL fixed static Collapse menu color icon dark" class="nav-item pcoded-hasmenu">
                                <a href="{{ url('schools')}}" class="nav-link"><span class="pcoded-micon"><i class="feather fa-school"></i></span><span class="pcoded-mtext"> المدارس </span></a>

                            </li>

                            <li data-username="Vertical Horizontal Box Layout RTL fixed static Collapse menu color icon dark" class="nav-item pcoded-hasmenu">
                                    <a     href="{{ route('logout') }}"     class="nav-link"  onclick="event.preventDefault();
                                    document.getElementById('logout-form').submit();">
                                        
                                        <span class="pcoded-micon">
                                            <i class="feather icon-layout"></i>
                                        
                                        </span><span class="pcoded-mtext">
                                             تسجيل خروج 
                                            
                                            
                                            </span>
                                    
                                    
                                    
                                    
                                    </a>
                                    <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                                            @csrf
                                        </form>
    
                                </li>
                             
                        </ul>
                    </div>
                </div>
            </nav>