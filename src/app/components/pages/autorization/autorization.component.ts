import { Component, OnInit } from "@angular/core";
import { trigger, transition, useAnimation } from "@angular/animations";
import { UserRoleService } from "src/app/services/user_role/user-role.service";
import { jackInTheBox } from "ng-animate";
import { Router } from "@angular/router";

@Component({
  selector: "app-autorization",
  templateUrl: "./autorization.component.html",
  styleUrls: ["./autorization.component.sass"],
  animations: [
    trigger("jackInTheBox", [transition("* => *", useAnimation(jackInTheBox))])
  ]
})
export class AutorizationComponent implements OnInit {
  jackInTheBox: any;
  user: any;
  name: string = "";
  password: string = "";

  constructor(private service: UserRoleService, private route: Router) {}

  ngOnInit() {}

  login() {
    let user = {
      name: this.name,
      password: this.password
    };
    this.service.login(user).subscribe(users => {
      this.user = users[0];
      this.route.navigate(["main"]);
    });
  }
}
