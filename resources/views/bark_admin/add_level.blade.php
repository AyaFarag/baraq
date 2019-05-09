@extends('bark_admin.Layouts.index')

@section('content')


    
   <div class="col-sm-12" style="width: 77%; margin-right: 17%; margin-top: 2%;" >
        <div class="card">
            <div class="card-header">
                @if($type == "level")
                <h5> إضافه مستوي </h5>
                @elseif($type == "beginnerLevel")
                <h5> إضافه مستوي تمهيدي  </h5>
                @elseif($type == "unit")
                <h5> إضافه وحدة </h5>
                @elseif($type == "lesson")
                <h5> إضافه درس </h5>
                @endif

               
                <a href="{{ url('back') }}" class="btn btn-danger float-right">عودة</a>
            </div>

            

        

      

            <div class="card-block">
                <form id="validation-form123" action="{{url('/structureSave/'.$type)}}" method="POST"  enctype="multipart/form-data">
                    @csrf

                    @include('bark_admin.inputs')


                
                </form>
            </div>
        </div>
    </div>


    @endsection
