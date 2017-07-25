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
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user = {};

  constructor(private http: Http, private router: Router) {

  }

  ngOnInit() {
  }

  getRegister(){
    this.http.get()
  }

  postRegister(){
    this.http.post()
  }

  patchRegister(){
    this.http.patch()
  }

  deleteRegister(){
    this.http.delete()
  }

  register(){

  }

}
