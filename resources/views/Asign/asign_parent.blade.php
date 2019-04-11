@extends('layouts.app') 

@section('content')

<div class="container">
        <h6>Add parent Account </h6>
        <form action="{{ route('parent.invitation', auth()->id()) }}" method="post" >
            @csrf
            <div class="form-group" style="width:25%">
                <input type="email"  placeholder="Type parent email" name="email" class="form-control"/>
            </div>
            
            <div class="form-group" style="width:25%">
                <input type="submit"  value="Invite My Parent" class="btn btn-danger form-control"/>
            </div>

            <pre> An Email Invitation will send to your parents and once they approve,
                 they would added to your parents list and could follow up with you  </pre>
        </form>
    </div>



@endsection