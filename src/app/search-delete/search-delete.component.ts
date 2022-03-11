import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserRegistrationService } from '../user-registration.service';

@Component({
  selector: 'app-search-delete',
  templateUrl: './search-delete.component.html',
  styleUrls: ['./search-delete.component.css']
})
export class SearchDeleteComponent implements OnInit {

  users: any; /* User[] is also acceptable once all varaiables were added to user class */
  constructor(private service:UserRegistrationService) { }

  ngOnInit(): void {
    let response=this.service.getUsers();
    response.subscribe((data)=>this.users=data);

    // this.service.getUsers().subscribe((data: any) => {
    //   this.users = data;
    // });
  }

}
