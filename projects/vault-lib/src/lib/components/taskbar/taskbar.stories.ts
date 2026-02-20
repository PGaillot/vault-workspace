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
  name: 'Documents',
};
const FICHIER: VaultApplication = {
  name: 'Fichier',
};
const VSCODE: VaultApplication = {
  name: 'VsCode',
  icon: 'vsCode',
};
const DISCORD: VaultApplication = {
  name: 'Discord',
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
