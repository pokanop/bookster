import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hero-image',
  templateUrl: './hero-image.component.html',
  styleUrls: ['./hero-image.component.scss'],
})
export class HeroImageComponent implements OnInit {
  @Input() image: URL;
  @Input() size: ImageSize;

  constructor() {}

  ngOnInit(): void {}
}

export enum ImageSize {
  Small = 'sm',
  Medium = 'md',
  Large = 'lg',
}
