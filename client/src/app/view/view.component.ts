import { Component, OnInit } from '@angular/core';
import {Http, Response } from '@angular/http'
import { Router } from '@angular/router'

class User{
  email: string;
  password: string;
  contact_info: string;
  bio: string;
  photo_url: string;
}

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  users: User[] = [];
  newUsers: User = new User();
  updateUsers: User = new User();


  constructor(private http: Http, private router: Router) { }

  ngOnInit() {
  }

  getView(){
    this.http.get()
  }

  postView(){
    this.http.post()
  }

  patchView(){
    this.http.patch()
  }

  deleteView(){
    this.http.delete()
  }

  likeView(){
    
  }

  passView(){

  }

}
