import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DialogoCsoaresComponent } from './dialogo-csoares.component';

describe('DialogoCsoaresComponent', () => {
  let component: DialogoCsoaresComponent;
  let fixture: ComponentFixture<DialogoCsoaresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogoCsoaresComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogoCsoaresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
