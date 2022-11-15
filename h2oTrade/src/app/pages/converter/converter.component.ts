import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-converter', 
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css']
})
export class ConverterComponent implements OnInit {

  todo:string[] = [];

  done:string[] = [];

  convertedValue=""; 

temp(input:string) {
  this.todo.push(input)
}

  constructor() { }

  ngOnInit(): void {
  }

  drop(event: CdkDragDrop<string[]>) {
    setTimeout(() => {
      this.calculate(this.done[this.done.length-1])
    }, 1000);
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

  calculate(input:string){
    var temp:number = +input
    temp=temp*0.9
    this.convertedValue=temp.toString()
    this.done.pop()
  }

}
