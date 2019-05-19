@include('bareq_design.layouts.nav')

<!-- collapse Navigation
    ============================================= -->
<div class="collapse navbar-collapse Nav" id="bs-example-navbar-collapse-1">
<ul class="nav navbar-nav navbar-left">
    <li class="hover">
        <a href="#about" class="">
            <img class="default" src="{{ url('/design/assets/img/home.png') }}" alt="">
            <img class="white" src="{{ url('/design/assets/img/whome.png') }}" alt="">
            <span>رئيسية</span>
        </a>
    </li>
    <li class="">
        <a href="#portfolio" class="">
            <img class="default" src="{{ url('/design/assets/img/about.png') }}" alt="">
            <img class="white" src="{{ url('/design/assets/img/wabout.png') }}" alt="">
            <span>من نحن</span>
        </a>
    </li>
    <li class="">
        <a href="#contact" class="">
            <img class="default" src="{{ url('/design/assets/img/help.png') }}" alt="">
            <img class="white" src="{{ url('/design/assets/img/whelp.png') }}" alt="">
            <span>مساعدة</span>
        </a>
    </li>
    <li class="">
        <a href="#blog" class="">
            <img class="default" src="{{ url('/design/assets/img/return.png') }}" alt="">
            <img class="white" src="{{ url('/design/assets/img/wreturn.png') }}" alt="">
            <span>جوله سريعة</span>
        </a>
    </li>
    <li class="">
        <a href="#price_table" class="">
            <img class="default" src="{{ url('/design/assets/img/free.png') }}" alt="">
            <img class="white" src="{{ url('/design/assets/img/wfree.png') }}" alt="">
            <span>دروس مجانية</span>
        </a>
    </li>
</ul>
</div>
<!-- #collapse Navigation end -->
</header>

<div id="header_trigger">
    <a href="index.html" class="logo">
        <img src="{{ url('/design/assets/img/Logo11.png') }}" alt="Baraq Logo">
    </a>
    <input class="menu-btn" type="checkbox" id="menu-btn" />
    <label class="menu-icon" for="menu-btn">
        <span class="navicon"></span>
        <a href="indexEn.html" id="top-cart-trigger">
            <img src="{{ url('/design/assets/img/lang.png') }}" alt="">
            <span> EN</span>
        </a>
    </label>

    <ul class="menu">
        <li>
            <a href="login.html">
                <div>تسجيل الدخول </div>
            </a>
            <a href="register.html">
                <div>إنشاء حساب جديد</div>
            </a>
        </li>
        <li class="">
            <a href="#about" class="">
                <img class="default" src="{{ url('/design/assets/img/home.png') }}" alt="">
                <img class="white" src="{{ url('/design/assets/img/whome.png') }}" alt="">
                <span>رئيسية</span>
            </a>
        </li>
        <li class="">
            <a href="#portfolio" class="">
                <img class="default" src="{{ url('/design/assets/img/about.png') }}" alt="">
                <img class="white" src="{{ url('/design/assets/img/wabout.png') }}" alt="">
                <span>من نحن</span>
            </a>
        </li>
        <li class="">
            <a href="#contact" class="">
                <img class="default" src="{{ url('/design/assets/img/help.png') }}" alt="">
                <img class="white" src="{{ url('/design/assets/img/whelp.png') }}" alt="">
                <span>مساعدة</span>
            </a>
        </li>
        <li class="">
            <a href="#blog" class="">
                <img class="default" src="{{ url('/design/assets/img/return.png') }}" alt="">
                <img class="white" src="{{ url('/design/assets/img/wreturn.png') }}" alt="">
                <span>جوله سريعة</span>
            </a>
        </li>
        <li class="hover">
            <a href="#price_table" class="">
                <img class="default" src="{{ url('/design/assets/img/free.png') }}" alt="">
                <img class="white" src="{{ url('/design/assets/img/wfree.png') }}" alt="">
                <span>دروس مجانية</span>
            </a>
        </li>
    </ul>
</div>
<!-- #header end -->
@include('bareq_design.layouts.msg')
