@extends('bark_admin.Layouts.index')

@section('content')


    
   <div class="col-sm-12" style="width: 77%; margin-right: 17%; margin-top: 2%;" >
        <div class="card">
            <div class="card-header">
                <h5>اضافه </h5>
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
