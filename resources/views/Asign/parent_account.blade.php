@extends('layouts.app') 

@section('content')


<div class="container">
    <div class="">
        <h2> Parent account </h2>

        <div><a class="" href="{{ url('/asign/child') }}" > My Child Already has an account </a> </div>
        <br/>
        <a class="btn btn-primary" href="{{ url('/create/child') }}" > Create Child account </a>
    </div>

    <div style="margin-top:100px">
            <table class="table">
                    <tr>
                        <th>student name</th>
                        <th> last level </th>
                    </tr>
                    @foreach($student_history as $student_history)
                        <a href="">
                        <tr onclick="window.location='{{ route('student.history', $student_history->user_id ) }}';">
                            <td>{{ $student_history->name }}</td>
                            <td>{{ $student_history->arname }}</td>
                        </tr>
                    </a>
                        @endforeach
            </table>

                    
    </div>



</div>
<hr />








@endsection