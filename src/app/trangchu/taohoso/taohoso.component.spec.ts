import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaohosoComponent } from './taohoso.component';

describe('TaohosoComponent', () => {
  let component: TaohosoComponent;
  let fixture: ComponentFixture<TaohosoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaohosoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaohosoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
