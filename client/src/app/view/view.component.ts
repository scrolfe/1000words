import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Router } from '@angular/router';

class User{
  id: string;
  email: string;
  password: string;
  contact_info: string;
  bio: string;
  photo_url: string;
}

class Reaction{
  reader_id: string;
  writer_id: string;
}

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})

export class ViewComponent implements OnInit {
  users: User[] = [];
  user: User = new User();
  responses: Reaction[] = [];
  newReaction: Reaction = new Reaction();
  updateReaction: Reaction = new Reaction();

  constructor(private http: Http, private router: Router) {
    this.getBio()
  }

  ngOnInit(){

  }

  getBio(){
    this.http.get('http://localhost:4200/view' + this.user.id).subscribe(response => {
      this.user = response.json() //use just bio
    },
    err => {
      console.log('error')
    })
  }

  postResponse(){
    this.http.post('http://localhost:4200/view', this.newReaction).subscribe(response => {
      this.users = response.json() // handles 'swipes' one way or another
    },
    err => {
      console.log('error')
    })
  }

  patchView(){
    this.http.patch('http://localhost:4200/view', this.updateReaction).subscribe(response => {
      this.users = response.json()
    },
    err => {
      console.log('error')
    })
  }

  deleteView(){
    this.http.delete('http://localhost:4200/view').subscribe(response => {

    },
    err => {
      console.log('error')
    })
  }

  // TODO:
  // likeReaction(){
  //
  // }
  //
  // passReaction(){
  //
  // }
  //
  // mutualLike(){
  //
  // }

}
