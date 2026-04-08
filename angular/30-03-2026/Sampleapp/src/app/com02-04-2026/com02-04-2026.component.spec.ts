import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Com02042026Component } from './com02-04-2026.component';

describe('Com02042026Component', () => {
  let component: Com02042026Component;
  let fixture: ComponentFixture<Com02042026Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Com02042026Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Com02042026Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
