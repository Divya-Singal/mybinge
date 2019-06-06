	export class Result {
	type: string ;
	msg:  string ;
	data: any;
	
  constructor(type: string = 'untouched', msg: string = '...', data: any = null ) {
    this.type = type;
    this.msg = msg;
    this.data = data;
	
  } 
}