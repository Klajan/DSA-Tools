import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleCollapsableComponent } from './toggle-collapsable.component';

describe('ToggleCollapsableComponent', () => {
  let component: ToggleCollapsableComponent;
  let fixture: ComponentFixture<ToggleCollapsableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToggleCollapsableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToggleCollapsableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
