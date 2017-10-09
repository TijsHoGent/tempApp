import {Component, Inject} from '@angular/core';
import {GoogleAuthProvider} from 'firebase/auth';
import {LOGIN_PROVIDER, LoginProvider} from '../providers/loginProvider';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  /**
   * The authentication provider for Google.
   */
  private readonly googleApi = new GoogleAuthProvider;

  constructor(@Inject(LOGIN_PROVIDER) private loginProvider: LoginProvider) {
  }

  loginGoogle() {
    this.loginProvider.loginWithApi(this.googleApi).then(result => {
      console.log(result);
    });
  }
}
