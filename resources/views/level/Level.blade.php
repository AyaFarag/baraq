@extends('layouts.app')

@section('content')
    <div class="container">
        <h4> level page </h4>

        <div class="row">
            @foreach($level as $level)
            <div class="col col-md-3  m-3">

            
            <a href="{{ route('unit' , $level->id) }}" style="text-decoration: none;" >

                <div class="text-light" style="background-color: {{$level->color1}} ; height: 70px; width:auto" >
                    <h3 class="text-auto"> {{$level->sort}} </h3>
                   
                    @if ($level -> free == 1 )
                        <span > Free </span>
                    @else
                        <span> Paid </span>
                    @endif
                     
                </div>
                <div CLASS="text-light" style="background-color: {{$level->color2}} ; height: 70px; width:auto"> 
                    <div CLASS="text-light"> <h3>{{$level->arname}}</h3> </div>    
                </div>
            
            </a>


            </div>
            @endforeach

        </div>

    </div>
@endsection