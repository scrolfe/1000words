import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Router } from '@angular/router';

class User{
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
    this.http.post('http://localhost:9393/users/', this.user).subscribe(response => {
      window.localStorage.setItem("token",response.json().token)
      this.router.navigate(['/profile'])
    })
  }
}
