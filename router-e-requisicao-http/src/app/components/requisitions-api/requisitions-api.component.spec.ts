import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequisitionsApiComponent } from './requisitions-api.component';

describe('RequisitionsApiComponent', () => {
  let component: RequisitionsApiComponent;
  let fixture: ComponentFixture<RequisitionsApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequisitionsApiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequisitionsApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
