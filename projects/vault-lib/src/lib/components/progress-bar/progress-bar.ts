import { Component, computed, input, InputSignal, Signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'vault-progress-bar',
  imports: [CommonModule],
  template: `
    <div class="progress-bar">
      <span class="progress" [ngStyle]="{ width: progressValue() + '%' }"></span>
    </div>
  `,
  styleUrl: './progress-bar.scss',
})
export class ProgressBar {
  min: InputSignal<number> = input<number>(0);
  max: InputSignal<number> = input<number>(100);
  type: InputSignal<'fill' | 'block'> = input<'fill' | 'block'>('fill');
  progress: InputSignal<number> = input.required<number>();

  readonly progressValue: Signal<number> = computed(() => {
    const range: number = this.max() - this.min();
    if (this.progress() > this.max()) return this.max();
    return range === 0 ? 0 : ((this.progress() - this.min()) / range) * 100;
  });
}
