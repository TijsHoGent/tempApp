import {InjectionToken} from "@angular/core";
import {Observable} from "rxjs/Observable";

/**
 * An injection token for the {@link TeamService}.
 */
export const TEAM_SERVICE = new InjectionToken<TeamService>('team.service');

/**
 * All services to do with the teams.
 */
export interface TeamService {
  /**
   * Creates the team in the database.
   *
   * @param data The data to fill in into the object.
   */
  createTeam(data?): Promise<TeamData>;

  /**
   * Removes the match object.
   *
   * @param {string} teamId The teamId to look for when removing.
   */
  removeTeam(teamId: string): Promise<void>;

  /**
   * Get all games.
   *
   * @returns {Observable<any>} An observable object that contains all games in the database.
   */
  getAllTeams(): Observable<any>

  /**
   * @param {string} teamId The UID of the team to look for.
   * @returns {Observable<any>} The object containing the information about the referee.
   */
  getTeam(teamId: string): Observable<any>
}

/**
 * The data returned when a team is created.
 */
export class TeamData {
  /**
   * @param {string} teamId The UID of the created time.
   */
  constructor(public teamId: string) {}
}
