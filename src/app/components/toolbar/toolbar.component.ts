import { Component, OnInit } from "@angular/core";
import { trigger, transition, useAnimation } from "@angular/animations";
import { tada } from "ng-animate";
import { UserRoleService } from "src/app/services/user_role/user-role.service";
@Component({
  selector: "app-toolbar",
  templateUrl: "./toolbar.component.html",
  styleUrls: ["./toolbar.component.sass"],
  animations: [trigger("tada", [transition("on <=> in", useAnimation(tada))])]
})
export class ToolbarComponent implements OnInit {
  tada: any;

  links = [
    { path: "main", title: "Главная" },
    { path: "catalog", title: "Каталог" },
    //  {path: 'tape', title: 'Лента'},
    { path: "personal-cabinet", title: "Личный кабинет" },
    { path: "registration", title: "Регистрация" },
    { path: "autorization", title: "Вход" }
  ];

  constructor(private service: UserRoleService) {}

  ngOnInit() {}
  ChackAut(): boolean {
    return this.service.loggedIn;
  }
}
