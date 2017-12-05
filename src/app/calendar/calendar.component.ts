import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-startcalendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class StartcalendarComponent implements OnInit {
  public dt: Date = new Date();
  objetsData :  any = null;
  constructor(private empservice: EmployeeService) { }

  public getDate(event): any {
    // console.log("Hello");
    //console.log(event.target.data);

    this.empservice.getData()
      .subscribe(
        d => this.objetsData =  d
      );

  }

  ngOnInit() { }

}
