import { Meta, StoryObj } from '@storybook/angular';
import { Component, Input } from '@angular/core';
import { HoverBorder } from './hover-border';

@Component({
  selector: 'hover-border-demo',
  standalone: true,
  imports: [HoverBorder],
  styleUrls: ['../styles/index.scss'],
  template: `
    <div
      style="display:inline-block; position:relative; padding: 8px 14px; background:white;"
      vaultHoverBorder
    >
      {{ text }}
    </div>
  `,
})
class HoverBorderDirectiveDemo {
  @Input() text = 'Survolez-moi pour voir la bordure';
}

// --- Stories ---

const meta: Meta<HoverBorderDirectiveDemo> = {
  title: 'Directives/HoverBorder',
  component: HoverBorderDirectiveDemo,
  argTypes: {
    text: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj<HoverBorderDirectiveDemo>;

export const Default: Story = {
  args: {
    text: 'Survolez-moi pour voir la bordure',
  },
};
