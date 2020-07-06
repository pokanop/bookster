import {
  Directive,
  Renderer2,
  ElementRef,
  Output,
  EventEmitter,
} from '@angular/core';

@Directive({
  selector: '[click.stop]',
})
export class StopPropagationDirective {
  @Output('click.stop') stopPropEvent = new EventEmitter();
  unsubscribe: any;

  constructor(private renderer: Renderer2, private element: ElementRef) {}

  ngOnInit(): void {
    this.unsubscribe = this.renderer.listen(
      this.element.nativeElement,
      'click',
      (event) => {
        event.stopPropagation();
        this.stopPropEvent.emit(event);
      }
    );
  }

  ngOnDestroy(): void {
    this.unsubscribe();
  }
}
