import { Component, OnInit } from '@angular/core';
import { TodoDoneService } from '../todo-done.service';
import { Todos } from '../todos';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  clicked: string;

  todoList:Todos[];
  constructor(private service: TodoDoneService) { }

  ngOnInit() {
    
  }
  All(){
    
    this.service.findAll().subscribe(resp => this.todoList=resp);
    this.clicked='clicker';
   
  }

  OnlyDone(){
    this.service.findDone().subscribe(resp => this.todoList=resp);
  }
  NotDone(){
    this.service.findNotDone().subscribe(resp => this.todoList=resp);
  }
  

}
