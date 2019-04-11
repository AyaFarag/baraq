
@extends('bark_admin.Layouts.index')

@section('content')


    <!-- [ Main Content ] start -->
    <section class="pcoded-main-container">
        <div class="pcoded-wrapper">
            <div class="pcoded-content">
                <div class="pcoded-inner-content">
                    <!-- [ breadcrumb ] start -->
                   
                    <!-- [ breadcrumb ] end -->
                    <div class="main-body">
                        <div class="page-wrapper">
                            <!-- [ Main Content ] start -->
                            <div class="row">
                                <!-- [ configuration table ] start -->
                                <div class="col-sm-12">
                                    <div class="card">
                                        <div class="card-header">
                                            <h5>{{ Breadcrumbs::render('lessonContent', $lessonId) }}</h5>
                                            <button type="button" class="btn btn-primary" style=" float: left;" title="btn btn-primary" ><a href="{{ url('topic/type/'.$lessonId .'/' ) }}"" class="" style="color: ivory">اضافه نشاط  </a></button>
                                        </div>
                                        <div class="card-block">
                                            <div class="table-responsive" style="overflow-x:initial;">
                                                <table id="zero-configuration" class="display table nowrap table-striped table-hover" style="width:100%">
                                                    <thead>
                                                        <tr>
                                                            <th>اسم النشاط </th>
                                                            <th> admin name </th>
                                                            <th> تاريخ الإنشاء </th>
                                                            <th> </th>
                                                          
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        @foreach ($content as $content)
                                                            
                                                        <tr >
                                                            <td> <a href="#" class="" style="color: lightslategray"> {{ $content->arName}} </a>  </td>
                                                            
                                                            <td> {{ $content->creator}} </td>
                                                            
                                                            <td> {{ $content->created_at }} </td>
                                                           
                                                            <td class="row" style="float:left">
                                                                <div >
                                                                        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter"
                                                                        onclick='appendFileContentToDiv({{$content->file->fileType}},"{{$content->file->path}}")'>
                                                                            عرض
                                                                        </button>
                                                                        
                                                                        <!-- Modal -->
                                                                        <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                                                                            <div class="modal-dialog modal-dialog-centered" role="document">
                                                                            <div class="modal-content">
                                                                                <div class="modal-header">
                                                                                <h5 class="modal-title" id="exampleModalLongTitle">عرض النشاط</h5>
                                                                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                                    <span aria-hidden="true">&times;</span>
                                                                                </button>
                                                                                </div>
                                                                                <div class="modal-body" id="viewContentByFileType">
                                                                                ...
        
        
        
                                                                                </div>
                                                                                <div class="modal-footer">
                                                                                <button type="button" class="btn btn-secondary" data-dismiss="modal">اغلاق</button>
                                                                               
                                                                                </div>
                                                                            </div>
                                                                            </div>
                                                                        </div>
                                                                </div>
                                                                <div >
                                                                        <button type="button" class="btn btn-danger" style=" float: left;" title="btn btn-danger" > <a href="{{ route('lesson.delete' , $content->id)}}" class="" style="color: ivory">حذف  </a> </button>
                                                                </div>
                                                                <div >
                                                                        <button type="button" class="btn btn-success" style=" float: left;" title="btn btn-success" ><a href="{{ url('topic/type/'.$content->id.'/' .$content->type. '/' ) }}" class="" style="color: ivory">تعديل </a></button>

                                                                </div>
                                                                
                                                             
                                                                
                                                             
                                                            </td>

                                                        </tr>

                                                        @endforeach
                                                    </tbody>
                                                    
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                            <!-- [ Main Content ] end -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>




    <script>
            function appendFileContentToDiv(contentType, FilePath) {
                $('#viewContentByFileType').empty();
    
    
                switch (contentType) {
    
                    {{-- video --}}
                    case 0:
    
                        $('#viewContentByFileType').append('<video width="450px" height="450px" controls>\n' +
                            '                            <source src=' + FilePath + ' >\n' +
                            '                          </video>');
                        break;
                    {{--  zip --}}
                    case 1:
    
                        // $('#viewContentByFileType').html('<object data="'+FilePath+'" width="700" height="800" />');
                         $('#viewContentByFileType').html("<iframe  style='border:0;' width='450px' height='450px' src="+FilePath+">fhj</iframe>");
    
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