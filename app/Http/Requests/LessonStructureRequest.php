<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;


class LessonStructureRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            // "type" => "required",
            // "logo" => "required",
            "arName" => "required",
            "enName" => "required",
            "code" => "required|unique:lesson_structures,code",
            // "sort" => "required",
            //"path" => "required",
            
           
        ];
    }

    public function messages()
    {
        return [
            // 'type.required' => 'العنوان مطلوب',
          //  'logo.required' => 'اللوجو مطلوب',
            'arName.required'  => 'الاسم باللغه العربيه مطلوب',
            'enName.required'  => 'الاسم باللغه الإنجليزيه مطلوب',
            'code.required'  => 'الكود مطلوب ',
            // 'sort.required'  => 'الترتيب مطلوب',
           // 'path.required'  => 'برجاء رفع ملف المحتوي',
            
        
        ];
    }
}
