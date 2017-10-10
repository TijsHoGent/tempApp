import {InjectionToken} from "@angular/core";
import {Observable} from "rxjs/Observable";

/**
 * An injection token for the {@link RefereeService}.
 */
export const REFEREE_SERVICE = new InjectionToken<RefereeService>('referee.service');

/**
 * All services to do with the user.
 */
export interface RefereeService {
  /**
   * Creates the referee in the database. If the user is in this table
   * then he has access to the referee panel.
   *
   * @param data The data to fill in into the object.
   * @param {string} userId The UID of the user.
   */
  createReferee(userId: string, data?): Promise<void>;

  /**
   * Removes the referee object.
   *
   * @param {string} userId The userId to look for when removing.
   */
  removeReferee(userId: string): Promise<void>;

  /**
   * @param {string} userId The UID to look for.
   * @returns {Observable<any>} The object containing the information about the referee.
   */
  getReferee(userId: string): Observable<any>
}
