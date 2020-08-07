import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router } from '@angular/router';
import { Inject, Injectable } from '@angular/core';
import { NgxWso2AuthenticationService , WSO2_CONFIG} from '../service/authentication.service';
import { NgxWso2Config } from '../..';

@Injectable()
export class NgxWso2AuthenticationGuard implements CanActivate {

  constructor(private router: Router, private service: NgxWso2AuthenticationService, @Inject(WSO2_CONFIG) private config: NgxWso2Config) {
  }

  async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
    const expectedRole = route.data.expectedRole;
    if( this.config.autoRedirectToOrigin != null && this.config.autoRedirectToOrigin)
      localStorage.setItem('redirectPageAfterLogin', state.url );
    if (this.service.isLogged) {
      if (expectedRole != null) {
        const hasAccess = await this.service.hasRole(expectedRole);
        if (hasAccess) {
          return true;
        } else {
          this.router.navigate(['access-denied']);
        }
      } else {
        return true;
      }
    } else {
      this.router.navigate(['login']);
    }

    return false;
  }

}
