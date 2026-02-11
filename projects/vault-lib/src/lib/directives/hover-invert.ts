import { Directive, ElementRef, inject } from '@angular/core';

@Directive({
  selector: '[vaultHoverBorder]',
})
export class HoverBorder {
  private element: ElementRef<HTMLElement> = inject(ElementRef);
  private readonly borderDirectiveClassName: string = 'hover-border-directive';

  ngOnInit(): void {
    if (!this.element) throw new Error('Hover Border Directive, have not element.');
    const isBordered: boolean = this.element.nativeElement.classList.contains(
      this.borderDirectiveClassName,
    );
    if (isBordered) {
      this.element.nativeElement.classList.remove(this.borderDirectiveClassName);
      return;
    }
    this.element.nativeElement.classList.add(this.borderDirectiveClassName);
  }
}
