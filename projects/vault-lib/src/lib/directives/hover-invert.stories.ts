import { Meta, StoryObj } from '@storybook/angular';
import { Component, Input } from '@angular/core';
import { HoverBorder } from './hover-border';
import { Button } from '../components/button/button';
import { HoverInvert } from './hover-invert';

@Component({
  selector: 'hover-hover-demo',
  standalone: true,
  imports: [HoverInvert, Button],
  styleUrls: ['../styles/index.scss'],
  template: `<vault-button vaultHoverInvert> {{ text }}</vault-button> `,
})
class HoverInvertDirectiveDemo {
  @Input() text = 'Survolez-moi pour voir la bordure';
}

// --- Stories ---

const meta: Meta<HoverInvertDirectiveDemo> = {
  title: 'Directives/HoverInvert',
  component: HoverInvertDirectiveDemo,
  argTypes: {
    text: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj<HoverInvertDirectiveDemo>;

export const Default: Story = {
  args: {
    text: 'Survolez-moi pour inverser les couleurs',
  },
};
