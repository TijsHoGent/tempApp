import {Component, Inject, OnInit} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {USER_SERVICE, UserService} from "../../../service/userService";
import {ActivatedRoute, ParamMap,} from "@angular/router";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  /**
   * The user to display the information for.
   */
  private $user: Observable<any>;

  /**
   * @param {ActivatedRoute} route The route taken to get to this component.
   * @param {UserService} userService The userService to load the users in the system with.
   */
  constructor(@Inject(USER_SERVICE) private userService: UserService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.$user = this.route
      .paramMap
      .switchMap((params: ParamMap) => this.userService.getUser(params.get('userId')));
  }
}
