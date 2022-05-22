import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentDetailesComponent } from './comment-detailes.component';

describe('CommentDetailesComponent', () => {
  let component: CommentDetailesComponent;
  let fixture: ComponentFixture<CommentDetailesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommentDetailesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentDetailesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
