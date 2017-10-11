import {Component, Inject, OnInit} from '@angular/core';
import {COACH_SERVICE, CoachService} from "../../../../service/types/coachService";
import {Observable} from "rxjs/Observable";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {AngularFireAuth} from "angularfire2/auth";

@Component({
  selector: 'app-user-coach-details',
  templateUrl: './user-coach-details.component.html',
  styleUrls: ['./user-coach-details.component.css']
})
export class UserCoachDetailsComponent implements OnInit {
  /**
   * The coach object for the user.
   */
  private $coach: Observable<any>;

  /**
   * The UID of the user we are currently viewing.
   */
  private userId: string;

  /**
   * @param {CoachService} coachService The coachService to use.
   * @param {AngularFireAuth} angularFireAuth The AngularFireAuth instance that controls the users of this application.
   * @param {ActivatedRoute} route The used route to get to this page.
   */
  constructor(@Inject(COACH_SERVICE) private coachService: CoachService, private route: ActivatedRoute, private angularFireAuth: AngularFireAuth) {
  }

  /**
   * Initializes the class.
   */
  ngOnInit() {
    this.$coach = this.route
      .paramMap
      .switchMap((params: ParamMap) => {
        this.userId = params.get('userId');
        return this.coachService.getCoach(this.userId);
      });
  }

  /**
   * This will make the user a administrator object. It will be empty on initialization.
   */
  makeUserCoach() {
    this.coachService.createCoach(this.userId, {
      'promotion': {
        'promoter': {
          'userId': this.angularFireAuth.auth.currentUser.uid
        },
        'timestamp': new Date(),
      }
    });
  }

  demoteFromCoach() {
    this.coachService.removeCoach(this.userId);
  }
}
