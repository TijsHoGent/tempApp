import {InjectionToken} from "@angular/core";
import {Observable} from "rxjs/Observable";

/**
 * An injection token for the {@link GameService}.
 */
export const GAMES_SERVICE = new InjectionToken<GameService>('game.service');

/**
 * All services to do with the games.
 */
export interface GameService {
  /**
   * Creates the game in the database.
   *
   * @param data The data to fill in into the object.
   */
  createGame(data?): Promise<GameData>;

  /**
   * Removes the match object.
   *
   * @param {string} gameId The gameId to look for when removing.
   */
  removeGame(gameId: string): Promise<void>;

  /**
   * Get all games.
   *
   * @returns {Observable<any>} An observable object that contains all games in the database.
   */
  getAllGames(): Observable<any>

  /**
   * @param {string} gameId The UID of the game to look for.
   * @returns {Observable<any>} The object containing the information about the referee.
   */
  getGame(gameId: string): Observable<any>
}

/**
 * The result from creating the game.
 */
export class GameData {
  /**
   * @param {string} gameId The gameId for the created game.
   */
  constructor(public gameId: string) {}
}
