import {Injectable} from "@angular/core";
import {AngularFirestore} from "angularfire2/firestore";
import {Observable} from "rxjs/Observable";
import {Name} from "../users/name.class";
import {UserService} from "./userService";
import {RefereeService} from "./refereeService";
import {AdministratorService} from "./administratorService";

/**
 * The directory where the users are saved.
 */
const USERS_DIRECTORY: string = 'users';

/**
 * The directory where the referees are saved.
 */
const REFEREES_DIRECTORY: string = 'referees';

/**
 * The directory where the administrators are saved.
 */
const ADMINISTRATOR_DIRECTORY: string = 'administator';

/**
 * A general service that does all tasks that have to do with the database.
 */
@Injectable()
export class DatabaseService implements UserService, RefereeService, AdministratorService {
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

  /* EVERYTHING USER RELATED */
  getAllUsers(): Observable<any> {
    return this.database
      .collection(USERS_DIRECTORY)
      .valueChanges();
  }

  getUser(userId: string): Observable<any> {
    return this.database
      .collection(USERS_DIRECTORY)
      .doc(userId)
      .valueChanges();
  }

  updateUser(userId: string, data: any): Promise<void> {
    return this.database
      .collection(USERS_DIRECTORY)
      .doc(userId)
      .update(data);
  }

  removeUser(userId: string): Promise<void> {
    return this.database
      .collection(USERS_DIRECTORY)
      .doc(userId)
      .delete();
  }

  /* EVERYTHING REFEREE RELATED */
  createReferee(userId: string, data?): Promise<void> {
    if(!data)
      data = {};
    data['userId'] = userId;
    return this.database
      .collection(REFEREES_DIRECTORY)
      .doc(userId)
      .set(data);
  }

  removeReferee(userId: string): Promise<void> {
    return this.database
      .collection(REFEREES_DIRECTORY)
      .doc(userId)
      .delete();
  }

  getReferee(userId: string): Observable<any> {
    return this.database
      .collection(REFEREES_DIRECTORY)
      .doc(userId)
      .valueChanges();
  }

  /* EVERYTHING ADMINISTRATOR RELATED */
  createAdministrator(userId: string, data?): Promise<void> {
    if(!data)
      data = {};
    data['userId'] = userId;
    return this.database
      .collection(ADMINISTRATOR_DIRECTORY)
      .doc(userId)
      .set(data);
  }

  removeAdministrator(userId: string): Promise<void> {
    return this.database
      .collection(ADMINISTRATOR_DIRECTORY)
      .doc(userId)
      .delete();
  }

  getAdministrator(userId: string): Observable<any> {
    return this.database
      .collection(ADMINISTRATOR_DIRECTORY)
      .doc(userId)
      .valueChanges();
  }
}
