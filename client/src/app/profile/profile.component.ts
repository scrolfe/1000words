import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http'
import { Router } from '@angular/router'

class User{
  email: string;
  password: string;
  contact_info: string;
  bio: string;
  photo_url: string;
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user = {}

  constructor(private http: Http, private router: Router) {
    this.getProfile();
    console.log('here')
  }
  ngOnInit() {
  }

  getProfile(){
    this.http.get('http://localhost:9393/users/' + window.localStorage.token).subscribe(response => {
      this.user = response.json()
    })
  }

  logout(){
    window.localStorage.clear()
    this.router.navigate(['/welcome'])
  }
  // patchProfile(){
  //   this.http.patch()
  // }
  //
  // deleteProfile(){
  //   this.http.delete()
  // }

}
