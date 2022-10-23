import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FernkampfComponent } from './fernkampf.component';

describe('FernkampfComponent', () => {
  let component: FernkampfComponent;
  let fixture: ComponentFixture<FernkampfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FernkampfComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FernkampfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
