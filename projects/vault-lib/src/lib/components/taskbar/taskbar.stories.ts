import { Meta, StoryObj } from '@storybook/angular';
import { Taskbar } from './taskbar';

const meta: Meta = {
  component: Taskbar,
  title: 'Components/Taskbar',
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<Taskbar>;

export const Defaut: Story = {
  args: {
    items: [
      {
        name: 'Documents',
      },
    ],
  },
};

export const WirhItems: Story = {
  args: {
    items: [
      {
        name: 'Documents',
      },
      {
        name: 'Fichier',
      },
      {
        name: 'VsCode',
      },
      {
        name: 'Discord',
      },
    ],
  },
};
