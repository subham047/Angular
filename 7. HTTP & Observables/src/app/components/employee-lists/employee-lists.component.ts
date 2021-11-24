import { Component } from '@angular/core';
import {ServiceDemoService} from '../../service-demo.service'


@Component({
  selector: 'app-employee-lists',
  templateUrl: './employee-lists.component.html',
  styleUrls: ['./employee-lists.component.css']
})
export class EmployeeListsComponent {

  data:any;
  
  constructor(private getData:ServiceDemoService) { }

  ngOnInit() {
    this.getData.getDetails().subscribe((result)=>{
      console.log(result);
      this.data=result;
    });
  }
}