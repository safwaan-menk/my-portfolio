import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TickerComponent } from './ticker-grid.component';

describe('TickerComponent', () => {
  let component: TickerComponent;
  let fixture: ComponentFixture<TickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TickerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});