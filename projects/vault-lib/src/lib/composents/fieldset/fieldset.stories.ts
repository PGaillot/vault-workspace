import type { Meta, StoryObj } from '@storybook/angular';
import { fn } from 'storybook/test';
import { Fieldset } from './fieldset';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<Fieldset> = {
  title: 'Components/Fieldset',
  component: Fieldset,
  tags: ['autodocs'],
  argTypes: {},
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#story-args
  args: { onClick: fn() },
};

export default meta;
type Story = StoryObj<Fieldset>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {},
};
