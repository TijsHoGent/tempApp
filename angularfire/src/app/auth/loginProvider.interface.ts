import { User } from '../users/user.class';
import { InjectionToken } from '@angular/core';

/**
 * An injection token for the login provider.
 */
export const LOGIN_PROVIDER = new InjectionToken<LoginProvider>('login.provider');

/**
 * An interface that provides the ability to log in.
 */
export interface LoginProvider {
    /**
     * Opens the Google API to log the user in.
     */
    loginGoogle(): Promise<User>;

    /**
     * Opens the Facebook API to log the user in.
     */
    loginFacebook(): Promise<User>;

    /**
     * Uses the custom login system.
     */
    customLogin(loginInformation: {
        emailAddress: string;
        password: string;
    }): Promise<User>;

    /**
     * Logs the user out of the system.
     */
    logout();
}
