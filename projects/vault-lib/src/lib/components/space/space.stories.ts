import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { Space } from './space';

const meta: Meta<Space> = {
  component: Space,
  title: 'Components/Space',
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [Space],
    }),
  ],
};

export default meta;

type Story = StoryObj<Space>;

export const Default: Story = {
  args: {
    content: [
      {
        type: 'folder',
        name: 'Document',
        id: 'document-folder',
        protected: false,
        content: [],
      },
      {
        type: 'folder',
        name: 'Demo',
        id: 'demo-folder',
        protected: false,
        content: [],
      },
    ],
  },
  render: (args) => ({
    props: args,
    template: `
      <div style="width: 400px; height: 400px; border: 1px solid #44FF57; position: relative; color: #44FF57">
        <vault-space [content]="content"></vault-space>
      </div>
    `,
  }),
};
