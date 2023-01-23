import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

  login(username: string, password: string){
      if(username === "kadir" && password === "123456"){
          return 200;
      }
      else{
          return 403;
      }
  }

  logout(){
    
    this.router.navigate(['login']);
  }
}
