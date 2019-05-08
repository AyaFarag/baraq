<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;


class StructureRequest extends FormRequest
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
            "arname" => "required",
            "enname" => "required",
            "sort" => "required|unique:structures",
            "type" => "required",
            "code" => "required|unique:structures,code",
            "image" => "required",
        ];
    }

    public function messages()
    {
        return [
            'arname.required' => 'الاسم باللغه العربيه مطلوب',
            'enname.required'  => 'الاسم باللغه الإنجليزيه مطلوب',
            'sort.required'  => 'الترتيب مطلوب',
            'code.required'  => 'الكود مطلوب ',
            'image.required'  => 'الصورة مطلوبه',
        
        ];
    }
}
