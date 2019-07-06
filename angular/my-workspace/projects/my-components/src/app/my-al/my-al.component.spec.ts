import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyAlComponent } from './my-al.component';

describe('MyAlComponent', () => {
  let component: MyAlComponent;
  let fixture: ComponentFixture<MyAlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyAlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyAlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
