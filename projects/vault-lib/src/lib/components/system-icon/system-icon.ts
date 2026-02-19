import { ChangeDetectionStrategy, Component, input, InputSignal } from '@angular/core';
import { VaultApplication } from '../../models/application.type';
import { CdkDrag } from '@angular/cdk/drag-drop';

@Component({
  selector: 'vault-system-icon',
  imports: [CdkDrag],
  template: `
    <div class="system-icon" cdkDrag>
      <div class="icon-wrapper">
        @if (application().icon) {
          <img [src]="application().icon" [alt]="application().name + ' application icon.'" />
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
}
