import { Meta, StoryObj } from '@storybook/angular';
import { ProgressBar } from './progress-bar';

const meta: Meta<ProgressBar> = {
  component: ProgressBar,
  title: 'Components/Progress bar',
  argTypes: {
    type: {
      control: 'radio',
      options: ['fill', 'block'],
    },
    min: {
      control: 'number',
    },
    max: {
      control: 'number',
    },
    progress: {
      control: 'number',
    },
  },
  args: {
    type: 'fill',
    min: 1,
    max: 100,
    progress: 30,
  },
};

export default meta;

type Story = StoryObj<ProgressBar>;

export const Default: Story = {
  args: {
    progress: 30,
    type: "fill"
  },
};

export const Block: Story = {
  args: {
    type: "block",
    min: 1,
    max: 100,
    progress: 40
  }
};
