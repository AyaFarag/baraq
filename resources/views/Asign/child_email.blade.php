@extends('layouts.app') 

@section('content')

<div class="container">
        <h6>Add Child Email </h6>
        <form action="{{ route('asign.child')}}" method="POST" >
            @csrf
            <div class="form-group" style="width:25%">
                <input type="email"  placeholder="Type child email" name="email" class="form-control"/>
            </div>
            
            <div class="form-group" style="width:25%">
                <input type="submit"  value="Asign My Child" class="btn btn-primary form-control"/>
            </div>

            <pre> Once you asign your child email you wolud be able to follow up him  </pre>
        </form>
    </div>



@endsection