import { Component } from '@angular/core';

import { AuthService} from './auth/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(private afAuth: AuthService){
    
  }

  signInWithGoogle(){
    this.afAuth.googleLogin();
  }

  signOff(){
    this.afAuth.logOut();
  }
}
