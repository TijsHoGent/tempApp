import {Component, Inject, ViewChild} from '@angular/core';
import {REGISTRATION_SERVICE, RegistrationService} from '../service/types/registrationService';
import {Name} from "../users/name.class";

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})

/**
 * A component purely used for registering the user.
 */
export class RegistrationComponent {
  /**
   * @type {RegistrationForm} The object that is being transformed.
   */
  private model: RegistrationForm = new RegistrationForm();

  /**
   * A link to the form to be able to check validation.
   */
  @ViewChild('signUpForm')
  private form: any;

  /**
   * @param {RegistrationService} registrationProvider The registrationProvider to use when registering the user.
   */
  constructor(@Inject(REGISTRATION_SERVICE) private registrationProvider: RegistrationService) {
  }

  /**
   * Checks whether or not the form is filled in correct and then registers the user.
   */
  register() {
    if (this.form.valid) {
      this.registrationProvider
        .registerUser(this.model.emailAddress, this.model.password, this.model.name)
        .then(value => {
          console.log('Successfully registered')
          //TODO WRITE CODE HERE FOR WHEN USER IS CREATED
        })
        .catch(reason => {
          //TODO WRITE CODE HERE FOR WHEN USER ALREADY EXISTS
        });
    }
  }
}

/**
 * A small helper class that holds form data.
 */
class RegistrationForm {
  /**
   * @param {string} emailAddress The e-mail address for the user.
   * @param {string} password The password for the user.
   * @param name The name of the user.
   */
  constructor(public emailAddress: string = '',
              public password: string = '',
              public name: Name = new Name('', '')) {
  }
}
