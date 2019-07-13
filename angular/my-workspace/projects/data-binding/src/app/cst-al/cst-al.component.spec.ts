import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CstAlComponent } from './cst-al.component';

describe('CstAlComponent', () => {
  let component: CstAlComponent;
  let fixture: ComponentFixture<CstAlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CstAlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CstAlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
