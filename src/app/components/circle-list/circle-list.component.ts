import { Component, OnInit, Input } from '@angular/core';
import { Person } from '@src/app/models/person';

@Component({
  selector: 'app-circle-list',
  templateUrl: './circle-list.component.html',
  styleUrls: ['./circle-list.component.scss'],
})
export class CircleListComponent implements OnInit {
  @Input() people: Person[];

  constructor() {}

  ngOnInit(): void {}
}
