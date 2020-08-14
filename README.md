# Wso2 Authentication

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.5.

This is a component that aims on smoothen the oAuth authentication flow with WSO2. 

Component's name is: **NgxWso2Authentication**  (Camel Case Naming Standard)

It can be placed on a private repository if need be. Currently it is available for use from  https://www.npmjs.com/package/ngx-wso2-authentication

## Usage

### Environment.ts Structure and settings

 
~~~~

export const environment = {
  production: false,
  wso2: {
    authorizeUri: '', //WSO2 Authorize URL to get the Access Token
    clientId: '', //Client Id taken from WSO2 Store
    redirectUri: '', // Login Route path configured on WSO2 Store
    storageName: '', // Name in which the access token and related information will be store in the Local Storage for further API calls
    clientSecret: '',  //Client Id taken from WSO2 Store
    tokenUri: '',  //WSO2 Token Endpoint (beware that this endpoint must be CORS enabled)
    userDataUri: '', //Endpoint in which NGX-Wso2-Authentication will find more information about the logged user to make authorization in the client or to have further information about the user.
    autoRedirectToOrigin: true // if enabled, all pages guarded by NgxWso2AuthenticationGuard  gain the power of being redirected to after login
  }
};


~~~~


### Access Denied Screen

The route `access-denied` needs to exist on yout angular application, and the component `AccessDeniedComponent` also needs to be referenced by your application on the routes file (```app-routing.module.ts```):

~~~~
...
import { LoginComponent, NgxWso2AuthenticationGuard, AccessDeniedComponent } from 'ngx-wso2-authentication';
...

const routes: Routes = [ 
  { path: '', component: HomeComponent, canActivate: [NgxWso2AuthenticationGuard]  }, 
  { path: 'access-denied', component: AccessDeniedComponent }
];

...

~~~~

### Auto Redirect After Login

From version 0.0.8 and on, if you place an item on Local Storage, named ```redirectPageAfterLogin``` after login is performed it will redirect to the informed page on this storage item and then delete it from the storage. The ways you can use this feature are:

1. On Init of your page, store the page's name on the storage:
 
~~~~

    localStorage.setItem('redirectPageAfterLogin', state.url);

~~~~

2. Implement a guard on your pages, such as the following **EXCEPT FOR THE LOGIN PAGE**

~~~~
  import { Injectable } from '@angular/core';
  import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
  import { Observable } from 'rxjs';

  @Injectable({
    providedIn: 'root'
  })
  export class DefaultGuard implements CanActivate {
    canActivate(
      next: ActivatedRouteSnapshot,
      state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

      localStorage.setItem('redirectPageAfterLogin', state.url);
      return true;
    }
  }

~~~~

* And then use this guard on the pages by the use of the router module:

~~~~


  { path: '', component: HomeComponent , canActivate:[DefaultGuard]},

~~~~

3. Combine the `NgxWso2AuthenticationGuard` with the setting `wso2.autoRedirectToOrigin: true` on your environment file. This will make all the pages guarded by  `NgxWso2AuthenticationGuard` to automatically manage the Local Storage item ```redirectPageAfterLogin```



4. You can also develop your own guard and combine it with the `NgxWso2AuthenticationGuard` to enable this feature to both restricted and non-restricted pages.
~~~~

  { path: 'store', component: StoreComponent, canActivate:[DefaultGuard] },
  { path: 'todomodule' , loadChildren: () => TodoModule, canActivate: [DefaultGuard,NgxWso2AuthenticationGuard] },
  
~~~~


### Import the login component

It is good to import the login component to your application, because it verifies if the authCode came from WSO2 and calls the ```login``` method that will ultimately call the needed WSO2 endpoints.

### Authorization and user info 

#### userDataUri

 You can find user information via `this.authService.user` (`NgxWso2AuthenticationService` must have been imported) if the configuration setting ```wso2.userDataUri``` is filled in with a proper URL, able to receive WSO2's JWT token on the backend.

#### Has Role (ngxHasRole)

The component allows certain visual components to be displayed in case the specified user has the needed roles to see it. It is needed to use single quotes ```'``` around the role name. **And only one role is accepted**, for example:

```
<div [ngxHasRole]="'Admin'" >
   CONTENT
</div>
```

This will work the configuration setting ```wso2.userDataUri``` is filled in with a proper URL, able to receive WSO2's JWT token on the backend.

## Technical Info about the Component

### Building the component

```
ng build NgxWso2Authentication
```

### Live Building for the development phase (similar to ng serve)

```
ng build NgxWso2Authentication --watch
```


### Publishing the component on npmjs repository

1. Change version of the component (via  projects\ngx-wso2-authetication\package.json)
2. build the component for publishing:


```
ng build NgxWso2Authentication 
```

3. go to **ngx-wso2-authentication\dist** folder **(VERY IMPORTANT, otherwise you will publish the source code!!)** 

4. login into your npm account:


```
npm login

... PROVIDE YOUR CREDENTIALS - the token will be stored on your local .npmrc file, possibly on your windows user folder (e.g ```C:\Users\YOURUSERNAME```).
```

5. Publish your component:

```
npm publish
```

3. If you have permission to do so, the new version should be in http://npmjs.com/package/ngx-wso2-authentication



## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
