import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LittleCompComponent } from './little-comp.component';

describe('LittleCompComponent', () => {
  let component: LittleCompComponent;
  let fixture: ComponentFixture<LittleCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LittleCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LittleCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
