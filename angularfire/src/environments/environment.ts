// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebaseConfig : {
    apiKey: "AIzaSyCpC7F9_zUdqMnb7lNnPiWJkAsT8bXknzE",
    authDomain: "projecten-iii.firebaseapp.com",
    databaseURL: "https://projecten-iii.firebaseio.com",
    projectId: "projecten-iii",
    storageBucket: "projecten-iii.appspot.com",
    messagingSenderId: "771850462701"
  }
};
