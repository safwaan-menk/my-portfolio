import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TickerFinancialDataComponent } from './ticker-financial-data.component';

describe('TickerFinancialDataComponent', () => {
  let component: TickerFinancialDataComponent;
  let fixture: ComponentFixture<TickerFinancialDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TickerFinancialDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TickerFinancialDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
