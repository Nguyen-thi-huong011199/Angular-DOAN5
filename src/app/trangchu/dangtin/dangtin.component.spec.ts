import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DangtinComponent } from './dangtin.component';

describe('DangtinComponent', () => {
  let component: DangtinComponent;
  let fixture: ComponentFixture<DangtinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DangtinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DangtinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
