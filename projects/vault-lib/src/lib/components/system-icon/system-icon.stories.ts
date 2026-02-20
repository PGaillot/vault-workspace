import { Meta, StoryObj } from '@storybook/angular';
import { SystemIcon } from './system-icon';

const meta: Meta<SystemIcon> = {
  component: SystemIcon,
  title: 'Components/System icon',
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<SystemIcon>;

export const Default: Story = {
  args: {
    application: {
      name: 'VsCode',
      icon: 'vscode',
      id: 'item-0',
    },
  },
};

export const Discord: Story = {
  args: {
    application: {
      name: 'Discord',
      icon: 'discord',
      id: 'item-0',
    },
  },
};
