import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from "@angular/router";
import {AngularFireModule} from 'angularfire2';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {AngularFirestoreModule} from 'angularfire2/firestore';

import {appRoutes, environment} from '../environments/environment';

import {AppComponent} from './app.component';
import {CustomLoginComponent} from './login/customlogin/customlogin.component';

import {LoginComponent} from './login/login.component';
import {POST_LOGIN_HANDLER, PostLoginHandlerService} from "./login/postLoginHandler.service";
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {RegistrationComponent} from './registration/registration.component';
import {AuthenticationService} from './service/authentication.service';
import {DatabaseService} from "./service/databaseService.service";

import {LOGIN_SERVICE} from './service/loginService';
import {REGISTRATION_SERVICE} from './service/registrationService';
import {USER_SERVICE} from "./service/userService";
import {AdminPanelComponent} from "./users/admin/admin-panel/admin-panel.component";
import {UserDetailsComponent} from './users/admin/user-details/user-details.component';

export const firebaseConfig = environment.firebaseConfig;

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    PageNotFoundComponent,
    CustomLoginComponent,
    UserDetailsComponent,
    AdminPanelComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    //Keep this one last
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    {provide: LOGIN_SERVICE, useClass: AuthenticationService},
    {provide: REGISTRATION_SERVICE, useClass: AuthenticationService},
    {provide: POST_LOGIN_HANDLER, useClass: PostLoginHandlerService},
    {provide: USER_SERVICE, useClass: DatabaseService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
