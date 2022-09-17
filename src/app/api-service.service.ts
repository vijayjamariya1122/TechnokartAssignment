import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiServiceService {
  baseurl: any = 'https://api.themoviedb.org/3';
  constructor(private http: HttpClient) {}

  get(url) {
    const headers = new HttpHeaders().set('content-type', 'application/json');
    return this.http.get(this.baseurl + url);
  }
}
