import {Component, Inject, Input, OnInit} from '@angular/core';
import {USER_SERVICE, UserService} from "../service/types/userService";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-user-name',
  template: `<div *ngIf="$user | async as user">{{ user.name.firstName }} {{ user.name.lastName }}</div>`
})
export class UserNameComponent implements OnInit {
  /**
   * The requested user.
   */
  private $user: Observable<any>;

  /**
   * The ID of the user.
   */
  @Input()
  private userId;

  /**
   * @param {UserService} userService The userService to load the users in the system with.
   */
  constructor(@Inject(USER_SERVICE) private userService: UserService) {
  }

  /**
   * Loads the given user.
   */
  ngOnInit() {
    this.$user = this.userService.getUser(this.userId);
  }
}
