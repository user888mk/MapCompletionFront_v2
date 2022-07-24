import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {StravaLoginService} from "./strava-login.service";


@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {

  constructor(public router: Router, public loginService: StravaLoginService) {
  }

  canActivate(): boolean {
    if (this.loginService.isUserLoggedIn()) {
      return true;
    } else {
      this.router.navigate(["/loginToStrava"]);
      return false;
    }
  }
}

//
// @Injectable()
// export class AuthGuardService implements CanActivate {
//   constructor(public auth: AuthService, public router: Router) {}
//   canActivate(): boolean {
//     if (!this.auth.isAuthenticated()) {
//       this.router.navigate(['login']);
//       return false;
//     }
//     return true;
//   }
// }
// }
