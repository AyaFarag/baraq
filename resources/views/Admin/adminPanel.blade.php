@extends('layouts.app') 

@section('content')

<div class="container"> 
        <a href="/structureCreate/level" class="btn btn-secondery"> Add new level </a>
        <a href="/display/levels" class="btn btn-secondery"> All levels </a>
        <a href="/add/uesr" class="btn btn-secondery">  Users </a>
        
</div>

<hr />

<div class="container">
    <div class="row">

    <div class="col col-md-2">
        
        <a href="/add/uesr">
            <div class="card bg-light mb-3" style="max-width: 18rem;">
                <div class="card-header">Users</div>
                <div class="card-body">
                    <h5 class="card-title"></h5>
                    <p class="card-text">{{ $user-> count()}}</p>
                </div>
            </div>
        </a>
    </div>
    <div class="col col-md-2">
    <a href="/display/levels">
        <div class="card bg-light mb-3" style="max-width: 18rem;">
            <div class="card-header">Levels</div>
            <div class="card-body">
                <h5 class="card-title"></h5>
                <p class="card-text">{{ $level-> count()}}</p>
            </div>
        </div>
        </a>
    </div>
    <div class="col col-md-2">
        <div class="card bg-light mb-3" style="max-width: 18rem;">
            <div class="card-header">Unit</div>
            <div class="card-body">
                <h5 class="card-title"></h5>
                <p class="card-text">{{ $unit-> count()}}</p>
            </div>
        </div>
    </div>
    <div class="col col-md-2">
        <div class="card bg-light mb-3" style="max-width: 18rem;">
            <div class="card-header">lessons</div>
            <div class="card-body">
                <h5 class="card-title"></h5>
                <p class="card-text">{{ $lesson-> count()}}</p>
            </div>
        </div>
    </div>
    <div class="col col-md-2">
        <div class="card bg-light mb-3" style="max-width: 18rem;">
            <div class="card-header">Files</div>
            <div class="card-body">
                <h5 class="card-title"></h5>
                <p class="card-text">{{ $file-> count()}}</p>
            </div>
        </div>
    </div>
</div>
</div>
<hr />





@endsection