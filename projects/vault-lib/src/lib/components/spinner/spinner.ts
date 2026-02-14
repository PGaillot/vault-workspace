import { CommonModule } from '@angular/common';
import { Component, input, InputSignal } from '@angular/core';

export type SpinnerType = 'gear';

@Component({
  selector: 'vault-spinner',
  imports: [CommonModule],
  template: `<img
    class="spinner"
    [ngStyle]="{
      'animation-duration': duration() + 'ms',
      'animation-timing-function': timingFunction(),
    }"
    [src]="type() + '.svg'"
  />`,
  styleUrl: './spinner.scss',
})
export class Spinner {
  type: InputSignal<SpinnerType> = input<SpinnerType>('gear');
  timingFunction: InputSignal<'linear' | 'ease-in-out'> = input<'linear' | 'ease-in-out'>('linear');
  duration: InputSignal<number> = input<number>(5000);
}
