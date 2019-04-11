
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
                                            <h5>{{ Breadcrumbs::render('lesson', $unit) }}</h5>
                                            <button type="button" class="btn btn-primary" style=" float: left;" title="btn btn-primary" ><a href="{{url('structureCreate/lesson'.'/'.$unit_id)}}" class="" style="color: ivory; float:left; " >اضافه درس</a></button>
                                        </div>
                                        <div class="card-block">
                                            <div class="table-responsive" style="overflow-x:initial;">
                                                <table id="zero-configuration" class="display table nowrap table-striped table-hover" style="width:100%">
                                                    <thead>
                                                        <tr>
                                                            <th>اسم الدرس </th>
                                                            {{--  <th>عدد الانشطه </th>  --}}
                                                            <th> </th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        @foreach ($lesson as $lesson)
                                                            
                                                        <tr onclick="window.location='{{ url('lesson/content/'.$lesson->id  ) }}';">
                                                            <td> <a href="#" class="" style="color: lightslategray"> {{ $lesson->arname}} </a>  </td>
                                                            {{--  <td>  {{ \App\Models\Structure::with('lessons')->count() }} </td>  --}}
                                                            <td>
                                                              <button type="button" class="btn btn-danger" style=" float: left;" title="btn btn-danger" > <a href="{{ route('structure.delete' , $lesson->id)}}" class="" style="color: ivory">حذف الدرس </a> </button>
                                                              <button type="button" class="btn btn-success" style=" float: left;" title="btn btn-success" ><a href="{{ url('topic/type/'.$lesson->id .'/' ) }}" class="" style="color: ivory"> اضافه محتوي الدرس </a></button>
                                                              <button type="button" class="btn btn-success" style=" float: left;" title="btn btn-success" ><a href="{{ url('edit/lesson/'.$lesson->id  ) }}" class="" style="color: ivory">تعديل الدرس</a></button>
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


    @endsection