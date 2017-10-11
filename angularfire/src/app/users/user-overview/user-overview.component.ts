import {Component, Inject, OnInit} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {USER_SERVICE, UserService} from "../../service/types/userService";

@Component({
  selector: 'app-user-overview',
  templateUrl: './user-overview.component.html',
  styleUrls: ['./user-overview.component.css']
})
export class UserOverviewComponent implements OnInit {
  /**
   * All the users that are currently in the system.
   */
  private users: Observable<any>;

  /**
   * @param {UserService} userService The userService to load the users in the system with.
   */
  constructor(@Inject(USER_SERVICE) private userService: UserService) {
  }

  /**
   * Loads all the users into the list.
   */
  ngOnInit() {
    this.users = this.userService.getAllUsers();
  }
}
