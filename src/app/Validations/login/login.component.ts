import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'loginValidation',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  Log(email) {
    console.log(email)
  }

  submit(form: NgForm) {
    if (form.valid) {
      console.log(form.value);
      // ...our form is valid, we can submit the data
    }
  }
}
