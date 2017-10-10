import {InjectionToken} from '@angular/core';
import {Name} from "../users/name.class";

/**
 * An injection token for the {@link RegistrationService}.
 */
export const REGISTRATION_SERVICE = new InjectionToken<RegistrationService>('registration.service');

/**
 * A class that gives back the registration result.
 */
export class RegistrationResult {
  /**
   * @param {string} userId The UID of the user.
   */
  constructor(userId: string) {
  }
}

/**
 * An interface that provides the ability to register.
 */
export interface RegistrationService {
  /**
   * Attempts to register a user to the system.
   * @param {string} emailAddress The e-mail address to register the user to.
   * @param {string} password The password that the user wants to use.
   * @param name The first and last name of the user.
   * @returns {Promise<RegistrationResult>} The {@link RegistrationResult} after registering the user.
   */
  registerUser(emailAddress: string,
               password: string,
               name: Name): Promise<RegistrationResult>;
}
