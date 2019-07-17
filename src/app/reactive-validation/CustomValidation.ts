import { AbstractControl, ValidationErrors } from "@angular/forms";


export class CustomValidation {

    static noSpace(control: AbstractControl): ValidationErrors | null {
        if ((control.value as string).indexOf(' ') != -1)
            return { 'noSpaceAllowed': true }
        else
            return null;
    }


    
}



