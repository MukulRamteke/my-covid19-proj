import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Covid19serService {

  constructor(private http:HttpClient) { 
    
  }
  covid19Reports()
    {
return this.http.get("https://corona.lmao.ninja/v2/countries");
    }
}
