import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ViewService {
  userNameValue: string;

  userNameChange: Subject<string> = new Subject<string>();

  constructor() {
    this.userNameChange.subscribe(value => {
      this.userNameValue = value;
    });
  }

  changeUserNameValue(value) {
    this.userNameChange.next(value);
  }
}
