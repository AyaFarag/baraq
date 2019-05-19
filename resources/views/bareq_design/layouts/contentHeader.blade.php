<body>
        <section id="navigation">
            <nav class="header navbar navbar-default navbar-fixed-top" role="navigation">
                <div class="container-fluid">
                    <div class="navbar-header">
                        <div class="mini_logo">
                           <a href="{{ url('/') }}">  <img src="{{ url('/design/assets/img/Logo11.png') }}" alt=""> </a>
                        </div>
                        <div class="header_links">

                            {{--    --}}
                            <ul id="Menu">
                                    
                                @guest
                                    <li >
                                        <a href="{{ route('login') }}">دخول</a>
                                    </li>
                                
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
                            {{--    --}}
                            <a class="lang" href="lesson.html">
                                <img src="{{ url('/design/assets/img/lang.png') }}" alt="">
                                <h5>AR</h5>
                            </a>

                        </div>
                    </div>
                </div>
            </nav>
        </section>
@include('bareq_design.layouts.msg')