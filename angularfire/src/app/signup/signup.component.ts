import { Component, OnInit, Inject } from '@angular/core';
import { RegistrationProvider, REGISTRATION_PROVIDER } from '../providers/registrationProvider';
import { User } from '../users/user.class';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent {
  langs: string[] = [
    'English',
    'French',
    'German',
  ];

  constructor( @Inject(REGISTRATION_PROVIDER) private registrationProvider: RegistrationProvider) {
  }
}

export class SignUpForm {
  public firstName: string;
  public lastName: string;
}
