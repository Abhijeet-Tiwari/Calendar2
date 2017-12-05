import { NgModule, APP_INITIALIZER, Injector } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule, Router } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { HttpModule, Http, XHRBackend, RequestOptions } from "@angular/http";

import { AppComponent }  from './app.component';
import { StartcalendarComponent } from './calendar/calendar.component';
import { TableComponent } from './table/table.component';
import {EmployeeService} from './services/employee.service';

@NgModule({
      imports: [
            BrowserModule,
            FormsModule,
            HttpModule,
            RouterModule
        ],
  declarations: [
        AppComponent,
        StartcalendarComponent,
        TableComponent, 
            
  ],
  providers:[EmployeeService],

  bootstrap: [ AppComponent ]
})
export class AppModule { }
