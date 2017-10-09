import { Component, OnInit, HostBinding, Inject } from '@angular/core';
import { LoginProvider, LOGIN_PROVIDER } from '../providers/loginProvider';
import { GoogleAuthProvider } from 'firebase/auth';

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
