import { Component } from '@angular/core';

@Component({
  selector: 'lib-fieldset',
  imports: [],
  template: `<fieldset><ng-content></ng-content></fieldset>`,
  styleUrl: './fieldset.scss',
})
export class Fieldset {}
