import { Directive, ElementRef, inject, signal, WritableSignal } from '@angular/core';

@Directive({
  selector: '[vaultHoverBorder]',
  standalone: true,
  host: {
    '(mouseenter)': 'onMouseEnter()',
    '(mouseleave)': 'onMouseLeave()',
  },
})
export class HoverBorder {
  private element: ElementRef<HTMLElement> = inject(ElementRef);
  private readonly borderDirectiveClassName: string = 'hover-border-directive';

  onMouseEnter(): void {
    if (!this.element.nativeElement.classList.contains(this.borderDirectiveClassName))
      this.element.nativeElement.classList.add(this.borderDirectiveClassName);
  }

  onMouseLeave(): void {
    if (this.element.nativeElement.classList.contains(this.borderDirectiveClassName))
      this.element.nativeElement.classList.remove(this.borderDirectiveClassName);
  }
}
