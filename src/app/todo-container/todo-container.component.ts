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
  isEmpty: boolean = false;
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
    this.formData.push(this.todoData.value) 
    console.log(this.formData);
    console.log()
    this.todoData.controls['todo_item'].reset();
  }

  get todo(){
    return this.todoData.get('todo_item')
  }

  edit(x:number){
    this.data = this.formData.find((item: any) =>{
      return item.id === x
    })
    this.index = this.data.id
    this.todoData.controls['todo_item'].setValue(this.data.todo_item)
    this.isEnabled = true
  }

  update(){
    this.formData[this.index].todo_item = this.todoData.get('todo_item')?.value
    this.isEnabled = false
  }

  delete(x:number){
    this.data = this.formData.find((item: any) =>{
      return item.id === x
    })
    
    this.formData.splice(this.data.id,1)
  }
}


