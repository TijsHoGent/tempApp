import { NgModule } from '@angular/core';

import {AngularFireAuthModule} from 'angularfire2/auth';
import { AuthService } from './auth.service';
@NgModule({
    providers: [AuthService],
    imports: [
        AngularFireAuthModule,
    ]
})

export class CoreModule {

}
