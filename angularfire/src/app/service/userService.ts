import {Name} from "../users/name.class";
import {InjectionToken} from "@angular/core";
import {Observable} from "rxjs/Observable";

/**
 * An injection token for the {@link UserService}.
 */
export const USER_SERVICE = new InjectionToken<UserService>('user.service');

/**
 * All services to do with the user.
 */
export interface UserService {
  /**
   * Creates the user in the database. This will also overwrite the user if it already exists.
   *
   * @param {string} userId The UID of the user.
   * @param {string} emailAddress The e-mail address of the user.
   * @param {Name} name The name of the user.
   */
  createUser(userId: string, emailAddress: string, name: Name): Promise<void>;

  /**
   * Get all the users currently in the database.
   *
   * @returns {Observable<any>} All the users currently in the database.
   */
  getAllUsers(): Observable<any>;

  /**
   * Get the requested user from the database.
   *
   * @param {string} userId The UID of the user to look for.
   * @returns {Observable<any>} The found user.
   */
  getUser(userId: string): Observable<any>;

  /**
   * @param {string} userId The UID of the user to update.
   * @param data The update to do on that user.
   */
  updateUser(userId: string, data): Promise<void>;

  /**
   * Remove the given user from the database.
   *
   * @param {string} userId The userId of the user to remove.
   */
  removeUser(userId: string): Promise<void>;
}
