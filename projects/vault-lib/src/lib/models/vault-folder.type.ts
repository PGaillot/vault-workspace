import { VaultFile } from './vault-file.type';

export type VaultFolder = {
  type: 'folder';
  name: string;
  protected: boolean;
  id: string;
  content: (VaultFolder | VaultFile)[];
};
