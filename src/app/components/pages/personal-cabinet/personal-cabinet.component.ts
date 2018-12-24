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
    private Avail_rel: AvailableReleaseService,
    private catService: CatalogService,
    private route: Router
  ) {}
  name: string;
  id_user: any;
  req: any[];
  fadeIn: any;
  ngOnInit() {
    this.id_user = this.service.getCurrentUser();
    this.getAvailable();
    alert("Привет " + this.id_user.user.name + " !)");
  }
  image(path: string): string {
    console.log(path);
    return "../../../../" + path + "/1.jpg";
  }

  getAvailable() {
    this.Avail_rel.GetAvail(this.id_user.user.id).subscribe(
      date => (this.req = date)
    );
  }
  logout() {
    this.service.logout();
    //alert("polzovatel vishel");
    this.route.navigate(["autorization"]);
  }
  openRelease(releaseId: number) {
    console.log(releaseId);
    this.route.navigate(["releaseView", releaseId]);
  }
}
