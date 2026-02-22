import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  InputSignal,
  output,
  OutputEmitterRef,
  Signal,
} from '@angular/core';
import { VaultApplication } from '../../models/application.type';
import { CdkDrag } from '@angular/cdk/drag-drop';
import { VaultFolder } from '../../models/vault-folder.type';
import { VaultFile } from '../../models/vault-file.type';

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
            [src]="'/icons/' + application().icon + '.svg'"
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
  element: InputSignal<VaultFile | VaultFolder> = input.required<VaultFile | VaultFolder>();
  vaultCdkDragBoundary: InputSignal<string | undefined> = input<string>();
  doubleClick: OutputEmitterRef<void> = output<void>();

  application: Signal<VaultApplication> = computed<VaultApplication>(() => {
    if (this.element().type === 'application') {
      const fileContent: VaultFile = this.element() as VaultFile;
      return fileContent.appliaction;
    }

    const folderContent: VaultFolder = this.element() as VaultFolder;
    const folder: VaultApplication = {
      name: folderContent.name,
      id: folderContent.id,
      icon: 'folder',
    };
    return folder;
  });
}
