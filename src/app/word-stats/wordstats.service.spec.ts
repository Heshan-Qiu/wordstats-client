import { TestBed } from '@angular/core/testing';

import { WordstatsService } from './wordstats.service';

describe('WordstatsService', () => {
  let service: WordstatsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WordstatsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
