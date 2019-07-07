import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OneFooterComponent } from './one-footer.component';

describe('OneFooterComponent', () => {
  let component: OneFooterComponent;
  let fixture: ComponentFixture<OneFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OneFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OneFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
