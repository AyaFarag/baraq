@extends('layouts.app') 

@section('content')

<div class="container">
    
    <div style="width:25%">
         <h6>Add Child account</h6>
    <form action="{{ route('child.action')}}" method="POST" >
        @csrf
        <div class="form-group" >
            <input type="text"  placeholder="Type child name" name="name" class="form-control"/>
        </div>
        <div class="form-group" >
            <input type="hidden"  name="role" value="2" class="form-control"/>
        </div>

        <div class="form-group" >
            <input type="email"  placeholder="Type child email" name="email" class="form-control"/>
        </div>

        <div class="form-group" >
            <input type="password"  placeholder="Child New password" name="password" class="form-control"/>
        </div>

        <div class="form-group" >
            <input type="password"  placeholder="Confirm Child password" name="password" class="form-control"/>
        </div>
        
        <div class="form-group" >
            <input type="submit"  value="Create Child" class="btn btn-primary form-control"/>
        </div>
    </form>
  </div>        
</div>
            
@endsection

            
            



