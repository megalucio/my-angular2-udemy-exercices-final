"use strict";
var PasswordValidators = (function () {
    function PasswordValidators() {
    }
    PasswordValidators.complexPassword = function (control) {
        var minLength = 5;
        if (control.value == '')
            return null;
        if (control.value.length < minLength)
            return {
                complexPassword: {
                    minLength: minLength
                }
            };
        return null;
    };
    PasswordValidators.passwordsShouldMatch = function (form) {
        var newPassword = form.controls['newPass'].value;
        var confirmPassword = form.controls['newPassRepeated'].value;
        if (newPassword == '' || confirmPassword == '')
            return null;
        if (newPassword != confirmPassword)
            return { passwordsShouldMatch: true };
        return null;
    };
    return PasswordValidators;
}());
exports.PasswordValidators = PasswordValidators;
//# sourceMappingURL=password.validators.js.map