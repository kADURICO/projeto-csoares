import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginCsoaresComponent } from './login-csoares.component';

describe('LoginCsoaresComponent', () => {
  let component: LoginCsoaresComponent;
  let fixture: ComponentFixture<LoginCsoaresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginCsoaresComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginCsoaresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
