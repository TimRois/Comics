import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { JwtHelperService } from "@auth0/angular-jwt";

@Injectable({
  providedIn: "root"
})
export class UserRoleService {
  commonUrl: string = "http://localhost:8080/role_users";
  currentUser: any;

  constructor(private http: HttpClient, private jwt: JwtHelperService) {}

  getAll(): Observable<any[]> {
    return this.http.get<any[]>(this.commonUrl + "/all");
  }

  getUser(userId: number): Observable<any> {
    return this.http.get<any[]>(this.commonUrl + "/user", {
      params: {
        id: userId.toString()
      }
    });
  }

  login(user: any): Observable<boolean> {
    return this.http
      .post<{ token: string }>(this.commonUrl + "/logIn", user)
      .pipe(
        map(result => {
          localStorage.setItem("token", result.token);
          return true;
        })
      );
  }

  logout() {
    localStorage.removeItem("token");
  }

  get loggedIn(): boolean {
    return localStorage.getItem("token") !== null;
  }

  getCurrentUser() {
    console.log(this.jwt.decodeToken(localStorage.getItem("token")));
    return this.jwt.decodeToken(localStorage.getItem("token"));
  }

  add(userRole: any) {
    this.http.post<any[]>(this.commonUrl + "/add", userRole).subscribe();
  }
}
