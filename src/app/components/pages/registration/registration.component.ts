import { Component, OnInit } from "@angular/core";
import { trigger, transition, useAnimation } from "@angular/animations";
import { jackInTheBox } from "ng-animate";
import { rotateOut } from "ng-animate";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

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
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.initForm();
  }
  initForm() {
    this.myFirstReactiveForm = this.fb.group({
      name: ["", [Validators.required, Validators.pattern(/[А-я]/)]],
      password: ["", [Validators.required, Validators.minLength(6)]],
      email: ["", [Validators.required, Validators.email]]
    });
  }
  isControlInvalid(controlName: string): boolean {
    const control = this.myFirstReactiveForm.controls[controlName];
    const result = control.invalid && control.touched;
    return result;
  }
}
