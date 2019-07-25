import { TestBed } from '@angular/core/testing';

import { TodoDoneService } from './todo-done.service';

describe('TodoDoneService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TodoDoneService = TestBed.get(TodoDoneService);
    expect(service).toBeTruthy();
  });
});
