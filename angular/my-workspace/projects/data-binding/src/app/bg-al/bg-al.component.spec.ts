import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BgAlComponent } from './bg-al.component';

describe('BgAlComponent', () => {
  let component: BgAlComponent;
  let fixture: ComponentFixture<BgAlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BgAlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BgAlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
