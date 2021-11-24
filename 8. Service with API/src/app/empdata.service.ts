import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class EmpdataService {

  url="https://api.openbrewerydb.org/breweries";

  constructor(private http:HttpClient) {}

  getEmpData(){
    return this.http.get(this.url);
  }
}
