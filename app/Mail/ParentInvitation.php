<?php

namespace App\Mail;

use App\User AS User;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;

class ParentInvitation extends Mailable
{
    use Queueable, SerializesModels;
    /**
     * The User instance.
     *
     * @var User
     */

    private $user;
    private $email;
    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct(User $user,$email)
    {
        $this ->user = $user;
        $this ->email = $email;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->markdown('Mail.ParentInvitationFromChild')->with([
            'child_id' =>  $this ->user->id,
            'email' =>  $this ->email,
        ]);
    }
}
