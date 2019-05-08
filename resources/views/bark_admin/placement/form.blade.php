@extends('bark_admin.Layouts.index')

@section('content')


<div class="col-sm-12" style="width: 77%;
   margin-right: 17%;
   margin-top: 2%;">

    <div class="card">
        <div class="card-header">
            <h5>إضافه اختبار تحديد المستوي</h5>
        </div>



        <div class="container">

            
                <form   style="" 
                id="validation-form123" 
                action="{{ route('add')}}" 
                method="POST"
                enctype="multipart/form-data">

                @csrf

                <div class="row">


                    <div class="col-md-12" >
                        <div class="input-group cust-file-button">
                            <div class="custom-file">
                                <input type="file" class="custom-file-input" id="inputGroupFile04" name="placement_folder">
                                <label class="custom-file-label" for="inputGroupFile04" >upload Placement Test</label>
                            </div>
                            <div class="input-group-append">
                                <button class="btn btn-primary" type="button">uplaod</button>
                            </div>
                        </div>
                        
                        <small class=" text-danger" > {{ $errors->first('placement_path') }} </small>
                    </div>  

                <br/> <br/><br/>

                    <div class="col-md-12">
                            <div class="form-group">
                                <label class="form-label">اختر المستوي </label>
                                <select class="form-control" style="display:block" name='level_id' value="old('level_id')">
                                    @foreach($level as $level)
                                    
                                    <option value="{{ $level->id }}"> {{ $level->arname }} </option>
                                    @endforeach

                                </select>
                                <small class=" text-danger" > {{ $errors->first('level_id') }} </small>
                        </div>
                    </div> 

                        <div class="col-md-8">
                                <button type="submit" class="btn btn-primary">تأكيد</button>
                        </div> 


                </div>

                </div>

                    </div>
                </div>















@endsection