@extends('layouts.app')

@section('content')
    <div class="container">
        <h4> lessons page </h4>

            <div class="row">
            @foreach($Lesson as $Lesson)
            <div class="col col-md-3  m-3 bg-primary"  >
                
                <a href="{{ route('lesson.content', $Lesson->id ) }}" >

                <div class="text-dark" style="background-color: {{$Lesson->color1}} ; height: 70px; width:auto" >
                        <h3 class="text-auto"> {{$Lesson->sort}} </h3>
                        @if ($Lesson -> free == 1 )
                        <span > Free </span>
                         @else
                        <span> Paid </span>
                        @endif
                </div>
                <div style="width:100%" > <img  src="{{ asset('uploads/' . $Lesson->image) }}" /> </div>
                <div CLASS="text-light" style="background-color: {{$Lesson->color2}} ; height: 70px; width:auto"> 
                        <div CLASS="text-light"> <h3>{{$Lesson->arname}}</h3> </div>    
                </div>
              
            </a>
            </div>
            @endforeach

        </div>

    </div>
@endsection