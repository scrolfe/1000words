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

const routes: Routes = [
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'profile/:id',
    component: ProfileComponent
  },
  {
    path: 'view/:id',
    component: ViewComponent
  },
  {
    path: 'interactions/:id',
    component: InteractionsComponent
  },
  {
    path: 'welcome',
    component: WelcomeComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    ProfileComponent,
    ViewComponent,
    InteractionsComponent,
    WelcomeComponent
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
