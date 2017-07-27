import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Router } from '@angular/router';

class User{
  id: number;
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
  users: User[] = [];
  reactions: Reaction[] = [];
  newReaction: Reaction = new Reaction();
  // updateReaction: Reaction = new Reaction();

  constructor(private http: Http, private router: Router){
    this.getUsers();
  }

  getUsers(){
    console.log('here')
    this.http.get('http://localhost:9393/users').subscribe(response => {
      this.users = response.json() // bios loaded into json array
    },
    err => {
      console.log('getUsers error')
    })
  }

  postReaction(){
    this.http.post('http://localhost:9393/reactions', this.newReaction).subscribe(response => {
      this.reactions = response.json()
    },
    err => {
      console.log('postReaction error')
    })
  }

  // patchReaction(){
  //   this.http.patch('http://localhost:9393/users', this.updateReaction).subscribe(response => {
  //     this.users = response.json()
  //   },
  //   err => {
  //     console.log('error')
  //   })
  // }

  // deleteReaction(){
  //   this.http.delete('http://localhost:9393/users').subscribe(response => {
  //
  //   },
  //   err => {
  //     console.log('error')
  //   })
  // }

  // TODO:
  // randomBio(){
  //
  // }
  //
  likeReaction(user){
    // grab ID of current user. push that id as reader_id for bio of sender_id
    user.id = this.newReaction.writer_id;
    user.token = this.newReaction.reader_id; //how to specifically pull user id of this particular token? (also be sure to test this token actually works)
  }

  // passReaction(){
  //   this.reaction.;
  // }

  // mutualLike(){
  //
  // }

}
