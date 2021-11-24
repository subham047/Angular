import { Component} from '@angular/core';
import { EmpdataService } from '../../empdata.service'

@Component({
  selector: 'app-employeedetails',
  templateUrl: './employeedetails.component.html',
  styleUrls: ['./employeedetails.component.css']
})
export class EmployeedetailsComponent {

  data:any;

  constructor(private getdata:EmpdataService) { }

  ngOnInit() {
    this.getdata.getEmpData().subscribe((result)=>{
      console.log(result);
      this.data=result;
    })
  }

}
