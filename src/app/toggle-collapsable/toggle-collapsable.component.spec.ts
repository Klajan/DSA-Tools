import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToggleCollapsableComponent } from './toggle-collapsable.component';

describe('ToggleCollapsableComponent', () => {
  let component: ToggleCollapsableComponent;
  let fixture: ComponentFixture<ToggleCollapsableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToggleCollapsableComponent ], imports: [ BrowserAnimationsModule ],
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
