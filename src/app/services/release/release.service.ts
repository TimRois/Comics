import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ReleaseService {
  constructor(private http: HttpClient) {}

  url: string = "http://localhost:8080/releases";
  GetRelease(id: number): Observable<any[]> {
    return this.http.get<any[]>(this.url + "/for_comics", {
      params: {
        id: id.toString()
      }
    });
  }
}
