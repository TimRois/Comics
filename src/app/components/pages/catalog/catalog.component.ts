import { Component, OnInit } from "@angular/core";
import { CatalogService } from "src/app/services/page/catalog/catalog.service";
import { trigger, transition, useAnimation } from "@angular/animations";
import { fadeIn } from "ng-animate";
import { Router } from "@angular/router";

@Component({
  selector: "app-catalog",
  templateUrl: "./catalog.component.html",
  styleUrls: ["./catalog.component.sass"],
  animations: [trigger("fadeIn", [transition("* => *", useAnimation(fadeIn))])]
})
export class CatalogComponent implements OnInit {
  req: any[];
  fadeIn: any;

  constructor(private service: CatalogService, private route: Router) {}

  ngOnInit() {
    this.getAll();
  }
  getAll() {
    this.service.getAll().subscribe(data => (this.req = data));
  }

  getFantastic() {
    this.service.getFantastic().subscribe(data => (this.req = data));
  }
  getDrama() {
    this.service.getDrama().subscribe(data => (this.req = data));
  }
  getMarvel() {
    this.service.getMarvel().subscribe(data => (this.req = data));
  }
  getDc() {
    this.service.getDc().subscribe(data => (this.req = data));
  }
  getKriminal() {
    this.service.getKriminal().subscribe(data => (this.req = data));
  }
  view_release(id_comics: number) {
    this.route.navigate(["release", id_comics]);
  }
  getGanre(ganre): any {
    if (!ganre) return "load";
    if (!ganre.name) {
      let ganres = [];
      for (let i = 0; i < ganre.length; i++) ganres.push(ganre[i].name);
      return ganres;
    }
    return ganre.name;
  }
}
