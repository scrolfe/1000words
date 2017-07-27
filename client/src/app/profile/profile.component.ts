import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http'
import { ActivatedRoute } from '@angular/router';
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

  constructor(private route: ActivatedRoute, private http: Http, private router: Router) {
    let id = this.route.snapshot.params.id;
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

  // patchProfile(){
  //   this.http.patch()
  // }
  //
  // deleteProfile(){
  //   this.http.delete()
  // }

}
