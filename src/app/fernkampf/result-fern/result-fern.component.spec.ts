import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultFernComponent } from './result-fern.component';

describe('ResultFernComponent', () => {
  let component: ResultFernComponent;
  let fixture: ComponentFixture<ResultFernComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultFernComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResultFernComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
