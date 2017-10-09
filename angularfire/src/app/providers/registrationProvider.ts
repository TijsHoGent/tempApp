import {InjectionToken} from '@angular/core';

/**
 * An injection token for the {@link RegistrationProvider}.
 */
export const REGISTRATION_PROVIDER = new InjectionToken<RegistrationProvider>('registration.provider');

/**
 * A class that gives back the registration result.
 */
export class RegistrationResult {
  /**
   * @param {string} userId The UID of the user that just registered.
   */
  constructor(private userId: string) {
  }
}

/**
 * An interface that provides the ability to register.
 */
export interface RegistrationProvider {
  /**
   * Attempts to register a user to the system.
   *
   * @param registrationInformation The e-mail address and password of the user to register.
   * @returns {Promise<RegistrationResult>} The {@link RegistrationResult} after registering the user.
   */
  registerUser(registrationInformation: { emailAddress: string; password: string; }): Promise<RegistrationResult>;
}
