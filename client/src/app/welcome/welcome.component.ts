import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Router } from '@angular/router';

class User{
  display_name: string;
  email: string;
  password: string;
  contact_info: string;
  bio: string;
  photo_url: string;
}

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})

export class WelcomeComponent implements OnInit {
  user = {};

  constructor(private http: Http, private router: Router) { }


  ngOnInit() {
  }


  login(){
    this.http.post('https://localhost:9393/users/login', this.user).subscribe(response => {
      window.localStorage.setItem("token",response.json().token)
      window.localStorage.setItem("user_id",response.json().id)

      this.router.navigate(['/profile'])
    })
  }
}
