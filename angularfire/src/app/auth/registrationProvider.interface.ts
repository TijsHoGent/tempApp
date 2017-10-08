import { User } from '../users/user.class';
import { InjectionToken } from '@angular/core';

/**
 * An injection token for the login provider.
 */
export const REGISTRATION_PROVIDER = new InjectionToken<RegistrationProvider>('registration.provider');

/**
 * An interface that provides the ability to register.
 */
export interface RegistrationProvider {
    /**
     * Registers a user to the system.
     */
    registerUser(registrationInformation: { emailAddress: string; password: string; }): Promise<User>;
}
