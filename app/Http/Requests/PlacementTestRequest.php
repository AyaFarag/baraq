<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class PlacementTestRequest extends FormRequest
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
            "level_id" => "required|unique:level_placement",
            "placement_path" => "required",
        ];
    }

    public function messages()
    {
        return [
            'level_id.required' => 'اختيار المستوي مطلوب',
            'level_id.unique' => 'هذا المستوي تم اختياره سابقاً',
            'placement_path.required' => 'برجاء رفع اختبار تحديد المستوي',

            
        
        ];
    }
}
