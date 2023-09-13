import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ContactsComponent } from './contacts/contacts.component';
import {AboutServiceService} from "./about-service.service";

import {RouterModule, Routes} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
const appRoutes: Routes = [
   { path:'about', component:AboutComponent},
   { path:'contacts',component:ContactsComponent},
  {path:'',redirectTo:'/about',pathMatch:'full'}
]


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactsComponent
  ],
  imports: [
    BrowserModule,
      FormsModule,
    RouterModule.forRoot(appRoutes),HttpClientModule
  ],
  providers: [AboutServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
