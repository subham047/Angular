import { Component } from '@angular/core';
import { ServiceDemoService } from '../../service-demo.service';


@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent {

  constructor(private getData:ServiceDemoService) { }

  data:any;

  ngOnInit() {
    return this.getData.getDetails().subscribe((result)=>{
      console.log(result);
      this.data=result;
    })

  }

}