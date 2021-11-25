import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherDataService {

url="https://api.openbrewerydb.org/breweries";

  constructor(private dataFromLap: HttpClient)  { }

  getSomeData(){
    return this.dataFromLap.get(this.url);
  }
}
      