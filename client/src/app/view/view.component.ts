import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Router } from '@angular/router';

class User{
  id: number;
  display_name: string;
  email: string;
  password: string;
  contact_info: string;
  bio: string;
  photo_url: string;
}

class Reaction{
  id: number;
  reader_id: number;
  writer_id: number;
}

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})

export class ViewComponent {
  user = {};
  users: User[] = [];
  reactions: Reaction[] = [];
  newReaction: Reaction = new Reaction();
  userIterator: number = 0

  constructor(private http: Http, private router: Router){
    this.getUsers();
  }

  getUsers(){
    console.log('here')
    this.http.get('https://thousand-words-server.herokuapp.com/users').subscribe(response => {
      this.users = response.json() // bios loaded into json array
      this.user = this.users[this.userIterator] //this is where to add randomness factor
    },
    err => {
      console.log('getUsers error')
    })
  }

  postReaction(){
    this.http.post('https://thousand-words-server.herokuapp.com/reactions', this.newReaction).subscribe(response => {
      this.reactions = response.json()
    },
    err => {
      console.log('postReaction error')
    })
  }

  // TODO: shuffle users on like or pass

  likeReaction(writer_id){
    // grab ID of current user. push that id as reader_id for bio of sender_id
    this.http.post('https://thousand-words-server.herokuapp.com/reactions', {reader_id: window.localStorage.user_id, writer_id: writer_id}).subscribe(response => {
      this.userIterator += 1
      this.user = this.users[this.userIterator]
    })
  }

  passReaction(){
    this.userIterator += 1
    this.user = this.users[this.userIterator]
  }

  logout(){
    this.router.navigate(['/welcome'])
    window.localStorage.clear()
  }


  // mutualLike(){
  //
  // }

}
