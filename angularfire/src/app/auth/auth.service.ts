import { Injectable } from '@angular/core';
import { LoginProvider } from './loginProvider.interface';
import { RegistrationProvider } from './registrationProvider.interface';
import { User } from '../users/user.class';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import * as firebase from 'firebase/app';

import { CanActivate, Router } from '@angular/router';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/switchMap';

@Injectable()
export class AuthService implements LoginProvider, RegistrationProvider {

  constructor(private afAuth: AngularFireAuth, private afDatabase: AngularFirestore) {
  }

  loginGoogle(): Promise<User> {
    const provider = new firebase.auth.GoogleAuthProvider();
    return this.afAuth.auth.signInWithPopup(provider).then((credential) => {
      // Temp return a basic user with just a UID
      return {
        uid: credential.user.uid
      };
    });
  }

  loginFacebook(): Promise<User> {
    throw new Error('Method not implemented.');
  }

  customLogin(loginInformation: { emailAddress: string; password: string; }): Promise<User> {
    return this.afAuth
      .auth
      .signInWithEmailAndPassword(loginInformation.emailAddress, loginInformation.password)
      .then(value => {
        return {
          uid: value.UID
        };
      });
  }

  registerUser(registrationInformation: { emailAddress: string; password: string; }): Promise<User> {
    return this.afAuth
      .auth
      .createUserWithEmailAndPassword(registrationInformation.emailAddress, registrationInformation.password)
      .then(value => {
        // Currently we'll just leave it as a simple user with only a UID
        return {
          uid: value.UID
        };
      });
  }

  logout() {
    this.afAuth.auth.signOut();
  }
}
