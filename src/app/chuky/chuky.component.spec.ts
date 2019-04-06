import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChukyComponent } from './chuky.component';

describe('ChukyComponent', () => {
  let component: ChukyComponent;
  let fixture: ComponentFixture<ChukyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChukyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChukyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
