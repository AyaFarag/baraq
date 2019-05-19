@if (session('status'))
    <div class="alert alert-success" style="width:300px;margin:auto; margin-top:60px">
        {{ session('status') }}
    </div>
@endif
@if (session('success'))
    <div class="alert alert-success" style="width:300px;margin:auto; margin-top:60px">
        {{ session('status') }}
    </div>
@endif

@if ($errors->any())
    <div class="alert alert-danger" style="width:300px;margin:auto;  margin-top:60px ">
        <div>
            @foreach ($errors->all() as $error)
                <div>{{ $error }}</div>
            @endforeach
        </div>
    </div>
@endif