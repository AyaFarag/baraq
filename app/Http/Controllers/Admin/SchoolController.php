<?php

namespace App\Http\Controllers\Admin;

use App\Models\School;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class SchoolController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $schools=School::all();
        return view('school.index',compact('schools'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('school.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
       
        $rules = 'greater_than_now';
        request()->validate([
            'email' => 'required|email|unique:schools',
            "name" => "required|min:6|max:30|alpha_num",
            "password" => "required|min:6|max:30|confirmed",
            "end_date" => "required|greater_than_field:start_date|" . $rules,
            "start_date" => "required|" . $rules,
        ], [
            'end_date.required' => 'من فضلك ادخل تاريخ نهايه التفعيل',
            'end_date.greater_than_field' => 'من فضلك  تاريخ النهايه يحب ان يكون اكبر من تاريخ البدايه',
            'end_date.greater_than_now' => 'من فضلك  تاريخ النهايه يحب ان يكون اكبر من تاريخ اليوم',
            'start_date.greater_than_now' => 'من فضلك  تاريخ البدايه يحب ان يكون اكبر من تاريخ اليوم',
            'start_date.required' => 'من فضلك ادخل تاريخ بدايه التفعيل',
            'name.required' => 'الاسم مطلوب ',
            'name.min' => 'الاسم لا يقل عن 6 احرف ',
            'password.min' => 'كلمة المرور لا تقل عن 6 احرف',
            'password.required' => 'كلمة المرور مطلوبة',
            'name.max' => 'الاسم لا يزيد عن 30 حرف',
            'password.max' => 'كلمة المرور لا تزيد عن 30 حرف ',
            'password.confirmed' => 'تأكيد كلمة المرور غير صحيحة',
            'name.alpha_num' => 'الاسم يجب ان يكون ارقان وحروف فقط ',
            'email.required' => 'الإيميل مطلوب ',
            'email.email' => 'الإيميل غير صحيح ',
            'email.unique' => 'الاميل موجود بالفعل',
        ]);
        $data=$request->except('_token','password','logo','fb','password_confirmation');
        if($request->has('logo')){
            $filename=$request->logo->getClientOriginalName();
                $request->logo->move(public_path() . '/' . 'schoolLogo', $filename);
                $data['logo']=$filename;
        }
        if ($request->password && $request->password !=null){
            $password=bcrypt($request->password);
            $data['password']=$password;
        }
        $data['social']=$request->fb;
        School::create($data);
        return redirect()->back()->with('status','تم الإضافة بنجاح');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\School  $school
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $school=School::find($id);
        return view('school.show',compact('school'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\School  $school
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $school=School::find($id);
        return view('school.edit',compact('school'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\School  $school
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $school=School::find($id);
        $rules = 'greater_than_now';
        request()->validate([
            'email' => 'required|email|unique:schools,email,'.$id,
            "name" => "required|min:6|max:30|alpha_num",
            "end_date" => "required|greater_than_field:start_date|" . $rules,
            "start_date" => "required|" . $rules,
        ], [
            'end_date.required' => 'من فضلك ادخل تاريخ نهايه التفعيل',
            'end_date.greater_than_field' => 'من فضلك  تاريخ النهايه يحب ان يكون اكبر من تاريخ البدايه',
            'end_date.greater_than_now' => 'من فضلك  تاريخ النهايه يحب ان يكون اكبر من تاريخ اليوم',
            'start_date.greater_than_now' => 'من فضلك  تاريخ البدايه يحب ان يكون اكبر من تاريخ اليوم',
            'start_date.required' => 'من فضلك ادخل تاريخ بدايه التفعيل',
            'name.required' => 'الاسم مطلوب ',
            'name.min' => 'الاسم لا يقل عن 6 احرف ',
            'name.max' => 'الاسم لا يزيد عن 30 حرف',
            'name.alpha_num' => 'الاسم يجب ان يكون ارقان وحروف فقط ',
            'email.required' => 'الإيميل مطلوب ',
            'email.email' => 'الإيميل غير صحيح ',
            'email.unique' => 'الاميل موجود بالفعل',
        ]);
        $data=$request->except('_token','password','logo','fb','password_confirmation');
        if($request->has('logo')){
            unlink(public_path() . '/' . 'schoolLogo', $school->logo);
            $filename=$request->logo->getClientOriginalName();
            $request->logo->move(public_path() . '/' . 'schoolLogo', $filename);
            $data['logo']=$filename;
        }
        if ($request->password && $request->password !=null){
            $password=bcrypt($request->password);
            $data['password']=$password;
        }
        if($request->has('fb')){
            $data['social']=$request->fb;
        }
       $school->update($data);
        return redirect()->back()->with('status','تم التعديل بنجاح');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\School  $school
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $school=School::find($id);
        if($school->logo){
            unlink(public_path() . '/' . 'schoolLogo', $school->logo);
        }
        $school->destroy();
    }
}
