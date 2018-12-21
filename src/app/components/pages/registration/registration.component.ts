import { Component, OnInit } from "@angular/core";
import { trigger, transition, useAnimation } from "@angular/animations";
import { jackInTheBox } from "ng-animate";
import { rotateOut } from "ng-animate";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { UserRoleService } from "src/app/services/user_role/user-role.service";

@Component({
  selector: "app-registration",
  templateUrl: "./registration.component.html",
  styleUrls: ["./registration.component.sass"],
  animations: [
    trigger("jackInTheBox", [transition("* => *", useAnimation(jackInTheBox))]),
    trigger("rotateOut", [transition("* => *", useAnimation(rotateOut))])
  ]
})
export class RegistrationComponent implements OnInit {
  jackInTheBox: any;
  rotateOut: any;
  myFirstReactiveForm: FormGroup;
  name: string = "";
  password: number;
  email: string = "";

  constructor(
    private service: UserRoleService,
    private fb: FormBuilder,
    private route: Router
  ) {}

  ngOnInit() {
    this.initForm();
  }
  initForm() {
    this.myFirstReactiveForm = this.fb.group({
      name: ["", [Validators.required]],
      password: ["", [Validators.required, Validators.minLength(6)]],
      email: ["", [Validators.required, Validators.email]]
    });
  }
  addUser() {
    this.service.add({
      name: this.name,
      password: this.password,
      email: this.email
    });
    this.route.navigate(["autorization"]);
  }
  isControlInvalid(controlName: string): boolean {
    const control = this.myFirstReactiveForm.controls[controlName];
    const result = control.invalid && control.touched;
    return result;
  }
}
