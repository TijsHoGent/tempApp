// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

import {Routes} from "@angular/router";
import {LoginComponent} from "../app/login/login.component";
import {AppComponent} from "../app/app.component";
import {RegistrationComponent} from "../app/registration/registration.component";
import {CustomLoginComponent} from "../app/login/customlogin/customlogin.component";
import {AdminPanelComponent} from "../app/users/admin-panel/admin-panel.component";
import {UserDetailsComponent} from "../app/users/user-overview/user-details/user-details.component";
import {PageNotFoundComponent} from "../app/page-not-found/page-not-found.component";
import {EditUserDetailsComponent} from "../app/users/user-overview/user-details/edit-user-details/edit-user-details.component";

export const environment = {
  production: false,
  firebaseConfig : {
    apiKey: 'AIzaSyCpC7F9_zUdqMnb7lNnPiWJkAsT8bXknzE',
    authDomain: 'projecten-iii.firebaseapp.com',
    databaseURL: 'https://projecten-iii.firebaseio.com',
    projectId: 'projecten-iii',
    storageBucket: 'projecten-iii.appspot.com',
    messagingSenderId: '771850462701'
  }
};

export const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegistrationComponent },
  { path: 'home',      component: AppComponent },
  { path: 'admin',      component: AdminPanelComponent },
  { path: 'admin/user/:userId',      component: UserDetailsComponent },
  { path: 'admin/user/edit/:userId',      component: EditUserDetailsComponent },
  { path: 'login/form',      component: CustomLoginComponent },
  { path: '**', component: PageNotFoundComponent }
];
