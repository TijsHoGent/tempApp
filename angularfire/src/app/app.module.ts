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
import {ADMINISTRATOR_SERVICE} from "./service/types/administratorService";
import {AuthenticationService} from './service/authentication.service';
import {DatabaseService} from "./service/databaseService.service";
import {GAMES_SERVICE} from "./service/types/gameService";

import {LOGIN_SERVICE} from './service/types/loginService';
import {REFEREE_SERVICE} from "./service/types/refereeService";
import {REGISTRATION_SERVICE} from './service/types/registrationService';
import {TEAM_SERVICE} from "./service/types/teamService";
import {USER_SERVICE} from "./service/types/userService";
import {AdminPanelComponent} from "./users/admin-panel/admin-panel.component";
import {GameDetailsComponent} from './users/game-overview/game-details/game-details.component';
import {EditUserDetailsComponent} from './users/user-overview/user-details/edit-user-details/edit-user-details.component';
import {UserAdminDetailsComponent} from './users/user-overview/user-details/user-admin-details/user-admin-details.component';
import {UserDetailsComponent} from './users/user-overview/user-details/user-details.component';
import {UserRefereeDetailsComponent} from './users/user-overview/user-details/user-referee-details/user-referee-details.component';
import {UserOverviewComponent} from './users/user-overview/user-overview.component';
import {COACH_SERVICE} from "./service/types/coachService";
import { UserCoachDetailsComponent } from './users/user-overview/user-details/user-coach-details/user-coach-details.component';
import {CrossReferenceComponent} from "./misc/cross-reference-component";
import {UserCrossReferenceComponent} from "./users/user-cross-reference.component";

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';

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
    UserAdminDetailsComponent,
    GameDetailsComponent,
    UserOverviewComponent,
    UserCoachDetailsComponent,
    CrossReferenceComponent,
    UserCrossReferenceComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    //Keep this one last
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    {provide: LOGIN_SERVICE, useClass: AuthenticationService},
    {provide: REGISTRATION_SERVICE, useClass: AuthenticationService},
    {provide: POST_LOGIN_HANDLER, useClass: PostLoginHandlerService},
    {provide: USER_SERVICE, useClass: DatabaseService},
    {provide: REFEREE_SERVICE, useClass: DatabaseService},
    {provide: ADMINISTRATOR_SERVICE, useClass: DatabaseService},
    {provide: GAMES_SERVICE, useClass: DatabaseService},
    {provide: TEAM_SERVICE, useClass: DatabaseService},
    {provide: COACH_SERVICE, useClass: DatabaseService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
