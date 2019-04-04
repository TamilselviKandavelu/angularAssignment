import { Component, OnInit } from '@angular/core';
import { ViewService } from 'src/app/view.service';

@Component({
  selector: 'app-widget2',
  templateUrl: './widget2.component.html',
  styleUrls: ['./widget2.component.scss']
})
export class Widget2Component implements OnInit {
  userName;
  constructor(public myservice: ViewService) {}

  ngOnInit() {
    this.myservice.userNameChange.subscribe(value => {
      this.userName = value;
    });
  }
}
