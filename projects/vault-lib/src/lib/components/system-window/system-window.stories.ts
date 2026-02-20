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

export const Default: Story = {
  args: {
    application: VSCODE,
  },
};
