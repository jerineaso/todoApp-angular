import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-todo-container',
  templateUrl: './todo-container.component.html',
  styleUrls: ['./todo-container.component.css']
})
export class TodoContainerComponent implements OnInit {

  title="todoApp"
  // Array for storing form data
  formArray: Array<any> = []
  constructor() {
  }

  ngOnInit(): void {
    
    
  }

  onSubmit(x: NgForm) {
    if(!x.controls.todo_item.invalid){
      this.formArray.push({
        id: this.formArray.length,
        todo_item:x.value.todo_item
      })
    }
  }

  edit(x:number){
    console.log(x);
    this.formArray.find(item=>{
      console.log(item);
      
    })
  }

  delete(x:number){
    this.formArray.splice(x,1);
  }
}
