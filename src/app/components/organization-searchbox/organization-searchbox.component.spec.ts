import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationSearchboxComponent } from './organization-searchbox.component';

describe('OrganizationSearchboxComponent', () => {
  let component: OrganizationSearchboxComponent;
  let fixture: ComponentFixture<OrganizationSearchboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganizationSearchboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizationSearchboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
