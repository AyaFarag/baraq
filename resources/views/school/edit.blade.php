@extends('bark_admin.Layouts.index')
@section('content')
    <script src="https://code.jquery.com/jquery-1.10.2.min.js"></script>
    <script type="text/javascript"
            src='https://maps.google.com/maps/api/js?sensor=false&libraries=places&key=AIzaSyBwxuW2cdXbL38w9dcPOXfGLmi1J7AVVB8'></script>
    <script src="{{asset('js/locationpicker.jquery.js')}}"></script>
    <?php
    $lat=!empty($school->lat)?$school->lat:30.04546710125749 ;
    $lng=!empty($school->lng)?$school->lng:31.23487663269043 ;
    ?>

    <!-- [ Form Validation ] start -->
    <div class="col-sm-12" style="width: 77%;
   margin-right: 17%;
   margin-top: 2%;">
        <div class="card">
            <div class="card-header">
                <h5>تعديل مدرسة</h5>
            </div>
            <div class="card-block">
                <form id="validation-form123" action="{{url('update/school/'.$school->id)}}" method="POST" enctype="multipart/form-data">
                    @csrf
                    <input type="hidden" value="{{ $lat }}" name="lat" id="lat">
                    <input type="hidden" value="{{ $lng }}" name="lng" id="lng">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="form-group">
                                <label class="form-label">الاسم</label>
                                <input type="text" class="form-control" value="{{$school->name}}" name="name" required placeholder="الاسم">
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="form-group">
                                <label class="form-label">ايميل</label>
                                <input type="text" class="form-control" value="{{$school->email}}" name="email" required placeholder="ايميل">
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="form-group">
                                <label class="form-label">كلمه السر</label>
                                <input type="password" class="form-control"   name="password"
                                       placeholder="كلمه السر">
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="form-group">
                                <label class="form-label"> تاكيد كلمه السر</label>
                                <input id="password-confirm" type="password" class="form-control"  name="password_confirmation"
                                       placeholder="Confirm password">
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="form-group">
                                <label class="form-label">عدد الطلاب</label>
                                <input type="number" class="form-control" required value="{{$school->student_number}}" name="student_number"
                                       placeholder="عدد الطلاب">
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="form-group">
                                <label class="form-label">رقم الهاتف</label>
                                <input type="number" class="form-control" required value="{{$school->mobile}}" name="mobile"
                                       placeholder="رقم الهاتف">
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="form-group">
                                <label class="form-label">تاريخ بداية التفعيل</label>
                                <input type="date" class="form-control" required value="{{$school->start_date}}" name="start_date"
                                       placeholder="تاريخ البداية">
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="form-group">
                                <label class="form-label">تاريخ نهاية التفعيل</label>
                                <input type="date" class="form-control" required value="{{$school->end_date}}" name="end_date"
                                       placeholder="تاريخ النهاية">
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="form-group">
                                <label class="form-label">العنوان</label>
                                <input id="address" type="text" class="form-control" required value="{{$school->address}}" name="address"
                                       placeholder="العنوان">
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="form-group">
                                <div id="us1"
                                     style="width: 100%; height: 400px;">
                                </div>
                                <script>
                                    $('#us1').locationpicker({
                                        location: {
                                            latitude: '{{ $lat }}',
                                            longitude: '{{ $lng }}'
                                        },
                                        radius: 300,
                                        inputBinding: {
                                            locationNameInput: $('#address'),
                                            latitudeInput: $('#lat'),
                                            longitudeInput: $('#lng')
                                            //radiusInput: $('#us2-radius'),
                                            // locationNameInput: null,
                                        },
                                        enableAutocomplete: true,
                                        onchanged: function (currentLocation, radius, isMarkerDropped) {
                                            // alert("Location changed. New location (" + currentLocation.latitude + ", " + currentLocation.longitude + ")");
                                        }
                                    });
                                </script>
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="form-group">
                                <label class="form-label">الموقع</label>
                                <input type="text" class="form-control"  value="{{$school->website}}" name="website"
                                       placeholder="الموقع">
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="form-group">
                                <label class="form-label">الفيس بوك</label>
                                <input type="text" class="form-control"  value="{{$school->social}}" name="fb"
                                       placeholder="الفيس بوك">
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="form-group">
                                <label class="form-label">الشعار</label>
                                <input type="file" class="form-control"  name="logo">
                            </div>
                            @if($school->logo)
                                <img src="{{url('schoolLogo/'.$school->logo)}}" style="width: 200px; height: 200px" class="img-thumbnail">
                                @endif
                        </div>
                    </div>
                    <button type="submit" class="btn btn-success">تأكيد</button>
                </form>
            </div>
        </div>
    </div>
    <!-- [ Form Validation ] end -->
@endsection