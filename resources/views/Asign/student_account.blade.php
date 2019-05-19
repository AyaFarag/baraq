@extends('layouts.app') 

@section('content')


<div class="container">
    <div class="">

        <h1> student account </h1>
        <?php $role= new \App\User();?>
        @if(auth()->user()->role==$role->getStudentValue())
        <a class="btn btn-success " href="/asign/parent" > Add Parent account </a>
            @endif
</div>
    <h3>Student Level : {{$studentLevel->level->arname}}</h3>
    <h3>Student Unit : {{$studentUnit->unit->arname}}</h3>
    <h3>Student Lessons</h3>
    <?php $assignLesson=$studentLesson->pluck('lesson_id')->toArray(); ?>
    <ul>
        @foreach($unitLesson as $lesson)
            <li>{{$lesson->arname}}
                @if($lesson->id==$currentLesson->lesson_id)
                    <i class="fa fa-unlock fa-2x"></i>
                @elseif(in_array($lesson->id,$assignLesson))
                    <i class="fa fa-check-circle fa-2x"></i>
                    @else
                    <i class="fa fa-lock fa-2x"></i>
                @endif
            </li>
            @endforeach
    </ul>
</div>

<hr/>





@endsection