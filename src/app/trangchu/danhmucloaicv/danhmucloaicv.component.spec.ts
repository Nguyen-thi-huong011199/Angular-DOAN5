import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DanhmucloaicvComponent } from './danhmucloaicv.component';

describe('DanhmucloaicvComponent', () => {
  let component: DanhmucloaicvComponent;
  let fixture: ComponentFixture<DanhmucloaicvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DanhmucloaicvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DanhmucloaicvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
