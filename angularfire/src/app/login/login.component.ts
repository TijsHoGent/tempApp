import { Component, OnInit, HostBinding, Inject } from '@angular/core';
import { LoginProvider, LOGIN_PROVIDER } from '../providers/loginProvider.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(@Inject(LOGIN_PROVIDER) private loginProvider: LoginProvider) {
  }

  loginGoogle() {
    this.loginProvider.loginGoogle().then(result => {
      console.log(result);
    });
  }
}
