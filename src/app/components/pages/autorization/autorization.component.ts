import { Component, OnInit } from '@angular/core';
import { trigger, transition, useAnimation } from '@angular/animations';
import { jackInTheBox } from 'ng-animate';

@Component({
  selector: 'app-autorization',
  templateUrl: './autorization.component.html',
  styleUrls: ['./autorization.component.sass'],
  animations: [
    trigger('jackInTheBox', [transition('* => *', useAnimation(jackInTheBox))])
  ],
})
export class AutorizationComponent implements OnInit {

  jackInTheBox: any;

  constructor() { }

  ngOnInit() {
  }

}
