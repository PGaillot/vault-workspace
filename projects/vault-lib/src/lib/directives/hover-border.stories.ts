import { Meta, StoryObj } from '@storybook/angular';
import { Component, Input } from '@angular/core';
import { HoverBorder } from './hover-border';
import { Button } from '../components/button/button';

@Component({
  selector: 'hover-border-demo',
  standalone: true,
  imports: [HoverBorder, Button],
  styleUrls: ['../styles/index.scss'],
  template: `<vault-button vaultHoverBorder> {{ text }}</vault-button> `,
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
