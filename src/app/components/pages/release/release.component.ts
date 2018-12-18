import { Component, OnInit } from "@angular/core";
import { ReleaseService } from "src/app/services/release/release.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-release",
  templateUrl: "./release.component.html",
  styleUrls: ["./release.component.sass"]
})
export class ReleaseComponent implements OnInit {
  constructor(
    private service: ReleaseService,
    private route: ActivatedRoute,
    private nav: Router
  ) {}

  id_comics: number;

  releases: any[] = [];

  image(path: string): string {
    return "../../../../" + path + "/1.jpg";
  }

  ngOnInit() {
    this.route.params.subscribe(data => {
      this.id_comics = data.id;
      this.service
        .GetRelease(this.id_comics)
        .subscribe(data => (this.releases = data));
    });
  }

  openRelease(releaseId: number) {
    console.log(releaseId);
    this.nav.navigate(["releaseView", releaseId]);
  }
}