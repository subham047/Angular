import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'serviceAPIPractice';

public dataFromInputBox="";

onClick(data){
  this.dataFromInputBox = data;
}

}
