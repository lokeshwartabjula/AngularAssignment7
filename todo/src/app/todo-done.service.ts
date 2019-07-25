import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todos } from './todos';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoDoneService {

  baseURL="http://localhost:3000/todos";
  doneURL=this.baseURL+"/?completed=true";
  constructor(private http: HttpClient) { }
  findAll():Observable<Todos[]>{
    return this.http.get<Todos[]>(this.baseURL);
  }

  findDone():Observable<Todos[]>{
    return this.http.get<Todos[]>(this.baseURL, {params:{completed:"true"}});
  }

  findNotDone():Observable<Todos[]>{
    return this.http.get<Todos[]>("http://localhost:3000/todos/?completed=false");
  }
}
