import { Component, NgModuleRef, OnInit } from '@angular/core';
import { Todo } from '../../models/todo';

import { CommonModule } from '@angular/common';

import { TodoService } from '../../services/todo.service';



@Component({
  selector: 'mytodo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss'
})
export class TodoComponent implements OnInit {
  
  todos:Todo[]=[];
  constructor(private todoService: TodoService ) { }

  ngOnInit(): void {
    this.getTodos();
  }

  getTodos(){
 
    this.todoService.getAll().subscribe(response=>{
      this.todos=response
    })
  }

}
