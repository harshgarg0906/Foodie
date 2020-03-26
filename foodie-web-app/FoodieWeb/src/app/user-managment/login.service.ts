import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserData } from './login/login.component';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';


export interface LoginResponsse
{
  statusCode:any
  message:string
}
@Injectable({
  providedIn: 'root'
})

export class LoginService {

  constructor(private http:HttpClient) { }

  onLogin(form:UserData)
  {  
      console.log('in the service')
      return this.http.post<LoginResponsse>(`http://localhost:8765/user/auth/login`,form)
      .pipe(catchError(errorRes=>{
             let errorMessage='';
             console.log('in the errrorr message')
             console.log(errorRes)
             if(errorRes.status==404)
             {
               errorMessage="PSID Not Found"
             }
             return throwError(errorMessage)
      }));
  }  
}

