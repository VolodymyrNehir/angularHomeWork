import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostDetailesComponent } from './post-detailes.component';

describe('PostDetailesComponent', () => {
  let component: PostDetailesComponent;
  let fixture: ComponentFixture<PostDetailesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostDetailesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostDetailesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
