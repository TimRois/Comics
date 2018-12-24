import { Component, OnInit } from "@angular/core";
import { ReleaseService } from "src/app/services/release/release.service";
import { ActivatedRoute, Router } from "@angular/router";
import { AvailableReleaseService } from "src/app/services/available_release/available-release.service";
import { UserRoleService } from "src/app/services/user_role/user-role.service";

@Component({
  selector: "app-release",
  templateUrl: "./release.component.html",
  styleUrls: ["./release.component.sass"]
})
export class ReleaseComponent implements OnInit {
  constructor(
    private service: ReleaseService,
    private user_role_service: UserRoleService,
    private availService: AvailableReleaseService,
    private route: ActivatedRoute,
    private nav: Router
  ) {}

  id_comics: number;
  id_user: number;
  rel_id: number;

  releases: any[] = [];

  image(path: string): string {
    return "../../../../" + path + "/1.jpg";
  }

  ngOnInit() {
    this.id_user = this.user_role_service.getCurrentUser();
    this.route.params.subscribe(data => {
      this.id_comics = data.id;
      this.service
        .GetRelease(this.id_comics, this.id_user)
        .subscribe(data => (this.releases = data));
    });
  }

  openRelease(releaseId: number) {
    console.log(releaseId);
    this.nav.navigate(["releaseView", releaseId]);
  }
  addAvailRelease(releaseId: number) {
    this.availService
      .add({
        id_user: this.id_user,
        rel_id: releaseId
      })
      .subscribe(() =>
        this.service
          .GetRelease(this.id_comics, this.id_user)
          .subscribe(data => (this.releases = data))
      );
  }
}
