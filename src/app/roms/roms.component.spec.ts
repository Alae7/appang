import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RomsComponent } from './roms.component';

describe('RomsComponent', () => {
  let component: RomsComponent;
  let fixture: ComponentFixture<RomsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RomsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
