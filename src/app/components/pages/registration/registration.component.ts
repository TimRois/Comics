import { Component, OnInit } from '@angular/core';
import { trigger, transition, useAnimation } from '@angular/animations';
import { jackInTheBox } from 'ng-animate';
import { rotateOut } from 'ng-animate';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.sass'],
  animations: [
    trigger('jackInTheBox', [transition('* => *', useAnimation(jackInTheBox))]),
    trigger('rotateOut', [transition('* => *', useAnimation(rotateOut))]),
  ],
})
export class RegistrationComponent implements OnInit {

  jackInTheBox: any;
  rotateOut: any;

  constructor() { 
    
  }

  ngOnInit() {
  }

}
