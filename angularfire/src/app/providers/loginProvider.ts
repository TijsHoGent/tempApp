import { User } from '../users/user.class';
import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AuthProvider } from 'firebase/auth';

/**
 * An injection token for the login provider.
 */
export const LOGIN_PROVIDER = new InjectionToken<LoginProvider>('login.provider');

/**
 * A class that gives back the login result.
 */
export class LoginResult {
    constructor(private userId: string) {}
}

/**
 * An interface that provides the ability to log in.
 */
export interface LoginProvider {
    /**
     * Opens the given API to log the user in.
     */
    loginWithApi(provider: AuthProvider): Promise<LoginResult>;

    /**
     * Uses the custom login system.
     */
    customLogin(loginInformation: {
        emailAddress: string;
        password: string;
    }): Promise<LoginResult>;

    /**
     * Logs the user out of the system.
     */
    logout();
}
