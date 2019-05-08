<?php 


Breadcrumbs::for('level', function ($trail) {
    $trail->push('كل المستويات', route('structure.index'));
});

// Breadcrumbs::for('level', function ($trail) {
//     $trail->push('الوحده', route('display.units',$units));
// });

Breadcrumbs::for('unit', function ($trail,$level) {
    $trail->parent('level');
    $trail->push('كل الوحدات', route('display.units', $level));
});

Breadcrumbs::for('lesson', function ($trail, $unit) {
    $level= App\Models\Structure::find($unit)->parent_id;
    $trail->parent('unit',$level);
    $trail->push('كل الدروس', route('display.lessons', $unit));
});

Breadcrumbs::for('lessonContent', function ($trail, $lesson) {
    $unit= App\Models\Structure::find($lesson)->parent_id;
    $trail->parent('lesson',$unit);
    $trail->push('محتوي الدرس', route('lesson.content', $lesson));
});