import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChemistryLabComponent } from './chemistry-lab.component';

describe('ChemistryLabComponent', () => {
  let component: ChemistryLabComponent;
  let fixture: ComponentFixture<ChemistryLabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChemistryLabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChemistryLabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
