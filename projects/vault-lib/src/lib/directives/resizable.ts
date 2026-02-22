import { Directive, ElementRef, inject } from '@angular/core';
import { Position } from '../models/position.type';

@Directive({
  selector: '[vaultResizable]',
})
export class Resizable {
  element: ElementRef<HTMLElement> = inject(ElementRef);

  constructor() {}

  ngAfterViewInit(): void {
    // Crée un nouveau parent
    const wrapperDiv: HTMLDivElement = document.createElement('div');
    wrapperDiv.classList.add('resize-wrapper');

    wrapperDiv.style.display = 'inline-grid';
    wrapperDiv.style.background = 'khaki';
    wrapperDiv.style.gridTemplateRows = '4px auto 4px';
    wrapperDiv.style.gridTemplateColumns = '4px auto 4px';

    // Place l'élément ciblé dans le nouveau parent
    const el: HTMLElement = this.element.nativeElement;
    const parent: ParentNode | null = el.parentNode;
    if (parent) {
      parent.replaceChild(wrapperDiv, el);
      el.style.gridRow = '2';
      el.style.gridColumn = '2';
      el.style.background = 'green';

      const resizeRightBar: HTMLDivElement = this.createBar('right');
      const resizeLeftBar: HTMLDivElement = this.createBar('left');
      const resizeTopBar: HTMLDivElement = this.createBar('top');
      const resizeBottomBar: HTMLDivElement = this.createBar('bottom');

      wrapperDiv.appendChild(resizeTopBar);
      wrapperDiv.appendChild(resizeRightBar);
      wrapperDiv.appendChild(resizeBottomBar);
      wrapperDiv.appendChild(resizeLeftBar);
      wrapperDiv.appendChild(el);
    }
  }

  createBar(postion: Position): HTMLDivElement {
    const bar: HTMLDivElement = document.createElement('div');
    switch (postion) {
      case 'top':
        bar.style.gridRow = '1';
        bar.style.background = 'hotpink';
        break;
      case 'right':
        bar.style.gridColumn = '3';
        bar.style.background = 'teal';
        break;
      case 'bottom':
        bar.style.gridRow = '3';
        bar.style.background = 'orange';
        break;
      case 'left':
        bar.style.gridColumn = '1';
        bar.style.background = 'blue';
        break;
    }

    if (['bottom', 'top'].includes(postion)) {
      bar.style.gridColumn = '2';
      bar.style.cursor = 'ns-resize';
      bar.style.height = '4px';
      bar.style.widows = '100%';
    } else {
      bar.style.gridRow = '2';
      bar.style.cursor = 'ew-resize';
      bar.style.height = '100%';
      bar.style.widows = '4px';
    }

    return bar;
  }
}
