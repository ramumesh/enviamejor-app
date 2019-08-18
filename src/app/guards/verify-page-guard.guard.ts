import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../services/utils/user.service';

@Injectable({
  providedIn: 'root'
})
export class VerifyPageGuard implements CanActivate {
  constructor(private _router: Router, private userService: UserService) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    if (this.userService.isVerified()) {
      this._router.navigate(['/register']);
      return false;
    }
    if (next.queryParams['refToken']) {
      return true;
    } else {
      // navigate to login page
      this._router.navigate(['/login']);
      // you can save redirect url so after authing we can move them back to the page they requested
      return false;
    }
  }
}
