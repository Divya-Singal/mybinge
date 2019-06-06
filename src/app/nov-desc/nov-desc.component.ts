import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-nov-desc',
  templateUrl: './nov-desc.component.html',
  styleUrls: ['./nov-desc.component.css']
})
export class NovDescComponent implements OnInit {

  @Input() arrObj: string;
  constructor() { }

  ngOnInit() {
    console.log(this.arrObj);
  }


}
