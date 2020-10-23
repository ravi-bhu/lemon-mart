import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReciptLookupComponent } from './recipt-lookup.component';

describe('ReciptLookupComponent', () => {
  let component: ReciptLookupComponent;
  let fixture: ComponentFixture<ReciptLookupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReciptLookupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReciptLookupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
