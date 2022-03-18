import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HappyWordingsComponent } from './happy-wordings.component';

describe('HappyWordingsComponent', () => {
  let component: HappyWordingsComponent;
  let fixture: ComponentFixture<HappyWordingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HappyWordingsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HappyWordingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
