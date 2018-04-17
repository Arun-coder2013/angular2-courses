import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgStyleBindingComponent } from './ng-style-binding.component';

describe('NgStyleBindingComponent', () => {
  let component: NgStyleBindingComponent;
  let fixture: ComponentFixture<NgStyleBindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgStyleBindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgStyleBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
