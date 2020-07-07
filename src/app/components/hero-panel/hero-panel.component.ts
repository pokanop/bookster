import { Component, OnInit, Input } from '@angular/core';
import { Person } from '@src/app/models/person';

@Component({
  selector: 'app-hero-panel',
  templateUrl: './hero-panel.component.html',
  styleUrls: ['./hero-panel.component.scss'],
})
export class HeroPanelComponent implements OnInit {
  @Input() person: Person;
  @Input() showsKind: boolean = true;

  constructor() {}

  ngOnInit(): void {}
}
