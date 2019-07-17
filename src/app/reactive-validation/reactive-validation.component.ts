import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import { CustomValidation } from './CustomValidation';
import { UniqueValidation } from './CustomValidationAsync';

@Component({
  selector: 'ReactiveValidation',
  templateUrl: './reactive-validation.component.html',
  styleUrls: ['./reactive-validation.component.css']
})
export class ReactiveValidationComponent {

  form = new FormGroup({
    email : new FormControl('',[Validators.required,Validators.maxLength(20), CustomValidators.email],UniqueValidation.CheckEmail),
        password : new FormControl('',[CustomValidators.min(5),CustomValidators.equal('54321'),CustomValidation.noSpace ])
  })
  submit(form){
    console.log(form.value)
  }
 get email()  {
  return this.form.get('email');
}
get password()  {
  return this.form.get('password');
}

}
