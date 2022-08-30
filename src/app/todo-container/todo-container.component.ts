import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-todo-container',
  templateUrl: './todo-container.component.html',
  styleUrls: ['./todo-container.component.css']
})
export class TodoContainerComponent {

  title="todoApp"
  todoData!: FormGroup;
  formData : any = [];
  isSubmit: boolean = false;
  data: any = {};
  isEnabled: boolean = false;
  index!: number;


  constructor() {}

  ngOnInit(): void {
    this.todoData = new FormGroup({
      id: new FormControl(0),
      todo_item : new FormControl('', [Validators.required])
    }) 
  }

  onSubmit() {
    this.isSubmit = true;
    this.todoData.value.id = this.formData.length
    console.log(this.todoData.value);

    this.formData.push(this.todoData.value) 
    console.warn("data"+""+this.formData);
    this.todoData.controls['todo_item'].reset();
  }

  get todo(){
    return this.todoData.get('todo_item')
  }

  edit(x:number){
    this.index = x
    this.todoData.controls['todo_item'].setValue(this.formData[this.index].todo_item)
    this.isEnabled = true
  }

  update(){
    this.formData[this.index].todo_item = this.todoData.get('todo_item')?.value
    this.isEnabled = false
  }

  delete(x:number){
    this.formData.splice(x,1);
    console.log("x"+""+x+""+"form"+this.formData);
  }
}


