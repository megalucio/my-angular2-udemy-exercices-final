import { FormControl, FormGroup } from '@angular/forms';

export class PasswordValidators {
    
    static shouldbeAtLeatsFive(control: FormControl) {

        if (control.value.length < 5)
            return { shouldbeAtLeatsFive: true };
        
        return null;

    }

     static passwordsShouldMatch(form: FormGroup) {

        if (form.controls['newPass'] !== form.controls['newPassrepeated'])
            return { passwordsShouldMatch: true };
        
        return null;

    }
}