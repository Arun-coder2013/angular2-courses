import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeparationConcernComponent } from './separation-concern.component';

describe('SeparationConcernComponent', () => {
  let component: SeparationConcernComponent;
  let fixture: ComponentFixture<SeparationConcernComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeparationConcernComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeparationConcernComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
