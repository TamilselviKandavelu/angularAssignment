import { Component, OnInit } from '@angular/core';
import { ViewService } from '../view.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  title = 'View Page';
  constructor(public viewService: ViewService) {}
  userName = '';
  ngOnInit() {}
}
