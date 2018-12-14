import { Component, OnInit } from "@angular/core";
import { MainService } from "src/app/services/page/main/main.service";

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.sass"]
})
export class MainComponent implements OnInit {
  bd: any[];
  bd2: any[];

  constructor(private service: MainService) {}

  ngOnInit() {
    this.getNew();
    this.getTop();
  }
  getTop() {
    this.service.getTop().subscribe(data => (this.bd = data));
  }
  getNew() {
    this.service.getNew().subscribe(data => (this.bd2 = data));
  }
}
