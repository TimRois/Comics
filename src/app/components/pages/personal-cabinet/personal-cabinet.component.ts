import { Component, OnInit } from "@angular/core";
import { UserRoleService } from "src/app/services/user_role/user-role.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-personal-cabinet",
  templateUrl: "./personal-cabinet.component.html",
  styleUrls: ["./personal-cabinet.component.sass"]
})
export class PersonalCabinetComponent implements OnInit {
  constructor(private service: UserRoleService, private route: Router) {}

  ngOnInit() {}

  logout() {
    this.route.navigate(["autorization"]);
  }
}
