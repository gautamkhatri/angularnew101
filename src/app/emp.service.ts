import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
@Injectable({
providedIn: 'root'
})
export class EmpService {
  url = 'http://dummy.restapiexample.com/api/v1/employees';
  constructor(private http: HttpClient) { }
  getOptions() {
  const headers = new HttpHeaders();
  headers.set('Content-Type', 'application/json');
  headers.set('Access-Control-Allow-Methods', 'GET, POST, DELETE, PUT');
  headers.set('Access-Control-Allow-Origin', '*');
  return { headers , skip: true };
  }
  getemp() {
    return this.http.get(this.url);
  }
  }