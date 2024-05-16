import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComputerLabComponent } from './computer-lab.component';

describe('ComputerLabComponent', () => {
  let component: ComputerLabComponent;
  let fixture: ComponentFixture<ComputerLabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComputerLabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComputerLabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
