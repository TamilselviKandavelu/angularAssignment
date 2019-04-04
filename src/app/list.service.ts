import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  constructor(private http: HttpClient) {}
  getListData(): any {
    return this.http.get('https://api.myjson.com/bins/habls');
  }
}
