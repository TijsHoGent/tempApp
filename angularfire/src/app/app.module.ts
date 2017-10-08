import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// firebase config imports
import { environment } from '../environments/environment';
export const firebaseConfig = environment.firebaseConfig;

// firebase imports
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

import { LOGIN_PROVIDER } from './auth/loginProvider.interface';
import { REGISTRATION_PROVIDER } from './auth/registrationProvider.interface';
import { AuthService } from './auth/auth.service';

import { Router } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule
  ],
  providers: [
    { provide: LOGIN_PROVIDER, useClass: AuthService },
    { provide: REGISTRATION_PROVIDER, useClass: AuthService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
