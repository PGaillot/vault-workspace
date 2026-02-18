import { Directive, ElementRef, inject } from '@angular/core';

@Directive({
  selector: '[vaultHoverInvert]',
  host: {
    '(mouseenter)': 'onMouseEnter()',
    '(mouseleave)': 'onMouseLeave()',
  },
})
export class HoverInvert {
  onMouseLeave() {
    this.invertColors(this.element.nativeElement);
  }
  onMouseEnter() {
    this.invertColors(this.element.nativeElement);
  }

  private element: ElementRef<HTMLElement> = inject(ElementRef);
  private backgroundColor: string = '#060606';
  private primaryColor: string = '#44FF57';

  private invertColors(HTMLElement: HTMLElement): void {
    console.log(HTMLElement.children);
    if (HTMLElement.style.background === this.primaryColor) {
      HTMLElement.style.background = this.backgroundColor;
    } else if (HTMLElement.style.background === this.backgroundColor) {
      HTMLElement.style.background = this.primaryColor;
    }
    if (HTMLElement.style.color === this.primaryColor) {
      HTMLElement.style.color = this.backgroundColor;
    } else if (HTMLElement.style.color === this.backgroundColor) {
      HTMLElement.style.color = this.primaryColor;
    }

    for (let i = 0; i < HTMLElement.children.length; i++) {
      const element: HTMLElement = HTMLElement.children[i] as HTMLElement;
      this.invertColors(element);
    }
  }

  ngOnInit(): void {
    if (!this.element) throw new Error('Hover Invert element missing');
  }
}
