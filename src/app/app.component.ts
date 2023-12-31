import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomValidators } from './custom-validators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'forms-reactive-task';
  signupForm: FormGroup;

  ngOnInit(): void {
     this.signupForm = new FormGroup({
        'projectName': new FormControl(null, [Validators.required, CustomValidators.invalidProjectName],  CustomValidators.asyncInvalidProjectName),
        'email': new FormControl(null, [Validators.required, Validators.email]),
        'status': new FormControl('Critical')
     });
     console.log(this.signupForm);
  }

  onSubmit(){
    console.log(this.signupForm.value);
  }

}
