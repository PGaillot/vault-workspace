import type { Meta, StoryObj } from '@storybook/angular';
import { Spinner } from './spinner';

const meta: Meta<Spinner> = {
  component: Spinner,
  title: 'Components/Spinner',
  tags: ['autodocs'],
  argTypes: {
    timingFunction: {
      control: 'radio',
      options: ['ease-in-out', 'linear'],
    },
    duration: {
      control: 'number',
      description: 'milliseconds',
    },
  },
  args: {
    duration: 5000,
  },
};

export default meta;

type Story = StoryObj<Spinner>;

export const Default: Story = {
  args: {
    type: 'gear',
  },
};
