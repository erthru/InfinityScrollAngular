import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

  fetchUsers(page:Number){
    return this.http.get("https://reqres.in/api/users?&per_page=8&page="+page);
  }

}
