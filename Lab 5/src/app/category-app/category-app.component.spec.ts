import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryAppComponent } from './category-app.component';

describe('CategoryAppComponent', () => {
  let component: CategoryAppComponent;
  let fixture: ComponentFixture<CategoryAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoryAppComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CategoryAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
