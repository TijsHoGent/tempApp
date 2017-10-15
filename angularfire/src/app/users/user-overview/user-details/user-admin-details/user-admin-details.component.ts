import {Component, Inject, OnInit} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {ADMINISTRATOR_SERVICE, AdministratorService} from "../../../../service/types/administratorService";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {AngularFireAuth} from "angularfire2/auth";
import {USER_SERVICE, UserService} from "../../../../service/types/userService";
import {UserCrossReferenceComponent} from "../../../user-cross-reference.component";

@Component({
  selector: 'app-user-admin-details',
  templateUrl: './user-admin-details.component.html',
  styleUrls: ['./user-admin-details.component.css']
})
export class UserAdminDetailsComponent implements OnInit {
  /**
   * The admin object for the user.
   */
  private $admin: Observable<any>;

  /**
   * The UID of the user we are currently viewing.
   */
  private userId: string;

  /**
   * @param {AdministratorService} administratorService The administratorService to use.
   * @param {AngularFireAuth} angularFireAuth The AngularFireAuth instance that controls the users of this application.
   * @param {ActivatedRoute} route The used route to get to this page.
   */
  constructor(@Inject(ADMINISTRATOR_SERVICE) private administratorService: AdministratorService, private route: ActivatedRoute, private angularFireAuth: AngularFireAuth) {
  }

  /**
   * Initializes the class.
   */
  ngOnInit() {
    this.$admin = this.route
      .paramMap
      .switchMap((params: ParamMap) => {
        this.userId = params.get('userId');
        return this.administratorService.getAdministrator(this.userId);
      });
  }

  /**
   * This will make the user a administrator object. It will be empty on initialization.
   */
  makeUserAdministrator() {
    this.administratorService.createAdministrator(this.userId, {
      'promotion': {
        'promoter': {
          'userId': this.angularFireAuth.auth.currentUser.uid
        },
        'timestamp': new Date(),
      }
    });
  }

  demoteFromAdministrator() {
    this.administratorService.removeAdministrator(this.userId);
  }
}
