import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortDropdown } from './sort-dropdown';

describe('SortDropdown', () => {
  let component: SortDropdown;
  let fixture: ComponentFixture<SortDropdown>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SortDropdown]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SortDropdown);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
