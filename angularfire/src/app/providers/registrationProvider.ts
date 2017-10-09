import { User } from '../users/user.class';
import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs/Observable';

/**
 * An injection token for the registration provider.
 */
export const REGISTRATION_PROVIDER = new InjectionToken<RegistrationProvider>('registration.provider');

/**
 * A class that gives back the registration result.
 */
export class RegistrationResult {
    constructor(private userId: string) {}
}

/**
 * An interface that provides the ability to register.
 */
export interface RegistrationProvider {
    /**
     * Registers a user to the system.
     */
    registerUser(registrationInformation: { emailAddress: string; password: string; }): Promise<RegistrationResult>;
}
