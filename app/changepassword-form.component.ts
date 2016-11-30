import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import {PasswordValidators} from './password.validators';

@Component({
    selector: 'changepassword-form',
    templateUrl: './app/changepassword-form.component.html'
})
export class ChangePasswordFormComponent {

    changePasswordForm: FormGroup;

    constructor(fb: FormBuilder) {
        this.changePasswordForm = fb.group({
            oldPass: ['', Validators.required],
            newPass: ['', Validators.compose([
                        Validators.required, 
                        PasswordValidators.shouldbeAtLeatsFive
                        ])],
            newPassRepeated: ['', Validators.compose([
                        Validators.required,
                        //PasswordValidators.passwordsShouldMatch
                        ])]
        }, {validator: PasswordValidators.passwordsShouldMatch});
    }

    onChangePassword() {

        console.log(this.changePasswordForm.controls['oldPass'].value);

        if(this.changePasswordForm.controls['oldPass'].value !== '1234'){

        
            this.changePasswordForm.controls['oldPass'].setErrors({
                invalidOldPass: true
            });
            console.log("Password not changed");
        } else {
            console.log("Password succesfully changed");
        }
        
    }
}