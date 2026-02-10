import { CommonModule } from '@angular/common';
import {
  Component,
  Input,
  Output,
  EventEmitter,
  input,
  InputSignal,
  output,
  OutputEmitterRef,
} from '@angular/core';

@Component({
  selector: 'vault-button',
  standalone: true,
  imports: [CommonModule],
  styleUrl: './button.scss',
  template: ` <button
    type="button"
    (click)="onClick.emit($event)"
    [ngClass]="classes"
    [ngStyle]="{ 'background-color': backgroundColor }"
  >
    {{ label() }}
  </button>`,
})
export class ButtonComponent {
  /** Is this the principal call to action on the page? */
  primary: InputSignal<boolean> = input<boolean>(false);

  /** What background color to use */
  backgroundColor: InputSignal<string | undefined> = input<string | undefined>(undefined);

  label: InputSignal<string> = input.required<string>();

  /** Optional click handler */
  onClick: OutputEmitterRef<MouseEvent> = output();

  public get classes(): string[] {
    const mode: string = 'storybook-button--' + this.primary() ? 'primary' : 'secondary';
    return ['storybook-button', mode];
  }
}
