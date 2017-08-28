import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http'
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
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user = {}
  updateUser: User = new User()

  constructor(private http: Http, private router: Router) {
    this.getProfile();
    console.log('here')
  }
  ngOnInit() {
  }

  getProfile(){
    this.http.get('https://localhost:9393/users/' + window.localStorage.token).subscribe(response => {
      this.user = response.json()
    })
  }

  logout(){
    window.localStorage.clear()
    this.router.navigate(['/welcome'])
  }

  patchProfile(){
    this.http.patch('https://localhost:9393/users/' + window.localStorage.token, this.updateUser).subscribe(response => {
      this.user = response.json()
    })
  }
  //
  // deleteProfile(){
  //   this.http.delete()
  // }

}
