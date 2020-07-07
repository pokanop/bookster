import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-circle-button',
  templateUrl: './circle-button.component.html',
  styleUrls: ['./circle-button.component.scss'],
})
export class CircleButtonComponent implements OnInit {
  @Input() route: string;
  @Input() id: string;
  @Input() image: URL;

  constructor() {}

  ngOnInit(): void {}
}
