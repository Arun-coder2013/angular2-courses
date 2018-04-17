import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgClassBindingComponent } from './ng-class-binding.component';

describe('NgClassBindingComponent', () => {
  let component: NgClassBindingComponent;
  let fixture: ComponentFixture<NgClassBindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgClassBindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgClassBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
