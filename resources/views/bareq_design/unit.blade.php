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
                    </div>  
                </div>
            </a>
                    @endforeach
            </div>
        </div>

                

    </section>

    @endsection
   