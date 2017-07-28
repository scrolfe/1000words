import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http'

class User{
  email: string;
  password: string;
  contact_info: string;
  bio: string;
  photo_url: string;
}

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {
  friends: User[] = []
  constructor(private http: Http) {
    this.getFriends() //
  }

  ngOnInit() {
  }

getFriends() {
  this.http.get('http://localhost:9393/users/friends/' + window.localStorage.token).subscribe(response=> {
    this.friends = response.json()
  })
}
}