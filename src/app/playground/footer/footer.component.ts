import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'pg-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  @Input() owner: string = 'Nobody'

  constructor() {}

  ngOnInit() {}
}
