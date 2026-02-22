import { Meta, StoryObj } from '@storybook/angular';
import { SystemIcon } from './system-icon';

const meta: Meta<SystemIcon> = {
  component: SystemIcon,
  title: 'Components/System icon',
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<SystemIcon>;

export const Folder: Story = {
  args: {
    systemContent: {
      type: 'folder',
      name: 'Document',
      id: 'system-folder',
      protected: false,
      content: [],
    },
  },
};

export const Discord: Story = {
  args: {
    systemContent: {
      type: 'application',
      appliaction: {
        name: 'Discord',
        icon: 'discord',
        id: 'item-0',
      },
    },
  },
};
