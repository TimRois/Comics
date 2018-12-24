import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ReleaseService {
  constructor(private http: HttpClient) {}

  url: string = "http://localhost:8080/releases";
  GetRelease(id: number, user: any): Observable<any[]> {
    let data = { id: "", user: "" };
    data.id = id.toString();
    if (user) {
      data.user = user.user.id.toString();
    } else {
      data.user = "0";
    }

    return this.http.get<any[]>(this.url + "/for_comics", {
      params: {
        ...data
      }
    });
  }

  findById(id: number): Observable<any[]> {
    return this.http.get<any[]>(this.url + "/findById", {
      params: {
        id: id.toString()
      }
    });
  }
}
