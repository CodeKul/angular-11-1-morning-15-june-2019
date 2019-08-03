import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TmdComponent } from './tmd.component';

describe('TmdComponent', () => {
  let component: TmdComponent;
  let fixture: ComponentFixture<TmdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TmdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TmdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
