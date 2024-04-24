import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CanActivate,  Router } from '@angular/router';
import { Observable, tap } from 'rxjs';


interface Token {
  refresh: string,
  access: string,
}

interface UserRegister {
  username: string,
  password: string,
  email: string,
  first_name: string,
  last_name: string
}

interface UserLogin {
  username: string,
  password: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate {

  private token: null | string = null;
  private refresh: null | string = null;



  constructor(private http: HttpClient, private router: Router) { }

  login(userData: UserLogin): Observable<Token> {
    return this.http.post<Token>('http://212.8.247.94:800/auth_api/token', userData)
      .pipe(
        tap(
          (token: Token) => {
            localStorage.setItem('authToken', JSON.stringify(token))
            this.setToken(token['access'])
          }
        )
      )
    }
  
  register(userData: any): Observable<any> {
    let user: UserRegister = {
      username: userData.username,
      password: userData.password,
      email: userData.email,
      first_name: userData.first_name,
      last_name: userData.last_name
    }
    
    return this.http.post<any>('http://212.8.247.94:800/auth_api/register', user)
      .pipe(
        tap(
          (register: any) => {
           
            if (!register) {
              return
            }
            let token: Token = {
              refresh: register['refresh_token'],
              access: register['access_token']
            }
            localStorage.setItem('authToken', JSON.stringify(token))
            this.setToken(token['access'])
          }
        )
      )
  }
  
  setToken(token: null |string) {
    this.token = token
  }

  getToken(): null | string {
    return this.token
  }

  isAuth(): boolean {
    return !!this.token
  }

  canActivate(): boolean {
    
    if (this.isAuth()) {
      return true
    } else {
      this.router.navigate(['/login'])
      return false
    }
  }
}