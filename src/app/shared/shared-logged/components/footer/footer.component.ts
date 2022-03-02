// Angular
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'teste-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  @Input() cor!: string;
  @Input() border!: string;
  @Input() texto!: string;

  constructor() { }

  ngOnInit() {
  }

}
