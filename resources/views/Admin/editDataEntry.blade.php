@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-4">
          <div class="container">
          <h4> Users </h4>
          @foreach($user as $user)
          <a href="{{route('user.edit',$user->id)}}">  <h3>{{ $user -> name}}</h3>  </a>
          @endforeach
        </div>
    </div>

        <div class="col-md-8">
            <div class="card">
                <div class="card-header">Admin Panel</div>

                <div class="card-body">
                    @if (session('status'))
                        <div class="alert alert-success" role="alert">
                            {{ session('status') }}
                        </div>
                    @endif

                    <span> Update User &nbsp; &nbsp; &nbsp; &nbsp;</span>

                    <a class="btn btn-danger text-light" href="{{ route('user.delete', $editUser->id) }}"> Delete </a>
                    <a class="btn btn-success text-light" href="{{ route('user.create') }}"> Add new data entry </a>
                    <hr/>
    
                    <form action="{{ route('user.update',$editUser->id) }}" method="post">
                        @csrf 
                    <input type="hidden" name="_method" value="PUT">

                    <div class="form-group">
                        <label for="exampleInputEmail">Name</label>
                        <input type="text" class="form-control" id="exampleInputEmail" aria-describedby="emailHelp" placeholder="Enter usr name" name="name" value="{{$editUser->name}}">              
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" name="email" value="{{$editUser->email}}">
                        
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">New Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" name="password" >
                    </div>

                    <div class="form-group">
                        <label for="exampleInputPassword1">Confirm Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Confirm Password" name="password" >
                    </div>

                    <button type="submit" class="btn btn-primary">Update</button>
                    </form>


                </div>
            </div>
        </div>
    </div>
</div>
@endsection
