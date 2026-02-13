import { Component, input, InputSignal } from '@angular/core';

export type SpinnerType = 'gear';

@Component({
  selector: 'vault-spinner',
  imports: [],
  template: `<img [src]="'assets/' + this.type + '.svg'" />`,
  styleUrl: './spinner.scss',
})
export class Spinner {
  type: InputSignal<SpinnerType> = input<SpinnerType>('gear');
}
