import {Component, Inject, OnInit} from '@angular/core';
import {ViewChild} from '@angular/core';
import {REGISTRATION_PROVIDER, RegistrationProvider} from '../providers/registrationProvider';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignUpComponent implements OnInit {
  private model: SignUpForm = new SignUpForm();
  @ViewChild('signUpForm')
  private form: any;

  constructor(@Inject(REGISTRATION_PROVIDER) private registrationProvider: RegistrationProvider) {
  }

  ngOnInit() {
  }

  onSubmit() {
    if (this.form.valid) {
      this.registrationProvider
        .registerUser(this.model)
        .then(value => {
          //TODO WRITE CODE HERE FOR WHEN USER IS CREATED
        })
        .catch(reason => {
          //TODO WRITE CODE HERE FOR WHEN USER ALREADY EXISTS
        });
    }
  }
}

export class SignUpForm {
  constructor(public emailAddress: string = '',
              public password: string = '') {
  }
}
