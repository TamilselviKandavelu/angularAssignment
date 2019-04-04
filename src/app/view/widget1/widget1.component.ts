import { Component, OnInit } from '@angular/core';
import { ViewService } from 'src/app/view.service';

@Component({
  selector: 'app-widget1',
  templateUrl: './widget1.component.html',
  styleUrls: ['./widget1.component.scss']
})
export class Widget1Component implements OnInit {
  userName = '';
  constructor(public viewService: ViewService) {}

  ngOnInit() {}
  btnsubmit() {
    this.viewService.changeUserNameValue(this.userName);
  }
}
