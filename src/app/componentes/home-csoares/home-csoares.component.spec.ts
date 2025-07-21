import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCsoaresComponent } from './home-csoares.component';

describe('HomeCsoaresComponent', () => {
  let component: HomeCsoaresComponent;
  let fixture: ComponentFixture<HomeCsoaresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeCsoaresComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeCsoaresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
