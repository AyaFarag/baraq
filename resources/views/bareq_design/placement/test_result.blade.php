
@extends('bareq_design.layouts.index')

@section('content')
@include('bareq_design.layouts.indexHeader')


<div class="clearfix"></div>
<div style="margin-top:50px" ></div>
<div class="container" style="margin:auto">
  <div class="card text-white bg-success mb-3 text-center" style="width: 50%;  margin:auto">
    
    <div class="card-body">
      <h5 class="card-title">تم حساب درجتك </h5>
      <table class="table" dir="rtl" style="margin:auto">
        <tr style="margin:auto" align="center">
          <th >المستوي</th>
          <th>الدرجه</th>
          <th>الدرجه النهائيه</th>
        </tr>
        @foreach($userResult as $userResult)
        <tr>
          <td>{{ $userResult->level->arname }}</td>
          <td>{{ $userResult->score }}</td>
          <td>{{ $userResult->total }}</td>
        </tr>
        @endforeach
      </table>
      <p class="card-text">درجتك الحاليه هي {{ $userLastResult->score }}</p>
      <a href="{{ url('http://localhost:1234/baraq/public/unit/' .$userLastResult->level_id. '/') }}" style="color:#000"> يمكنك الانتقال الي المستوي المخصص لك من هنا </a>
    </div>
  </div>
</div>

  @endsection