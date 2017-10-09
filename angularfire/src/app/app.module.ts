import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {AngularFireModule} from 'angularfire2';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {AngularFirestoreModule} from 'angularfire2/firestore';

import {environment} from '../environments/environment';

import {AppComponent} from './app.component';
import {AuthenticationService} from './auth/authentication.service';

import {LoginComponent} from './login/login.component';

import {LOGIN_PROVIDER} from './providers/loginProvider';
import {REGISTRATION_PROVIDER} from './providers/registrationProvider';
import {SignUpComponent} from './signup/signup.component';

export const firebaseConfig = environment.firebaseConfig;

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule
  ],
  providers: [
    { provide: LOGIN_PROVIDER, useClass: AuthenticationService },
    { provide: REGISTRATION_PROVIDER, useClass: AuthenticationService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
