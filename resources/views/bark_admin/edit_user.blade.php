@extends('bark_admin.Layouts.index')

@section('content')




<!-- [ Form Validation ] start -->
<div class="col-sm-12" style="width: 77%;
   margin-right: 17%;
   margin-top: 2%;">
    <div class="card">
        <div class="card-header">
            <h5>تعديل مستخدم</h5>
        </div>
        <div class="card-block">
            <form id="validation-form123" action="{{ route('user.update',$editUser->id) }}" method="POST">
                @csrf
                <input type="hidden" name="_method" value="PUT">
                <div class="row">
                    <div class="col-md-12">
                        <div class="form-group">
                            <label class="form-label">الاسم كامل</label>
                            <input type="text" class="form-control" name="name" placeholder="الاسم" value="{{$editUser->name}}">
                        </div>
                    </div>

                    <div class="col-md-12">
                        <div class="form-group">
                            <label class="form-label">ايميل</label>
                            <input type="text" class="form-control" name="email" placeholder="ايميل" value="{{$editUser->email}}">
                        </div>
                    </div>
                    <div class="col-md-12">
                        <div class="form-group">
                            <label class="form-label">كلمه السر</label>
                            <input type="password" class="form-control" name="password"
                                placeholder="كلمه السر">
                        </div>
                    </div>

                    <div class="col-md-12">
                        <div class="form-group">
                            <label class="form-label"> تاكيد كلمه السر</label>
                            <input type="password" class="form-control" name="password"
                                placeholder="Confirm password">
                        </div>
                    </div>

                    <div class="col-md-12">
                        <div class="form-group">
                            
                            <input type="hidden" class="form-control" name="role" value="{{$editUser->role}}" />
                        </div>
                    </div>
       




                </div>
                <button type="submit" class="btn btn-success">تأكيد</button>
            </form>
        </div>
    </div>
</div>
<!-- [ Form Validation ] end -->

@endsection