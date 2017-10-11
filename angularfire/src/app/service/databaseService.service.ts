import {Injectable} from "@angular/core";
import {AngularFirestore} from "angularfire2/firestore";
import {Observable} from "rxjs/Observable";
import {Name} from "../users/name.class";
import {UserService} from "./types/userService";
import {RefereeService} from "./types/refereeService";
import {AdministratorService} from "./administratorService";
import {GameData, GameService} from "./types/gameService";
import {TeamData, TeamService} from "./types/teamService";
import {CoachService} from "./types/coachService";

/**
 * The directory where the users are saved.
 */
const USERS_DIRECTORY: string = 'users';

/**
 * The directory where the referees are saved.
 */
const REFEREES_DIRECTORY: string = 'referees';

/**
 * The directory where the coaches are saved.
 */
const COACHES_DIRECTORY: string = 'coaches';

/**
 * The directory where the administrators are saved.
 */
const ADMINISTRATOR_DIRECTORY: string = 'administrator';

/**
 * The directory where the games are saved.
 */
const GAMES_DIRECTORY: string = 'games';

/**
 * The directory where the teams are saved.
 */
const TEAMS_DIRECTORY: string = 'teams';

/**
 * A general service that does all tasks that have to do with the database.
 */
@Injectable()
export class DatabaseService implements UserService, RefereeService, AdministratorService, GameService, TeamService, CoachService {
  /**
   * @param {AngularFirestore} database The database to use.
   */
  constructor(private database: AngularFirestore) {
  }

  /**
   * A standard method to create data in a directory.
   *
   * @param {string} directory The directory to get the object from from.
   * @param {string} docId The docId to look for.
   * @param data The data to give with the object.
   */
  private create(directory: string, docId: string, data): Promise<void> {
    return this.database
      .collection(directory)
      .doc(docId)
      .set(data);
  }

  /**
   * A standard method to get all the object in a directory.
   *
   * @param {string} directory The directory to get all the objects from.
   * @returns {Observable<any>} All the objects in the directory.
   */
  private getAll(directory: string): Observable<any> {
    return this.database
      .collection(directory)
      .valueChanges();
  }

  /**
   * A standard method to get a single object from a directory.
   *
   * @param {string} directory The directory to get the object from from.
   * @param {string} docId The docId to look for.
   * @returns {Observable<any>} The document found with that docId.
   */
  private getSingle(directory: string, docId: string): Observable<any> {
    return this.database
      .collection(directory)
      .doc(docId)
      .valueChanges();
  }

  /**
   * A standard method to update a single record in the database.
   *
   * @param {string} directory The directory to get the object from from.
   * @param {string} docId The docId to look for.
   * @param data The data to update.
   */
  private update(directory: string, docId: string, data: any): Promise<void> {
    return this.database
      .collection(directory)
      .doc(docId)
      .update(data);
  }

  /**
   * A standard method to remove a single record from the database.
   *
   * @param {string} directory The directory to get the object from from.
   * @param {string} docId The docId to look for.
   */
  private remove(directory: string, docId: string): Promise<void> {
    return this.database
      .collection(directory)
      .doc(docId)
      .delete();
  }

  /* EVERYTHING USER RELATED */
  createUser(userId: string, emailAddress: string, name: Name): Promise<void> {
    return this.create(USERS_DIRECTORY, userId, {
      userId: userId,
      emailAddress: emailAddress,
      name: {
        firstName: name.firstName,
        lastName: name.lastName
      }
    });
  }

  getAllUsers(): Observable<any> {
    return this.getAll(USERS_DIRECTORY);
  }

  getUser(userId: string): Observable<any> {
    return this.getSingle(USERS_DIRECTORY, userId);
  }

  updateUser(userId: string, data: any): Promise<void> {
    return this.update(USERS_DIRECTORY, userId, data);
  }

  removeUser(userId: string): Promise<void> {
    return this.remove(USERS_DIRECTORY, userId);
  }

  /* EVERYTHING REFEREE RELATED */
  createReferee(userId: string, data?): Promise<void> {
    if (!data)
      data = {};
    data['userId'] = userId;
    return this.create(REFEREES_DIRECTORY, userId, data);
  }

  removeReferee(userId: string): Promise<void> {
    return this.remove(REFEREES_DIRECTORY, userId);
  }

  getReferee(userId: string): Observable<any> {
    return this.getSingle(REFEREES_DIRECTORY, userId);
  }

  /* EVERYTHING COACH RELATED */
  createCoach(userId: string, data?: any): Promise<void> {
    if (!data)
      data = {};
    data['userId'] = userId;
    return this.create(COACHES_DIRECTORY, userId, data);
  }

  removeCoach(userId: string): Promise<void> {
    return this.remove(COACHES_DIRECTORY, userId);
  }

  getCoach(userId: string): Observable<any> {
    return this.getSingle(COACHES_DIRECTORY, userId);
  }

  getAllCoaches(): Observable<any> {
    return this.getAll(COACHES_DIRECTORY);
  }

  /* EVERYTHING ADMINISTRATOR RELATED */
  createAdministrator(userId: string, data?): Promise<void> {
    if (!data)
      data = {};
    data['userId'] = userId;
    return this.create(ADMINISTRATOR_DIRECTORY, userId, data);
  }

  removeAdministrator(userId: string): Promise<void> {
    return this.remove(ADMINISTRATOR_DIRECTORY, userId);
  }

  getAdministrator(userId: string): Observable<any> {
    return this.getSingle(ADMINISTRATOR_DIRECTORY, userId);
  }

  /* EVERYTHING GAME RELATED */
  createGame(data?): Promise<GameData> {
    if (!data)
      data = {};
    return this.database
      .collection(GAMES_DIRECTORY)
      .add(data)
      .then(value => new GameData(value.id));
  }

  getAllGames(): Observable<any> {
    return this.getAll(GAMES_DIRECTORY);
  }

  removeGame(gameId: string): Promise<void> {
    return this.remove(GAMES_DIRECTORY, gameId);
  }

  getGame(gameId: string): Observable<any> {
    return this.getSingle(GAMES_DIRECTORY, gameId);
  }

  /* EVERYTHING TEAM RELATED */
  createTeam(data?: any): Promise<TeamData> {
    if (!data)
      data = {};
    return this.database
      .collection(TEAMS_DIRECTORY)
      .add(data)
      .then(value => new TeamData(value.id));
  }

  removeTeam(teamId: string): Promise<void> {
    return this.remove(TEAMS_DIRECTORY, teamId);
  }

  getAllTeams(): Observable<any> {
    return this.getAll(TEAMS_DIRECTORY);
  }

  getTeam(teamId: string): Observable<any> {
    return this.getSingle(TEAMS_DIRECTORY, teamId);
  }
}
