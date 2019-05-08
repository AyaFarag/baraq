
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
                                            <h5> {{ Breadcrumbs::render('level') }}  </h5>
                                            <a href="{{ url('structureCreate/level')}}" class="btn btn-primary" style="float:left; margin-left: 26px;"> اضافه مستوي</a>
                                            <a href="{{ url('structureCreate/beginnerLevel')}}" class="btn btn-primary" style="float:left; margin-left: 26px;"> إضافه مستوي مبتدئ </a>
                                            <a href="{{ route('placementtest') }}" class="btn btn-primary" style="float:left; margin-left: 26px;"> اضافه اختبار تحديد المستوي</a>
                                        </div>
                                        <div class="card-block">
                                                
                                            <div class="table-responsive" style="overflow-x:initial;">
                                                <table id="zero-configuration" class="display table nowrap table-striped table-hover" style="width:100%">
                                                    <thead>
                                                        <tr> 
                                                            <th>اسم المستوى </th>
                                                            <th>عدد الدروس</th>
                                                            <th> </th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>


                                                            <tr onclick="window.location='{{ url('display/units/'.$begineer_level->id  ) }}';">
                                                                <td> <a href="{{ url('display/lessons/'.$begineer_level->id  ) }}" class="" style="color: lightslategray"> {{ $begineer_level->arname}} </a>  </td>
                                                                <td>  {{ \App\Models\Structure::where(['type'=> 'lessons','parent_id' => $begineer_level->id])->count() }} </td>
                                                                <td>
                                                                <button type="button" class="btn btn-danger" style=" float: left;" title="btn btn-danger" > <a href="{{ route('structure.delete' , $begineer_level->id)}}" class="" style="color: ivory">حذف المستوي </a> </button>
                                                                <button type="button" class="btn btn-success" style=" float: left;" title="btn btn-success" ><a href="{{url('structureCreate/lesson'.'/'.$begineer_level->id)}}" class="" style="color: ivory">اضافه درس</a></button>
                                                                <button type="button" class="btn btn-success" style=" float: left;" title="btn btn-success" ><a href="{{ url('edit/beginnerLevel/'.$begineer_level->id  ) }}" class="" style="color: ivory">تعديل المستوى</a></button>
                                                                </td>
                                                            </tr>
                                                    </tbody>
                                                    
                                                </table>
                                                <table id="zero-configuration" class="display table nowrap table-striped table-hover" style="width:100%">
                                                    <thead>
                                                        <tr> 
                                                            <th>اسم المستوى </th>
                                                            <th>عدد الوحدات</th>
                                                            <th> </th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>



                                                        @foreach ($structure as $level)           
                                                           
                                                            <tr onclick="window.location='{{ url('display/units/'.$level->id  ) }}';">
                                                                <td> <a href="{{ url('display/units/'.$level->id  ) }}" class="" style="color: lightslategray"> {{ $level->arname}} </a>  </td>
                                                                <td>  {{ \App\Models\Structure::where(['type'=> 'unit','parent_id' => $level->id])->count() }} </td>
                                                                <td>
                                                                <button type="button" class="btn btn-danger" style=" float: left;" title="btn btn-danger" > <a href="{{ route('structure.delete' , $level->id)}}" class="" style="color: ivory">حذف المستوي </a> </button>
                                                                <button type="button" class="btn btn-success" style=" float: left;" title="btn btn-success" ><a href="{{url('structureCreate/unit'.'/'.$level->id)}}" class="" style="color: ivory">اضافه وحده</a></button>
                                                                <button type="button" class="btn btn-success" style=" float: left;" title="btn btn-success" ><a href="{{ url('edit/level/'.$level->id  ) }}" class="" style="color: ivory">تعديل المستوى</a></button>
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
    <!-- [ Main Content ] end -->

    <!-- Warning Section start -->
    <!-- Older IE warning message -->
    <!--[if lt IE 11]>
        <div class="ie-warning">
            <h1>Warning!!</h1>
            <p>You are using an outdated version of Internet Explorer, please upgrade
               <br/>to any of the following web browsers to access this website.
            </p>
            <div class="iew-container">
                <ul class="iew-download">
                    <li>
                        <a href="http://www.google.com/chrome/">
                            <img src="assets/images/browser/chrome.png" alt="Chrome">
                                    <div>Chrome</div>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.mozilla.org/en-US/firefox/new/">
                            <img src="assets/images/browser/firefox.png" alt="Firefox">
                            <div>Firefox</div>
                        </a>
                    </li>
                    <li>
                        <a href="http://www.opera.com">
                            <img src="assets/images/browser/opera.png" alt="Opera">
                            <div>Opera</div>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.apple.com/safari/">
                            <img src="assets/images/browser/safari.png" alt="Safari">
                            <div>Safari</div>
                        </a>
                    </li>
                    <li>
                        <a href="http://windows.microsoft.com/en-us/internet-explorer/download-ie">
                            <img src="assets/images/browser/ie.png" alt="">
                            <div>IE (11 & above)</div>
                        </a>
                    </li>
                </ul>
            </div>
            <p>Sorry for the inconvenience!</p>
        </div>
    <![endif]-->
    <!-- Warning Section Ends -->

    @endsection