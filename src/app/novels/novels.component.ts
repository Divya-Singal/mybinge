import { Component, OnInit, OnChanges } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, NgForm, FormArray } from '@angular/forms';
import { Result } from '../../dstructures/result';
// import { Quotes, Takeaway } from '../../dstructures/quotes';

import { ConfigService } from '../../services/config.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-novels',
  templateUrl: './novels.component.html',
  styleUrls: ['./novels.component.css']
})
export class NovelsComponent implements OnInit {
	currentRate = 0;
	result:Result;
	isEdit:boolean = false;
	id: string;
	newNovelForm:FormGroup;
	rating:any;
	
  constructor(private formbuilder: FormBuilder,
			private configSvc: ConfigService,
			private actRouter: ActivatedRoute,
			private router:Router) {
			
			this.result= new Result();
			this.newNovelForm= formbuilder.group({
				
				title: new FormControl(),
				author: new FormControl(),
				comments: new FormControl(),
				rating: new FormControl(),
				startDate: new FormControl(),
				endDate: new FormControl(),
				quotes: this.formbuilder.array([this.formbuilder.group({takeaway:'', page:''})]),
				
			});
				
			}
			
	get Quotes() {
		return this.newNovelForm.get('quotes') as FormArray;
	}
  
	addQuotes() {
		this.Quotes.push(this.formbuilder.group({takeaway:'',page:''}));
	}

	deleteQuotes(index) {
		this.Quotes.removeAt(index);
	}
  

  ngOnInit() {
	
	  if(this.router.url.includes('/edit/')){
		  /*this.isEdit=true;
		  this.id=this.actRouter.snapshot.paramMap.get('id');
		  if(this.id.match(/^[a-zA-Z0-9]+$/)==null){
			  //NOT A VALID ID, REDIRECT TO 404  
		  }
		else {   
		  this.configSvc.get(this.id).subscribe(
		  (data)=>{
					this.result=data;
					if(this.result.type=='success'){
						
						this.newNovelForm.setValue({
								title: this.result.data.title,
								author: this.result.data.author,
								comments: this.result.data.comments,
								rating: this.result.data.ratings,
						})
					}
		  }
		  (err)=>{ console.log(`${err}`);}
		  ); 
		}
	  */
	  }
  }

  submit(forM){
	   console.log(forM.value);
	var holdData= forM.value;
	this.configSvc.putNovel(holdData).subscribe(
	(data) => {
		this.result=data;
		console.log(this.result);
	},
	(err) => {
		console.log(err);
	}
	);
	
  }
}
