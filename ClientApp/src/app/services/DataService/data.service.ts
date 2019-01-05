import { Injectable, Inject, EventEmitter } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: Http, @Inject('BASE_URL') private baseUrl: string, private urlAPI) { }

  getAll() {
    return this.http.get(this.baseUrl + this.urlAPI)
      .pipe(map(response => response.json()));
  }

  update(id, resource) {
    return this.http.put(this.baseUrl + this.urlAPI + "/" + id, resource)
      .pipe(map(response => response.json()));
  }

  delete(id) {
    return this.http.delete(this.baseUrl + this.urlAPI + "/" + id)
      .pipe(map(response => response.json()));
  }

  create(resource) {
    return this.http.post(this.baseUrl + this.urlAPI, resource)
      .pipe(map(response => response.json()));
  }

}
