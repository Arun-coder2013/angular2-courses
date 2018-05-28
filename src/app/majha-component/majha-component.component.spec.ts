import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MajhaComponentComponent } from './majha-component.component';

describe('MajhaComponentComponent', () => {
  let component: MajhaComponentComponent;
  let fixture: ComponentFixture<MajhaComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MajhaComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MajhaComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
