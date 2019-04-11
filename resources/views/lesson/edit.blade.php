<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" dir="auto">
    <head >
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Bark</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet" type="text/css">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">


        <!-- Styles -->
        <style> </style>
    
    </head>
    <body dir="rtl">


    
    <div class="container"  >

    @if ($errors->any())
    <div class="alert alert-danger">
        <ul>
            @foreach ($errors->all() as $error)
                <li>{{ $error }}</li>
            @endforeach
        </ul>
    </div>
@endif

    <h5 > اضافه محتوي الدرس</h5>
    <form action="{{ route('lesson.update' , $LessonStructure->id ) }}" method="POST" enctype="multipart/form-data" >
            @csrf
    <input type="hidden" name="_method" value="PUT" />
    
    <div class="row">
        <div class="col col-md-3">
        
        <div class="form-group" >
            <label for="exampleFormControlSelect1" > Topic Type</label>
            <ul class="list-group" id="exampleFormControlSelect1" name="type">
                @foreach($data as  $key => $value)
                
                <a href="{{ url('topic/type/'.$LessonStructure->lesson_id. '/' . $key) }}"><li class="list-group-item" value="{{ $key }}" >{{ $value }}</li> </a>
                @endforeach
            </ul>
        </div>
        
        </div>

        <div class="col col-md-9">
    
        <div class="form-group">
            <label for="exampleFormControlSelect1">الترتيب</label>
            <select class="form-control" id="exampleFormControlSelect1" name='sort' >
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
            </select>
        </div>

        <div class="form-group">
            <label for="exampleInputEmail1">الاسم باللغة العربيه</label>
            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="arName" placeholder="اكتب الاسم باللغة العربية" name="arName" value="">
        </div>
            

        <div class="form-group">
            <label for="exampleInputEmail1">الاسم باللغة الانجليزيه</label>
            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="enName" placeholder="اكتب الاسم باللغة الانجليزيه" name="enName"  value="">
        </div>

        <div class="form-group">
            <label for="exampleInputEmail1"> الكود </label>
            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="code" placeholder="اكتب الكود " name="code" value="">
        </div>

        <hr />
        
        <span style="margin:auto" > media section </span>
        <br />
        <br />
        <br />
        <!-- <div class="form-group">
            <label for="exampleFormControlSelect2">Media Type</label>
            <select class="form-control" id="exampleFormControlSelect2" name="pathType">
            @foreach($media as  $key => $value)
                <option value="{{ $key }}" >{{ $value }}</option>
                @endforeach
            </select>
        </div>       -->
            
        <div class="form-group">
            <label for="mediaType">Path Type</label>
            <select class="form-control" id="mediaType" name="pathType" onChange="select()">
                <option  >Select Media Type</option>
                @foreach($fileType as  $key => $value)
                <option value="{{ $key }}" >{{ $value }}</option>
                @endforeach
            </select>
        </div>


        <div class="form-group" id="embeded" style="display:none"> 
            <label for="embadedPath"> Embeded code or server url</label>
            <input type="text" class="form-control" id="embadedPath" aria-describedby="path" placeholder="write embeded code or server url" name="path"  >
        </div>
        
        <div id="upload" >
            <div class="form-group">
                <label for="exampleFormControlSelect1">نوع الملف</label>
                <select class="form-control" id="exampleFormControlSelect1" name='fileType'>
                    <option value="0" >video</option>
                    <option value="1">audio</option>
                    <option value="2">mp3</option>        
                </select>
            </div>
            <br />
            <div class="custom-file">
                <input type="file" class="custom-file-input" id="validatedCustomFile"  name="file">
                <label class="custom-file-label" for="validatedCustomFile">Upload video or audio</label>
            </div>
                <br />
                <br />      
            <div class="custom-file">
                <input type="file" class="custom-file-input" id="validated"  name="srt">
                <label class="custom-file-label" for="validated">Upload SRT </label>
            </div>
        </div>



        <div class="col-auto my-1">
            <div class="custom-control custom-checkbox mr-sm-2">
                <input type="checkbox" class="custom-control-input" id="customControlAutosizing" name="show">
                <label class="custom-control-label" for="customControlAutosizing">اظهار</label>
            </div>
        </div>
        <br />

        <button type="submit" class="btn btn-primary">Submit</button>
        </div>
    </div>

    </form>
    </div>
        <script>

        function select(){

            var select = document.getElementById("mediaType").selectedIndex;

            
            if (select <= 2 ) {

                 document.getElementById("embeded").style = "display:block";
                 document.getElementById("upload").style = "display:none";

            }else {

                 document.getElementById("upload").style = "display:block";
                 document.getElementById("embeded").style = "display:none";
            }
             

        }
           
        </script>

        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
    
    </body>
</html>