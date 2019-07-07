import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleInfoComponent } from './title-info.component';

describe('TitleInfoComponent', () => {
  let component: TitleInfoComponent;
  let fixture: ComponentFixture<TitleInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TitleInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TitleInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
