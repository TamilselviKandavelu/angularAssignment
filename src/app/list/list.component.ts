import { Component, OnInit } from '@angular/core';
import { ListService } from '../list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  title = 'List page';
  myCars: any;
  constructor(public listService: ListService) {}

  ngOnInit() {
    this.getListOfCars();
  }

  getListOfCars() {
    this.listService.getListData().subscribe(response => {
      this.myCars = response;
    });
  }
}
