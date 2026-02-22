import { Meta, StoryObj } from '@storybook/angular';
import { SystemWindow } from './system-window';
import { VaultApplication } from '../../models/model.index';

const meta: Meta<SystemWindow> = {
  component: SystemWindow,
  title: 'Components/System window',
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<SystemWindow>;

const VSCODE: VaultApplication = {
  name: 'VsCode',
  icon: 'vsCode',
  id: 'item-0',
};

const Documents: VaultApplication = {
  name: 'Documents',
  icon: 'folder',
  id: 'docmuent',
};

export const Default: Story = {
  args: {
    application: VSCODE,
    content: [],
  },
};

export const WithContent: Story = {
  args: {
    application: Documents,
    content: [
      {
        type: 'folder',
        name: 'Document',
        id: 'document-folder',
        protected: false,
        content: [],
      },
      {
        type: 'folder',
        name: 'Demo',
        id: 'demo-folder',
        protected: false,
        content: [],
      },
    ],
  },
};
