@extends('layouts.app') @section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
              

                <div class="card-body">
                    @if (session('status'))
                    <div class="alert alert-success" role="alert">
                        {{ session('status') }}
                    </div>
                    @endif
                    <div>
                        <table class="table">
                            <thead>
                                <tr>
                                    <th>Lessons</th>
                                    <th>action</th>
                                </tr>
                            </thead>

                            <tbody>
                                @foreach($lesson as $lesson)
                                <tr>
                                    <td>
                                        <div class="alert alert-light" role="alert">
                                            <a href="#" class="alert-link"> {{$lesson-> arname}} </a>
                                        </div>
                                    </td>
                    
                                    <td>
                                       <a href="{{ url('edit/lesson/'.$lesson->id  ) }}" class="btn btn-success" > تعديل </a>

                                       <a href="{{ url('topic/type/'.$lesson->id .'/' ) }}" class="btn btn-primary" > اضافه محتوي الدرس </a>
                                    </td>
                                </tr>
                                @endforeach
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection