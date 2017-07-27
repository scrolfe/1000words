import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { ViewComponent } from './view/view.component';
import { InteractionsComponent } from './interactions/interactions.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { FriendsComponent } from './friends/friends.component';

const routes: Routes = [
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'view',
    component: ViewComponent
  },
  {
    path: 'interactions',
    component: InteractionsComponent
  },
  {
    path: 'welcome',
    component: WelcomeComponent
  },
  {
    path: 'friends',
    component: FriendsComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    ProfileComponent,
    ViewComponent,
    InteractionsComponent,
    WelcomeComponent,
    FriendsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
