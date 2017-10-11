import {Component, Inject, OnInit} from '@angular/core';
import {REFEREE_SERVICE, RefereeService} from "../../../../service/types/refereeService";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {Observable} from "rxjs/Observable";
import {AngularFireAuth} from "angularfire2/auth";

@Component({
  selector: 'app-user-referee-details',
  templateUrl: './user-referee-details.component.html',
  styleUrls: ['./user-referee-details.component.css']
})
export class UserRefereeDetailsComponent implements OnInit {
  /**
   * The referee object for the user.
   */
  private $referee: Observable<any>;

  /**
   * The UID of the user we are currently viewing.
   */
  private userId: string;

  /**
   *
   * @param {RefereeService} refereeService The refereeService to use.
   * @param {AngularFireAuth} angularFireAuth The AngularFireAuth instance that controls the users of this application.
   * @param {ActivatedRoute} route The used route to get to this page.
   */
  constructor(@Inject(REFEREE_SERVICE) private refereeService: RefereeService, private route: ActivatedRoute, private angularFireAuth: AngularFireAuth) {
  }

  /**
   * Initializes the class.
   */
  ngOnInit() {
    this.$referee = this.route
      .paramMap
      .switchMap((params: ParamMap) => {
        this.userId = params.get('userId');
        return this.refereeService.getReferee(this.userId);
      });
  }

  /**
   * This will make the user a referee object. It will be empty on initialization.
   */
  makeUserReferee() {
    this.refereeService.createReferee(this.userId, {
      'promotion': {
        'promoter': {
          'userId': this.angularFireAuth.auth.currentUser.uid
        },
        'timestamp': new Date(),
      }
    });
  }

  demoteFromReferee() {
    this.refereeService.removeReferee(this.userId);
  }
}
