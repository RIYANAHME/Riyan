import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductlistService {

  constructor(private _http:HttpClient) { }

  baseUrl = 'https://api-riyan.herokuapp.com'

  getProduct()
  {
    const headers = new HttpHeaders({'Content-Type':'application/json','Accept':'application/json','Access-Control-Allow-Origin':'*'});

    const options = {
      headers:headers,
      observe:"response" as 'body',
      "responseType?":"json"
    };
    return this._http.get,<any>(this.baseUrl + '/nav-bar',options)
  }

  signup(user:any)
  {
    const headers = new HttpHeaders({
      'Content-Type':'application/json',
      'Accept':'application/json',
      'Access-Control-Allow-Origin':'*'
    });

    const option ={
      headers:headers,
      observe:"response" as 'body',
      "responseType?":"json"
    };
    return this._http.post(this.baseUrl + '/user/signup',user,option);

  }


  login(user:any)
  {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Origin': '*'
    });

    const options = {
      headers: headers,
      observe: "response" as 'body',
      "responseType?": "json"
    };
    return this._http.post<any>(this.baseUrl + '/user/login',user, options);

  }

  
}
