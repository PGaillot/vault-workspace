import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { Button } from './button';

const meta: Meta<Button> = {
  title: 'Components/Button',
  component: Button,
  decorators: [
    moduleMetadata({
      imports: [Button],
    }),
  ],
  tags: ['autodocs'],
  args: {
    type: 'primary',
  },
  argTypes: {
    type: {
      control: 'radio',
      options: ['primary', 'secondary'],
    },
  },
};

export default meta;
type Story = StoryObj<Button>;

export const Primary: Story = {
  args: {
    type: 'primary',
  },
  render: (args) => ({
    props: args,
    template: `<vault-button [type]="type">Primary Button</vault-button>`,
  }),
};

export const Secondary: Story = {
  args: {
    type: 'secondary',
  },
  render: (args) => ({
    props: args,
    template: `<vault-button [type]="type">Secondary Button</vault-button>`,
  }),
};
