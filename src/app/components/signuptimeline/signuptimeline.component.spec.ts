import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignuptimelineComponent } from './signuptimeline.component';

describe('SignuptimelineComponent', () => {
  let component: SignuptimelineComponent;
  let fixture: ComponentFixture<SignuptimelineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignuptimelineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignuptimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
