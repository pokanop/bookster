import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookCardActionsComponent } from '@src/app/components/book-card-actions/book-card-actions.component';

describe('BookCardActionsComponent', () => {
  let component: BookCardActionsComponent;
  let fixture: ComponentFixture<BookCardActionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookCardActionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookCardActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
