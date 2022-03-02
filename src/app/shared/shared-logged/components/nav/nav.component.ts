// Angular
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'teste-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  @Input() bg!: string;

  constructor() { }

  ngOnInit() {
  }

}
