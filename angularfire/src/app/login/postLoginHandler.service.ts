import {Router} from "@angular/router";
import {Injectable, InjectionToken} from "@angular/core";

/**
 * An injection token for the {@link PostLoginHandler}.
 */
export const POST_LOGIN_HANDLER = new InjectionToken<PostLoginHandler>('postlogin.handler');

/**
 * An implementation of {@link PostLoginHandler} to make the post login work.
 */
@Injectable()
export class PostLoginHandlerService implements PostLoginHandler {

  constructor(private router: Router) {
  }

  postLogin(result) {
    //TODO MAKE THIS DO SOMETHING USEFUL
    console.log('Successfully logged in.')
  }

  onException(reason, authProviderName): string {
    if (reason.code === 'auth/operation-not-allowed') {
      return 'Logging in using ' + authProviderName + ' is not available right now.';
    } else {
      return 'An unexpected error occurred.';
    }
  }
}

export interface PostLoginHandler {
  /**
   * @param result The result after logging in.
   */
  postLogin(result);

  /**
   * @param reason The reason the exception was thrown.
   * @param authProviderName The name of the authentication provider used.
   * @returns {string} A message to show why the exception occurred.
   */
  onException(reason, authProviderName): string;
}
