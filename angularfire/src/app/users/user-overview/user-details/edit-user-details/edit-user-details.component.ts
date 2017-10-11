import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {USER_SERVICE, UserService} from "../../../../service/types/userService";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-edit-user-details',
  templateUrl: './edit-user-details.component.html',
  styleUrls: ['./edit-user-details.component.css']
})
export class EditUserDetailsComponent implements OnInit {
  /**
   * The model used to edit the user.
   */
  private model: EditUserDetailsForm = new EditUserDetailsForm();

  /**
   * A link to the form to be able to check validation.
   */
  @ViewChild('userDetailsForm')
  private form: any;

  /**
   * The userId of the current user.
   */
  private userId: string;

  /**
   * @param {ActivatedRoute} route The route taken to get to this component.
   * @param {UserService} userService The userService to load the users in the system with.
   * @param {Router} router The router to use to route to other pages.
   */
  constructor(@Inject(USER_SERVICE) private userService: UserService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.route
      .paramMap
      .switchMap((params: ParamMap) => {
        this.userId = params.get('userId');
        return this.userService.getUser(this.userId);
      })
      .subscribe(user => {
        //This will make the fields update if they haven't been touched yet. If they have been touched then
        //we'll keep the state we filled in.
        if (this.form.controls.emailAddress.untouched) {
          this.model.emailAddress = user.emailAddress;
        }
        if (this.form.controls.firstName.untouched) {
          this.model.firstName = user.name.firstName;
        }
        if (this.form.controls.lastName.untouched) {
          this.model.lastName = user.name.lastName;
        }
      });
  }

  saveChanges() {
    if (this.form.valid) {
      this.userService
        .updateUser(this.userId, {
          emailAddress: this.model.emailAddress,
          name: {
            firstName: this.model.firstName,
            lastName: this.model.lastName
          }
        })
        .then(() => {
        this.router.navigateByUrl('/admin/user/' + this.userId);
        });
    }
  }
}

class EditUserDetailsForm {
  constructor(public emailAddress: string = '',
              public firstName: string = '',
              public lastName: string = '') {
  }
}
