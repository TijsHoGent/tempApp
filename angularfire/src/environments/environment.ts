// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

import {Routes} from "@angular/router";
import {LoginComponent} from "../app/login/login.component";
import {AppComponent} from "../app/app.component";
import {PageNotFoundComponent} from "../app/pagenotfound/pagenotfound.component";
import {RegistrationComponent} from "../app/registration/registration.component";

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
  { path: '**', component: PageNotFoundComponent }
];
