import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators } from '@angular/forms';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';


export interface UserData{
  psid:string
  password:string
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService:LoginService,private route:Router) { }

  wrongCredentials:boolean=false;
  wrongPassword:boolean=false;
  passwordWrong:string='';
  loginForm:FormGroup;
  data:UserData={
    psid:'',
    password:''
  }
  ngOnInit(): void {
    this.loginForm=new FormGroup({
      'psid':new FormControl(null,[Validators.required]),
      'password':new FormControl(null,[Validators.required])
    })
  }

  onSubmit(){
    this.data.psid=this.loginForm.value.psid;
    this.data.password=this.loginForm.value.password;
    this.loginService.onLogin(this.data).subscribe((data)=>{
      console.log('in the subscription')
      console.log(data);
      if(data.statusCode=='200')
      {
        this.route.navigate(['/dashboard'])
      }
      if(data.statusCode==203)
      {
         this.wrongPassword=true;
         this.passwordWrong=data.message;
      }
    },error=>{
      console.log('in the component error')
      if(error=="PSID Not Found")
      {
        console.log(error)
        this.wrongCredentials=true;
      }
      
    })
  }

  onLoginAgain()
  {
    this.wrongCredentials=false;
  }

}
