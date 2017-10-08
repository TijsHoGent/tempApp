import { Injectable } from '@angular/core';

import { User } from '../users/user.class';
import { AngularFireAuth} from 'angularfire2/auth';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';
import * as firebase from 'firebase/app';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/switchMap';

@Injectable()
export class AuthService {

  user: AngularFirestoreDocument<User>;
  users: AngularFirestoreCollection<User>;
  constructor(private afAuth: AngularFireAuth, private afDatabase: AngularFirestore) {
      
      this.afAuth.authState.subscribe(auth => {
        if(!auth){
          console.log(auth.getIdToken());
        }else if(auth){
          console.log(auth.getIdToken());
        }
      });

  }

  googleLogin(){
    const provider = new firebase.auth.GoogleAuthProvider();
    return this.afAuth.auth.signInWithPopup(provider).then((credential) => {
      this.updateUser(credential.user);
      console.log(credential.user);
    })
  }

  private updateUser(userInfo){
    const userData = new User(userInfo)
    const ref =this.afDatabase.doc('users/' + userInfo.uid);
    ref.valueChanges().subscribe(user => {
      if(user == null){
        ref.set({email: userData.email, roles: userData.roles})
      }else{
        console.log("user already exists hi");
      }
    })
    
  }

  logOut(){
    this.afAuth.auth.signOut();
  }
}
