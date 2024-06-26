import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoDescriptionComponent } from './todo-description.component';

describe('TodoDescriptionComponent', () => {
  let component: TodoDescriptionComponent;
  let fixture: ComponentFixture<TodoDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodoDescriptionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TodoDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
