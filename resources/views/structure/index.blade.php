<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" dir="rtl">
    <head >
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Bark</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet" type="text/css">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">


        <!-- Styles -->
        <style> </style>
    
    </head>
    <body dir="rtl">


    
    <div class="container"  >

        <br />
    @foreach($structure as $structure)
    <ul class="list-group" >
        <a href="{{url('/edit' .'/'. $structure['type'] .'/'. $structure['id']  )}}">  <li class="list-group-item">{{$structure['arname']}}</li></a>
    </ul>
    @endforeach

    <br />
    <br />
    <a  href="{{url('structureCreate/level')}}" class="btn btn-primary">اضافه مستوي </a>

    <br />
    <br />

    </div>
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
    
    </body>
    </html>