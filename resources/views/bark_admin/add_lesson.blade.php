@extends('bark_admin.Layouts.index')

@section('content')


<!-- [ Form Validation ] start -->
<div class="col-sm-12" style="width: 77%;
   margin-right: 17%;
   margin-top: 2%;">
    <div class="card">
        <div class="card-header">
            <h5>اضافه درس</h5>
        </div>
        <form style="margin-right: 10%;" 
            id="validation-form123" 
            action="{{ route('lesson.store' , ['lesson'=>$Lesson->id, 'key'=>$key]) }}" 
            method="POST"
            enctype="multipart/form-data">

            @csrf
                @php $allLessonFiles=App\Models\LessonStructure::where('lesson_id',$Lesson->id)->pluck('type')->toArray(); @endphp
           
                <div class="row">

                <div class="col-md-2" style="display: inline-block;">
                    
                    <ul name="type">
                            {{--  <small class=" text-danger" > {{ $errors->first('type') }} </small>  --}}
                        @foreach($data as $k => $value)
                        <li value="{{ $k }}"> 
                                <a class="aa btn btn-outline-secondary" style="width:100%; @if(in_array($k,$allLessonFiles)) background-color:#1de9b6; border:0; color:#ffff !important; @endif" href="{{ url('topic/type/'.$Lesson->id. '/' . $k) }}" class=""  > {{ $value }}
                                </a>
                        </li>
                        @endforeach
                        
                            
                        
                    </ul>
                </div>
               

                <div class="col-md-10" style="display: inline-block;">
                    <div class="row">

                            <div class="col-md-8" style="" >
                                    <div class="input-group cust-file-button">
                                        <div class="custom-file">
                                            <input type="file" class="custom-file-input" id="inputGroupFile04" name="logo">
                                            <label class="custom-file-label" for="inputGroupFile04">upload logo</label>
                                        </div>
                                        <div class="input-group-append">
                                            <button class="btn btn-primary" type="button">uplaod</button>
                                        </div>
                                    </div>
                                    <small class=" text-danger" > {{ $errors->first('logo') }} </small>
                                </div>  

                                <div class="col-md-8">
                                    <div class="form-group">
                                        <label class="form-label">الاسم بالغه العربيه </label>
                                        <input type="text" class="form-control" placeholder="الاسم بالغه العربيه" name="arName"
                                            value="{{($LessonStructure)?$LessonStructure->arName:old('arName')}}">
                                            <small class=" text-danger" > {{ $errors->first('arName') }} </small>
                                    </div>
                                </div> 


                                <div class="col-md-8">
                                    <div class="form-group">
                                        <label class="form-label">الاسم بالغه الانجليزيه </label>
                                        <input type="text" class="form-control" placeholder="الاسم بالغه الانجليزيه "
                                            name="enName" value="{{($LessonStructure)?$LessonStructure->enName:old('enName')}}">
                                            <small class=" text-danger" > {{ $errors->first('enName') }} </small>
                                    </div>
                                </div> 

                                <div class="col-md-8">
                                    <div class="form-group">
                                        <label class="form-label"> code </label>
                                        <input type="text" class="form-control" placeholder="code" name="code"
                                            value="{{($LessonStructure)?$LessonStructure->code:old('code')}}">
                                            <small class=" text-danger" > {{ $errors->first('code') }} </small>
                                    </div>
                                </div> 


                                <div class="col-md-8">
                                    <div class="form-group">
                                           
                                        <label class="form-label">path type</label>
                                        <select class="form-control"id="mediaType" name="pathType" onChange="select()" style="display:block" />
                                        @foreach($fileType as $key => $value)
                                        <option value="{{ $key }}">{{ $value }}</option>
                                        @endforeach
                                        </select>
                                        <small class=" text-danger" > {{ $errors->first('path') }} </small>
                                    </div>
                                </div>

                                <div class="col-md-8" id="embeded" style="display:none">
                                    <div class="form-group">
                                        <label for="embadedPath" class="form-label">Embeded code or server url </label>
                                        <input type="text" class="form-control" id="embadedPath" placeholder="Write your embeded code or server url " name="path" value="{{($LessonStructure)?$LessonStructure->path:old('path')}}">
                                    </div>
                                    
                                </div> 
                               
                                
                                
                               
                                
                            <div class="col-md-8" id="upload" style="display:none">

                                <div class="col-md-12" style="padding: 0;">
                                    <div class="form-group">
                                        <label class="form-label">file types</label>
                                        <select class="form-control"  style="display:block" name='fileType'/>
                                            <option value="0">video</option>
                                            <option value="1">zip file</option>
                                            <option value="2">Quiz</option>
                                        </select>
                                    </div>
                                </div>


                                <div class="col-md-12 d" id="d1" style="padding: 0; margin-bottom: 15px;" >
                                    <div class="input-group cust-file-button">
                                        <div class="custom-file">
                                            <input type="file" class="custom-file-input" id="inputGroupFile04" name="file">
                                            <label class="custom-file-label" for="inputGroupFile04">upload img</label>
                                        </div>
                                        <div class="input-group-append">
                                            <button class="btn btn-primary" type="button">uplaod</button>
                                        </div>
                                    </div>
                                </div>  

                            
                                <div class="col-md-12 d" style="padding: 0;" >
                                    <div class="input-group cust-file-button">
                                        <div class="custom-file">
                                            <input type="file" class="custom-file-input" id="inputGroupFile04" name="srt">
                                            <label class="custom-file-label" for="inputGroupFile04">upload vidio</label>
                                        </div>
                                        <div class="input-group-append">
                                            <button class="btn btn-primary" type="button">uplaod</button>
                                        </div>
                                    </div>
                                </div>  
                        
                            </div>
                            
                        
                            <div class="col-md-8">
                                <div class="form-group">
                                    <div class="switch switch-success d-inline m-r-10">
                                        <input type="checkbox" id="switch-s-2" name="show" value="1" @if(old('show')==1) checked @endif>
                                        <label for="switch-s-2" class="cr"></label>
                                    </div>
                                    <label>إظهار</label>
                                </div>
                            </div> 

                            
                            <div class="col-md-8">
                                <button type="submit" class="btn btn-primary">تأكيد</button>
                            </div> 
                                
                        
                        
                        </div>
                                

                        </div>

               
            </div>

        </form>

    </div>
</div>



<script>

        function select(){
    
            var select = document.getElementById("mediaType").selectedIndex;
            
            
            if (select != 2 ) {
               
                 document.getElementById("embeded").style = "display:block";
                 document.getElementById("upload").style = "display:none";
    
            }else{
                
                 document.getElementById("upload").style = "display:block";
                 document.getElementById("embeded").style = "display:none";
            }
        }
           
        </script>


@endsection