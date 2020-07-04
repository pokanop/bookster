import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookCardDialogComponent } from '@src/app/components/book-card-dialog/book-card-dialog.component';

describe('BookCardDialogComponent', () => {
  let component: BookCardDialogComponent;
  let fixture: ComponentFixture<BookCardDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookCardDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookCardDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
