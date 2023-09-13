import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AboutServiceService {
  private _data: any;
  constructor() { }


  saveData(data: any){
      this._data = data;
      console.log("saving data")
  }

  getData(){
    return "getting data ";
  }
}
