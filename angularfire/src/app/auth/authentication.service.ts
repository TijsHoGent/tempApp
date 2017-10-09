import { Injectable } from '@angular/core';
import { LoginProvider, LoginResult } from '../providers/loginProvider';
import { RegistrationProvider, RegistrationResult } from '../providers/registrationProvider';
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthProvider } from 'firebase/auth';

@Injectable()
export class AuthenticationService implements LoginProvider, RegistrationProvider {

  constructor(private afAuth: AngularFireAuth) {
  }

  loginWithApi(provider: AuthProvider): Promise<LoginResult> {
    return this.afAuth
      .auth
      .signInWithPopup(provider)
      .then(result => new LoginResult(result.user.uid));
  }

  customLogin(loginInformation: { emailAddress: string; password: string; }): Promise<LoginResult> {
    return this.afAuth
      .auth
      .signInWithEmailAndPassword(loginInformation.emailAddress, loginInformation.password)
      .then(result => new LoginResult(result.user.uid));
  }

  registerUser(registrationInformation: { emailAddress: string; password: string; }): Promise<RegistrationResult> {
    return this.afAuth
      .auth
      .createUserWithEmailAndPassword(registrationInformation.emailAddress, registrationInformation.password)
      .then(result => new RegistrationResult(result.user.uid));
  }

  logout() {
    this.afAuth
      .auth
      .signOut();
  }
}
