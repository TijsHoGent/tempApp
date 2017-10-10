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
import {ADMINISTRATOR_SERVICE} from "./service/administratorService";
import {AuthenticationService} from './service/authentication.service';
import {DatabaseService} from "./service/databaseService.service";

import {LOGIN_SERVICE} from './service/loginService';
import {REFEREE_SERVICE} from "./service/refereeService";
import {REGISTRATION_SERVICE} from './service/registrationService';
import {USER_SERVICE} from "./service/userService";
import {AdminPanelComponent} from "./users/admin/admin-panel/admin-panel.component";
import {UserAdminDetailsComponent} from './users/admin/user-admin-details/user-admin-details.component';
import {EditUserDetailsComponent} from './users/admin/user-details/edit-user-details/edit-user-details.component';
import {UserDetailsComponent} from './users/admin/user-details/user-details.component';
import {UserRefereeDetailsComponent} from './users/admin/user-referee-details/user-referee-details.component';

export const firebaseConfig = environment.firebaseConfig;

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    PageNotFoundComponent,
    CustomLoginComponent,
    UserDetailsComponent,
    AdminPanelComponent,
    EditUserDetailsComponent,
    UserRefereeDetailsComponent,
    UserAdminDetailsComponent
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
    {provide: USER_SERVICE, useClass: DatabaseService},
    {provide: REFEREE_SERVICE, useClass: DatabaseService},
    {provide: ADMINISTRATOR_SERVICE, useClass: DatabaseService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
