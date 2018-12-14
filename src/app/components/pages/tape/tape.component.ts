import { Component, OnInit } from "@angular/core";
import { TapeService } from "src/app/services/page/tape/tape.service";
import { trigger, transition, useAnimation } from "@angular/animations";
import { fadeIn } from "ng-animate";

@Component({
  selector: "app-tape",
  templateUrl: "./tape.component.html",
  styleUrls: ["./tape.component.sass"],
  animations: [trigger("fadeIn", [transition("* => *", useAnimation(fadeIn))])]
})
export class TapeComponent implements OnInit {
  bd: any[];
  fadeIn: any;

  constructor(private service: TapeService) {}

  ngOnInit() {
    this.getAll();
  }
  getAll() {
    this.service.getAll().subscribe(data => (this.bd = data));
  }
}
