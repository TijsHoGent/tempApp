import {Component, Inject, OnInit} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {USER_SERVICE, UserService} from "../../../service/userService";

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {
  /**
   * All the users that are currently in the system.
   */
  private users: Observable<any>;

  /**
   * @param {UserService} userService The userService to load the users in the system with.
   */
  constructor(@Inject(USER_SERVICE) private userService: UserService) {
  }

  ngOnInit() {
    this.users = this.userService.getAllUsers();
  }

  /**
   * This will reset the user data from the selected user.
   * Resetting will delete the user file.
   *
   * @param {string} userId The UID of the user to reset.
   */
  resetUserData(userId: string) {
    this.userService
      .removeUser(userId);
  }
}
