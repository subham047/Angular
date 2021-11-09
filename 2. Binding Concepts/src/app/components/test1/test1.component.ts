import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css']
})
export class Test1Component implements OnInit {

  
  constructor() { }

  ngOnInit(): void {
  }

  // properties for interpolation Example
  public name='Subham';
  public lname='Samantaray';
  public frmwrk='Angular Interpolation';

  userName(){
    return "Hi "+this.name+" "+this.lname;
  }

  //properties for Binding Example
  public myid="testid";
  public isDisabled=true;
  public Disabled=false;

  //properties for Class Binding Example Example
  public dangerClass="text-success";
  public specialClass="text-special";
  public hasError = true;
  public hasErrors = false;
  public isSpecial=true;
       //**ngClass Example**
  public multipleClasses = {
    "text-success" : !this.hasError,
    "text-danger" : this.hasErrors,
    "text-special" : this.isSpecial

  }

  //Properties for Event Binding Example
  public event="";
      //function defination for Event Binding Example
  onClick(){
    console.log("Hi there... It's Event Binding Example"); //Output will print in console
    this.event="First look in console and then look here. It's a Event Binding Example too"
  }

  //function defination for Template Referance Variable
  onClickme(value){
    console.log(value);
  }

  // Propertis for Two Way Binding Example
  public inputData="";

}
