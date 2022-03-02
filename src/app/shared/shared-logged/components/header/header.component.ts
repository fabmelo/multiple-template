// Angular
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'teste-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() cor!: string;
  @Input() bg!: string;
  @Input() texto!: string;

  constructor() { }

  ngOnInit() {
  }

}
