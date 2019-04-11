@extends('layouts.app') 

@section('content')
<div class="container">


<table class="table">
    <thead>
      <tr>
      <th scope="col">Name</th>
      <th scope="col">role</th>
    </tr>
  </thead>
      
  
  <tbody>
    @foreach($editUser as $user)
        <tr>
            <td>  <a href="{{route('user.edit',$user->id)}}">
            {{ $user -> name}}
            </a></td>
            <td>
                @if($user -> role == 0)
                Admin
                @elseif($user -> role == 1)
                Data Entry
                @elseif($user -> role == 2)
                Student
                @endif
            </td>
        </tr>
    @endforeach
    </tbody>
    
</table>



    <div class="row j">


        <div class="col-md-8">
            <div class="card">
                

                <div class="card-body">
                    @if (session('status'))
                    <div class="alert alert-success" role="alert">
                        {{ session('status') }}
                    </div>
                    @endif 
                    Create New user ( Data Entry)
                    <hr/>

                    <form action="{{ route('user.add') }}" method="post">
                        @csrf
                        <div class="form-group">
                            <label for="exampleInputEmail">Name</label>
                            <input type="text" class="form-control" id="exampleInputEmail" aria-describedby="emailHelp" placeholder="Enter usr name"
                                name="name">
                        </div>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Email address</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" name="email">

                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Password</label>
                            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" name="password">
                        </div>

                        <div class="form-group">
                            <label for="exampleInputPassword1">Confirm Password</label>
                            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Confirm Password" name="password">
                        </div>

                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>

                </div>
            </div>
        </div>
    </div>
</div>


@endsection