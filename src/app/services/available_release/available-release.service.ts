import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class AvailableReleaseService {
  constructor(private http: HttpClient) {}
  url: string = "http://localhost:8080/available_comics";
  GetAvail(id: number): Observable<any[]> {
    return this.http.get<any[]>(this.url + "/avail", {
      params: {
        id: id.toString()
      }
    });
  }

  add(available_comics: any) {
    this.http.post<any[]>(this.url + "/add", available_comics).subscribe();
  }
}
