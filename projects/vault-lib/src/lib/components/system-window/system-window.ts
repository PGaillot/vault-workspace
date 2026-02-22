import {
  Component,
  input,
  InputSignal,
  output,
  OutputEmitterRef,
  signal,
  WritableSignal,
} from '@angular/core';
import { CdkDrag, CdkDragHandle, CdkDragMove } from '@angular/cdk/drag-drop';
import { VaultApplication } from '../../models/application.type';
import { VaultFile } from '../../models/vault-file.type';
import { VaultFolder } from '../../models/vault-folder.type';
import { Space } from '../space/space';

@Component({
  selector: 'vault-system-window',
  imports: [CdkDrag, CdkDragHandle, Space],
  templateUrl: './system-window.html',
  styleUrl: './system-window.scss',
})
export class SystemWindow {
  application: InputSignal<VaultApplication> = input.required<VaultApplication>();
  content: InputSignal<(VaultFile | VaultFolder)[]> = input.required<(VaultFile | VaultFolder)[]>();

  close: OutputEmitterRef<void> = output<void>();
  reduce: OutputEmitterRef<void> = output<void>();

  defaultHeight: number = 360;
  defaultWidth: number = 400;
  minWidth: number = 300;
  minHeight: number = 140;

  defaultLeft: number = 0;
  defaultTop: number = 0;
  currentLeft: WritableSignal<number> = signal<number>(this.defaultLeft);
  currentTop: WritableSignal<number> = signal<number>(this.defaultLeft);

  currentHeight: WritableSignal<number> = signal<number>(this.defaultHeight);
  currentWidth: WritableSignal<number> = signal<number>(this.defaultWidth);

  private initialDragabledHeight: number = this.defaultHeight;
  private initialDragabledWidth: number = this.defaultWidth;

  initialDragabledLeft: number = this.defaultLeft;
  initialDragabledTop: number = this.defaultLeft;

  onDragMovedBottom(event: CdkDragMove): void {
    const newHeight: number = event.distance.y + this.initialDragabledHeight;
    if (newHeight >= this.minHeight) {
      this.currentHeight.set(newHeight);
    } else {
      this.currentHeight.set(this.minHeight);
    }
    const element: HTMLElement = event.source.element.nativeElement;
    element.style.transform = 'none';
  }

  onDragMovedBottomEnded(): void {
    this.initialDragabledHeight = this.currentHeight();
  }

  // ----

  onDragMovedRight(event: CdkDragMove): void {
    const newWidth: number = event.distance.x + this.initialDragabledWidth;
    if (newWidth >= this.minWidth) {
      this.currentWidth.set(newWidth);
    } else {
      this.currentWidth.set(this.minWidth);
    }
    const element: HTMLElement = event.source.element.nativeElement;
    element.style.transform = 'none';
  }

  onDragMovedRightEnded(): void {
    this.initialDragabledWidth = this.currentWidth();
  }

  // ---------------------------------------
  onDragStartedLeft(): void {
    this.initialDragabledWidth = this.currentWidth();
    this.initialDragabledLeft = this.currentLeft();
  }

  onDragMovedLeft(event: CdkDragMove): void {
    const newWidth: number = this.initialDragabledWidth - event.distance.x;
    const newLeft: number = this.initialDragabledLeft + event.distance.x;
    if (newWidth >= this.minWidth) {
      this.currentWidth.set(newWidth);
      this.currentLeft.set(newLeft);
    } else {
      this.currentWidth.set(this.minWidth);
    }
    const element: HTMLElement = event.source.element.nativeElement;
    element.style.transform = 'none';
  }

  onDragMovedLeftEnded(): void {
    this.initialDragabledWidth = this.currentWidth();
    this.initialDragabledLeft = this.currentLeft();
  }

  //----------------------------------------

  onDragStartedTop(): void {
    this.initialDragabledHeight = this.currentHeight();
    this.initialDragabledTop = this.currentTop();
  }

  onDragMovedTop(event: CdkDragMove): void {
    const newHeight: number = this.initialDragabledHeight - event.distance.y;
    const newTop: number = this.initialDragabledTop + event.distance.y;
    if (newHeight >= this.minHeight) {
      this.currentHeight.set(newHeight);
      this.currentTop.set(newTop);
    } else {
      this.currentHeight.set(this.minHeight);
    }
    const element: HTMLElement = event.source.element.nativeElement;
    element.style.transform = 'none';
  }

  onDragMovedTopEnded(): void {
    this.initialDragabledHeight = this.currentHeight();
    this.initialDragabledTop = this.currentTop();
  }
}
