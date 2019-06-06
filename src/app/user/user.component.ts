import { Component, OnInit } from '@angular/core';
// import {MatToolbarModule} from '@angular/material/toolbar';
import { FormControl, FormGroup, FormBuilder, NgForm, FormArray } from '@angular/forms';
import { Result } from '../../dstructures/result';
import { ConfigService } from '../../services/config.service';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
 // providers: [NgbCarouselConfig]
})
export class UserComponent implements OnInit {

 // showNavigationArrows = false;
  // showNavigationIndicators = false;
  images = [1, 2, 3].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);
  // console.log(images);
// images: any;
  // images = [1, 2, 3].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);
  loginForm: FormGroup;
  registerForm: FormGroup;
  result: Result;
  constructor(private formbuilder: FormBuilder,
     // private config: NgbCarouselConfig,
    private configSvc: ConfigService) {

    //  this.images = [1, 2, 3].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);
    //  config.showNavigationArrows = true;
     // config.showNavigationIndicators = true;
     }

  ngOnInit() {

    this.result = new Result();
    this.registerForm = this.formbuilder.group({
    credential: new FormControl(),
    birthDate: new FormControl(),
    name: new FormControl(),
    password: new FormControl()
    });

    this.loginForm = this.formbuilder.group({
    credential: new FormControl(),
    password: new FormControl()
    });

  }

  registerUser() {
// c
  }

  loginUser() {
// c
  }

}
