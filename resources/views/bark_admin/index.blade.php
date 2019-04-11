@extends('bark_admin.Layouts.index')

@section('content')

 <!-- [ new statistics chart ] start -->
 <div class="col-xl-4 col-md-6" style="    margin-right: 40%;     margin-top: 10%;">
    <div class="card">
        <div class="card-header">
            <h5>الإحصائيات</h5>
            <div class="card-header-right">
                <div class="btn-group card-option">
                    <button type="button" class="btn dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i class="feather icon-more-horizontal"></i>
                    </button>
                    <ul class="list-unstyled card-option dropdown-menu dropdown-menu-right">
                        <li class="dropdown-item full-card"><a href="#!"><span><i class="feather icon-maximize"></i> maximize</span><span style="display:none"><i class="feather icon-minimize"></i> Restore</span></a></li>
                        <li class="dropdown-item minimize-card"><a href="javascript:"><span><i class="feather icon-minus"></i> collapse</span><span style="display:none"><i class="feather icon-plus"></i> expand</span></a></li>
                        <li class="dropdown-item reload-card"><a href="#!"><i class="feather icon-refresh-cw"></i> reload</a></li>
                        <li class="dropdown-item close-card"><a href="javascript:"><i class="feather icon-trash"></i> remove</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="card-block pl-0 pr-0 pb-2">
            <div id="bar-chart" class="ChartShadow BarChart" style="height:225px;"></div>
        </div>
        <div class="card-block border-top">
            <div class="row">
                <div class="col text-center">
                    <span class="theme-bg d-block rounded-circle mx-auto mb-2" style="width:10px; height:10px;"></span>
                    <h6 class="mb-2">{{ $user-> count()}}</h6>
                    <h6 class="mt-2 mb-0">المستخدمين</h6>
                </div>
                <div class="col text-center">
                    <span class="theme-bg2 d-block rounded-circle mx-auto mb-2" style="width:10px; height:10px;"></span>
                    <h6 class="mb-2">{{ $level-> count()}}</h6>
                    <h6 class="mt-2 mb-0">المستويات</h6>
                </div>
                <div class="col text-center">
                    <span class="bg-c-blue d-block rounded-circle mx-auto mb-2" style="width:10px; height:10px;"></span>
                    <h6 class="mb-2">{{ $unit-> count()}}</h6>
                    <h6 class="mt-2 mb-0">الوحدات</h6>
                </div>
                <div class="col text-center">
                    <span class="bg-c-red d-block rounded-circle mx-auto mb-2" style="width:10px; height:10px;"></span>
                    <h6 class="mb-2">{{ $lesson-> count()}}</h6>
                    <h6 class="mt-2 mb-0">الدروس</h6>
                </div>

                <div class="col text-center">
                        <span class="bg-c-red d-block rounded-circle mx-auto mb-2" style="width:10px; height:10px;"></span>
                        <h6 class="mb-2">{{ $file-> count()}}</h6>
                        <h6 class="mt-2 mb-0">الملفات</h6>
                    </div>
            </div>
        </div>
    </div>
</div>

@endsection
    

