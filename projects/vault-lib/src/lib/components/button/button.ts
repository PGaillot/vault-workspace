import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  InputSignal,
  output,
  OutputEmitterRef,
} from '@angular/core';

type ButtonType = 'primary' | 'secondary';

@Component({
  selector: 'vault-button',
  standalone: true,
  imports: [],
  styleUrl: './button.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: ` <button type="button" (click)="onClick.emit($event)" class="vault-button">
    <ng-content>Button</ng-content>
  </button>`,
  host: {
    '[class.vault-button--primary]': 'isPrimary()',
    '[class.vault-button--secondary]': 'isSecondary()',
  },
})
export class Button {
  type: InputSignal<ButtonType> = input<ButtonType>('primary');

  isPrimary = computed(() => {
    return this.type() === 'primary';
  });

  isSecondary = computed(() => {
    return this.type() === 'secondary';
  });

  onClick: OutputEmitterRef<MouseEvent> = output();
}
