@extends('bareq_design.layouts.index')

@section('content')
@include('bareq_design.layouts.indexHeader')

            <!-- slider Section -->
            <section id="slider" class="slider-parallax swiper_wrapper clearfix">
    
                <div class="slider-parallax-inner">
    
                    <div class="swiper-container swiper-parent">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide "
                                style="background-image: "{{ url('/design/assets/img/slider1.png') }}"; background-position: center top;">
                                <div class="container clearfix">
                                    <div class="slider-caption slider-caption-center">
                                        <h2 data-caption-animate="fadeInUp">تعلم العربية مع بارق </h2>
                                    </div>
                                </div>
                            </div>
                            <div class="swiper-slide "
                                style="background-image: "{{ url('/design/assets/img/slider1.png') }}"; background-position: center top;">
                                <div class="container clearfix">
                                    <div class="slider-caption slider-caption-center">
                                        <h2 data-caption-animate="fadeInUp">تعلم العربية مع بارق </h2>
                                    </div>
                                </div>
                            </div>
                            <div class="swiper-slide"
                                style="background-image:"{{ url('/design/assets/img/slider1.png') }}"; background-position: center top;">
                                <div class="container clearfix">
                                    <div class="slider-caption slider-caption-center">
                                        <h2 data-caption-animate="fadeInUp">تعلم العربية مع بارق </h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="slider-arrow-left">
                            <i class="icon-angle-left"></i>
                        </div>
                        <div id="slider-arrow-right">
                            <i class="icon-angle-right"></i>
                        </div>
                        <div id="slide-number">
                            <div id="slide-number-current"></div>
                            <span>/</span>
                            <div id="slide-number-total"></div>
                        </div>
                    </div>
    
                </div>
    
            </section>
            <!-- #slider Section -->
            <!-- Content
                ============================================= -->
                <section id="content">
        
                    <div class="content-wrap">
        
    
                        <!-- levels -->
                            @include('bareq_design.level')
                        <!-- end levels --!>
                        <div class="line bottommargin-lg"></div>

                        <!-- welcome Section -->
                        <div class="section welcome">
                            <div class="container clearfix">
                                <div class="center">
                                    <h3 class="center">مرحبا بكم في منصه بارق لتعليم اللغة العربية</h3>
                                    <p>
                                        يتميز البرنامج بشموله على فيديوهات وأنشطة تفاعلية، تقدِّم مهارات اللغة في جوٍّ من
                                        المتعة؛ مما يزيد من دافعية المتعلم، ويدفعه
                                        إلى الاستمرار في البرنامج.
                                    </p>
                                    <div class="video">
                                        <a href=""></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- #welcome Section -->
                        <!-- Free Lessons Section -->
                        <div class="section free_lessons">
                            <div class="container">
                                <h3 class="center">دروس مجانية</h3>
                                <hr class="full">
                                <div class="owl-carousel">
                             @foreach($freeLessons as $lesson)
                                    <div class="bg">
                                        <div class="num">
                                            <h4>{{ $lesson->sort }}</h4>
                                        </div>
                                        <figure>
                                            <img class="" src="{{ url('uploads/'.$lesson->image) }}">
                                        </figure>
                                        <h5 class="center">{{ $lesson->arname }}</h5>
                                    </div>
                                @endforeach
                       
                                </div>
                            </div>
                        </div>
                        <!-- #Free Lessons Section -->
                        <!-- what baraq Section -->
                        <div class="section what_baraq">
                            <div class="container clearfix">
                                <div class="message col_two_third nobottommargin">
                                    <h2>مم يتكون برنامج تعلم مع بارق</h2>
                                    <p>
                                        يتميز البرنامج بشموله على فيديوهات وأنشطة تفاعلية، تقدِّم مهارات اللغة في جوٍّ من
                                        المتعة؛ مما يزيد من دافعية المتعلم، ويدفعه
                                        إلى الاستمرار في البرنامج
                                    </p>
                                </div>
                                <div class="col_one_third nobottommargin ">
                                    <img src="{{ url('/design/assets/img/messageimg.png') }}" alt="">
                                </div>
                            </div>
                        </div>
                        <!-- #what baraq Section -->
                        <!-- learning path Section -->
                        <div class="section learning_path">
                            <div class="container clearfix">
                                <div class="learning_path_img col_one_third nobottommargin">
                                    <img src="{{ url('/design/assets/img/learn.png') }}" alt="Image">
                                </div>
                                <div class="learning_path_step col_two_third nobottommargin ">
                                    <div>
                                        <h2>مسار التعلم في البرنامج (تعلم مع بارق)</h2>
                                    </div>
                                    <div class="steps nobottommargin">
                                        <ul class="iconlist iconlist-color nobottommargin">
                                            <li>
                                                اختبار تحديد المستوي
                                            </li>
                                            <li>
                                                المستوى التمهيدي: يتناول الحروف العربية كتابةً ونطقًا، ويتكون من (9) دروس.
                                            </li>
                                            <li>
                                                المستوي المبتدئ: المستوى المبتدئ: يتكون من (5) وحدات، كل وحدة تشتمل على (5)
                                                دروس.
                                            </li>
                                            <li>
                                                المستوى المتوسط: يتكون من (6) وحدات، كل وحدة تشتمل على (5) دروس.
                                            </li>
                                            <li>
                                                المستوي المتقدم: يتكون من (6) وحدات، كل وحدة تشتمل على (6) دروس.
                                            </li>
                                            <li>
                                                المستوي المتميز: يتكون من (6) وحدات، كل وحدة تشتمل على (6) دروس.
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- #learning path Section -->
                        <!-- Contact Section -->
                        
                        @guest
                        <div id="contact">
                            <div class="container clearfix">
                                <div class="center">
                                    <div>
                                        <div>
                                            <h3 class="center">انضموا معنا</h3>
                                            <p>للوصول الكامل لجميع موارد البرنامج من فيديوهات وأنشطة تفاعلية واختبارات وألعاب
                                                يبدو جيدا ، أليس كذلك؟ سجل اليوم
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div class="center">
                                        <a href="{{ route('register') }}" class="link"></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        @endguest
                        <!-- #Contact Section -->
    
                    </div>

                </section>
            <!-- #content end -->
    



    
    
    









@endsection