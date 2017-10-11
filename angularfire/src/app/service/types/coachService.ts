import {InjectionToken} from "@angular/core";
import {Observable} from "rxjs/Observable";

/**
 * An injection token for the {@link CoachService}.
 */
export const COACH_SERVICE = new InjectionToken<CoachService>('coach.service');

/**
 * All services to do with the user.
 */
export interface CoachService {
  /**
   * Creates the coach in the database.
   *
   * @param data The data to fill in into the object.
   * @param {string} userId The UID of the user.
   */
  createCoach(userId: string, data?): Promise<void>;

  /**
   * Removes the coach object.
   *
   * @param {string} userId The userId to look for when removing.
   */
  removeCoach(userId: string): Promise<void>;

  /**
   * @param {string} userId The UID to look for.
   * @returns {Observable<any>} The object containing the information about the coach.
   */
  getCoach(userId: string): Observable<any>;

  /**
   * @returns {Observable<any>} The object containing all the coaches.
   */
  getAllCoaches(): Observable<any>;
}
