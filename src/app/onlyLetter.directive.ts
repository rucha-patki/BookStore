import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appOnlyLetter]'
})
export class OnlyLetterDirective {
  constructor(private e1: ElementRef) {}

  @Input() appOnlyLetter: boolean=false;

  @HostListener('keydown', ['$event']) onKeydown(event:any) {
    var e = <KeyboardEvent>event;
    if (
      this.appOnlyLetter &&
      (!e.shiftKey || !(e.keyCode < 48 || e.keyCode > 57)) &&
      !(e.keyCode < 96 || e.keyCode > 105)
    ) {
      e.preventDefault();
    }
  }
}