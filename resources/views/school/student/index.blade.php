@extends('bark_admin.Layouts.index')
@section('content')
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
                                            <h5>كل الطلاب</h5>
                                        </div>
                                        <div class="card-block">
                                            <a href="{{ url('add/student') }}" class="btn btn-primary" style="float:left"> اضافه طالب</a>
                                            <div class="table-responsive" style="overflow-x:initial;">
                                                <table id="zero-configuration"
                                                       class="display table nowrap table-striped table-hover"
                                                       style="width:100%">
                                                    <thead>
                                                    <tr>
                                                        <th>الاسم</th>
                                                        <th>الايميل</th>
                                                        <th>الإجراءات</th>
                                                    </tr>
                                                    </thead>
                                                    <tbody>
                                                    @foreach($student as $item)
                                                        <tr>
                                                            <td> {{ $item->student->name}}</td>
                                                            <td>{{ $item->student->email}}</td>
                                                            <td>
                                                                <button type="button" class="btn btn-danger"
                                                                        style=" float: left;" title="btn btn-success"><a
                                                                            href="{{url('delete/student/'.$item->student_id)}}" class=""
                                                                            style="color: ivory">حذف</a></button>
                                                                <button type="button" class="btn btn-success"
                                                                style=" float: left;" title="btn btn-danger"><a
                                                                            href="{{url('edit/student/'.$item->student_id)}}" class=""
                                                                    style="color: ivory">تعديل</a></button>
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