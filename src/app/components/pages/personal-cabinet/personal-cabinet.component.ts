import { Component, OnInit } from "@angular/core";
import { UserRoleService } from "src/app/services/user_role/user-role.service";
import { Router } from "@angular/router";
import { AvailableReleaseService } from "src/app/services/available_release/available-release.service";
import { subscribeOn } from "rxjs/operators";
import { CatalogService } from "src/app/services/page/catalog/catalog.service";
import { trigger, transition, useAnimation } from "@angular/animations";
import { fadeIn } from "ng-animate";

@Component({
  selector: "app-personal-cabinet",
  templateUrl: "./personal-cabinet.component.html",
  styleUrls: ["./personal-cabinet.component.sass"],
  animations: [trigger("fadeIn", [transition("* => *", useAnimation(fadeIn))])]
})
export class PersonalCabinetComponent implements OnInit {
  constructor(
    private service: UserRoleService,
    private service2: AvailableReleaseService,
    private service3: CatalogService,
    private route: Router
  ) {}
  name: string;
  id_user: number;
  req: any[];
  fadeIn: any;
  ngOnInit() {
    this.getAvailable();
  }

  test() {
    alert(this.service.getCurrentUser());
    alert(this.service.loggedIn);
    alert(this.name);
  }

  getAvailable() {
    //this.service2.GetAvail().subscribe(date => this.req == date);
  }
  logout() {
    this.service.logout();
    //alert("polzovatel vishel");
    this.route.navigate(["autorization"]);
  }
  view_release(id_comics: number) {
    this.route.navigate(["release", id_comics]);
  }
}
