import {Inject, Injectable} from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import {AuthProvider} from 'firebase/auth';
import {LoginService, LoginResult} from './loginService';
import {RegistrationService, RegistrationResult} from './registrationService';
import {Name} from "../users/name.class";
import {AngularFirestore} from "angularfire2/firestore";
import {USER_SERVICE, UserService} from "./userService";

@Injectable()
export class AuthenticationService implements LoginService, RegistrationService {

  constructor(private afAuth: AngularFireAuth, @Inject(USER_SERVICE) private userService: UserService) {
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
      .then(result => new LoginResult(result.uid));
  }

  registerUser(emailAddress: string, password: string, name: Name): Promise<RegistrationResult> {
    return this.afAuth
      .auth
      .createUserWithEmailAndPassword(emailAddress, password)
      .then(result => {
        this.userService.createUser(result.uid, emailAddress, name);
        return new RegistrationResult(result.uid);
      });
  }

  logout() {
    this.afAuth
      .auth
      .signOut();
  }
}
