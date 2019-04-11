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
                                    <th>Units</th>
                                    <th>Lessons</th>
                                    <th>action</th>
                                </tr>
                            </thead>

                            <tbody>
                                @foreach($unit as $unit)
                                <tr>
                                    <td>
                                        <div class="alert alert-light" role="alert">
                                            <a href="{{ url('display/lessons/'.$unit->id  ) }}" class="alert-link"> {{$unit-> arname}} </a>
                                        </div>
                                    </td>
                                    <td>
                                    {{ \App\Models\Structure::where(['parent_id' => $unit->id])->count() }} 
                                    </td>
                                    <td>
                                       <a href="{{ url('edit/unit/'.$unit->id  ) }}" class="btn btn-success" > تعديل </a>

                                       <a href="{{url('structureCreate/lesson'.'/'.$unit->parent_id)}}" class="btn btn-primary"> اضافه درس</a>
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