            @csrf
            <br />


@if ($errors->any())
    <div class="alert alert-danger">
        <ul>
            @foreach ($errors->all() as $error)
                <li>{{ $error }}</li>
            @endforeach
        </ul>
    </div>
@endif

        <div class="form-group">
            <label for="exampleInputEmail1">الاسم باللغة العربيه</label>
            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="arname" placeholder="اكتب الاسم باللغة العربية" name="arname" value="{{(isset($structure))? $structure->arname:""}}">
        </div>
            

        <div class="form-group">
            <label for="exampleInputEmail1">الاسم باللغة الانجليزيه</label>
            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="enname" placeholder="اكتب الاسم باللغة الانجليزيه" name="enname"  value="{{(isset($structure))? $structure->enname:""}}">
        </div>
            

        <div class="form-group">
            <label for="exampleInputEmail1"> الكود </label>
            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="code" placeholder="اكتب الكود " name="code" value="{{(isset($structure))? $structure->code:""}}">
        </div>
        
        <div class="form-group">
            
            <input type="text" class="form-control"  aria-describedby="type"   name="type" value="{{$type}}">
            @if($parent_id!=null)
            <input type="text" class="form-control"  aria-describedby="parent_id"   name="parent_id" value="{{$parent_id}}">
            @endif
        </div>
            
        <div class="form-group">
            <label for="exampleFormControlSelect1">الترتيب</label>
            <select class="form-control" id="exampleFormControlSelect1" name='sort' value="{{(isset($structure))? $structure->sort:""}}">
                <option>0</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
            </select>
        </div>


        <div class="form-group">
            <label for="exampleInputEmail1"> color1 </label>
            <input type="color" class="form-control" id="exampleInputEmail1" aria-describedby="color1"  name="color1" value="{{(isset($structure))? $structure->color1:"#ff6633"}}">
        </div>


        <div class="form-group">
            <label for="exampleInputEmail1"> color2 </label>
            <input type="color" class="form-control" id="exampleInputEmail1" aria-describedby="color2"  name="color2" value="{{(isset($structure))? $structure->color2:"#ff6633"}}">
        </div>

        <!-- <div class="col-auto my-1">
            <div class="custom-control custom-checkbox mr-sm-2">
                <input type="checkbox" class="custom-control-input" id="customControlAutosizing" name="show" value="1">
                <label class="custom-control-label" for="customControlAutosizing">اظهار</label>
            </div>
        </div> -->


        <div class="col-auto my-1">
            <div class="custom-control custom-checkbox mr-sm-2">
                <input type="checkbox" class="custom-control-input" id="customControl" name="free" value="{{(isset($structure))? $structure->free:"0"}}">
                <label class="custom-control-label" for="customControl">مجاني </label>
            </div>
        </div>

        <div class="form-group">
            <label for="exampleFormControlFile1">Choose file</label>
            <input type="file" class="form-control-file" id="exampleFormControlFile1" name="image">
        </div>

        <button type="submit" class="btn btn-primary">حفظ</button>
        
        

        @if($type=='level' && isset($addUnit))
        
        <a  href="{{url('structureCreate/unit'.'/'.$unit_parent)}}" class="btn btn-primary">اضافة وحدة</a>
        
        @endif
        
        
        @if($type=='unit' && isset($addLesson))
        
            <a  href="{{url('structureCreate/lesson'.'/'.$lesson_parent)}}" class="btn btn-primary">درس اضافه</a>
        @endif
        


            <br />
            <br />
            <br />
            <br />
            <br />