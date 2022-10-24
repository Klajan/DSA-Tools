import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MappedSliderComponent } from './mapped-slider.component';

describe('MappedSliderComponent', () => {
  let component: MappedSliderComponent;
  let fixture: ComponentFixture<MappedSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MappedSliderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MappedSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
