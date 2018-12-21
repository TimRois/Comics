import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class CatalogService {
  Url2: string = "http://localhost:8080/ganre_comics";

  constructor(private http: HttpClient) {}

  getAll(): Observable<any[]> {
    return this.http.get<any[]>(this.Url2 + "/all/filter");
  }

  getDrama(): Observable<any[]> {
    return this.http.get<any[]>(this.Url2 + "/drama");
  }
  getFantastic(): Observable<any[]> {
    return this.http.get<any[]>(this.Url2 + "/fantastic");
  }
  getDc(): Observable<any[]> {
    return this.http.get<any[]>(this.Url2 + "/dc");
  }
  getMarvel(): Observable<any[]> {
    return this.http.get<any[]>(this.Url2 + "/marvel");
  }
  getKriminal(): Observable<any[]> {
    return this.http.get<any[]>(this.Url2 + "/kriminal");
  }

  add2(ganre_comics: any) {
    this.http.post<any[]>(this.Url2 + "/add", ganre_comics).subscribe();
  }
}
