<!DOCTYPE html>
<html lang="en">

<head>
    <title>Bark </title>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0, minimal-ui">
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="description" content="Datta Able Bootstrap admin template made using Bootstrap 4 and it has huge amount of ready made feature, UI components, pages which completely fulfills any dashboard needs."/>
    <meta name="keywords" content="admin templates, bootstrap admin templates, bootstrap 4, dashboard, dashboard templets, sass admin templets, html admin templates, responsive, bootstrap admin templates free download,premium bootstrap admin templates, datta able, datta able bootstrap admin template">
    <meta name="author" content="Codedthemes" />

    <!-- Favicon icon -->
    <link rel="icon" href="{{ url('/Admin/assets/images/favicon.ico') }}" type="image/x-icon">
    <!-- fontawesome icon -->
    <link rel="stylesheet" href="{{ url('/Admin/assets/fonts/fontawesome/css/fontawesome-all.min.css') }}">
    <!-- animation css -->
    <link rel="stylesheet" href="{{ url('/Admin/assets/plugins/animation/css/animate.min.css') }}">
    <!-- notification css -->
    <link rel="stylesheet" href="{{ url('/Admin/assets/plugins/notification/css/notification.min.css') }}">
    <!-- vendor css -->
    <link rel="stylesheet" href="{{ url('/Admin/assets/css/style.css') }}">
    <link rel="stylesheet" href="{{ url('/Admin/assets/css/layouts/rtl.css') }}">
    <link rel="stylesheet" href="{{ url('/Admin/assets/plugins/mini-color/css/jquery.minicolors.css') }}">
    <!-- material datetimepicker css -->
    <link rel="stylesheet" href="{{ url('/Admin/assets/plugins/material-datetimepicker/css/bootstrap-material-datetimepicker.css')}}">
    <!-- Bootstrap datetimepicker css -->
    <link rel="stylesheet" href="{{ url('/Admin/assets/plugins/bootstrap-datetimepicker/css/bootstrap-datepicker3.min.css') }}">
    <link rel="stylesheet" href="{{ url('/Admin/assets/fonts/material/css/materialdesignicons.min.css') }}">
    <!-- Latest compiled and minified CSS -->
    {{--  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-select@1.13.7/dist/css/bootstrap-select.min.css">  --}}
    {{--  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">  --}}




    <style>
        .aa{
            color: lightslategray !important;
            }  
          
        .aa:hover{
            color: aliceblue !important;
          }
           select {
            width: 150px;
            border: 1px solid #ccc;
            padding: .375rem .75rem;
            font-size: 1rem;
            line-height: 1.5;
            border-radius: .25rem;
            transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
           }
      .table-responsive {
        border: 1px solid #eaeaea !important;
      }
    </style>
        
        

</head>

      @if (session('status'))
        <div class="alert alert-success" style="width:300px;margin:auto; margin-top:60px">
            {{ session('status') }}
        </div>
      @endif

      {{--  @if ($errors->any())
        <div class="alert alert-danger" style="width:300px;margin:auto;  margin-top:60px ">
            <div>
                @foreach ($errors->all() as $error)
                <div>{{ $error }}</div>
                @endforeach
            </div>
        </div>
      @endif  --}}







