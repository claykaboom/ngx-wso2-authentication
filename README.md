# Wso2 Authentication

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.5.

This is a component that aims on smoothen the oAuth authentication flow with WSO2. 

Component's name is: **NgxWso2Authentication**  (Camel Case Naming Standard)

It can be placed on a private repository if need be. Currently it is available for use from  https://www.npmjs.com/package/ngx-wso2-authentication

## Usage

### Access Denied Screen

The route `access-denied` needs to exist on yout angular application, and the component `AccessDeniedComponent` also needs to be referenced by your application on the routes file (```app-routing.module.ts```):

```
...
import { LoginComponent, NgxWso2AuthenticationGuard, AccessDeniedComponent } from 'ngx-wso2-authentication';
...

const routes: Routes = [ 
  { path: '', component: HomeComponent, canActivate: [NgxWso2AuthenticationGuard]  }, 
  { path: 'access-denied', component: AccessDeniedComponent }
];

...

```

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

* And then use this guard on the pages

3. Combine the `NgxWso2AuthenticationGuard` with the setting `wso2.autoRedirectToOrigin: true` on your environment file. This will make all the pages guarded by  `NgxWso2AuthenticationGuard` to automatically manage the Local Storage item ```redirectPageAfterLogin```

4. You can also develop your own guard and combine it with the `NgxWso2AuthenticationGuard` to enable this feature to both restricted and non-restricted pages.

### Import the login component

It is good to import the login component to your application, because it verifies if the authCode came from WSO2 and calls the ```login``` method that will ultimately call the needed WSO2 endpoints.

### Has Role (ngxHasRole)

The component allows certain visual components to be displayed in case the specified user has the needed roles to see it. It is needed to use single quotes ```'``` around the role name. **And only one role is accepted**, for example:

```
<div [ngxHasRole]="'Admin'" >
   CONTENT
</div>
```



## Technical Info about the Component

### Building the component

```
ng build NgxWso2Authentication
```

### Live Building for the development phase (similar to ng serve)

```
ng build NgxWso2Authentication --watch
```

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
