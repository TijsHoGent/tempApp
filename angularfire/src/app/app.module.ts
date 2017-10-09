import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {AngularFireModule} from 'angularfire2';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {AngularFirestoreModule} from 'angularfire2/firestore';

import {appRoutes, environment} from '../environments/environment';

import {AppComponent} from './app.component';
import {AuthenticationService} from './auth/authentication.service';

import {LoginComponent} from './login/login.component';

import {LOGIN_PROVIDER} from './providers/loginProvider';
import {REGISTRATION_PROVIDER} from './providers/registrationProvider';
import {RegistrationComponent} from './registration/registration.component';
import {PageNotFoundComponent} from './pagenotfound/pagenotfound.component';
import {RouterModule} from "@angular/router";
import {CustomLoginComponent} from './login/customlogin/customlogin.component';
import {POST_LOGIN_HANDLER, PostLoginHandlerService} from "./login/postLoginHandler.service";

export const firebaseConfig = environment.firebaseConfig;

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    PageNotFoundComponent,
    CustomLoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      /*{ enableTracing: true }*/), //Debugging only
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule
  ],
  providers: [
    {provide: LOGIN_PROVIDER, useClass: AuthenticationService},
    {provide: REGISTRATION_PROVIDER, useClass: AuthenticationService},
    {provide: POST_LOGIN_HANDLER, useClass: PostLoginHandlerService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
