@extends('bareq_design.layouts.index')

@section('content')
@include('bareq_design.layouts.contentHeader')




    <section id="lessons">
        <div class="lesson_header" style="margin-top:30px">
            <h1>
                <span>الدروس</span>
            </h1>
        </div>


        <div class="container">
            <div class="">
                @if($Lesson->count() == 0 )
                <h1 class="text-center"> لم يتم إضافة دروس لهذا المستوي بعد </h1>
                @endif
                    <?php
                    $role=new \App\User();
                    if(auth()->check()&&auth()->user()->role==$role->getStudentValue()){
                        $completeLesson=\App\Models\StudentProgress::where(['user_id'=>auth()->id(),'status'=>1])->get()->pluck('lesson_id')->toArray();
                        $notCompleteLesson=\App\Models\StudentProgress::where(['user_id'=>auth()->id(),'status'=>0])->get()->pluck('lesson_id')->toArray();
                    }
                    ?>
                @foreach($Lesson as $lesson)
                
                    <div class="complete col-md-12" onclick="window.location='{{ route('content', $lesson->id ) }}';" style="cursor: pointer">
                        <article class="cs-list list_v4 has_border cs-first-child post-4961 courses type-courses status-publish has-post-thumbnail hentry course-category-online-business course-category-single-cources course-tag-academy course-tag-cs-course course-tag-degree course-tag-education course-tag-multipurpose">
                            <div class="cs-list-wrapp">
                                <figure class="img-thumbnail  fig-4961">
                                    <a class="cs-add-wishlist" data-toggle="modal" data-target="#myModal"> Add to Favourite</a>
                                    <img src="{{ url('uploads/'. $lesson->image) }}" alt="">
                                    <a class="blog-hover" style="background-color:#3fabde" href="innerLesson.html">
                                        <i></i>
                                    </a>
                                </figure>
    
                                <div class="text-section">
                                    <div class="cs-top-sec">
                                        <div class="seideleft">
                                            <div class="left_position">
                                                <h2>
                                                    <a href="innerLesson.html" class="colrhvr">
                                                            {{ $lesson->arname }} </a>
                                                </h2>
                                                @if(auth()->check()&&auth()->user()->role==$role->getStudentValue())
                                                    @if(in_array($lesson->id,$notCompleteLesson))
                                                        <i class="fa fa-unlock fa-2x" style="color: #99873c"></i>
                                                    @elseif(in_array($lesson->id,$completeLesson))
                                                        <i class="fa fa-check-circle fa-2x" style="color: forestgreen;"></i>
                                                    @else
                                                        <i class="fa fa-lock fa-2x" style="color: #740D0A"></i>
                                                    @endif
                                                @endif
                                                <ul class="listoption">
                                                    <li>
                                                        <div class="cs-rating">
                                                            <span class="rating-box" style="width:80%"></span>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
    
                                        </div>
                                        <div class="cs-cat-list">
                                            <ul>
                                                <li>
                                                </li>
                                                <li>
                                                    <span class="cs-lessons">
                                                        <i class="fa fa-file-text-o"></i>{{ $lesson->lesson->count() }} - تم الانتهاء من الدرس بتاريخ ١٥/٨/٢٠١٩</span>
                                                </li>
    
                                            </ul>
                                        </div>
    
                                    </div>
                                    <a href="{{ route('content', $lesson->id ) }}" class="custom-btn">
                                        <i class="fa fa-file-text"></i>أبــدأ الدرس</a>
    
                                </div>
    
                            </div>
                        </article>
                    </div>
                
                @endforeach 
                
                
            </div>
        </div>
    </section>
    @endsection