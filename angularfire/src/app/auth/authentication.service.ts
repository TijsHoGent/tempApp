import { Injectable, Inject } from '@angular/core';
import { LoginProvider } from '../providers/loginProvider.interface';
import { RegistrationProvider } from '../providers/registrationProvider.interface';
import { USER_PROVIDER, UserProvider } from '../providers/userProvider.interface';
import { User } from '../users/user.class';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable()
export class AuthenticationService implements LoginProvider, RegistrationProvider {

  constructor(
    private afAuth: AngularFireAuth,
    @Inject(USER_PROVIDER) private userProvider: UserProvider) {
  }

  loginGoogle(): Promise<User> {
    const provider = new firebase.auth.GoogleAuthProvider();
    return this.afAuth
      .auth
      .signInWithPopup(provider)
      .then(credential => this.userProvider.loadUser(credential.user.UID));
  }

  loginFacebook(): Promise<User> {
    throw new Error('Method not implemented.');
  }

  customLogin(loginInformation: { emailAddress: string; password: string; }): Promise<User> {
    return this.afAuth
      .auth
      .signInWithEmailAndPassword(loginInformation.emailAddress, loginInformation.password)
      .then(value => this.userProvider.loadUser(value.UID));
  }

  registerUser(registrationInformation: { emailAddress: string; password: string; }): Promise<User> {
    return this.afAuth
      .auth
      .createUserWithEmailAndPassword(registrationInformation.emailAddress, registrationInformation.password)
      .then(value => this.userProvider.loadUser(value.UID));
  }

  logout() {
    this.afAuth
      .auth
      .signOut();
  }
}
