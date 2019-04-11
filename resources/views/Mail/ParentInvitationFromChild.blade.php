@component('mail::message')
# Introduction

Dear Parent.
@component('mail::button', ['url' => url('/parent/approve/'.$child_id.'/'.$email) , 'color' => 'primary'] )

Approve Invitation

@endcomponent

Thanks,<br>

{{ config('app.name') }}
@endcomponent
