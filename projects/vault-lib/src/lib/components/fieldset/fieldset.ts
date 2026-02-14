import { Component, input, InputSignal } from '@angular/core';

@Component({
  selector: 'vault-fieldset',
  imports: [],
  template: `<fieldset>
    @if (legend()) {
      <legend>{{ legend() }}</legend>
    }
    <ng-content></ng-content>
  </fieldset>`,
  styleUrl: './fieldset.scss',
})
export class Fieldset {
  legend: InputSignal<string | undefined> = input<string | undefined>();
}
