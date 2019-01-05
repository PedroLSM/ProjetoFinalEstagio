import { Injectable, Inject } from '@angular/core';
import { DataService } from '../DataService/data.service';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class EstagiarioService extends DataService{

  constructor(http: Http, @Inject('BASE_URL') baseUrl: string) {
    super(http, baseUrl, "api/estagiarios");
  }
}
