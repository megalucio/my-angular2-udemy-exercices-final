"use strict";
var PasswordValidators = (function () {
    function PasswordValidators() {
    }
    PasswordValidators.shouldbeAtLeatsFive = function (control) {
        if (control.value.length < 5)
            return { shouldbeAtLeatsFive: true };
        return null;
    };
    PasswordValidators.passwordsShouldMatch = function (form) {
        if (form.controls['newPass'] !== form.controls['newPassrepeated'])
            return { passwordsShouldMatch: true };
        return null;
    };
    return PasswordValidators;
}());
exports.PasswordValidators = PasswordValidators;
//# sourceMappingURL=password.validators.js.map