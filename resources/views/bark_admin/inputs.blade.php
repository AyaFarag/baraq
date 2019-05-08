<div class="row">
        <div class="col-md-12">
                <div class="form-group">
                    <label class="form-label">الاسم بالغه العربيه </label>
                    <input type="text" class="form-control" name="arname" value="{{(isset($structure))? $structure->arname: old('arname')}}" placeholder="الاسم بالغه العربيه">
                    <small class=" text-danger" > {{ $errors->first('arname') }} </small>
                </div>
            </div>


            <div class="col-md-12">
                    <div class="form-group">
                        <label class="form-label">الاسم بالغه الانجليزيه </label>
                        <input type="text" class="form-control" name="enname"  value="{{(isset($structure))? $structure->enname:old('enname')}}" placeholder="الاسم بالغه الانجليزيه ">
                        <small class=" text-danger" > {{ $errors->first('enname') }} </small>
                    </div>
                </div>

                <div class="col-md-12">
                        <div class="form-group">
                            <label class="form-label"> الكود  </label>
                            <input type="text" class="form-control"  name="code" value="{{(isset($structure))? $structure->code:old('code')}}" placeholder="code">
                            <small class=" text-danger" style="width:300px;"> {{ $errors->first('code') }} </small>
                        </div>
                    </div>

   
    <div class="col-md-12">
        <input type="hidden" class="form-control" name="type" value="{{$type}}" placeholder="type" readonly>
    </div>
        
           
        

    <div class="col-md-12">
        <div class="form-group">
            @if($parent_id!=null)
            <input type="hidden" class="form-control"  aria-describedby="parent_id"   name="parent_id" value="{{$parent_id}}">
            @endif
        </div>
    </div>

    <div class="col-md-12">
        <div class="form-group">
            <label class="form-label">الترتيب </label>
            <select class="form-control" name='sort' value="{{(isset($structure))? $structure->sort:old('sort')}}" style="display:block">
                   
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">5</option>
                    <option value="4">6</option>
                    <option value="4">7</option>
                    <option value="4">8</option>
                    <option value="4">9</option>
                    <option value="4">10</option>
                    
               
            </select>
            <small class=" text-danger" > {{ $errors->first('sort') }} </small>
        </div>
    </div>

    <div class="row">
        <div class="col-xl-6 col-md-6 mb-3">
                <h6>اللون الاول </h6>
                <input type="text" id="saturation-demo" class="form-control demo" data-control="saturation" name="color1" value="{{(isset($structure))? $structure->color1:old('color1')}}{{(!isset($structure)&&!old('color1'))?'#5bc7ac':''}}" >
                <small class=" text-danger" > {{ $errors->first('color1') }} </small>
            </div>

        <div class="col-xl-6 col-md-6 mb-3">
                <h6>اللون الثانى </h6>
                <input type="text" id="saturation-demo" class="form-control demo" data-control="saturation" name="color2" value="{{(isset($structure))?$structure->color2:old('color2')}}{{(!isset($structure)&&!old('color2'))?'#0cc79e':''}}" >
                <small class=" text-danger" > {{ $errors->first('color2') }} </small>
        </div>
        </div>

    <div class="col-md-12">
    <div class="form-group">
            <label class="form-label">File</label>
            <div>
                <input type="file" class="validation-file" name="image" value="old('image')">
            </div>
        </div>
        <small class=" text-danger" > {{ $errors->first('image') }} </small>
    </div>

   <div class="col-md-12">
        <div class="form-group">
                <div class="switch switch-success d-inline m-r-10">
                    <input type="checkbox" id="switch-s-2" name="free" value="1" @if(old('free')==1) checked @endif>
                    <label for="switch-s-2" class="cr"></label>
                </div>
                <label>مجاني </label>
        </div>
       
    </div>
    @if($type == 'level')
        @if( empty($placement_test) )
        {{--  placement test  --}}
        <div class="col-md-12" >
                <div class="form-group">
                <div class="input-group cust-file-button">
                    <div class="custom-file">
                        <input type="file" class="custom-file-input" id="inputGroupFile04" name="placement_folder">
                        <label class="custom-file-label" for="inputGroupFile04" >اختبار تحديد المستوي</label>
                    </div>
                    <div class="input-group-append">
                        <button class="btn btn-primary" type="button">uplaod</button>
                    </div>
                </div>
                
                <small class=" text-danger" > {{ $errors->first('placement_path') }} </small>
                </div>
            </div> 

            @else
            
            <div class="col-md-12" >
                    <div class="form-group">
                
                        
                        <table class="table">
                            <tr>
                                <th>
                                    اختبار تحديد المستوي    
                                </th>
                                <th>
                                        
                                </th>
                            </tr>
                            
                            <tr >
                                <td class="col-md-8"><a href="{{ url('/uploads/placement_test/'.$placement_test->placement_path.'/traditional-mode/start.html') }}"> {{ url('/uploads/placement_test/'.$placement_test->placement_path.'/traditional-mode/start.html') }}</a></td>
                                
                                <td class="col-md-3">
                                    
                                    <a href="{{ url('placement/test/'. $placement_test->id .'/delete') }}" class="btn btn-danger"> حذف </a>
                                </td>
                            </tr>
                        </table>
                        
                    </div>
            </div>
        @endif
    @endif
        </div>

<button type="submit" class="btn btn-success">تأكيد</button>
