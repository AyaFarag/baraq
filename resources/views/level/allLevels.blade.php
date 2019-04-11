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
                                    <th>Levels</th>
                                    <th>units</th>
                                    <th>action</th>
                                </tr>
                            </thead>
                            <tbody>
                                @foreach($level as $level)
                                <tr>
                                    <td>
                                        <div class="alert alert-light" role="alert">
                                            <a href="{{ url('display/units/'.$level->id  ) }}" class="alert-link"> {{$level-> arname}} </a>
                                        </div>

                                    </td>
                                    <td>
                                         {{ \App\Models\Structure::where(['parent_id' => $level->id])->count() }} 
                                    </td>
                                    <td>
                                       <a href="{{ url('edit/level/'.$level->id  ) }}" class="btn btn-success" > تعديل </a>

                                       <a href="{{url('structureCreate/unit'.'/'.$level->parent_id)}}" class="btn btn-primary"> اضافه وحده</a>
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