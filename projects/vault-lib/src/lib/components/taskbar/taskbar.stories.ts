import { Meta, StoryObj } from '@storybook/angular';
import { Taskbar } from './taskbar';
import { VaultApplication } from '../../models/application.type';

const meta: Meta = {
  component: Taskbar,
  title: 'Components/Taskbar',
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<Taskbar>;

const DOCUMENT: VaultApplication = {
  id: 'item-0',
  name: 'Documents',
};
const FICHIER: VaultApplication = {
  name: 'Fichier',
  id: 'item-1',
};
const VSCODE: VaultApplication = {
  name: 'VsCode',
  icon: 'vsCode',
  id: 'item-2',
};
const DISCORD: VaultApplication = {
  name: 'Discord',
  id: 'item-3',
};

export const Defaut: Story = {
  args: {
    items: [
      {
        application: DOCUMENT,
      },
    ],
  },
};

export const WirhItems: Story = {
  args: {
    items: [
      { application: DOCUMENT },
      { application: FICHIER },
      { application: VSCODE },
      { application: DISCORD },
    ],
  },
};
