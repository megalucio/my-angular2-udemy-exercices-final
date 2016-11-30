import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { PasswordValidators } from './password.validators';

@Component({
    selector: 'changepassword-form',
    templateUrl: './app/changepassword-form.component.html'
})
export class ChangePasswordFormComponent {

    form: FormGroup;

    constructor(fb: FormBuilder) {
        this.form = fb.group({
            oldPass: ['', Validators.required],
            newPass: ['', Validators.compose([
                Validators.required,
                PasswordValidators.complexPassword
            ])],
            newPassRepeated: ['', Validators.required]
        }, { validator: PasswordValidators.passwordsShouldMatch });
    }

    onChangePassword() {

        var oldPassword = this.form.controls['oldPass'];
        if (oldPassword.value != '1234') 
            oldPassword.setErrors({ validOldPassword: true });

        if (this.form.valid)
            alert("Password successfully changed.");

    }
}