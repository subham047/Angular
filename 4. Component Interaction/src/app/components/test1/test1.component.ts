import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css']
})
export class Test1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // Creating properties for child component to receive data fron parent component
  // property 1
  @Input() public parentData;

  //property 2 for another Syntax Example
  @Input('subject') public sub; // Here 'sub' is an alias 
  @Output() public childData = new EventEmitter();

  fireEvent(){
    this.childData.emit('How are you ??? This data is from Child Component');
  }


}
