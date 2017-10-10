import {Component, Inject} from '@angular/core';
import {Router} from "@angular/router";
import * as firebase from 'firebase/app';
import {AuthProvider} from 'firebase/auth';
import {LOGIN_SERVICE, LoginService} from '../service/loginService';
import {POST_LOGIN_HANDLER, PostLoginHandler} from './postLoginHandler.service';

/**
 * @type {firebase.auth.GoogleAuthProvider} The authentication provider for Google.
 */
const GOOGLE_API = new firebase.auth.GoogleAuthProvider();

/**
 * @type {firebase.auth.FacebookAuthProvider} The authentication provider for Facebook.
 */
const FACEBOOK_API = new firebase.auth.FacebookAuthProvider();

/**
 * @type {firebase.auth.TwitterAuthProvider} The authentication provider for Twitter.
 */
const TWITTER_API = new firebase.auth.TwitterAuthProvider();

/**
 * @type {firebase.auth.GithubAuthProvider} The authentication provider for Github.
 */
const GITHUB_API = new firebase.auth.GithubAuthProvider();

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
/**
 * A component to let the user log in.
 */
export class LoginComponent {
  /**
   * The message to display on the front page to show feedback.
   */
  private message: string = 'Please log in using any of the following methods.';

  /**
   * @param {LoginService} loginProvider The loginProvider to use when trying to log in a user.
   * @param {PostLoginHandler} postLoginHandler The loginHandler that deals with what happens post login and on error.
   * @param {Router} router The router to use to route to the login page.
   */
  constructor(@Inject(LOGIN_SERVICE) private loginProvider: LoginService, @Inject(POST_LOGIN_HANDLER)private postLoginHandler: PostLoginHandler, private router: Router) {
  }

  /**
   * Open the Google API to attempt to log in.
   */
  loginGoogle() {
    this.loginWithApi(GOOGLE_API);
  }

  /**
   * Open the Facebook API to attempt to log in.
   */
  loginFacebook() {
    this.loginWithApi(FACEBOOK_API);
  }

  /**
   * Open the Twitter API to attempt to log in.
   */
  loginTwitter() {
    this.loginWithApi(TWITTER_API);
  }

  /**
   * Open the Github API to attempt to log in.
   */
  loginGithub() {
    this.loginWithApi(GITHUB_API);
  }

  /**
   * Opens the component to do the custom login.
   */
  customLogin() {
    this.router.navigateByUrl('/login/form');
  }

  /**
   * Attempts to log in with the given API.
   *
   * @param {AuthProvider} authProvider The API to attempt to log in with.
   */
  private loginWithApi(authProvider: AuthProvider) {
    this.loginProvider
      .loginWithApi(authProvider)
      .then(result => this.postLoginHandler.postLogin(result))
      .catch(reason => this.postLoginHandler.onException(reason, authProvider.toString()));
  }
}
