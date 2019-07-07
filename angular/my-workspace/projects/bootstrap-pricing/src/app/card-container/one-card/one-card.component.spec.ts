import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OneCardComponent } from './one-card.component';

describe('OneCardComponent', () => {
  let component: OneCardComponent;
  let fixture: ComponentFixture<OneCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OneCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OneCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
