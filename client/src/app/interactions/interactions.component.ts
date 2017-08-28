import { Component, OnInit } from '@angular/core';
import {Http, Response } from '@angular/http'
import { Router } from '@angular/router'

class User{
  display_name: string;
  email: string;
  password: string;
  contact_info: string;
  bio: string;
  photo_url: string;
}

@Component({
  selector: 'app-interactions',
  templateUrl: './interactions.component.html',
  styleUrls: ['./interactions.component.css']
})
export class InteractionsComponent implements OnInit {
  user = {}
  users: User[] = []

  constructor(private http: Http, private router: Router) {
    this.getInteraction();
  }
  ngOnInit() {
  }
  //
  getInteraction(){
    console.log('hi')
    this.http.get('https://thousand-words-server.herokuapp.com/reactions/' + window.localStorage.token).subscribe(response => {
      console.log(response.json())
      this.users = response.json()
    })
  }

  logout(){
    window.localStorage.clear()
    this.router.navigate(['/welcome'])
  }

  // how can I pull user.contact_info of friends?

  // postInteraction(){
  //   this.http.post()
  // }
  //
  // patchInteraction(){
  //   this.http.patch()
  // }
  //
  // deleteInteraction(){
  //   this.http.delete()
  // }

}
