"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var password_validators_1 = require('./password.validators');
var ChangePasswordFormComponent = (function () {
    function ChangePasswordFormComponent(fb) {
        this.changePasswordForm = fb.group({
            oldPass: ['', forms_1.Validators.required],
            newPass: ['', forms_1.Validators.compose([
                    forms_1.Validators.required,
                    password_validators_1.PasswordValidators.shouldbeAtLeatsFive
                ])],
            newPassRepeated: ['', forms_1.Validators.compose([
                    forms_1.Validators.required,
                ])]
        }, { validator: password_validators_1.PasswordValidators.passwordsShouldMatch });
    }
    ChangePasswordFormComponent.prototype.onChangePassword = function () {
        console.log(this.changePasswordForm.controls['oldPass'].value);
        if (this.changePasswordForm.controls['oldPass'].value !== '1234') {
            this.changePasswordForm.controls['oldPass'].setErrors({
                invalidOldPass: true
            });
            console.log("Password not changed");
        }
        else {
            console.log("Password succesfully changed");
        }
    };
    ChangePasswordFormComponent = __decorate([
        core_1.Component({
            selector: 'changepassword-form',
            templateUrl: './app/changepassword-form.component.html'
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder])
    ], ChangePasswordFormComponent);
    return ChangePasswordFormComponent;
}());
exports.ChangePasswordFormComponent = ChangePasswordFormComponent;
//# sourceMappingURL=changepassword-form.component.js.map