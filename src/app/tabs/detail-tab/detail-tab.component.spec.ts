import {ComponentFixture, TestBed} from '@angular/core/testing';

import {DetailTabComponent} from './detail-tab.component';

describe('AboutComponent', () => {
  let component: DetailTabComponent;
  let fixture: ComponentFixture<DetailTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetailTabComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
