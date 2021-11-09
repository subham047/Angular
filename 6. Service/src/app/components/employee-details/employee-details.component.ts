import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  public employeesArray = [];

  //Here we are initializing the "EmployeeService" Class of employee.service.ts and storing it in emp_service_variable
  constructor(private emp_service_variable:EmployeeService) { } 

  //*When a component get initialized, ngOnInit() gets called once.*
  //By using emp_service_variable, we are accessing getEmployees() of employee.service.ts and storing the data in employeesArray[]
  ngOnInit(): void {
    this.employeesArray = this.emp_service_variable.getEmployees();
  }

}
