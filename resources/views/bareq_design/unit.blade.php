@extends('bareq_design.layouts.index')

@section('content')
@include('bareq_design.layouts.contentHeader')

    <section id="level">

        <div class="level_header">
            <h1>
                <img src="{{ url('/design/assets/img/v.png') }}"> الوحدات</h1>
        </div>




        <div class="container">
            <div class="row main_content level_content">
                <!-- col-md-4 -->
                @if($Unit->count() == 0 )
                <h1 class="text-center"> لم يتم إضافة وحدات لهذا المستوي بعد </h1>
                @endif
                <?php
                $role=new \App\User();
                if(auth()->check()&&auth()->user()->role==$role->getStudentValue()){
                    $completeUnit=\App\Models\UnitProgress::where(['user_id'=>auth()->id(),'status'=>1])->get()->pluck('unit_id')->toArray();
                    $notCompleteUnit=\App\Models\UnitProgress::where(['user_id'=>auth()->id(),'status'=>0])->get()->pluck('unit_id')->toArray();
                }
                ?>
                @foreach($Unit as $unit)

                <a href="{{ route('web.lesson', $unit->id)}}">
                    <div class="col-md-4 wow animated zoomIn animated animated" data-wow-delay="0.1s" style="visibility: visible; animation-delay: 0.1s;"
                        onclick="location.href='lesson.html'">
                        <div class="bg">
                            <figure>
                                <img class="pro img-responsive center-block" src="{{ url('/uploads/'. $unit->image. '/') }}">
                            </figure>
                            <h5 class="text-center"> {{ $unit->arname }}</h5>

                            <!-- row -->
                        </div>
                    <div class="num">
                        <h4>{{ $unit->sort }}</h4>
                        @if(auth()->check()&&auth()->user()->role==$role->getStudentValue())
                            @if(in_array($unit->id,$notCompleteUnit))
                                <i class="fa fa-unlock fa-2x" style="color: #99873c"></i>
                            @elseif(in_array($unit->id,$completeUnit))
                                <i class="fa fa-check-circle fa-2x" style="color: forestgreen;"></i>
                            @else
                                <i class="fa fa-lock fa-2x" style="color: #740D0A"></i>
                            @endif
                        @endif
                    </div>  
                </div>
            </a>
                    @endforeach
            </div>
        </div>

                

    </section>

    @endsection
   