import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChukysComponent } from './chukys.component';

describe('ChukysComponent', () => {
  let component: ChukysComponent;
  let fixture: ComponentFixture<ChukysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChukysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChukysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
