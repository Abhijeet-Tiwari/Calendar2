import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';


export class Base implements OnInit {
  public objetData;
  
  constructor(public empservice: EmployeeService) {
  }

  ngOnInit() { }

}
