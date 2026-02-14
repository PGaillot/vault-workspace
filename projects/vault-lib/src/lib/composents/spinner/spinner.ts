import { CommonModule } from '@angular/common';
import { Component, input, InputSignal } from '@angular/core';

export type SpinnerType = 'gear';

@Component({
  selector: 'vault-spinner',
  imports: [CommonModule],
  template: `<img
    class="spinner"
    [ngStyle]="{ 'animation-duration': speed() + 'ms' }"
    [src]="type() + '.svg'"
  />`,
  styleUrl: './spinner.scss',
})
export class Spinner {
  type: InputSignal<SpinnerType> = input<SpinnerType>('gear');
  speed: InputSignal<number> = input<number>(5000);
}
