@extends('layouts.app')

@section('content')

    <div class="container">
        <a href="{{url('school/student')}}" class="btn btn-secondery">  الطلاب </a>
    </div>
    <div class="container">
        <div class="row">
            <h3>welcome {{$school->name}}</h3>
        </div>
    </div>
@endsection