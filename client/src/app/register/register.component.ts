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

  postRegister(){
    this.http.post('https://thousand-words-server.herokuapp.com/users/register', this.user)
    .subscribe(response => {
      window.localStorage.setItem('token',response.json().token)
      window.localStorage.setItem('user_id', response.json().id)
      this.router.navigate(['/profile'])
    }, err => {
      console.log('postRegister error')
    })
  }

}
