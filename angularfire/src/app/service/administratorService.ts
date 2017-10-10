import {InjectionToken} from "@angular/core";
import {Observable} from "rxjs/Observable";

/**
 * An injection token for the {@link AdministratorService}.
 */
export const ADMINISTRATOR_SERVICE = new InjectionToken<AdministratorService>('administrator.service');

/**
 * All services to do with the user.
 */
export interface AdministratorService {
  /**
   * Creates the administrator in the database. If the user is in this table
   * then he has access to the admin panel.
   *
   * @param data The data to fill in into the object.
   * @param {string} userId The UID of the user.
   */
  createAdministrator(userId: string, data?): Promise<void>;

  /**
   * Removes the administrator object.
   *
   * @param {string} userId The userId to look for when removing.
   */
  removeAdministrator(userId: string): Promise<void>;

  /**
   * @param {string} userId The UID to look for.
   * @returns {Observable<any>} The object containing the information about the administrator.
   */
  getAdministrator(userId: string): Observable<any>
}
