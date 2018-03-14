import { Directive,ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appBoton]'
})
export class BotonDirective {

  @Input() sizeColor: String;
  @Input() fontSize: String;


  constructor(private el: ElementRef) {
  }
  @HostListener('mouseover') agrandar() {
    this.el.nativeElement.style.color = this.sizeColor;
  }

}
