
 {{--  levels Section   --}}
<div class="levels">
    <div class="container clearfix">

        <div class="col_one_sixth nobottommargin" onclick="location.href='{{ url('placement/test/'. $placement->id .'/') }}'">
            <div class="fbox-center fbox-light fbox-effect nobottomborder">
                <div class="fbox-icon center">
                    <figure>
                        <img class="" src="{{ url('/design/assets/img/level1.png') }}">
                    </figure>
                </div>
                <h5 class="center">تحديد
                    <br>المستوى
                </h5>
            </div>
        </div>
        @php
            $role=new \App\User();
            if(auth()->check()&&auth()->user()->role==$role->getStudentValue()){
            $levelList=\App\Models\StudentHistory::where('user_id',auth()->id())->get()->pluck('level_id')->toArray();
            $currentLevel=\App\Models\StudentHistory::where('user_id',auth()->id())->orderBy('created_at','desc')->first();
            $currentLevel=$currentLevel->level_id;
            $key=array_search($currentLevel,$levelList);
            unset($levelList[$key]);
            }
        @endphp
        @foreach($level as $level)

            <div class="col_one_sixth nobottommargin" onclick="location.href='{{ route('web.unit' , $level->id) }}'">
                <div class="fbox-center fbox-light fbox-effect nobottomborder">
                    <div class="fbox-icon center">
                        <figure>
                            <img class="" src="{{ url('/design/assets/img/level1.png') }}">
                        </figure>
                    </div>
                    <h5 class="center">
                        {{ $level->arname }}
                    </h5>
                    @if(auth()->check()&&auth()->user()->role==$role->getStudentValue())
                    @if($level->id==$currentLevel)
                            <i class="fa fa-unlock fa-2x" style="color: #99873c"></i>
                    @elseif(in_array($level->id,$levelList))
                        <i class="fa fa-check-circle fa-2x" style="color: forestgreen;"></i>
                    @elseif(!in_array($level->id,$levelList))
                            <i class="fa fa-lock fa-2x" style="color: #740D0A"></i>
                        @endif
                        @endif
                </div>
            </div>
        @endforeach
        </div>

        
    </div>

</div>
{{--  #levels Section  --}}
