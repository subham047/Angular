import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Component Interaction - Parent'; 

// =========================================================================

// Data flow from Parent_Component(App) to Child_Component(test1)
  // property 1
  public name="Subham Samantaray";

  //Property 2 for Another Syntax example
  public sub="Angular";

  // =================================================

// Data flow from Child_Component to Parent_Component
public dataFromChild = "";

// =========================================================================

// Data flow from Parent_Component(App) to Child_Component(test2)

public dataFromInputBox ;

onClick(data){
  this.dataFromInputBox = data;
}


}
