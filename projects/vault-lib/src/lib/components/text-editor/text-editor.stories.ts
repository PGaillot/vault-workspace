import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { TextEditor } from './text-editor';
import { SystemWindow } from '../system-window/system-window';

const meta: Meta<TextEditor> = {
  tags: ['autodocs'],
  component: TextEditor,
  title: 'Components/Text editor',
  args: {},
  decorators: [
    moduleMetadata({
      imports: [SystemWindow],
    }),
  ],
  render: (args) => ({
    props: args,
    template: `
      <vault-system-window>
        <vault-text-editor></vault-text-editor>
      </vault-system-window>
    `,
  }),
};

export default meta;

type Story = StoryObj<TextEditor>;

export const Default: Story = {
  args: {},
};
