import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[pokedexImageDimensions]',
})
export class ImageDimensionsDirective implements OnInit {
  constructor(private _elemento: ElementRef) {}

  public ngOnInit() {
    const height = this._elemento.nativeElement.offsetHeight;

    if (height < 200) {
      this._elemento.nativeElement.style.height = '250px';
    }
  }
}
