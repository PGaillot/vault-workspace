import { Component, input, InputSignal, signal } from '@angular/core';
import { VaultFile } from '../../models/vault-file.type';
import { VaultFolder } from '../../models/vault-folder.type';
import { SystemIcon } from '../system-icon/system-icon';

@Component({
  selector: 'vault-space',
  imports: [SystemIcon],
  templateUrl: './space.html',
  styleUrl: './space.scss',
})
export class Space {
  content: InputSignal<(VaultFile | VaultFolder)[]> = input.required<(VaultFile | VaultFolder)[]>();
}
