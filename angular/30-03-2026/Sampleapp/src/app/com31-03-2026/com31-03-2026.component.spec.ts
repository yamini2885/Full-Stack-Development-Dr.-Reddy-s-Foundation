import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Com31032026Component } from './com31-03-2026.component';

describe('Com31032026Component', () => {
  let component: Com31032026Component;
  let fixture: ComponentFixture<Com31032026Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Com31032026Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Com31032026Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
