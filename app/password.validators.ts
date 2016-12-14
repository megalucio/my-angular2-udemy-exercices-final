import { FormControl, FormGroup } from '@angular/forms';

export class PasswordValidators {
    
    static complexPassword(control: FormControl) {

        const minLength = 5;
         
        if (control.value == '')
            return null; 
     
        if (control.value.length < minLength)
           
            return { 
                complexPassword: {
                    minLength: minLength
                } 
            };
            
        return null;

    }

     static passwordsShouldMatch(form: FormGroup) {

        var newPassword = form.controls['newPass'].value;
        var confirmPassword = form.controls['newPassRepeated'].value;

        if (newPassword == '' || confirmPassword == '')
            return null;
        
        if (newPassword != confirmPassword)
            return { passwordsShouldMatch: true };
            
        return null;

    }
}