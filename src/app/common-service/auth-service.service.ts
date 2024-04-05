import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private router: Router) { }

  isLoggedIn() {
    const token = localStorage.getItem('currentuser_token'); // get token from local storage
    return this.isTokenExpired(token);
  }
  getToken(): string | null {
    // Implement logic to retrieve the token from wherever it is stored (localStorage)
    return localStorage.getItem('currentuser_token');
  }

  isTokenExpired(token: string): boolean {
    if (!token)
      return false;
    let tokenobj = JSON.parse(token);
    let curtime = Date.now(); //current time + 15 minute
    if (curtime < (tokenobj["exp"] * 1000))
      return true;
    else {
      localStorage.removeItem("currentuser_token");
      return false;
    }

  }

  logout() {
    this.router.navigate(['/login'], { replaceUrl: true });

  }
}
