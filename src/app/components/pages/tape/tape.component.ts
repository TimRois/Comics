import { Component, OnInit } from '@angular/core';
import { TapeService } from 'src/app/services/tape/tape.service';

@Component({
  selector: 'app-tape',
  templateUrl: './tape.component.html',
  styleUrls: ['./tape.component.sass']
})
export class TapeComponent implements OnInit {

  bd: any[];

  constructor(private service: TapeService) { }

  ngOnInit() {
    this.getAll();
  }
  getAll(){
    this.service.getAll().subscribe(data => this.bd = data);
  }

}
