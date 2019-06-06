import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable({
	providedIn: 'root'
})

export class ConfigService {

	public options: any;
	public API_BASE_URL: any;
	public data: any;

	constructor(private http: Http) {

		const headers = new Headers({ 'Content-Type': 'application/json' });
		this.options = new RequestOptions({ headers: headers });
		this.API_BASE_URL = 'http://localhost:4000/';
	}

	putNovel(data) {
		let user = { userid: 5 };
		let holder = { ...data, ...user };
		return this.http.post(this.API_BASE_URL + `novels/put`, holder, this.options)
			.map((res) => res.json(), (err) => err);

	}

	getNovel() {
		return this.http.post(this.API_BASE_URL + `novels/get`, this.options).map((res) => res.json(), (err) => err);
	}

}
