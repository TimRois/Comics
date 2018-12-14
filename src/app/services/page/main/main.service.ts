import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  commonUrl: string = "http://localhost:8080/comics_strip";

  constructor(private http: HttpClient) { }

  getTop(): Observable<any[]>{
    return this.http.get<any[]>(this.commonUrl + "/top");
  }

  getNew(): Observable<any[]>{
    return this.http.get<any[]>(this.commonUrl + "/new");
  }

  add(comics_strip: any) {
    this.http.post<any[]>(this.commonUrl + "/add", comics_strip).subscribe();
  }
}
