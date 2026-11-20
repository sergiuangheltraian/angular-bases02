import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Playamar } from './playamar';

describe('Playamar', () => {
  let component: Playamar;
  let fixture: ComponentFixture<Playamar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Playamar],
    }).compileComponents();

    fixture = TestBed.createComponent(Playamar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
