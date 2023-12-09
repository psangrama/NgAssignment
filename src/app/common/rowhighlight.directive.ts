import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class RowHighlightDirective {

  @HostListener('mouseover') mouseoverMethod() {
    this.changeColor("black", "yellow");
  }

  @HostListener('mouseleave') mouseleaveMethod() {
    this.changeColor("black", "white");
  }

  constructor(public elementRef:ElementRef) { 

  }
  
public changeColor(color: string, bgColor: string){
  //console.log(this.elementRef.nativeElement.style.color);
  //this.elementRef.nativeElement.style.color = color;
  console.log(this.elementRef.nativeElement.style.backgroundColor);
  this.elementRef.nativeElement.style.backgroundColor = "red";
  console.log(this.elementRef.nativeElement.style.backgroundColor);
  
}


}
