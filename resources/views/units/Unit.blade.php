@extends('layouts.app')

@section('content')
    <div class="container">
        <h4> unit page </h4>

            <div class="row">
            @foreach($Unit as $unit)
            <div class="col col-md-3  m-3 bg-success"  >
            <a href="{{ route('lesson', $unit->id)}}" style="text-decoration: none;" >
                <div class="text-dark" style="background-color: {{$unit->color1}} ; height: 70px; width:auto" >
                        <h3 class="text-auto"> {{$unit->sort}} </h3>
                    
                        @if ($unit -> free == 1 )
                        <span > Free </span>
                        @else
                        <span> Paid </span>
                        @endif
                </div>
                <div style="width:100%" > <img  src="{{ asset('uploads/' . $unit->image) }}" /> </div>
                <div CLASS="text-light" style="background-color: {{$unit->color2}} ; height: 70px; width:auto" > 
                        <div CLASS="text-light"> <h3>{{$unit->arname}}</h3> </div>    
                </div>
            </a>
            </div>
            @endforeach

        </div>
    </div>
@endsection