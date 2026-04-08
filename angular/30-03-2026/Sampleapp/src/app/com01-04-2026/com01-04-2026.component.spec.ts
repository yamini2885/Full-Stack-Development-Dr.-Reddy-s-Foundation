import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Com01042026Component } from './com01-04-2026.component';

describe('Com01042026Component', () => {
  let component: Com01042026Component;
  let fixture: ComponentFixture<Com01042026Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Com01042026Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Com01042026Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
