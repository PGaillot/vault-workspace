import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  input,
  InputSignal,
  signal,
} from '@angular/core';
import { Button } from '../button/button';
import { DatePipe } from '@angular/common';

export type TaskbarItem = {
  name: string;
};

@Component({
  selector: 'vault-taskbar',
  imports: [Button],
  templateUrl: './taskbar.html',
  styleUrl: './taskbar.scss',
  providers: [DatePipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Taskbar {
  interval?: any;
  timestamp = signal(Date.now());
  datePipe: DatePipe = inject(DatePipe);
  time = computed(() => this.datePipe.transform(this.timestamp(), 'h:mm:ss'));
  date = computed(() => this.datePipe.transform(this.timestamp(), 'M/d/y'));

  items: InputSignal<TaskbarItem[]> = input<TaskbarItem[]>([]);

  ngOnInit(): void {
    this.interval = setInterval(() => this.timestamp.update(() => Date.now()), 1000);
  }
}
