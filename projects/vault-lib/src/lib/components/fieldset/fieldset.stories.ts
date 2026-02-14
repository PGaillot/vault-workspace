import type { Meta, StoryObj } from '@storybook/angular';
import { fn } from 'storybook/test';
import { Fieldset } from './fieldset';

const meta: Meta<Fieldset> = {
  title: 'Components/Fieldset',
  component: Fieldset,
  tags: ['autodocs'],
  argTypes: {},
  args: { onClick: fn() },
};

export default meta;
type Story = StoryObj<Fieldset>;

export const Default: Story = {
  args: {},
};
