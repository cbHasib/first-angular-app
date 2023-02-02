import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticeTwoDatabindingComponent } from './practice-two-databinding.component';

describe('PracticeTwoDatabindingComponent', () => {
  let component: PracticeTwoDatabindingComponent;
  let fixture: ComponentFixture<PracticeTwoDatabindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PracticeTwoDatabindingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PracticeTwoDatabindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
