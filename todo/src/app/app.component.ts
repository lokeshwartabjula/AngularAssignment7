import { Component } from '@angular/core';
import { TodoLinks } from './todo-links';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo';
  links : TodoLinks[] = [
    {text:'All', link:'/search'},
    {text:'Done', link:'/show'},
    {text:'NotDone', link:'/show'}
  ];
}
