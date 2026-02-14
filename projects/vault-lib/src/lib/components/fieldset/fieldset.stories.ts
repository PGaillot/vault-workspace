import type { Meta, StoryObj } from '@storybook/angular';
import { Fieldset } from './fieldset';

const meta: Meta<Fieldset> = {
  title: 'Components/Fieldset',
  component: Fieldset,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<Fieldset>;

export const Default: Story = {
  args: {},
};

export const Legend: Story = {
  args: {
    legend: 'legend',
  },
};
