import { Component, computed, input, InputSignal, signal, Signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'vault-progress-bar',
  imports: [CommonModule],
  template: `
    <div class="progress-bar">
      @if (type() === 'fill') {
        <span class="progress" [ngStyle]="{ width: progressValue() + '%' }"></span>
      } @else {
        @for (block of blocks(); track $index) {
          <span class="block" [class.filled]="block.filled"></span>
        }
      }
    </div>
  `,
  styleUrl: './progress-bar.scss',
})
export class ProgressBar {
  min: InputSignal<number> = input<number>(0);
  max: InputSignal<number> = input<number>(100);
  type: InputSignal<'fill' | 'block'> = input<'fill' | 'block'>('fill');
  progress: InputSignal<number> = input.required<number>();

  private readonly blocksCount: number = 40;

  readonly blocks = computed(() => {
    const filledBlocksCount: number = this.progress() > this.max() 
      ? this.blocksCount 
      : Math.floor((this.progressValue() / 100) * this.blocksCount);
    return Array.from({ length: this.blocksCount }, (_, i) => ({ filled: i < filledBlocksCount }));
  });

  readonly progressValue: Signal<number> = computed(() => {
    const range: number = this.max() - this.min();
    if (this.progress() > this.max()) return 100;
    return range === 0 ? 0 : ((this.progress() - this.min()) / range) * 100;
  });
}
