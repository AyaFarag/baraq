@extends('bareq_design.layouts.index')

@section('content')
@include('bareq_design.layouts.contentHeader')

    <section id="innerLesson" class="tabbable">
        <div class="inner_header" style="margin-top:30px;background-color:{{ $Lesson->color1 }} " >
            <h1>
                
                <span>الدرس الأول</span>
                
                
            </h1>
        </div>
        <!-- Main Icons -->
        <div class="container">
            <div class="row main_content mainIcon">
                @foreach ($contentRequired as $content)
                <div class="col-md-3" data-wow-delay="0.1s">
                    <figure>
                        <img class="pro img-responsive center-block" src="{{ url('/design/assets/img/watch.png') }}" onclick='appendFileContentToDiv({{$content->file->fileType}},"{{ ($content->file->pathType!=2)?$content->file->path:url('uploads/'.$content->file->path)}}",{{$content->id}})'>
                    </figure>
                    <h5 class="text-center">{{ $content->	arName }}</h5>
                </div>
                @endforeach
            </div>
        </div>
        <!-- #Main Icons -->
        <!-- tab_container -->
        <div id="viewContentByFileType" class="container" style="width:600px; height:600px"  >
 
        </div>
        <!-- #tab_container -->
        <!-- tabs -->
        <div class="container">
            <div class="row main_content subIcon tabs">
                
                
                @foreach ($contentNotRequired as $content)

                <div class="col-md-2" data-wow-delay="0.1s" onclick='appendFileContentToDiv({{ $content->file->fileType }},"{{ ($content->file->pathType!=2)?$content->file->path:url('uploads/'.$content->file->path)}}",{{$content->id}})'>
                    
                        <figure>
                            <img class="pro img-responsive center-block" src="{{ url('/uploads/logo/'. $content->logo. '/') }}">
                        </figure>
                        <h5 class="text-center">{{ $content->	arName }}</h5>
                    
                </div>
                
                @endforeach
            </div>
        </div>
        <!-- #tabs -->
    </section>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
    <script>
            function appendFileContentToDiv(contentType, FilePath,tab_id) {
                var tab_id=tab_id;
                var user_id='{{auth()->id()}}';
                $.ajax({
                    type:'POST',
                    url: '{{url('assgin/tab/ajax')}}',
                    data: {
                        _token: '{{ csrf_token() }}',
                       tab_id:tab_id,
                       user_id:user_id,
                    },
                    success: function (res) {
                       // console.log(res);
                    }
                });
                $('#viewContentByFileType').empty();
    
    
                switch (contentType) {
    
                    {{-- video --}}
                    case 0:
    
                        $('#viewContentByFileType').append('<video style="margin:auto" width="600" height="600" controls>\n' +
                            '                            <source src=' + FilePath + ' >\n' +
                            '                          </video>');
                        break;
                    {{--  zip --}}
                    case 1:
    
                        // $('#viewContentByFileType').html('<object data="'+FilePath+'" width="700" height="800" />');
                         $('#viewContentByFileType').html("<iframe  style='border:0;' width='600px' height='600px' src="+FilePath+">fhj</iframe>");
    
                       // $('#viewContentByFileType').append('<div width="320" height="240">  '+ FilePath + '</div>');
                        break;
                    {{--  quiz --}}
                    case 2:
    
                        $('#viewContentByFileType').load(FilePath);
                        break;
    
                }
    
        }
    
    
     </script>

    @endsection