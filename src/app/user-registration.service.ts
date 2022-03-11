import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserRegistrationService {

  constructor(private http:HttpClient) { }

  public doRegistration(user: User){
    return this.http.post("http://localhost:8080/user/register",user,{responseType:'text' as 'json'});
  }

  public getUsers(){
    return this.http.get("http://localhost:8080/user/all");
  }

  public getUserByEmail(email: string){
    return this.http.get("http://localhost:8080/user/findUser/"+email);
  }

  public deleteUserById(id: number){
    return this.http.delete("http://localhost:8080/user/"+id);
  }
}
