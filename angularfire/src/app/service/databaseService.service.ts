import {Injectable} from "@angular/core";
import {AngularFirestore} from "angularfire2/firestore";
import {Observable} from "rxjs/Observable";
import {Name} from "../users/name.class";
import {UserService} from "./userService";

/**
 * The directory where the users are saved.
 */
const USERS_DIRECTORY: string = 'users';

/**
 * A general service that does all tasks that have to do with the database.
 */
@Injectable()
export class DatabaseService implements UserService {

  /**
   * @param {AngularFirestore} database The database to use.
   */
  constructor(private database: AngularFirestore) {}

  createUser(userId: string, emailAddress: string, name: Name): Promise<void> {
    return this.database
      .collection(USERS_DIRECTORY)
      .doc(userId)
      .set({
        userId: userId,
        emailAddress: emailAddress,
        name: {
          firstName: name.firstName,
          lastName: name.lastName
        }
      });
  }

  getAllUsers(): Observable<any> {
    return this.database
      .collection(USERS_DIRECTORY)
      .valueChanges();
  }

  getUsers(userId: string): Observable<any> {
    return this.database
      .collection(USERS_DIRECTORY)
      .doc(userId)
      .valueChanges();
  }

  removeUser(userId: string): Promise<void> {
    return this.database
      .collection(USERS_DIRECTORY)
      .doc(userId)
      .delete();
  }
}
