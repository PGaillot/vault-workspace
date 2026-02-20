import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  input,
  InputSignal,
  signal,
  WritableSignal,
  effect,
  SimpleChanges,
  SimpleChange,
} from '@angular/core';
import { Button } from '../button/button';
import { DatePipe } from '@angular/common';
import { CdkDropList, CdkDrag, CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { VaultApplication } from '../../models/application.type';

export type TaskbarItem = {
  application: VaultApplication;
};

@Component({
  selector: 'vault-taskbar',
  imports: [Button, CdkDropList, CdkDrag],
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
  localItems: WritableSignal<TaskbarItem[]> = signal([]);

  ngOnInit(): void {
    this.interval = setInterval(() => this.timestamp.update(() => Date.now()), 1000);
    this.localItems.set(this.items());
  }

  drop(event: CdkDragDrop<TaskbarItem[]>) {
    const items = [...this.localItems()];
    moveItemInArray(items, event.previousIndex, event.currentIndex);
    this.localItems.set(items);
  }

  ngOnChanges(changes: SimpleChanges): void {
    const newList: TaskbarItem[] = changes['items'].currentValue;
    if (!Array.isArray(newList)) return;

    const filtered: TaskbarItem[] = this.localItems().filter((item: TaskbarItem) =>
      newList.some((newItem: TaskbarItem) => JSON.stringify(newItem) === JSON.stringify(item)),
    );

    const toAdd: TaskbarItem[] = newList.filter(
      (newItem: TaskbarItem) =>
        !filtered.some((item) => JSON.stringify(item) === JSON.stringify(newItem)),
    );
    this.localItems.set([...filtered, ...toAdd]);
  }
}
