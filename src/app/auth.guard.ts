// import { Injectable } from '@angular/core';
// import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
// import { Observable } from 'rxjs';

// import { LoggedinService } from './logged-in.service';

// @Injectable()
// export class AuthGuard implements CanActivate {
//   constructor(
//     private loggedInService: LoggedinService,
//     private router: Router
//   ) {}

//   public canActivate(next: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot): Observable<boolean> {
//     let url: string = state.url;
//     return this.loggedInService.isLoggedIn$;
//   }

//   public checkLogin(url: string): Observable<boolean> {
//     /* if (this.loggedInService.isLoggedIn) {
//       return true;
//     } else {
//       this.loggedInService.redirectUrl = url;
//       return false;
//     } */
//     return this.loggedInService.isLoggedIn$;
//   }
// }
