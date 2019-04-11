<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" dir="rtl">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Bark</title>

    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet" type="text/css">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
        crossorigin="anonymous">


</head>

<body dir="rtl">


    <div class="container p-5">

        <div class="row">
            
                <div class="col col-md-4 ">

                    <br />
                    <br /> 
                    



                </div>
            


          
                <div class="col col-md-8 border border-dark">
                    <br />

                    <a class="btn btn-danger" href="{{ route('structure.delete', $structure->id) }}"> حذف </a>



                    <a href="{{url('structureCreate/unit'.'/'.$parent_id)}}" class="btn btn-primary"> اضافه وحده</a>
                    

                    <form action="{{ route('update.structure', $structure->id) }}" method="POST" enctype="multipart/form-data">

                        <input type="hidden" name="_method" value="PATCH" /> 
                        
                        @include('structure.inputs')

                    </form>
                </div>            
        </div>

    </div>


    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
        crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
        crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
        crossorigin="anonymous"></script>

</body>

</html>