import { AbstractControl, ValidationErrors } from "@angular/forms";

export class UniqueValidation {

    static CheckEmail(control: AbstractControl): Promise<ValidationErrors> | null {

        return new Promise((resolve, reject) => {

            setTimeout(() => {
                if (control.value == "amr@yahoo.com") {
                    resolve({ ShouldUnique: true });
                }
                else {
                    resolve(null);
                }
            }, 2000);




        })




    }
}