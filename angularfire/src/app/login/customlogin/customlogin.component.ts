import {Component, Inject, ViewChild} from '@angular/core';
import {LOGIN_PROVIDER, LoginProvider} from "../../providers/loginProvider";
import {POST_LOGIN_HANDLER, PostLoginHandler} from '../postLoginHandler.service';

@Component({
  selector: 'app-customlogin',
  templateUrl: './customlogin.component.html',
  styleUrls: ['./customlogin.component.css']
})
/**
 * A component to let the user log in with the custom login system.
 */
export class CustomLoginComponent {
  /**
   * @type {LoginForm} The object that is being transformed.
   */
  private model: LoginForm = new LoginForm();

  /**
   * The message to display on the front page to show feedback.
   */
  private message: string;

  /**
   * A link to the form to be able to check validation.
   */
  @ViewChild('loginForm')
  private form: any;

  /**
   * @param {LoginProvider} loginProvider The loginProvider to use to log in with.
   * @param {PostLoginHandler} postLoginHandler The loginHandler that deals with what happens post login and on error.
   */
  constructor(@Inject(LOGIN_PROVIDER) private loginProvider: LoginProvider, @Inject(POST_LOGIN_HANDLER) private postLoginHandler: PostLoginHandler) {
  }

  /**
   * Attempts to log the user in with the given information.
   */
  login() {
    if (this.form.valid) {
      this.loginProvider
        .customLogin(this.model)
        .then(result => this.postLoginHandler.postLogin(result))
        .catch(reason => this.message = this.postLoginHandler.onException(reason, 'this form'));
    }
  }

}

/**
 * A small helper class that holds form data.
 */
export class LoginForm {
  /**
   * @param {string} emailAddress The e-mail address for the user.
   * @param {string} password The password for the user.
   */
  constructor(public emailAddress: string = '',
              public password: string = '') {
  }
}
