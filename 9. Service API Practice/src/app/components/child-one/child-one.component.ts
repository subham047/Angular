import { Component, Input } from '@angular/core';
import { WeatherDataService } from 'src/app/weather-data.service';

@Component({
  selector: 'app-child-one',
  templateUrl: './child-one.component.html',
  styleUrls: ['./child-one.component.css']
})
export class ChildOneComponent  {

  @Input() public dataFromParent;

  data:any;

  constructor(private getData:WeatherDataService) { }

  ngOnInit(){
    this.getData.getSomeData().subscribe((result)=>{
      this.data=result;
    });
  }

}
