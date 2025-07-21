import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalCsoaresComponent } from './principal-csoares.component';

describe('PrincipalCsoaresComponent', () => {
  let component: PrincipalCsoaresComponent;
  let fixture: ComponentFixture<PrincipalCsoaresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrincipalCsoaresComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrincipalCsoaresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
