import type { Meta, StoryObj } from '@storybook/angular';
import { Spinner } from './spinner';

const meta: Meta<Spinner> = {
  component: Spinner,
  title: 'Components/Spinner',
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<Spinner>;

export const Default: Story = {
  args: {
    type: 'gear',
  },
};
