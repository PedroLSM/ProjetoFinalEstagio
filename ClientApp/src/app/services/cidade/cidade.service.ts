import { Http } from '@angular/http';
import { Injectable, Inject } from '@angular/core';
import { DataService } from '../DataService/data.service';

@Injectable({
  providedIn: 'root'
})
export class CidadeService extends DataService{
  
  constructor(http: Http, @Inject('BASE_URL')  baseUrl: string) {
    super(http, baseUrl, "api/cidades");
  }

}