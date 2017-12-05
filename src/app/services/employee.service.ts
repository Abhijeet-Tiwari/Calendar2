import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Response } from '@angular/http/src/static_response';

@Injectable()
export class EmployeeService {
  constructor(private http: Http) { }
  public data: any;
  getData() {
    return this.http.get('assets/InputData.json')
      .map(this.extractdata);
  }
  extractdata(res: Response) {
    let body = res.json();
    if(typeof body.employees === "string") {
      this.data = JSON.parse(body.employees);
    } else {
      this.data = body.employees
    }
    console.log("body ------------" + JSON.stringify(this.data));
    return this.data;
  }  
}