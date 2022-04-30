import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[highlightMouse]'
})
export class HighlightMouseDirective {

  constructor(
    // private _elementRef: ElementRef,
    // private _renderer: Renderer2
  ) {
  }

  @HostListener('mouseenter')
  onMouseOver(){
    // this._elementRef.nativeElement.style.backgroundColor = 'green';
    this.backgroundColor = 'green';
    this.color = 'white';
  }

  @HostListener('mouseleave')
  onMouseLeave(){
    // this._elementRef.nativeElement.style.backgroundColor = 'yellow';
    this.backgroundColor = 'yellow';
    this.color = 'black';
  }

  @HostBinding('style.backgroundColor') backgroundColor = 'yellow';
  @HostBinding('style.color') color = 'black';

}
