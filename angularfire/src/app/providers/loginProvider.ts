import {InjectionToken} from '@angular/core';
import {AuthProvider} from 'firebase/auth';

/**
 * An injection token for the {@link LoginProvider}.
 */
export const LOGIN_PROVIDER = new InjectionToken<LoginProvider>('login.provider');

/**
 * A class that gives back the login result.
 */
export class LoginResult {
  /**
   * @param {string} userId The UID of the user that logged in.
   */
  constructor(public userId: string) {
  }
}

/**
 * An interface that provides the ability to log in.
 */
export interface LoginProvider {
  /**
   * Logs the user in using an external API.
   *
   * @param {AuthProvider} provider The provider to use to log in to.
   * @returns {Promise<LoginResult>} The {@link LoginResult} after logging in.
   */
  loginWithApi(provider: AuthProvider): Promise<LoginResult>;

  /**
   * Logs the user in with a custom login function.
   *
   * @param loginInformation The e-mail address and password of the user.
   * @returns {Promise<LoginResult>} The {@link LoginResult} after logging in.
   */
  customLogin(loginInformation: {
    emailAddress: string;
    password: string;
  }): Promise<LoginResult>;

  /**
   * Logs the user out from the system.
   */
  logout();
}
