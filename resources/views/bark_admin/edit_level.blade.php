
@extends('bark_admin.Layouts.index')

@section('content')

     <!-- [ Form Validation ] start -->
   <div class="col-sm-12" style="width: 77%;
   margin-right: 17%;
   margin-top: 2%;" >
        <div class="card">
            <div class="card-header">

                    @if($structure->type == "level")
                    <h5> تعديل المستوي </h5>
                    @elseif($structure->type == "unit")
                    <h5> تعديل الوحدة </h5>
                    @elseif($structure->type == "lesson")
                    <h5> تعديل الدرس </h5>
                    @endif
                
            </div>
            <div class="card-block">
                <form id="validation-form123" action="{{ route('update.structure', $structure->id) }}" method="POST" enctype="multipart/form-data">
                    @csrf
                    <input type="hidden" name="_method" value="PATCH" /> 
                 
                    @include('bark_admin.inputs')
                    
                </form>
            </div>
        </div>
    </div>

    @endsection



