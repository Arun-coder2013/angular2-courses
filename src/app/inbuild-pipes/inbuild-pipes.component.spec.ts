import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InbuildPipesComponent } from './inbuild-pipes.component';

describe('InbuildPipesComponent', () => {
  let component: InbuildPipesComponent;
  let fixture: ComponentFixture<InbuildPipesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InbuildPipesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InbuildPipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
