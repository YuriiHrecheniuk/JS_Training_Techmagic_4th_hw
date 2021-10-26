import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendingTabComponent } from './trending-tab.component';

describe('TrendingComponent', () => {
  let component: TrendingTabComponent;
  let fixture: ComponentFixture<TrendingTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrendingTabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrendingTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
