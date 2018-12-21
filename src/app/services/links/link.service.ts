import { Injectable } from "@angular/core";
import { UserRoleService } from "../user_role/user-role.service";
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class LinkService {
  links = [];

  constructor(private service: UserRoleService) {}

  getLinks(): Observable<any[]> {
    this.links = [];
    this.links.push({ path: "main", title: "Главная" });
    this.links.push({ path: "catalog", title: "Каталог" });
    this.links.push({ path: "registration", title: "Регистрация" });
    this.links.push({ path: "autorization", title: "Вход" });
    if (this.service.getCurrentUser()) {
      this.links.push({ path: "personal-cabinet", title: "Личный кабинет" });
    }
    return of(this.links);
  }
}
