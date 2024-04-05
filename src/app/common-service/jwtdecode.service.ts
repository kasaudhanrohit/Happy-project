import { Injectable } from '@angular/core';
import * as jwtDecode from 'jwt-decode';
@Injectable({
  providedIn: 'root'
})
export class JwtdecodeService {

  constructor() { }

  // A method to decode a JWT
  decodeJwt(token: string): any {
    try {
      // Use jwtDecode function to decode the JWT
      const decodedToken = jwtDecode.jwtDecode(token);

      // Log the decoded token or use it as needed
      return decodedToken;
    } catch (error) {
      console.error('Error decoding JWT:', error);
      return null;
    }
  }
}
