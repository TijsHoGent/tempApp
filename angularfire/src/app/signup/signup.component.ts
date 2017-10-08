import { Component, OnInit, Inject } from '@angular/core';
import { RegistrationProvider, REGISTRATION_PROVIDER } from '../auth/registrationProvider.interface';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent {
/*
  constructor(@Inject(REGISTRATION_PROVIDER) private registrationProvider: RegistrationProvider) {
  }

  onSubmit(formData) {
    if (formData.valid) {
      this.registrationProvider.registerUser({
        uid: formData.uid
      });
    }
  }*/
}
