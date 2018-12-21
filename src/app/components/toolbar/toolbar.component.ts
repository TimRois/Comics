import { Component, OnInit } from "@angular/core";
import { trigger, transition, useAnimation } from "@angular/animations";
import { tada } from "ng-animate";
import { UserRoleService } from "src/app/services/user_role/user-role.service";
import { LinkService } from "src/app/services/links/link.service";
@Component({
  selector: "app-toolbar",
  templateUrl: "./toolbar.component.html",
  styleUrls: ["./toolbar.component.sass"],
  animations: [trigger("tada", [transition("on <=> in", useAnimation(tada))])]
})
export class ToolbarComponent implements OnInit {
  tada: any;

  links = [];

  constructor(
    private linkService: LinkService,
    private service: UserRoleService
  ) {}

  ngOnInit() {}
  getLinks(): any[] {
    this.linkService.getLinks().subscribe(data => (this.links = data));
    return this.links;
  }
  ChackAut(): boolean {
    return this.service.loggedIn;
  }
}
