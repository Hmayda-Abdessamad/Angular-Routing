import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Task} from "./Models/Task.model";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private host:string="http://localhost:8080";

  constructor(private http:HttpClient) { }
  getTasks() : Observable<Task>{
    return this.http.get<Task>(this.host+"/tasks");
  }
}
