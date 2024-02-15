import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { ETPage } from './et.page';

describe('ETPage', () => {
  let component: ETPage;
  let fixture: ComponentFixture<ETPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ETPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
