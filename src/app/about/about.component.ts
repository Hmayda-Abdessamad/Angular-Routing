import {Component, OnInit} from '@angular/core';
import {AboutServiceService} from "../about-service.service";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit{

    private result: string;
  constructor( private service:AboutServiceService) {
  }

    ngOnInit(): void {
    }
  OnSave(data: any){
    this.service.saveData(data);
  }

  OnGetData(){
  this.result=this.service.getData();
  }




}
