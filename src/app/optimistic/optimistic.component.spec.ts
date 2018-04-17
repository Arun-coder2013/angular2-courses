import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptimisticComponent } from './optimistic.component';

describe('OptimisticComponent', () => {
  let component: OptimisticComponent;
  let fixture: ComponentFixture<OptimisticComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptimisticComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptimisticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
