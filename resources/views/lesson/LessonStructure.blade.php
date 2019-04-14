@extends('layouts.app') 
@section('content')

    <div class="container">
        <div class="row">

            <div class="col col-md-8" >
                <h2>lesson content file</h2>
                <div id="viewContentByFileType" >


                </div>
                <button id="fullScreen" onclick="fullScreen()">fullScreen</button>
            </div>

            <div class="col col-md-4 mt-3">

                <h3> lesson attributes </h3>
                <div class="row">

                    @foreach($content as $content)

                        <div class="col col-md-4 ">
                        @if($content->file->fileType!=2)
                        
                        <button onclick='appendFileContentToDiv({{$content->file->fileType}},"{{$content->file->path}}")'>
                            <a>
                                <div class="card">
                                    <img class="card-img-top" src="{{ url('/uploads/11.png')}}" alt="Card image">
                                    <div class="card-body">
                                  
                                        <p class="card-text"> {{ $content->	arName }} </p>

                                    </div>
                                </div>
                            </a>
                            </button>  
                                    
                            @else

                            <a href="{{$content->file->path}}">
                                <div class="card">
                                    <img class="card-img-top" src="{{ url('/uploads/11.png')}}" alt="Card image">
                                    <div class="card-body">

                                        <p class="card-text"> {{ $content->	arName }} </p>

                                    </div>
                                </div>
                            </a>
                            @endif
                        </div>
                    @endforeach

                </div>

            </div>

        </div>

        </div>
    </div>


    <script>
        function appendFileContentToDiv(contentType, FilePath) {
            $('#viewContentByFileType').empty();


            switch (contentType) {

                {{-- video --}}
                case 0:

                    $('#viewContentByFileType').append('<video width="320" height="240" controls>\n' +
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