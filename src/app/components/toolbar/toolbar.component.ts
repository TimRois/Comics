import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.sass']
})
export class ToolbarComponent implements OnInit {


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
