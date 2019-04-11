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
                                            <h5>كل المستخدمين</h5>
                                        </div>
                                        <div class="card-block">
                                                <a href="{{ route('addDataEntry')}}" class="btn btn-primary" style="float:left"> اضافه مستخدم</a>
                                                <form action="{{ route('search.admin') }}" method="post">
                                                    @csrf
                                                    <select class="selectpicker show-tick"  name="role"> 
                                                        <option value="0">مدير</option>
                                                        <option value="1"> محرر</option>
                                      
                                                    </select>
                                                    <input type="submit" value="ابحث" class="btn btn-primary" />
                                                
                                                </form>
                                            <div class="table-responsive" style="overflow-x:initial;">
                                                <table id="zero-configuration" class="display table nowrap table-striped table-hover" style="width:100%">
                                                    <thead>
                                                        <tr>
                                                            <th>الاسم</th>
                                                            <th>الايميل</th>
                                                            <th>الدور</th>
                                                          
                                                            <th> تاريخ الانشاء</th>
                                                            <th> اخر دخول </th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                            @foreach($user as $user)
                                                        <tr>
                                                            <td>  {{ $user->name}}</td>
                                                            <td>{{ $user->email}}</td>
                                                            <td>
                                                                @if($user -> role == 0)
                                                                مدير
                                                                @elseif($user -> role == 1)
                                                                محرر
                                                                @endif
                                                            </td>
                                                         
                                                            <td>{{ $user->created_at}}</td>
                                                           
                                                        
                                                            @if($user->last_login!=null)
                                                            <td>{{ (new Carbon\Carbon($user->last_login))->format('Y-m-d') . " الساعة " . (new Carbon\Carbon($user->last_login))->format('H')}} </td>
                                                           @else
                                                           <td>لم يتم تسجيل الدخول بعد</td>
                                                            @endif
                                                           
                                                            <td>
                                                        <button type="button" class="btn btn-danger" style=" float: left;" title="btn btn-danger" ><a href="{{route('user.delete',$user->id)}}" class="" style="color: ivory">حذف</a></button>
                                                        <button type="button" class="btn btn-success" style=" float: left;" title="btn btn-success" ><a href="{{route('user.edit',$user->id)}}" class="" style="color: ivory">تعديل</a></button>
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



    @endsection