import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }
  
getEmployees(){
  return [
    {"id":1,"name":"Subham","age":25},
    {"id":2,"name":"Sheetal","age":26},
    {"id":3,"name":"Dheeraj","age":27},
    {"id":4,"name":"Shreesti","age":28}
  ];
}


}
