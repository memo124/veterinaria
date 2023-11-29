import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, retry } from 'rxjs';
import { loginI } from 'app/interfaces/login.interfaces';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url:string = `${environment.HOST}`;
  constructor(private http:HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    }),
  };
  login(form:object): Observable<loginI> {
    let direccion = this.url+`login/authenticate`;
    return this.http.post<loginI>(direccion, JSON.stringify(form),this.httpOptions).pipe(
      retry(3)
    );
  }
}
