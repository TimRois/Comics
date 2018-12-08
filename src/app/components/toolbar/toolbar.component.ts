import { Component, OnInit } from '@angular/core';
import { trigger, transition, useAnimation } from '@angular/animations';
import { tada } from 'ng-animate';
@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.sass'],
  animations: [
    trigger('tada', [transition('on <=> in', useAnimation(tada))])
  ],
})
export class ToolbarComponent implements OnInit {

  tada: any;

  links = [
    {path: 'main', title: 'Главная'},
    {path: 'catalog', title: 'Каталог'},
    {path: 'tape', title: 'Лента'},
    {path: 'personal-cabinet', title: 'Личный кабинет'},
    {path: 'autorization', title: 'Вход'},
    {path: 'registration', title: 'Регистрация'},

  ]

  constructor() { }

  ngOnInit() {
  }

}
