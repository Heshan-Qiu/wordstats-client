import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordStatsComponent } from './word-stats.component';

describe('WordStatsComponent', () => {
  let component: WordStatsComponent;
  let fixture: ComponentFixture<WordStatsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WordStatsComponent]
    });
    fixture = TestBed.createComponent(WordStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
