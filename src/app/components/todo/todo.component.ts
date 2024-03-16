import { Component, NgModuleRef, OnInit } from '@angular/core';
import { Todo } from '../../models/todo';

import { CommonModule } from '@angular/common';

import { HttpClient, HttpClientModule } from '@angular/common/http';



@Component({
  selector: 'mytodo',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss'
})
export class TodoComponent implements OnInit {
  
  todos:Todo[]=[];
  constructor(private httpClient : HttpClient ) { }

  ngOnInit(): void {
    this.getTodos();
  }

  getTodos(){
 
    this.httpClient.get<Todo[]>('https://jsonplaceholder.typicode.com/todos')
    .subscribe(response=>{
      this.todos=response
    })
  }

}
