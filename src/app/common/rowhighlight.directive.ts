import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class RowHighlightDirective {

  @HostListener('mouseover') mouseoverMethod() {
    this.changeColor("black", "lightgreen");
  }

  @HostListener('mouseleave') mouseleaveMethod() {
    this.changeColor("black", "white");
  }

  constructor(public elementRef:ElementRef) { 

  }
  
public changeColor(color: string, bgColor: string){
  this.elementRef.nativeElement.style.color = color;
  this.elementRef.nativeElement.style.backgroundColor = bgColor;
}


}
