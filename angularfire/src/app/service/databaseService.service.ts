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

  /* EVERYTHING COACH RELATED */
  createCoach(userId: string, data?: any): Promise<void> {
    if(!data)
      data = {};
    data['userId'] = userId;
    return this.database
      .collection(COACHES_DIRECTORY)
      .doc(userId)
      .set(data);
  }

  removeCoach(userId: string): Promise<void> {
    return this.database
      .collection(COACHES_DIRECTORY)
      .doc(userId)
      .delete();
  }

  getCoach(userId: string): Observable<any> {
    return this.database
      .collection(COACHES_DIRECTORY)
      .doc(userId)
      .valueChanges();
  }

  getAllCoaches(): Observable<any> {
    return this.database
      .collection(COACHES_DIRECTORY)
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

  /* EVERYTHING MATCH RELATED */
  createGame(data?): Promise<GameData> {
    if(!data)
      data = {};
    return this.database
      .collection(GAMES_DIRECTORY)
      .add(data)
      .then(value => new GameData(value.id));
  }

  getAllGames(): Observable<any> {
    return this.database
      .collection(GAMES_DIRECTORY)
      .valueChanges();
  }

  removeGame(gameId: string): Promise<void> {
    return this.database
      .collection(GAMES_DIRECTORY)
      .doc(gameId)
      .delete();
  }

  getGame(gameId: string): Observable<any> {
    return this.database
      .collection(GAMES_DIRECTORY)
      .doc(gameId)
      .valueChanges();
  }

  /* EVERYTHING TEAM RELATED */
  createTeam(data?: any): Promise<TeamData> {
    if(!data)
      data = {};
    return this.database
      .collection(TEAMS_DIRECTORY)
      .add(data)
      .then(value => new TeamData(value.id));
  }

  removeTeam(teamId: string): Promise<void> {
    throw new Error("Method not implemented.");
  }

  getAllTeams(): Observable<any> {
    throw new Error("Method not implemented.");
  }

  getTeam(teamId: string): Observable<any> {
    return this.database
      .collection(TEAMS_DIRECTORY)
      .doc(teamId)
      .valueChanges();
  }
}
