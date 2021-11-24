import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceDemoService {

  url="https://api.openbrewerydb.org/breweries";


  constructor(private http:HttpClient) { }

  getDetails(){
    return this.http.get(this.url);
  }

  
}