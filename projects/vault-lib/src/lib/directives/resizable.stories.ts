import { Meta, StoryObj } from '@storybook/angular';
import { Component, Input } from '@angular/core';
import { Resizable } from './resizable';

@Component({
  selector: 'hover-border-demo',
  standalone: true,
  imports: [Resizable],
  styleUrls: ['../styles/index.scss'],
  template: `
    <div style="height: 500px;width:500px">
      <div style="height: 150px;width:250px; border:2px solid red;" vaultResizable></div>
    </div>
  `,
})
class ResizableDirectiveDemo {}

// --- Stories ---

const meta: Meta<ResizableDirectiveDemo> = {
  title: 'Directives/Resizable',
  component: ResizableDirectiveDemo,
  argTypes: {},
};

export default meta;

type Story = StoryObj<ResizableDirectiveDemo>;

export const Default: Story = {
  args: {},
};
