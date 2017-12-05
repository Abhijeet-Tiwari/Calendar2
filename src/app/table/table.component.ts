import { Component, OnInit, Input } from '@angular/core';
import{ Observable } from 'rxjs/RX';
import {EmployeeService} from '../services/employee.service';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
 
})
export class TableComponent implements OnInit {
  @Input() data: any;
  constructor(private empservice: EmployeeService) {
    console.log("TableComponent.data:");
   }
  ngOnInit() {}
}
