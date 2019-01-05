import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';
import { DataService } from '../DataService/data.service';

@Injectable({
  providedIn: 'root'
})
export class EstadoService extends DataService {

  constructor(http: Http, @Inject('BASE_URL') baseUrl: string) {
    super(http, baseUrl, "api/estados");
  }
}
