import { User } from '../users/user.class';
import { InjectionToken } from '@angular/core';

/**
 * An injection token for the user provider.
 */
export const USER_PROVIDER = new InjectionToken<UserProvider>('registration.provider');

/**
 * An interface that provides the ability to load the user.
 */
export interface UserProvider {
    /**
     * Loads the user from the system.
     */
    loadUser(uid: string): Promise<User>;
}
