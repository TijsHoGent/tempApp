import {Component, Inject, Input} from "@angular/core";
import {USER_SERVICE, UserService} from "../service/types/userService";

@Component({
  selector: 'app-user-cross-reference',
  template: `<app-cross-reference [displayQuery]="displayQuery" [searchTerm]="searchTerm" [queryId]="queryId"></app-cross-reference>`
})
export class UserCrossReferenceComponent {
  /**
   * The searchTerm to use for cross referencing.
   *
   * @param object The object that gets used to look for.
   */
  private readonly searchTerm = object => this.userService.getUser(object);

  /**
   * The displayQuery to display the searchTerm.
   *
   * @param object The object found by the searchTerm.
   */
  private readonly displayQuery = object => object.name.firstName + ' ' + object.name.lastName;

  /**
   * The queryId to use.
   */
  @Input()
  private queryId;

  /**
   *
   * @param {UserService} userService The userService to use.
   */
  constructor(@Inject(USER_SERVICE) private userService: UserService) {
  }
}
