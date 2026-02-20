import {
  ChangeDetectionStrategy,
  Component,
  input,
  InputSignal,
  output,
  OutputEmitterRef,
} from '@angular/core';
import { VaultApplication } from '../../models/application.type';
import { CdkDrag } from '@angular/cdk/drag-drop';

@Component({
  selector: 'vault-system-icon',
  imports: [CdkDrag],
  template: `
    <div
      class="system-icon"
      cdkDrag
      [cdkDragBoundary]="vaultCdkDragBoundary() || ''"
      (dblclick)="doubleClick.emit()"
    >
      <div class="icon-wrapper">
        @if (application().icon) {
          <img
            [src]="application().icon + '.svg'"
            [alt]="application().name + ' application icon.'"
          />
        }
      </div>
      <label>{{ application().name }}</label>
    </div>
  `,
  styleUrl: './system-icon.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SystemIcon {
  application: InputSignal<VaultApplication> = input.required<VaultApplication>();
  vaultCdkDragBoundary: InputSignal<string | undefined> = input<string>();
  doubleClick: OutputEmitterRef<void> = output<void>();
}
