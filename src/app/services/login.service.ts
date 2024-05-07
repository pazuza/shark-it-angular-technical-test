// import { Injectable } from '@angular/core';
// import { Router } from '@angular/router';
// import { BehaviorSubject, Observable } from 'rxjs';

// @Injectable()
// export class LoginService {

//   public isLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
//   public isLoggedIn$: Observable<boolean> = this.isLoggedIn.asObservable();
//   public redirectUrl: string;

//   constructor(private router: Router) { }

//   login(): Observable<boolean> {
//     this.isLoggedIn.next(true);
//     return this.isLoggedIn$;
//   }

//   logout(): Observable<boolean> {
//     this.isLoggedIn.next(false);
//     return this.isLoggedIn$;
//   }

// }
