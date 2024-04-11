import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttprequestService {
  //private apiUrl = 'https://fine-gold-hedgehog-veil.cyclic.app/api';
  private apiUrl = 'http://localhost:3000/api';
  constructor(private http: HttpClient) { }

  // GET request
  getuserAuthenticate(): Observable<any> {
    const headers = new HttpHeaders().set('Access-Control-Allow-Origin', '*');
    //header: { 'Access-Control-Allow-Origin': 'h ttp://niknote.rf.gd/' },
    return this.http.get<any>(`${this.apiUrl}/userauthentication?username=suresh&password=suresh1`, { headers });
  }

  
  loginuserinfodata(item: any): Observable<string> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post<any>(`${this.apiUrl}/loginvalidationuser`, item, { headers });
  }

  checkexistinguser(item: any): Observable<string> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post<any>(`${this.apiUrl}/checkexistinguser`, item, { headers });
  }

  // POST request
  createuserinfodata(item: any): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post<any>(`${this.apiUrl}/createuserinfodata`, item,{ headers});
  }
  
  // POST request
  placedordermail(item: any): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post<any>(`${this.apiUrl}/placedordermail`, item, { headers });
  }

}
