import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CircleListComponent } from '@src/app/components/circle-list/circle-list.component';

describe('CircleListComponent', () => {
  let component: CircleListComponent;
  let fixture: ComponentFixture<CircleListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CircleListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CircleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
