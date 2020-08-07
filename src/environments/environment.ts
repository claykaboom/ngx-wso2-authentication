// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  wso2: {
    authorizeUri: 'https://api.integration.prod.aws.scania.com/oauth2/authorize',
    clientId: 'SR_cQfSewt9wzi2L7Z0Io63NhzMa',
    redirectUri: 'http://localhost:4200/#/login',
    storageName: 'DevCommunity-Universe-Key',
    clientSecret: 'QIP8GLYJ6x3NTW9IdOQxKDjmnsIa',
    tokenUri: 'https://api.integration.prod.aws.scania.com/token/v1',
    userDataUri: 'https://api.integration.prod.aws.scania.com/DevCommunityUniverse/v1/user',
    autoRedirectToOrigin: true
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
