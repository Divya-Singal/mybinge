import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nov-list',
  templateUrl: './nov-list.component.html',
  styleUrls: ['./nov-list.component.css']
})
export class NovListComponent implements OnInit {

  arrObj: any = [];
  constructor() {

    this.arrObj = [{'title': 'title1'}, 
                   {'title': 'title2'}, {'title': 'title3'} , {'title': 'title4'}];
   }

  ngOnInit() {
  }

}
