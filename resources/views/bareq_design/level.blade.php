
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
                </div>
            </div>
        @endforeach
        </div>

        
    </div>

</div>
{{--  #levels Section  --}}
