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
  selector: 'app-interactions',
  templateUrl: './interactions.component.html',
  styleUrls: ['./interactions.component.css']
})
export class InteractionsComponent implements OnInit {

  constructor(private http: Http, private router: Router) { }

  ngOnInit() {
  }

  // getInteraction(){
  //   this.http.get()
  // }
  //
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
