
<body class="stretched">

        <!-- Document Wrapper
        ============================================= -->
        <div id="wrapper" class="clearfix">
    
            <!-- Header
            ============================================= -->
            <header id="header" class="full-header">
    
                <div id="header-wrap">
    
                    <div class="container clearfix">
                        <!-- Logo
                        ============================================= -->
                        <div id="logo">
                            <a href="{{ url('/') }}" class="standard-logo" data-dark-logo="{{ url('/design/assets/img/Logo.png') }}">
                                <img src="{{ url('/design/assets/img/Logo.png') }}" alt="Baraq Logo"/>
                            </a>
                        </div>
                        <div id="mini_logo">
                            <a href="{{ url('/') }}" class="standard-logo" data-dark-logo="{{ url('/design/assets/img/Logo11.png') }}">
                                <img src="{{ url('/design/assets/img/Logo11.png') }}" alt="Baraq Logo">
                            </a>
                        </div>
                        <!-- #logo end -->
    
                        <!-- Primary Navigation
                        ============================================= -->
                        <nav id="primary-menu">
    
                        <ul>
                                @guest
    
                                    <li class="current">
                                        <a href="{{ route('login') }}">
                                            <div>تسجيل الدخول </div>
                                        </a>
                                    </li>
    
                                    @if (Route::has('register'))
                                    <li>
                                        <a href="{{ route('register') }}">
                                            <div>إنشاء حساب جديد</div>
                                        </a>
                                    </li>
                                     @endif
                               
                                    @else
                                    <li>
                                        <input id="check01" type="checkbox" name="menu">
                                        <label for="check01">
                                            <span>{{ Auth::user()->name }}</span>
                                        </label>
                                        
                                            <ul class="submenu">
                                                    <li>
                                                        <a href="{{ route('logout') }}" onclick="event.preventDefault(); document.getElementById('logout-form').submit();"> خروج</a>
                                                        <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                                                            @csrf
                                                        </form>
                                                    </li>
                                                    @if(Auth::user()->role == 0)
                                                    <li >
                                                        <a href="{{ route('adminPanel') }}">لوحه التحكم</a>
                                                    </li>
                                                    @elseif(Auth::user()->role == 2)
                                                    <li >
                                                        <a href="{{ route('student.profile') }}">الصفحه الشخصيه </a>
                                                    </li>
                                                   
                                                    @elseif(Auth::user()->role == 3)
                                                    <li >
                                                        <a href="{{ route('parent.profile') }}">الصفحه الشخصيه </a>
                                                    </li>
                                                    @endif
                                                </ul>
                                            </li>
                                       
                                        <li>
                                            <div class="_img">
                                                <img class="user" src="{{ url('/design/assets/img/Avatar.png') }}" alt="">
                                            </div>
                                        </li>
                                    @endguest
                            </ul>
    
                            <!-- Top Language
                            ============================================= -->
                            <div id="top-cart">
                                <a href="indexEn.html" id="top-cart-trigger">
                                    <img src="{{ url('/design/assets/img/lang.png') }}" alt="">
                                    <span> EN</span>
                                </a>
                            </div>
                            <!-- #top-Language end -->
    
                        </nav>
                        <!-- #primary-menu end -->
    
                    </div>
    
                </div>
                            