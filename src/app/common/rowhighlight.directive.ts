import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class RowHighlightDirective {

  @Input ('appHighlight') highlightColor:string;

  constructor(public elementRef:ElementRef) { 
    this.highlightColor = "";
  }

  @HostListener('mouseover') mouseoverMethod() {
    console.log(this.highlightColor);
    this.changeColor("black",  this.highlightColor || "lightgreen");
  }

  @HostListener('mouseleave') mouseleaveMethod() {
    this.changeColor("black", "white");
  }
 
public changeColor(color: string, bgColor: string){
  this.elementRef.nativeElement.style.color = color;
  this.elementRef.nativeElement.style.backgroundColor = bgColor;
}


}
