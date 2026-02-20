import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VaultLib } from './vault-lib';

describe('VaultLib', () => {
  let component: VaultLib;
  let fixture: ComponentFixture<VaultLib>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VaultLib]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VaultLib);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
