<div class="row">
        <div class="col-md-12">
                <div class="form-group">
                    <label class="form-label">الاسم بالغه العربيه </label>
                    <input type="text" class="form-control" name="arname" value="{{(isset($structure))? $structure->arname:""}}" placeholder="الاسم بالغه العربيه">
                </div>
            </div>


            <div class="col-md-12">
                    <div class="form-group">
                        <label class="form-label">الاسم بالغه الانجليزيه </label>
                        <input type="text" class="form-control" name="enname"  value="{{(isset($structure))? $structure->enname:""}}" placeholder="الاسم بالغه الانجليزيه ">
                    </div>
                </div>

                <div class="col-md-12">
                        <div class="form-group">
                            <label class="form-label"> الكود  </label>
                            <input type="text" class="form-control"  name="code" value="{{(isset($structure))? $structure->code:""}}" placeholder="code">
                        </div>
                    </div>

   
    <div class="col-md-12">
        <div class="form-group">
            <label class="form-label" > type</label>
            <input type="text" class="form-control" name="type" value="{{$type}}" placeholder="type" readonly>
        </div>
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
            <select class="form-control" name='sort' value="{{(isset($structure))? $structure->sort:""}}" style="display:block">
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
               
            </select>
        </div>
    </div>

    <div class="row">
        <div class="col-xl-6 col-md-6 mb-3">
                <h6>اللون الاول </h6>
                <input type="text" id="saturation-demo" class="form-control demo" data-control="saturation" name="color1" value="{{(isset($structure))? $structure->color1:"#ff6633"}}" >
            </div>

        <div class="col-xl-6 col-md-6 mb-3">
                <h6>اللون الثانى </h6>
                <input type="text" id="saturation-demo" class="form-control demo" data-control="saturation" name="color2" value="{{(isset($structure))? $structure->color2:"#ff6633"}}" >
            </div>
        </div>

    <div class="col-md-12">
    <div class="form-group">
            <label class="form-label">File</label>
            <div>
                <input type="file" class="validation-file" name="image">
            </div>
        </div>
        </div>
   <div class="col-md-12">
        <div class="form-group">
                <div class="switch switch-success d-inline m-r-10">
                    <input type="checkbox" id="switch-s-2" name="show" value="1">
                    <label for="switch-s-2" class="cr"></label>
                </div>
                <label>اظهار </label>
            </div>
            </div>
</div>

<button type="submit" class="btn btn-success">تأكيد</button>
